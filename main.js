var pizza_array=[];

function submit(){

    var p1=document.getElementById("pizza_1").value;
    var p2=document.getElementById("pizza_2").value;
    var p3=document.getElementById("pizza_3").value;
    var p4=document.getElementById("pizza_4").value;

    pizza_array.push(p1);
    pizza_array.push(p2);
    pizza_array.push(p3);
    pizza_array.push(p4);

    console.log(pizza_array);

    document.getElementById("display_pizza").innerHTML=pizza_array;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
};
function sort(){
    pizza_array.sort();
    console.log(pizza_array);
    document.getElementById("display_pizza").innerHTML=pizza_array;

    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort").style.display="none";
}