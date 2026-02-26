// Stock Service
const prisma = require('../../config/db');
const { recordStockMovement } = require('../../utils/stockHelper');

const getStock = async () => {
    return await prisma.stock.findMany();
};

const getStockByItemId = async (itemId) => {
    return await prisma.stock.findUnique({
        where: { itemId },
    });
};

const recordMovement = async (data) => {
    return await recordStockMovement(data.itemId, data.quantity, data.type, data.reference);
};

module.exports = { getStock, getStockByItemId, recordMovement };
