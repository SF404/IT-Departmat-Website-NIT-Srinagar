import React from 'react'
import { FcAdvertising } from 'react-icons/fc'

function AnnouncementRibbon() {
    return (
        <>
            <div className='m-header'>
                <div className='m-title'>
                    Announcements
                </div>
                <marquee behavior="scroll" scrollamount="5" loop="-1" direction="left" className='alerts' >
                    <div>
                        <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
                        <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
                        <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
                        <p><FcAdvertising style={{ marginTop: '3px' }} /> Lorem ipsum doloribus ab laboriosam ea reprehenderit delectus ipsa. Facilis, quo!</p>
                    </div>
                </marquee>
            </div>
        </>
    )
}

export default AnnouncementRibbon