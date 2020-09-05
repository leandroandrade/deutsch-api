const { getCollection } = require('../databases/mongodb');

exports.getDerDieDas = () => {
    return getCollection('derdiedas')
        .aggregate([{ $sample: { size: 1 } }, { $project: { _id: 0 } }])
        .toArray();
};
