function checkans(){

    f = document.getElementById("in1").value;
    n = document.getElementById("nm2").innerHTML;
    console.log(f);
    console.log(n);
    if (f == n){
      
      document.getElementById("result").innerHTML = "Correct";
      document.getElementById("in1").style.backgroundColor = "green";
      document.getElementById("in1").value ='';
    }

    else{
        document.getElementById("result").innerHTML = "Wrong";
        document.getElementById("in1").style.backgroundColor = "red";
        a = a-1;
}

}
