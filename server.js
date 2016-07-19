/*
Author : Mathieu Dufour
Email : mathieu_dufour@hotmail.fr
Date created : 19/07/2016
For : invivox
Purpose : Write the tribonacci serie and test it
*/


const http = require('http');

const assert = require('assert'); // for the tests

const hostname = '127.0.0.1';
const port = 8080;


// the tribonacci function
// param signature : the signature which with the function will the start the rest of the tribonacci
// param iterations : how many numbers will be returned with this function
function tribonacci(signature, iterations) {
    if (len(signature) != 3) { // the signature must be 3 numbers length

    }

    var tribonacci_sequence = [];

    for (i = 0; i < iterations; i++) {
        if (i < 3) { // to initialize our tribonacci sequence the the three numbers of signature
            tribonacci_sequence[i] = signature[i];
        }
        else { // now we can complete our sequence with the rest of tribonacci
            tribonacci_sequence[i] = tribonacci_sequence[i-1] + tribonacci_sequence[i-2] + tribonacci_sequence[i-3];
        }
    }

    return tribonacci_sequence;
};


// create the server function
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // // let's start our tests
    // res.write('tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105] =>' +
    //     assert.equal(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
    // );
    // res.write('tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44] =>' +
    //     assert.equal(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
    // );
    // res.write('tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81] =>' +
    //     assert.equal(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
    // );
    // res.write('tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24] =>' +
    //     assert.equal(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
    // );
    //
    //     assert.equal(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
    //
    //     assert.equal(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
    //
    //     assert.equal(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
    //
    //     assert.equal(tribonacci([1,1,1],1),[1])
    //
    //     assert.equal(tribonacci([300,200,100],0),[])
    //
    //     assert.equal(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])


    // the res must end
    res.end('\n');
});

// the server is now listening to our defined port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
