import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [name,setName]=useState("");
  const [datetime,setDatemtime]=useState("");
  const [description,setDescription]=useState("");
  const [transactions,setTransactions]=useState([]);
  useEffect(()=>{
    getTransactions().then(setTransactions);
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
  let balance = 0;
  for (let transaction of transactions){
    balance=balance+transaction.price;
  }
  balance=balance.toFixed(2);
  const fraction=balance.split('.')[1];
  balance=balance.split('.')[0];
  return (
    <main>
      <h1>Rupee {balance}<span>{fraction}</span></h1>
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
  {transactions.length > 0 && transactions.map((transaction, index) => (
    <div className='first' key={index}>
      <div className='left'>
        <div className='name'>{transaction.name}</div>
        <div className='description'>{transaction.description}</div>
      </div>
      <div className='right'>
        <div className={'price' + (transaction.price < 0 ? 'red' : 'green')}>
          {transaction.price}
        </div>
        <div className='datetime'>{transaction.datetime}</div>
      </div>
    </div>
  ))}
</div>
  
        

    </main>
  );
}

export default App;
