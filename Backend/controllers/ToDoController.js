const ToDoModel = require("../models/ToDoModel")

module.exports.getToDos = async (req, res) => {
        const toDos = await ToDoModel.find()        //jitna v databsase me todo hoga sb de dega find()
        res.send(toDos)
}
module.exports.saveToDo = (req, res) => {
        const {toDo} = req.body
        ToDoModel.create({toDo})
        .then((data) => {
            console.log("Saved Successfully...")
            res.status(201).send(data)
            .catch((err) => console.log(err))
        })
}
