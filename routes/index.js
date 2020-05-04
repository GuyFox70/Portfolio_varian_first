const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Main',
    sources: [
      {'src': '/images/compress/one.png', 'signUp': 'My Corporate Website', 'signDown': 'Personal project from Octobe, 2009'},
      {'src': '/images/compress/two.png', 'signUp': 'John Doe Design Portfolio', 'signDown': 'Personal project from Septemper, 2009'},
      {'src': '/images/compress/three.png', 'signUp': 'John Smith Design Portfolio', 'signDown': 'Personal project from August, 2009'},
      {'src': '/images/compress/four.png', 'signUp': 'Project Title', 'signDown': 'Project descrition and date'},
      {'src': '/images/compress/five.png', 'signUp': 'Project Title', 'signDown': 'Project descrition and date'},
      {'src': '/images/compress/six.png', 'signUp': 'Project Title', 'signDown': 'Project descrition and date'},
      {'src': '/images/compress/seven.png', 'signUp': 'Project Title', 'signDown': 'Project descrition and date'},
      {'src': '/images/compress/eight.png', 'signUp': 'Project Title', 'signDown': 'Project descrition and date'},
      {'src': '/images/compress/nine.png', 'signUp': 'Project Title', 'signDown': 'Project descrition and date'}
    ]
  });
});

module.exports = router;