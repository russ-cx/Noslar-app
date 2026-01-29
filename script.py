const API_BASE = "http://172.56.24.79:8000";

document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput").value;

  document.getElementById("outputBox").textContent =
    "You typed:\n\n" + input + "\n\n(Backend not connected yet)";
});
