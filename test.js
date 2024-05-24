const studentData = require("./student-data.json");

const StudentWithID_1 = studentData.filter((student) => student.id === 1);

console.log(StudentWithID_1);
