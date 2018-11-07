const fs = require('fs-extra');
const path = require('path');
const { takeScreenshot } = require('./screenshot');

const htmlTemplate = fs.readFileSync(`${__dirname}/og.html`, 'utf-8');
const ogPath = `${__dirname}/../og`;

async function screenshot(html, key) {
  const ogKeyPath = `${ogPath}/${key}`;

  if (fs.existsSync(`${ogKeyPath}.png`)) {
    return path.resolve(`${ogKeyPath}.png`);
  }

  await fs.ensureDir(`${ogPath}`);
  await fs.writeFile(`${ogKeyPath}.html`, html);

  await takeScreenshot(`${ogKeyPath}.png`, {
    selector: '#og-container',
    url: `file:${path.resolve(`${ogKeyPath}.html`)}`,
  });

  return path.resolve(`${ogKeyPath}.png`);
}

module.exports = (app) => {
  app.use('/og-image-obcina.png/gen', async (req, res, next) => {
    try {
      const text = String((req.query && req.query.t) || '');
      const renderHTML = htmlTemplate
        .replace('{image}', 'og-image-obcina.png')
        .replace('{text}', text);
      const imagePath = await screenshot(renderHTML, `og-image-obcina-${text}`);
      res.sendFile(imagePath);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('og image gen error', e);
      next(e);
    }
  });
  app.use('/og-image-oseba.png/gen', async (req, res, next) => {
    try {
      const text = String((req.query && req.query.t) || '');
      const renderHTML = htmlTemplate
        .replace('{image}', 'og-image-oseba.png')
        .replace('{text}', text);
      const imagePath = await screenshot(renderHTML, `og-image-oseba-${text}`);
      res.sendFile(imagePath);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('og image gen error', e);
      next(e);
    }
  });
};
