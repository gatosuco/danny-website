const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value.trim();

        if (expression === "") return;

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            showError();
            return;
        }

        const result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            showError();
            return;
        }

        display.value = Number.isInteger(result) ? result : result.toFixed(2);
    } catch {
        showError();
    }
}

function showError() {
    display.value = "Error";
    setTimeout(clearDisplay, 1200);
}