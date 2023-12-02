import express from "express";
import { ParameterFactor } from "../model/parameterFactor.js";

const router = express.Router();

const mapToDTO = (factors) => {
    const dto = {};

    factors.forEach((factor) => {
        const { cableIdentifier, parameterFactorPairs } = factor;
        dto[cableIdentifier] = parameterFactorPairs.map((pair) => {
            return {
                parameterValue: pair.parameterValue,
                factorValue: pair.factorValue
            };
        });
    });

    return dto;
};

router.get('/air-temperature', async (req, res) => {
    try {
        const factors = await ParameterFactor.find({ factorType: 'AIR_TEMPERATURE' });
        res.status(200).json(mapToDTO(factors));
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

router.get('/air-wire-amount', async (req, res) => {
    try {
        const factors = await ParameterFactor.find({ factorType: 'AIR_WIRE_AMOUNT' });
        res.status(200).json(mapToDTO(factors));
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

router.get('/ground-temperature', async (req, res) => {
    try {
        const factors = await ParameterFactor.find({ factorType: 'GROUND_TEMPERATURE' });
        res.status(200).json(mapToDTO(factors));
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

router.get('/ground-resistance', async (req, res) => {
    try {
        const factors = await ParameterFactor.find({ factorType: 'GROUND_RESISTANCE' });
        res.status(200).json(mapToDTO(factors));
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

export { router as parameterFactorRouter };