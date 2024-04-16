// fill in javascript code here

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const employeeId = document.getElementById("employeeID").value;
        const department = document.getElementById("department").value;
        const experience = parseInt(document.getElementById("exp").value);
        const email = document.getElementById("email").value;
        const mobileNumber = document.getElementById("mbl").value;
        const role = getRole(experience);

        const newRow = `
            <tr>
                <td>${name}</td>
                <td>${employeeId}</td>
                <td>${department}</td>
                <td>${experience}</td>
                <td>${email}</td>
                <td>${mobileNumber}</td>
                <td>${role}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;

        tableBody.insertAdjacentHTML("beforeend", newRow);
        form.reset();
    });

    tableBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            const row = event.target.closest("tr");
            row.remove();
        }
    });

    function getRole(experience) {
        if (experience > 5) {
            return "Senior";
        } else if (experience >= 2 && experience <= 5) {
            return "Junior";
        } else {
            return "Fresher";
        }
    }

    // Bonus: Filter functionality
    const departmentFilter = document.getElementById("department");
    departmentFilter.addEventListener("change", function () {
        const selectedDepartment = departmentFilter.value;
        const rows = tableBody.querySelectorAll("tr");

        rows.forEach(row => {
            const departmentCell = row.querySelector("td:nth-child(3)");
            if (selectedDepartment === "" || departmentCell.textContent === selectedDepartment) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});
