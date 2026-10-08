
// الحصول على شاشة الآلة الحاسبة
let display = document.getElementById("display");


// إضافة رقم أو عملية إلى الشاشة
function addToDisplay(value) {

    display.value += value;

}


// مسح الشاشة
function clearDisplay() {

    display.value = "";

}


// حذف آخر حرف
function deleteLast() {

    display.value = display.value.slice(0, -1);

}


// تنفيذ العملية الحسابية
function calculate() {

    try {

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

    }

}

