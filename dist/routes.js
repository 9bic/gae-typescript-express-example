"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send({
        message: 'GAE is awesome!'
    });
});
router.get('/:name', (req, res) => {
    const name = req.body.name || 'GAE';
    res.send({
        message: '${name} is awesome!'
    });
});
router.post('/', (req, res) => {
    res.send({
        message: 'GAE is awesome!'
    });
});
exports.default = router;
//# sourceMappingURL=routes.js.map