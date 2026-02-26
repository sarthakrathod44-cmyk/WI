// Pricing Service
const prisma = require('../../config/db');

const getPricingRules = async () => {
    return await prisma.pricingRule.findMany();
};

const createPricingRule = async (data) => {
    return await prisma.pricingRule.create({
        data,
    });
};

const getPricingRuleById = async (id) => {
    return await prisma.pricingRule.findUnique({
        where: { id },
    });
};

const updatePricingRule = async (id, data) => {
    return await prisma.pricingRule.update({
        where: { id },
        data,
    });
};

const deletePricingRule = async (id) => {
    return await prisma.pricingRule.delete({
        where: { id },
    });
};

module.exports = { getPricingRules, createPricingRule, getPricingRuleById, updatePricingRule, deletePricingRule };
