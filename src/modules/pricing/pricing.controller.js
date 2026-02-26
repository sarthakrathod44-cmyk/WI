// Pricing Controller
const pricingService = require('./pricing.service');
const { successResponse, errorResponse } = require('../../utils/response');

const getPricingRules = async (req, res, next) => {
    try {
        const pricingRules = await pricingService.getPricingRules();
        successResponse(res, pricingRules);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch pricing rules', 500);
    }
};

const createPricingRule = async (req, res, next) => {
    try {
        const pricingRule = await pricingService.createPricingRule(req.body);
        successResponse(res, pricingRule, 'Pricing rule created successfully', 201);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to create pricing rule', 400);
    }
};

const getPricingRuleById = async (req, res, next) => {
    try {
        const pricingRule = await pricingService.getPricingRuleById(req.params.id);
        if (!pricingRule) {
            return errorResponse(res, 'Pricing rule not found', 'Not found', 404);
        }
        successResponse(res, pricingRule);
    } catch (err) {
        errorResponse(res, err.message, 'Failed to fetch pricing rule', 500);
    }
};

const updatePricingRule = async (req, res, next) => {
    try {
        const pricingRule = await pricingService.updatePricingRule(req.params.id, req.body);
        successResponse(res, pricingRule, 'Pricing rule updated successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to update pricing rule', 400);
    }
};

const deletePricingRule = async (req, res, next) => {
    try {
        await pricingService.deletePricingRule(req.params.id);
        successResponse(res, null, 'Pricing rule deleted successfully');
    } catch (err) {
        errorResponse(res, err.message, 'Failed to delete pricing rule', 400);
    }
};

module.exports = { getPricingRules, createPricingRule, getPricingRuleById, updatePricingRule, deletePricingRule };
