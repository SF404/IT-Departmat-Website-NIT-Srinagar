import React from 'react'
import {
    Button,
    DarkMode,
    useDisclosure,
} from '@chakra-ui/react'
import SpreadsheetImportComponent from '../../../Components/SpreadSheetImport'
import { bulkCreateUsers } from '../../../Api/api'

const fields = [
    {
        // Visible in table header and when matching columns.
        label: "First Name",
        // This is the key used for this field when we call onSubmit.
        key: "first_name",
        // Allows for better automatic column matching. Optional.
        alternateMatches: ["first name", "first", "name"],
        // Used when editing and validating information.
        fieldType: {
            // There are 3 types - "input" / "checkbox" / "select".
            type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "Dr. Janib",
        // Can have multiple validations that are visible in Validation Step table.
        validations: [
            {
                // Can be "required" / "unique" / "regex"
                rule: "required",
                errorMessage: "First Name is required",
                // There can be "info" / "warning" / "error" levels. Optional. Default "error".
                level: "error",
            },
        ],
    },
    {
        label: "Last Name",
        key: "last_name",
        alternateMatches: ["last name", "last", "middle"],
        fieldType: {
            // There are 3 types - "input" / "checkbox" / "select".
            type: "input",
        },
        example: "Ul Bashir",
    },
    {
        label: "Email Address",
        key: "username",
        alternateMatches: ["username", "email"],
        fieldType: {
            // There are 3 types - "input" / "checkbox" / "select".
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
        label: "User Role",
        key: "role",
        alternateMatches: ["user Role", "user_role", "role", "admin"],
        fieldType: {
            // There are 3 types - "input" / "checkbox" / "select".
            type: "input",
        },
        example: "Faculty or Admin",
        validations: [
            {
                rule: "",
                errorMessage: "Role is required",
                level: "error",
            },
        ],
    },
]

const ImportUsers = ({fetchUsers}) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const handleSubmit = async (data, file) => {
        console.log(data, file)
        try {
            const response = await bulkCreateUsers(data.validData);
            console.log(response)
            fetchUsers();
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
                <Button rounded={'full'} fontFamily={'body'} size={'sm'} colorScheme='messenger' onClick={openModal}>Import Users</Button>
            </DarkMode>
            {
                isOpen &&
                <SpreadsheetImportComponent isOpen={isOpen} onClose={onClose} fields={fields} onSubmit={handleSubmit} />
            }
        </>
    )
}

export default ImportUsers