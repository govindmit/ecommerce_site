import React from 'react'
import { useState } from 'react';
import { loginFields } from "./fields";
import FormAction from "./formAction";
import FormExtra from "./formExtra";
import Input from "./input";


const fields:any=loginFields;
let fieldsState = {};
fields.forEach((field:any)=>fieldsState[field.id]='');

export default function LoginCustomize(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e:any)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }


    return(
        <form className="mt-8 space-y-6 w-4/12" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}