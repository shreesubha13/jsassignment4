let s = "Hello javascript";

function reversestring(str){
    return str.split("").reverse().join("");
}
function reversedWithtimeset(str)
{
    setTimeout(function(){
    let reversedstr = reversestring(str);
    console.log("Reversed:", + reversedstr);
    },
    2000);

}
reversedWithtimeset(s)