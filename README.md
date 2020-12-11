### About
This repo contains a server side native mobile application, a client side website and an express server. A form in the client side website allows users to be registered and on the server side app, a user can generate random winners out of the registered names. The technology stack that has been used to build the application is:<br/>
1. **React Native (https://reactnative.dev/)**<br/>
2. **ExpressJS (https://expressjs.com/)**<br/>
3. **NodeJS (https://nodejs.org/en/)**<br/>
4. **Mongo DB (https://www.mongodb.com)**<br/>
5. **React Native Paper (https://reactnativepaper.com/)**<br/>
6. **React JS (https://reactjs.org/)**<br/>
7. **Material UI (https://material-ui.com/)**<br/>
8. **Heroku (https://www.heroku.com/)**<br/>
9. **Firebase (https://firebase.google.com/)**<br/>

### Rules/pointers to remember for contribution
**Please note:** The site is open to contributions. You are requested to keep the following pointers in your mind while working:
1. The contributor should not deviate from the core idea of the site
2. Follow **BEM (http://getbem.com/)** naming conventions for the CSS classes
3. Replace the `BASE_API_URL` in the folders with your own url, hosted through Firebase or Heroku
4. Replace the Mongo DB_CONNECTION string with your own Mongo DB String
5. The server has additional API routes which might not have been implemented in the actual project

### To get started:<br/>
**To install the server (inside rand-gen-server):**<br/>
1. `npm install`: This installs npm modules for the server<br/>
2. `npm run dev`: Starts the server<br/>

**To install the client (inside client-side folder):**<br/>
1. `npm install`: This installs npm modules for the client<br/>
2. `npm start`: Runs the local server on your system<br/>

**To install server side application (inside ServerApp folder):**
1. `npm install`: This installs npm modules for the client<br/>
2. `npm start`: Runs the local server on your system<br/>
3. `npx react-native run-android` or `npx react-native run-ios`: Creates a test application on your device or emulator<br/>