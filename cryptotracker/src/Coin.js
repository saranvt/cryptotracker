import React from 'react'
import './Coin.css';

const Coin = ({image,name,symbol,volume,price,priceChange}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
            <img src={image} alt='crypto'></img>
            <h1>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
            <p className='coin-price'>${price}</p>
            
            {
              priceChange <0 ?(
                <p className='coin-percent red'>{priceChange.toFixed(2)}</p>
              ):(<p className='coin-change green'>{priceChange.toFixed(2)}</p>)
            }
        </div>
        <div className='coin-data'>
            
        </div>
      </div>
    </div>
  )
}

export default Coin