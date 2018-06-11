var katzDeli = [];
var i=0; 
function takeANumber(line) {
  i++;
  return "Welcome, You are number " + i + " in line.";
}

function nowServing(line) {
  var first = line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return "Currently serving " + first + ".";
}

function currentLine(line) {
  var current = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  }
<<<<<<< HEAD
  for (var i = 0; i < line.length; i++) {
    current.push(i + 1 + ". " + line[i]);
  }
  return "The line is currently: " + current.join(', ');
=======
  for(var i = 0; i < line.length; i++) {
    current.push((i + 1). line[i]);
  }
  return `The line is currently: ${current.join(', ')}`
>>>>>>> d729d9c149ffb2bd8417e08cc9a5c0eaf20a260e
}