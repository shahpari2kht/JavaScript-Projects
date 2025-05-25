// تمرین if/else : بررسی سن برای تعیین گروه سنی

let age = 21;

if (age < 0) {
    console.log("سن نامعتبر است.");
} else if (age < 13) {
    console.log("کودک");
} else if (age < 20) {
    console.log("نوجوان");
} else if (age < 40) {
    console.log("جوان");
} else if (age < 60) {
    console.log("میانسال");
} else {
    console.log("سالمند");
}

// تمرین منطقی دیگر: بررسی زوج یا فرد بودن عدد
let number = 17;
if (number % 2 === 0) {
    console.log(number + " عددی زوج است.");
} else {
    console.log(number + " عددی فرد است.");
}

