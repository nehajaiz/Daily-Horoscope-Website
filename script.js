// THEME TOGGLE
const themeBtn = document.getElementById("theme-toggle");
themeBtn.onclick = () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  themeBtn.innerText =
    document.body.classList.contains("dark-theme")
      ? "Switch to Light Theme"
      : "Switch to Dark Theme";
};

// CLOCK
setInterval(() => {
  const now = new Date();
  document.getElementById("current-time").innerText =
    now.toLocaleTimeString();

  const planets = ["Sun","Moon","Mars","Mercury","Venus","Jupiter","Saturn"];
  document.getElementById("dominant-planet").innerText =
    planets[now.getSeconds() % planets.length];
}, 1000);

// MOOD SLIDER
const moodSlider = document.getElementById("mood-slider");
const moodValue = document.getElementById("mood-value");
moodSlider.oninput = () => moodValue.innerText = moodSlider.value;

// HOROSCOPE DATA
const data = {
  Aries: "Energy is high today. Take action.",
  Taurus: "Stability brings success.",
  Gemini: "Communication opens doors.",
  Cancer: "Trust your emotions.",
  Leo: "Confidence attracts rewards.",
  Virgo: "Focus on details.",
  Libra: "Balance is key.",
  Scorpio: "Transformation ahead.",
  Sagittarius: "Adventure awaits.",
  Capricorn: "Hard work pays off.",
  Aquarius: "Innovation shines.",
  Pisces: "Intuition guides you."
};

// GENERATE
document.getElementById("generate").onclick = () => {
  const zodiac = document.getElementById("zodiac-select").value;
  if (!zodiac) return alert("Select zodiac 🌙");

  document.getElementById("horoscope").style.display = "block";
  document.getElementById("title").innerText = zodiac + " Horoscope";
  document.getElementById("text").innerText = data[zodiac];

  const energy = Math.floor(Math.random() * 100);
  document.getElementById("energy-fill").style.width = energy + "%";
  document.getElementById("energy-percent").innerText = energy + "%";

  document.getElementById("affirmation").innerText =
    "Everything is aligning in your favor ✨";
};

// VOICE
document.getElementById("voice").onclick = () => {
  speechSynthesis.speak(
    new SpeechSynthesisUtterance(
      document.getElementById("text").innerText
    )
  );
};

// SAVE
document.getElementById("save").onclick = () => {
  localStorage.setItem("horoscope", document.getElementById("text").innerText);
  alert("Saved ⭐");
};
