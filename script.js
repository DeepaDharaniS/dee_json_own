let json1 = `[
    {
        "Name":"Deepa",
        "Place":"Dindigul",
        "Phonenumber":9999299992,
        "Email":"deepdrni@gmail.com",
        "Image":"images/catty.jpg"
    },
    {
        "Name":"Dharani",
        "Place":"Madurai",
        "Phonenumber":8888188881,
        "Email":"kaka@gmail.com",
        "Image":"images/deery.jpg"
    },
    {
        "Name":"Keerthi",
        "Place":"Thanjavur",
        "Phonenumber":4444244441,
        "Email":"kiki@gmail.com",
        "Image":"images/dogggssy.jpg"
    },
    {
        "Name":"Praba",
        "Place":"Coimbatore",
        "Phonenumber":8989898989,
        "Email":"mumu@gmail.com",
        "Image":"images/elephy.jpg"
    },
    {
        "Name":"Mona",
        "Place":"Chennai",
        "Phonenumber":12312312312,
        "Email":"momo@gmail.com",
        "Image":"images/doggy.jpg"
    }


]`
// let parsed=JSON.parse(json1)
// console.log(parsed)

// console.log(JSON.stringify(parsed))
function ownData() {
    



    let parsed = JSON.parse(json1)
    console.log(parsed)

    const tableBody = document.getElementById("tableBody");

   
    parsed.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${entry.Name}</td>
        <td>${entry.Place}</td>
        <td>${entry.Phonenumber}</td>
        <td>${entry.Email}</td>
        <td><img src="${entry.Image}"></td>`;
        tableBody.appendChild(row);
    });
}


window.onload = ownData();