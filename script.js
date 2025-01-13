function classifyAudio() {
    const audioInput = document.getElementById("audioInput");
    const resultDiv = document.getElementById("classificationResult");
  
    if (audioInput.files.length === 0) {
      resultDiv.textContent = "Please upload an audio file!";
      resultDiv.style.color = "red";
      return;
    }
  
    resultDiv.textContent = "Processing...";
    resultDiv.style.color = "yellow";
  
    // Simulate classification result
    setTimeout(() => {
      const results = ["Real Audio", "Synthetic Audio", "Auto-Tuned Audio"];
      const randomResult = results[Math.floor(Math.random() * results.length)];
      resultDiv.textContent = `Result: ${randomResult}`;
      resultDiv.style.color = "lightgreen";
    }, 3000);
  }
  