addBtn.addEventListener("click", function(){
    var li = document.createElement("li");
    li.innerHTML = `<span>${inpbox.value}</span>
    <button class = "rmBtn">REMOVE</button><span class="svg"><svg fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-47.26 -47.26 567.13 567.13" xml:space="preserve" stroke="#000000" stroke-width="12.287963999999999" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="41.590031999999994"> <g> <g> <path d="M19.692,139.213C8.817,139.213,0,148.03,0,158.905v154.812c0,10.875,8.817,19.692,19.692,19.692h99.438V139.213H19.692z"></path> </g> </g> <g> <g> <polygon points="138.822,124.864 138.822,347.75 293.396,460.359 293.396,12.256 "></polygon> </g> </g> <g> <g> <path d="M405.999,75.251l-13.922,13.922c39.235,39.241,60.845,91.49,60.845,147.135c0,55.645-21.61,107.894-60.845,147.134 l13.922,13.923c42.957-42.952,66.615-100.154,66.615-161.057C472.614,175.404,448.956,118.203,405.999,75.251z"></path> </g> </g> <g> <g> <path d="M350.321,129.934l-13.922,13.922c50.971,50.981,50.971,133.923,0,184.904l13.922,13.923 C408.976,284.03,408.976,188.587,350.321,129.934z"></path> </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M19.692,139.213C8.817,139.213,0,148.03,0,158.905v154.812c0,10.875,8.817,19.692,19.692,19.692h99.438V139.213H19.692z"></path> </g> </g> <g> <g> <polygon points="138.822,124.864 138.822,347.75 293.396,460.359 293.396,12.256 "></polygon> </g> </g> <g> <g> <path d="M405.999,75.251l-13.922,13.922c39.235,39.241,60.845,91.49,60.845,147.135c0,55.645-21.61,107.894-60.845,147.134 l13.922,13.923c42.957-42.952,66.615-100.154,66.615-161.057C472.614,175.404,448.956,118.203,405.999,75.251z"></path> </g> </g> <g> <g> <path d="M350.321,129.934l-13.922,13.922c50.971,50.981,50.971,133.923,0,184.904l13.922,13.923 C408.976,284.03,408.976,188.587,350.321,129.934z"></path> </g> </g> </g></svg></span>`
    list.appendChild(li); 
    li.children[1].addEventListener("click", function(){
        (localStorage.removeItem('data'));
        li.remove();
        console.log(list);
        saveData();
    })  
    inpbox.value = "";
    li.children[2].addEventListener("click", function(){
        let span = (li.children[2].previousElementSibling.previousElementSibling);
        let utter = new SpeechSynthesisUtterance(span.innerHTML);
        window.speechSynthesis.speak(utter);
        })
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
let svg = document.querySelectorAll(".svg")
for(let i = 0;i<svg.length;i++){
    svg[i].addEventListener("click", function(){
        let span = (svg[i].previousElementSibling.previousElementSibling);
        let utter = new SpeechSynthesisUtterance(span.innerHTML);
        window.speechSynthesis.speak(utter);
    })
}
