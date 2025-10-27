const input = document.getElementById('ideaInput');
const btn = document.getElementById('saveBtn');
const list = document.getElementById('ideaList');

let ideas = JSON.parse(localStorage.getItem('mindSparkIdeas')) || [];

function renderIdeas() {
  list.innerHTML = '';
  ideas.forEach((idea, i) => {
    const li = document.createElement('li');
    li.textContent = idea.text + ' 🪄 [' + idea.mood + ']';
    list.appendChild(li);
  });
}

function detectMood(text) {
  if (text.match(/dream|goal|achieve/i)) return 'Motivational';
  if (text.match(/life|time|exist/i)) return 'Philosophical';
  return 'Light';
}

btn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  const mood = detectMood(text);
  ideas.push({ text, mood });
  localStorage.setItem('mindSparkIdeas', JSON.stringify(ideas));
  input.value = '';
  renderIdeas();
});

renderIdeas();
