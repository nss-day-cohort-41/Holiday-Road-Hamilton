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

    let activitiesStr = "";
    for (activity in parkPreviewObject.activities) {
        if (parkPreviewObject.activities[activity].name !== "") {
            if (activitiesStr.length === 0) {
                activitiesStr = activitiesStr + parkPreviewObject.activities[activity].name
            } else {
                activitiesStr = activitiesStr + ", " + parkPreviewObject.activities[activity].name
            }
        }
    }

    const parkPreviewHTML = `<section class="section__park">
    <div class="div__section__park">
        <h1>${parkPreviewObject.fullName}</h1>
        <img class="park__pic" src="${parkPreviewPics[0].url}" alt="${parkPreviewPics[0].altText}" />
        </div>
    <button name="details__button" class="button__details--park" id="parkPreviewButton">Details</button>
    </section>
    
    <div id="myModal" class="modal--park">
        <div class="modal__details--park" id="modal__park__details">
            <div class="modal__content--park">
                <strong>${parkPreviewObject.fullName}</strong><br>
                Contact Info: ${parkPreviewObject.contacts.phoneNumbers[0].phoneNumber}<br>
                Description: ${parkPreviewObject.description}<br>
                Location: ${parkPreviewObject.addresses[0].city}, ${parkPreviewObject.addresses[0].stateCode}<br>
                Activities: ${activitiesStr}
               <div class="div__close--park">Click Close button by park Picture to Close</div>
            </div>
            
        </div>
        
    </div>
    `

    return parkPreviewHTML
}

