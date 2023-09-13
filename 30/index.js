"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Users List
let user = ["Abu Bakkar", "Akmal", "Admin", "Mohsin", "Shahid"];
for (let i = 0; i < user.length; i++) {
    if (user[i] === "Admin") {
        console.warn(`Hi ${user[i]}, would you like to see this status report ?`);
    }
    else {
        console.warn(`Welcome back ${user[i]}, You logged Again`);
    }
}
