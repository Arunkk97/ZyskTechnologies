import React from 'react'
import logo1 from '../assets/logo.png'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <div className='container'>
        <Row style={{ width: '100%' }} className="d-flex  mt-5">
          <Col className='d-flex flex-column justify-content-center align-items-center' sm={6} lg={2}>
            <h5 className='fw-bolder'>Product</h5>
            <p >Overview</p>
            <p >Features</p>
            <p >Solution</p>
            <p >Tutorial</p>
            <p >Pricing</p>
            <p >Solution</p>
          </Col>
          <Col  className='d-flex flex-column justify-content-center align-items-center' sm={6} lg={2}>
            <h5 className='fw-bolder'>Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>News</p>
            <p>Media</p>
            <p>Contact</p>
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center' sm={6} lg={2}>
            <h5 className='fw-bolder'>Resources</h5>
            <p>Blog</p>
            <p>Newsletter</p>
            <p>Events</p>
            <p>Help</p>
            <p>Tutorial</p>
            <p>Support</p>
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center' sm={6} lg={2}>
            <h5 className='fw-bolder'>Use cases</h5>
            <p>Startup</p>
            <p>Enterprise</p>
            <p>Government</p>
            <p>Saas Center</p>
            <p>Market</p>
            <p>Ecommerce</p>
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center' sm={6} lg={2}>
            <h5 className='fw-bolder'>Social</h5>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Ecommerce</p>
            <p>Github</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center' sm={6} lg={2}>
            <h5 className='fw-bolder'>Legal</h5>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>License</p>
            <p>Settings</p>
            <p>zcontact</p>
          </Col>

        </Row>
        <hr />


        <div className="d-flex flex-column justify-content-between align-items-center  m-5 ">
          <img style={{width:'90px',height:'40px'}} className='img-fluid' src={logo1} alt="" />
          <p className='mt-3'>&copy; ZyskTechnologies.All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer