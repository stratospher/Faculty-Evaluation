module.exports = function (sequelize, DataTypes) {
  const evaluation_specs = sequelize.define('evaluation_specs', {
    col_code: {
      type: DataTypes.STRING(3),
    },
    dep_code: {
      type: DataTypes.STRING(3),
    },
    evalname: {
      type: DataTypes.STRING(10),
    },
    period: {
      type: DataTypes.STRING(30),
      
    },
    roll_start: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    roll_end: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    roll_mis: {
      type: DataTypes.INTEGER(),
    },
    n_elective: {
      type: DataTypes.INTEGER(),
    },
    class: {
      type: DataTypes.INTEGER(),
    },
    aflag: {
      type: DataTypes.INTEGER(),
    },
  });

  return evaluation_specs;
};
