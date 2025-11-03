const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html.html'));
});

// Quando clicar em "Encurtar"
app.post('/encurtar', (req, res) => {
  const { originalUrl } = req.body;

  // Gera um código aleatório pro link curto
  const shortCode = Math.random().toString(36).substring(2, 8);

  // Manda de volta em JSON
  res.json({ shortUrl: `https://gs-encurtador.onrender.com/${shortCode}` });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`GS ENCURTADOR rodando na porta ${PORT}`));

