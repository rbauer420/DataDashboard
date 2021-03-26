//Hamburger Menu//

//Display Values from user input - Victim Gender 
function showGenderVic() {

    resultGenderVic = document.getElementById("resultGenderVic");
    resultGenderVic.style.padding = "10px"; 

    let valuesGenderVic = [5141, 5150, 25];

    const sel = document.getElementById("selectGenderVic");
    let value = sel.options[sel.selectedIndex].value;
    
    if (value === "male") {
        resultGenderVic.innerHTML = valuesGenderVic[0];
        return false;
    }
    else if (value === "female") {
        resultGenderVic.innerHTML = valuesGenderVic[1];
        return false;
    }
    else if (value === "genderUnknown") {
        resultGenderVic.innerHTML = valuesGenderVic[2];
        return false;
    }

}
  
  window.addEventListener("load", () => { 
    document.getElementById("selectGenderVic").addEventListener("change",showGenderVic);
  });


  //Display Values from user input - Victim Race 
  function showRaceVic() {

    resultRaceVic = document.getElementById("resultRaceVic");
    resultRaceVic.style.padding = "10px"; 

    let valuesRaceVic = [64, 0, 3346, 29, 6621, 248];

    const sel = document.getElementById("selectRaceVic"); 
    let value = sel.options[sel.selectedIndex].value; 
    
    if (value === "Asian") {
        resultRaceVic.innerHTML = valuesRaceVic[0];
        return false;
    }
    else if (value === "NativeHawaiian") {
        resultRaceVic.innerHTML = valuesRaceVic[1];
        return false;
    }
    else if (value === "Black_Afican_American") {
        resultRaceVic.innerHTML = valuesRaceVic[2];
        return false;
    }
    else if (value === "AmericanIndian_AlaskaNative") {
        resultRaceVic.innerHTML = valuesRaceVic[3];
        return false;
    }
    else if (value === "Caucasian_White") {
        resultRaceVic.innerHTML = valuesRaceVic[4];
        return false;
    }
    else if (value === "raceUnknown") {
        resultRaceVic.innerHTML = valuesRaceVic[5];
        return false;
    }

}
  
  window.addEventListener("load", () => { 
    document.getElementById("selectRaceVic").addEventListener("change",showRaceVic);
  });


//Display Values from user input - Victim Ethnicity 
function showEthnicityVic() {

    resultEthnicityVic = document.getElementById("resultEthnicityVic");
    resultEthnicityVic.style.padding = "10px"; 

    let valuesEthnicityVic = [383, 9382, 549];

    const sel = document.getElementById("selectEthnicityVic");
    let value = sel.options[sel.selectedIndex].value;
    
    if (value === "Hispanic") {
        resultEthnicityVic.innerHTML = valuesEthnicityVic[0];
        return false;
    }
    else if (value === "notHistpanic") {
        resultEthnicityVic.innerHTML = valuesEthnicityVic[1];
        return false;
    }
    else if (value === "ethnicityUnknown") {
        resultEthnicityVic.innerHTML = valuesEthnicityVic[2];
        return false;
    }

}
  
  window.addEventListener("load", () => { 
    document.getElementById("selectEthnicityVic").addEventListener("change",showEthnicityVic);
  });


//Display Values from user input - Victim Age 
function showAgeVic() {

    resultAgeVic = document.getElementById("resultAgeVic");
    resultAgeVic.style.padding = "10px"; 

    let valuesAgeVic = [587, 1788, 2738, 2099, 1403, 920, 410, 137, 44, 5, 185];

    const sel = document.getElementById("selectAgeVic"); 
    let value = sel.options[sel.selectedIndex].value; 
    
    if (value === "zeroToNine") {
        resultAgeVic.innerHTML = valuesAgeVic[0];
        return false;
    }
    else if (value === "tenToNineteen") {
        resultAgeVic.innerHTML = valuesAgeVic[1];
        return false;
    }
    else if (value === "twentyToTwentynine") {
        resultAgeVic.innerHTML = valuesAgeVic[2];
        return false;
    }
    else if (value === "thirtyToThirtytynine") {
        resultAgeVic.innerHTML = valuesAgeVic[3];
        return false;
    }
    else if (value === "fourtyToFourtynine") {
        resultAgeVic.innerHTML = valuesAgeVic[4];
        return false;
    }
    else if (value === "fiftyToFiftyynine") {
        resultAgeVic.innerHTML = valuesAgeVic[5];
        return false;
    }
    else if (value === "sixtyToSixtynine") {
        resultAgeVic.innerHTML = valuesAgeVic[6];
        return false;
    }
    else if (value === "seventyToSeventynine") {
        resultAgeVic.innerHTML = valuesAgeVic[7];
        return false;
    }
    else if (value === "eightyToEightynine") {
        resultAgeVic.innerHTML = valuesAgeVic[8];
        return false;
    }
    else if (value === "ninteyOrOlder") {
        resultAgeVic.innerHTML = valuesAgeVic[9];
        return false;
    }
    else if (value === "ageUnknown") {
        resultAgeVic.innerHTML = valuesAgeVic[10];
        return false;
    }

}
    
    window.addEventListener("load", () => {
    document.getElementById("selectAgeVic").addEventListener("change",showAgeVic);
    });


