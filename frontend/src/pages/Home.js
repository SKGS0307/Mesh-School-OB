import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import vid from '../assets/vid.mp4'
import '../stylesheets/Home.css'


function Home() {
    
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "https://localhost:8080/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div id='main'>

       
  {/* THIS IS VIDEO SECTION */}
   <div className="relative w-screen h-screen flex items-center justify-center">
        {/* Video Background */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute inset-0"
        >
            <source src={vid} type="video/mp4" />
        </video>

        {/* Overlay Content */}
        <div className="HomeVdideocontentcontainer relative z-10 text-white space-y-4 text-left">
            <h1 className="text-4xl font-normal mb-8">India&apos;s First Startup Focused</h1>
            <p className="text-4xl text-emerald-300 font-serif mb-8"> <i>Business School</i> </p>
            <h4 className="Month12 font-thin text-2xl mt-8">
                12-Month Full-Time <br />
            </h4>
                <strong className='font-semibold text-2xl'>PGP in Startup Leadership</strong>
            <p className="Built text-sm mt-20">Built by alumni from</p>
            <div className='flex'>
                <h3>LOGO1</h3>
                <h3>LOGO2</h3>

            </div>
            <button className='learnmore'>
                LEARN MORE ICON
            </button>
        </div>

        {/* Optional Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
   

  {/* PHOTOS SECTION STARTS HERE */}

    <div className='photos'>
        <div className='content'>
            <h2 className='text-5xl text-emerald-950'>Backend by <i className='text-emerald-600 font-serif'>India&apos;s top entrepreneurs</i></h2> 
            <p className='py-5 text-2xl text-slate-500'>
                The startup ecosystem comes together to build the country&apos;s only
                <br />
                VC-backed startup-focused business school
            </p>
            
        </div>
        <div className='photocontainer'>
                
                <div id='p1'>Kunal Shah <br className='text-sm' />CRED</div>
                <div id='p2'>Kunal Shah <br className='text-sm' />CRED</div>
                <div id='p3'>Kunal Shah <br className='text-sm' />CRED</div>
                <div id='p4'>Kunal Shah <br className='text-sm' />CRED</div>
                <div id='p5'>Kunal Shah <br className='text-sm' />CRED</div>
                <div id='p6'>Kunal Shah <br className='text-sm' />CRED</div>
                {/* <button onClick={handleLogout}>Logout</button> */}
            </div>

    </div>

    <div className='container3rd '>
        <div className='container3rd1'>

            <div className='container3rdleft flex-1 flex flex-col  justify-center'>
                <h3 className='container3rdleft1 text-slate-950 ' >Built by <i className='text-[#7d8729] font-serif'>pedigreed & <br />experienced leaders</i> </h3>
                <p className='container3rdleft2 text-slate-600 text-lg'>  Alumni from HBS & Kellogg unite to bring a fresh <br />take to business foundations, building a business <br /> school focused on the future.</p>

            </div>
            <div className='container3rdright'>

                <div className=" relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover absolute inset-0"
                                >
                                <source src={vid} type="video/mp4" />
                    </video>
 
 
    {/* Optional Background Overlay */}

    <div className=" inset-0 bg-black opacity-50"></div>
    </div>

            </div>
        </div>
    </div>

    
    <ToastContainer />
</div>
    )
}

export default Home

 
            // <h1>Welcome {loggedInUser}</h1>
