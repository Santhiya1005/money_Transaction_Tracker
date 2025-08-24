import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [name,setName]=useState("");
  const [datetime,setDatemtime]=useState("");
  const [description,setDescription]=useState("");
  const [transactions,setTransactions]=useState("");
  useEffect(()=>{
    getTransactions().then(transactions =>{
      setTransactions(transactions);
    });
  },[]);
  async function getTransactions()
  {
    const url=process.env.REACT_APP_API_URL+'/transactions';
    const response = await fetch(url);
    return await response.json();
  }
  function addNew(ev){
    ev.preventDefault();
   const url=process.env.REACT_APP_API_URL+'/transaction';
   const price = name.split(' ')[0];
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime,
      })
    }).then(response=>{
      response.json().then(json=>{
        setName('');
        setDatemtime('');
        setDescription('');
        console.log('result',json);
      });
    });
  }
  return (
    <main>
      <h1>Money Tracsaction Review</h1>
      <form onSubmit={addNew}>
        <div className='basic'>
        <input type='text'
         value={name}
         onChange={ev =>setName(ev.target.value)}
         placeholder='+200 new samsung'></input>
        <input type='datetime-local' 
        value={datetime}
        onChange={ev=>setDatemtime(ev.target.value)}
        placeholder='date'></input>
        </div>
        <div className='description'>
        <input type='text'
        value={description}
        onChange={ev=>setDescription(ev.target.value)}
         placeholder='description'></input>

        </div>
        <button type='submit'>Add new transaction</button>
      </form>

      <div className='details'>
        <div className='first'>
          <div className='left'>
              <div className='name'>oppo reno 13</div>
              <div className='description'>it was time for reno 13</div>
          </div>
          <div className='right'>
              <div className='pricegreen'>+$500</div>
              <div className='datetime'>2025-08-20 19:17</div>
          </div>
          </div>
          <div className='first'>
          <div className='left'>
              <div className='name'>Healthy snaks</div>
              <div className='description'>purchased some snacks</div>
          </div>
          <div className='right'>
              <div className='pricered'>-$100</div>
              <div className='datetime'>2025-05-01 10:54</div>
          </div>                                                              
          </div>
          <div className='first'>
          <div className='left'>
              <div className='name'>skin care purchases</div>
              <div className='description'>time to get skin care products</div>
          </div>
          <div className='right'>
              <div className='pricered'>-$500</div>
              <div className='datetime'>2025-07-10 20:31</div>
          </div>
          </div>
      </div>
    </main>
  );
}

export default App;
