const express = require("express");
const router = express.Router();
const eventsController = require('../controllers/events')

router.get("/",eventsController.index);

router.get("/:id",eventsController.show);

router.post("/",eventsController.store);

router.put("/:events",eventsController.events);

module.exports = router;