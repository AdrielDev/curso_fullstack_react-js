module.exports = {
    listNF(req, res) {
        const response = req.params.nf;
        res.json(`Número de NF: ${response}`);
    }
}