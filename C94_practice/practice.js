
const firebaseConfig = {
  apiKey: "AIzaSyAE2eEjZvPjamCE2imUnHRZvAFU6U5lYIM",
  authDomain: "c93yuvan.firebaseapp.com",
  databaseURL: "https://c93yuvan-default-rtdb.firebaseio.com",
  projectId: "c93yuvan",
  storageBucket: "c93yuvan.appspot.com",
  messagingSenderId: "422048366702",
  appId: "1:422048366702:web:6e05ca11b2d5abd99c267f",
  measurementId: "G-HTJTEJGVHH"
};

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


