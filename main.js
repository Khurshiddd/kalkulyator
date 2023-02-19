var i=document.getElementById("h");
function l(y){
    if (i.value=="0"){
        i.value=y;
    }else{
        i.value+=y;
    }
}
function c(){
    i.value="";
    r();
}
function hs(){
    i.value=i.value.substr(0,i.value.length-1);
    r();
}

function h(){
    i.value=eval(i.value);
}
function r(){
    if(i.value==""){
        i.value="0"
    }
}