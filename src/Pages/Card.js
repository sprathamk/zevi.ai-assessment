import React, { useState } from 'react'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import View from './View';

function Card({ inputData, item }) {

    const [isViewOpen, setIsViewOpen] = useState(false);

    if (item) {
        return (
            <div className='w-full h-fit m-4'>
                <div className='static h-[250px] w-[200px] grid content-between'
                    onMouseEnter={() => setIsViewOpen(true)}
                    onMouseLeave={() => setIsViewOpen(false)}>
                    <img className='rounded-t absolute h-[250px] w-[200px] ' src={item.images[0]} alt="Product" />
                    <div className='flex justify-end'><AiOutlineHeart className='relative m-2 w-6 h-6' /></div>
                    <View isViewOpen={isViewOpen} />
                </div>
                <div className='name mt-2 text-lg '>{item.title}</div>
                <div className='price text-blue-600 font-semibold mb-1'><s className='font-normal mr-1 text-slate-400'>Rs.{item.price + 200}</s>Rs.{item.price}</div>
                <div className='flex'>
                    <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    <div className='text-xs'>(210)</div>
                </div>
            </div>
        )
    }

}

export default Card
