const API_BASE = "http://127.0.0.1:8000";

document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput").value;

  document.getElementById("outputBox").textContent =
    "You typed:\n\n" + input + "\n\n(Backend not connected yet)";
});
