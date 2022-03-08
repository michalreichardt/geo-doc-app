// relations
const buttonSpoisty = document.getElementById("button-spoisty")
const buttonNiespoisty = document.getElementById("button-niespoisty")
const buttonOblicz = document.getElementById("button-oblicz")
const outputC = document.getElementById("output-c")
const outputFi = document.getElementById("output-fi")
const outputM0 = document.getElementById("output-M0")
const outputE0 = document.getElementById("output-E0")

const litologySelect = document.getElementById("litology")
const parameterInputField = document.getElementById("parameter-input-field")
const parameterInputFieldLabel = document.getElementById("parameter-input-field-label")

// variables
const gruntyNiespoiste = ["żwiry i pospółki", "piaski grube i średnie", "piaski drobne i pylaste"]
const gruntySpoiste = ["piaski gliniaste i pyły", "gliny piaszczyste, gliny i gliny pylaste", "gliny piaszczyste zwięzłe, gliny zwięzłe i gliny pylaste zwięzłe", "iły"]
const E0piaskiZwiry = {0.20: 50000, 0.21: 50769, 0.22: 51538, 0.23: 52307, 0.24: 53076, 0.25: 53846, 0.26: 54615, 0.27: 55384, 0.28: 56153, 0.29: 56923, 0.30: 57692, 0.31: 58461, 0.32: 59230, 0.33: 60000, 0.34: 61176, 0.35: 62352, 0.36: 63529, 0.37: 64705, 0.38: 65882, 0.39: 67058, 0.40: 68235, 0.41: 69411, 0.42: 70588, 0.43: 71764, 0.44: 72941, 0.45: 74117, 0.46: 75294, 0.47: 76470, 0.48: 77647, 0.49: 78823, 0.50: 79999, 0.51: 81176, 0.52: 82352, 0.53: 83529, 0.54: 84705, 0.55: 85882, 0.56: 87058, 0.57: 88235, 0.58: 89411, 0.59: 90588, 0.60: 91764, 0.61: 92941, 0.62: 94117, 0.63: 95294, 0.64: 96470, 0.65: 97647, 0.66: 98823, 0.67: 99999, 0.68: 101515, 0.69: 103030, 0.70: 104545, 0.71: 106060, 0.72: 107575, 0.73: 109090, 0.74: 110606, 0.75: 112121, 0.76: 113636, 0.77: 115151, 0.78: 116666, 0.79: 118181, 0.80: 119696, 0.81: 121212, 0.82: 122727, 0.83: 124242, 0.84: 125757, 0.85: 127272, 0.86: 128787, 0.87: 130303, 0.88: 131818, 0.89: 133333, 0.90: 134848, 0.91: 136363, 0.92: 137878, 0.93: 139393, 0.94: 140909, 0.95: 142424, 0.96: 143939, 0.97: 145454, 0.98: 146969, 0.99: 148484, 1.00: 150000}
const tabelaZwiryPiaski = {1.00: 1.0000, 0.99: 0.9900, 0.98: 0.9800, 0.97: 0.9700, 0.96: 0.9600, 0.95: 0.9500, 0.94: 0.9400, 0.93: 0.9300, 0.92: 0.9200, 0.91: 0.9100, 0.90: 0.9000, 0.89: 0.8900, 0.88: 0.8800, 0.87: 0.8700, 0.86: 0.8600, 0.85: 0.8500, 0.84: 0.8400, 0.83: 0.8300, 0.82: 0.8200, 0.81: 0.8100, 0.80: 0.8000, 0.79: 0.7900, 0.78: 0.7800, 0.77: 0.7700, 0.76: 0.7600, 0.75: 0.7500, 0.74: 0.7400, 0.73: 0.7300, 0.72: 0.7200, 0.71: 0.7100, 0.70: 0.7000, 0.69: 0.6900, 0.68: 0.6800, 0.67: 0.6700, 0.66: 0.6600, 0.65: 0.6500, 0.64: 0.6400, 0.63: 0.6300, 0.62: 0.6200, 0.61: 0.6100, 0.60: 0.6000, 0.59: 0.5900, 0.58: 0.5800, 0.57: 0.5700, 0.56: 0.5600, 0.55: 0.5500, 0.54: 0.5400, 0.53: 0.5300, 0.52: 0.5200, 0.51: 0.5100, 0.50: 0.5000, 0.49: 0.4900, 0.48: 0.4800, 0.47: 0.4700, 0.46: 0.4600, 0.45: 0.4500, 0.44: 0.4400, 0.43: 0.4300, 0.42: 0.4200, 0.41: 0.4100, 0.40: 0.4000, 0.39: 0.3900, 0.38: 0.3800, 0.37: 0.3700, 0.36: 0.3600, 0.35: 0.3500, 0.34: 0.3400, 0.33: 0.3300, 0.32: 0.3200, 0.31: 0.3100, 0.30: 0.3000, 0.29: 0.2900, 0.28: 0.2800, 0.27: 0.2700, 0.26: 0.2600, 0.25: 0.2500, 0.24: 0.2400, 0.23: 0.2300, 0.22: 0.2200, 0.21: 0.2100, 0.20: 0.2000, 0.19: 0.1900, 0.18: 0.1800, 0.17: 0.1700, 0.16: 0.1600, 0.15: 0.1500, 0.14: 0.1400, 0.13: 0.1300, 0.12: 0.1200, 0.11: 0.1100, 0.10: 0.1000, 0.09: 0.0900, 0.08: 0.0800, 0.07: 0.0700, 0.06: 0.0600, 0.05: 0.0500, 0.04: 0.0400, 0.03: 0.0300, 0.02: 0.0200, 0.01: 0.0100, 0.00: 0.0000}
const tabelaPiaskiGliniastePyly = {1.00: 0.0000, 0.99: 0.7432, 0.98: 0.7464, 0.97: 0.7496, 0.96: 0.7528, 0.95: 0.7560, 0.94: 0.7592, 0.93: 0.7624, 0.92: 0.7656, 0.91: 0.7688, 0.90: 0.7720, 0.89: 0.7752, 0.88: 0.7784, 0.87: 0.7816, 0.86: 0.7848, 0.85: 0.7880, 0.84: 0.7912, 0.83: 0.7944, 0.82: 0.7976, 0.81: 0.8008, 0.80: 0.8040, 0.79: 0.8072, 0.78: 0.8104, 0.77: 0.8136, 0.76: 0.8168, 0.75: 0.8200, 0.74: 0.8220, 0.73: 0.8240, 0.72: 0.8260, 0.71: 0.8280, 0.70: 0.8300, 0.69: 0.8320, 0.68: 0.8340, 0.67: 0.8360, 0.66: 0.8380, 0.65: 0.8400, 0.64: 0.8420, 0.63: 0.8440, 0.62: 0.8460, 0.61: 0.8480, 0.60: 0.8500, 0.59: 0.8510, 0.58: 0.8520, 0.57: 0.8530, 0.56: 0.8540, 0.55: 0.8550, 0.54: 0.8560, 0.53: 0.8570, 0.52: 0.8580, 0.51: 0.8590, 0.50: 0.8600, 0.49: 0.8620, 0.48: 0.8640, 0.47: 0.8660, 0.46: 0.8680, 0.45: 0.8700, 0.44: 0.8720, 0.43: 0.8740, 0.42: 0.8760, 0.41: 0.8780, 0.40: 0.8800, 0.39: 0.8829, 0.38: 0.8857, 0.37: 0.8886, 0.36: 0.8914, 0.35: 0.8943, 0.34: 0.8971, 0.33: 0.9000, 0.32: 0.9013, 0.31: 0.9025, 0.30: 0.9038, 0.29: 0.9050, 0.28: 0.9063, 0.27: 0.9075, 0.26: 0.9088, 0.25: 0.9100, 0.24: 0.9115, 0.23: 0.9131, 0.22: 0.9146, 0.21: 0.9162, 0.20: 0.9177, 0.19: 0.9192, 0.18: 0.9208, 0.17: 0.9223, 0.16: 0.9238, 0.15: 0.9254, 0.14: 0.9269, 0.13: 0.9285, 0.12: 0.9300, 0.11: 0.9333, 0.10: 0.9367, 0.09: 0.9400, 0.08: 0.9433, 0.07: 0.9467, 0.06: 0.9500, 0.05: 0.9533, 0.04: 0.9567, 0.03: 0.9600, 0.02: 0.9633, 0.01: 0.9667, 0.00: 0.9700}
const tabelaGlinyGlinyZwiezleIly = {1.00: 0.4700, 0.99: 0.4780, 0.98: 0.4860, 0.97: 0.4940, 0.96: 0.5020, 0.95: 0.5100, 0.94: 0.5180, 0.93: 0.5260, 0.92: 0.5340, 0.91: 0.5420, 0.90: 0.5500, 0.89: 0.5580, 0.88: 0.5660, 0.87: 0.5740, 0.86: 0.5820, 0.85: 0.5900, 0.84: 0.5980, 0.83: 0.6060, 0.82: 0.6140, 0.81: 0.6220, 0.80: 0.6300, 0.79: 0.6380, 0.78: 0.6460, 0.77: 0.6540, 0.76: 0.6620, 0.75: 0.6700, 0.74: 0.6773, 0.73: 0.6847, 0.72: 0.6920, 0.71: 0.6993, 0.70: 0.7067, 0.69: 0.7140, 0.68: 0.7213, 0.67: 0.7287, 0.66: 0.7360, 0.65: 0.7433, 0.64: 0.7507, 0.63: 0.7580, 0.62: 0.7653, 0.61: 0.7727, 0.60: 0.7800, 0.59: 0.7850, 0.58: 0.7900, 0.57: 0.7950, 0.56: 0.8000, 0.55: 0.8050, 0.54: 0.8100, 0.53: 0.8150, 0.52: 0.8200, 0.51: 0.8250, 0.50: 0.8300, 0.49: 0.8350, 0.48: 0.8400, 0.47: 0.8450, 0.46: 0.8500, 0.45: 0.8550, 0.44: 0.8600, 0.43: 0.8650, 0.42: 0.8700, 0.41: 0.8750, 0.40: 0.8800, 0.39: 0.8829, 0.38: 0.8857, 0.37: 0.8886, 0.36: 0.8914, 0.35: 0.8943, 0.34: 0.8971, 0.33: 0.9000, 0.32: 0.9025, 0.31: 0.9050, 0.30: 0.9075, 0.29: 0.9100, 0.28: 0.9125, 0.27: 0.9150, 0.26: 0.9175, 0.25: 0.9200, 0.24: 0.9223, 0.23: 0.9246, 0.22: 0.9269, 0.21: 0.9292, 0.20: 0.9315, 0.19: 0.9338, 0.18: 0.9362, 0.17: 0.9385, 0.16: 0.9408, 0.15: 0.9431, 0.14: 0.9454, 0.13: 0.9477, 0.12: 0.9500, 0.11: 0.9525, 0.10: 0.9550, 0.09: 0.9575, 0.08: 0.9600, 0.07: 0.9625, 0.06: 0.9650, 0.05: 0.9675, 0.04: 0.9700, 0.03: 0.9725, 0.02: 0.9750, 0.01: 0.9775, 0.00: 0.9800}

