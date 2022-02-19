const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create geolocation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point",
    },
    coordinates: {
        type: [Number],
        index: "2dsphere",
    },

    // add in a geolocation
});
// create ninja schema for the model
const NinjaCharSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false,
    },
    // add in a geolocation
    geometry: GeoSchema,
});

// model for the collection
const NinjaModel = mongoose.model("Ninja", NinjaCharSchema);

// export this module so that it can be imported by other modules
module.exports = NinjaModel;
