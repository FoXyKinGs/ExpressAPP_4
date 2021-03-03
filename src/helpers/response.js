module.exports = {
    success: (res, message, pagination, data) => {
        const response = {
            code: 200,
            message,
            pagination,
            data
        }
        res.status(200).send(response)
    },
    failed: (res, message, data) => {
        const response = {
            code: 500,
            message,
            data
        }
        res.status(500).send(response.message)
        
    },
    notFound: (res, message, data) => {
        const response = {
            code: 404,
            message,
            data
        }
        res.status(404).send(response.message)
    },
    noContent: (res, message, data) => {
        const response = {
            code: 204,
            message,
            data
        }
        res.status(204).send(response.message)
    },
    forbidden: (res, message) => {
        const response = {
            code : 403,
            message
        }
        res.status(403).send(response.message)
    },
    unauthorized: (res, message) => {
        const response = {
            code : 401,
            message
        }
        res.status(401).send(response.message)
    }
}