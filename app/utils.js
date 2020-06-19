
const errorResponse = (errorCode, errorDescription) => {
    return {
        'opResult': false,
        "error": {
            "code": errorCode,
            "description": errorDescription
        }
    }
}

const successResponse = (data, metadata) => {
    let obj = {
        'opResult': true,
        'data': data
    };
    if(metadata) {
        obj.metadata = metadata;
    }
    return obj;
}

const fillErrorResponse = (res, err, errorCode) => {
    const errMsg = (err && err.message) ? err.message : err;
    res.status(errorCode);
    let objectRensponse = {
        error: errMsg
    };
    console.error(errMsg, {
        error: err
    });
    res.json(errorResponse(objectRensponse));
};

module.exports = {
    errorResponse: errorResponse,
    successResponse: successResponse,
    fillErrorResponse: fillErrorResponse
};