function weightConverter1(valNum) {
    document.getElementById("outputGrams1").innerHTML = valNum * 1000;
    document.getElementById("outputPounds1").innerHTML = valNum * 2.2046;
    document.getElementById("outputOunces1").innerHTML = valNum * 35.274;
}

function weightConverter2(valNum) {
    document.getElementById("outputGrams2").innerHTML = valNum / 0.0022046;
    document.getElementById("outputKilograms2").innerHTML = valNum / 2.2046;
    document.getElementById("outputOunces2").innerHTML = valNum * 16;
}

function weightConverter3(valNum) {
    document.getElementById("outputKilograms3").innerHTML = valNum / 1000;
    document.getElementById("outputPounds3").innerHTML = valNum * 0.0022046;
    document.getElementById("outputOunces3").innerHTML = valNum * 0.035274;
}

function weightConverter4(valNum) {
    document.getElementById("outputGrams4").innerHTML = valNum / 0.035274;
    document.getElementById("outputPounds4").innerHTML = valNum * 0.0625;
    document.getElementById("outputKilograms4").innerHTML = valNum / 35.274;
}


/*temperature*/
function tempConverter1(valNum) {
    document.getElementById("outputFaherenheit1").innerHTML = (valNum * 1.8) + 32;
    document.getElementById("outputKelvin1").innerHTML = valNum * 0.0625;
    document.getElementById("outputRankine1").innerHTML = valNum / 35.274;
}

function tempConverter2(valNum) {
    document.getElementById("outputCelsius2").innerHTML = (valNum - 32) / 1.8;
    document.getElementById("outputKelvin2").innerHTML = ((valNum - 32) / 1.8) + 273.15;
    document.getElementById("outputRankine2").innerHTML = valNum / 35.274;

}

function tempConverter3(valNum) {
    document.getElementById("outputFaherenheit3").innerHTML = (valNum * 1.8) + 32;
    document.getElementById("outputCelsius3").innerHTML = valNum * 0.0625;
    document.getElementById("outputRankine3").innerHTML = valNum / 35.274;
}

function tempConverter4(valNum) {
    document.getElementById("outputFaherenheit4").innerHTML = (valNum * 1.8) + 32;
    document.getElementById("outputKelvin4").innerHTML = valNum * 0.0625;
    document.getElementById("outputCelsius4").innerHTML = valNum / 35.274;

}
/*length*/
function lenConverter1(valNum) {
    document.getElementById("outputKilometres1").innerHTML = valNum / 1000;
    document.getElementById("outputFeet1").innerHTML = valNum * 3.2808;
    document.getElementById("outputInches1").innerHTML = valNum * 39.370;
    document.getElementById("outputCentimetres1").innerHTML = valNum / 0.01;
}

function lenConverter2(valNum) {
    document.getElementById("outputMetres2").innerHTML = valNum * 1000;
    document.getElementById("outputFeet2").innerHTML = valNum * 3280.8;
    document.getElementById("outputInches2").innerHTML = valNum * 39370;
    document.getElementById("outputCentimetres2").innerHTML = valNum * 100000;
}

function lenConverter3(valNum) {
    document.getElementById("outputMetres3").innerHTML = valNum / 3.2808;
    document.getElementById("outputKilometres3").innerHTML = valNum / 3280.8;
    document.getElementById("outputInches3").innerHTML = valNum * 12;
    document.getElementById("outputCentimetres3").innerHTML = valNum / 0.032808;
}

function lenConverter4(valNum) {
    document.getElementById("outputMetres4").innerHTML = valNum / 39.370;
    document.getElementById("outputFeet4").innerHTML = valNum * 0.083333;
    document.getElementById("outputKilometres4").innerHTML = valNum / 39370;
    document.getElementById("outputCentimetres4").innerHTML = valNum / 0.39370;
}

function lenConverter5(valNum) {
    document.getElementById("outputMetres5").innerHTML = valNum / 100;
    document.getElementById("outputFeet5").innerHTML = valNum * 0.032808;
    document.getElementById("outputInches5").innerHTML = valNum * 0.39370;
    document.getElementById("outputKilometres5").innerHTML = valNum / 100000;
}