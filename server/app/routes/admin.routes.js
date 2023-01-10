const controller = require("../controllers/admin.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/admin/reservation", controller.reservation);
  app.post("/api/admin/ready", controller.ready);
  app.post("/api/admin/confirm", controller.confirm);
  app.post("/api/admin/deny", controller.deny);
};