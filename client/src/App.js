import React , {useState, useEffect}from'react'
import './App.css';

function App() {
  const [ data, setData] = useState("Hello World");

const getTest = async ()=>{
  try{
    const res = await fetch('http://localhost:8080/test', {
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
      } 
    });

    return res.json();

  } catch(err){
    console.log("Error occur", err)

  }
}

useEffect(()=>{
  getTest()
  .then((res)=>{
    setData(res.message);
  })
  .catch((err)=>{
    console.log(err)
  })
}, [])

  return (
    <div className="App">
     <h1>{data}</h1>
    </div>
  );
}

export default App;
