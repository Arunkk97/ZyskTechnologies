import React from 'react'
import logo1 from '../assets/logo.png'

function Footer() {
  return (
    <>
      <div className='container'>
        <div style={{ width: '100%' }} className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-2">
            <h5 className='fw-bolder'>Product</h5>
            <p >Overview</p>
            <p >Features</p>
            <p >Solution</p>
            <p >Tutorial</p>
            <p >Pricing</p>
            <p >Solution</p>
          </div>
          <div className="col-md-2">
            <h5 className='fw-bolder'>Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>News</p>
            <p>Media</p>
            <p>Contact</p>
          </div>
          <div className="col-md-2">
            <h5 className='fw-bolder'>Resources</h5>
            <p>Blog</p>
            <p>Newsletter</p>
            <p>Events</p>
            <p>Help</p>
            <p>Tutorial</p>
            <p>Support</p>
          </div>
          <div className="col-md-2">
            <h5 className='fw-bolder'>Use cases</h5>
            <p>Startup</p>
            <p>Enterprise</p>
            <p>Government</p>
            <p>Saas Center</p>
            <p>Market</p>
            <p>Ecommerce</p>
          </div>
          <div className="col-md-2" >
            <h5 className='fw-bolder'>Social</h5>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Ecommerce</p>
            <p>Github</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
          <div className="col-md-2">
            <h5 className='fw-bolder'>Legal</h5>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>License</p>
            <p>Settings</p>
            <p>zcontact</p>
          </div>

        </div>
        <hr />


        <div className="d-flex justify-content-between m-5 ">
          <img style={{width:'90px',height:'40px'}} className='img-fluid' src={logo1} alt="" />
          <p>&copy; ZyskTechnologies.All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer