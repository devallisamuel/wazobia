import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "services/services";
import { SIGN_IN } from "utility/actions/action";
import { reducer } from "utility/reducer/reducer";

import Eye from "../../../assets/eye.svg";

export const Login = () => {
    const [state, dispatch] = useReducer(reducer, { user: {}, items: [] });
    const navigate = useNavigate();

    const EmailSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("Wrong Email format"),
    });

    // const PasswordSchema = Yup.object().shape({
    //   password: Yup.string().required("Password can't be empty"),
    // });

        const handleFormSubmit = async (
          values: { [key: string]: string },
          actions: any
        ) => {
          try {
              const user = await login({email:values.email,password:values.password});
              if (!(user?.user?.first_name)) return;
              localStorage.setItem(
                "user",
                JSON.stringify(user)
              );
              dispatch({
                type: SIGN_IN,
                payload: user,
              });
              navigate("/dashboard");
          } catch (error) {
            console.log(error);
          }
        };

    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="bg-white rounded-md my-[5rem] text-center min-w-[20rem] max-w-[30rem] w-[50%] p-2">
          <h1 className="text-center text-lg md:text-4xl font-bold font-sans mb-3">
            Login
          </h1>
          <p className="inline text-center mt-5">
            If you have no account,
            <span
              className="text-blue-400 inline cursor font-medium ml-2"
              onClick={() => {
                navigate("/sign-up");
              }}
            >
              Sign up
            </span>
          </p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={EmailSchema}
          >
            {(props) => (
              <Form className="p-2">
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
                />
                <ErrorMessage name="email">
                  {(errors) => (
                    <p className="text-red-400 text-left">{errors}</p>
                  )}
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
                  className="bg-slate-400 w-full text-white rounded-md h-10 mt-3"
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
};

