const endpointPost = '/message/add';
const endpointGet = '/message/';

export const getData = function (callBack) {
    console.log('getData');
    fetch(endpointGet)
        .then((res) => res.json())
        .then((data) => callBack(data))
        .catch((err) => console.log(err))
}

export const postData = function (data, callBack) {
    fetch(endpointPost, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => callBack(data))
        .catch((err) => console.log(err))
}
