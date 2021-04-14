const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]

n =  new Date();
y = n.getFullYear();
m = n.getMonth();
d = n.getDate();
// Get the container element
isMonth = document.getElementById(months[m]);
if(isMonth != null){
    // var current = document.getElementById(d).getElementsByTagName("span")
    document.getElementById(d.toString()).getElementsByTagName("span")[0].className += "active"
}
