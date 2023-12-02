import mongoose from "mongoose";
import { Schema } from "mongoose";

const parameterFactorPairSchema = new Schema({
    parameterValue: Number,
    factorValue: Number
});

const parameterTypeEnum = ['AIR_TEMPERATURE', 'AIR_WIRE_AMOUNT', 'GROUND_TEMPERATURE', 'GROUND_RESISTANCE'];

const parameterFactorSchema = new Schema({
    cableIdentifier: String,
    factorType: {
        type: String,
        enum: parameterTypeEnum
    },
    parameterFactorPairs: [parameterFactorPairSchema]
});

export const ParameterFactor = mongoose.model('ParameterFactor', parameterFactorSchema);