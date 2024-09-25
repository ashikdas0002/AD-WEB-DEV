import React from 'react';
import './MyQualities.css'
import MyQuality from '../MyQuality/MyQuality';
const MyQualities = () => {
    return (
        <div className='mt-48'>
            {/* qutalities info  */}
            <div>
                <h1 className='text-5xl text-center font-bold intro-text'>
                    My Quality Services
                </h1>
                <p className='text-[23px] text-info text-center mt-4 font-bold'>
                    We put your ideas and thus your wishes in the form of a unique web project that <br /> inspires you and you customers.
                </p>
            </div>
            <div>
                <MyQuality />
            </div>
        </div>
    );
};

export default MyQualities;