function startChat() {
  const userInput = prompt("Masukkan mesej anda:");

  if (!userInput) return;

  fetch('https://flask-production-0385.up.railway.app/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userInput })
  })
  .then(response => response.json())
  .then(data => {
    alert("Jawapan AI: " + data.response);
  })
  .catch(error => {
    alert("Ralat sambungan: " + error.message);
  });
}
