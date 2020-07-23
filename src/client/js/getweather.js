function getweather(){
  fetch("https://api.openweathermap.org/data/2.5/weather?36420,us&appid=cc7294b368fa089de71eccdcee3e807b")
  .then(res => res.json())
  .then(function(res){
    document.querySelector('aside').innerHTML = res.main.temp

  })
  
}
