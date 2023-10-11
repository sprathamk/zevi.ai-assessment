import React from 'react'
import Card from './Card'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Products({ inputData, data }) {
    console.log(data)
    if (Array.isArray(data)) {
        return (
            <div className='w-screen scroll-mr-1 h-full'>
                <div className='w-full h-[150px] mt-[-190px] fixed overflow-hidden flex justify-center bg-white z-[100000]'>
                    <div className='h-full w-2/5  '>
                        <form className='relative flex justify-end ml-10 mr-10'>
                            <input type="text"
                                placeholder='Search'
                                className='absolute w-full h-fit p-2 text-lg mt-12 placeholder:text-xl placeholder:pl-4 rounded-xl border-2' />
                            <button className="h-[3rem] mt-[3rem]" type='submit'>
                                <img className='relative h-[3rem] cursor-pointer' src='./images/find.png' type='submit' alt='find' />
                            </button>
                        </form>
                    </div>
                </div>
                <div className='flex mt-[190px]'>
                    <div className='h-screen w-[300px]  mt-[-40px] bg-white fixed overflow-hidden pl-10'>
                        <div className='text-3xl font-semibold'>Search Results</div>
                        <div className='text-lg'>
                            <div className='mt-6 '><div className='font-semibold'>BRAND</div>
                                <div className='mt-4'>
                                    <div className='text-sm my-2 '><input type="checkbox" className='w-4 h-4 mr-2' />Mango</div>
                                    <div className='text-sm mb-4'><input type="checkbox" className='w-4 h-4  mr-2' />H&M</div>
                                </div>
                            </div>
                            <hr className='w-[200px]' />
                            <div className='mt-6'><div className='font-semibold'>PRICE RANGE</div>
                                <div className='mt-4'>
                                    <div className='text-sm my-2'><input type="checkbox" className='w-4 h-4 mr-2' />Under 500</div>
                                    <div className='text-sm mb-4'><input type="checkbox" className='w-4 h-4 mr-2' />1000 to 3000</div>
                                </div>
                            </div>
                            <hr className='w-[200px]' />
                            <div className='mt-6'><div className='font-semibold'>RATINGS</div>
                                <div className='mt-4'>
                                    <div className='flex my-2'><input type="checkbox" className='w-4 h-4 mr-2' /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                    <div className='flex my-2'><input type="checkbox" className='w-4 h-4 mr-2' /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></div>
                                    <div className='flex my-2'><input type="checkbox" className='w-4 h-4 mr-2' /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></div>
                                    <div className='flex my-2'><input type="checkbox" className='w-4 h-4 mr-2' /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></div>
                                    <div className='flex my-2'><input type="checkbox" className='w-4 h-4 mr-2' /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 w-3/4 ml-[300px]'>
                        {data.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        )
    }


}

export default Products
