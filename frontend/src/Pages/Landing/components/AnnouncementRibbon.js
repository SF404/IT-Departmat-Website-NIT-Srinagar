import { Text } from '@chakra-ui/react'
import React from 'react'
import { FcAdvertising } from 'react-icons/fc'

function AnnouncementRibbon({ announcements }) {
    console.log(announcements)

    return (
        <>
            {announcements && <div className='m-header'>
                <div className='m-title'>
                    Announcements
                </div>
                <marquee  behavior="scroll" scrollamount="5" loop="-1" direction="left" className='alerts' >
                    <div>
                        {
                            announcements && announcements.length > 0 ? announcements.map((item, index) => (
                                <p><FcAdvertising style={{ marginTop: '3px' }} /> <a href={item.link}>{item.description}</a></p>
                            )) : (<Text textAlign={'center'}>No Announcements</Text>)
                        }
                    </div>
                </marquee>
            </div>}
        </>
    )
}

export default AnnouncementRibbon