import { ChangeEvent, useState,useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Eye from "../../../assets/eye.svg";
import ticked from "../../../assets/ticked.svg";
import unticked from "../../../assets/unticked.svg";

import { signUpUser } from "services/services";
import { SIGN_IN } from "utility/actions/action";
import { reducer } from "utility/reducer/reducer";

export const SignUp = () => {
  const [isTicked, setIsTicked] = useState<{[key:number]: boolean}>({0:false,1:false,2:false,3:false});
      const [state, dispatch] = useReducer(reducer, { user: {}, items: [] });
  const[password, setPassword] = useState("");

  const navigate = useNavigate();

//   const {context} = useCustomContext();

  const reg_num = /\d+/g;
  const reg_upper = /[A-Z]/;
  const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const texts: string[] = [
      "contains at least one uppercase letter",
      "contains eight characters",
      "contains at least one number",
      "contains at least one symbol",
    ];

//  const EmailSchema = Yup.object().shape({
//         email: Yup.string()
//           .email("Invalid email")
//           .required("Wrong Email format"),
//       });

    const handleSubmitForm = async (values:{[key:string]:string},actions:any) => {
        try {            
            if(Object.values(isTicked).every(value => value === true)) {
                const payload = {
                  first_name: values.name,
                  last_name: values.lastName,
                  email: values.email,
                  password: password,
                };
                const user = await signUpUser(payload);
                if (!(user?.user?.first_name)) return;
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type:SIGN_IN,
                    payload:user
                });
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setPassword(e.target.value);
        let string = e.target.value;
        if(string.includes(" ")) return;

        if(string.match(reg_upper)) {
            setIsTicked(prevState => ({...prevState, 0: true}));
        } else {
            setIsTicked(prevState => ({ ...prevState, 0: false }));
        }

        if(string.length >= 8) {
            setIsTicked(prevState => ({...prevState, 1: true}));
        } else {
            setIsTicked(prevState => ({ ...prevState, 1: false }));
        }

        if(string.match(reg_num)) {
            setIsTicked(prevState => ({...prevState, 2: true}));
        } else {
            setIsTicked(prevState => ({ ...prevState, 2: false }));
        }

        if(special.test(string)) {
            setIsTicked(prevState => ({...prevState, 3: true}));
        } else {
            setIsTicked(prevState => ({ ...prevState, 3: false }));
        }

    }

 const FormSchema = Yup.object().shape({
        name: Yup.string().required("Name can't be empty"),
        lastName: Yup.string().required("Last Name can't be empty"),
        email: Yup.string()
          .email("Invalid email")
          .required("Wrong Email format"),
      });

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className=" bg-white rounded-md my-[5rem] text-center min-w-[20rem] max-w-[30rem] w-[50%] p-2">
        <h1 className="text-center text-lg md:text-4xl font-bold font-sans mb-3">
          Create an Account
        </h1>
        <p className="inline text-center mt-5">
          Already have an account?
          <span
            className="text-blue-400 inline cursor font-medium ml-2"
            onClick={() => {
              navigate("/");
            }}
          >
            Log in
          </span>
        </p>

        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
          }}
          onSubmit={handleSubmitForm}
          validationSchema={FormSchema}
        >
          {(props) => (
            <Form className="p-2">
              <div className="flex justify-between items-center">
                <div>
                    <div className="text-left">
                    <label htmlFor="name" className="font-medium text-left">
                        Name
                    </label>
                    </div>
                    <Field
                    type="text"
                    name="name"
                    className="rounded-md w-full mt-2 border-2 border-slate-300 h-10 indent-2 focus:outline-0"
                    placeholder="Type Here"
                    validate={FormSchema}
                    />
                    <ErrorMessage name="name">
                    {(errors) => (
                        <p className="text-red-400 text-left text-sm">{errors}</p>
                    )}
                    </ErrorMessage>
                </div>

                <div>
                    <div className="text-left">
                    <label htmlFor="name" className="font-medium text-left">
                        Last Name
                    </label>
                    </div>
                    <Field
                    type="text"
                    name="lastName"
                    className="rounded-md w-full mt-2 border-2 border-slate-300 h-10 indent-2 focus:outline-0"
                    placeholder="Type Here"
                    validate={FormSchema}
                    />
                    <ErrorMessage name="lastName">
                    {(errors) => (
                        <p className="text-red-400 text-left">{errors}</p>
                    )}
                    </ErrorMessage>
                </div>
              </div>

              <div className="text-left">
                <label htmlFor="email" className="font-medium text-left">
                  Email Address
                </label>
              </div>
              <Field
                type="email"
                name="email"
                className="rounded-md w-full mt-2 border-2 border-slate-300 h-10 indent-2 focus:outline-0"
                placeholder="Type Here"
                validate={FormSchema}
              />
              <ErrorMessage name="email">
                {(errors) => <p className="text-red-400 text-left">{errors}</p>}
              </ErrorMessage>
              <div className="text-left mt-2">
                <label htmlFor="email" className="font-medium text-left">
                  Password
                </label>
              </div>

              <div className="border-slate-300 border-2 flex px-2 rounded-md">
                <Field
                  type="password"
                //   name="password"
                value = {password}
                  className="w-full h-10 indent-2 focus:outline-0"
                  placeholder="Type Password Here"
                  onChange = {handlePasswordChange}
                />
                <img src={Eye} alt="icon" className="order-2" />
              </div>
              <button
                type="submit"
                className="bg-slate-400 w-full text-white rounded-md h-10 mt-2"
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>

        <div>
            {texts.map((text,index) => (
            <div className="flex items-center gap-2" key = {index}>
                <img src = {isTicked[index] === true ? ticked: unticked} alt = {text} /><span className="text-sm">{text}</span>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};
