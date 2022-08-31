function starttable() {
    createAry()
    storeusertable()
    checkAns()

}

function createAry() {
    usertable = [];
    systabars = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(systabars);
}


function clearAll() {
    console.log("Rahul");
    document.getElementById("tb1").value = "";
    document.getElementById("tb2").value = "";
    document.getElementById("tb3").value = "";
    document.getElementById("tb4").value = "";
    document.getElementById("tb5").value = "";
    document.getElementById("tb6").value = "";
    document.getElementById("tb7").value = "";
}

function storeusertable() {

    tbs1 = document.getElementById("tb1").value;

    if (tbs1 != "") {
        usertable.push((document.getElementById("tb1").value));
        usertable.push((document.getElementById("tb2").value));
        usertable.push((document.getElementById("tb3").value));
        usertable.push((document.getElementById("tb4").value));
        usertable.push((document.getElementById("tb5").value));
        usertable.push((document.getElementById("tb6").value));
        usertable.push((document.getElementById("tb7").value));
        console.log(usertable);
    }


}


function checkAns() {
    if (JSON.stringify(systabars) == JSON.stringify(usertable)) {
        document.getElementById("rest1").innerHTML = "Correct";
        clearAll()

    } else {
        document.getElementById("rest1").innerHTML = "Wrong";
    }
}