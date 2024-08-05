import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { baseURL } from '../utils/Constant';
import ToDo from './ToDo';

const Popup = ({setShowPopup, popupContent, setUpdateUI}) => {


const [input, setInput] = useState(popupContent.text)


const updateToDo = () => {
    axious.put(`${baseURL}/update/${popupContent.id}`, {ToDo: input})
    .then((res) => {
        console.log(res.data)
        setUpdateUI((prevState) => !prevState)
        setShowPopup(false)
    })
}

  return (
    <>
      <div className="backdrop">
        <div className="popup">
            <RxCross2 className='cross' onClick={() =>setShowPopup(false)} />
            <h1>UpdateToDo</h1>


            <div className="popup__input_holder">
            <input
                value= {input}
                onChange={(e) => setInput(e.target.value)} 
                type="text"  
                placeholder='Update ToDo...'
            />
            <button onClick={updateToDo}>Update</button>
            </div>

        </div>
      </div>
    </>
  )
}

export default Popup
