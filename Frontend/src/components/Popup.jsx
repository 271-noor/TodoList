import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { baseURL } from '../utils/Constant';
import axios from 'axios';


const Popup = ({setShowPopup, popupContent, setUpdateUI}) => {


const [input, setInput] = useState(popupContent.text)


const updateToDo = () => {
    axios.put(`${baseURL}/update/${popupContent.id}`, {toDo: input})
    .then((res) => {
        console.log(res.data)
        setUpdateUI((prevState) => !prevState)
        setShowPopup(false)
    })
}

  return (
    <>
      <div className=" text-white ">
        <div className="bg-gray-900 ">
            <RxCross2 className='cursor-pointer' onClick={() =>setShowPopup(false)} />
            <h1>UpdateToDo</h1>


            <div className="mx-4 my-2 py-3 px-3">
            <input
                value= {input}
                onChange={(e) => setInput(e.target.value)} 
                type="text"  
                placeholder='Update ToDo...'
                className='bg-gray-600 shadow-lg rounded-md px-4 py-2 mx-4'
            />
            <button 
            onClick={updateToDo}
            className='bg-gray-600 shadow-lg rounded-md font-bold px-4 py-2'
            >
              Update
            </button>
            </div>

        </div>
      </div>
    </>
  )
}

export default Popup
