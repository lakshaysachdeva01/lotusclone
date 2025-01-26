// END POINTS

const CREATE_ROOM_ENQUIRY_END_POINT = `${API_BASE_URL}/website/service-enquiry/create-service-enquiry`;

async function handleCreateRoomEnquiry(event) {
  const toast = document.getElementById("custom-toast");

  try {
    event.preventDefault();
    const contactForm = event.target;
    const websiteID = getWebsiteID();

    const payload = {
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        contactForm.querySelector(
          `input[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        contactForm.querySelector(
          `input[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        contactForm.querySelector(
          `input[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.START_DATE]:
        contactForm.querySelector(
          `input[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.START_DATE}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.END_DATE]:
        contactForm.querySelector(
          `input[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.END_DATE}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE]:
        contactForm.querySelector(
          `select[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.ADULT_COUNT]:
        contactForm.querySelector(
          `select[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.ADULT_COUNT}"]`
        ).value,
      [ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CHILDREN_COUNT]:
        contactForm.querySelector(
          `select[name="${ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CHILDREN_COUNT}"]`
        ).value,
      [WEBSITE_ID_KEY]: websiteID,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(CREATE_ROOM_ENQUIRY_END_POINT, {
      method: FETCH_METHODS.POST,
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Display a toast message
    callToastMessage(toast, data?.message, "var(--success)");

    contactForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    console.error("Form submission error", error);
  }
  document.getElementById("room-enquiry-form-button").disabled = false;
}

const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById("room-enquiry-form-button").disabled = true;
  handleCreateRoomEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
