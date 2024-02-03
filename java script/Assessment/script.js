function names() {
    let person1 = document.getElementById("name1").value;
    let person2 = document.getElementById("name2").value;

    let ans1 = Array.from(person1).reverse().join('');
    let ans2 = Array.from(person2).reverse().join('');

    let sort1 = Array.from(ans1).sort().join('');
    let sort2 = Array.from(ans2).sort().join('');

    let concat1 = sort1.concat(sort2);

    let caps1 = person1.toUpperCase();
    let caps2 = person2.toUpperCase();

    document.getElementById("ans1").innerHTML = "<span style='color:red'>" + "Reverse the string:" + "</span>" + ans1 + " " + ans2;
    document.getElementById("ans2").innerHTML = "<span style='color:red'>" + "sort the string:" + "</span>" + sort1 + " " + sort2;
    document.getElementById("ans3").innerHTML = "<span style='color:red'>" + "concat the string:" + "</span>" + concat1;
    document.getElementById("ans4").innerHTML = "<span style='color:blue'>" + "concat the string:" + "</span>" + caps1 + " " + caps2;
}


//Squareroot program

function square() {
    let number = document.getElementById("num").value;

    document.getElementById("ans").innerHTML = "Output :" + Math.sqrt(number);
}

function guess() {
    let gue = document.getElementById("guessnumber").value;
    let ran = Math.floor(Math.random() * 10 + 1);
    if (ran == gue) {
        document.getElementById("guessans").innerHTML = "Correct guess";
    }
    else {
        document.getElementById("guessans").innerHTML = "Enter the anoter number";

    }

}

//9.Find the number of days between two years

function findyear() {
    let yaer1 = document.getElementById("year1").value;
    let yaer2 = document.getElementById("year2").value;
}

function mathexp() {
    let value = document.getElementById("math").value;
    document.getElementById("mathans").innerHTML = "Output :" + Math.exp(value);


}

function blurimg() {
    document.getElementById("images").src = "img/c.png";
}
function focusimg() {
    document.getElementById("images").src = "img/Java.png";
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("times").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

//5.Using switch case find the day by getting date and year from the user.
function findday() {
    const days=document.getElementById("Date").value;
    const day= new Date(days).getDay();
    
    switch (day) {
        case 0:
            document.getElementById("days").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("days").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("days").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("days").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("days").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("days").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("days").innerHTML = "Saturday";
           
    }


    }










