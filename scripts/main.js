
// pass button id and disable or enable

enableDisableButton("parkWCAButton","disable")
getWheelchairData()
deleteItenerary()
getParkData()

// Testing Eatery Fetch
eateryAPI.getEateries().then(populateEaterySelect)


getAttractionData().then((response) => attractionsList(response))


//pass button id and enable or disable as text
function enableDisableButton (buttonID,buttonState) {

    buttonChange = document.getElementById(buttonID);
    if (buttonState === "disable") {
        buttonChange.disabled = true 
    } else {
        buttonChange.disabled = false 
    }
    
    
}

function getCheckboxState(checkboxID) {
    return document.getElementById(checkboxID).checked
    
}