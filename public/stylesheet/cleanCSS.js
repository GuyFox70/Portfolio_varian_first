const fs = require('fs');
const createError = require('http-errors');
const CleanCSS = require('clean-css');
const options = {level: 2};

const arrCss = [
  '/raw/fonts.css',
  '/raw/core.css',
  '/raw/blocks/top.css'
];


module.exports = () => {
  
  let fullText = '';
  const point = arrCss.length - 1;

  for (let i = 0; i < arrCss.length; i++) {

    fs.readFile(__dirname + arrCss[i], 'utf8', (err, data) => {
      
      if (err) console.log(err);
      
      fullText = fullText + data;

      if (i == point) {

        fs.writeFile(__dirname +'/style.css', new CleanCSS(options).minify(fullText).styles, 'utf8', (err, result) => {
          if (err) console.log(err);
        });

      }
    });

  }

}