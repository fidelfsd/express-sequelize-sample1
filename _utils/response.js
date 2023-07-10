const errorResponse = (message, error = null) => {
   res.status(code).json({
      status: "Error",
      message,
      error: error?.message,
   });
};

module.exports = {
   errorResponse,
};
