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
        const response = await User.findById(req.params.id);
        res.json(response);
    },

    async listBySex(req,res){
        const response = await User.find({"sex" : req.params.sex});
        
        //const response = await User.find({age : {$gte:45}},{sex : 'Feminino'});
        /*Fazendo da forma abaixo, você pode procurar por uma parte do texto
        da String que queria procurar, fazendo uma pesquisa basicamente como se
        estivesse usando um like '%%' no SQL
        const response = await User.find({name : /Bastos/});*/
        res.json(response);
    },

    //Criar outro método que traga todos que tenham menos de X anos
    //Para criar esses métodos, verificar no link da documentação oficial
    //do Mangoose: https://mongoosejs.com/

    async listByAge(req,res){
        //const response = await User.where('this.age.indexOf("val" >= 28').exec();
        const response = await User.find({"age" : {$gt : req.params.age}});
        res.json(response);
    },
    
    async listManyFields(req, res) {
        const response = await req.query.fields;
        res.json(response);
    }
}