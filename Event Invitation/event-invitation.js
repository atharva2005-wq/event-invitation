const attendYes = document.getElementById("attendYes");
const attendNo = document.getElementById("attendNo");
const guestSection = document.getElementById("guestSection");
const form = document.getElementById("rsvpform");

// Show/hide guest section based on selection
attendYes.addEventListener("change", () => {
    guestSection.style.display = "block";
});

attendNo.addEventListener("change", () => {
    guestSection.style.display = "none";
});

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

if (attendYes.checked) {
    alert("Let's enjoy 🥳");
} else if (attendNo.checked) {
    alert("Thank you for your response 😊");
}

this.reset();
guestSection.style.display = "none"; // hide guest field after submission
});
