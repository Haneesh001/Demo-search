module.exports = (sequelize, Sequelize) => {
    const ConstantValues = sequelize.define("constantValues", {
      org_code: {
        type: Sequelize.STRING
      },
      
      location_code: {
        type: Sequelize.STRING
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
  
    return ConstantValues;
  };