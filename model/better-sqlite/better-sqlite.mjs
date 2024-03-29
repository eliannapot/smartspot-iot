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

//getting image for parking area
export let getParkingSiteImage = (parkingArea) => {
    const query = db.prepare('SELECT images FROM OffStreetParking WHERE name = ?');
    let info;
    try {
        info = query.all(parkingArea);
        return info;
    }
    catch (err) {
        throw err;
    }
}

export let newSiteDateTime = (user, parkingspot, selectedDate, reservation_code, selectedSite, selectedTime) => {
    const query = db.prepare('INSERT INTO Booking VALUES (?, ?, ?, ?, ?, ?)');
    try {   
        query.run(user, parkingspot, selectedDate, reservation_code, selectedSite, selectedTime);
        // console.log("reservation code is: " + reservation_code)
        // console.log("done with try in better-sqlite of newSiteDateTime: " + user, parkingspot, selectedDate, reservation_code, selectedSite, selectedTime);
        return true;
    }
    catch (err) {
        throw err;           
    }
}

export let getParkingInformation = (reservation_code) => {
    const query = db.prepare('SELECT * FROM Booking WHERE reservation_code=?;');
    let info;
    try {
        info = query.all(reservation_code);
        return info;
    }
    catch (err) {
        throw err;
    }
}

export let getParkingSpots = (parkingArea) => {
    const query = db.prepare('SELECT id FROM ParkingSpot WHERE refParkingSite = ?;');
    let info;
    try {
        info = query.all(parkingArea);
        return info;
    }
    catch (err) {
        throw err;
    }
}

export let newSaveParkingSpot = (parkingspot, reservation_code) => {
    // console.log("parkingspot: ", parkingspot);
    // console.log("reservation_code: ", reservation_code);
    const query = db.prepare('UPDATE Booking SET refParkingSpot = ? WHERE reservation_code = ?;');
    try {
        query.run(parkingspot,reservation_code);
        // console.log("done with try in better-sqlite of newSaveParkingSpot: ");
        return true;
    }
    catch (err) {
        throw err;           
    }
}

export let getBookingDetails = (reservation_code) => {
    const query = db.prepare('SELECT * FROM Booking WHERE reservation_code=?;');
    let info;
    try {
        info = query.all(reservation_code);
        // console.log("better-sqlite getBookingDetails: ", info);
        return info;
    }
    catch (err) {
        throw err;
    }
}