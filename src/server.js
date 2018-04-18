const path = require('path');
const express = require('express');

module.exports = {
  app() {
    const app = express();
    app.use(express.static(path.join(__dirname, '../public')));
    app.get('*', (request, response) => {
      response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
    });

    return app;
  }
};
