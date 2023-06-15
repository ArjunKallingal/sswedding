import React from 'react'
import './footer.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function footer() {
    return (
        <div>
            <div className='footer text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-3 mt-5">
                            <h3>Our Office</h3>
                            <a><i className="fa-solid fa-location-dot me-2 mt-3"></i>THRISSURE & PALAKKAD</a><br />
                            <a><i class="fa-solid fa-phone-volume me-2"></i>+91 9605795637</a><br />
                            <label className='foot-email' href='#'><i class="fa-solid fa-envelope me-2"></i>Suneeshvaniyampara@gmail.com</label><br />
                            <div className='mt-2'>
                            <a className='nan' href='https://instagram.com/ss_wedding_company_?igshid=NTc4MTIwNjQ2YQ=='><i class="fa-brands fa-3x me-2 fa-square-instagram"></i></a>
                            <a className='nan' href='http://wa.me/919605795637'><i class="fa-brands fa-3x me-2 fa-square-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 mt-5">
                            <h3>Quick Links</h3>
                            <a class="ex2" href='/'><i class="fa-solid me-2 fa-chevron-right mt-3"></i>About Us</a><br />
                            <a class="ex2" href='/contact'><i class="fa-solid me-2 fa-chevron-right"></i>Contact Us</a><br />
                            <a class="ex2" href='/services'><i class="fa-solid me-2 fa-chevron-right"></i>Our Services</a><br />
                            <a class="ex2" href='/why-us'><i class="fa-solid me-2 fa-chevron-right"></i>Why Us</a>
                        </div>
                        <div className="col-sm-4 col-md-3 mt-5">
                            <h3>Business Hours</h3>
                            <strong>24 × 7 service</strong><br />
                        </div>
                        <div className="col-sm-4 col-md-3 mt-5">
                            <h3>Newsletter</h3>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3 text-black mt-4"
                            >
                                <Form.Control type="email" className='text-black' placeholder="name@example.com" />
                            </FloatingLabel>
                            <Button className='btny' variant="warning">send</Button>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='copyright'>Copyright © Blue Bird, All Right Reserved.</p>
                <br />
            </div>
        </div>
    )
}

export default footer