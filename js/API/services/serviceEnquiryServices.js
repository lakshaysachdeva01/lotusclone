// END POINTS
const CREATE_CONTACT_ENQUIRY_END_POINT = `${API_BASE_URL}/website/service-enquiry/create-service-enquiry`;

async function handleCreateServiceEnquiry(event) {
  const toast = document.getElementById("custom-toast");

  try {
    event.preventDefault();
    const serviceForm = event.target;
    const websiteID = getWebsiteID();

    const payload = {
      [SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        serviceForm.elements[SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME].value,
      [SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        serviceForm.elements[SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]
          .value,
      [SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        serviceForm.elements[SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL].value,
      [SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE]:
        serviceForm.elements[SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE]
          .value,
      [WEBSITE_ID_KEY]: websiteID,
    };

    // Set the Content-Type header to indicate JSON format
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(CREATE_CONTACT_ENQUIRY_END_POINT, {
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

    serviceForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    // Handle errors, e.g., display an error message
    console.error("Form submission error", error);
  }
  document.getElementById("service-form-button").disabled = false;
}

const onSubmit = (event) => {
  document.getElementById("service-form-button").disabled = true;
  handleCreateServiceEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
