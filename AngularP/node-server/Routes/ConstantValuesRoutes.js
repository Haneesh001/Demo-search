module.exports = app => {
    const constantValues = require("../Controller/ConstantValuesController");
  
    var router = require("express").Router();
  
    // Create a new Organisation
    router.post("/",  constantValues.create);
  
    // Retrieve all Organisation
    router.get("/",  constantValues.findAll);
  
    // Retrieve all published Organisation
    //  router.get("/location_code", organisation.findAlllocation_code);
  
    // Retrieve a single Organisation with id
    router.get("/:id", constantValues.findOne);
  
    // Update a Organisation with id
    router.put("/:id", constantValues.update);
  
    // Delete a Organisation with id
    router.delete("/:id",  constantValues.delete);
  
    // Create a new Organisation
    router.delete("/",  constantValues.deleteAll);
    router.get("/organisation/location_code", constantValues.findAlllocation_code);
    router.get("/organisation/org_code", constantValues.findAllorg_code);
  
    router.get("/organisation/contact_person", constantValues.findAllcontact_person);
  
  
    app.use("/api/constantValues", router);

   
  };
  