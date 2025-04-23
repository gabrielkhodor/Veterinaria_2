const express = require('express');
const app = express();

const clienteRoutes = require('./api/routes/clientesRoutes');
const animalRoutes = require('./api/routes/animaisRoutes');
const veterinarioRoutes = require('./api/routes/veterinariosRoutes');
const consultaRoutes = require('./api/routes/consultasRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('views engine', 'ejs');
app.set('views', './api/views');

// configurar diretório estático
app.use('static', express.static(__dirname + '/pulic'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));
 
app.use('/clientes', clienteRoutes);
app.use('/animais', animalRoutes);
app.use('/veterinarios', veterinarioRoutes);
app.use('/consultas', consultaRoutes);
 
const port = 3001;
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

module.exports = app;