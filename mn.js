document.getElementById("add").addEventListener('click',function(list){
var val=document.getElementById("item").value;
var li = document.createElement("li");
var rule = document.createTextNode(val);
li.appendChild(rule);
document.getElementById("list").appendChild(li);



var removeBtn = document.createElement("input");
removeBtn.type = "button";
removeBtn.value = "Remove";
removeBtn.onclick = remove;
li.appendChild(removeBtn);
document.getElementById("list").appendChild(li);
})

function remove(e) {
var el = e.target;
el.parentNode.remove();
}