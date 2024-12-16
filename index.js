const teatarea=document.querySelector('#textarea');
const button=document.querySelector('#count');
const outpur=document.querySelector('.output');

button.addEventListener('click',()=>{

if(teatarea.value === ''){
    outpur.innerHTML='Please enter some test';
}else{
    //aeiou
    const val=textarea.value;
    let count=0;
    for(let i=0; i<val.length; i++){
        if(val[i] === "a" || val[i] === "e" || val[i] === "i"  || val[i] === "o" ||val[i] === "u" )
            count++;
    }

    outpur.innerHTML=`The number of vowels are ${count}`;
}



});