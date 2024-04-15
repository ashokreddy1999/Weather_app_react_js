import React,{useState} from 'react'

const App = () => {
  const[city,setCity]=useState("")
  const[result,setResult]=useState("")
  const changeHandler=e=>{
    setCity(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f7986c6c38492b976607e578be0c642`).then(
   response => response.json()
   ).then(data =>{ 
    const Kelvin = data.main.temp;
    const celsius =Kelvin - 273.15
    setResult("Temperature at "+" "+city+"\n"+Math.round(celsius)+"oc");
    setCity(" ");
  })
}
  return (
    <div>
      <center>
     <div className="card">
      <div className="card-body">
        <h4 className="card-title">Weather App</h4>

        <form onSubmit={submitHandler}>  
          <input type="text" name="city" value={city} onChange={changeHandler} placeholder='Enter here.....!'/><br /><br />
          <input type="submit" value="Get Temperature" />
        </form>
        <h1>{result}</h1>
      </div>
     </div>
     </center>
    </div>
  )
}

export default App
