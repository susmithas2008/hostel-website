// Show alert when Enquire button is clicked
function enquire(roomName) {
  alert("Thank you for your interest in " + roomName + "!\nWe will contact you soon.");
}

// Contact form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false; // stop form submission
  }

  alert("Message sent successfully!");
  return false; // prevent page refresh
}
function showRoom(type) {
  const details = document.getElementById("room-details");

  if (type === "single") {
    details.innerHTML = `
      <img src="images/single.jpg" alt="Single Room" class="room-img">

      <h2>Single Sharing</h2>
      <p class="price">₹6000 / month</p>

      <ul>
        <li>Bed</li>
        <li>WiFi</li>
        <li>Electricity</li>
        <li>Water</li>
        <li>Food: Not Included</li>
      </ul>

      <p><strong>Deposit:</strong> ₹2000 (Refundable)</p>

      <button class="book-btn">Book Now</button>
    `;
  }

  if (type === "double") {
    details.innerHTML = `
      <img src="images/double.jpg" alt="Double Room" class="room-img">

      <h2>Double Sharing</h2>
      <p class="price">₹4000 / month</p>

      <ul>
        <li>Bed</li>
        <li>WiFi</li>
        <li>Electricity</li>
        <li>Water</li>
        <li>Food: Not Included</li>
      </ul>

      <p><strong>Deposit:</strong> ₹2000 (Refundable)</p>

      <button class="book-btn">Book Now</button>
    `;
  }

  if (type === "triple") {
    details.innerHTML = `
      <img src="images/triple.jpg" alt="Triple Room" class="room-img">

      <h2>Triple Sharing</h2>
      <p class="price">₹2000 / month</p>

      <ul>
        <li>Bed</li>
        <li>WiFi</li>
        <li>Electricity</li>
        <li>Water</li>
        <li>Food: Not Included</li>
      </ul>

      <p><strong>Deposit:</strong> ₹2000 (Refundable)</p>

      <button class="book-btn">Book Now</button>
    `;
  }
}
