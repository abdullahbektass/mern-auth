# README

## MERN Advanced Authentication Project

This project is a robust authentication system built with the MERN (MongoDB, Express, React, Node.js) stack. It is heavily inspired by the [burakorkmez/mern-advanced-auth](https://github.com/burakorkmez/mern-advanced-auth) repository and developed by closely following a detailed YouTube tutorial. This implementation includes features such as user signup, email verification, login, password recovery, and more. While following the tutorial, I adapted certain features, such as using Gmail with NodeMailer for email services instead of Mailtrap.

---

### Features

- **Backend Setup**: Fully functional backend powered by Express.js and MongoDB.
- **Email Verification**: Send verification emails to activate user accounts upon signup.
- **Login and Logout**: Secure authentication powered by JSON Web Tokens (JWT).
- **Password Recovery**: Complete forgot and reset password workflows.
- **Protected Routes**: Access control for authenticated users only.
- **Frontend UI**: Responsive and user-friendly interface developed with React.
- **Email Service**: Implemented using NodeMailer with Gmail.

---

### Technologies Used

#### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT (JSON Web Token)
- NodeMailer (Gmail integration)

#### Frontend
- React
- Axios
- Tailwind CSS (or your preferred CSS framework)

---

### Setup Instructions

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <repository-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following keys:
   ```
   MONGO_URI=your_mongo_uri
   PORT=5000
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   GMAIL_USER=your_gmail_address
   GMAIL_PASS=your_gmail_app_password
   CLIENT_URL=http://localhost:5173
   ```

   > **Note**: For secure Gmail integration, use an App Password from your Google Account settings.

5. Start the backend server:
   ```bash
   npm run start
   ```

6. Run the frontend:
   - Navigate to the `client` folder:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

---

### Project Workflow

1. **User Signup**:
   - The user submits their details on the signup page.
   - A verification email is sent to the user's inbox.

2. **Email Verification**:
   - The user clicks the verification link in their email.
   - Their account is activated.

3. **Login and Dashboard**:
   - The user logs in with their email and password.
   - Protected routes become accessible.

4. **Forgot and Reset Password**:
   - The user initiates a password reset request.
   - A reset link is sent to their email for password recovery.

5. **Deployment**:
   - Build the application using `npm run build` and deploy it to your preferred platform.

---

### Gmail and NodeMailer Setup

For email functionality, this project uses Gmail with NodeMailer. Follow these steps to configure Gmail:

1. Log in to your Gmail account.
2. Go to [Google Account Security Settings](https://myaccount.google.com/security).
3. Generate an **App Password** under "App Passwords."
4. Use the App Password in the `.env` file under the `GMAIL_PASS` key.
5. Set your Gmail address as `GMAIL_USER` in the `.env` file.

---

### Running Locally

1. Build the app:
   ```bash
   npm run build
   ```

2. Start the app:
   ```bash
   npm run start
   ```

---

### Credits

- **Inspiration**: [burakorkmez/mern-advanced-auth](https://github.com/burakorkmez/mern-advanced-auth)
- **Tutorial**: This project was developed by closely following a detailed YouTube tutorial. It was an excellent resource for implementing an advanced authentication system.

---

### Support

If this project helped you, consider starring the original repository or supporting the creators. If you have questions or feedback, feel free to open an issue.

---

Enjoy building and enhancing your authentication system! 🚀
