addBtn.addEventListener("click", function(){
    var li = document.createElement("li");
    li.innerHTML = `<span>${inpbox.value}</span>
    <button class = "rmBtn">REMOVE</button>`
    list.appendChild(li); 
    li.children[1].addEventListener("click", function(){
        (localStorage.removeItem('data'));
        li.remove();
        console.log(list);
        saveData();
    })  
    inpbox.value = "";
    saveData();
})

function saveData()
{
    localStorage.setItem("data", list.innerHTML);
}
function showData()
{
    list.innerHTML = localStorage.getItem("data");

}
showData();
let rmBtn = (document.querySelectorAll(".rmBtn"));
for(let i = 0; i<rmBtn.length;i++){
rmBtn[i].addEventListener("click", function(){
    let li = rmBtn[i].parentElement;
    li.remove();
    localStorage.removeItem('data');
    console.log(li);
})
}

console.log(list.children)

