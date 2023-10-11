import React from 'react'
import Card from './Card'

function Products({ inputData, data }) {
    if (Array.isArray(data)) {
        return (
            <div className='grid grid-cols-4'>
                {data.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        )
    }


}

export default Products
