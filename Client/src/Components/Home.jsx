import React, { useEffect } from 'react'
import { useState, useCallback } from 'react'
import { useSocket } from '../Context/SocketProvider'
import { useNavigate } from "react-router-dom";
const Home = () => {
  
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [room, setRoom] = useState()


  const socket = useSocket()


  const handleLogin = useCallback((e) => {
    e.preventDefault()
  socket.emit("room:join",{email,room})

  },[email,room,socket])
  

  const handleRoomJoin= useCallback((data)=>{

const {email,room}=data
navigate(`/room/${room}`)
  },[navigate])

  
  useEffect(()=>{
socket.on('room:join',handleRoomJoin)
return ()=>{socket.off('room:join')}
},[])



  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Lobby </h2>
        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="quantity"
              type="text"
              onChange={(e) => setemail(e.target.value)}
              value={email}
              placeholder="Enter product quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Room Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="quantity"
              type="text"
              onChange={(e) => setRoom(e.target.value)}
              value={room}
              placeholder="Enter product quantity"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
