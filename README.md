# React Formik Auth App


## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Project Structure](#project-structure)
5. [Technologies Used](#technologies-used)
6. [Contributions](#contributions)
7. [License](#license)

## Overview

The React Formik Auth App is a web application developed with React, vite and formik. It utilizes Formik for form handling, Yup for form validation, React Router DOM for navigation, Context API for data storage, and additional hooks like `useState` for state variables. The app consists of two forms - one for user registration and another for user login. After successful registration, a popup alert is shown, and the user is automatically redirected to the home page. The home page displays the details of the currently logged-in user.

## Features

- **User Registration Form:** Allows users to register with proper details using Formik.

- **User Login Form:** Allows users to log in using authentic details with Formik.

- **Form Validation:** Uses Yup for form validation to ensure accurate user input.

- **Data Storage:** Utilizes Context API for storing user data.

- **Automatic Redirects:** After successful registration or login, the app automatically redirects to the home page.

- **Popup Alert:** Displays a popup alert after successful registration.

- **Error Page:** Display error page for any invalid URL.



## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/utkarshgupta04092003/9-form-validation-formik.git
   ```

2. Navigate to the project directory.

   ```bash
   cd 9-form-validation-formik
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore the React Formik Auth App.

## Project Structure

- **src/components/Signup.jsx:** Component for the user registration form using Formik and Yup.

- **src/components/Login.jsx:** Component for the user login form using Formik and Yup.

- **src/components/Home.jsx:** Component for the home page displaying the details of the currently logged-in user.

- **src/context/LoginContext.js:** Context API for managing user data.

- **src/App.js:** Main application component defining routes.


## Technologies Used

- React
- Formik
- Yup
- React Router DOM
- Context API
- React Hooks (`useState`)

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use and modify the code for personal and commercial purposes.
