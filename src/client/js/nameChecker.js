export function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export function getweather(){
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=36420,us&appid=cc7294b368fa089de71eccdcee3e807b')
  .then(res => res.json())
  .then(function(res) {
      console.log(res)
      document.querySelector('aside').innerHTML = res.main.temp

  })
}
