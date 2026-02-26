// Sales Service
const prisma = require('../../config/db');

const getSales = async () => {
    return await prisma.sale.findMany();
};

const createSale = async (data) => {
    return await prisma.sale.create({
        data,
    });
};

const getSaleById = async (id) => {
    return await prisma.sale.findUnique({
        where: { id },
    });
};

const updateSale = async (id, data) => {
    return await prisma.sale.update({
        where: { id },
        data,
    });
};

const deleteSale = async (id) => {
    return await prisma.sale.delete({
        where: { id },
    });
};

module.exports = { getSales, createSale, getSaleById, updateSale, deleteSale };
