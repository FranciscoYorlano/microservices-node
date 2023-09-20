module.exports = {
    UNKNOWN_EXCEPTION: {
        id: false,
        code: "002-001",
        status: 500,
        component: "unknown",
        description: "Se ha producido una excepción desconocida.",
    },
    DATABASE_ERROR: {
        id: false,
        code: "002-002",
        status: 500,
        component: "database",
        description: "Se ha producido un error en la base de datos.",
    },
    NOT_FOUND: {
        id: false,
        code: "002-003",
        status: 404,
        component: "client",
        description: "Recurso no encontrado.",
    },
};
