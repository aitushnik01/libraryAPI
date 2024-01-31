const { check, validationResult } = require('express-validator');

const validateBook = () => {
    return [
        check('name').isLength({ min: 1, max: 100 }),
        check('author').isLength({ min: 1, max: 100 }),
        check('publish_year').isInt({ min: 100, max: 2026 }),
        check('pages_count').isInt({ min: 1, max: 13000 }),
        check('price').isFloat({ min: 0, max: 15000 }),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { validateBook, validate };
