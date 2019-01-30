var A = prompt("A?");
var B = prompt("B?");
function compare (a,b){
    if (a > b){
        return"A > B";
    }
    else if (a < b){
        return"A < B";
    }
     else if (a == b){
        return"A == B";
    }
    else {
        return"錯誤";
    }       
}
alert(compare(A,B));