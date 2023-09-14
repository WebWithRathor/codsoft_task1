// document.querySelector(".row button").addEventListener("click",function(){
//     // document.querySelector(".input").textContent='hey'
//     document.querySelector(".row button").style.color='red'
// })
let input =``
let ans =``
document.querySelectorAll(".row button").forEach(function(elem){
    elem.addEventListener("click",function(e){
        
        
        if(e.target.textContent == '='){
            ans=``
            document.querySelector("#input2").value=ans
            input=eval(input);
        document.querySelector("#input1").value=input;
        }
        else if(e.target.textContent == 'A/C'){
            input=``;
        document.querySelector("#input1").value=input;
        document.querySelector("#input2").value=input;
        } 
        else{
            input+= e.target.innerHTML;
            document.querySelector("#input1").value=input
            ans=eval(input);
        document.querySelector("#input2").value=ans;


        }
        

    })


})