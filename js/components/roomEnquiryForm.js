function roomEnquiryForm() {
  const roomFormContainer = document.getElementById(
    "room-service-enquiry-form"
  );

  roomFormContainer.innerHTML = `
  <form onsubmit="onSubmit(event)" class="form1 clearfix">
            <div class="row">
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Name</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Name" required name="${
                      ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME
                    }" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Contact Number</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Contact Number" required minLength="10" maxLength="10" name="${
                      ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER
                    }" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Email</label>
                  <div class="input1_inner-two">
                    <input type="text" placeholder="Email" name="${
                      ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL
                    }" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c5">
              <div class="select1_wrapper border-form">
                <label>Rooms</label>
                <div class="select1_inner">
                  <select class="select2 select" style="width: 100%" name="${
                    ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.SERVICE_TYPE
                  }">
                  
                  ${Object.values(roomServiceTypes)
                    .map(
                      (item) =>
                        `<option value="${item}">${convertToFormattedString(
                          item
                        )}</option>`
                    )
                    .join("")}
                  </select>
                </div>
              </div>
            </div>
              <div class="col-md-6 c1">
                <div class="input1_wrapper border-form">
                  <label>Start Date</label>
                  <div class="input1_inner">
                    <input
                      type="text"
                      class="form-control input datepicker"
                      required
                      placeholder="Start Date"
                      name="${
                        ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.START_DATE
                      }"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c2">
                <div class="input1_wrapper border-form">
                  <label>End Date</label>
                  <div class="input1_inner">
                    <input
                      type="text"
                      class="form-control input datepicker"
                      required
                      placeholder="End Date"
                      name="${
                        ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.END_DATE
                      }"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 c3">
                <div class="select1_wrapper border-form" style="width: 100%">
                  <label>Adults</label>
                  <div class="select1_inner" style="width: 100%">
                    <select class="select2 select" style="width: 100%" name="${
                      ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.ADULT_COUNT
                    }">
                      <option value="">Select Adult</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6 c4">
                <div class="select1_wrapper border-form">
                  <label>Children</label>
                  <div class="select1_inner">
                    <select class="select2 select" style="width: 100%" name="${
                      ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS.CHILDREN_COUNT
                    }">
                    <option value="">Select Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                      <option value="4">4 Children</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col3 c6 mb-20">
              <button type="submit" id="room-enquiry-form-button" class="btn-form1-submit">Check Now</button>
            </div>
          </form>
  `;
}

roomEnquiryForm();
