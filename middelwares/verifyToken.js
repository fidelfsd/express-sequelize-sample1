const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
   const { authorization } = req.headers;

   // verificar si hay token
   if (!authorization) {
      return res.status(401).json({
         status: "Error",
         message: "No authorization token was found",
      });
   }
   // extraer el token
   const token = authorization.split(" ")[1];

   try {
      // decodificar token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // modificar el objeto Request
      req.userId = decodedToken.userId;
      req.userName = decodedToken.userName;
      req.userRole = decodedToken.userRole;

      // ejecutar la seguiente funcion en el ciclo de middelwares
      next();
   } catch (error) {
      res.status(400).json({
         status: "Error",
         message: "Invalid token",
      });
   }
};
