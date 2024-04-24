
document.querySelector("#year").innerHTML = new Date().toLocaleDateString("en-US", {year:"numeric"});

document.querySelector("#lastModified").innerHTML = new Date(document.lastModified);





