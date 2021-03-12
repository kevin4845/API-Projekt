const apikey = 'c6ed510a2963cd5722bf5952c6a0b42f'

/* THIS FUNCTION WILL BE RUN AS SOON AS THE BODY IS LOADED IN THE HTML */
function Start() {
    document.getElementById('submit').addEventListener('click', ()=> {
        ShowResult();
        
    })

}


/* WHEN PRESSING SUBMIT TO GET DATA ABOUT THE CITY THE FUNCTION 'ShowResult' WILL BE RUN */
function ShowResult() {
    var table = document.getElementById('tbody');
    var name = document.getElementById("name-field").value;
    const url = `https://cvrapi.dk/api?search=${name}&country=dk`
    if (table.rows.length >= 1) {
        table.innerHTML = "";
    }
    fetch(url).then(data => data.json()).then(function (data) {
        for (let i = 0; i < data.productionunits.length; i++) {
            if (i % 2 == 0) {
                var row = table.insertRow(i);
                row.style.backgroundColor = "#ffffff";
            } else {
                var row = table.insertRow(i);
                row.style.backgroundColor = "#e8e8e8";
            }
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            // If i is equal to 0 then it will make a text bold and w
            if (i == 0) {
                cell1.innerHTML = "<b>"+data.name+"</b>";
                cell2.innerHTML = "<b>"+data.city+"</b>";
                cell3.innerHTML = "<b>"+data.address+"</b>";
                cell4.innerHTML = "<b>"+data.employees+"</b>";
                cell5.innerHTML = "<b>"+data.email+"</b>";
                cell6.innerHTML = "<b>"+data.vat+"</b>";
                cell7.innerHTML = "<b>"+data.phone+"</b>";
            } else {
                cell1.innerText = data.productionunits[i].name;
                cell2.innerText = data.productionunits[i].city;
                cell3.innerText = data.productionunits[i].address;
                cell4.innerText = data.productionunits[i].employees;
                cell5.innerText = data.productionunits[i].email;
                cell6.innerText = data.productionunits[i].pno;
                cell7.innerText = data.productionunits[i].phone;
            }
            
        }

    });

}
