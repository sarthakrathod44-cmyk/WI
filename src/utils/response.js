// Standard API Response Helpers
const successResponse = (res, data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

const errorResponse = (res, error, message = 'Error', statusCode = 400) => {
    res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};

module.exports = { successResponse, errorResponse };
