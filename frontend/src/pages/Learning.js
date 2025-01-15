// import React from 'react'
import vid from '../assets/vid.mp4'
import '../stylesheets/Learning.css'
const About = () => {
  // bg-[#f0f7b5] 
  return (
    <div>
      <div className='h-[74px] bg-emerald-900'></div>
      {/* // VIDEO SECTION */}
        <div className='container3rdl bg-[#f0f7b5]'>
        <div className='container3rd1 bg-[#f0f7b5]'>

            <div className='ltextcontainer bg-[#f0f7b5] flex-1 flex flex-col items-start justify-center relative'>
    <h3 className='container3rdleft1 text-[#7d8729]'>
        What makes Mesa’s <i className='font-serif text-[#7d8729]'>pedagogy unique?</i>
    </h3>
    <p className='container3rdleft2 text-black text-md bg-[#d9e38a] relative'>
        A uniquely designed immersive learning <br /> experience
    </p>
    <button className='learnmorebtn absolute text-sm  text-white shadow-lg'>
        LEARN MORE
    </button>
</div>

            <div className='container3rdright bg-[#f0f7b5]'>

                <div className=" relative w-full h-full flex items-center justify-center overflow-hidden mr-12">
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

        <div>
          <div className='Learningdiv p-8 bg-[#fefaf5]'>
            <h2 className='text-3xl text-emerald-950 tracking-wide'>Learning outcomes that <i className='text-emerald-700 font-serif'>set you up for success</i></h2>
            <p className='text-xl text-slate-600'>We work backwards from 10 industry-focused learning outcomes that prepare you for the startup world</p>
          </div>

          <div className='flex w-screen h-screen'>
            <div className='w-1/3 bg-[#efe9e2] text-black flex items-center justify-center'>
                  left Contet goes here
            </div>
            <div className='w-2/3 bg-[#fefaf5] text-black flex items-center justify-center'>
                  right content goes here
            </div>

          </div>
        </div>
    </div>
  )
}

export default About
