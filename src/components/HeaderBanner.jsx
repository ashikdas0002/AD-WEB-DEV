import './HeaderBanner.css';
import headerBannder from '../images/header-banner.png'
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const HeaderBanner = () => {
    const ashik = `It's Ashik`
    const downloadIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>;
    return (
        <div className='header-bg mx-auto'>
            <div className=' 
             lg:flex items-center place-content-evenly text-center'>
                {/* header intro  */}
                <div className='font-[robot]'>
                    <h1 className='text-[#DDDDDD] text-2xl md:text-7xl '>HI</h1>
                    <h1 className='text-[#DDDDDD] text-5xl font-bold '> {ashik}</h1>
                    <h3 className='
                    md:w-[700px]
                    header-intro-bg md:text-7xl text-4xl  mx-auto font-[700px] mt-2'>UI/UX FULL-SATACK
                        WEB DEVELOPER</h3>
                    <p className="mt-2 text-[#DDDDDD] text-1xl md:text-2xl w-[300px] md:w-[450px] mx-auto">
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                    </p>
                    {/* cv section  */}
                    <div className='mt-3 md:flex items-center 
                    place-content-center space-x-5 mx-auto'>
                        <div>
                            <button className=' mx-auto mb-3 cv-btn'>
                                Download CV {downloadIcon}

                            </button>
                        </div>
                        {/* Socila icos  */}
                        <div className=' mb-3 flex items-center '>
                            <div className='text-[#DDDDDD] icon-border mx-auto'>
                                <FaGithub />
                            </div>
                            <div className='text-[#DDDDDD] icon-border mx-auto'>
                                <FaLinkedin />
                            </div>
                            <div className='text-[#DDDDDD] icon-border mx-auto'>
                                <FaTwitter />
                            </div>
                            <div className='text-[#DDDDDD] icon-border mx-auto'>
                                <FaDribbble />
                            </div>

                        </div>
                    </div>
                </div>
                {/* header banner  */}
                <div className='mt-4'>
                    <div className='banner-frame md:w-[400px] w-[300px] mx-auto'>
                        <img src={headerBannder} alt="" />
                    </div>
                </div>
            </div>

            {/* banner experinece details  */}
            <div className='md:w-[1440px] mx-auto  md:flex items-center place-content-center gap-x-8 text-center mt-7 p-6 rounded-md banner-experince-info'>
                <div className='md:flex items-end gap-x-2'>
                    <h3 className='text-7xl font-bold text-[#DDDDDD]'>4</h3>
                    <div>
                        <p className='text-[#DDDDDD] text-2xl'>Years of</p>
                        <h3 className='text-4xl text-[#DDDDDD] font-[700px]'>Experince</h3>
                    </div>
                </div>
                <div className='md:flex items-end gap-x-2' >
                    <h3 className='text-7xl font-bold text-[#DDDDDD]'>50+</h3>
                    <div>
                        <p className='text-[#DDDDDD] text-2xl'>Projects</p>
                        <h3 className='text-4xl text-[#DDDDDD] font-[700px]'>Complete</h3>
                    </div>
                </div>
                <div className='md:flex items-end gap-x-2' >
                    <h3 className='text-7xl font-bold text-[#DDDDDD]'>100%</h3>
                    <div>
                        <p className='text-[#DDDDDD] text-2xl'>Happy</p>
                        <h3 className='text-4xl text-[#DDDDDD] font-[700px]'>Clients</h3>
                    </div>
                </div>
                <div className='md:flex items-end gap-x-2'>
                    <h3 className='text-7xl font-bold text-[#DDDDDD]'>99%</h3>
                    <div>
                        <p className='text-[#DDDDDD] text-2xl'>Good</p>
                        <h3 className='text-4xl text-[#DDDDDD] font-[700px]'>Reviews</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBanner;
