/*
make the list of names in the parkCollection a dropdown menu to choose from
take what they select and iterate selection into html preview
*/

const parkDropdownConverter = (parkObject) => {

    const parkListHTML = `<option id="${parkObject.parkCode}" value="${parkObject.parkCode}">${parkObject.name}</option>`

    return parkListHTML
}

const parkPreviewConverter = (parkPreviewObject) => {
    
    let parkPreviewPics = []
    parkPreviewPics = parkPreviewObject.images
    console.log(parkPreviewObject)
    const parkPreviewHTML = `<section class="section__park">
    <div class="div__section__park">
        <h1>${parkPreviewObject.fullName}</h1>
        <img class="park__pic" src="${parkPreviewPics[0].url}" alt="${parkPreviewPics[0].altText}" />
        </div>
    <div class ="div__park__desc">${parkPreviewObject.description}</div>
    </section>`

    return parkPreviewHTML
}

