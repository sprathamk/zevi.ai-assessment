import React, { useState } from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import View from './View';

function Card({ inputData, item }) {

    const [isViewOpen, setIsViewOpen] = useState(false);

    if (item) {
        return (
            <div className='w-full h-fit m-4'>
                <div className='static h-[225px] w-[175px] grid content-between'
                    onMouseEnter={() => setIsViewOpen(true)}
                    onMouseLeave={() => setIsViewOpen(false)}
                    on
                >

                    <img className='absolute h-[225px] w-[175px]' src={item.images[0]} alt="something is here" />
                    <div className='flex justify-end'><AiOutlineHeart className='relative m-2' /></div>
                    <View isViewOpen={isViewOpen} />
                </div>
                <div className='name mt-2'>{item.title}</div>
                <div className='price text-blue-600 font-semibold mb-1'>Rs.{item.price}</div>
                <div className='flex'>
                    <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    <div className='text-xs'>(210)</div>
                </div>
            </div>
        )
    }

}

export default Card
