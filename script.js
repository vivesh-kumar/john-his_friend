/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  // Function to print developers using Map
  function PrintDeveloperbyMap() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    const developer = arr.map((employee) => {
      if (employee.profession === "developer") {
        outputDiv.innerHTML += `<p>${employee.name} is a ${employee.profession}</p>`;
      }
    });
  }
  
  // Function to print developers using ForEach
  function PrintDeveloperbyForEach() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        outputDiv.innerHTML += `<p>${employee.name} is a ${employee.profession}</p>`;
      }
    });
  }
  
  // Function to add new employee data
  function addData() {
    const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmp);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    outputDiv.innerHTML += `<p>New Employee added: ${newEmp.name}</p>`;
  }
  
  // Function to remove admin from the list
  function removeAdmin() {
    const updatedArr = arr.filter((employee) => employee.profession !== "admin");
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    outputDiv.innerHTML += "<p>Updated Employee List (No Admin):</p>";
    updatedArr.forEach((employee) => {
      outputDiv.innerHTML += `<p>${employee.name} is a ${employee.profession}</p>`;
    });
  }
  
  // Function to concatenate two arrays
  function concatenateArray() {
    const newArr = [
      { id: 4, name: "david", age: "25", profession: "developer" },
      { id: 5, name: "ella", age: "22", profession: "manager" },
      { id: 6, name: "frank", age: "28", profession: "developer" }
    ];
  
    const combinedArr = arr.concat(newArr);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output
    outputDiv.innerHTML += "<p>Combined Employee List:</p>";
    combinedArr.forEach((employee) => {
      outputDiv.innerHTML += `<p>${employee.name} is a ${employee.profession}</p>`;
    });
  }

  