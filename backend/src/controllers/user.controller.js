const {userService} = require("../services");

const resign = async (req, res) => {
    try {
        const result = await userService.resign(req);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({"message": error.message});
    }    
};

module.exports = {resign};