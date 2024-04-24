

let year = new Date().toLocaleDateString("en-US", {year:"numeric"});
document.querySelector("#year").innerHTML = year


document.querySelector("#lastModified").innerHTML = new Date(document.lastModified);





