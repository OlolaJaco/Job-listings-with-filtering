import React from 'react';

const JobList = ({ jobData }) => {
    return (
        <div className='mt-10 mx-auto flex flex-col items-center'>
            {jobData.map((job, index) => (
                <div key={index} className='flex w-3/4 justify-between md:items-center bg-white py-6 rounded-md shadow-[5px_2px_4px_0px_rgba(0,0,0,0.25)] flex-col md:flex-row sm:items-start mb-4'>
                    <div className='flex flex-col md:flex-row mx-5'>
                        <img src={job.image} alt="" className='w-20 h-20 rounded-full mx-8 mb-4' />
                        <div>
                            <div className='flex gap-2'>
                                <p className='text-[#63BABA] font-bold'>{job.company}</p>
                                {job.new && <p className='bg-[#63BABA] text-white h-6 w-12 px-1 rounded-full'>New!</p>}
                                {job.featured && <p className='bg-gray-800 text-white p-1 rounded-2xl px-2 text-[11px]'>FEATURED</p>}
                            </div>
                            <p className='text-gray-950 font-bold my-1'>{job.position}</p>
                            <div className='flex gap-3 text-gray-400 font-bold text-[14px] items-center'>
                                <p>{job.postedAt}</p>
                                <span className='bg-gray-400 h-1 w-1 rounded'></span>
                                <p>{job.contract}</p>
                                <span className='bg-gray-400 h-1 w-1 rounded'></span>
                                <p>{job.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[1px] w-[21rem] bg-gray-400 md:hidden m-auto my-3'></div>
                    <div className='flex gap-4 mx-5 flex-wrap'>
                        {job.languages.map((language, idx) => (
                            <p key={idx} className='bg-[#d9f3f3] p-1 rounded-md font-bold text-[#4f9999] text-[14px] px-2'>{language}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobList;
