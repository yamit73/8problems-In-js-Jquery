$("#primeChecker").click(function(){
    var pr=parseInt($("#number").val());
    var flag = true;
    for (var i=2;i<pr;i++) {
        if (pr % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        $("#prime").html(pr+" Is a prime number");
    } else {
        $("#prime").html(pr+" Is not a prime number");
    }
});