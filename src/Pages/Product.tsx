import React from 'react'
import Products from '../components/Products'

export default function Product() {
  return (
    <div>
      <h1 className='w-full text-center md:text-start text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mt-6 mb-3 md:ml-6'> Ürünler</h1>
    
      <Products></Products>
    </div>
  
  )
}
