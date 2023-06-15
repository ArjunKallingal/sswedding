import React from 'react'
import serv from '../assets/serv.png'

function Services() {
  return (
    <div>
        <div className='services p-3 container'>
        <h2 className='service-h2 mt-3'>Our Services</h2>
        <div className='row container'>
        <div className='col-sm-6 col-md-6'>
          <img className='service-img' src={serv}/>
        </div>
          <div className='col-sm-6 col-md-6'>
            <p className='service-p'>Our skilled and dedicated team specializes in providing exceptional event services, ensuring memorable experiences for all occasions. From enchanting birthday parties to elegant weddings, we offer comprehensive event planning and management solutions.
              Our expertise extends to catering services, where we create delectable menus tailored to your preferences. Additionally, our team excels in transforming houses into captivating spaces,
              adding a touch of beauty and style to every corner. With our attention to detail and creativity,
              we guarantee that your event will be meticulously organized and flawlessly executed. Trust us to make your special moments truly extraordinary.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services