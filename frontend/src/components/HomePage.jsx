import React from 'react';
import HighlightText from './common/HighlightText';
import { Link } from 'react-router-dom';
import HomeImage from '../Assets/home-logo.png';

const HomePage = () => {
    return (
        <React.Fragment>
            <div className='flex w-full h-screen'>
                <div className='w-1/2 flex flex-col items-start justify-center gap-7 px-20'>
                    <div className='flex flex-col gap-5 mb-10'>
                        <div className='text-3xl lg:text-5xl font-semibold mb-6 text-center w-full'>
                            Build your resume in
                            <HighlightText text={"three "} />
                            easy steps
                        </div>
                        <div className='text-[16px] text-center w-full mb-3'>
                            Resume builder tools help you create well-structured and visually appealing resumes. With a resume builder,
                            you can easily craft a professional resume in just a few simple steps. These tools provide various template options,
                            allowing you to choose the design that best matches your preferences and requirements.
                        </div>
                        <div className='text-xl'>
                            <div className='mb-4'> 
                                <p>
                                    1. Select a template from our collection.
                                </p>
                            </div>
                            <div className='mb-4'>
                                <p>
                                    2. Build your resume using our easy-to-use resume builder.
                                </p>
                            </div>
                            <div>
                                <p>
                                    3. Download your resume.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center p-32'>
                    <img src={HomeImage} alt="HomeImage" className="w-full h-auto object-cover mb-4" />
                    <button
                        // onClick={handleSelectTemplate}
                        className="px-6 py-2 w-full h-full rounded-full bg-teal-500 text-white hover:bg-teal-600"
                    >
                        Select Template
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomePage;
