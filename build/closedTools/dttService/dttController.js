'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dttController = undefined;

var _dttModel = require('./dttModel');

class dttController {
    static getGeneticElementsFromInterval(leftEndPosition, rightEndPosition, strand, objectType, covered) {
        if (covered) {
            if (strand != 'both') return _dttModel.Data.find({ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }, { strand: strand }, { objectType: { $in: objectType } }] });else return _dttModel.Data.find({ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }, { strand: { $in: ["forward", "reverse"] } }, { objectType: { $in: objectType } }] });
        } else {
            // Empiece dentro y termine fuera o que empiece fuera y termine dentro
            if (strand != 'both') return _dttModel.Data.find({ $and: [{ $or: [{ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }] }, { $and: [{ leftEndPosition: { $lt: leftEndPosition } }, { rightEndPosition: { $gt: leftEndPosition, $lte: rightEndPosition } }] }, { $and: [{ leftEndPosition: { $gte: leftEndPosition, $lte: rightEndPosition } }, { rightEndPosition: { $gt: rightEndPosition } }] }] }, { strand: strand }, { objectType: { $in: objectType } }] }).exec().then(func1 => {
                for (let i = 0; i < func1.length; i++) {
                    console.log(func1[i]);
                    //Mi return tiene que ser el arreglo de los JSON
                }
            });else return _dttModel.Data.find({ $and: [{ $or: [{ $and: [{ leftEndPosition: { $gte: leftEndPosition } }, { rightEndPosition: { $lte: rightEndPosition } }] }, { $and: [{ leftEndPosition: { $lt: leftEndPosition } }, { rightEndPosition: { $gt: leftEndPosition, $lte: rightEndPosition } }] }, { $and: [{ leftEndPosition: { $gte: leftEndPosition, $lte: rightEndPosition } }, { rightEndPosition: { $gt: rightEndPosition } }] }] }, { strand: { $in: ["forward", "reverse"] } }, { objectType: { $in: objectType } }] });
        }
    }
}

exports.dttController = dttController;