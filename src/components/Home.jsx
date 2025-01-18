import React from 'react'
import img1 from '../assets/img1.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import { Accordion, Card, Col, Row } from 'react-bootstrap'
import i1 from '../assets/i1.png'
import i2 from '../assets/i2.png'
import i3 from '../assets/i3.png'
import i4 from '../assets/i4.png'
import i5 from '../assets/i5.png'
import i6 from '../assets/i6.png'
import logo2 from '../assets/logo2.png'
import Avatar from '../assets/Avatar.png'
import Avatar2 from '../assets/Avatar2.png'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'




function Home() {
  return (
    <>
      <div className=' container d1'>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button style={{ color: ' #E63F3A',maxWidth:'400px' }} className='btn border bt1 p-2 '><span className='fw-bolder newF'>New features</span> Check out the team dasboard <i class="fa-solid fa-arrow-right"></i></button>
          <h1 className='mt-3 fw-bolder head1 text-center'>Beautiful analytics to grow smarter</h1>
        </div>
        <p style={{ marginTop: '24px' }} className=' text-center'>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.</p>
        <div style={{ marginTop: '48px' }} className=" d-flex justify-content-center buttonss">
          <button style={{ backgroundColor: '#F0F8FF' }} className="btn  demo"><i class="fa-solid fa-circle-play fa-xs"></i>  Demo</button>
          <button style={{ backgroundColor: '#E63F3A' }} className="btn signupBt ms-3 text-light"> Sign Up</button>
        </div>
        {/* img1 */}
        <div style={{ marginTop: '64px' }} className='d-flex justify-content-center ' >
          <img style={{ width: "900px", height: '500px' }} className='img-fluid img1' src={img1} alt="" />
        </div>
        {/* brand */}
        <div>
          <p style={{ color: '#475467', marginTop: '80px' }} className='text-center'>Join 4,000+ companies already growing</p>
          <div className="row d-flex justify-content-between align-items-center  mt-4 ">
            {/* --------- */}
            <img style={{ width: '140px', height: '30px' }} className='img-fluid' src={c1} alt="" />
            <img style={{ width: '140px', height: '30px' }} className='img-fluid' src={c2} alt="" />
            <img style={{ width: '140px', height: '30px' }} className='img-fluid' src={c3} alt="" />
            <img style={{ width: '140px', height: '30px' }} className='img-fluid' src={c4} alt="" />
            <img style={{ width: '140px', height: '30px' }} className='img-fluid' src={c5} alt="" />
            <img style={{ width: '140px', height: '30px' }} className='img-fluid' src={c6} alt="" />   
          </div>
        </div>
        {/* features */}
        <div style={{ marginTop: '120px' }} className="d-flex flex-column justify-content-center align-items-center">
          <h5 style={{ color: ' #E63F3A' }} className='fw-bolder'>Features</h5>
          <h2 className='mt-2 fw-bolder text-center'>Analytics that feels like it’s from the future</h2>

        </div>
        <p className='mt-3 text-center'>
          Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups.
        </p>


        {/* card */}
        <div style={{ marginTop: '80px' }}>
          <div className="row d-flex  justify-content-around align-items-center mb-3 ">
            {/* ------------------------ */}
            <Card className='border-0' style={{ width: '18rem' }}>
              <Card.Body className=' d-flex flex-column justify-content-center align-items-center' >
                <img style={{ width: '48px', height: '48px' }} className='img-fluid' src={i1} alt="" />
                <h6 className='fw-bolder'>Share team inboxes</h6>
                <p className='text-center'> Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
              </Card.Body>
            </Card>

            <Card className='border-0' style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
                <img style={{ width: '48px', height: '48px' }} className='img-fluid' src={i2} alt="" />
                <h6 className='fw-bolder'>Deliver instant answers</h6>
                <p className='text-center'> An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
              </Card.Body>
            </Card>

            <Card className='border-0' style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
                <img style={{ width: '48px', height: '48px' }} className='img-fluid' src={i3} alt="" />
                <h6 className='fw-bolder'>Manage your team with reports</h6>
                <p className='text-center'> Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
              </Card.Body>
            </Card>

            <Card className='border-0' style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
                <img style={{ width: '48px', height: '48px' }} className='img-fluid' src={i4} alt="" />
                <h6 className='fw-bolder'>Connect with customers</h6>
                <p className='text-center'> Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
              </Card.Body>
            </Card>

            <Card className='border-0' style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
                <img style={{ width: '48px', height: '48px' }} className='img-fluid' src={i5} alt="" />
                <h6 className='fw-bolder'>Connect the tools you already use</h6>
                <p className='text-center'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
              </Card.Body>
            </Card>

            <Card className='border-0' style={{ width: '18rem' }}>
              <Card.Body className='d-flex flex-column justify-content-center align-items-center' >
                <img style={{ width: '48px', height: '48px' }} className='img-fluid' src={i6} alt="" />
                <h6 className='fw-bolder'>Our people make the difference</h6>
                <p className='text-center'> We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
              </Card.Body>
            </Card>

          </div>


        </div>
      </div>


      {/* sysphus */}

      <div className='mt-5' style={{ width: '100%', height: '400px', backgroundColor: '#F9FAFB' }}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img style={{ width: '140px', height: '40px' }} className='mt-5 img-fluid' src={logo2} alt="" />
          <p style={{ fontSize: '30px' }} className='fw-bolder text-center mt-4'>We’ve been using Untitled to kick start every new <br />
            project and can’t imagine working without it.</p>
          <img style={{ width: '40px', height: '40px' }} className='mt-3' src={Avatar} alt="" />
          <p className='fw-bolder mt-3'>Candice Wu</p>
          <p>Product Manager,Sysphus</p>

        </div>
      </div>

      {/* frequent */}
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 ">
        <h4 className='fw-bolder'>Frequently asked questions</h4>
        <p>Everything you need to know about the product and billing.</p>

        {/* Accordion */}

        <Accordion className='mt-5 ' style={{ width: "350px" }} defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Is there a free trial available?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I change my plan later?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is your cancellation policy?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can other info be added to an invoice?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How does billing work?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How do I change my account email?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className='mt-5 d-flex flex-column justify-content-center align-items-center  ' style={{ width: '100%', height: '300px', backgroundColor: '#F9FAFB' }}>
          <img style={{ width: '120px', height: '56px' }} className='img-fluid' src={Avatar2} alt="" />
          <h5 className='fw-bolder mt-4'>Still have questions?</h5>
          <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <button style={{ backgroundColor: '#E63F3A' }} className='btn text-light rounded'>Get in touch</button>
        </div>
      </div>

      {/* blog */}

      <div className=" container  mt-5">
        <div className='d-flex justify-content-between'>
          <h4 className='fw-bolder' style={{ color: '#E63F3A' }}>Our blog</h4>
          <button style={{ backgroundColor: '#E63F3A' }} className='btn text-light rounded'>View all Post</button>
        </div>
        <h4 className='fw-bolder mt-4'>Lastest blog post's</h4>
        <p>Tool and strategies modern teams need to help their companies grow.</p>
        <div className="row d-flex  justify-content-around align-items-center mt-5">

          <Card className='mb-3' style={{ width: '18rem', height: '400px' }}>
            <Card.Img variant="top" src={b1} />
            <Card.Body>
              <p style={{ color: '#E63F3A' }}>Design</p>
              <h6 className='fw-bolder'>UX review presentation</h6>
              <p>How do you create compelling presentations that wow your colleagues ?</p>
              <img style={{ width: '100px', height: '30px' }} src={r1} alt="" />

            </Card.Body>
          </Card>

          <Card className='mb-3' style={{ width: '18rem', height: '400px' }}>
            <Card.Img variant="top" src={b2} />
            <Card.Body>
              <p style={{ color: '#E63F3A' }}>Product</p>
              <h6 className='fw-bolder'>Migrating to Linear 101</h6>
              <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
              <img style={{ width: '100px', height: '30px' }} src={r2} alt="" />

            </Card.Body>
          </Card>

          <Card className='mb-3' style={{ width: '18rem', height: '400px' }}>
            <Card.Img variant="top" src={b3} />
            <Card.Body>
              <p style={{ color: '#E63F3A' }}>Building your API stack</p>
              <h6 className='fw-bolder'>UX review presentation</h6>
              <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
              <img style={{ width: '100px', height: '30px' }} src={r3} alt="" />

            </Card.Body>
          </Card>

        </div>
      </div>

      {/* trail */}

      <div style={{ height: '300px', backgroundColor: '#F9FAFB' }} className="mt-5 w-100 d-flex flex-column justify-content-center align-items-center ">
        <h3 className='mt-5 fw-bolder'>Start your free trail</h3>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div>
          <button style={{ backgroundColor: '#F0F8FF' }} className="btn rounded"> Learn More</button>
          <button style={{ backgroundColor: '#E63F3A' }} className="btn ms-3 text-light rounded"> Get Started</button>
        </div>


      </div>



    </>
  )
}

export default Home