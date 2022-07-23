let i = 0;
function AddToList(){
    let Text = document.createElement('span');
    Text.innerText = document.getElementById('task').value;
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
    document.getElementById(`first-part`).append(Container);
    document.getElementById(`container${i}`).append(Text);
    document.getElementById(`container${i}`).append(DelBtn);
    document.getElementById(`container${i}`).append(EditBtn); 
    i+=1;
}