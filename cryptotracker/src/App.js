import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {
  const [coin,setcoin]=useState([]);
  const [search,setsearch]=useState('')
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res=>{
    setcoin(res.data);
  }).catch(err=>alert('error with the api'))},[])
  const handlechange= e =>{
    setsearch(e.target.value);
  };
  const filteredcoins=coin.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()));
  return (
    
  
    <div className="coin-app">
      <div >
        <h1 className='title'>crypto-tracker</h1>
        <form className='form'>
          <input  type='text' placeholder=' Search' className='coin-input'
          onChange={handlechange}></input>
        </form>
      </div>
      {filteredcoins.map(coin=>{
          return(
            <Coin key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol} 
            price={coin.current_price} 
            volume={coin.markt_cap}
            priceChange={coin.price_change_24h}></Coin>
          )
        })
      }
    </div>
    
  );
}

export default App;
