const joi = require ('joi');

const requiredSting = joi.string().required();

exports.validate = (user) => {
    const schema = {
        name: requiredSting.min(3).max(30),
        email: requiredSting.email().min(3).max(255),
        password: requiredSting.min(3).max(255),
        picture: requiredSting,
}
}