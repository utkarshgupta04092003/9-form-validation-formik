import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { loginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';


const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length < 3) {
    errors.firstname = 'First name should be greater than 3 characters';
  } else if (values.firstname.length > 15) {
    errors.firstname = 'First name should be less than 15 characters';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length < 3) {
    errors.lastname = 'Last name should be greater than 3 characters';
  } else if (values.lastname.length > 15) {
    errors.lastname = 'Last name should be less than 15 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.contact) {
    errors.contact = 'Required';
  } else if (!/^(\+91|0)?[6789]\d{9}$/.test(values.contact)) {
    errors.contact = 'Invalid contact format';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
    errors.password = 'Weak password';
  }

  if (!values.cnfpass) {
    errors.cnfpass = 'Required';
  } else if (values.password !== values.cnfpass) {
    errors.cnfpass = 'Password does not match';
  }

  return errors;
};

export default function Signup() {


  const { signup } = useContext(loginContext);
  const navigate = useNavigate();



  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      password: '',
      cnfpass: ''
    },
    validate,
    onSubmit: values => {
      signup({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        contact: values.contact,
        password: values.password
      })
      
      setTimeout(() => {
        
        formik.resetForm();
        navigate('/');
      }, 1000);
    }
  });

  return (
    // <div className="">
    <div className="mx-auto max-w-md  bg-gray-200 text-gray-800 rounded-md shadow-md mt-4">
      <h1 className="font-bold text-2xl pl-6 pt-6">Register User</h1>

      <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-md">
        <form onSubmit={formik.handleSubmit}>

          <div className="mb-4">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              className="w-full p-2 border rounded"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstname && formik.errors.firstname ? <p className="text-red-500">{formik.errors.firstname}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="w-full p-2 border rounded"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastname && formik.errors.lastname ? <p className="text-red-500">{formik.errors.lastname}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="w-full p-2 border rounded"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="contact">Contact No</label>
            <input
              type="text"
              id="contact"
              className="w-full p-2 border rounded"
              value={formik.values.contact}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contact && formik.errors.contact ? <p className="text-red-500">{formik.errors.contact}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? <p className="text-red-500">{formik.errors.password}</p> : null}
          </div>

          <div className="mb-4">
            <label htmlFor="cnfpass">Confirm Password</label>
            <input
              type="password"
              id="cnfpass"
              className="w-full p-2 border rounded"
              value={formik.values.cnfpass}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cnfpass && formik.errors.cnfpass ? <p className="text-red-500">{formik.errors.cnfpass}</p> : null}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
