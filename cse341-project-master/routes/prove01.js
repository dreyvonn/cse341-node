const express = require('express');
const router = express.Router();

// console.log('in my prove01');

router.use('/message',(req, res, next) => {
    console.log('in message function');

    res.render('pages/p01out', { 
        title: 'Prove 01 Assignment', 
        path: '/p01out',
    });
});

router.use('/', (req, res, next) => {
    console.log('in the function');
    // const body = [];
    // req.on('data', (chunk) => {
    //     body.push(chunk);
    // });
    
    //     //event listener, when request ends
    // req.on('end', () => {
    //     const parsedBody = Buffer.concat(body).toString();
    //     const message = parsedBody.split('=')[1];
    //     console.log(message);
    //     // fs.writeFile('message.txt', message, (err) => {
    //     //         //response code
    //     //     res.statusCode = 302
    //     //     res.setHeader('Location', '/');
    //     //         return res.end();
    //     // });
    // });

    res.render('pages/p01in', { 
        title: 'Prove 01 Assignment', 
        path: '/p01in',
    });
});

module.exports = router;