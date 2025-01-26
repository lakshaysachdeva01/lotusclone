// END POINTS
const fetchPortfolioDetailsEndPoint = (projectId, id) =>
  `${API_BASE_URL}/website/gallery/get-gallery-by-id/${projectId}?id=${id}`;

async function handleFetchPortfolioDetails() {
  try {
    const websiteID = getWebsiteID();
    const urlParams = new URLSearchParams(window.location.search);
    const portfolioID = urlParams.get("id");

    if (websiteID && portfolioID) {
      const response = await fetch(
        fetchPortfolioDetailsEndPoint(websiteID, portfolioID),
        {
          method: FETCH_METHODS.GET,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const portfolioContainer = document.getElementById(
        "portfolio-detail-container"
      );
      const portfolioDetail = data?.data;
      const portfolioImages =
        portfolioDetail?.mediaDetails?.mediaType === MEDIA_TYPES.IMAGE &&
        portfolioDetail?.mediaDetails?.images?.length > 0
          ? portfolioDetail?.mediaDetails?.images
          : [];

      const portfolioDetailsHTML = `
        <div class="portfolio__details">
          <div class="portfolio__details-top">
            <div class="content">
              <h2 class="title cxu-words">${portfolioDetail?.title}</h2>
              <div class="body">
                <p class="cxu-lines">${portfolioDetail?.description}</p>
              </div>
            </div>

          </div>
          ${
            portfolioImages?.length > 0
              ? `<div class="img-box">
              <div class="img-1">
                <img src=${getFormattedImageURL(portfolioImages[0])} alt=${
                  portfolioDetail.title
                } data-speed="0.9" style="width:100%;height:100%;object-fit:cover;" />
              </div>
              ${
                portfolioImages?.length > 1
                  ? `<div class="img-2">
                  <img src=${getFormattedImageURL(portfolioImages[1])} alt=${
                      portfolioDetail.title
                    } style="width:100%;height:100%;object-fit:cover;" />
                </div>`
                  : ""
              }
            </div>`
              : ""
          }
          <div class="img-box-2" style="margin: 30px 0">
            ${
              portfolioImages?.length > 2
                ? portfolioImages?.slice(2, portfolioImages.length)?.map(
                    (image) => `<div class="img-2">
                  <img src=${getFormattedImageURL(image)} alt=${
                      portfolioDetail?.title
                    } style="width:100%;height:100%;object-fit:cover;" />
                </div>`
                  )
                : ""
            }
          </div>
        </div>
      `;

      portfolioContainer.innerHTML = portfolioDetailsHTML;
    } else {
      console.error("WebsiteId or PortfolioID is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchPortfolioDetails();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
