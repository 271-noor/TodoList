import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { baseURL } from '../utils/Constant';

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
     <div className="todo">
        {text}
        <div className="icons">
            <AiFillEdit className='icon' onClick={UpdateToDo} />
            <MdDelete className='icon' onClick={deleteToDo} />
        </div>    
    </div> 
    </>
  )
}

export default ToDo

