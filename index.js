// how to iterates over the JSON 

const data = {
    "Employees": [
      {
        "userId": "krish",
        "jobTitle": "Developer",
        "firstName": "Krish",
        "lastName": "Lee",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumbers": [
            { "type": "home", "number": "7183627627" }
          ],
        "emailAddress": "krish.lee@gmail.com"
      },
      {
        "userId": "devid",
        "jobTitle": "Developer",
        "firstName": "Devid",
        "lastName": "Rome",
        "employeeCode": "E2",
        "region": "CA",
        "phoneNumbers": [
            { "type": "home", "number": "7283627627" }
          ],
        "emailAddress": "devid.rome@gmail.com"
      },
      {
        "userId": "tin",
        "jobTitle": "Program Directory",
        "firstName": "tin",
        "lastName": "jonson",
        "employeeCode": "E3",
        "region": "CA",
        "phoneNumbers": [
            { "type": "home", "number": "7383627627" }
          ],
        "emailAddress": "tin.jonson@gmail.com"
      }
    ]
  }


// using for... in
function iterateForIn(obj) {
  for (const property in obj) {
    console.log(`${property}: ${(obj[property])}`);
    // the result is:  0: [object Object]
    //                 1: [object Object]
    //                 2: [object Object]

    // expected result is :  0: {"userId":"krish","jobTitle":"Developer","firstName":"Krish","lastName":"Lee","employeeCode":"E1","region":"CA","phoneNumbers":[{"type":"home","number":"7183627627"}],"emailAddress":"krish.lee@gmail.com"}
    //                       1: {"userId":"devid","jobTitle":"Developer","firstName":"Devid","lastName":"Rome","employeeCode":"E2","region":"CA","phoneNumbers":[{"type":"home","number":"7283627627"}],"emailAddress":"devid.rome@gmail.com"}
    //                       2: {"userId":"tin","jobTitle":"Program Directory","firstName":"tin","lastName":"jonson","employeeCode":"E3","region":"CA","phoneNumbers":[{"type":"home","number":"7383627627"}],"emailAddress":"tin.jonson@gmail.com"}
    
  }
}

// execute the function
iterateForIn(data.Employees);

// manual verifications
// console.log(data.Employees[0]);
// console.log(data.Employees[1]);
// console.log(data.Employees[2]);
