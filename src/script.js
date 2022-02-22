document.getElementById("primeChecker").onclick =function display(){
    var pr=parseInt(document.getElementById("number").value);
    var flag = true;
    for (var i=2;i<pr;i++) {
        if (pr % i == 0) {
            console.log(typeof(pr));
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(typeof(pr));
        document.getElementById("prime").innerHTML= pr+" Is a prime number";
    } else {
        document.getElementById("prime").innerHTML= pr+" Is not a prime number";
    }
}