// Modal Control for Booking Form
function openBookingModal(carType) {
    document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking Successful!');
    closeModal();
});
