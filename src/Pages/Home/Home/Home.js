import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookAnAppointment from '../BookAnAppointment/BookAnAppointment';
import HomeBanner from '../HomeBanner/HomeBanner';
import WhyNewLife from '../WhyNewLife/WhyNewLife';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <HomeBanner></HomeBanner>
                <WhyNewLife></WhyNewLife>
                <BookAnAppointment></BookAnAppointment>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;