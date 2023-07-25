const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email_address",
        id: "email_address",
        name: "email",
        type: "email",
        autoComplete: "email",

        placeholder: "Email address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
        placeholder: "Password"
    }
]

const signupFields = [
    {
        labelText: "Name",
        labelFor: "name",
        id: "name",
        name: "name",
        type: "text",
        autoComplete: "name",
        placeholder: "Name"
    },
    {
        labelText: "Contact",
        labelFor: "contact",
        id: "contact",
        name: "contact",
        type: "text",
        autoComplete: "contact",
        placeholder: "Contact",
    },
    {
        labelText: "Email address",
        labelFor: "email_address",
        id: "email_address",
        name: "email",
        type: "text",
        autoComplete: "email",
        placeholder: "Email address"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
        placeholder: "Password"
    }
]

const resetFields = [
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "password",
        placeholder: "Password"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        placeholder: "Confirm Password"
    }
]

export { loginFields, signupFields, resetFields }

{/* ********Example For select option ******** */ }

// {
//     labelText: "Country",
//     labelFor: "countries",
//     id: "countries",
//     name:"countries",
//     type: "select",
//     autoComplete: "countries",
//     options: [
//                 { value: 'US', label: 'United States' }, 
//                 { value: 'CA', label: 'Canada' }, 
//                 { value: 'FR', label: 'France' }, 
//                 { value: 'DE', label: 'Germany' }
//              ]
// }

{/* ********Example For input field with icon ******** */ }

// {
//     id="search-dropdown",
//     type="text",
//     inputClassname="",
//     buttonClassname=""
//     icon="../icon.png"
//     placeholder="Password"
//     name="password"
// }