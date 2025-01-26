// END POINTS
const fetchBlogsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;

// to fetch blogs
async function handleFetchBlogs() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    if (websiteID) {
      const response = await fetch(fetchBlogsEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const blogContainer = document.getElementById("blog-list-container");

      // Assuming data?.data is an array
      const blogItemsHTML = (data?.data || [])
        .map((item) => {
          const postedDate = formatDate(item?.createdAt);
          const detailPagePath = `blog-details.html?slug=${item?.seoDetails?.slug}`;
          const blogImage =
            item?.banner?.bannerType === MEDIA_TYPES.IMAGE
              ? getFormattedImageURL(item?.banner?.image)
              : "img/logo.jpeg";

          return `
          <div class="col-md-12">
                <div class="item">
                  <div class="post-img">
                    <a href="${detailPagePath}">
                      <img src="${blogImage}" alt="${item?.title}" />
                    </a>
                    <div class="date">
                      <a href="${detailPagePath}"> <span>${
            postedDate.split(" ")[1]
          }</span> <i>${postedDate.split(" ")[0]}</i> </a>
                    </div>
                  </div>
                  <div class="post-cont">
                    <a href="${detailPagePath}"><span class="tag">${convertToFormattedString(
            item?.category
          )}</span></a>
                    <h5>
                      <a href="${detailPagePath}"
                        >${item?.title}</a
                      >
                    </h5>
                    <p>
                      ${item?.description}
                    </p>
                    <div class="butn-dark">
                      <a href="${detailPagePath}"><span>Read More</span></a>
                    </div>
                  </div>
                </div>
              </div>         
        `;
        })
        .join("");

      const recentBlogContainer = document.getElementById(
        "recent-blogs-container"
      );
      // Assuming data?.data is an array
      const recentBlogItemsHTML = (data?.data || [])?.map((item) => {
        const detailPagePath = `blog-details.html?slug=${item?.seoDetails?.slug}`;
        const blogImage =
          item?.banner?.bannerType === MEDIA_TYPES.IMAGE
            ? getFormattedImageURL(item?.banner?.image)
            : "img/logo.jpeg";
        return `
          <li>
          <div class="thum"><img src="${blogImage}" alt="${item?.title}" /></div>
          <a href="${detailPagePath}">${item?.title}</a>
        </li>                  
    `;
      }); // Join the array of HTML strings into a single string

      blogContainer.innerHTML = blogItemsHTML;

      // set it in the innerHTML of given element by id
      recentBlogContainer.innerHTML = `
            
    ${recentBlogItemsHTML?.length > 0 ? recentBlogItemsHTML?.join("") : ""}
                  
            `;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchBlogs();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
