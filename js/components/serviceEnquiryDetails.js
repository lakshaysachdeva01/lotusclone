function serviceEnquiryDetails() {
  // fetch service type from query
  const urlParams = new URLSearchParams(window.location.search);
  const serviceType = urlParams.get("type");

  const serviceEnquiryDetailsContainer = document.getElementById(
    "service-enquiry-details"
  );
  const serviceEnquiryFormContainer = document.getElementById("service-form");

  serviceEnquiryDetailsContainer.innerHTML = `
  <div class="contact__left">
  <h1 class="sec-title-2 cxu-words">
  Explore Our Comprehensive Services 
  </h1>
  <p class="cxu-lines">Unlock Opportunities, Optimize Operations, and Elevate Your Business with Our Tailored Solutions.</p>
  <div class="box-wrapper cxu-fade" data-ease="back">
    <div class="icon-box">
      <div class="icon">
        <i class="fa-solid fa-phone"></i>
      </div>
      <div class="text">
        <p>Call Us!</p>
        <a href="tel:${WEBSITE_MOBILE_NUMBER}">(+91) ${WEBSITE_MOBILE_NUMBER}</a>
      </div>
    </div>
    <div class="icon-box">
      <div class="icon">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div class="text">
        <p>Mail Us!</p>
        <a href="mailto:${WEBSITE_EMAIL}">${WEBSITE_EMAIL}</a>
      </div>
    </div>
  </div>
  <div class="box-wrapper-2 cxu-fade" data-ease="back">
    <div class="social-share">
      <div class="title">Follow Us</div>
      <ul class="social-media hover-1">
      <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.FACEBOOK}
        ><i class="fa-brands fa-facebook"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.INSTAGRAM}
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.TWITTER}
        ><i class="fa-brands fa-twitter"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.WHATSAPP}
        ><i class="fa-brands fa-whatsapp"></i
      ></a>
    </li>
      </ul>
    </div>
    <div class="location">
      <div class="title">Location</div>
      <p>${WEBSITE_ADDRESS}</p>
    </div>
    </div>
  
 
    </div>`;

  serviceEnquiryFormContainer.innerHTML = `
    <form action="#" onsubmit="onSubmit(event)">
      <input type="text" placeholder="Name" name="${SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" required="true" />
      <input type="email" placeholder="Email" name="${SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" />
      <input type="text" placeholder="Service Type" name="${SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE}" value="${serviceType}" required="true" readonly="true" />
      <input type="tel" placeholder="Contact Number" name="${SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" required="true" />
      <button type="submit" id="service-form-button" class="submit cxu-btn-primary">Submit Now <i class="fa-solid fa-arrow-right"></i></button>
    </form>
  `;
}

serviceEnquiryDetails();
