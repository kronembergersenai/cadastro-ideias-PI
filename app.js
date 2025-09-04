const form = document.getElementById('ideaForm');
const msg  = document.getElementById('msg');

// Substitua pela URL do seu Web App do Apps Script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwt8LQau-LqyOdrifB11bZYW0AH0_56hTv6o6k7O6rWoNy4iRA8GbUHYTGwA_dDtGDA/exec';

form.addEventListener('submit', async e => {
  e.preventDefault();
  msg.textContent = '';

  const data = {
    titulo:     form.titulo.value.trim(),
    aluno:      form.aluno.value.trim(),
    descricao:  form.descricao.value.trim()
  };

  try {
    const resp = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode:   'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    // no-cors não permite ler body, mas simplifica o deploy
    msg.textContent = '✅ Ideia enviada com sucesso!';
    form.reset();
  } catch (err) {
    console.error(err);
    msg.textContent = '❌ Erro ao enviar. Tente novamente.';
    msg.style.color = '#b91c1c';
  }
});



