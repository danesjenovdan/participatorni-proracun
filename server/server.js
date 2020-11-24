const fs = require('fs-extra');
const path = require('path');
const { takeScreenshot } = require('./screenshot');

const ogPath = `${__dirname}/../og`;

async function screenshot(url, key) {
  const ogKeyPath = `${ogPath}/${key}`;

  if (fs.existsSync(`${ogKeyPath}.png`)) {
    return path.resolve(`${ogKeyPath}.png`);
  }

  await fs.ensureDir(`${ogPath}`);

  await takeScreenshot(`${ogKeyPath}.png`, {
    selector: '#og-image-border',
    url,
  });

  return path.resolve(`${ogKeyPath}.png`);
}

module.exports = (app) => {
  app.use('/og-image-new.png/gen', async (req, res, next) => {
    try {
      const text = String((req.query && req.query.t) || '');
      const url =
        process.env.NODE_ENV === 'production'
          ? `https://danesjenovdan.si/participativni-proracun/og-image/${text}`
          : `http://localhost:8801/og-image/${text}`;
      const imagePath = await screenshot(url, `og-image-new-${text}`);
      res.sendFile(imagePath);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('og image gen error', e);
      next(e);
    }
  });
};
