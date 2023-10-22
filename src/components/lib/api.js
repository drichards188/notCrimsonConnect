import axios from "axios";

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

// export function fetchEvents() {
//     // comment out whichever url you dont want to use (based on heroku or local postgres)
//     return fetch("https://747af3ca-c538-4582-a45c-d4a07d389682.mock.pstmn.io/event")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             // alert(`fetchQuestions resp: ${JSON.stringify(response)}`);
//             return response.json();
//         });
// }

export function fetchEvents() {
    // comment out whichever url you dont want to use (based on heroku or local postgres)
    return fetch("http://10.6.128.227:5000/all_events")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            alert(`fetchEvents resp: ${JSON.stringify(response)}`);
            return response.json();
        });
}