const {Router} = require("express");
const { getToDos, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router()
 
router.get("/get", getToDos)                //getToDos ye ek function h jisko call kr rhe.
router.post("/save", saveToDo)
router.put("/update/:id", updateToDo)
router.delete("/delete/:id", deleteToDo)
module.exports = router