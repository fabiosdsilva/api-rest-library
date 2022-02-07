import app from './app';

app.listen(process.env.PORT_SERVER, () => console.log(`Está rodando na porta ${process.env.PORT_SERVER}`));
