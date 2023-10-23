import React from 'react'
import { FcAdvertising, FcAnswers } from "react-icons/fc";
import banner from './../../assets/images/image.jpeg'
import video_from_hod from './../../assets/videos/from-hod.mp4'
import hod_image from './../../assets/images/hod-image.jpg'
import './Home.css'
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBell, FaBookOpenReader, FaTimeline } from 'react-icons/fa6';
import UpcomingEvents from './components/UpcomingEvents';
import LatestNews from './components/LatestNews';

function Home() {
  const events = [
    {
      title: 'Event 1',
      date: '2023-11-15',
      description: 'Description for Event 1',
    },
    {
      title: 'Event 2',
      date: '2023-12-10',
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];


  const news = [
    {
      title: 'News Article 1',
      date: '2023-11-15',
      description: 'Description for News Article 1',
      image: hod_image,
    },
    {
      title: 'News Article 2',
      date: '2023-12-10',
      description: 'Description for News Article 2',
      image: hod_image,
    },
    // Add more articles as needed
  ];


  return (
    <>
      <div className='m-header'>
        <div className='m-title'>
          Announcements
        </div>
        <marquee behavior="scroll" direction="left" className='alerts' >
          <div>
            <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
            <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
            <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
            <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
          </div>
        </marquee>
      </div>
      <div className="banner">
        <div className='bannerContent'>
          <h1>Information Technology</h1>
          <h2>National Institute of Technology, Srinagar</h2>
        </div>
      </div>

      <div className="tileContainer" >
        <Button as={Link} to={"student-notifications"} className="tile" colorScheme='whiteAlpha'>
          <FaBell />
          <h1>Student Notification</h1>
        </Button>
        <Button as={Link} to={'semester/all'} className="tile" colorScheme='whiteAlpha'>
          <FaBookOpenReader />
          <h1>Course Work</h1>
        </Button>
        <Button as={Link} to={'traning-placement'} className="tile" colorScheme='whiteAlpha'>
          <FaTimeline />
          <h1>Trainings & Placements</h1>
        </Button>
      </div>

      <div className="h-title">
        <h1>FROM HOD</h1>
      </div>
      <div className='container'>
        <div className='hod-message'>
          <h1>ABOUT IT Department</h1>
          <p className='text-content'>
            The Department of Information Technology was established in 2007, offering a four-year undergraduate program (B.Tech) in Information Technology. This undergraduate program is of 4 years' duration with the first year spread over two semesters, which is common to all the branches. The intake capacity of the department was 40 in 2007 and then subsequently increased to 55 in 2009. The Department offers a broad curriculum including: Database Management, Software Engineering, Management of Information Systems, Data mining, Computer Graphics, Advanced Internet Technology, Computer Networks, Operating System, Data Structures and Algorithms as the main courses and other courses in collaboration with the other departments of the institute at the undergraduate level. The Department of Information Technology embodies the Institute's tradition of excellence as a world-class leader in IT education and research. The IT sector is in a period of bloom in terms of growth and opportunity. In the current ever-evolving industrial scenario, contents delivered to the students are regularly updated by the faculty members who have themselves well acquainted with path-breaking research and innovations in the present technology-oriented world. In addition to academic courses, the department also has IT research programs supported through government funding and industry sponsorship. Faculty research helps expand the current and future use of new and existing technologies.
          </p>
        </div>

        <video className='hod-video' src={video_from_hod} controls>

        </video>
      </div>


      <div className="h-title">
        <h1>IMPORTANT ANNOUNCEMENTS</h1>
      </div>
      <div className='container a-container'>

        <div className="a-tile">
          <div className="a-icon"><FcAdvertising size={'100%'} /></div>
          <p className='a-text-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <div className="a-tile">
          <div className="a-icon"><FcAdvertising size={'100%'} /></div>
          <p className='a-text-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <div className="a-tile">
          <div className="a-icon"><FcAdvertising size={'100%'} /></div>
          <p className='a-text-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>

      </div>

      <UpcomingEvents events={events} />
      <LatestNews news={news}/>

    </>
  )
}

export default Home
