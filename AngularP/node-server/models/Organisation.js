module.exports = (sequelize, Sequelize) => {
    const Organisation = sequelize.define("organisation", {
      org_code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      location_code: {
        type: Sequelize.STRING
      },
      registration_date:{
          type: Sequelize.DATE
      },
      contact_person: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      contact_email: {
        type: Sequelize.STRING
      }
    });
  
    return Organisation;
  };