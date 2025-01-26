function careerDetails() {
  const careerDetailsContainer = document.getElementById(
    "career-details-container"
  );
  const careerFormContainer = document.getElementById("career-form-container");

  careerDetailsContainer.innerHTML = `
  <div class="row mb-30">
              <div class="col-lg-4 col-md-12">
                <div class="reservations mb-15">
                  <div class="icon"><span class="flaticon-call"></span></div>
                  <div class="text">
                    <p>Reservation</p>
                    <a href="tel:${WEBSITE_MOBILE_NUMBER}">${WEBSITE_MOBILE_NUMBER}</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="reservations mb-15">
                  <div class="icon">
                    <span class="flaticon-envelope"></span>
                  </div>
                  <div class="text">
                    <p>Email Info</p>
                    <a href="mailto:${WEBSITE_EMAIL}"
                      >${WEBSITE_EMAIL}</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="reservations mb-15">
                  <div class="icon">
                    <span class="flaticon-location-pin"></span>
                  </div>
                  <div class="text">
                    <p>Address</p>
                    <a target="_blank" href="${WEBSITE_MAP_LINK}">
                    ${WEBSITE_ADDRESS}
                    </a>
                  </div>
                </div>
              </div>
            </div>
 `;

  careerFormContainer.innerHTML = `
  <div>
  <h3>Submit Your Details</h3>
  <form
    class="contact__form"
    onsubmit="onSubmit(event)"
  >
 
    <!-- form elements -->
    <div class="row">
      <div class="col-md-6 form-group">
        <input
          name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"
          type="text"
          placeholder="Your Name *"
          required
        />
      </div>
      <div class="col-md-6 form-group">
        <input
          name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}"
          type="email"
          placeholder="Your Email" 
        />
      </div>
      <div class="col-md-6 form-group">
        <input
          name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"
          type="text"
          minLength="10" 
          maxLength="10"
          placeholder="Your Number *"
          required
        />
      </div>
      <div class="col-md-6 form-group">
        <input
          name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.FILE}"
          type="file"
          placeholder="Attach Resume *"
          required
        />
      </div>

      <div class="col-md-12 form-group">
        <textarea
          name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"
          id="message"
          cols="30"
          rows="4"
          placeholder="Message"
        ></textarea>
      </div>
      <div class="col-md-12 mt-10">
        <button type="submit" id="career-form-button" class="butn-dark2">
          <span>Send Message</span>
        </button>
      </div>
    </div>
  </form>
</div>
  `;
}

careerDetails();
