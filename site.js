const wipe = document.getElementById('wipe');
const comparison = document.getElementById('comparison');
const reveal = document.getElementById('reveal');
wipe.addEventListener('input', () => {
  const percent = Math.min(100, Math.max(0, Number(wipe.value)));
  comparison.style.setProperty('--position', `${percent}%`);
  reveal.textContent = `${percent}% current`;
});
