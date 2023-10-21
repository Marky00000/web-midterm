// Sample enrollee data structure
const enrollees = [];
let currentEditIndex = -1;
// Function to add a new enrollee
function addEnrollee() {
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;
    const course = document.getElementById("course").value;
    const schoolYear = document.getElementById("schoolYear").value;

    const enrollee = {
        firstName,
        middleName,
        lastName,
        age,
        gender,
        birthday,
        course,
        schoolYear,
    };

    enrollees.push(enrollee);
    displayEnrollees();
}

// Function to display enrollees in the table
function displayEnrollees() {
    const tableBody = document.querySelector("#enrollee-table tbody");
    tableBody.innerHTML = ""; // Clear existing table rows

    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.toLowerCase(); // Convert search query to lowercase for case-insensitive search

    for (const enrollee of enrollees) {
        const fullName = `${enrollee.firstName} ${enrollee.middleName} ${enrollee.lastName}`.toLowerCase();

        // Check if the search query matches any part of the enrollee's information
        if (fullName.includes(searchQuery)) {
            const row = tableBody.insertRow();
            row.insertCell().textContent = enrollee.firstName;
            row.insertCell().textContent = enrollee.middleName;
            row.insertCell().textContent = enrollee.lastName;
            row.insertCell().textContent = enrollee.age;
            row.insertCell().textContent = enrollee.gender;
            row.insertCell().textContent = enrollee.birthday;
            row.insertCell().textContent = enrollee.course;
            row.insertCell().textContent = enrollee.schoolYear;

            const actionsCell = row.insertCell();
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => editEnrollee(enrollee));
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteEnrollee(enrollee));
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        }
    }
}

// Event listener for the search input field
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", displayEnrollees);

// Initial display of enrollees
displayEnrollees();


// Function to edit an enrollee
function editEnrollee(enrollee, editButtonId) {
    const firstNameInput = document.getElementById("firstName");
    const middleNameInput = document.getElementById("middleName");
    const lastNameInput = document.getElementById("lastName");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const birthdayInput = document.getElementById("birthday");
    const courseInput = document.getElementById("course");
    const schoolYearInput = document.getElementById("schoolYear");

    // Find the selected enrollee in the enrollees array
    const index = enrollees.indexOf(enrollee);

    if (index !== -1) {
        // Set the form inputs with enrollee's data
        firstNameInput.value = enrollee.firstName;
        middleNameInput.value = enrollee.middleName;
        lastNameInput.value = enrollee.lastName;
        ageInput.value = enrollee.age;
        genderInput.value = enrollee.gender;
        birthdayInput.value = enrollee.birthday;
        courseInput.value = enrollee.course;
        schoolYearInput.value = enrollee.schoolYear;

        // Store the current edit index for future reference
        currentEditIndex = index;

        // Replace the "Submit" button with an "Update" button
        const submitButton = document.querySelector(".submit-btn");
        submitButton.textContent = "Update";
        submitButton.removeEventListener("click", addEnrollee);
        submitButton.addEventListener("click", updateEnrollee);
    }
}

// Function to update an enrollee
function updateEnrollee() {
    // Ensure the currentEditIndex is valid
    if (currentEditIndex >= 0 && currentEditIndex < enrollees.length) {
        // Get the updated values from the input fields
        const firstNameInput = document.getElementById("firstName").value;
        const middleNameInput = document.getElementById("middleName").value;
        const lastNameInput = document.getElementById("lastName").value;
        const ageInput = document.getElementById("age").value;
        const genderInput = document.getElementById("gender").value;
        const birthdayInput = document.getElementById("birthday").value;
        const courseInput = document.getElementById("course").value;
        const schoolYearInput = document.getElementById("schoolYear").value;

        // Update the selected enrollee with the new values
        enrollees[currentEditIndex].firstName = firstNameInput;
        enrollees[currentEditIndex].middleName = middleNameInput;
        enrollees[currentEditIndex].lastName = lastNameInput;
        enrollees[currentEditIndex].age = ageInput;
        enrollees[currentEditIndex].gender = genderInput;
        enrollees[currentEditIndex].birthday = birthdayInput;
        enrollees[currentEditIndex].course = courseInput;
        enrollees[currentEditIndex].schoolYear = schoolYearInput;

        // Reset the form and display the updated enrollees
        const submitButton = document.querySelector(".submit-btn");
        submitButton.textContent = "Submit";
        submitButton.addEventListener("click", addEnrollee);
        form.reset();
        displayEnrollees();

        // Reset the currentEditIndex to -1 after successful update
        currentEditIndex = -1;
    }
}


// Function to delete an enrollee
function deleteEnrollee(enrollee) {
    const index = enrollees.indexOf(enrollee);
    if (index > -1) {
        enrollees.splice(index, 1);
        displayEnrollees(); // Refresh the table
    }
}

// Event listener for the form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    addEnrollee();
    form.reset();
});
