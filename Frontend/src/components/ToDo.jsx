import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { baseURL } from '../utils/Constant';
import axios from 'axios';

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {


const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${id}`)
    .then(res => {
        console.log(res.data)
        setUpdateUI((prevState) => !prevState)
    });
}

const UpdateToDo = () => {
    setPopupContent({text, id})
    setShowPopup(true)
}


  return (
    <>
     <div className="todo text-white flex mx-6 my-3">
        {text}
        <div className="icons flex my-1 mx-auto font-bold cursor-pointer ">
            <AiFillEdit className=' -px-4 -py-4 mx-4 ' onClick={UpdateToDo} />
            <MdDelete className='-px-4 -py-4' onClick={deleteToDo} />
        </div>    
    </div> 
    </>
  )
}

export default ToDo

