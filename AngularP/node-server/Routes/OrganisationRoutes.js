module.exports = app => {
    const organisation = require("../Controller/OrganisationController.js");
  
    var router = require("express").Router();
  
    // Create a new Organisation
    router.post("/", organisation.create);
  
    // Retrieve all Organisation
    router.get("/", organisation.findAll);
  
    // Retrieve all published Organisation
    //  router.get("/location_code", organisation.findAlllocation_code);
  
    // Retrieve a single Organisation with id
    router.get("/:id",organisation.findOne);
  
    // Update a Organisation with id
    router.put("/:id",organisation.update);
  
    // Delete a Organisation with id
    router.delete("/:id", organisation.delete);
  
    // Create a new Organisation
    router.delete("/", organisation.deleteAll);
    router.get("/organisation/location_code",organisation.findAlllocation_code);
    router.get("/organisation/org_code",organisation.findAllorg_code);
  
    router.get("/organisation/contact_person",organisation.findAllcontact_person);
  
  
    app.use("/api/organisation", router);

   
  };
  