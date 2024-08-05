const ToDoModel = require("../models/ToDoModel")

        // (Get) - Read
module.exports.getToDos = async (req, res) => {
        const toDos = await ToDoModel.find()        //jitna v databsase me todo hoga sb de dega find()
        res.send(toDos)
}

        //(post) - create
module.exports.saveToDo = (req, res) => {
        const {toDo} = req.body
        ToDoModel.create({toDo})
        .then((data) => {
            console.log("Saved Successfully...")
            res.status(201).send(data)
        })
        .catch((err) => {console.log(err)
                res.send({ error: err, msg: "Something went wrong!"})
        });
}

        // For Update
module.exports.updateToDo = (req, res) => {
        const { id } = req.params
        const { toDo } = req.body;

        ToDoModel.findByIdAndUpdate(id, {toDo})
        .then(() => {
         res.send("Updated Successfully...")
        })
        .catch((err) => {console.log(err)
                res.send({ error: err, msg: "Something went wrong!"})
        });
}

        // Delete
module.exports.deleteToDo = (req, res) => {
        const { id } = req.params

        ToDoModel.findByIdAndDelete(id)
        .then(() => {
                res.send("Deleted Successfully...")
        })
        .catch((err) => {console.log(err)
                res.send({ error: err, msg: "Something went wrong!"})
        });
}
