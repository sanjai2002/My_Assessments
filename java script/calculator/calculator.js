function add(){
    const num1=Number(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const ans=num1+num2;

    document.getElementById("ans").innerHTML=ans;
}


function sub(){
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const ans=num1-num2;

    document.getElementById("ans").innerHTML=ans;
}


function multiply(){
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const ans=num1*num2;

    document.getElementById("ans").innerHTML=ans;
}

function division(){
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const ans=num1%num2;

    document.getElementById("ans").innerHTML=ans;
}

function clears(){
    location.reload();

}