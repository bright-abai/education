let age = 18;
age += 100; // 118
age /= 2; // 59
age *= 3; // 177

if (age > 100) {
    console.log("Go")
}
else {
    console.log("Stop")
}

let bge = 100;
bge /= 5; // 20
bge += age; //197 20 + 177

if (age < bge) {
    if (bge > age) {
        console.log("1")
    }
    if (age > bge) {
        console.log("2")
    }
}


cge = 20;
cge = cge * cge * cge; // 8000


if (age < bge && age < cge) {
    console.log("Первый")
}
else if (bge < age && bge < cge) {
    console.log("Второй")
}
else {
    console.log("Третий")
}