import React, { useState } from "react";
import Head from "../../../common/components/auth/head";
import { signupFields } from "../../../common/components/auth/fields";
import FormAction from "../../../common/components/auth/formAction";
import Input from "../../../common/components/auth/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authValidations } from "../../../formvalidations/authValidation";
import { InputWithIcon } from "../../../common/components/auth/select";

const fields: any = signupFields;
let fieldsState = {};
fields.forEach((field: any) => (fieldsState[field.id] = ""));

const Register = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(authValidations),
      });
console.log(errors)
  const [loginState, setLoginState] = useState(fieldsState);

//   const handleChange = (e: any) => {
//     setLoginState({ ...loginState, [e.target.id]: e.target.value });
    
//   };

  const onSubmit = (e: any) => {
    console.log(e, "ere", loginState);
    // e.preventDefault();
    // authenticateUser();
  };

  //Handle Login API Integration here
//   const authenticateUser = () => {};




// const onSubmit = (data: any) => {
//     alert(JSON.stringify(data))
// }

  return (
    <div className="m-14 flex flex-col justify-center items-center">
      {/* <div className=" top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> */}
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="px-6 py-3 lg:px-8">
            <Head
              heading="Create your account"
              paragraph="Already have an account? "
              linkName="Signin"
              linkUrl="/login"
            />
            <form  onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field: any) => (
                  <Input
                    key={field.id}
                    // handleChange={handleChange}
                    labelText={field.labelText}
                    labelhtmlFor={field.labelFor}
                    id={field.id}
                    register={register}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    options={field.options}
                    errors={errors}
                    customClass={field.type === "number" && "remove-arrow"}
                  />
                ))}
              <FormAction handleSubmit={handleSubmit} text="Register" />
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Register;
