import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[isEnable,setIsEnable]=useState(false);
  const[items,setItems]=useState([]);
  useEffect(() => {
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((response) => {
      console.log(response.data.data[0]);
      setItems(response.data.data[0]);
    });
  }, []);
  return (
  
    <div className="App"> 
 <form style={{width:"80%"}} className="m-auto mt-5">
  <div className='row container-fluid'>
    <div className='col-lg-6'>
  <div className="mb-3">
    <label htmlFor="ID Nation" className="form-label">ID Nation</label>
    <input type="number" className="form-control" id="ID Nation" aria-describedby="ID Nation" disabled={isEnable} value={items.ID_Nation} />
  </div>
  </div>
  <div className='col-lg-6'>

  <div className="mb-3">
    <label htmlFor="Nation" className="form-label">Nation</label>
    <input type="text" className="form-control" id="Nation" disabled={isEnable} value={isEnable?" ":items.Nation}/>
  </div>
  </div>
  <div className='col-lg-6'>

  <div className="mb-3">
    <label htmlFor="ID Year" className="form-label">ID Year</label>
    <input type="number" className="form-control" id="ID Year" disabled={isEnable} value={items.ID_Year}/>
  </div>
  </div>
  <div className='col-lg-6'>

  <div className="mb-3">
    <label htmlFor="Year" className="form-label">Year</label>
    <input type="number" className="form-control" id="Year" disabled={isEnable} value={isEnable?" ":items.Year}/>
  </div>
  </div>
  <div className='col-lg-6'>

  <div className="mb-3">
    <label htmlFor="Population" className="form-label">Population</label>
    <input type="number" className="form-control" id="Population" disabled={isEnable} value={isEnable?" ":items.Population}/>
  </div>
  </div>
  <div className='col-lg-6'>

  <div className="mb-3">
    <label htmlFor="Slug Nation" className="form-label">Slug Nation</label>
    <input type="text" className="form-control" id="Slug Nation" disabled={isEnable} value={items.Slug_Nation}/>
  </div>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={()=>setIsEnable(false)}/>
  <label className="form-check-label" htmlFor="exampleRadios1">
   true
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" onClick={()=>setIsEnable(true)}/>
  <label className="form-check-label" htmlFor="exampleRadios2">
  false
  </label>
</div>
  <button type="submit" className="btn btn-primary mt-5 m-auto" style={{width:"15%"}}>Submit</button>
  </div>
</form>
    </div>
  );
}

export default App;
