var jsonData =  {

    "firstName": "John",

    "lastName": "Smith",

    "isAlive": true,

    "age": 25,

    "address": {

        "streetAddress": "21 2nd Street",

        "city": "New York",

        "state": "NY",

        "postalCode": "10021-3100"

    },

    "phoneNumbers": [

        {

            "type": "home",

            "number": "212 555-1234"

        },

        {

            "type": "office",

            "number": "646 555-4567"

        }

    ],

    "children": [],

    "spouse": null

};

var jsonData2 =  {

    "firstName": "Mike",

    "lastName": "pica",

    "isAlive": true,

    "age": 22,

    "address": {

        "streetAddress": "21 2nd Street",

        "city": "New York",

        "state": "NY",

        "postalCode": "10021-3100"

    },

    "phoneNumbers": [

        {

            "type": "home",

            "number": "212 555-1234"

        },

        {

            "type": "office",

            "number": "646 555-4567"

        }

    ],

    "children": [],

    "spouse": null

};

var users = {user1 : jsonData,
user2: jsonData2}

console.log(users);
var output = document.getElementById('output');

output.innerHTML = users.user2.firstName + ' ' + users.user2.lastName + ' ' + users.user2.phoneNumbers[1].type + ' ' + users.user2.address.city;

