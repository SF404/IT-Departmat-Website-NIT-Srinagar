import React from 'react'

function FromHod({video_from_hod}) {
    return (
        <>
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

                <video className='hod-video' src={video_from_hod} controls></video>
            </div>
        </>
    )
}

export default FromHod