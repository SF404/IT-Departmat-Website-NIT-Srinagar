import React from 'react';
import { Box, Heading, Select, Input, Textarea, Button, Center } from "@chakra-ui/react";
import SmallBanner from '../../Layout/SmallBanner';

export default function Feedback() {
    return (
        <div>
            <SmallBanner heading={"FEEDBACK FORM"} />
            <Center>
                <Box
                    bg="#fff"
                    borderRadius="8px"
                    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                    padding="20px"
                    w={{base:'full', md:'80%', lg:'60%'}}
                    my={6}
                >
                    {/* <Heading textAlign="center" mb="20px">
                    Course Feedback Form
                </Heading> */}
                    <form mt={"1em"} className='family-5'>
                        <Box display={{ base: "block", md: "flex" }} mb="20px" >
                            <Box flex={{ base: "1", md: "0.5" }} mb={{ base: "10px", md: "0" }}>
                                <label htmlFor="semester">Semester</label>
                                <Select id="semester" name="semester" isRequired>
                                    <option value="1">Please Select</option>
                                    {/* Add other options dynamically if needed */}
                                </Select>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5" }} ml={{ md: "20px" }}>
                                <label htmlFor="course">Course</label>
                                <Select id="course" name="course" isRequired>
                                    {/* Options populated dynamically */}
                                </Select>
                            </Box>
                        </Box>
                        <Box mb="20px">
                            <label htmlFor="name">Student Name</label>
                            <Input type="text" id="name" name="name" placeholder="Enter your name..." isRequired />
                        </Box>
                        {/* Add other form groups using the Chakra UI components */}
                        {/* Example: */}
                        <Box mb="20px">
                            <label htmlFor="enrollment">Enrollment Number</label>
                            <Input type="text" id="enrollment" name="enrollment" placeholder="Enter your enrollment number..." isRequired />
                        </Box>
                        <Box mb="20px">
                            <label htmlFor="workloadRating">How would you rate the workload of this course?</label>
                            <Select id="workloadRating" name="workloadRating" isRequired>
                                <option value="1">Please Select</option>
                                <option value="Just Right">Moderate</option>
                                <option value="Just Right">Excellent</option>
                                <option value="Too Light">Too Light</option>
                                <option value="Too Heavy">Too Heavy</option>
                                <option value="No Opinion">No Opinion</option>
                            </Select>
                        </Box>
                        <Box mb="20px">
                            <label htmlFor="courseMaterial">How well did you achieve the learning goals of this course?</label>
                            <Textarea id="courseMaterial" name="courseMaterial" required />
                        </Box>
                        <Box mb="20px">
                            <label htmlFor="assignments">Were the assignments relevant and helpful for your understanding?</label>
                            <Textarea id="assignments" name="assignments" required />
                        </Box>
                        <Box mb="20px">
                            <label htmlFor="instructorFeedback">What did you like the most about this course?</label>
                            <Textarea id="instructorFeedback" name="instructorFeedback" required />
                        </Box>

                        {/* <Box mb="20px">
            <label htmlFor="dislikeFeedback">What did you dislike the most about this course?</label>
            <Textarea id="dislikeFeedback" name="dislikeFeedback" required />
          </Box>

          

          <Box mb="20px">
            <label htmlFor="thinkingFeedback">How much did the teacher encourage independent or logical thinking?</label>
            <Textarea id="thinkingFeedback" name="thinkingFeedback" required />
          </Box> */}

                        <Box mb="20px">
                            <label htmlFor="additionalComments">Any additional comments or suggestions related to the course?</label>
                            <Textarea id="additionalComments" name="additionalComments" />
                        </Box>
                        {/* Add other form groups using the Chakra UI components */}
                        <Button type="submit" w={'200px'} px={4} colorScheme='facebook' borderRadius="4px">
                            Submit Feedback
                        </Button>
                    </form>
                </Box>
            </Center>
        </div>
    )
}