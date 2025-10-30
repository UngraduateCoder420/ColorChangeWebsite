// Simple JS concept: Random background color generator
document.getElementById("colorButton").addEventListener("click", function() {
  const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff", "#ffc6ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
