function contactEnquiryForm() {
  const contactFormContainer = document.getElementById("contact-enquiry-form");

  contactFormContainer.innerHTML = `
  <form onsubmit="onSubmit(event)" class="form1 clearfix">
            <div class="row">
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Name</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Name" required name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Contact Number</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Contact Number" required minLength="10" maxLength="10" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Email</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Email" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" />
                  </div>
                </div>
              </div>
            
              
            <div class="col-md-6 c1">
            <div class="input1_wrapper border-form">
              <label>Name</label>
              <div class="input1_inner-two">
                <input type="text" placeholder="Remarks" required name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}" />
              </div>
            </div>
          </div>
        
            </div>

            <div class="col3 c6 mb-20">
              <button type="submit" id="contact-form-button" class="btn-form1-submit">Submit</button>
            </div>
          </form>
  `;
}

contactEnquiryForm();
