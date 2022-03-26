import {getDatabase} from "https://www.gstatic.com/firebase.js/9.6.9/firebase-database.js"
const db = getDatabase();
function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
