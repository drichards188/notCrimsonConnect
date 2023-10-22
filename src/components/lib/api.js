import axios from "axios";

// export async function createEventAsync() {
//     const response = await getEvents();
//     alert(JSON.stringify(response));
//     return response;
//
// }
export async function createEventAsync() {
    return new Promise(function (resolve, reject) {
        getEvents("param", function (err, data) {
            if (err !== null) {
                alert(`rejected: ${err}`);
                reject(err)
            } else {
                alert(`resolved: ${data}`);
                resolve(data)
            }
        });
    });
}

async function getEvents(param) {
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6YWxhIiwiZXhwIjoxNjc0NzUyNTAzfQ.aMsKp7pp2v2cXT7aUkJuB2P7exufrBeihEiQARMRWFg";

    let response = await axios({
        method: "get",
        url: `https://747af3ca-c538-4582-a45c-d4a07d389682.mock.pstmn.io/event`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then(function (response) {
            //handle success
            alert("success " + JSON.stringify(response));
            Promise.resolve("Success!");
            return response;
        })
        .catch(function (response) {
            //handle error
            alert("failed " + response);
            Promise.reject("Failed!");
            return response;
        });
}

// const simpleFetch= () => {
//     fetch('https://747af3ca-c538-4582-a45c-d4a07d389682.mock.pstmn.io/event')
//
//         .then(
//
//             function(response) {
//
//                 if (response.status !== 200) {
//
//                     console.log('Looks like there was a problem. Status Code: ' +
//
//                         response.status);
//
//                     return;
//
//                 }
// }

// export async function getEvents(param) {
//     const token =
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ6YWxhIiwiZXhwIjoxNjc0NzUyNTAzfQ.aMsKp7pp2v2cXT7aUkJuB2P7exufrBeihEiQARMRWFg";
//
//     let response = await axios({
//         method: "get",
//         url: `https://747af3ca-c538-4582-a45c-d4a07d389682.mock.pstmn.io/event`,
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     })
//         .then(function (response) {
//             //handle success
//             alert("success " + JSON.stringify(response));
//             return response;
//         })
//         .catch(function (response) {
//             //handle error
//             alert("failed " + response);
//             return response;
//         });
//     return new Promise<{ response }>((resolve) =>
//             setTimeout(() => resolve({ data: response }))
//     );
// }

export async function getEventData() {
    const response = await fetch('https://747af3ca-c538-4582-a45c-d4a07d389682.mock.pstmn.io/event');
    const result = await response.json();
    alert(`result: ${JSON.stringify(result)}`);
    return result;
}