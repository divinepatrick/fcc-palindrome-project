document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value.trim();
    const resultDiv = document.getElementById("result");

    if (inputText.length === 0) {
        alert("Please input a value");
        return;
    }

    const sanitizedInputText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedText = sanitizedInputText.split("").reverse().join("");

    if (sanitizedInputText === reversedText) {
        resultDiv.textContent = inputText + " is a palindrome";
    } else {
        resultDiv.textContent = inputText + " is not a palindrome";
    }
});

