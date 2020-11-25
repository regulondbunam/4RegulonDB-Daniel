'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Data = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* const organismSchema = new mongoose.Schema({
    organism_id: String,
    organism_name: String
});*/

const dttDataObject = new _mongoose2.default.Schema({
    _id: String,
    objectType: String,
    leftEndPosition: Number,
    rightEndPosition: Number,
    strand: String,
    objectRGBColor: String,
    lineWidth: Number,
    lineType: Number,
    labelName: String,
    labelFont: String,
    labelRGBColor: String,
    labelSize: Number,
    tooltip: String,
    lineRGBColor: String,
    organism: {
        organism_id: String,
        organism_name: String
    }
});

const Data = _mongoose2.default.model('dnafeatures', dttDataObject, 'dnaFeatures');

exports.Data = Data;