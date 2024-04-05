import React from 'react'
import {
    Button,
    DarkMode,
    useDisclosure,
} from '@chakra-ui/react'
import SpreadsheetImportComponent from '../../../Components/SpreadSheetImport'
import { bulkCreateStudent } from '../../../Api/api'

const fields = [
    {
        label: "Name",
        key: "name",
        alternateMatches: ["full name"],
        fieldType: {
            type: "input",
        },
        example: "Suhaib Ahmad",
        validations: [
            {
                rule: "required",
                errorMessage: "Name is required",
                level: "error",
            },
        ],
    },
    {
        label: "Enrollment Number",
        key: "enrollment_no",
        alternateMatches: ["enroll"],
        fieldType: {
            type: "input",
        },
        example: "2021BITE060",
        validations: [
            {
                rule: "required",
                errorMessage: "Enrollment Number is required",
                level: "error",
            },
        ],
    },
    {
        label: "Email",
        key: "email",
        alternateMatches: ["email_id", "email address"],
        fieldType: {
            type: "input",
        },
        example: "suhaib_2021BITE060@nitsri.ac.in",
    },
    {
        label: "Batch",
        key: "batch",
        alternateMatches: ["btech_batch", "year"],
        fieldType: {
            type: "input",
        },
        example: "2021",
        validations: [
            {
                rule: "required",
                errorMessage: "Batch is required",
                level: "error",
            },
        ],
    },
]

const ImportStudents = ({fetchStudents}) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const handleSubmit = async (data, file) => {
        console.log(data, file)
        try {
            const response = await bulkCreateStudent(data.validData);
            console.log(response)
            fetchStudents();
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

export default ImportStudents