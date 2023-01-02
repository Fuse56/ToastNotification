const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "No one else knows what they're doing either",
  "Don't do something permanently stupid because you are temporarily upset",
  "Use adversity as an opportunity",
  "Trust your instincts",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
