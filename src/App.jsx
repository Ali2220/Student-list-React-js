import { useState } from 'react'
import './App.css'
import Data from './Components/data'
import List from './Components/List'

function App() {
  
  const [people, setpeople] = useState(Data)

  function ClearAll(){
    setpeople([])
  }

  function Retain(){
    setpeople(Data)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 hover:bg-slate-950 ">
      <div className="bg-slate-900 hover:bg-slate-950 p-6 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-2xl font-semibold mb-4 text-center">{people.length} Students</h3>
        <List people={people}/>
        <button 
          onClick={ClearAll} 
          className="mt-6 w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-400"
        >
          Clear All
        </button>
        <button onClick={Retain} className="mt-6 w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-400">Retain All</button>
      </div>
    </div>
  )
}

export default App
