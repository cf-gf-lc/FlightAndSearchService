const ClientErrorCodes = Object.freeze({
    BAD_REQUEST : 400,
    UNAUTHORISED : 401,
    NOT_FOUND : 404
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED :501,
});

const SuccessCodes = Object.freeze({
    CREATED : 201,
    OK : 200,
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}