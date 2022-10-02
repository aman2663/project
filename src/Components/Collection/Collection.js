import React from 'react'
import girl from '../../Girl.png'
import './Collection.css'

const Collection = () => {
  return (
    <div className='collection'>
        <div className='content'>
        <h5 class="summer">Summer 2020</h5>
        <h1 class="new-collection">NEW COLLECTION</h1>
        <h4 class="text">We Know how large objects will act,<br />but things on a small scale</h4>
        <button class="shop_button"><h3>SHOP NOW</h3></button>
        </div>
        <img src={girl} alt='girl.png' />
        </div>
  )
}

export default Collection