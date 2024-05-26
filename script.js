// script.js
document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const result = document.getElementById('result');
    if (age >= 0) {
        result.textContent = `You are ${age} years old.`;
    } else {
        result.textContent = 'Invalid date of birth.';
    }
});
