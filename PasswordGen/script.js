const display= document.querySelector('.display')
let digit=prompt("Enter Digit in number between 4 to 16" );
let btn = document.querySelector('.btn')


while (digit==""||isNaN(digit)||digit < 4||digit > 16){
    digit=prompt("Enter Digit in number between 4 to 16" );
}
if(digit){
btn.style.display="initial"
}
 

function generate(){
    let password, caps, small, nums, symbols;
    caps=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    small=caps.map(x=> x.toLowerCase());
    nums = [1,2,3,4,5,6,7,8,9,0];
    symbols = "!@#$^&*()+_<>"
    let mix =[];
    mix.push(...caps,...small,...nums,...symbols);
    mix=mix.sort(()=>Math.floor(Math.random()- 0.5))
    password=""
    
    

    for(i=0; i<digit; i++){
        const randomNum= Math.floor(Math.random()*mix.length)
        password +=mix[randomNum];
    }
    display.textContent=`Your ${digit} Digit password is: ${password}`;
// console.log(mix)
}