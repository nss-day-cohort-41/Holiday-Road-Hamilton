var attractionData = []
const getAttractionData = () => {
    return fetch("http://localhost:8088/attractions").then(
        (response) => response.json()).then((response) => {
            attractionData = response
            return response
        })
    
}

