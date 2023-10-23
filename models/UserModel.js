import db from "../config/database.js"

//get all users
export const getUsers = (result) => {
    db.query("SELECT * FROM Users", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

//get user by username, password
export const getUserByUserPassword = (data, result) => {
    db.query("SELECT * FROM Users WHERE username = ? AND password = ?",
        [data.username, data.password], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results[0]);
            }
        })
}