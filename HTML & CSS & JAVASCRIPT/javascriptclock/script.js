document.getElementById("myName").innerHTML = prompt("Your Name:")

function showTime() {
    let dayOfWeek = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;
    document.getElementById("day").innerHTML = dayOfWeek[dateTime.getDay()];
    
    

}

setInterval(showTime, 1000)

