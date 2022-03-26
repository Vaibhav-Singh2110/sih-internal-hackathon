document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    var teach = ['CEAcPVJHzsROJs6PkcAFCP9YBfs2', 'NriIkZ3JiRcMXkrZ64BDq3BJ1uv2', 'CAUS4elywCPsNYtSbcg3QUTNVtf1', '4KdjFFhx55O6iRAayXTscBoFSLk1', 'AYKNvKG3GXU4anaO2vfVmOeh9SL2'];
    var sdnt = ['fiwUeS52uoXrsM48SkZIp1bzi2K3',
        'fWyvGstqXScdkFwec5sPMIVYlrh2',
        '4hPIzVc6pOWqmiC70f6GxOFvQPf1',
        'MCd3v47J1FdZcmI00c3hsNJNcnn2',
        '4CDcgyQT1eXgnJHmrGGHMU2UJ0C3',
        'kAcjLnPYb1YN9TZMFpyZP28qBBh1',
        'n3SmD0IwweQop8j2SJKJ9sRFudf2',
        'BOfKJ64AkfMGFpM5G5K5yFLqCpj2',
        'ro0qyUVEy9RyaEaG3KmJsEdn8FI2',
        'qOtFXolWKedIbryyp5ZRQPFgDtP2',
        'A8uEiKuo5bcuv7MTMdze6W6PIPy1',
        'Fy4nS3nIr4d2IFNdFD0IkQDlH8p2',
        'MurOT5gUGOVD6emv9wPsMpscwIP2',
        'QaQadenTw0ghOgLO1sqYEGS5j2r1',
        'od5P8UAy9AdZWbwP8tlJPnj01Zj2'];
    if (teach.indexOf(user.uid) !== -1) {
        var temp = teach.indexOf(user.uid);
        if(temp == 0){
            location.replace("pages/teacher/teacher.html")
        }
        else if(temp == 1){
            location.replace("pages/teacher/teacher2.html")
        }
        else if(temp == 2){
            location.replace("pages/teacher/teacher3.html")
        }
        else if(temp == 3){
            location.replace("pages/teacher/teacher4.html")
        }
        else if(temp == 4){
            location.replace("pages/teacher/teacher5.html")
        }
    }
    else if(sdnt.indexOf(user.uid)!== -1){
        alert('WELCOME!')
        location.replace("pages/student/student.html")
    }
    else {
        location.replace("pages/invalid.html")
    }
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}

// function signUp() {
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .catch((error) => {
//             document.getElementById("error").innerHTML = error.message
//         });
// }

function forgotPass() {
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}