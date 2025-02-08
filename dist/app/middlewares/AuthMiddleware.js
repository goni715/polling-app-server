"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).json({
            success: false,
            message: "You are not authorized",
        });
    }
    try {
    }
    catch (err) { }
};
exports.default = AuthMiddleware;
