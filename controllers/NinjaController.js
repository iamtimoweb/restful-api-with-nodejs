const NinjaModel = require("../models/ninja");

function index(req, res, next) {
    NinjaModel.find({ $nearsphere: { $geometry: { type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, $maxDistance: 100000 } })
        .then((ninjas) => res.send(ninjas))
        .catch(next);
}

function store(req, res, next) {
    NinjaModel.create(req.body)
        .then((ninja) => {
            res.send(ninja);
        })
        .catch(next);
}

function update(req, res, next) {
    NinjaModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            NinjaModel.findById({ _id: req.params.id }).then((ninja) => res.send(ninja));
        })
        .catch(next);
}

function destroy(req, res, next) {
    NinjaModel.findByIdAndRemove({ _id: req.params.id })
        .then((ninja) => res.send(ninja))
        .catch(next);
}

module.exports = {
    index,
    store,
    update,
    destroy,
};
