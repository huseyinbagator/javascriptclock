//selectors
const id = document.querySelector("#myName");
let timeload = document.querySelector("#myClock")


const name = prompt("Lütfen Adınızı Giriniz");
id.innerHTML = `${name}`;

// Time 
const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const updateTime = () => {
    const time = new Date();
    const day = weekday[time.getDay()];
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    timeload.innerHTML = `${hour}:${minutes}:${seconds}:${day}`;
  };
  
  setInterval(updateTime, 1000);





