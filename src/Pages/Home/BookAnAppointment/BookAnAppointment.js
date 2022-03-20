import React from 'react';
import { NavLink } from 'react-router-dom';
import banner1 from '../../../images/banner1.png'

const BookAnAppointment = () => {
    return (
      <div className='mt-24 rounded-md drop-shadow-lg'>
        <div className='pt-24'>
          <img src={banner1} alt="" />
        </div>

        <div className="bg-rose-50 ">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Facing any Physical or Mental Problem?</span>
              <span className="block text-rose-500">Book an Appointment today!</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <NavLink
                  to="bookAnAppointment"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-700"
                >
                  Book An Appointment
                </NavLink>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <NavLink
                  to="/allServices"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-500 bg-white hover:bg-gray-50"
                >
                  See All Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookAnAppointment;