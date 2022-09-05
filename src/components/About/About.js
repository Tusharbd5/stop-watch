import React from 'react';
import './About.css';
import developer from '../../assets/developer.jpg';


const About = ({ setopenModal }) => {
    return (
        <div className='developer'>
            <h1 className='title'>About The Developer</h1>
            <div className='developer-detail'>
                <img src={developer} alt="" />
                <div>
                    <h3 style={{ color: "orange" }} className='text-2xl font-light mt-5'>Tanjim Hasan</h3>
                    <h3 style={{ color: "orange" }} className='font-light'>Email: tushardebhata24@gmail.com</h3>



                    <h2 className='education'><span className='font-semibold text-orange-500'>Educational Background:</span> B.Sc in Computer Science and Engineering
                        <br />
                        <span>Institute: </span>Bangladesh University of Business and Technology</h2>

                    <div className='live-projects'>
                        <h2>Some of my Live Projects are Here-</h2>
                        <h2> Warehouse Mangement- <a className='text-blue-500' target='blank' href="https://warehouse-management-b76ea.web.app/">Click Here</a></h2>

                        <h2>Self Teaching Provider- <a className='text-blue-500' target='blank' href="https://self-teaching-provider.web.app/">Click Here</a></h2>

                        <h2>Laptop Collection- <a className='text-blue-500' target='blank' href="https://laptop-collection.netlify.app/">Click Here</a></h2>

                        <h2> Phone Bazar- <a className='text-blue-500' target='blank' href="https://phone-bazar-bd.netlify.app/">Click Here</a></h2>
                    </div>
                </div>
            </div>
            <button className='close-btn' onClick={() => setopenModal(false)}>X</button>
        </div>
    );
};

export default About;