import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CustomerLogin() {
  let navigate = useNavigate();

  //to set condition for login
  let CustomerSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
  });

  //function for customer-login
  let handleLogin = async (values) => {
    try {
      let res = await axios.post(`${url}/customer/customer-login`, {
        email: values.email,
        password: values.password,
      });

      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("name", res.data.user.firstName);
        sessionStorage.setItem("email", res.data.user.email);
        toast.success(res.data.message);
        navigate("/products");
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={CustomerSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <div className="customer-login">
              <div className="customerLoginForm">
                <div className="customerLogin-title">
                  <p>Have an account?</p>
                </div>

                <div className=" customerLogin-header ">
                  <p>Customer-Login</p>
                </div>

                <Form>
                  <div className="form-group">
                    <label htmlFor="email" className="text-black">
                      Email
                    </label>
                    <Field
                      name="email"
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <i class="bx bx-user"></i>
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="form-group pt-2">
                    <label htmlFor="password" className="text-black">
                      Password
                    </label>
                    <i class="bx bx-lock-alt"></i>

                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                    />
                    {errors.password && touched.password ? (
                      <div style={{ color: "red" }}>{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="pt-3 d-flex justify-content-between">
                    <Button variant="btn btn-success" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>

                <div className="text-black text-center mt-2">
                  <h6>New to TravelX? Please Sign-Up</h6>
                  <div>
                    <Button
                      // variant="outline-secondary"
                      variant="btn btn-info"
                      onClick={() => navigate("/customer-sign-up")}
                    >
                      Sign-Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default CustomerLogin;
