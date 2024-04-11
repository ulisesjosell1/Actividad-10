import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const params = useParams()
  return (
  <>
  <div>Product</div>
  <p>{params.id}</p>
  </>
  )
}

export default Product