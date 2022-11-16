let shells = document.querySelectorAll(".shells");
for (let shell of shells) {
  shell.style.top = Math.random() * 100 + "vh";
  shell.style.left = Math.random() * 100 + "vw";
}


