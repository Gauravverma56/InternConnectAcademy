const Allbuttons = document.querySelectorAll('button');
const screen  = document.getElementById('screen');

for (let btn of Allbuttons){
    btn.addEventListener('click', () =>{
        const btntext = btn.innerText; 
        
        if(btntext === 'C'){
            screen.value = "";
        }else if(btntext ==='X'){
            screen.value += '*'
        }else if (btntext==='='){
            try{

                screen.value = eval(screen.value)
            }
            catch(er){
                screen.value= "Invalid value"
            }
        }else{
            screen.value=screen.value+btntext;
            
       }
    })
}