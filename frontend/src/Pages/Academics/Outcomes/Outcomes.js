import React, { Component } from 'react';
import bannerImage from "./../../../assets/images/image.webp";
import { VStack, Center, Box, Heading, } from '@chakra-ui/react';
import './Outcomes.css'
class Outcome extends Component {
  state = {
    selectedProgram: 'pos',
  };

  showProgram = (program) => {
    this.setState({ selectedProgram: program });
  };

  render() {
    const { selectedProgram } = this.state;

    return (
      <div >
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
        <div id="outbutton">
          <button id='outbutton1' onClick={() => this.showProgram('pos')}>POs</button>
          <button id='outbutton1' onClick={() => this.showProgram('peos')}>PEOs</button>
          <button id='outbutton1' onClick={() => this.showProgram('psos')}>PSOs</button>
        </div>

        {selectedProgram === 'pos' && (
          <Center >
          <Box w={{base:'100%',md:'80%'}} bg={'white'} p={'1em'} margin={'4px'} borderRadius={'1em'} mb={6}>
            <h2 className='outhead'>Program Outcomes</h2>
            <div className='outlist'>
            <ul>
            <li className='outli'>Engineering Knowledge</li>
            <p className='outdg2'>Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
            <li className='outli'>Problem Analysis</li>
            <p className='outdg2'>Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.</p>
            <li className='outli'>Design/Development of Solutions</li>
            <p className='outdg2'>Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</p>
            <li className='outli'>Conduct Investigations of Complex Problems</li>
            <p className='outdg2'>Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions for complex problems.</p>
            <li className='outli'>Modern Tool Usage</li>
            <p className='outdg2'>Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</p>
            <li className='outli'>The Engineer and Society</li>
            <p className='outdg2'>Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
            <li className='outli'>Environment and sustainability</li>
            <p className='outdg2'>Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p>
            <li className='outli'>Ethics</li>
            <p className='outdg2'>Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p>
            <li className='outli'>Individual and Team Work</li>
            <p className='outdg2'>Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
            <li className='outli'>Communication</li>
            <p className='outdg2'>Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p>
            <li className='outli'>Project Management and Finance</li>
            <p className='outdg2'>Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</p>
            <li className='outli'>Life-long Learning</li>
            <p className='outdg2'>Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.</p>
            </ul>
          </div>
            </Box>
          </Center>
        )}
        
        {selectedProgram === 'peos' && (
          <Center >
          <Box w={{base:'100%',md:'80%'}} bg={'white'} p={'1em'} borderRadius={'1em'} mb={6}>
            <h2 className='outhead'>Program Educational Objectives</h2>
            <div className='my-div'>
            <ul>
            <li>
            To prepare students to get employed and/or to pursue higher education and research in IT discipline in particular and allied engineering fields in general
            </li>
            <li>
            To prepare students to develop effective IT solutions for real-world problems
            </li>
            <li>
            To motivate students for creating startups generating employment for the society
            </li>
            <li>
            To develop high moral, ethical and societal responsibilities among the students for their life-long learning
            </li>
            </ul>
            </div>
            </Box>
          </Center>
        )}

        {selectedProgram === 'psos' && (
          <Center >
          <Box w={{base:'100%',md:'80%'}} bg={'white'} p={'1em'} borderRadius={'1em'} mb={6}>
            <h2 className='outhead'>Program Specific Objectives</h2>
            <div className='my-div'>
            <ul>
            <li>
            Graduates should be creative, imaginative and proficient IT engineers employable to serve in the industry, academia, and allied services
            </li>
            <li>
            Graduates should be able to advance in academic and research pursuits in IT and allied disciplines
            </li>
            <li>
            Graduates should take a lead in innovation and entrepreneurship activities with high standards of professional and moral ethics and prove themselves beneficial to society at large
            </li>
            </ul>
            </div>
            </Box>
          </Center>
        )}
      </div>
    );
  }
}

export default Outcome;
