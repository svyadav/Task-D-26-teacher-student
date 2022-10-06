import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
const AddStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const validation = yup.object({
    name: yup.string().required("Name is required"),
    department: yup.string().required("Username is required"),
    gender: yup.string().required("gender is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    address: yup.string().required("Address is required"),
  });

  const handleSubmit = (value) => {
    axios
      .post("https://626e4477e58c6fabe2dd5cce.mockapi.io/student", value)
      .then((response) => {
        console.log(response.data);
      });
    navigate("/profile/student");
  };

  return (
    <Container>
      <h1>Create Student</h1>
      <Formik
        validationSchema={validation}
        initialValues={{
          name: "",
          department: "",
          gender: "",
          email: "",
          address: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter Name"
                type="text"
                onChange={handleChange}
                value={values.name}
              />
              <div className="color">
                <ErrorMessage name="name" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="department">Department</Label>
              <Input
                id="department"
                name="department"
                placeholder="Enter Department"
                type="text"
                onChange={handleChange}
                value={values.department}
              />
              <div className="color">
                <ErrorMessage name="department" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                id="gender"
                name="gender"
                placeholder="Enter Gender"
                type="text"
                onChange={handleChange}
                value={values.gender}
              />
              <div className="color">
                <ErrorMessage name="gender" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Email"
                type="text"
                onChange={handleChange}
                value={values.email}
              />
              <div className="color">
                <ErrorMessage name="email" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="address"
                placeholder="Enter Address"
                type="text"
                onChange={handleChange}
                value={values.address}
              />
              <div className="color">
                <ErrorMessage name="address" />
              </div>
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default AddStudent;
