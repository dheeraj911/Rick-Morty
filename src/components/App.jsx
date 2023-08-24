import { useEffect, useState } from 'react'
import axios from "axios"
import '../App.css'

function App() {

  const [result,setResult] = useState([])
  const [drop1,setDrop1] = useState(false)
  const [drop2,setDrop2] = useState(false)

  const handleClick1 = ()=>{
    setDrop1(!drop1)
  }

  const handleClick2 = ()=>{
    setDrop2(!drop2)
  }


 useEffect(()=>{



const fetchData = async ()=>{

  try{
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character`)
       setResult(data.results)
      }catch(error){
        console.log(error)
      }
    }
    fetchData()
 },[])

  


  return (
    <div className='APP'>
      <div className="results">

      {result.map((result,i)=>{
       return(

         <div  key={i}>
        <img src={result.image} alt={result.name}/>
        <p>{result.name}</p>
        <div className='drop'>
        

        <button onClick={handleClick1}>STATUS</button>
        
        {drop1 &&(
          <div className='drop-btn'>{result.status}</div>
        )}
        <button onClick={handleClick2} >GENDER</button>
        {drop2 &&(
          <div className='drop-btn'>{result.gender}</div>
        )}
        </div>

       </div>
       )
      })}
      </div>
    </div>
  )
}

export default App
