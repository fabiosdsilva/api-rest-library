import morgan, { StreamOptions } from "morgan";

const stream = {
  write: (message) => console.log(message),
};

const skip = () => {
  const env = process.env.STAGE || 'development';
  return env !== 'development';
}

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip },
);

export default morganMiddleware;
