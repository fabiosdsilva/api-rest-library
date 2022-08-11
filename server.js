import app from './app';

const port = process.env.PORT_SERVER || 3000;

app.listen(port, () => console.log(`Started in http://localhost:${port}`));
