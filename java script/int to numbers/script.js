function numbers() {
    let number = parseInt(document.getElementById("num").value);
    //trim
    

    switch (number) {
        case 1:
            document.getElementById("ans").innerHTML = "One";
            break;
        case 2:
            document.getElementById("ans").innerHTML = "Two";
            break;
        case 3:
            document.getElementById("ans").innerHTML = "Three";
            break;

        case 4:
            document.getElementById("ans").innerHTML = "Four";
            break;
        case 5:
            document.getElementById("ans").innerHTML = "Five";
            break;

        case 6:
            document.getElementById("ans").innerHTML = "Six";
            break;
        case 7:
            document.getElementById("ans").innerHTML = "Sevan";
            break;
        case 8:
            document.getElementById("ans").innerHTML = "Eight";
            break;
        case 9:
            document.getElementById("ans").innerHTML = "Nine";
            break;
        case 10:
            document.getElementById("ans").innerHTML = "Ten";
            break;
        default:
            document.getElementById("ans").innerHTML = "Wrong input";




    }


}