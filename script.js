const pwEl = document.getElementById("pw");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
lowercase='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
numbers='1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
symbols='-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?-_=+;:,<.>/?';

const run = () => {
    pswd='';
    //console.log(length);
    
    for (i=1;i<15;i++){
        //console.log(i);
        randomNum=Math.random()*100;
        //console.log(randomNum);
        if (upperEl.checked && (i%4)==1) {
            //console.log("uppercase checked");
            res = uppercase.charAt(randomNum);
            pswd+=res;
            //console.log(pswd);

        }
        if (lowerEl.checked && (i%4)==2) {
            res = lowercase.charAt(randomNum);
            pswd+=res;
        }
        if (numberEl.checked && (i%4)==3) {
            res = numbers.charAt(randomNum);
            pswd+=res;
        }
        if (symbolEl.checked && (i%4)==0) {
            res = symbols.charAt(randomNum);
            pswd+=res;
        }
    }
    console.log(pswd);
    pwEl.innerText=pswd;
}