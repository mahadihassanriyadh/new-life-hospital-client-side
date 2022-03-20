import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import doc1 from '../../images/doc1.jpg';

const Doctors = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto mt-8'>
                <h1 className='text-5xl font-bold text-rose-500'>Our Heros</h1>
                <h4 className='text-xl font-bold'>They are one of the bests in their fields.</h4>

                {/* Grid Starts */}
                <div class="grid gap-4 grid-cols-4 grid-rows-3">
                    <div className='drop-shadow-lg rounded-lg bg-rose-50 p-5'>
                        <img className='rounded-full w-44 mx-auto' src={doc1} alt="" />
                        <p className='text-xl mt-2'><span className='font-bold'>Name:</span> Hassan Imam</p>
                        <p className='text-xl mb-5'><span className='font-bold'>Speciality:</span> </p>

                        <button
                            className="text-white bg-rose-500 hover:text-white hover:bg-rose-700 focus:ring-4 focus:ring-rose-400 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 dark:border-rose-500 dark:text-rose-500 dark:hover:text-white dark:hover:bg-rose-600 dark:focus:ring-rose-800"
                            >
                            {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <FontAwesomeIcon className="h-5 w-5 text-rose-400 group-hover:text-rose-600" icon={faTwitter} />
                            </span> */}
                            Book Appointment
                        </button>

                        <button
                            className="text-rose-500 hover:text-black border border-rose-500 hover:bg-rose-200 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-300 dark:text-rose-300 dark:hover:text-white dark:hover:bg-rose-300 dark:focus:ring-rose-500"
                            >
                            {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <FontAwesomeIcon className="h-5 w-5 text-rose-400 group-hover:text-rose-600" icon={faTwitter} />
                            </span> */}
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;