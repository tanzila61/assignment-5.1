let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Increase heart counter
function increaseHeart() {
  heartCount++;
  document.getElementById("heartCount").innerText = heartCount;
}

// Copy number
function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert("Copied: " + number);
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  });
}

// Call service (costs 20 coins)
function callService(name, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }
  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  const now = new Date().toLocaleTimeString();
  alert('Calling ${name} at ${number}');

  const li = document.createElement("li");
  li.textContent = '${name} - ${number} (${now})';
  document.getElementById("historyList").appendChild(li);
}

// Clear history
function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}