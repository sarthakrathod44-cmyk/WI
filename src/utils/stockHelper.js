// Stock Ledger Write Helper
const prisma = require('../config/db');

const recordStockMovement = async (itemId, quantity, type, reference) => {
    try {
        const movement = await prisma.stockMovement.create({
            data: {
                itemId,
                quantity,
                type, // 'IN', 'OUT', 'ADJUSTMENT'
                reference, // Purchase ID, Sale ID, etc.
                timestamp: new Date(),
            },
        });
        return movement;
    } catch (err) {
        throw new Error(`Failed to record stock movement: ${err.message}`);
    }
};

module.exports = { recordStockMovement };
