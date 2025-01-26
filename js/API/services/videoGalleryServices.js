// END POINTS
const fetchVideoGalleryEndPoint = (projectId) =>
  `${API_BASE_URL}/website/gallery/get-all-galleries/${projectId}?type=${MEDIA_TYPES.VIDEO}`;

async function handleFetchVideoGallery() {
  try {
    const websiteID = getWebsiteID();

    if (websiteID) {
      const response = await fetch(fetchVideoGalleryEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const videoGalleryContainer = document.getElementById(
        "video-gallery-list-container"
      );

      const videoGalleryItemsHTML = (data?.data || [])
        .map(
          (item) => `
          <div class="col-md-6 mb-30">
          <div>
          <iframe
          src="https://www.youtube.com/embed/${item?.mediaDetails?.videoLink
            ?.split("/")
            ?.pop()}"
          style=
            "border:none;
            overflow:hidden;
            aspect-ratio:5/3;
            width:100%;
          
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
        />
        </div>     
        <p class="text">${item?.title}</p>
        </div>     
            `
        )
        .join("");

      videoGalleryContainer.innerHTML = videoGalleryItemsHTML;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchVideoGallery();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
