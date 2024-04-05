import React from 'react'
import {
    Button,
    DarkMode,
    useDisclosure,
} from '@chakra-ui/react'
import SpreadsheetImportComponent from '../../../Components/SpreadSheetImport'
import { bulkCreateAlumni} from '../../../Api/api'

const fields = [
    {
        label: "Name",
        key: "name",
        alternateMatches: ["first name", "first", "name"],
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
        label: "Graduation Year",
        key: "graduation_year",
        alternateMatches: ["year", "graduation"],
        fieldType: {
            type: "input",
        },
        example: "2025",
        validations: [
            {
                rule: "required",
                errorMessage: "Graduation Year is required",
                level: "error",
            },
        ],
    },
    {
        label: "Email Address",
        key: "email",
        alternateMatches: ["username", "email", "contact"],
        fieldType: {
            type: "input",
        },
        example: "mail@nit.sri.ac.in",
        validations: [
            {
                rule: "required",
                errorMessage: "Email is required",
                level: "error",
            },
            {
                rule: "unique",
                errorMessage: "Email is unique",
                level: "error",
            },
        ],
    },
    {
        label: "Present Job",
        key: "present_job",
        alternateMatches: ["current job", "work", "employee"],
        fieldType: {
            type: "input",
        },
        example: "Senior Engineer, Brillio, Banglore",
    },
    {
        label: "Previous Job(s)",
        key: "previous_jobs",
        alternateMatches: ["previous job", "institutions attended"],
        fieldType: {
            type: "input",
        },
        example: "MLE, Augle AI, Bombay",
    },
    {
        label: "Achievements",
        key: "achievements",
        alternateMatches: ["awards", "degrees"],
        fieldType: {
            type: "input",
        },
        example: "NET QUALIFIED",
    },
]

const ImportAlumni = ({fetchAlumni}) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const handleSubmit = async (data, file) => {
        console.log(data, file)
        try {
            const response = await bulkCreateAlumni(data.validData);
            console.log(response)
            fetchAlumni();
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

export default ImportAlumni