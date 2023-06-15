import React from 'react'
import './Home.css'
import serv from '../assets/serv.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import Contact from './Contact'


function Home() {
  return (
    <div>
      <div className='home-1'>
        <h1 className='home-h1' style={{ fontWeight: 700 }}>Creating Enchanting Ambiences with Our Expert Decoration Team</h1>
        <p className='home-h1'>Feel free to modify it according to your specific needs and preferences.</p>
      </div>

      <div className='services p-3 container'>
        <h2 className='service-h2 mt-3'>Our Services</h2>
        <div className='row container'>
          <div className='col-sm-6 col-md-6'>
            <img className='service-img' src={serv} />
          </div>
          <div className='col-sm-6 col-md-6'>
            <p className='service-p'>Our skilled and dedicated team specializes in providing exceptional event services, ensuring memorable experiences for all occasions. From enchanting birthday parties to elegant weddings, we offer comprehensive event planning and management solutions.
              Our expertise extends to catering services, where we create delectable menus tailored to your preferences. Additionally, our team excels in transforming houses into captivating spaces,
              adding a touch of beauty and style to every corner. With our attention to detail and creativity,
              we guarantee that your event will be meticulously organized and flawlessly executed. Trust us to make your special moments truly extraordinary.</p>
          </div>
        </div>
      </div>

      <div className='our-works'>
        <h2 className='service-h2 mt-5'>Our Works</h2>

        <div className="scroll-container mb-4">          
          <img className='scroll-img' src={img2} />
          <img className='scroll-img' src={img3} />
          <img className='scroll-img' src={img4} />
          <img className='scroll-img' src={img5} />
          <img className='scroll-img' src={img6} />
          <img className='scroll-img' src={img7} />
          <img className='scroll-img' src={img8} />
          <img className='scroll-img' src={img1} />
        </div>

      </div><br/>
      <Contact/>
    </div>
  )
}

export default Home