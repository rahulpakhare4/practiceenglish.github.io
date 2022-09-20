function starttest() {

    let inputAns = document.getElementById("tb1").value;
    if (inputAns == "") {
        nextimage()
        getfocus()
        

        
    } else {
        checkans()
        getfocus()
    }

}



LiCorrectAns = [];
function startp(){
    LiCorrectAns[0] = "Correct";
    console.log(LiCorrectAns[0])
}


var myary = [];



function nextimage(){
    let random = Math.floor((Math.random() * 7) + 0);
    a = ['https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Circle.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Hexagon.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Octagon.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Oval.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Pentagon.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Rectangle.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Square.JPG', 'https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/Triangle.JPG'];
    var x = document.getElementById("myimg");
    x.src = a[random];
    console.log(random);
    j = a[random].replace(".JPG", "");
    n = j.replace("https://raw.githubusercontent.com/rahulpakhare4/practiceenglish.github.io/main/", "");
    console.log(n);
    myary[0] = n;
    document.getElementById("tb1").style.backgroundColor = "white";
   }


function checkans(){
    userinputs = document.getElementById("tb1").value;
       sysAns = myary[0];
   
    if(userinputs == sysAns){

        document.getElementById("tb1").style.backgroundColor = "green";
        LiCorrectAns[0] = "Correct";
        document.getElementById("tb1").value = "";
        nextimage()
        
    }
        else{
            document.getElementById("tb1").style.backgroundColor = "red";
            LiCorrectAns = [];
        }

    }

function getfocus() {
  document.getElementById("tb1").focus();
}
