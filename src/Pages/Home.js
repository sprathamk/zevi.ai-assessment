import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './Overlay';


function Home({ onInputChange }) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const send = (ev) => {
        ev.preventDefault();
        onInputChange(query);
        navigate('/result');
    }
    return (
        <div className='w-screen h-screen'>
            <img className='absolute w-screen h-screen' src='./images/Background.png' alt='Background' />
            <div className='relative h-screen w-screen flex'>
                <div className='h-screen w-1/5'></div>
                <div className='h-full w-3/5'>
                    <form className='relative flex justify-end ml-10 mr-10' onSubmit={send}>
                        <input type="text"
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setIsOpen(false)}
                            placeholder='Search'
                            value={query}
                            className='absolute w-full h-fit p-4 text-xl mt-36 placeholder:text-xl rounded-xl'
                            onChange={(ev) => setQuery(ev.target.value)} />
                        <button className="h-[5rem] mt-[8.5rem]" type='submit'>
                            <img className='relative h-[5rem] cursor-pointer' src='./images/find.png' type='submit' alt='find' />
                        </button>
                    </form>
                    <Overlay open={isOpen} />
                </div>
                <div className='h-screen w-1/5'></div>
            </div>
        </div>
    )
}

export default Home
