// Reusable Pagination Logic
const calculatePagination = (page = 1, limit = 10) => {
    const pageNum = Math.max(1, parseInt(page) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(limit) || 10));
    const skip = (pageNum - 1) * limitNum;

    return { skip, take: limitNum, page: pageNum };
};

const paginatedResponse = (data, totalCount, page, limit) => {
    return {
        data,
        pagination: {
            total: totalCount,
            currentPage: page,
            pageSize: limit,
            totalPages: Math.ceil(totalCount / limit),
        },
    };
};

module.exports = { calculatePagination, paginatedResponse };
