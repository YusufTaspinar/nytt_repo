  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKQHRFXQuHoi8xCdUJFkYf8216zvG_nBE",
    authDomain: "bokmappe.firebaseapp.com",
    databaseURL: "https://bokmappe.firebaseio.com",
    projectId: "bokmappe",
    storageBucket: "bokmappe.appspot.com",
    messagingSenderId: "679292833990",
    appId: "1:679292833990:web:678e8c2a7a26625ef447c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let db=firebase.database();
let bokmappe=db.ref("bokmappe")

function submit_data(){
    var title_In=document.getElementById("txtTitle").value
    var ut_In=document.getElementById("dtUt").value
    var fat_In=document.getElementById("txtFat").value
    var for_In=document.getElementById("txtFor").value
    var rat_In=document.getElementById("Rat").value
    
    let new_object=bokmappe.child(title_In)
    new_object.set({
        Title:title_In, Utgivelsesår:ut_In, Forfater:fat_In, Forlag:for_In, Rating:rat_In
    });
}
function sendToGitHub(){
    window.location="https://github.com/YusufTaspinar/nytt_repo";
}