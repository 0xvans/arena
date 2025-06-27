const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("username").innerText = tg.initDataUnsafe.user.first_name;

async function checkBalance() {
  const res = await fetch("https://your-backend-url/api/balance"); // sesuaikan
  const json = await res.json();
  document.getElementById("balance").innerText = `AVAX: ${json.balance} AVAX`;
}
