window.addEventListener('load', ()=>{
    const form = document.querySelector('#newtaskform');
    const input = document.querySelector('#newtaskinput');
    const listel = document.querySelector('#tasks');
    
    // the next code line is to prevent a page from refreshing again and again on pressing the submit button of the form 
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert('Please fill out the task');
            return;
        }
        const taskelement = document.createElement('div');
        taskelement.classList.add('task');
        
        const taskcontent = document.createElement('div');
        taskcontent.classList.add('content');

        taskelement.appendChild(taskcontent);
        
        const taskinput = document.createElement('input');
        taskinput.classList.add('text');
        taskinput.value = task;
        taskinput.setAttribute('readonly', 'readonly');
        taskcontent.appendChild(taskinput);

        const taskaction = document.createElement('div');
        taskaction.classList.add('actions');
        taskelement.appendChild(taskaction);

        const editbtn = document.createElement('button');
        editbtn.classList.add('edit');
        editbtn.innerText = 'Reframe task';
        taskaction.appendChild(editbtn);

        const dltbtn = document.createElement('button');
        dltbtn.classList.add('delete');
        dltbtn.innerText = 'I Accomplish 🎉'
        taskaction.appendChild(dltbtn);

        listel.appendChild(taskelement);


        editbtn.addEventListener('click', (e)=>{
            if(editbtn.innerText.toLowerCase() == 'reframe task'){
            editbtn.innerText = 'Save';
            taskinput.removeAttribute('readonly');
            taskinput.focus();
            }
            else{
                editbtn.innerText = 'Reframe task';
                taskinput.setAttribute('readonly', 'readonly');
            }
        });
        
        dltbtn.addEventListener('click', (e)=>{
            if (confirm('Remove this accomplishment from list?')) {
                listel.removeChild(taskelement);
            }
            
        });

    })
})