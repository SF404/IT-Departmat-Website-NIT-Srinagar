import React from 'react'
import SmallBanner from "./../../../Layout/SmallBanner";
import { Box, Center, Heading, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { PiPlantDuotone } from 'react-icons/pi'
import image from './../../../assets/banners/outcome.jpeg';


function Outcomes() {


  const programOutcomes = [
    {
      "category": "Engineering Knowledge",
      "description": "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems."
    },
    {
      "category": "Problem Analysis",
      "description": "Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences."
    },
    {
      "category": "Design/Development of Solutions",
      "description": "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
    },
    {
      "category": "Conduct Investigations of Complex Problems",
      "description": "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions for complex problems."
    },
    {
      "category": "Modern Tool Usage",
      "description": "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations."
    },
    {
      "category": "The Engineer and Society",
      "description": "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
    },
    {
      "category": "Environment and sustainability",
      "description": "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
    },
    {
      "category": "Ethics",
      "description": "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice."
    },
    {
      "category": "Individual and Team Work",
      "description": "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
    },
    {
      "category": "Communication",
      "description": "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
    },
    {
      "category": "Project Management and Finance",
      "description": "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
    },
    {
      "category": "Life-long Learning",
      "description": "Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change."
    }
  ]

  const programEducationalObjectives = [
    {
      "description": "To prepare students to get employed and/or to pursue higher education and research in IT discipline in particular and allied engineering fields in general."
    },
    {
      "description": "To prepare students to develop effective IT solutions for real-world problems."
    },
    {
      "description": "To motivate students for creating startups generating employment for the society."
    },
    {
      "description": "To develop high moral, ethical and societal responsibilities among the students for their life-long learning."
    }
  ]

  const programSpecificObjectives = [
    {
      "description": "Graduates should be creative, imaginative and proficient IT engineers employable to serve in the industry, academia, and allied services."
    },
    {
      "description": "Graduates should be able to advance in academic and research pursuits in IT and allied disciplines."
    },
    {
      "description": "Graduates should take a lead in innovation and entrepreneurship activities with high standards of professional and moral ethics and prove themselves beneficial to society at large."
    }
  ]




  return (
    <>
      <SmallBanner image={image} heading={'COURSE OUTCOMES'} />
      <Center>
        <Tabs variant='soft-rounded' colorScheme='facebook' m={4} width={{ base: '100%', md: '80%' }}>
          <TabList textAlign={'left'} justifyContent={'flex-start'} my={'0.5em'}>
            <Tab>Program Outcomes</Tab>
            <Tab>Program Educational Objectives</Tab>
            <Tab>Program Specific Objectives</Tab>
          </TabList>
          <TabPanels className='family-3' bg={'white'} w={'full'} boxShadow={'0 0 6px rgba(0,0,0,0.05)'} borderRadius={'0.5em'}>
            <TabPanel>
              <List>
                {
                  programOutcomes.map((po, index) => (
                    <ListItem key={index} display={'flex'} my={2}>
                      <ListIcon fontSize={'1.3em'} as={PiPlantDuotone} color={'green'}></ListIcon>
                      <Box textAlign={'justify'}>
                        <Heading size={'sm'} className='family-2'>{po.category}</Heading>
                        <Text>{po.description}</Text>
                      </Box>

                    </ListItem>
                  ))
                }
              </List>
            </TabPanel>
            <TabPanel>
              <List>
                {
                  programEducationalObjectives.map((peo, index) => (
                    <ListItem key={index} display={'flex'} my={2}>
                      <ListIcon fontSize={'1.3em'} as={PiPlantDuotone} color={'green'}></ListIcon>
                      <Box textAlign={'justify'}>
                        <Text>{peo.description}</Text>
                      </Box>

                    </ListItem>
                  ))
                }
              </List>
            </TabPanel>
            <TabPanel>
              <List>
                {
                  programSpecificObjectives.map((pso, index) => (
                    <ListItem key={index} display={'flex'} my={2}>
                      <ListIcon fontSize={'1.3em'} as={PiPlantDuotone} color={'green'}></ListIcon>
                      <Box textAlign={'justify'}>
                        <Text>{pso.description}</Text>
                      </Box>

                    </ListItem>
                  ))
                }
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>

    </>
  )
}

export default Outcomes
