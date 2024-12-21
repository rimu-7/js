function getRandomString(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => String.fromCharCode(byte % 94 + 32)).join(''); // Generate printable ASCII characters
}

document.getElementById("generateButton").addEventListener("click", (e) => {
    const randomStrings = getRandomString(16);
    // Display the combined result in the result div
    document.getElementById("result").textContent = randomStrings;

    // Show the copy icon and countdown timer after generating the random string
    document.getElementById("copyIcon").style.display = "inline"; 
    document.getElementById("copyMessage").style.display = "none"; // Hide the copied message when generating a new string
    const countdownElement = document.getElementById("countdown");
    countdownElement.style.display = "inline"; // Show the countdown
    let timeLeft = 30; // 30 seconds countdown

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = `${timeLeft} s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("result").textContent = ''; // Clear the result
            document.getElementById("copyIcon").style.display = "none"; // Hide the copy icon
            countdownElement.style.display = "none"; // Hide the countdown
        }
    }, 1000); // 1000 milliseconds = 1 second
});

document.getElementById("copyIcon").addEventListener("click", () => {
    const resultText = document.getElementById("result").textContent;
    if (resultText) {
        navigator.clipboard.writeText(resultText).then(() => {
            const copyMessage = document.getElementById("copyMessage");
            copyMessage.style.display = "inline"; // Show the copied message
            setTimeout(() => {
                copyMessage.style.display = "none"; // Hide the message after 2 seconds
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }
});
