import React, { useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import LoginButton from "./LoginButton";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  // used Formik library for form handling and can be added validation too
  // all inputs are controlled
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        isChecked: false,
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="flex flex-col space-y-5 h-64">
        <Field name="email">
          {({ field, form }) => (
            <Input
              type="email"
              label="Email"
              value={form.values.email}
              {...field}
            />
          )}
        </Field>

        <Field name="password">
          {({ field, form }) => (
            <Input
              type="password"
              label="Password"
              value={form.values.password}
              {...field}
            />
          )}
        </Field>
        <Field name="isChecked">
          {({ field }) => <Checkbox field={field} />}
        </Field>

        <LoginButton>continue</LoginButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
