let boxes=document.querySelectorAll(".inn")
let reset=document.querySelector("#reset")
let turnO=true;
let arr=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]

const dis=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}
const newgame=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
    turnO=true;

}

boxes.forEach((inn)=>{
    inn.addEventListener("click",()=>{ 
        console.log("click")
        if(turnO){
            inn.innerText="O"
            turnO=false;
        }
        else{
            inn.innerText="X"
            
            turnO=true;
        }
            inn.disabled=true;
            
            winner();
            // if(!winner()){
            //     draw();
            // }
    })
    
})


const winner=()=>{
    for(let pattern of arr){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                alert(`winner ${pos1}`)
                dis();
                return true;
            }
        }
    }
    return false;
}

const draw=()=>{
    let draww=true;
    for(let d of boxes){
        if(d.innerText==""){
            draww=false;
            break;
        }
    }
    if(draw){
        alert("Draw");
        dis();
    }
}


reset.addEventListener("click",newgame)