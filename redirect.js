const months = [
    "january.html",
    "february.html",
    "march.html",
    "april.html",
    "may.html",
    "june.html",
    "july.html",
    "august.html",
    "september.html",
    "october.html",
    "november.html",
    "december.html"
]
m = new Date().getMonth();
window.location.href = months[m];