//example 

const dane = [
    {litologia: "żwiry i pospółki", 
    parametry: [{E0: 2, delta: 3, c: 4, fi: 5, E: 6, M: 7},
    {ID: 0.02, E0: 3, delta: 4, c: 5, fi: 6, E: 7, M: 8}]},
    {litologia: "piaski grube i średnie", 
    parametry: [{ID: 0.01, E0: 2, delta: 3, c: 4, fi: 5, E: 6, M: 7},
    {ID: 0.02, E0: 3, delta: 4, c: 5, fi: 6, E: 7, M: 8}]}
]

const examplePiaskiGrubeSrednie = [{ID: 0.01, E0: 2, delta: 3, c: 4, fi: 5, E: 6, M: 7},
        {ID: 0.02, E0: 3, delta: 4, c: 5, fi: 6, E: 7, M: 8}]

function showParameters(data) { for (let i=0; i<data.length; i++) {
        if (parameterInputField.value == data[i].ID) {
        outputC.innerHTML = `<p> Spójność gruntu c [kPa]</p>
        <h3>${data[i].c}</h3>`

        outputFi.innerHTML = `<p> Kąt tarcia wewnętrznego f [o]</p>
        <h3>${data[i].fi}</h3>`

        outputM0.innerHTML = `<p> Edometryczny moduł ściśliwości pierwotnej M [kPa]</p>
        <h3>${data[i].M}</h3>`

        outputE0.innerHTML = `<p> Edometryczny moduł odkształcenia pierwotnego E [kPa]</p>
        <h3>${data[i].E}</h3>`
        break
        }
    }
}


