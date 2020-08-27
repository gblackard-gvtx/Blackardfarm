// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOAkbwq28c66lpUD3zBkf9xnSm_Zca5dE",
    authDomain: "blackard-farms.firebaseapp.com",
    databaseURL: "https://blackard-farms.firebaseio.com",
    projectId: "blackard-farms",
    storageBucket: "blackard-farms.appspot.com",
    messagingSenderId: "219948314346",
    appId: "1:219948314346:web:6644a4461db601a67f3193",
    measurementId: "G-4T3250R6C4",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernce messages collection
  var messageRef = firebase.database().ref("messages");

  // listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);
// submit form
function submitForm(e) {
  e.preventDefault();
  // get values
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");
  //save message
  saveMessage(name, company, email, phone, message);

  //show alert
  document.querySelector(".alert").style.display = "block";
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to firebase

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}