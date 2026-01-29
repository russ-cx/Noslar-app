const API_BASE = "http://127.0.0.1:8000";

document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("outputBox");

  output.textContent = "Sending request...";

  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    output.textContent = data.reply;
  } catch (err) {
    output.textContent = "Error connecting to backend:\n" + err;
  }
});
