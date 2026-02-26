// Suppliers Service
const prisma = require('../../config/db');

const getSuppliers = async () => {
    return await prisma.supplier.findMany();
};

const createSupplier = async (data) => {
    return await prisma.supplier.create({
        data,
    });
};

const getSupplierById = async (id) => {
    return await prisma.supplier.findUnique({
        where: { id },
    });
};

const updateSupplier = async (id, data) => {
    return await prisma.supplier.update({
        where: { id },
        data,
    });
};

const deleteSupplier = async (id) => {
    return await prisma.supplier.delete({
        where: { id },
    });
};

module.exports = { getSuppliers, createSupplier, getSupplierById, updateSupplier, deleteSupplier };
