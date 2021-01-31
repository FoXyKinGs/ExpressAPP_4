module.exports = {
    success: (res, message, pagination, data) => {
        const response = {
            code: 200,
            message,
            pagination,
            data
        }
        res.json(response)
    },
    failed: (res, message, data) => {
        const response = {
            code: 500,
            message,
            data
        }
        res.json(response)
    },
    notFound: (res, message, data) => {
        const response = {
            code: 404,
            message,
            data
        }
        res.json(response)
    },
    noContent: (res, message, data) => {
        const response = {
            code: 204,
            message,
            data
        }
        res.json(response)
    },
    forbidden: (res, message) => {
        const response = {
            code : 403,
            message
        }
        res.json(response)
    },
    unauthorized: (res, message) => {
        const response = {
            code : 401,
            message
        }
        res.json(response)
    }
}