/* functions */
buttonSpoisty.addEventListener("click", function(){
    showGruntySpoiste()
})

buttonNiespoisty.addEventListener("click", function(){
    showGruntyNiespoiste()
})

function showGruntySpoiste() {
    litologySelect.innerHTML = ""
    for (grunt of gruntySpoiste) {
        let gruntOpt = new Option (grunt,grunt)
        litologySelect.add(gruntOpt)
    }
    parameterInputFieldLabel.textContent = "Wprowadź stopień plastyczności:"
}

function showGruntyNiespoiste() {
    litologySelect.innerHTML = ""
    for (grunt of gruntyNiespoiste) {
        let gruntOpt = new Option (grunt,grunt)
        litologySelect.add(gruntOpt)
    }
    parameterInputFieldLabel.textContent = "Wprowadź stopień zagęszczenia:"
}


/* events */

buttonOblicz.addEventListener("click", function() {
    if (litologySelect.value === examplePospolkiZwiry) {showParameters(examplePospolkiZwiry)}
    else if (litologySelect.value === gruntyNiespoiste[1]) {showParameters(examplePiaskiGrubeSrednie)}
    else if (litologySelect.value ===  gruntyNiespoiste[2]) {}
    else if (litologySelect.value === gruntySpoiste[0]) {}
    else if (litologySelect.value === gruntySpoiste[1]) {}
    else if (litologySelect.value ===  gruntySpoiste[2]) {}
    else if (litologySelect.value === gruntySpoiste[3]) {}
})
