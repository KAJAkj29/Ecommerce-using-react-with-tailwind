import React from 'react'

function About() {
  return (
    <>
        <div className='w-screen h-fit bg-[#060010]  flex justify-center '>
      <div className='w-[95%] h-full bg-[#060010] grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='h-full bg-[#060010]'> 
          <div className='w-full h-[50%] flex justify-center items-end mx-7' >
          <h1 className='t1'>We provide <span className='text-[#3a66eb]'>youSuper Quality</span> Shoes</h1>
          </div>
          <div className='text-xl text-white mx-7'>
          <p>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p><br />
          <p>Our dedication to detail and excellence ensures your satisfaction</p>
          <button className='px-10 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition duration-300 shadow-lg'>view details</button>
          </div>
        </div>
        <div className='h-full bg-[#060010] flex justify-center'>
        <div className='w-[90%] h-full '>
        <img src="https://images.unsplash.com/photo-1750493101721-72dbceafef2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxzaG9lc3xlbnwwfDJ8MHx8fDI%3D" className=' rounded-3xl' alt="" />
        </div>
        </div>
 

      </div>

    </div>
    <div className=' h-[30rem] bg-[#070F2B] grid lg:grid-cols-2 sm:grid-cols-1'>
      <div className='h-full  '>
        <div className=' h-[50%]  flex justify-center items-end'>
          <h1 className='text-5xl text-white text-shadow-lg text-shadow-[#8865c7]'>Sign Up for <span className='text-[#8865c7] text-shadow-lg text-shadow-amber-50'>Updates</span></h1>
        </div>
        <div className='w-screen h-[50%] bg-[#1 px-[10rem]'>
          <h1 className='text-5xl text-white'>& Newsletter</h1>
        </div>
      </div>
      <div className='h-full   flex justify-center items-center'>
        <input type="text " placeholder='subscribe@shoenique.com ' className='border-2 text-white border-white w-[20rem] h-[5rem] px-5 rounded-[5rem]' />
        <button className='w-[6rem] h-[3rem] rounded-4xl  bg-[#af9dd1] cursor-pointer mx-2 hover:bg-[#6636be] hover:text-white hover:text-shadow-lg hover:text-shadow-purple-600 '>Sign Up</button>
      </div>

    </div>
    </>
  )
}

export default About