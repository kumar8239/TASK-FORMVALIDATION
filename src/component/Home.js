import React, { useState } from 'react';
import { Card } from '@mui/material'
import './Home.css'
const App = () => {
  const [veseel, setvessel] = useState('');
  const [Quality, setQuality] = useState('');
  const [offer, setoffer] = useState('');
  const [payment, setpayment] = useState('');
  const [Advance, setAdvance] = useState('');
  const [balance, setbalance] = useState('');
  const [day, setday] = useState('');
  const [Lifting, setlifting] = useState('');
  const [Expiry, setExpiry] = useState('');
  const [Adress, setadress] = useState('');


  const [submittedData, setSubmittedData] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!veseel|| !Quality || !offer) {
      alert('Please fill in all fields');
      return;
    }
    else if(!payment|| !balance|| !Advance){
      setbalance= payment - balance;
      setbalance(Advance >= 0 ? Advance : 0);
    }
    else if(!day|| !Lifting|| !Expiry){
      alert('Please fill expiry ');
      return;
    }else if(!Adress){
      alert('Please fill adress');
      return;
    }

    const data = {
      veseel,
      Quality,
      offer,
      payment,
      Advance,
      balance,
      day,
      Lifting,
      Advance,
      Adress
    };

    setSubmittedData(data);
  };

  

  const handleFilterAction = (filter) => {
    // Perform action based on selected filter
    // ...
  };

  // const handleFilterChange = (e) => {
  //   const selectedFilters = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setFilters(selectedFilters);
  // };

  return (
    <div style={{textAlign:'center'}}>
      <h1>FORM</h1>

      <form className="form-inline"  onSubmit={handleSubmit}>
       
        <label>
          vessel
          <input type="number" value={veseel} onChange={(e) => setvessel(e.target.value)} />
        </label>
        <label>
          Quality
          <input type="number" value={Quality} onChange={(e) => setQuality(e.target.value)} />
        </label>
        <label>
          offer
          <input type='number' value ={offer} onChange={(e) => setoffer(e.target.value)} />
        </label>
        <br/>
        <label>
          Payment Term
          <input type="text" value={payment} onChange={(e) => setpayment(e.target.value)} />
        </label>
        <label>
        Advance
          <input type="number" value={Advance} onChange={(e) => setAdvance(e.target.value)} />
        </label>
        <label>
          Balance
          <input type='number' value ={balance} onChange={(e) => setbalance(e.target.value)} />
        </label>
        <br/>
        <label>
        No. of payment Days
          <input type="number" value={day} onChange={(e) => setday(e.target.value)} />
        </label>
        <label>
        Lifting days
          <input type="number" value={Lifting} onChange={(e) => setlifting(e.target.value)} />
        </label>
        <label>
         Expiry
          <input type='number' value ={Expiry} onChange={(e) => setExpiry(e.target.value)} />
        </label>
        <br/>
        <label>
         Address
          <input type='Adress' value ={Adress} onChange={(e) => setadress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>vessel: {submittedData.veseel}</p>
          <p>Quality: {submittedData.Quality}</p>
          <p>offer: {submittedData.offer}</p>
        </div>
      )}


      {/* <h2>Filters:</h2>
      <select multiple value={filters} onChange={handleFilterChange}>
        <option value="filter1">Filter 1</option>
        <option value="filter2">Filter 2</option>
        <option value="filter3">Filter 3</option>
      </select>
      <button onClick={() => handleFilterAction(filters)}>Apply Filters</button> */}
  
    <div className='row'>
      <Card style={{ width: '22rem', border: "none" }} className="column" >
        <div className="card">

          <h5 className="card-title">IONNIC</h5>
          <h4 className="card-subtitle mb-2 text-body-secondary">WCA  |  TUNA FORT  |  5096 NAR(KCAL/KG)</h4>
          <p className="card-text">IONNIS,San Nicolas,abc contract ,WCA COAL</p>
          <a href="WCA" className="card-link">WCA.js</a>
        </div>

      </Card >

      <Card style={{ width: '22rem', border: "none" }} className="column">

        <div className="card">
          <h5 className="card-title">IONNIC</h5>
          <h4 className="card-subtitle mb-2 text-body-secondary">WCA  |  TUNA FORT  |  5096 NAR(KCAL/KG)</h4>
          <p className="card-text">IONNIS,San Nicolas,abc contract ,WCA COAL</p>
          <a href="MCA" className="card-link">MCA.js</a>
        </div>
      </Card>

      <Card style={{ width: '22rem', border: "none" }} className="column">

        <div className="card">
          <h5 className="card-title">IONNIC</h5>
          <h4 className="card-subtitle mb-2 text-body-secondary">WCA  |  TUNA FORT  |  5096 NAR(KCAL/KG)</h4>
          <p className="card-text">IONNIS,San Nicolas,abc contract ,WCA COAL</p>
          <a href="MCL" className="card-link">MCL.js</a>
        </div>
      </Card>
      
    </div>
    </div>
  )
}
export default App;