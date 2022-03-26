document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
<<<<<<< HEAD
    var teach= ['CEAcPVJHzsROJs6PkcAFCP9YBfs2','NriIkZ3JiRcMXkrZ64BDq3BJ1uv2','CAUS4elywCPsNYtSbcg3QUTNVtf1','4KdjFFhx55O6iRAayXTscBoFSLk1','AYKNvKG3GXU4anaO2vfVmOeh9SL2'];
    if(teach.indexOf(user.uid)!== -1){
        location.replace("pages/teacher/teacher.html")
    }
    else{
        // location.replace("pages/teacher/teacher.html")
        location.replace("pages/invalid.html")
=======
    if(user.uid == 't0tGyatVM4g9S1zYtTBNUT04Asp2'){
        //alert(user.uid)
        location.replace("pages/teacher/teacher.html")
    }
    else if (user.uid == 'AYKNvKG3GXU4anaO2vfVmOeh9SL2') {
        location.replace("pages/teacher/take_attendance.html")
>>>>>>> c29bd0a88432781275eeb47d0810c70e55ebdfc4
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