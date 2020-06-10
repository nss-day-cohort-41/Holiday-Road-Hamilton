/*
make the list of names in the parkCollection a dropdown menu to choose from
take what they select and iterate selection into html preview
*/

const parkDropdownConverter = (parkObject) => {

    const parkListHTML = `<option value="${parkObject.id}">${parkObject.name}</option>`

    return parkListHTML
}