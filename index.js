document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user.uid == 't0tGyatVM4g9S1zYtTBNUT04Asp2'){
        //alert(user.uid)
        location.replace("pages/teacher/teacher.html")
    }
    else if (user.uid == 'AYKNvKG3GXU4anaO2vfVmOeh9SL2') {
        location.replace("pages/teacher/take_attendance.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}