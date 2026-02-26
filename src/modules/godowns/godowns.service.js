// Godowns Service
const prisma = require('../../config/db');

const getGodowns = async () => {
    return await prisma.godown.findMany();
};

const getGodownById = async (id) => {
    return await prisma.godown.findUnique({
        where: { id },
    });
};

const createGodown = async (data) => {
    return await prisma.godown.create({
        data,
    });
};

const updateGodown = async (id, data) => {
    return await prisma.godown.update({
        where: { id },
        data,
    });
};

const deleteGodown = async (id) => {
    return await prisma.godown.delete({
        where: { id },
    });
};

module.exports = { getGodowns, getGodownById, createGodown, updateGodown, deleteGodown };
