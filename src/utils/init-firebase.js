import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBRdqsPcekDWdLkbc6P_xUvB7mxqpl--Hw",
  authDomain: "newsauthentication-dev.firebaseapp.com",
  projectId: "newsauthentication-dev",
  storageBucket: "newsauthentication-dev.appspot.com",
  messagingSenderId: "1002814818581",
  appId: "1:1002814818581:web:a8169034d3f64529ba411c",
  measurementId: "G-Z4LWHZBR00",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
