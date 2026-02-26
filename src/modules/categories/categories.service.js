// Categories Service
const prisma = require('../../config/db');

const getCategories = async () => {
    return await prisma.category.findMany();
};

const createCategory = async (data) => {
    return await prisma.category.create({
        data,
    });
};

const getCategoryById = async (id) => {
    return await prisma.category.findUnique({
        where: { id },
    });
};

const updateCategory = async (id, data) => {
    return await prisma.category.update({
        where: { id },
        data,
    });
};

const deleteCategory = async (id) => {
    return await prisma.category.delete({
        where: { id },
    });
};

module.exports = { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory };
