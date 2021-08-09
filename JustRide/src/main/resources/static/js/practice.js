// window.addEventListener('load', function(e) {
//     document.getElementById('totalCreations').value = 0; 
//     document.getElementById('totalCreations').innerHTML = document.getElementById('totalCreations').value; 

//     document.getElementById('totalUpdates').value = 0; 
//     document.getElementById('totalUpdates').innerHTML = document.getElementById('totalUpdates').value; 

//     document.getElementById('totalDeletions').value = 0; 
//     document.getElementById('totalDeletions').innerHTML = document.getElementById('totalDeletions').value; 
 

// console.log('script.js loaded'); 
// init(); 
// }); 

// function init() {
//     loadMotorcycles(); 
// }

// function loadMotorcycles() {
//     fetch('api/motorcycles').then (
//         function (motorcylces){
//         let table = document.getElementById('motorcycleListTable'); 
//         for (const motorcycle of motorcycles) {
//             let tr = document.createElement('tr'); 
//             let td = document.createElement('td'); 
//             td.textContent = motorcycle.name; 
//             tr.appendChild(td); 
//             tr.addEventListener('click', function() {
//                 displaySingleMotorcycle(motorcycle)
//             });
//             table.appendChild(tr); 
//         }
//     });
// }
// function displayMotorcycles(motorcycles) {
//     let table = document.getElementById('motorcycleListTable'); 
//     for (const motorcycle of motorcycles) {
//         let tr = document.createElement('tr'); 
//         let td = document.createElement('td'); 
//         td.textContent = motorcycle.name; 
//         tr.appendChild(td); 
//         tr.addEventListener('click', function() {
//             displaySingleMotorcycle(motorcycle)
//         });
//         table.appendChild(tr); 
//     }
// }

// function submitForm() {
// 	var requestBody = {
// 		 "name": document.getElementById('name').value,  // $("#name").val()
//         "year": parseInt(document.getElementById('year').value), // parseInt($("#year").val())
//         "make": document.getElementById('make').value,
//         "model": document.getElementById('model').value,
//         "weightInPounds": parseInt(document.getElementById('weightInPounds').value),
//         "loadCapacityInPounds": parseInt(document.getElementById('loadCapacityInPounds').value),
//         "fuelCapacityInGallons": parseFloat(document.getElementById('fuelCapacityInGallons').value),
//         "fuelConsumptionInMpg": parseFloat(document.getElementById('fuelConsumptionInMpg').value),
//         "rangeInMiles": parseInt(document.getElementById('rangeInMiles').value),
//         "tirePressureInPsi": document.getElementById('tirePressureInPsi').value,
//         "routeName": document.getElementById('routeName').value,
//         "routeCountry": document.getElementById('routeCountry').value,
//         "routeRegion": document.getElementById('routeRegion').value,
//         "routeLengthInMiles": parseInt(document.getElementById('routeLengthInMiles').value),
//         "routeComments": document.getElementById('routeComments').value,
// 	}
//     $.post ('api/motorcycle', requestBody,  ((response)=>{
//         let motorcycle = JSON.parse(xhr.responseText); 
//         console.log(motorcycle); 
//         let table = document.getElementById('motorcycleListTable'); 
//         table.innerHTML = ''; 
//         loadMotorcycles(); 
//         document.getElementById('totalCreations').value++; 
//         document.getElementById('totalCreations').innerHTML = document.getElementById('totalCreations').value; 
//     }));

//     document.getElementById('submit').reset();                   // resets form after creating motorcycle
//     let xhr = new XMLHttpRequest(); 
//     xhr.open('POST', 'api/motorcycle'); 
//     xhr.setRequestHeader("Content-Type", "application/json"); 
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let motorcycle = JSON.parse(xhr.responseText); 
//                 console.log(motorcycle); 
//                 let table = document.getElementById('motorcycleListTable'); 
//                 table.innerHTML = ''; 
//                 loadMotorcycles(); 
//                 document.getElementById('totalCreations').value++; 
//                 document.getElementById('totalCreations').innerHTML = document.getElementById('totalCreations').value; 

//             }
//             else {
//                 console.log(xhr.responseText); 
//             }
//         }
//     }; 
//     xhr.send(JSON.stringify(requestBody)); 
// }

// function displaySingleMotorcycle(motorcycle) {
//     let singleMotorcycle = document.getElementById('singleMotorcycle'); 
//     singleMotorcycle.innerHTML = "";

//     let span = document.createElement('div');
//     span.textContent = motorcycle.name; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.year; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.make; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.model; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.weightInPounds; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.loadCapacityInPounds; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.fuelCapacityInGallons; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.fuelConsumptionInMpg; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.rangeInMiles; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.tirePressureInPsi; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.routeName; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.routeCountry; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.routeRegion; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.routeLengthInMiles; 
//     singleMotorcycle.appendChild(span); 

//     span = document.createElement('div');
//     span.textContent = motorcycle.routeComments; 
//     singleMotorcycle.appendChild(span); 

//     let updateButton = document.createElement('button');
//     updateButton.innerHTML = 'Update Motorcycle'; 
//     updateButton.addEventListener('click', function() {
//         fillInForm(motorcycle); 
//     });
//     singleMotorcycle.appendChild(updateButton); 
//     let deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete Motorcycle'; 
//     deleteButton.addEventListener('click', function() {
//         deleteMotorcycle(motorcycle.id); 
//     });
//     singleMotorcycle.appendChild(deleteButton); 
// }

// function fillInForm(motorcycle) {
//     document.getElementById('id').value = motorcycle.id;
//     document.getElementById('name').value = motorcycle.name; 
//     document.getElementById('year').value = motorcycle.year; 
//     document.getElementById('make').value = motorcycle.make; 
//     document.getElementById('model').value = motorcycle.model; 
//     document.getElementById('weightInPounds').value = motorcycle.weightInPounds; 
//     document.getElementById('loadCapacityInPounds').value = motorcycle.loadCapacityInPounds; 
//     document.getElementById('fuelCapacityInGallons').value = motorcycle.fuelCapacityInGallons; 
//     document.getElementById('fuelConsumptionInMpg').value = motorcycle.fuelConsumptionInMpg; 
//     document.getElementById('rangeInMiles').value = motorcycle.rangeInMiles; 
//     document.getElementById('tirePressureInPsi').value = motorcycle.tirePressureInPsi; 
//     document.getElementById('routeName').value = motorcycle.routeName; 
//     document.getElementById('routeCountry').value = motorcycle.routeCountry; 
//     document.getElementById('routeRegion').value = motorcycle.routeRegion; 
//     document.getElementById('routeLengthInMiles').value = motorcycle.routeLengthInMiles; 
//     document.getElementById('routeComments').value = motorcycle.routeComments; 
//     document.getElementById('submitF').hidden = true; 
//     document.getElementById('update').hidden = false;
// }

// function updateMotorcycle() {
//     var requestBody = {
//         "id": parseInt(document.getElementById('id').value),
//         "name": document.getElementById('name').value,
//        "year": parseInt(document.getElementById('year').value),
//        "make": document.getElementById('make').value,
//        "model": document.getElementById('model').value,
//        "weightInPounds": parseInt(document.getElementById('weightInPounds').value),
//        "loadCapacityInPounds": parseInt(document.getElementById('loadCapacityInPounds').value),
//        "fuelCapacityInGallons": parseFloat(document.getElementById('fuelCapacityInGallons').value),
//        "fuelConsumptionInMpg": parseFloat(document.getElementById('fuelConsumptionInMpg').value),
//        "rangeInMiles": parseInt(document.getElementById('rangeInMiles').value),
//        "tirePressureInPsi": document.getElementById('tirePressureInPsi').value,
//        "routeName": document.getElementById('routeName').value,
//        "routeCountry": document.getElementById('routeCountry').value,
//        "routeRegion": document.getElementById('routeRegion').value,
//        "routeLengthInMiles": parseInt(document.getElementById('routeLengthInMiles').value),
//        "routeComments": document.getElementById('routeComments').value,
      
//    }
//    document.getElementById('submit').reset();             
//    let xhr = new XMLHttpRequest(); 
//    xhr.open('PUT', 'api/motorcycle'); 
//    xhr.setRequestHeader("Content-Type", "application/json"); 
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4) {
//            if (xhr.status === 200) {
//                let motorcycle = JSON.parse(xhr.responseText); 
//                console.log(motorcycle); 
//                let table = document.getElementById('motorcycleListTable'); 
//                table.innerHTML = ''; 
//                let singleMotorcycle = document.getElementById('singleMotorcycle'); 
//                singleMotorcycle.innerHTML = "";
//                document.getElementById('submitF').hidden = false; 
//                document.getElementById('update').hidden = true;
//                loadMotorcycles(); 
//                document.getElementById('totalUpdates').value++; 
//                document.getElementById('totalUpdates').innerHTML = document.getElementById('totalUpdates').value; 


//            }
//            else {
//                console.log(xhr.responseText); 
//            }
//        }
//    }; 
//    xhr.send(JSON.stringify(requestBody)); 
// }

// function deleteMotorcycle(id) {
//     let xhr = new XMLHttpRequest(); 
//     xhr.open('DELETE', 'api/motorcycle/' + id); 
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 204) {
//                 let table = document.getElementById('motorcycleListTable'); 
//                 table.innerHTML = ''; 
//                 let singleMotorcycle = document.getElementById('singleMotorcycle'); 
//                 singleMotorcycle.innerHTML = "";
//                 loadMotorcycles(); 
//                 document.getElementById('totalDeletions').value++; 
//                 document.getElementById('totalDeletions').innerHTML = document.getElementById('totalDeletions').value; 


//             }
//         }
//     }; 
//     xhr.send(); 
// }





