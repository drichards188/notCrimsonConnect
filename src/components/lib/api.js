
export function fetchEvents() {
    return fetch("http://10.6.128.227:5000/all_events")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // alert(`fetchEvents resp: ${JSON.stringify(response)}`);
            return response.json();
        });
}