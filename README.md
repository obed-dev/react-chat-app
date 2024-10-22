💬 React Chat App
Welcome to the React Chat App! This is a real-time chat application built with React, Firebase Authentication, and Firestore. Users can log in using Google Authentication and send messages that are stored and synchronized in real-time.

✨ Features
🔑 Google Authentication for secure login.
💬 Real-time messaging powered by Firestore.
📱 Fully responsive design for mobile and desktop.
🔄 Messages are updated instantly, no refresh needed.
🚀 Built with React Hooks for a clean, modern architecture.
🛠️ Tech Stack
⚛️ React: Frontend library for building user interfaces.
🔥 Firebase Authentication: Secure user authentication with Google.
📦 Firestore: NoSQL database for real-time data syncing.
🎨 CSS: Custom styling for a sleek chat experience.
🚀 Getting Started
Follow these steps to run the project locally.

1️⃣ Clone the Repository
bash
Copiar código
git clone https://github.com/your-username/react-chat-app.git
cd react-chat-app
2️⃣ Install Dependencies
bash
Copiar código
npm install
3️⃣ Configure Firebase
Create a project in Firebase Console.

Enable Google Authentication under Authentication > Sign-in method.

Set up Firestore as your database.

Create a .env.local file in the root directory with your Firebase configuration:

bash
Copiar código
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_firebase_app_id
4️⃣ Run the App
bash
Copiar código
npm start
Your app will be running at http://localhost:3000 🚀.

🧑‍💻 Deployment
Deploying to Netlify
Log in to Netlify.

Create a new site and connect your GitHub repository.

Set the Build Command to:

bash
Copiar código
npm run build
Set the Publish Directory to build/.

Add your Firebase environment variables under Site Settings > Environment Variables.

Deploy and enjoy! 🎉

📁 Project Structure
bash
Copiar código
/src
  /components
    Auth.jsx          # Handles user authentication
    Chat.jsx          # Main chat interface
    Message.jsx       # Individual message component
  /firebase
    firebase-config.js # Firebase configuration and initialization
  /styles
    ChatApp.css       # Main styles for the app
  App.js              # App entry point
.env.local            # Environment variables (not included in repo)
📸 Screenshots
Add some cool screenshots of your app here to showcase its interface! 😎

🔮 Future Enhancements
 Push notifications for new messages 📲
 Support for multiple chat rooms 🚪
 Profile customization for users 🖼️
 


🤝 Contributing
Feel free to fork this repository, create a new branch, and submit a pull request with your changes! Contributions are always welcome. 🙌

🧑‍🎨 Author
Obed Baltodano - obed-dev