//Display Values from user input - Suspect Gender 
function showGenderSuspect() {

    resultGenderSuspect = document.getElementById("resultGenderSuspect");
    resultGenderSuspect.style.padding = "10px"; 

    let valuesGenderSuspect = [7304, 1421, 86];

    const sel = document.getElementById("selectGenderSuspect");
    let value = sel.options[sel.selectedIndex].value;
    
    if (value === "male") {
        resultGenderSuspect.innerHTML = valuesGenderSuspect[0];
        return false;
    }
    else if (value === "female") {
        resultGenderSuspect.innerHTML = valuesGenderSuspect[1];
        return false;
    }
    else if (value === "genderUnknown") {
        resultGenderSuspect.innerHTML = valuesGenderSuspect[2];
        return false;
    }

}
  
  window.addEventListener("load", () => { 
    document.getElementById("selectGenderSuspect").addEventListener("change",showGenderSuspect); 
  });


  //Display Values from user input - Suspect Race 
  function showRaceSuspect() {

    resultRaceSuspect = document.getElementById("resultRaceSuspect");
    resultRaceSuspect.style.padding = "10px"; 

    let valuesRaceSuspect = [21, 0, 3809, 12, 4637, 327];

    const sel = document.getElementById("selectRaceSuspect"); 
    let value = sel.options[sel.selectedIndex].value; 
    
    if (value === "Asian") {
        resultRaceSuspect.innerHTML = valuesRaceSuspect[0];
        return false;
    }
    else if (value === "NativeHawaiian") {
        resultRaceSuspect.innerHTML = valuesRaceSuspect[1];
        return false;
    }
    else if (value === "Black_Afican_American") {
        resultRaceSuspect.innerHTML = valuesRaceSuspect[2];
        return false;
    }
    else if (value === "AmericanIndian_AlaskaNative") {
        resultRaceSuspect.innerHTML = valuesRaceSuspect[3];
        return false;
    }
    else if (value === "Caucasian_White") {
        resultRaceSuspect.innerHTML = valuesRaceSuspect[4];
        return false;
    }
    else if (value === "raceUnknown") {
        resultRaceSuspect.innerHTML = valuesRaceSuspect[5];
        return false;
    }

}
  
  window.addEventListener("load", () => { 
    document.getElementById("selectRaceSuspect").addEventListener("change",showRaceSuspect);
  });


//Display Values from user input - Suspect Ethnicity 
function showEthnicitySuspect() {

    resultEthnicitySuspect = document.getElementById("resultEthnicitySuspect");
    resultEthnicitySuspect.style.padding = "10px"; 

    let valuesEthnicitySuspect = [1, 19, 0];

    const sel = document.getElementById("selectEthnicitySuspect");
    let value = sel.options[sel.selectedIndex].value;
    
    if (value === "Hispanic") {
        resultEthnicitySuspect.innerHTML = valuesEthnicitySuspect[0];
        return false;
    }
    else if (value === "notHistpanic") {
        resultEthnicitySuspect.innerHTML = valuesEthnicitySuspect[1];
        return false;
    }
    else if (value === "ethnicityUnknown") {
        resultEthnicitySuspect.innerHTML = valuesEthnicitySuspect[2];
        return false;
    }

}
  
  window.addEventListener("load", () => { 
    document.getElementById("selectEthnicitySuspect").addEventListener("change",showEthnicitySuspect); 
  });


//Display Values from user input - Suspect Age 
function showAgeSuspect() {

    resultAgeSuspect = document.getElementById("resultAgeSuspect");
    resultAgeSuspect.style.padding = "10px"; 

    let valuesAgeSuspect = [14, 1552, 2534, 1944, 1090, 610, 198, 30, 13, 6, 820];

    const sel = document.getElementById("selectAgeSuspect"); 
    let value = sel.options[sel.selectedIndex].value; 
    
    if (value === "zeroToNine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[0];
        return false;
    }
    else if (value === "tenToNineteen") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[1];
        return false;
    }
    else if (value === "twentyToTwentynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[2];
        return false;
    }
    else if (value === "thirtyToThirtytynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[3];
        return false;
    }
    else if (value === "fourtyToFourtynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[4];
        return false;
    }
    else if (value === "fiftyToFiftyynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[5];
        return false;
    }
    else if (value === "sixtyToSixtynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[6];
        return false;
    }
    else if (value === "seventyToSeventynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[7];
        return false;
    }
    else if (value === "eightyToEightynine") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[8];
        return false;
    }
    else if (value === "ninteyOrOlder") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[9];
        return false;
    }
    else if (value === "ageUnknown") {
        resultAgeSuspect.innerHTML = valuesAgeSuspect[10];
        return false;
    }

}
    
    window.addEventListener("load", () => {
    document.getElementById("selectAgeSuspect").addEventListener("change",showAgeSuspect); 
    });

//Read KY_Census_Pop.csv
window.onload = getData();

async function getData() {
        displayKYPop = document.getElementById("popKY");

        const response = await fetch("https://api.apispreadsheets.com/data/9745/");
        const data = await response.text();
        console.log(data);
        displayKYPop.innerHTML = data;

        //Split and slice function not working
        const rows = data.split(/\n/).slice(1);
        rows.forEach(row => {
            console.log(row);
        });
    }


