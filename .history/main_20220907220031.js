// setting up firebase with our website
const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyASgTZ01Z6p2w7cYHCp0Q14gDbCwQ3-GtI",
  authDomain: "inspectionapp-1.firebaseapp.com",
  databaseURL: "https://inspectionapp-1-default-rtdb.firebaseio.com",
  projectId: "inspectionapp-1",
  storageBucket: "inspectionapp-1.appspot.com",
  messagingSenderId: "887525344129",
  appId: "1:887525344129:web:b3318a9e5194908bdede80",
  measurementId: "G-7FQTTGM0YW",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("Hellow ${email}You are Signed In");
      window.location = "admnPage.html";
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
//Normal Sign In function
// function signin(){
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     // firebase code
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((result) => {
//         // Signed in
//         document.write("Hellow ${email}You are Signed In");
//         window.location = "admnPage.html";
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error.code);
//         console.log(error.message);
//       });
// }
////Arrow function version
