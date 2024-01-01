import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { loginContext } from '../context/LoginContext';

export default function Login() {
  const { login } = useContext(loginContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      login(values);
      setTimeout(() => {
        formik.resetForm();
        navigate('/');
      }, 2000);
      // window.location.href = '/'
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
  });

  return (
    <div className="mx-auto max-w-md p-6 bg-gray-200 text-gray-800 rounded-md shadow-md mt-4">
      <h1 className="font-bold text-2xl mb-4">Login Page</h1>

      <form onSubmit={formik.handleSubmit}>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="mt-1 p-2 w-full rounded-md"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full rounded-md"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          ) : null}
        </div>

        <div>
          <button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}
