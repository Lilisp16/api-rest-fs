const express = require("express");
const IncidentController = require("../controllers/incident");

const api = express.Router();

// Log para confirmar que la ruta se registra
//console.log("Registrando ruta /api/holaMundo");

api.get("/holaMundo", IncidentController.holaMundo);
api.post("/createIncident", IncidentController.createIncident);
api.get("/getIncidents", IncidentController.getIncidents);
api.get("/getIncidentsBySeverity", IncidentController.getIncidentsBySeverity);
api.get("/getIncidentsByState", IncidentController.getIncidentsByState);
api.put("/updateIncident", IncidentController.updateIncident);
api.delete("/deleteIncident", IncidentController.deleteIncident);

module.exports = api;

