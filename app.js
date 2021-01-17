let a;

function show_hide(){

    if(a==1)
    {
       document.getElementById("shoping").style.display="flex";
       return a=0;
    }
    else
    {
        document.getElementById("shoping").style.display="none";
        return a=1;
    }
};

let b;

function show_fade(){

    if(b==1){
        document.getElementById("one").style.display="flex";
        document.getElementById("two").style.display="flex";
        return b=0;
    }
    else{
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        return b=1;
    }

};
