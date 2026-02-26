// Users Service
const prisma = require('../../config/db');

const getUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
        },
    });
};

const createUser = async (data) => {
    return await prisma.user.create({
        data,
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
        },
    });
};

const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
        },
    });
};

const updateUser = async (id, data) => {
    return await prisma.user.update({
        where: { id },
        data,
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
        },
    });
};

const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { id },
    });
};

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };
