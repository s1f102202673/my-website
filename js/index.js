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