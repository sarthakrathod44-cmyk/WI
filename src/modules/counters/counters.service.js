// Counters Service
const prisma = require('../../config/db');

const getCounters = async () => {
    return await prisma.counter.findMany();
};

const getCounterById = async (id) => {
    return await prisma.counter.findUnique({
        where: { id },
    });
};

const createCounter = async (data) => {
    return await prisma.counter.create({
        data,
    });
};

const updateCounter = async (id, data) => {
    return await prisma.counter.update({
        where: { id },
        data,
    });
};

const deleteCounter = async (id) => {
    return await prisma.counter.delete({
        where: { id },
    });
};

module.exports = { getCounters, getCounterById, createCounter, updateCounter, deleteCounter };
