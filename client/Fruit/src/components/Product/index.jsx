import React from 'react'

const Product = ({ id, info, image, name, price }) => {
  return (
    <div>
      <ul>
        <li>
          Number: <b>{id}</b>
        </li>
        <li>
          <img src={image} alt='' />
        </li>
        <li>
          Info: <b>{info}</b>
        </li>
        <li>
          Number: <b>{id}</b>
        </li>
        <li>
          Name: <b>{name}</b>
        </li>
        <li>
          Price: <b>{price}</b>
        </li>
      </ul>
    </div>
  )
}

export default Product
