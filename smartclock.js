setInterval(function () {
    let time = new Date();
    let daycontent = time.getDay();
    const namecontent = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday",];
    day.innerHTML = namecontent[daycontent];
    let monthcontent = time.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novembar", "Decembar"];
    month.innerHTML = months[monthcontent];
    let yearcontent = time.getFullYear();
    year.innerHTML = yearcontent;
    let timecontent = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    timee.innerHTML = timecontent;
}, 100);