import React from 'react'
import { FaTimes } from "react-icons/fa";

const Filter = () => {
    return (
        <div className='flex w-3/4 justify-between items-center bg-white py-4 rounded-md shadow-[5px_2px_4px_0px_rgba(0,0,0,0.25)] absolute top-14 md:top-24 left-32'>
            <div className='flex flex-wrap gap-4 mx-9'>
                <p className='bg-[#d9f3f3] p-1 rounded-md font-bold text-[#4f9999] text-[14px] flex items-center'>Frontend <FaTimes className='bg-[#63BABA] hover:bg-gray-800 text-white ml-1 cursor-pointer'/> </p>
                <p className='bg-[#d9f3f3] p-1 rounded-md font-bold text-[#4f9999] text-[14px] flex items-center'>Senior <FaTimes className='bg-[#63BABA] hover:bg-gray-800 text-white ml-1 cursor-pointer'/></p>
                <p className='bg-[#d9f3f3] p-1 rounded-md font-bold text-[#4f9999] text-[14px] flex items-center'>HTML <FaTimes className='bg-[#63BABA] hover:bg-gray-800 text-white ml-1 cursor-pointer'/></p>
                <p className='bg-[#d9f3f3] p-1 rounded-md font-bold text-[#4f9999] text-[14px] flex items-center'>CSS <FaTimes className='bg-[#63BABA] hover:bg-gray-800 text-white ml-1 cursor-pointer'/></p>
                <p className='bg-[#d9f3f3] p-1 rounded-md font-bold text-[#4f9999] text-[14px] flex items-center'>JavaScript <FaTimes className='bg-[#63BABA] hover:bg-gray-800 text-white ml-1 cursor-pointer'/></p>
            </div>

            <button className='text-[#158383] mr-7 cursor-pointer underline'>clear</button>
        </div>
    )
}

export default Filter
