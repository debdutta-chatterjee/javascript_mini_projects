const clock = document.getElementById('clock');

setInterval(function () {
  clock.innerHTML = `<span>${new Date().toLocaleTimeString()}</span>`;
}, 1000);
