


const insert = document.getElementById('insert');




window.addEventListener('keydown', (e) => {



    insert.innerHTML = `

    <div class="key">
    a
    <small>${e.key === ' ' ? 'space ' : e.key}</small>
 </div>


 <div class="key">
     KeyA
     <small>${e.keyCode}</small>
 </div>



 <div class="key">
 KeyA

 <small>${e.code}</small>
 </div>


 
 <div class="key">
     Press any key to get the keycode
     </div>


    
    
    
    
    
    
    
    
    
    
    `



})