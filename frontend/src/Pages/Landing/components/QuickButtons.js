import React from 'react'
import { Button, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBell, FaBookOpenReader, FaTimeline } from 'react-icons/fa6';
import { AiTwotoneExperiment } from "react-icons/ai";


function QuickButtons() {
    return (
        <>
            <div className="tileContainer" >
                <Button as={Link} to={"labs"} className="tile" colorScheme='whiteAlpha' >
                    <AiTwotoneExperiment />
                    <h1>Laboratories</h1>
                </Button>
                <Button as={Link} to={'semester/all'} className="tile" colorScheme='whiteAlpha'>
                    <FaBookOpenReader />
                    <h1>Course Work</h1>
                </Button>
                <Button as={Link} to={'placement-brochure'} className="tile" colorScheme='whiteAlpha'>
                    <FaTimeline />
                    <h1>Trainings & Placements</h1>
                </Button>
            </div>
        </>
    )
}

export default QuickButtons