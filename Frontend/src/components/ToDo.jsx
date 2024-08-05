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
     <div className="todo text-white flex mx-8 my-2">
        {text}
        <div className="icons flex my-1 mx-24 font-bold ">
            <AiFillEdit className='px-1 py-1 mx-2' onClick={UpdateToDo} />
            <MdDelete className='px-1 py-1' onClick={deleteToDo} />
        </div>    
    </div> 
    </>
  )
}

export default ToDo

