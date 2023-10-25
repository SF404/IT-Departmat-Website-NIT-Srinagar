import React from 'react'
import { FcAdvertising } from 'react-icons/fc'

function Announcements() {
    return (
        <>
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
        </>
    )
}

export default Announcements