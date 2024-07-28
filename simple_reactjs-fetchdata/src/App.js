import './App.css'; 
import { useState, useRef, useEffect } from 'react';

const url = "https://jsonplaceholder.typicode.com/todos"


export default function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const fetched_Data = await fetch(url);
      const json = await fetched_Data.json();
      setData(json);
      console.log("Fetched data!"); 
      console.log(json);
    }
    

    fetchData();
    try {
      
    } catch (error) {
      console.log("This is the error: "+ error);
    }
    
    },[]);


    


  
  return (
    <>
     <ul>
      {data.map((d)=>(
        <li key={d.id}>{d.title}</li>
        
      ))}
    </ul>
      
    </>
  );
}



