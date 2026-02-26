// Purchases Service
const prisma = require('../../config/db');

const getPurchases = async () => {
    return await prisma.purchase.findMany();
};

const createPurchase = async (data) => {
    return await prisma.purchase.create({
        data,
    });
};

const getPurchaseById = async (id) => {
    return await prisma.purchase.findUnique({
        where: { id },
    });
};

const updatePurchase = async (id, data) => {
    return await prisma.purchase.update({
        where: { id },
        data,
    });
};

const deletePurchase = async (id) => {
    return await prisma.purchase.delete({
        where: { id },
    });
};

module.exports = { getPurchases, createPurchase, getPurchaseById, updatePurchase, deletePurchase };
