const Register = require("./../models/Resgister");

const insert = (req, res) =>{
    const student = new Register(req.body);
    student.save((error, document)=>{
        if(error)
            res.status(500).json({
                msg: "Ha ocurrido un error"
            })
        return res.status(201).json({
            msg: "creado",
            registers: document
        });
    })

}

const getRegister = (req, res)=>{
    Register.find({}, (error, documents)=>{
        if(error)
            res.status(500).json({
                msg: "Ha ocurrido un error"
            })
        return res.status(200).json({
            msg: "ok",
            registers: documents
        });
    });
};

const getOneRegister = (req, res)=>{
    Register.findById(req.params.id, (error, document)=>{
        if(error)
            res.status(500).json({
                msg: "Ha ocurrido un error"
            })
        return res.status(200).json({
            msg: "ok",
            register: document
        });
    });
}

module.exports = {
    getRegister,
    getOneRegister,
    insert
    
}