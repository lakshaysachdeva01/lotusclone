function roomDetailContentDesign() {
  const roomDetailContentContainer = document.getElementById(
    "room-detail-content-container"
  );
  const roomDetailFormTitleContainer =
    document.getElementById("service-type-title");
  const urlParams = new URLSearchParams(window.location.search);
  const roomType = urlParams.get("type");
  const roomDetails = roomDetailsData.find((item) => item.type === roomType);

  const roomDetailCarousel = document.getElementById("room-image-carousel");

  const getImagesByRoomType = () => {
    switch (roomType) {
      case roomServiceTypes.DELUX_ROOMS:
        return ["deluxe1.jpeg"];
      case roomServiceTypes.SUPER_DELUX_ROOMS:
        return ["super-deluxe1.jpeg"];
      case roomServiceTypes.SUITE_ROOMS:
        return ["suite1.jpeg", "suite2.jpeg"];
      case roomServiceTypes.SEMI_GRAND_DELUXE:
        return ["semi-grand-deluxe1.jpeg"];
      case roomServiceTypes.GRAND_DELUXE:
        return ["grand-deluxe1.jpeg"];
      default:
        return ["suite3.jpeg"];
    }
  };

  const roomImages = getImagesByRoomType();

  roomDetailCarousel.innerHTML = `
${roomImages
  .map(
    (imageName) => `
  <div
      class="text-center item bg-img"
      data-overlay-dark="5"
      data-background="img/rooms/${imageName}"
    >
      <div class="banner-header full-height section-padding">
        <div class="container" style="height: 100%">
          <div
            class="row"
            style="height: 100%; display: flex; align-items: center"
          >
            <div class="col-md-12 text-center caption">
              <h5>Our Facilities</h5>
              <h1>${roomDetails.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  )
  .join("")}

  ${
    roomType !== roomServiceTypes.SEMI_GRAND_DELUXE &&
    roomType !== roomServiceTypes.GRAND_DELUXE
      ? `
    <div
          class="text-center item bg-img"
          data-overlay-dark="5"
          data-background="img/rooms/suite2.jpeg"
        >
          <div class="banner-header full-height section-padding">
            <div class="container" style="height: 100%">
              <div
                class="row"
                style="height: 100%; display: flex; align-items: center"
              >
                <div class="col-md-12 text-center caption">
                  <h5>Our Facilities</h5>
                  <h1>${roomDetails.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
      : ""
  }

  ${
    roomType !== roomServiceTypes.SEMI_GRAND_DELUXE &&
    roomType !== roomServiceTypes.GRAND_DELUXE
      ? `<div
          class="text-center item bg-img"
          data-overlay-dark="5"
          data-background="img/rooms/suite4.jpeg"
        >
          <div class="banner-header full-height section-padding">
            <div class="container" style="height: 100%">
              <div
                class="row"
                style="height: 100%; display: flex; align-items: center"
              >
                <div class="col-md-12 text-center caption">
                  <h5>Our Facilities</h5>
                  <h1>${roomDetails.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
      : ""
  }

      
      
      `;

  roomDetailContentContainer.innerHTML = `
  <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span>
              <i class="star-rating"></i>
              <i class="star-rating"></i>
              <i class="star-rating"></i>
              <i class="star-rating"></i>
              <i class="star-rating"></i>
            </span>
            <div class="section-title">${roomDetails.title}</div>
          </div>
          <div class="col-md-8">
          ${roomDetails.description
            .split("<br/>")
            .map((description) => `<p class="mb-30">${description}</p>`)
            .join("")}
          </div>
          <div class="col-md-3 offset-md-1">
            <h6>Amenities</h6>
            <ul class="list-unstyled page-list mb-30">
            ${roomDetails.amenities
              .map((item) => {
                if (item?.type === "image") {
                  return `
                <li>
                  <div class="page-list-icon">
                    <img style="width: 18px;aspect-ratio: 1/1;" src="${item.icon}" />
                  </div>
                  <div class="page-list-text">
                    <p>${item.name}</p>
                  </div>
                </li>  
                  `;
                }
                return `
              <li>
                <div class="page-list-icon">
                  <span class="${item.icon}"></span>
                </div>
                <div class="page-list-text">
                  <p>${item.name}</p>
                </div>
              </li>  
                `;
              })
              .join("")}
              
            </ul>
          </div>
        </div>
      </div>
  `;

  roomDetailFormTitleContainer.innerHTML = roomDetails.title;
}

roomDetailContentDesign();
