function writeUserData(usn,attendance) {
    const db = getDatabase();
    set(ref(db, 'Attendance/' + Date.getDate()), {
      Usn : usn.value,
      Atten : attendance.value
    });
  }
