// // Test data previously
// let username = 'testUser123';
// let password='correctPass';
// let loginAttempts = 0;
// let maxAttempts = 3;

// let remainingAttempts = maxAttempts - loginAttempts; // Subtraction
// loginAttempts = loginAttempts + 1; // Addition
// let totalTests = 5 * 3; // Multiplication
// let averageTime = 150 / 5; //Division

// console.log('Login Attempts:', loginAttempts);
// console.log('Remaining Attempts:', remainingAttempts);
// console.log('Total Tests:', totalTests);
// console.log('Average Time:', averageTime);

// //Comparison Operators; === (Exact Equality Match), !== (not equal to), == (converts type)
// let expectedTitle = 'Dashboard';
// let actualTitle = 'Dashboard';
// let expectedCount = 5;
// let actualCount = 5;

// console.log('Titles match:', actualTitle === expectedTitle); //True because the let above are the exact matches
// console.log('Expected Count:', actualCount === expectedCount); //True

// console.log('Attempts less than max:', loginAttempts < maxAttempts); //True 0<3
// console.log('Attempts greater than 0:', loginAttempts > 0); //True
// console.log('Password not empty:', password !== ''); // True password has a value and not null

// console.log('5 == \"5\":', 5 == '5'); // True because it's converting the number 5 to a string (changing type)
// console.log('5 === \"5\":', 5 === '5'); // false because they are not the same type

// //Conditional Logic = making decisions

// if (username === 'testUser123' && password === 'correctPass') {
//     console.log('Login successful - proceeding to dashboard');
//     let isLoggedIn =true;
// } else if (loginAttempts >= maxAttempts) {
//     console.log ('Too many failed attempts - account locked');
// } else {
//     console.log ('Invalid credentials - try again');
// }


//Swtich statement for test status
let testResult = 'passed';

switch (testresult) {
    case 'passed':
        console.log('Test passed- continuing test suite');
         break;
    case 'failed':
        console.log('Test failed- taking screenshot');
        break;
    case 'skipped':
        console.log('Test skipped - moving to next test');
        break;
    default:
        console.log('Unknown test result');
    }

