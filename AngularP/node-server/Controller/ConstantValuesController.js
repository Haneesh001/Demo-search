const db = require("../models/");
const ConstantValues = db.constantValues;
const Op = db.Sequelize.Op;
const { Pool, Client } = require("pg");
// const { constantValues } = require("../models");
// Create and Save a new Organisation
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Organisation
  const constantValues = {
    org_code: req.body.org_code,
    
     location_code: req.body.location_code,
     
     contact_person: req.body.contact_person,
     contact_number: req.body.contact_number,
     contact_email: req.body. contact_email

  };

  // Save Organisation in the database
ConstantValues.create(constantValues)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Organisation."
      });
    });
};

// Retrieve all Organisation from the database.
exports.findAll = (req, res) => {
  const org_code = req.query.org_code;
  var condition = org_code ? { org_code: { [Op.iLike]: `%${org_code}%` } } : null;

  ConstantValues.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Organisation."
      });
    });
};

// Find a single Organisation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ConstantValues.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Organisationl with id=" + id
      });
    });
};

// Update a Organisation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  ConstantValues.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Organisation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Organisationwith id=${id}. Maybe Organisation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Organisation with id=" + id
      });
    });
};

// Delete a Organisationwith the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ConstantValuess.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "TOrganisation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Organisation with id=${id}. Maybe Organisation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Organisation with id=" + id
      });
    });
};

// Delete all Organisation from the database.
exports.deleteAll = (req, res) => {
    ConstantValues.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Organisation were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing allOrganisation."
      });
    });
};

exports.findAlllocation_code = (req, res) => {

    // const sql = `select location_code from organisation where `;attributes: [[sequelize.fn('DISTINCT', sequelize.col('location_code')), 'location_code']],
    // const location_code = req.query.sql;
    
  
    ConstantValues.findAll( { attributes: ['location_code'], group: ['location_code']})
      .then(data => {
       
        res.send(data);
        // res.setHeader("Content-Type", "application/json");
        // res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Organisation."
        });
      });
  };

  exports.findAllorg_code = (req, res) => {

    // const sql = `select location_code from organisation where `;attributes: [[sequelize.fn('DISTINCT', sequelize.col('location_code')), 'location_code']],
    // const location_code = req.query.sql;
    
  
    ConstantValues.findAll( { attributes: ['org_code'], group: ['org_code']})
      .then(data => {
       
        res.send(data);
        // res.setHeader("Content-Type", "application/json");
        // res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Organisation."
        });
      });
  };
  exports.findAllcontact_person = (req, res) => {

    // const sql = `select location_code from organisation where `;attributes: [[sequelize.fn('DISTINCT', sequelize.col('location_code')), 'location_code']],
    // const location_code = req.query.sql;
    
  
    ConstantValues.findAll( { attributes: ['contact_person'], group: ['contact_person']})
      .then(data => {
       
        //res.send(data);
        res.setHeader("Content-Type", "application/json");
         res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Organisation."
        });
      });
  };






