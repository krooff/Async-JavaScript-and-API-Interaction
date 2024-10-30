//Task 1: Countdown Timer Using setInterval//
function startCountdown(duration) {
    let timeRemaining = duration;
    const timerDisplay = document.getElementById('timer-display');
  
    const interval = setInterval(() => {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        alert('Time’s up!');
      }
      timeRemaining--;
    }, 1000);
  }
  
  // Example usage: Start a 1-minute timer (60 seconds)
  startCountdown(60);

//Task 2: Delayed Notification Using setTimeout//
function showNotification(message, delay) {
    setTimeout(() => {
      alert(message);
    }, delay);
  }
  
  // Example: Show notification after 3 seconds
  showNotification('This is a delayed notification.', 3000);

//Task 3: Repeat Notification Using setInterval//
let notificationInterval;

function startNotifications(message, interval) {
  notificationInterval = setInterval(() => {
    alert(message);
  }, interval);
}

function stopNotifications() {
  clearInterval(notificationInterval);
}

// Example: Start notifications every 5 seconds
startNotifications('Reminder: Take a break!', 5000);

// Add a button to stop notifications
document.getElementById('stop-btn').addEventListener('click', stopNotifications);
