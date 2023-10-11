import React from 'react'

export default function View({ isViewOpen }) {
    if (isViewOpen) {
        return (
            <div>
                <div className='relative w-full h-8 p-1 text-white flex justify-center bg-blue-500 opacity-70 bottom-0'>View Product</div>
            </div>
        )
    }
}
