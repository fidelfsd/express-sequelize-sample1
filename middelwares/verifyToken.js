const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
   const { authorization } = req.headers;

   if (!authorization) {
      return res.status(401).json({
         status: "Error",
         message: "No authorization token was found",
      });
   }

   const token = authorization.split(" ")[1];

   try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedToken.userId;
      req.userName = decodedToken.userName;
      req.userRole = decodedToken.userRole;

      next();
      
   } catch (error) {
      res.status(400).json({
         status: "Error",
         message: "Invalid token",
      });
   }
};
