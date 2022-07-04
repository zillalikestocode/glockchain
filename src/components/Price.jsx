import React from 'react'
import Button from './Button'

const Price = ({ coin }) => {
  return (
    <div className="rounded-md ml-4 p-4 bg-white shadow-2xl mb-20">
      <div className="p-2 pl-0 pt-1 flex">
        <img src={coin.icon} alt="" width="45" className=""/>
        <div className="ml-20">
          <Button text="Buy" styles="p-1 text-sm bg-violet-200 rounded text-violet-800 font-medium m-1 ml-0 mt-0"/>
          <Button text="Trade" styles="p-1 text-sm bg-green-100 rounded text-green-700 font-medium m-1 mr-0 mt-0" />
        </div>
      </div>
      <div className="text-md">
        <h4>{coin.name}  <span className="text-gray-500">{coin.abv}</span></h4>
        <p>{coin.price} <span className="text-red-600">{coin.mvm}</span></p>
      </div>
    </div>
  )
}

export default Price
