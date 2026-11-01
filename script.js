function goToRooms(type) {
    localStorage.setItem("hotelType", type);
    window.location.href = "rooms.html";
}

function calculate() {
    let price = 1000;
    let nights = document.getElementById("nights").value;

    let total = price * nights;

    document.getElementById("total").innerText =
        "Total Price: " + total + " EGP";
}