// Online users counter
let users = 2038;

setInterval(() => {
  users += Math.floor(Math.random() * 3);
  document.querySelector(".online").innerHTML = users + "+";
}, 5000);


// Notifications
const notifications = [
"🇺🇸 Emily started learning Kiswahili.",
"🇬🇧 James is online now.",
"🇩🇪 Anna booked a 40-minute session.",
"🇫🇷 Pierre joined the platform.",
"🇨🇦 Sophia is looking for a tutor.",
"🇦🇺 Liam started chatting.",
"🇯🇵 Yuki is waiting for a teacher.",
"🇳🇱 Noah booked a 90-minute session."
];

setInterval(() => {
  alert(notifications[Math.floor(Math.random() * notifications.length)]);
}, 45000);


// Start Chat
function register() {
  let go = confirm(
    "JISAJILI ILI UENDELE KUCHATI NA UPATE PESA.\n\nBonyeza OK kuendelea."
  );

  if (go) {
    window.location.href =
      "https://kozenasite.site/register?ref=Anselemi95";
  }
}