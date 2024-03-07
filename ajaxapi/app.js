// const req = `{
//     "glossary": {
//         "title": "example glossary",
// 		"GlossDiv": {
//             "title": "S",
// 			"GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
// 					"SortAs": "SGML",
// 					"GlossTerm": "Standard Generalized Markup Language",
// 					"Acronym": "SGML",
// 					"Abbrev": "ISO 8879:1986",
// 					"GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// 						"GlossSeeAlso": ["GML", "XML"]
//                     },
// 					"GlossSee": "markup"
//                 }
//             }
//         }
//     }
// }`;

// const reqJSON = JSON.parse(req);
// console.log(reqJSON);

// const person = {
//     nama: 'Hisyam',
//     umur: 20,
//     email: {
//         personal: 'hisyamsantoso901@gmail.com',
//         pendidikan: 'hisyam.s901@gmail.com',
//     },
//     hobi: ['Coding', 'Bermain Gitar'],
// };

// const personJSON = JSON.stringify(person);
// console.log(personJSON);

//^ XHR Request
// const reqXML = new XMLHttpRequest();

// let data;
// reqXML.onload = function () {
//     data = JSON.parse(this.responseText);
//     console.log(data);
// };

// reqXML.onerror = function () {
//     console.log('Error', this);
// };

// reqXML.open('GET', 'https://swapi.dev/api/people/1/');
// reqXML.send();

//^ Fetch Request
// fetch('https://api.tvmaze.com/schedule/full')
//     .then((response) => {
//         if (!response.ok) throw Error('Could not get the data');
//         return response.json();
//     })
//     .then((data) => {
//         console.table('JSON', data);
//         return fetch('https://api.tvmaze.com/schedule/full');
//     })
//     .then((response) => {
//         console.table(response);
//         if (!response.ok) throw Error('Could not get the data');
//         return response.json();
//     })
//     .then((data) => {
//         console.table('Respone 2', data);
//     })
//     .catch((err) => {
//         console.log(err, 'Cannot get data');
//     });

// const load = async () => {
//     try {
//         const req = await fetch('https://api.tvmaze.com/shows/1');
//         const data = await req.json();
//         console.log(data);
//         const req2 = await fetch('https://api.tvmaze.com/shows/z');
//         const data2 = await req2.json();
//         console.log(data2);
//     } catch (err) {
//         console.log('Error', err);
//     }
// };

// load();

//^ axios request (library)
// axios
//     .get('https://api.tvmaze.com/shows/1')
//     .then((res) => {
//         console.log(res.data);
//         return res.data;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//         // alert(err.message);
//     });

const getTv = async (id) => {
    try {
        const req = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log(req.data);
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.data);
    }
};
