# Climbify App

![climbify logo long](https://github.com/tomi-casabona/climbify/assets/146122361/90b66b0e-27cf-40f3-869c-e99034199116)

## Description 📃

**Climbify** is a mobile application for registering climbing routes and mark them as completed or pending. With it's statistics and functionalities it can ease the climbing progress of a climber. Sign in with Google or Facebook and start enjoying your climbing way.

## Technologies Used 

- **TypeScript**.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: CSS framework for modern and responsive design.
- **Firebase**: Application development platform for real-time database and authentication.
- **Redux Toolkit**: Library for global state management in the application.
- **React Router Dom**: Navigation for a one-page application.

## Features 🎉

- **Route registering**: Register the Climbing Routes you want to complete.
- **Mark as Complete or Pending**: Mark your Routes as Pending if you haven't completed yet, or as completed so they are used for your statistics.
- **Maximum and medium grade**: Calculate your maximum completed grade and the average grade of your completed routes.
- **Sign up and Log in**: Sign up to save your own routes and never lose them!
- **Statistics**: Check the statistics page to see the amount of meters you have climbed, the number of grades you completed and much more!
- **Switch to your favourite grading system**: Choose between French, American, British, Australian... systems of grading.

## URL Climbify App - vercel ⚡

[Climbify App](https://climbify.vercel.app/)

## Images

![image](https://github.com/tomi-casabona/climbify/assets/146122361/d0866271-64ea-45be-8d5e-133a13ad766f)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/ded3e7d1-d6d0-4123-b228-21074c05ea7f)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/a467bed1-c990-4a00-b04a-f55412bffa8b)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/26f0e2fb-2b80-4c11-942a-f92d0fe7b9b6)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/743c1ac7-8876-49af-a096-9874f0eb375a)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/db9ccd9e-c183-4002-b2ef-db4172c3c254)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/ec34fc09-a80f-4049-b330-d49ee10316fd)
![image](https://github.com/tomi-casabona/climbify/assets/146122361/853e009d-3716-46fe-bfa7-33244461446a)

## Installation 💻

Follow these steps to clone and run the project locally.

1. Clone the repository:
   ```sh
   git clone https://github.com/tomi-casabona/climbify
   ```
2. Navigate to the project directory:
   ```sh
   cd climbify
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env.local` file in the project root with your Firebase credentials:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id

   ```

5. Start the application:
   ```sh
   npm run dev
   ```

The application should be available at [http://localhost:5173](http://localhost:5173).

## Firebase Project Setup

This README will guide you through the steps required to create a project in Firebase and configure the necessary environment variables to integrate it with an application using Vite.

### Step 1: Create a Project in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add project".
3. Enter a name for your project and follow the on-screen instructions to create it.

### Step 2: Obtain Your Firebase Credentials

1. In the Firebase console, select the project you just created.
2. Go to the "Settings" section (gear icon) in the top left corner.
3. Click on "Project settings".
4. Scroll down to the "Your apps" section.
5. Select the web app for which you want to obtain the credentials, or click on "Add app" if you haven't created one yet.
6. Copy the provided credentials, including:
   - API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID
   - Measurement ID

### Step 3: Configure Environment Variables

1. Open your project in the code editor.
2. Create a `.env.local` file in the root of the project if it doesn't already exist.
3. Add the following environment variables to the `.env.local` file with the credentials you copied in the previous step:

## Usage

1. **Sign In**: Sign in to have acces to the app.
2. **Add your first route**: Press the add button and register your first route.
3. **View Details**: Click on your first route to see the details you added.
4. **Add tries and comments**: Comment your routes and mark them as completed or pending.
5. **View Statistics Page**: If you have completed routes, check the statistics page to see your results.

---

Thank you for using Climbify App!
Let's get to the top!
