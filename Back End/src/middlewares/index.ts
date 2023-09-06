import { ensureCsvIsValid } from "./ensureCsvIsValid.middleware";
import { upload } from "./uploadFile.middleware";
import { convertCsv } from "./convertCsv";

const middlewares = { ensureCsvIsValid, upload, convertCsv };

export default middlewares;
