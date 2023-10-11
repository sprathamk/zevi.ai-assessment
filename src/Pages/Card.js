import React from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'

function Card({ inputData, item }) {
    if (item) {
        return (
            <div className='w-full h-fit'>
                <div className='h-fit w-full'>
                    <img className='absolute h-[225px] w-2/3' src={item.images[0]} alt="something is here" />
                    <AiOutlineHeart className='relative' />
                </div>
                <div className='name'>{item.title}</div>
                <div className='price text-blue-600 font-semibold'>Rs.{item.price}</div>
                <div className='flex'>
                    <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    <div className='text-xs'>(210)</div>
                </div>
            </div>
        )
    }

}

export default Card
