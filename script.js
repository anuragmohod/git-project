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

var ajaxCall = new  XMLHttpRequest();

var url = 'https://api.myjson.com/bins/2w85g';

ajaxCall.open("GET", url, true);
ajaxCall.setRequestHeader("content-type",'applciation/json');
ajaxCall.onreadystatechange = function () {
	'use strict';
    if (ajaxCall.readyState === 4 && ajaxCall.status === 200){
           var jcontent = JSON.parse(ajaxCall.responseText);
        output.innerHTML = jcontent.firstName+ ' '+jcontent.lastName + ' '+ jcontent.address.city + ' ' + jcontent.phoneNumbers[0].number;
        console.log(jcontent);
    }
};
ajaxCall.send(null);


