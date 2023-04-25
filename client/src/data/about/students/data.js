const russellStudents = [
    { firstName: "Lowri", lastName: "David", age: "17", grade: "11" },
    { firstName: "Macy", lastName: "Ware", age: "16", grade: "11" },
    { firstName: "Kadie", lastName: "Cordova", age: "17", grade: "11" },
    { firstName: "Priya", lastName: "Austin", age: "17", grade: "11" },
    { firstName: "Darren", lastName: "Li", age: "16", grade: "11" },
    { firstName: "Luke", lastName: "Wu", age: "16", grade: "11" },
    { firstName: "Kenneth", lastName: "Winter", age: "15", grade: "9" },
    { firstName: "Ariana", lastName: "Terrell", age: "15", grade: "9" },
    { firstName: "Simeon", lastName: "Richards", age: "15", grade: "9" },
    { firstName: "Jacques", lastName: "Pacheco", age: "14", grade: "9" },
    { firstName: "Bruno", lastName: "Bloggs", age: "15", grade: "9" }
    // {firstName: "", lastName: "", age: "", grade: ""}
]
const carpenterStudents = [
    { firstName: "Joel", lastName: "Connolly", age: "15", grade: "9" },
    { firstName: "Eztebe", lastName: "Haynes", age: "15", grade: "9" },
    { firstName: "Huey", lastName: "Harmon", age: "15", grade: "9" },
    { firstName: "Blaine", lastName: "Guerrero", age: "15", grade: "9" },
    { firstName: "Arlene", lastName: "Barrera", age: "15", grade: "9" }
    // {firstName: "", lastName: "", age: "", grade: ""}
]

// Sorting
russellStudents.sort((a, b) => a.firstName.localeCompare(b.firstName));
russellStudents.sort((a, b) => a.grade.localeCompare(b.grade));
carpenterStudents.sort((a, b) => a.firstName.localeCompare(b.firstName));
carpenterStudents.sort((a, b) => a.grade.localeCompare(b.grade));

export { russellStudents, carpenterStudents };