import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Eye from "../../../assets/eye.svg";
import ticked from "../../../assets/ticked.svg";
import unticked from "../../../assets/unticked.svg";

export const SignUp = () => {
  const [isTicked, setIsTicked] = useState<boolean>(false);

  const navigate = useNavigate();

//  const EmailSchema = Yup.object().shape({
//         email: Yup.string()
//           .email("Invalid email")
//           .required("Wrong Email format"),
//       });

 const FormSchema = Yup.object().shape({
        name: Yup.string().required("Name can't be empty"),
        lastName: Yup.string().required("Last Name can't be empty"),
        email: Yup.string()
          .email("Invalid email")
          .required("Wrong Email format"),
      });

  const texts: string[] = ["contains at least one uppercase letter", "contains eight characters", "contains at least one number", "contains at least one symbol"];
  return (
    <div className="">
      <div className="mx-auto bg-white rounded-md my-[5rem] text-center max-w-[30rem] w-[50%] p-2">
        <h1 className="text-center text-lg md:text-4xl font-bold font-sans mb-3">
          Create an Account
        </h1>
        <p className="inline text-center mt-5">
          Already have an account?
          <span
            className="text-blue-400 inline cursor font-medium"
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
          onSubmit={() => {}}
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
                  name="password"
                  className="w-full h-10 indent-2 focus:outline-0"
                  placeholder="Type Password Here"
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
            <div className="flex gap-2" key = {index}>
                <img src = {isTicked ? ticked: unticked} alt = {text} /><span className="text-sm">{text}</span>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};
