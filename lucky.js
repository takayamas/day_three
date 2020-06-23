let ind = 0;
const picture = ['airi.jpg','arum.jpg','murad.jpg'];
const bw = document.querySelector('div');
function click_left(){
    ind--;
    if(ind==-1){
        ind = picture.length-1;
    }
    bw.style.backgroundImage=`url('./images/${picture[ind]}')`;
}
function click_right(){
    ind++;
    if(ind==picture.length){
        ind = 0;
    }
    bw.style.backgroundImage=`url('./images/${picture[ind]}')`;
}
let num = "";
function show(str){
    if(num != "" || str!='0'){
        num+="";
        num+=str;
        document.getElementById('num').innerHTML=num;
    }
}
function clearStr(){
    num="";
    document.getElementById('num').innerHTML=0;
}
function cal(){
    
}