
const utils = require("../utils");

class BaseController {
    
    constructor() {
        this.successResponse = this.successResponse.bind(this);
        this.successJsonParseResponse = this.successJsonParseResponse.bind(this);
        this.errorResponse = this.errorResponse.bind(this);
        this.fillErrorResponse = this.fillErrorResponse.bind(this);
    }

    successResponse(successObject, metadata) {
        return utils.successResponse(successObject, metadata);
    }

    successJsonParseResponse(successObject, metadata) {
        return this.successResponse(JSON.parse(successObject), metadata);
    }

    errorResponse(errorCode, errorDescription) {
        return utils.errorResponse(errorCode, errorDescription);
    }

    fillErrorResponse(res, errorCode, errorMessageOrErrorClass) {
        return utils.fillErrorResponse(res, errorMessageOrErrorClass, errorCode);
    }
}

module.exports = BaseController;