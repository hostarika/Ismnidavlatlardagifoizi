const nameinput = document.getElementById("name-input");
const Check = document.getElementById("Check");
const resultlist = document.getElementById("result-list");
const result = document.getElementById("result");

async function ismningdavlatlardagifoizi(malumot) {
    const javob = await fetch(`https://api.nationalize.io/?name=${malumot}`);
    const data = await javob.json();

    resultlist.innerHTML = ``;

    data.country.forEach(e => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const result = document.createElement("div");

         
        img.src=`https://flagcdn.com/16x12/${e.country_id.toLowerCase()}.png`

        li.textContent = e.country_id + "  " + (e.probability * 100).toFixed(2) + " %" ;

        result.classList.add("result")
        
        result.appendChild(img)
        result.appendChild(li)
        resultlist.appendChild(result)
    });
}


Check.addEventListener("click", () => {
    if (nameinput.value.trim().length < 1) {
        alert("Biror narsa kiriting!")
    } else {
        ismningdavlatlardagifoizi(nameinput.value.trim())
    }
})
