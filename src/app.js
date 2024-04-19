const http = require('http');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const compression = require('compression');

const { config } = require('./common');
const { setRouter } = require('./routes/api');
// const { replaceErrors } = require('./common/utils');

// Global Error Handler
// const { globalErrorHandler } = require('./utils/response');

process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection Details::${err}`);
});

// process.on('uncaughtException', (err) => {
// console.error(`Uncaught Exception Details::${JSON.stringify(err, replaceErrors)}`);
// });

const app = express();
app.server = http.createServer(app);

app.use(
  morgan(
    ':method :url :remote-addr :status - :response-time ms [:date[clf]] HTTP/:http-version :user-agent :body',
  ),
);
morgan.token('body', (req) => (req.body ? JSON.stringify(req.body) : ''));

// parse application/json
app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.disable('x-powered-by');

// cors
app.use(cors());

setRouter(app);

// Added Global Error handler as middleware
// app.use((err, req, res, next) => globalErrorHandler(err, req, res, next));

app.server.listen(config.port, () => {
  console.info(`Started server on => http://localhost:${app.server.address().port}`);
});

module.exports = { app };
