function employeeList(names) {
    names.forEach(name => {
        const personalNum = name.length;
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    });
}
employeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
