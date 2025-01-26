// END POINTS
const fetchImageGalleryEndPoint = (projectId) =>
  `${API_BASE_URL}/website/gallery/get-all-galleries/${projectId}?type=${MEDIA_TYPES.IMAGE}`;

async function handleFetchImageGallery() {
  try {
    const websiteID = getWebsiteID();

    if (websiteID) {
      const response = await fetch(fetchImageGalleryEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const imageGalleryContainer = document.getElementById(
        "image-gallery-list-container"
      );

      const imageGalleryItemsHTML = (data?.data || [])
        .map((item, index) => {
          const galleryImage =
            item?.mediaDetails?.mediaType === MEDIA_TYPES.IMAGE &&
            item?.mediaDetails?.images?.length > 0
              ? getFormattedImageURL(item?.mediaDetails?.images[0])
              : "img/logo.jpeg";
          // if (index === -1) {
          return `
              <div class="col-md-6 gallery-item">
            <div class="img-card">
              <a href="albumimages.html?id=${item?._id}" title="" class="img-zoom">
                <div class="img-block">
                  <div class="wrapper-img">
                    <img
                      src="${galleryImage}"
                      class="img-fluid mx-auto d-block"
                      alt="work-img"
                    />
                  </div>
                  <div class="title-block">
                    <h6>${item?.title}</h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
              `;
          // }
          // return `
          //   <div class="col-md-4 gallery-item">
          //   <div class="img-card">
          //     <a href="${galleryImage}" title="${item?.title}" class="img-zoom">
          //       <div class="img-block">
          //         <div class="wrapper-img">
          //           <img
          //             src="${galleryImage}"
          //             class="img-fluid mx-auto d-block"
          //             alt="work-img"
          //           />
          //         </div>
          //         <div class="title-block">
          //           <h6>${item?.title}</h6>
          //         </div>
          //       </div>
          //     </a>
          //   </div>
          // </div>

          //   `;
        })
        .join("");

      imageGalleryContainer.innerHTML = imageGalleryItemsHTML;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchImageGallery();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
