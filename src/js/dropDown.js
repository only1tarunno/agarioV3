// Toggle dropdown function
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden'); // Toggle hidden class to show/hide
}

// Close the dropdown if clicking outside of it
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    const profileSection = document.getElementById('profileSection');

    // Check if the click is outside of both the dropdown and the profile section
    if (!dropdown.contains(event.target) && !profileSection.contains(event.target)) {
        dropdown.classList.add('hidden'); // Hide dropdown
    }
});
