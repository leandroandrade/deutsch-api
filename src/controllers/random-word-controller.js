// const { createError, createErrors } = require('./create-http-error');
const { getDerDieDas } = require('../repository/word-repository');

exports.getDerDieDasRadom = async (req, res, next) => {
    const data = await getDerDieDas();
    const [derdiedas] = data;

    return res.json(derdiedas);
};
