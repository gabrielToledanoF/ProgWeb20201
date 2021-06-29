const models = require("../models/index.js");
const Area = models.Area;
const Op = models.Sequelize.Op;

async function index (req, res) {
    const areas = await Area.findAll({where: {nome: {[Op.like]: "%Ci%"} } } );
    res.render('area/index', {
        areas: areas.map(area => area.toJSON())
    });
    
};

   module.exports = { index }