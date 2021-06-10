module.exports = (sequelize, Sequelize) => {

  const User = sequelize.define("user", {
     CPF: {
      type: Sequelize.STRING
    },
  });
return User;
}