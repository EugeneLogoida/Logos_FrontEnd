let x = +prompt("Enter number");
if (x > 0) console.log(1);
else if (x < 0) console.log(-1);
else if (x == 0) console.log(0);
else console.log("Not a number");

//let login = prompt("Who`s there?");
//if (login == "Admin") {
//    let password = prompt("Password?");
//    if (password == "TheMaster") console.log("Welcome");
//    else if (password == "Cancel") console.log("Canceled");
//    else console.log("Wrong password");
//} else if (login == "Cancel") console.log("Canceled");
//else console.log("I don`t know");


let login = prompt("Who`s there?");
switch (login){
    case "Admin":
        let password = prompt("Password?");
        switch (password){
            case "TheMaster":
                console.log("Welcome");
                break;
            case "Cancel":
                console.log("Canceled");
                break;
            default:
                console.log("Wrong password");
                break;
        }
        break;
    case "Cancel":
        console.log("Canceled");
        break;
    default:
        console.log("I don`t know");
        break;
}