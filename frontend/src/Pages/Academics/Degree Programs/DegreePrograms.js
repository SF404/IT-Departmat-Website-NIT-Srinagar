import React, { Component } from 'react';
import './DegreePrograms.css'
import bannerImage from "./../../../assets/images/image.webp";
import { VStack,Heading, Center, Box } from '@chakra-ui/react';
class Degree extends Component {
  state = {
    selectedProgram: 'btech',
  };

  showProgram = (program) => {
    this.setState({ selectedProgram: program });
  };
  

  render() {
    const { selectedProgram } = this.state;

    return (
      <div className='degback'>
      <VStack
        w={"full"}
        h={"200px"}
        color={"white"}
        backgroundImage={bannerImage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        textShadow={"0 0 24px black"}
      > <Heading as="h2" size="xl" mb={2}>
          {" "}
        </Heading>
      </VStack>
        <div id="degbutton">
          <button  id="degbutton1" onClick={() => this.showProgram('btech')}>BTech Program</button>
          <button  id="degbutton1" onClick={() => this.showProgram('phd')}>PhD Program</button>
        </div>

        {selectedProgram === 'btech' && (
          <Center>
          <Box w={{base:'100%',md:'80%'}} bg={'white'} p={'1em'} borderRadius={'1em'} mb={6}>
          <h2 className='dghead'>BTech Program</h2>
          <div className='my-div'>
        
          <p className='paradg2'>
  Welcome to the BTech program at the Department of &nbsp;
  <a href="http://localhost:3000" className="my-link">
    Information Technology</a>, NIT Srinagar. We offer a range of courses and opportunities for students pursuing a Bachelor of Technology degree.
</p>
      <p className='paradg2'>The Department of Information Technology in NIT Srinagar was established in 2007, offering four year undergraduate programme (B.Tech) in Information Technology. This undergraduate programme is of 4 years duration with the first year spread over two semesters which is common to all the branches. The intake capacity of the department was 40 in 2007 and then subsequently increased to 90 in 2020. The Department offers a broad curriculum including :</p>
      <ul className='list'>
  <li>Database Management</li>
  <li>Software Engineering</li>
  <li>Management of Information Systems</li>
  <li>Data Mining</li>
  <li>Computer Graphics</li>
  <li>Advanced Internet Technology</li>
  <li>Computer Networks</li>
  <li>Operating Systems</li>
  <li>Data Structures and Algorithms</li>
</ul>
      <p className='paradg2'>The Department of Information Technology embodies the Institute's tradition of excellence as a world-class leader in IT education and research. IT sector is in a period of bloom in terms of growth and opportunity. In the current ever evolving industrial scenario contents delivered to the students are regularly updated by the faculty members who have themselves are well acquainted with path breaking research and innovations in the present technology-oriented world. </p>
      <p className='paradg2'>In addition to academic courses, the department also has IT research programmes supported through government funding and industry sponsorship. Faculty research helps expand the current and future use of new and existing technologies. </p>
      </div>

      <div className='my-div'>

      <h1 className='dghead'>Curriculum</h1>
      
      <table id="credit">
  <tr>
    <th colSpan={2}>Undergraduate Core (UC)</th>
    <th colSpan={2}>Undergraduate Elective (UE)</th>
  </tr>
  <tr>
  <td>Category</td>
    <td>Credits</td>
    <td>Category</td>
    <td>Credits</td>
    </tr>
  <tr>
  <td>Departmental Core(DC)</td>
    <td>66</td>
    <td>Departmental Elective</td>
    <td>24</td>
  </tr>
  <tr>
  <td>Basic Science(BS)</td>
    <td>24</td>
    <td>Humanities & Soc.Science(HM)</td>
    <td>14</td>
  </tr>
  <tr>
  <td>Engg.Arts & Science(EAS)</td>
    <td>20</td>
    <td>Open Category Elective(OEC)</td>
    <td>31</td>
  </tr>
  <tr>
    <td>Humanities & Soc.Science(HM)</td>
    <td>1</td>
  </tr>
  <tr>
  <td>Total</td>
    <td>111</td>
    <td>Total</td>
    <td>69</td>
  </tr>
  </table>
  <h2 className='my-link2'>The Overall Credit Structure</h2>
  </div>
      </Box>
          </Center>
        )}
        
        {selectedProgram === 'phd' && (
          <Center>
          <Box w={{base:'100%',md:'80%'}} bg={'white'} p={'1em'} borderRadius={'1em'} mb={5}>
          <h2 className='dghead'>Phd Program</h2>
          <div className='my-div'>
        
          <p className='paradg2'>
  Welcome to the Phd program at the Department of &nbsp;
  <a href="http://localhost:3000" className="my-link">
    Information Technology</a>, NIT Srinagar. We offer a range of courses and opportunities for students pursuing a Doctoral Program.
</p>
<p className='paradg2'>The doctoral programme in Information Technology offers students the possibility of doing intensive research in an area of their choice. We have a vibrant research program consisting of about 60 PhD students, and it has been our constant endeavour to provide the best facilities and working environment to our research students.
 </p>
 <ul className='list'>
  <li>All full-time PhD students provided financial assistance</li>
  <li>Air-conditioned office space is provided to all PhD students, with a desktop PC. Research students have unrestricted access to all laboratories in the department</li>
  <li>PhD students often collaborate with researchers within and outside the country. It is common, and regularly encouraged, for students to spend time at collaborating institutions in academia and industry</li>
  <li>Our students regularly publish research results in leading international conferences and reputed journals</li>
  </ul> 
  <h2 className='dghead'>Admission</h2> 
  <h3><b>Applying for Phd Admission :</b></h3>
  <p className='paradg2'>Admissions to the PhD program are held twice a year, in May and December. Applications can be submitted online at the NIT SRINAGAR Admissions web site, starting March and October respectively.</p>
  <h3><b>Eligibility :</b></h3>
  <p className='paradg2'>The candidate should have one of the following degrees:-
</p>
<ul className='list'>
  <li>M.Tech./M.E. Degree in Computer Science or other Engineering disciplines</li>
  <li>B.E.B.Tech./M.Sc. in Computer Science or other Engineering disciplines, or MCA with a valid GATE score in CS/IT/ECE</li>
  <li>M.Sc. in Maths Physics/Statistics with a valid GATE score in their subject</li>
  </ul> 
  <h3><b>Interview :</b></h3>
  <p className='paradg2'>Following the application submission, candidates will be shortlisted for an interview. Shortlisting criteria for interview calls will be published on the Department web site. The interview will test your familiarity with basic concepts in Computer Scienceand Engineering and your ability to analyze and formulate a solution to a problem.
</p>
<h2 className='dghead'>Financial Assistance and Accommodation</h2> 
<p className='paradg2'>Institute Assistantships (Rs. 28,000 per month for students with a M.Tech or equivalent degree, and Rs. 25,000 per month for students with a B. Tech or equivalent degree) are available for PhD students. An additional top-up of Rs. 10,000 per month is also possible based on contribution to ongoing research projects.
</p>
<p className='paradg2'>Attractive industry govt. fellowships are also available to PhD students. In recent semesters, PhD fellowships have been offered to our students by companies/agencies such as TCS,
DEITY, PM Fellowship, Google, IBM. Lucent, and Microsoft.
 </p>
</div>
</Box>
          </Center>
        )}
      </div>
    );
  }
}

export default Degree;