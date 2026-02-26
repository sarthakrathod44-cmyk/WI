// Items Service
const prisma = require('../../config/db');

const getItems = async () => {
    return await prisma.item.findMany();
};

const createItem = async (data) => {
    return await prisma.item.create({
        data,
    });
};

const getItemById = async (id) => {
    return await prisma.item.findUnique({
        where: { id },
    });
};

const updateItem = async (id, data) => {
    return await prisma.item.update({
        where: { id },
        data,
    });
};

const deleteItem = async (id) => {
    return await prisma.item.delete({
        where: { id },
    });
};

module.exports = { getItems, createItem, getItemById, updateItem, deleteItem };
