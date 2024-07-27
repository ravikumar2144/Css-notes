const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

const d = new Date();
document.getElementById("date").innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + "," + " " + d.getFullYear();