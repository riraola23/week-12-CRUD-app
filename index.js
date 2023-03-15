var selectedRow = null


//CLEAR TEXT FIELDS

function clearTextFields(){
    document.querySelector("#carModel").value = ""
    document.querySelector("#location").value = ""
    document.querySelector("#chargingSpeed").value = ""
}

//DELETE DATA
//e.target returns HTML element that caused an event
    
document.querySelector("#location-list").addEventListener("click", (e) => { 
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
    }
});

//ADD DATA
document.querySelector("#charging-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //Get values from the from
    var carModel = document.querySelector("#carModel").value;
    var location = document.querySelector("#location").value;
    var chargingSpeed = document.querySelector("#chargingSpeed").value;

    if(carModel == "" || location == "" || chargingSpeed == "") {
        alert("FIll ALL THE BLANKS!!!")

    }
    else{
        if(selectedRow == null){
           var list = document.querySelector("#location-list");
           var row = document.createElement("tr");
           row.innerHTML= `
           <td>${carModel}</td>
           <td>${location}</td>
           <td>${chargingSpeed}</td>
           <td>
           <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
           `;
           list.appendChild(row);
           selectedRow = null;
        }
        else{ 
            //access specific child of a row
            selectedRow.children[0].textContent = carModel;
            selectedRow.children[1].textContent = location;
            selectedRow.children[2].textContent = chargingSpeed;
            selectedRow = null; 
        }

        clearTextFields();
    }

});

//EDIT DATE
//text.content returns the text content of a specific node

document.querySelector("#location-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#carModel").value = selectedRow.children[0].textContent;
        document.querySelector("#location").value = selectedRow.children[1].textContent;
        document.querySelector("#chargingSpeed").value = selectedRow.children[2].textContent;
    }
})