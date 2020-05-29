const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData( req, res ) {
        const response = await req.body;
        User.create(response);
        res.json(response);
    },
    async listUsers( req, res ) {
        const response = await User.find();
        res.json(response);
    },
    async listOne(req, res) {
        const response = await User.findById("5ed05a8108fe4a1bfc7caf79");
        res.json(response);
    }
}