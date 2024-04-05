import React from 'react'
import {
    Button,
    DarkMode,
    useDisclosure,
} from '@chakra-ui/react'
import SpreadsheetImportComponent from '../../../Components/SpreadSheetImport'
import { bulkCreateCourses } from '../../../Api/api'

const fields = [
    {
        label: "Course ID",
        key: "course_id",
        alternateMatches: ["course id", "id", "pk"],
        fieldType: {
            type: "input",
        },
        example: "IT101",
        validations: [
            {
                rule: "required",
                errorMessage: "Course ID is required",
                level: "error",
            },
        ],
    },
    {
        label: "Course Name",
        key: "name",
        alternateMatches: ["course name", "course", "name"],
        fieldType: {
            type: "input",
        },
        example: "Computer Networks",
        validations: [
            {
                rule: "required",
                errorMessage: "Course Name is required",
                level: "error",
            },
        ],
    },
    {
        label: "Department",
        key: "department",
        alternateMatches: ["department", "branch", "course department"],
        fieldType: {
            type: "input",
        },
        example: "Information Technology",
        validations: [
            {
                rule: "required",
                errorMessage: "Department is required",
                level: "error",
            },
        ],
    },
    {
        label: "Credit",
        key: "credit",
        alternateMatches: ["course credit"],
        fieldType: {
            type: "input",
        },
        example: "4",
        validations: [
            {
                rule: "required",
                errorMessage: "Credit is required",
                level: "error",
            },
        ],
    },
    {
        label: "Semester",
        key: "semester",
        fieldType: {
            type: "input",
        },
        example: "1",
    },
]

const ImportCourses = ({fetchCourses}) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const handleSubmit = async (data, file) => {
        console.log(data, file)
        try {
            const response = await bulkCreateCourses(data.validData);
            console.log(response)
            fetchCourses();
        } catch (error) {
            console.log(error)
        }
    }

    const openModal = (event) => {
        event.stopPropagation();
        onOpen()
    }

    return (
        <>
            <DarkMode>
                <Button rounded={'full'} fontFamily={'body'} size={'sm'} colorScheme='messenger' onClick={openModal}>Import</Button>
            </DarkMode>
            {
                isOpen &&
                <SpreadsheetImportComponent isOpen={isOpen} onClose={onClose} fields={fields} onSubmit={handleSubmit} />
            }
        </>
    )
}

export default ImportCourses