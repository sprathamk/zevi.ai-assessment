import React from 'react'

function Overlay({ open }) {
    if (!open) return null
    return (
        <div >
            <div className='relative bg-white h-2/3 p-6 w-full rounded'>
                <div className='text-xl font-semibold'>Latest Trends</div>
                <div className='w-full flex justify-between text-sm'>
                    <div className='w-1/5 m-2 ml-0'>
                        <img className='w-full h-[225px] rounded' src='./images/pic1.jpg'></img>
                        <div>Shirt with puffed sleeves</div>
                    </div>
                    <div className='w-1/5 m-2'>
                        <img className='w-full h-[225px] rounded' src='./images/pic2.jpg'></img>
                        <div>Linen Jumpsuit</div>
                    </div>
                    <div className='w-1/5 m-2'>
                        <img className='w-full h-[225px] rounded' src='./images/pic3.jpg'></img>
                        <div>White formal suit</div>
                    </div>
                    <div className='w-1/5 m-2'>
                        <img className='w-full h-[225px] rounded' src='./images/pic4.jpg'></img>
                        <div>Pattern dresses</div>
                    </div>
                    <div className='w-1/5 m-2 mr-0'>
                        <img className='w-full h-[225px] rounded' src='./images/pic5.webp'></img>
                        <div>Leather shirt dress</div>
                    </div>
                </div>
                <div className='text-xl font-semibold'>Popular Suggestions</div>
                <div className='mt-3'>
                    <div>Striped shirt dress</div>
                    <div>satin shirts</div>
                    <div>Denim Jumpsuit</div>
                    <div>Leather dresses</div>
                    <div>Solid tshirts</div>
                </div>
            </div>
        </div>
    )
}

export default Overlay
