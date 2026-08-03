// Welcome Bonus Chat - One Message Only
let welcomeMessageSent = false;
let bonusGiven = false;

function sendWelcomeMessage() {

  if (welcomeMessageSent) {
    alert("Umetumia ujumbe wako wa bure wa Welcome Bonus tayari.");
    return;
  }

  let input = document.getElementById("chatInput");
  let chatBox = document.getElementById("chatBox");

  let message = input.value.trim();

  if (message === "") {
    return;
  }

  // User message
  chatBox.innerHTML += `
    <div class="user-message">
      ${message}
    </div>
  `;

  input.value = "";

  welcomeMessageSent = true;

  // Disable sending again
  input.disabled = true;
  document.getElementById("sendBtn").disabled = true;

  // One reply only
  setTimeout(() => {

    chatBox.innerHTML += `
      <div class="bot-message">
        Hello 👋 Welcome to Velora Chat. Thank you for your message 😊
      </div>
    `;

    if (!bonusGiven) {
      bonusGiven = true;

      setTimeout(() => {
        alert("🎉 Hongera! Umepokea Welcome Bonus 25,000/=");
      }, 1000);
    }

  }, 1500);
}