const API_BASE_URL =
  "https://api.webbuilder.technolitics.com/api/v1/website-builder";
// const API_BASE_URL = "http://localhost:9685/api/v1/website-builder";
const WEBSITE_UID = "PRJ00002";
const S3_BASE_URL =
  "https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/websitebuilder-s3-bucket";

const WEBSITE_DATA_KEY = "websiteData";
const WEBSITE_ID_KEY = "websiteProjectId";

const FETCH_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const MEDIA_TYPES = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
};

const ASSOCIATE_TYPES = {
  ASSOCIATE: "ASSOCIATE",
  CLIENT: "CLIENT",
};
const BANNER_TYPES = {
  HOME_BANNER: "HOME_BANNER",
  POPUP_BANNER: "POPUP_BANNER",
};

const CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  REMARKS: "remarks",
};

const CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  REMARKS: "remarks",
  FILE: "files.fileOne",
};

const ROOM_SERVICE_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  SERVICE_TYPE: "serviceType",
  ADULT_COUNT: "strings.stringThree",
  CHILDREN_COUNT: "strings.stringFour",
  START_DATE: "dates.dateOne",
  END_DATE: "dates.dateTwo",
};

const WEDDING_AND_MICE_ENQUIRY_DYNAMIC_FIELDS_KEYS = {
  EMAIL: "email",
  REMARKS: "remarks",
  NAME: "strings.stringOne",
  CONTACT_NUMBER: "strings.stringTwo",
  ENQUIRY_TYPE: "enquiryType",
};

const ENQUIRY_TYPES = {
  WEDDING_ENQUIRY: "WEDDING_ENQUIRY",
  MICE_ENQUIRY: "MICE_ENQUIRY",
};
