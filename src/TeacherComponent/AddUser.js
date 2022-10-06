import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
const AddUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const validation = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    username: yup.string().required("Username is required"),
    address: yup.string().required("Address is required"),
  });

  const handleSubmit = (value) => {
    axios
      .post("https://626e4477e58c6fabe2dd5cce.mockapi.io/profile", value)
      .then((response) => {
        console.log(response.data);
      });
    navigate("/profile/teacher");
  };

  return (
    <Container>
      <h1>{id ? "Update" : "Create"} Profile</h1>
      <Formik
        validationSchema={validation}
        initialValues={{ name: "", email: "", username: "", address: "" }}
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
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter Username"
                type="text"
                onChange={handleChange}
                value={values.username}
              />
              <div className="color">
                <ErrorMessage name="username" />
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
export default AddUser;
