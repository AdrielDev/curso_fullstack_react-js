const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

module.exports = {
    async persistUser (req, res) {
        const payload = await User.create(req.body);
        //User.create(payload);
        res.json(payload);
    },
    async listUsers (req, res) {
        const response = await User.find();
        res.json(response);
    },
    async  getUserGit(req, res) {
        const response = await axios.get("https://api.github.com/users/adrieldev");
        res.json(response.data);
    }

    //Persisitr no banco usuários do Git;

    //Persistir no banco usuário do Git se criado antes de 2020;

    //Novo backend 1: [latitude e longitude] 2: [latitude, longitude] => distancia;
}