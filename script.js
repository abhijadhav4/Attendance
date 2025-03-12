const students = [
    { rollNumber: 1, name: "abhijit", present: false },
    { rollNumber: 2, name: "ajay", present: false },
    { rollNumber: 3, name: "amarsinh", present: false },
    { rollNumber: 4, name: "amey", present: false },
    { rollNumber: 5, name: "animesh", present: false },
    { rollNumber: 6, name: "anushka", present: false },
    { rollNumber: 7, name: "ayush", present: false },
    { rollNumber: 8, name: "chaitanya", present: false },
    { rollNumber: 9, name: "dhruv", present: false },
    { rollNumber: 10, name: "kashif", present: false },
    { rollNumber: 11, name: "mayuri", present: false },
    { rollNumber: 12, name: "nilesh", present: false },
    { rollNumber: 13, name: "onkar", present: false },
    { rollNumber: 14, name: "pallav", present: false },
    { rollNumber: 15, name: "parnam", present: false },
    { rollNumber: 16, name: "pratiksha", present: false },
    { rollNumber: 17, name: "rajshekhar", present: false },
    { rollNumber: 18, name: "saiprasad", present: false },
    { rollNumber: 19, name: "sankalp", present: false },
    { rollNumber: 20, name: "rayyan", present: false },
    { rollNumber: 21, name: "taj", present: false },
    { rollNumber: 22, name: "shriya", present: false },
    { rollNumber: 23, name: "sohan", present: false },
    { rollNumber: 24, name: "shipne", present: false },
    { rollNumber: 25, name: "somesh", present: false },
    { rollNumber: 26, name: "tejas", present: false },
    { rollNumber: 27, name: "vaibhav", present: false },
    { rollNumber: 28, name: "vaishali", present: false },
    { rollNumber: 29, name: "vallabh", present: false },
    { rollNumber: 30, name: "vishakha", present: false },
    { rollNumber: 31, name: "waman", present: false },
    { rollNumber: 32, name: "zaid", present: false },
    { rollNumber: 34, name: "sayali", present: false },
    { rollNumber: 35, name: "gauri", present: false },
    
];


function markAttendance() {
    const input = document.getElementById("studentInput").value.trim().toLowerCase();
    let found = false;

    students.forEach((student) => {
        if (
            student.rollNumber.toString() === input ||
            student.name.toLowerCase() === input
        ) {
            student.present = true;
            found = true;
            alert(`Attendance marked for ${student.name} (Roll No: ${student.rollNumber})`);
        }
    });

    if (!found) {
        alert("Error: Student not found");
    }

    document.getElementById("studentInput").value = "";
}

function showAbsentStudents() {
    const absentStudents = students.filter(student => !student.present);
    let result = "<h3>Absent Students:</h3>";

    absentStudents.forEach(student => {
        result += `<p>Roll No: ${student.rollNumber}, Name: ${student.name}</p>`;
    });

    document.getElementById("resultContainer").innerHTML = result;
}

function showPresentColumn() {
    let result = "<h3>Present Column:</h3>";
    students.forEach(student => {
        result += `<p>${student.present ? 1 : 0}</p>`;
    });

    document.getElementById("resultContainer").innerHTML = result;
}

function clearResults() {
    document.getElementById("resultContainer").innerHTML = "";
}

function refreshPage() {
    window.location.reload();
}

