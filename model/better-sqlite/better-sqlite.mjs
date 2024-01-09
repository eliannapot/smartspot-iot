import sqlite from 'better-sqlite3';
const db = new sqlite('model/database/smartparkingSDM.sqlite');

export let getParkingSiteName = () => {
    const query = db.prepare('SELECT name FROM OffStreetParking');
    let info;
    try {
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}


export let newSiteDateTime = (user, parkingspot, selectedDate, reservation_code, selectedSite, selectedTime) => {
    console.log("Inside newSiteDateTime");
    const query = db.prepare('INSERT INTO Booking VALUES (?, ?, ?, ?, ?, ?)');
//    const query = db.prepare('INSERT INTO Booking VALUES ("dabbis6", null, "2024-12-3", 18281928, "ECE Area 1", "12:00")');
    console.log("Query okay", query);
    try {
        console.log(user, parkingspot, selectedDate, reservation_code, selectedSite, selectedTime);
        query.run(user, parkingspot, selectedDate, reservation_code, selectedSite, selectedTime);
        return true;
    }
    catch (err) {
        throw err;
    }
}

// import db from 'better-sqlite3'
// const sql = db('../database/gymspot.sqlite');
// // Τι χρειαζομαι το const sql = new db....

// export let addUser = (user) => {
//     const stmt = sql.prepare('INSERT INTO User VALUES (?, ?, ?, 0)');
//     let info;

//     try {
//         info = stmt.run(user.username, user.email, user.password);
//         return true;
//     }
//     catch (err) {
//         throw err;
//     }
// }