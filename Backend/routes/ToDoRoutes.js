const {Router} = require("express");
const { getToDos, saveToDo } = require("../controllers/ToDoController");

const router = Router()
 
router.get("/get", getToDos)                //getToDos ye ek function h jisko call kr rhe.
router.post("/save", saveToDo)

module.exports = router