let i = 0;
function AddToList(){
    if(document.getElementById('first-part').style.height>=document.getElementById('first-part').style.maxHeight){
        document.getElementById('first-part').style="overflow-y:scroll;"
    };
    let Text = document.createElement('input');
    Text.value = document.getElementById('task').value;
    Text.disabled = true;
    Text.className = 'input-block';
    let Container = document.createElement('div');
    Container.id = `container${i}`;
    Container.className = 'elem-container';
    let DelBtn = document.createElement('button');
    DelBtn.className = 'delBtn';
    DelBtn.innerText = 'delete';
    DelBtn.onclick = function del(){
        this.parentNode.remove()
    }
    let EditBtn = document.createElement('button');
    EditBtn.className = 'editBtn';
    EditBtn.innerText = 'edit';
    EditBtn.onclick = function edit(){
        if(this.parentNode.firstElementChild.disabled == true){
            this.parentNode.firstElementChild.disabled = false;
            this.innerText = 'save';
        }
        else{
            this.parentNode.firstElementChild.disabled = true;
            this.innerText = 'edit';
        }
    };
    document.getElementById(`first-part`).append(Container);
    document.getElementById(`container${i}`).append(Text);
    document.getElementById(`container${i}`).append(DelBtn);
    document.getElementById(`container${i}`).append(EditBtn); 
    i+=1;
}

