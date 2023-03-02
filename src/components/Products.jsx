import React from 'react'
import { ApiTopPropducts } from '../apifolder/TopProductsApi'
import Product from './Product'

const Products = () => {
  return <div className='flex  '>
    {
        ApiTopPropducts.map((product, index) => (
            <Product item={product} key={index}/>
        ))
    }
  </div>
}

export default Products