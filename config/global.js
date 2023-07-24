module.exports = {
   maxSeed: {
      NATIONALITY: 10,
      ADDRESS: 30,
      USER: 100, // not include admin user
      COURSE: 6,
   },
   pagination: {
      LIMIT: 20,
   },
   user: {
      PASSWORD_MIN_LEN: 8,
   },
   role: {
      STUDENT: {
         ID: 2,
         NAME: "student",
      },
      ADMIN: {
         ID: 1,
         NAME: "admin",
      },
   },
};
