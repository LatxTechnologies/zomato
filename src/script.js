let mode = document.querySelector("#mode");
let section3 = document.querySelector("#section3");
let category = document.querySelectorAll("#section3 .box p a");

mode.addEventListener("click",function()
{
    section3.classList.toggle("myDark");
    for(let i=0;i<category.length ; i++)
    {
        category[i].classList.toggle("myDark");
    }

    if(mode.innerText === "Dark Mode")
    {
        mode.innerText = "Light Mode";

    }
    else
    {
        mode.innerText = "Dark Mode";
    }
})

// Dynamic Menu
let option = [
    {
    "cat":"Mumbai"
    },
    {
    "cat":"Delhi"
    },
    {
    "cat":"Bangalore"
    },
    {
    "cat":"Hyderabad"
    },
    {
    "cat":"Ahmedabad"
    }
    ,
    {
    "cat":"Chennai"
    }
    ,
    {
    "cat":"Kolkata"
    },
    {
    "cat":"Surat"
    },
    {
    "cat":"Pune"
    }
    ];
    

// let sel = document.getElementById("options");
// for(let i=0 ;i<option.length ; i++)
// {
//     sel.appendChild(`<option> ${option[i].cat} </option>`);
// }

let sel=document.getElementById("options");
for(let i=0;i<option.length;i++){
sel.add(new Option(option[i].cat))
}
