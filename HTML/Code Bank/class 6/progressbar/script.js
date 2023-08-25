// You can use this script to update the progress dynamically.
// This example increments the progress value every 1 second.

const progressBar = document.querySelector(".upload");
let progressValue = progressBar.value;

function updateProgress() {
  progressValue += 5; // Increment by 5 for demonstration purposes

  if (progressValue <= progressBar.max) {
    progressBar.value = progressValue;
    progressBar.textContent = progressValue + "%";
  } else {
    clearInterval(progressInterval);
    progressBar.textContent = "Upload Complete!";
  }
}

const progressInterval = setInterval(updateProgress, 1000); // Update every 1 second
