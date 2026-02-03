// ================================
// NoslarAI Web Console — Frontend
// ================================

// CHANGE THIS to your backend machine (ByteKing or Office PC)
const API_BASE = "http://127.0.0.1:8000";  
// Example for office PC: "http://192.168.1.50:8000"
// Example for public: "http://YOUR_PUBLIC_IP:8000"

document.getElementById("sendBtn").addEventListener("click", async () => {
    const input = document.getElementById("userInput").value.trim();
    const operation = document.getElementById("operation").value;
    const outputBox = document.getElementById("outputBox");

    if (!input && operation === "auto") {
        outputBox.textContent = "Please enter text or choose a specific operation.";
        return;
    }

    // Show loading state
    outputBox.textContent = "Processing...\n";

    // Build payload
    const payload = {
        text: input,
        override_intent: operation === "auto" ? null : operation
    };

    try {
        const response = await fetch(`${API_BASE}/api/run`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            outputBox.textContent = `Backend error: ${response.status}`;
            return;
        }

        const data = await response.json();

        // Pretty print JSON
        outputBox.textContent = JSON.stringify(data, null, 4);

    } catch (err) {
        outputBox.textContent = "Error connecting to backend:\n" + err;
    }
});
