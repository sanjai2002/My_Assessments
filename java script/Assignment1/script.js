
function date(){
    const date=document.getElementById("date").value;
    const days=["sunday","monday","tuesday","wednessday","thursday","friday","saturday"];
    const month =["January","February","March","April","May","June","July","August","September","October","November","December"];


    const day=new Date(date);
    document.getElementById("result").innerHTML=days[day.getDay()]+" "+month[day.getMonth()];
    // document.getElementById("result").innerHTML=day.getDay()
}

function myclear(){
    
   location.reload();
}


function gender(){
    let name=document.getElementById("name").value;
    let a=document.querySelector("input[type=radio][name=gender]:checked").value;

    if(a=="male"){
        // document.getElementById("output").innerHTML="sanjai";
        document.getElementById("output").innerHTML="Mr :"+name;
        
    }
    else{
        document.getElementById("output").innerHTML="Mrs :"+name;
    }
    

}