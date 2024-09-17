import React, { useEffect, useState } from 'react'
import ToDo from './components/ToDo'
import axios from "axios"
import Popup from './components/Popup'
import { baseURL } from './utils/Constant'

const App = () => {

  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("")
  const [updateUI, setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState({})

  useEffect(() => {                               /*data ko backend se fetch krne ke liye AXIOS ka use kr rhe.
                                                      aur AXIOUS ko useEffect ke andr lgaye h.*/
    axios.get(`${baseURL}/get`)
    .then((res) => setToDos(res.data))
    .catch((err) => console.log(err));
  }, [updateUI])                                     


  const saveToDo = () => {                              /*savToDo -> ye axios se ek POST req send krega
                                                         POST req baseURL se krega aur {toDo: input} me input ka data de dega */
      axios.post(`${baseURL}/save`, {toDo: input})      
      .then(res => {                                          
        console.log(res.data)
        setUpdateUI((prevState) => !prevState)
        setInput("");
      })
     .catch((err) => console.log(err))
  }

  return (
    <>
    <div className="items-center text-white justify-center flex my-3">
      <div >
        <h1 className="text-3xl  font-bold text-center">ToDo App</h1>

        <div className="my-4">
        <input
                value= {input}
                onChange={(e) => setInput(e.target.value)} 
                type="text"  
                placeholder='Add a ToDo...'
                className=' bg-gray-600 shadow-lg rounded-md
                  px-4 py-2 mx-4'
            />
          <button 
          onClick={saveToDo}
          className='bg-gray-600 shadow-lg rounded-md font-bold px-4 py-2'
          >
            Add
          </button>
        </div>

        <div className=" font-bold "> 
          {
            toDos.map(el => 
            <ToDo  
             key={el._id}
             text={el.toDo} 
             id={el._id}
             setUpdateUI={setUpdateUI}
             setShowPopup={setShowPopup}
             setPopupContent={setPopupContent}
             />)
          }
        </div>
      </div>
    
    </div>
     <div className='items-center justify-center flex mt-10'>
     {showPopup &&     //yaha pe conditional rendering kiye h.
      <Popup                //agr popup ki value true h to isko show krna.
      className=""
      setShowPopup={setShowPopup} 
      popupContent={popupContent}
      setUpdateUI={setUpdateUI}
      /> }
     </div>
     
    </>
  )
}

export default App
