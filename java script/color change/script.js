function namechange(){
//     let name=["1","2","3","4","5","6","7","8","9","A","B","C","E","F"];

//     for(let i=0;i<6;i++){
//         let sum='#';
//         let change=name[Math.floor((Math.random()*14))];
//         sum=sum+change;
//     }
//     document.getElementById("ans").innerHTML=sum;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("colorchange").style.backgroundColor = color;
    
    
}