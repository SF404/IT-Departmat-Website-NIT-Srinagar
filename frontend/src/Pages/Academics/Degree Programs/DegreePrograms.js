import React from 'react'
import SmallBanner from "./../../../Layout/SmallBanner"; 
import image from './../../../assets/images/default_event_image.jpg'
import { Box, Center, Divider, Link, ListItem, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Text, Th, Thead, Tr, UnorderedList } from '@chakra-ui/react'

function DegreePrograms() {
  return (
    <>
      <SmallBanner image={image} heading={'PROGRAMES'} />
      <Center p={[2, 4]}>
        <Box width={{ base: '100%', md: '80%' }} p={{ md: 2 }}>
          <Tabs align='center' variant='soft-rounded' colorScheme='facebook'>
            <TabList textAlign={'left'} justifyContent={'flex-start'} my={'0.5em'} >
              <Tab>B-TECH</Tab>
              <Tab>PHD</Tab>
            </TabList>
            <Divider />
            <TabPanels
              className="family-3"
              bg={"white"}
              w={"full"}
              boxShadow={"0 0 6px rgba(0,0,0,0.05)"}
              borderRadius={"0.5em"}
            >
              <TabPanel w={"full"} textAlign={"justify"}>
                <Box>
                  <Text>
                    Welcome to the BTech program at the Department of &nbsp;
                    <Link href="/">Information Technology</Link>, NIT Srinagar.
                    We offer a range of courses and opportunities for students
                    pursuing a Bachelor of Technology degree.
                  </Text>
                  <Text>
                    The Department of Information Technology in NIT Srinagar was
                    established in 2007, offering four year undergraduate
                    programme (B.Tech) in Information Technology. This
                    undergraduate programme is of 4 years duration with the
                    first year spread over two semesters which is common to all
                    the branches. The intake capacity of the department was 40
                    in 2007 and then subsequently increased to 90 in 2020. The
                    Department offers a broad curriculum including :
                  </Text>
                  <UnorderedList>
                    <ListItem>Artificial Intelligence</ListItem>
                    <ListItem>Image Processing</ListItem>
                    <ListItem>Cloud Computing</ListItem>
                    <ListItem>Java Programming</ListItem>
                    <ListItem>Big Data</ListItem>
                    <ListItem>Operating Systems</ListItem>
                    <ListItem>Data Structures and Algorithms</ListItem>
                    <ListItem>Database Management</ListItem>
                    <ListItem>Software Engineering</ListItem>
                    <ListItem>Management of Information Systems</ListItem>
                    <ListItem>Computer Networks</ListItem>
                    <ListItem>Computer Organisation & Architecture</ListItem>
                    <ListItem>Microprocessor</ListItem>
                    <ListItem>Data Communication</ListItem>
                    <ListItem>Object Oriented Programming</ListItem>
                    <ListItem>Information Security</ListItem>
                    <ListItem>Computer Graphics</ListItem>
                    <ListItem>Advanced Internet Technology</ListItem>
                  </UnorderedList>

                  <Text>
                    The Department of Information Technology embodies the
                    Institute's tradition of excellence as a world-class leader
                    in IT education and research. IT sector is in a period of
                    bloom in terms of growth and opportunity. In the current
                    ever evolving industrial scenario contents delivered to the
                    students are regularly updated by the faculty members who
                    have themselves are well acquainted with path breaking
                    research and innovations in the present technology-oriented
                    world.
                  </Text>
                  <Text>
                    In addition to academic courses, the department also has IT
                    research programmes supported through government funding and
                    industry sponsorship. Faculty research helps expand the
                    current and future use of new and existing technologies.
                  </Text>
                </Box>

                <Box>
                  <Divider my={4} />

                  <Text
                    textAlign={"center"}
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    color={"darkblue"}
                  >
                    Curriculum
                  </Text>
                  <Divider my={2} />
                  <TableContainer>
                    <Table variant={"striped"} border={"1px solid #d8dcf0"}>
                      <Thead>
                        <Tr bg={"#d8dcf0"}>
                          <Th colSpan={2} textAlign={"center"}>
                            Undergraduate Core (UC)
                          </Th>
                          <Th colSpan={2} textAlign={"center"}>
                            Undergraduate Elective (UE)
                          </Th>
                        </Tr>
                        <Tr>
                          <Th>Category</Th>
                          <Th>Credits</Th>
                          <Th>Category</Th>
                          <Th>Credits</Th>
                        </Tr>
                      </Thead>
                      <Tbody fontSize={'14px'}>
                        <Tr>
                          <Td>Departmental Core(DC)</Td>
                          <Td>66</Td>
                          <Td>Departmental Elective</Td>
                          <Td>24</Td>
                        </Tr>
                        <Tr>
                          <Td>Basic Science(BS)</Td>
                          <Td>24</Td>
                          <Td>Humanities & Soc.Science(HM)</Td>
                          <Td>14</Td>
                        </Tr>
                        <Tr>
                          <Td>Engg.Arts & Science(EAS)</Td>
                          <Td>20</Td>
                          <Td>Open Category Elective(OEC)</Td>
                          <Td>31</Td>
                        </Tr>
                        <Tr>
                          <Td>Humanities & Soc.Science(HM)</Td>
                          <Td>1</Td>
                        </Tr>
                        <Tr>
                          <Td>Total</Td>
                          <Td>111</Td>
                          <Td>Total</Td>
                          <Td>69</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <Text textAlign={"center"}>The Overall Credit Structure</Text>
                </Box>
              </TabPanel>
              <TabPanel textAlign={"justify"}>
                <Box>
                  <Text>
                    Welcome to the PhD program at the Department of &nbsp;
                    <Link href="/">Information Technology</Link>, NIT Srinagar.
                    We offer a range of courses and opportunities for students
                    pursuing a Doctoral Program.
                  </Text>
                  <Text>
                    The doctoral programme in Information Technology offers students the possibility of doing intensive research in an area of their choice. We have a vibrant research program consisting of about 22 PhD students, and it has been our constant endeavour to provide the best facilities and working environment to our research students.
                  </Text>
                  <UnorderedList>

                    <ListItem>Air-conditioned office space is provided to all PhD students, with a desktop PC. Research students have unrestricted access to all laboratories in the department</ListItem>
                    <ListItem>PhD students often collaborate with researchers within and outside the country. It is common, and regularly encouraged, for students to spend time at collaborating institutions in academia and industry</ListItem>
                    <ListItem>Our students regularly publish research results in leading international conferences and reputed journals</ListItem>
                  </UnorderedList>
                  <Divider my={4} />
                  <Text as="h3" fontWeight="bold">
                    Applying for Phd Admission :
                  </Text>
                  <Text>
                    Admissions to the PhD program are held twice a year, in May
                    and December. Applications can be submitted online at the
                    NIT SRINAGAR Admissions web site, starting March and October
                    respectively.
                  </Text>
                  <Text as="h3" fontWeight="bold">
                    Eligibility :
                  </Text>
                  <UnorderedList>
                    <ListItem>M.Tech Degree in Computer Science or Information Technology</ListItem>
                    <ListItem>B.Tech Degree in Computer Science or Information Technology</ListItem>

                  </UnorderedList>

                  <Divider my={4} />
                  <Text as="h2" fontWeight={"bold"}>
                    Financial Assistance and Accommodation
                  </Text>
                  <Text>
                    Institute Assistantships (Rs. 31,000 per month) are available for PhD students. An additional top-up of Rs. 10,000 per month is also possible based on contribution to ongoing research projects.
                  </Text>
                  <Text>
                    Attractive industry govt. fellowships are also available to
                    PhD students. In recent semesters, PhD fellowships have been
                    offered to our students by companies/agencies such as TCS,
                    DEITY, PM Fellowship, Google, IBM. Lucent, and Microsoft.
                  </Text>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </>
  );
}

export default DegreePrograms;
