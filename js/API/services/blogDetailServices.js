// END POINTS
const fetchBlogDetailsEndPoint = (projectId, slug) =>
  `${API_BASE_URL}/website/post/get-post-by-slug/${projectId}?slug=${slug}`;
const fetchBlogsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;

// to fetch blog details
async function handleFetchBlogDetails() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    const urlParams = new URLSearchParams(window.location.search);
    const blogSlug = urlParams.get("slug");

    const currentPagePath = window.location.pathname;

    if (websiteID && blogSlug) {
      const response = await fetch(
        fetchBlogDetailsEndPoint(websiteID, blogSlug),
        {
          method: FETCH_METHODS.GET,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const blogContainer = document.getElementById("blog-details-container");
      const blogDetailBreadcrumbContainer = document.getElementById(
        "blog-detail-breadcrumb-container"
      );

      const blogDetail = data?.data;

      // setting meta description

      const metaTitle = blogDetail?.seoDetails?.title || "Blog Details";
      const metaDescription =
        blogDetail?.seoDetails?.metaDescription ||
        blogDetail?.seoDetails?.title;
      const metaKeywords =
        blogDetail?.seoDetails?.tags?.length > 0
          ? blogDetail?.seoDetails?.tags.join(", ")
          : blogDetail?.seoDetails?.title;
      const metaImage =
        blogDetail?.banner?.bannerType === MEDIA_TYPES.IMAGE
          ? getFormattedImageURL(blogDetail?.banner?.image)
          : "https://www.atulpublicity.com/assets/imgs/logo/meta_image.png";

      // Update meta tags with dynamic content
      document.title = metaTitle;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", metaDescription);
      document
        .querySelector('meta[name="keywords"]')
        .setAttribute("content", metaKeywords);
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", metaTitle);
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute("content", metaDescription);
      document
        .querySelector('meta[property="og:image"]')
        .setAttribute("content", metaImage);

      const postedDate = formatDate(blogDetail?.createdAt);
      const blogImage =
        blogDetail?.banner?.bannerType === MEDIA_TYPES.IMAGE
          ? getFormattedImageURL(blogDetail?.banner?.image)
          : "img/logo.jpeg";

      blogDetailBreadcrumbContainer.innerHTML = `
          <div class="col-md-12 text-left caption">
            <h5><a href="blog.html">Blog</a></h5>
            <h2>${blogDetail?.title}</h2>
            <div class="post">
              <div class="date-comment">
                <i class="ti-calendar"></i> ${postedDate}
              </div>
            </div>
          </div>
          `;

      const blogDetailsHTML = `
          <div class="blog__details">
          <div class="blog__details-top">

          <img src="${blogImage}" class="mb-30" alt="" />
            <h2>${blogDetail?.title}</h2>
            <p>
              ${blogDetail?.description}
            </p>
            ${
              blogDetail?.multipleDescriptions?.length > 0
                ? blogDetail?.multipleDescriptions
                    ?.map(
                      (item) => `
              <p>
                ${item?.description}
              </p>

              ${
                item?.singleImage?.image
                  ? `<div class="mb-20" style="width: 100%;">
                <a
                    href=${item?.singleImage?.hyperLink}
                    target="_blank"
                    style="width: 100%;"
                    >
                <img src=${getFormattedImageURL(
                  item?.singleImage?.image
                )} alt="" style="width: 100%;max-height: 300px;object-fit: cover;" />
                </a>
                </div>
                `
                  : ""
              }

              ${
                item?.multipleImages?.length > 0
                  ? `
                  <div class="row mb-20">
                  ${item?.multipleImages
                    ?.map(
                      (image) =>
                        `
                        <div class="col-md-6">
                        <img src=${getFormattedImageURL(
                          image
                        )} alt="" style="width:100%;aspect-ratio:4/3;object-fit:cover;" />
                        </div>
                        `
                    )
                    ?.join("")}
                  </div>              
                `
                  : ""
              }
             
              ${
                item?.youtube
                  ? `
                  <iframe
                  src="https://www.youtube.com/embed/${item?.youtube
                    ?.split("/")
                    ?.pop()}"
                  style=
                    "border:none;
                    overflow:hidden;
                    height:300px;
                    width:100%;
                    margin:20px 0px;"
                  
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                />
                `
                  : ""
              }
             
              ${
                item?.facebook
                  ? `
                  <iframe
                  src="https://www.facebook.com/plugins/post.php?href=${item?.facebook}&width=1200&show_text=true&height=520&appId"
                  style=
                    "border:none;
                    overflow:hidden;
                    height:300px;
                    width:100%;
                    margin:20px 0px;"
                  
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                />
                `
                  : ""
              }
             
              ${
                item?.instagram
                  ? `
                  <iframe
                  src="https://www.instagram.com/p/${
                    item?.instagram?.split("/")[4]
                  }/embed"
                  style=
                    "border:none;
                    overflow:hidden;
                    height:300px;
                    width:100%;
                    margin:20px 0px;"
                  
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                />
                `
                  : ""
              }
             
              ${
                item?.twitter
                  ? `
                  <iframe
                  src="https://twitframe.com/show?url=${item?.twitter}"
                  style=
                    "border:none;
                    overflow:hidden;
                    height:300px;
                    width:100%;
                    margin:20px 0px;"
                  
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                />
                `
                  : ""
              }

              `
                    )
                    ?.join("")
                : ""
            }

          <div class="blog__details-btm cxu-fade" data-ease="back">
            ${
              blogDetail?.seoDetails?.tags?.length > 0
                ? `
              <div class="blog-sidebar mb-20">
              <div class="widget">
              <div class="widget-title">
              <h3 class="text">Tags</h3>
              </div>
              <ul class="tags">
              ${blogDetail?.seoDetails?.tags
                ?.map(
                  (item) =>
                    `<li><a class="cxu-btn-border" href="#">${item}</a></li>`
                )
                ?.join("")}
              </ul>
            </div>
            </div>
            `
                : ""
            }
            <h3 class="text">Share</h3>
              <ul class="social-media-share">
                <li>
                  <a
                    href="https://www.facebook.com/sharer.php?u=${currentPagePath}"
                    target="_blank"
                    ><img style="width: 100%;aspect-ratio: 1/1;" src="img/news/facebook.png" /></a>
                </li>
                <li>
                  <a href="https://twitter.com/intent/tweet?text=${currentPagePath}" target="_blank"
                    ><img style="width: 100%;aspect-ratio: 1/1;" src="img/news/twitter.png" /></a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?text=${currentPagePath}" target="_blank">
                  <img style="width: 100%;aspect-ratio: 1/1;" src="img/news/whatsapp.png" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  `;
      // Join the array of HTML strings into a single string

      // set it in the innerHTML of given element by id
      blogContainer.innerHTML = blogDetailsHTML;
    } else {
      console.error("WebsiteId or BlogID is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

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

      const blogContainer = document.getElementById("recent-blogs-container");
      // Assuming data?.data is an array
      const blogItemsHTML = (data?.data || [])?.map((item) => {
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

      // set it in the innerHTML of given element by id
      blogContainer.innerHTML = `
          
  ${blogItemsHTML?.length > 0 ? blogItemsHTML?.join("") : ""}
                
          `;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function homeServicesCallback() {
  await handleFetchBlogDetails();
  await handleFetchBlogs();
}

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
