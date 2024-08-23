"use strict";
// darsda ishlangan, userlarni juft iddagilarni chiqarib beradi
let users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
    },
    {
        id: 7,
        name: "Patricia Lebsack",
        username: "Karianne",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
    },
    {
        id: 5,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
    },
    {
        id: 3,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
    },
    {
        id: 4,
        name: "Glenna Reichert",
        username: "Delphine",
    },
    {
        id: 3,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
    },
];
let unicUsers = [];
for (let user of users) {
    let userId = user.id;
    if (!unicUsers.some((unicUser) => unicUser.id === userId)) {
        unicUsers.push(user);
    }
}
console.log(unicUsers);
