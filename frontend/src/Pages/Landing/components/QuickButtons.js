import React from 'react'
import { Button, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBell, FaBookOpenReader, FaTimeline } from 'react-icons/fa6';

function QuickButtons() {
    return (
        <>
            <div className="tileContainer" >
                <Button as={Link} to={"student-notifications"} className="tile" colorScheme='whiteAlpha' >
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
        </>
    )
}

export default QuickButtons