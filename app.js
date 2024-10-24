function checkNumber() {
    // Get the input value
    let number = parseFloat(document.getElementById('numberInput').value);

    // Check if the number is positive, negative, or zero
    if (number > 0) {
        console.log("The number is positive.");

        let output = document.getElementById('output')
        output.textContent = "Positive!!"
        output.style.color = "lightgreen"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(9, 253, 1, 0.74), 0 6px 20px rgba(59, 247, 21, 0.884)"

    } else if (number < 0) {
        console.log("The number is negative.");

        let output = document.getElementById('output')
        output.textContent = "Negative!!"
        output.style.color = "red"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(243, 1, 1, 0.973), 0 6px 20px rgba(255, 0, 0, 0.692)"

    } else {
        console.log("The number is zero.");

        let output = document.getElementById('output')
        output.textContent = "Zero!!"
        output.style.color = "yellow"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(235, 252, 3, 0.911), 0 6px 20px rgb(244, 248, 4)"

    }
}

function reset() {
    document.getElementById('numberInput').value = ''
    document.getElementById('output').textContent = ''

    let box = document.querySelector(".box")
    box.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.6), 0 6px 20px rgba(255, 255, 255, 0.4)"
}

