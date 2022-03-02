var data = window.location.search;

for (var i = 0; i < data.length; i++) {
  data = data.replace('?', '');
  data = data.replace('+', ':');
  data = data.replace('_', ' <br /> ');
  data = data.replace('|', ' ');
}

document.getElementById("data").innerHTML = data;