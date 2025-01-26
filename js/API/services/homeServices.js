// END POINTS
const fetchTestimonialsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/testimonial/get-all-testimonials/${projectId}`;
const fetchPortfoliosEndPoint = (projectId) =>
  `${API_BASE_URL}/website/gallery/get-all-galleries/${projectId}?type=${MEDIA_TYPES.IMAGE}`;
const fetchClientelesEndPoint = (projectId) =>
  `${API_BASE_URL}/website/association/get-all-associations/${projectId}?type=${ASSOCIATE_TYPES.CLIENT}`;
const fetchBannersEndPoint = (projectId) =>
  `${API_BASE_URL}/website/banner/get-all-banners/${projectId}?type=${BANNER_TYPES.POPUP_BANNER}`;

const ENQUIRY_SERVICES_TITLE = [
  {
    title: "PRINT MEDIA",
  },
  {
    title: "ELECTRONIC MEDIA",
  },
  {
    title: "RADIO MEDIA",
  },
  {
    title: "DIGITAL MEDIA",
  },
  {
    title: "OUTDOOR MEDIA",
  },
  {
    title: "MULTIPLEX MEDIA",
  },
  {
    title: "PR SERVICES",
  },
  {
    title: "EVENTS PROMOTIONS",
  },
];

// Utility function to handle fetch requests
async function fetchData(endpoint) {
  try {
    const websiteID = getWebsiteID();

    if (!websiteID) {
      console.error("WebsiteId is not available.");
      return;
    }

    const response = await fetch(endpoint(websiteID), {
      method: FETCH_METHODS.GET,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data?.data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Function to map testimonial data to HTML
function mapTestimonialItem(item) {
  return `
  <div class="item">
  <span>
    <i class="star-rating"></i>
    <i class="star-rating"></i>
    <i class="star-rating"></i>
    <i class="star-rating"></i>
    <i class="star-rating"></i>
  </span>
  <h5>
  ${item?.review}
  </h5>
  <div class="info">
    <div class="author-img">
      <img src="${getFormattedImageURL(item?.image)}" alt="${item?.name}" style="height:60px"  />
    </div>
    <div class="cont">
      <h6>${item?.name}</h6>
      <span>${item?.companyProfile}</span>
    </div>
  </div>
</div>
  `;
}

// Function to map portfolio data to HTML
function mapPortfolioItem(item, index) {
  const portfolioImage =
    item?.mediaDetails?.mediaType === MEDIA_TYPES.IMAGE &&
    item?.mediaDetails?.images?.length > 0
      ? getFormattedImageURL(item?.mediaDetails?.images[0])
      : "img/logo.jpeg";

  const detailPagePath = `portfolio-details.html?id=${item?._id}`;
  const serviceTitle =
    ENQUIRY_SERVICES_TITLE.find(
      (x) => x.title.trim().toLowerCase() === item?.title?.trim()?.toLowerCase()
    )?.title || "";
  return `
  <div class="swiper-slide">
  <div class="portfolio-item">
    <div class="thumb">
      <a href="${detailPagePath}"
        ><img
          src="${portfolioImage}"
          alt="${serviceTitle}"
          data-speed="0.9"
      /></a>
    </div>
    <ul>
      <li>
        <a href="${detailPagePath}" class="cxu-btn-border">View Details</a>
      </li>
      <li>
        <a
          href="service-enquiry.html?type=${serviceTitle}"
          class="cxu-btn-border"
          >Enquire Now</a
        >
      </li>
    </ul>
    <h3 class="title">
      <a href="${detailPagePath}">${serviceTitle}</a>
    </h3>
  </div>
</div>
  `;
}

// Function to map clientele data to HTML
function mapClienteleItem(item) {
  return `
    <div class="swiper-slide">
      <div class="logo">
        <a href=${item?.hyperLink || ""}>
          <img src=${getFormattedImageURL(item?.logo)} alt=${
    item?.name
  } style="max-width:200px;object-fit-contain;" />
        </a>
      </div>
    </div>
  `;
}

// Function to map banner data to HTML
function mapBannerItem(item) {
  return `
    <div class="swiper-slide" style="height: 100%">
      <img src=${getFormattedImageURL(
        item?.image
      )} style="width: 100%; height: 100%; object-fit: cover" />
    </div>
    <div class="swiper-slide" style="height: 100%">
      <img src=${getFormattedImageURL(
        item?.image
      )} style="width: 100%; height: 100%; object-fit: cover" />
    </div>
  `;
}

// to fetch testimonials
async function handleFetchTestimonials() {
  const testimonialData = await fetchData(fetchTestimonialsEndPoint);

  const testimonialContainer = document.getElementById(
    "home-testimonial-container"
  );
  const testimonialItems =
    testimonialData?.length > 0
      ? testimonialData?.map((item) => mapTestimonialItem(item))?.join("")
      : "";

  testimonialContainer.innerHTML = testimonialItems;
}

// to fetch portfolios
async function handleFetchPortfolios() {
  await fetchData(
    fetchPortfoliosEndPoint,
    "home-portfolio-container",
    mapPortfolioItem
  );
}

// to fetch clienteles
async function handleFetchClienteles() {
  await fetchData(
    fetchClientelesEndPoint,
    "home-clientele-container",
    mapClienteleItem
  );
}

// to fetch banners
async function handleFetchBanners() {
  await fetchData(fetchBannersEndPoint, "home-banner-container", mapBannerItem);
}

const homeServicesCallback = async () => {
  await handleFetchTestimonials();
  reUploadSwiperClassesScript();
  // await handleFetchPortfolios();
  // await handleFetchClienteles();
  // await handleFetchBanners();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
