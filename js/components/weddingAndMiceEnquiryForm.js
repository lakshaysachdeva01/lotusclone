function weddingAndMiceEnquiryForm() {
  const weddingAndMiceFormContainer = document.getElementById(
    "wedding-and-mice-enquiry-form"
  );

  weddingAndMiceFormContainer.innerHTML = `
  <form onsubmit="onSubmit(event)" class="form1 clearfix">
            <div class="row">
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Name</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Name" required name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Contact Number</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Contact Number" required minLength="10" maxLength="10" name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Email</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Email" name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" />
                  </div>
                </div>
              </div>
            
              
            <div class="col-md-6 c1">
            <div class="input1_wrapper border-form">
              <label>Name</label>
              <div class="input1_inner-two">
                <input type="text" placeholder="Remarks" required name="${WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}" />
              </div>
            </div>
          </div>
        
            </div>

            <div class="col3 c6 mb-20">
              <button type="submit" id="wedding-and-mice-enquiry-form-button" class="btn-form1-submit">Submit</button>
            </div>
          </form>
  `;
}

weddingAndMiceEnquiryForm();
