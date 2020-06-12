let eateryCollection = [];
let eaterySelectedCollection = [];
let handiSelectedCollection = [];
let wheelchairFlag = true;

const eateryAPI = {
    getEateries () {
        return fetch("http://localhost:8088/eateries")
            .then(eateryHTTPResponse => eateryHTTPResponse.json())
            .then( (arrayOfEateries) => eateryCollection = arrayOfEateries)
            .then(eateryCollection.forEach(
                eateryObject =>
                {   // Trim string values if possible
                    if (typeof eateryObject == 'string') { eateryObject = eateryObject.trim }
                }
            ))
    }
}





