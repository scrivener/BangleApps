
var tasks = {
  walk1: 6086025438,
  walk2: 6086025920,
  walk3: 6086027307,
  salad: 6040429031,
  kibb2: 6040429218,
  kong1: 6040429457,
  kong2: 6040429695,
  brush: 6049748552,
};

var menu = {};
Object.keys(tasks).forEach(key => {
  let id = tasks[key];
  menu[key] = () => {
    complete(key,id);
  };
});

function showMenu() {
  g.clear();
  E.showMenu(menu);
}

console.log(menu);
showMenu();

// var e;
// var s;
// For side: 1 = left, 2 = right
// Event = {x, y, type} where type is 0 for swift, 2 for long
/*
Bangle.on('touch', (side, event) => {
  E.showMessage(event);
  s = side;
  e = event;
});
*/

var complete = (name, id) => {
  E.showMessage(`Completing ${name}\n${id}`);
  Bangle.http(`https://f6e6-98-118-34-215.ngrok-free.app/complete/${id}`
              ).then(data =>{
    E.showMessage(data.resp);
    setTimeout(showMenu, 3000);
  });
  
};
