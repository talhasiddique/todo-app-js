var list = document.getElementById("list");

function add(){
    //get input 
    var todo_item = document.getElementById("todo-item");

    //create li tag
    if(!/([^\s])/.test(todo_item.value)){
        alert("Please enter something!")
    }
      
    else{
        
        var li = document.createElement('li');
        var litext = document.createTextNode(todo_item.value);
      
        li.appendChild(litext);
    }

    //create dlt btn

    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("DELETE");

    delbtn.setAttribute("class","btn");
    delbtn.setAttribute("onclick","deleteitem(this)");
    delbtn.appendChild(deltext);


    //create edit button

    
    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT");

    editbtn.setAttribute("class","btn");
    editbtn.setAttribute("onclick","edititem(this)");
    editbtn.appendChild(edittext);

    li.appendChild(editbtn);
    li.appendChild(delbtn);

    list.appendChild(li);
    todo_item.value = "";

}

function deleteitem(d){
d.parentNode.remove();

}

function delete_all(){
    list.innerHTML = "";
}

function edititem(e){

    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter new value : ",val);
        if(!/([^\s])/.test(editvalue)){
            alert("Please enter something");

        }
        else{
            e.parentNode.firstChild.nodeValue = editvalue;
        }


}