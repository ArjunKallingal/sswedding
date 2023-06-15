import React from 'react'
import Card from 'react-bootstrap/Card';
import './Contact.css'

function Contact() {
  return (
    <div className="container mt-5">
      <b className='contact-b'>CONTACT US</b>
      <div className='container mb-5'>
          <div>
            <h2 className='mt-3'> If You Have Any Queries, Please Feel Free To Contact Us</h2>
            <p>Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.</p>
          </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 contact1 mb-3">
          <Card style={{ width: '18rem', height: '300px', background: ' #ff464059', alignItems: 'center' }} >
            <Card.Img className='w-25 mt-5' variant="top" src='https://clipground.com/images/call-png-11.png' />
            <Card.Body>
              <Card.Title><b>Phone Number</b></Card.Title>
              <label>+91 9605795637</label>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 contact1 mb-3">
          <Card style={{ width: '18rem', height: '300px', background: ' #ff464059', alignItems: 'center' }}>
            <Card.Img className='w-50 mt-2' variant="top" src='https://clipground.com/images/email-sign-png-5.png' />
            <Card.Body >
              <Card.Title><b className='ms-5'>Email Address</b></Card.Title>
              <label>Suneeshvaniyampara@gmail.com</label>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-6 col-md-4 contact1 mb-3">
          <Card style={{ width: '18rem', height: '300px', background: ' #ff464059', alignItems: 'center' }}>
            <Card.Img className='w-25 mt-5' variant="top" src='https://th.bing.com/th/id/R.3272c1fe18282b6815d59ddc4f72441c?rik=gIz1nMAGiinf1A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_518264.png&ehk=XwLIUq2guxHg4U7SmPc6xTupYHNexZGE8d09FX%2feYks%3d&risl=&pid=ImgRaw&r=0' />
            <Card.Body>
              <Card.Title><b className='mt-3'>Office Address</b></Card.Title>
              <label>Palakkad,Thrissure</label>
            </Card.Body>
          </Card>
        </div>
      </div><br /><br />
      
    </div>
  )
}

export default Contact