import { ensureDataIsValid } from "./ensureDataIsValid.middleware";
import { ensureAuth } from "./ensureAuth.middleware";
import { ensureCsvIsValid } from "./ensureCsvIsValid.middleware";
import { upload } from "./uploadFile.middleware";
import { convertCsv } from "./convertCsv";

const middlewares = {
    ensureDataIsValid,
    ensureAuth,
    ensureCsvIsValid,
    upload,
    convertCsv,
};

export default middlewares;
