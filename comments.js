// Create web server 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// This function takes two variables and prints the sum of those variables to the console.
// The function is called calculateNumbers, and it takes two variables, var1 and var2, as arguments.
// The function body is the code between the curly braces, which in this case is a single line of code.
// The function body is the code that is executed when the function is called.
// The function body is not executed when the function is defined.
// The function body is executed when the function is called.
// The function call is calculateNumbers(1,2);
// The function call is calculateNumbers(1,2);, and it passes the two arguments 1 and 2.
// The function call passes the two arguments 1 and 2.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed, which prints 3 to the console.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed, which prints 3 to the console.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed, which prints 3 to the console.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed, which prints 3 to the console.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed, which prints 3 to the console.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is executed, which prints 3 to the console.
// The function call passes the two arguments 1 and 2, which are assigned to the parameters var1 and var2, and then the function body is    