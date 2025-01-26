// END POINTS

const CREATE_WEDDING_AND_MICE_ENQUIRY_END_POINT = `${API_BASE_URL}/website/dealership-enquiry/create-dealership-enquiry`;
async function handleCreateWeddingAndMiceEnquiry(event) {
  const toast = document.getElementById("custom-toast");

  try {
    event.preventDefault();
    const weddingAndMiceForm = event.target;
    const websiteID = getWebsiteID();

    const currentPage = window.location.pathname.split("/").pop();
    let enquiryType = "";

    if (currentPage === "wedding.html") {
      enquiryType = ENQUIRY_TYPES.WEDDING_ENQUIRY;
    } else if (currentPage === "mice.html") {
      enquiryType = ENQUIRY_TYPES.MICE_ENQUIRY;
    }

    const payload = {
      [WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        weddingAndMiceForm.querySelector(
          `input[name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"]`
        ).value,
      [WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        weddingAndMiceForm.querySelector(
          `input[name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"]`
        ).value,
      [WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        weddingAndMiceForm.querySelector(
          `input[name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}"]`
        ).value,
      [WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS]:
        weddingAndMiceForm.querySelector(
          `input[name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"]`
        ).value,
      [WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.ENQUIRY_TYPE]: enquiryType,
      [WEBSITE_ID_KEY]: websiteID,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(CREATE_WEDDING_AND_MICE_ENQUIRY_END_POINT, {
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

    weddingAndMiceForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    console.error("Form submission error", error);
  }
  document.getElementById(
    "wedding-and-mice-enquiry-form-button"
  ).disabled = false;
}

const onSubmit = (event) => {
  event.preventDefault();
  document.getElementById(
    "wedding-and-mice-enquiry-form-button"
  ).disabled = true;
  handleCreateWeddingAndMiceEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
