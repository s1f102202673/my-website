window.addEventListener('load',()=>{  

    const elems = document.querySelectorAll('[hovercolor]');  

    elems.forEach((e)=>{  
        e.addEventListener('mouseover',()=>{  
            e.style.color = e.getAttribute('hovercolor');
        });

        e.addEventListener('mouseout',()=>{  
            e.style.color = "";
        });

    });
});

const pics_src1 = ["うなぎ.jpg","うどん.jpg","ハンバーガー.jpg"];
const pics_src2 = ["水族館.jpg","SKY CIRCUS.jpg","nanja town.jpg"];

let num = -1;
function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("picture_food").src = pics_src1[num];
  document.getElementById("picture_atraction").src = pics_src2[num];
}
 
setInterval(slideshow_timer, 2000);





 