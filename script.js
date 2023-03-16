const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
let btn = document.getElementById("btn");
let output = document.getElementById("output")

btn.addEventListener('click', async ()=>{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data,data.title);
    output.innerHTML = data.title;
})
//your JS code here. If required.
