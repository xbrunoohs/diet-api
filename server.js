const app = require('./App');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servido rodando na porta ${PORT}`);
});
