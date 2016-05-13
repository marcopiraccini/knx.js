var knxjs = require('.');
console.log('test1');
var connection = new knxjs.KnxConnectionTunneling('10.12.23.53', 3671);
console.log('test1');
var lightValue = false;
function toggleLight() {
    lightValue = !lightValue;
    connection.Action("1/0/50", lightValue);
}
connection.debug = true;
console.log('test1');
connection.Connect(function () {
    setTimeout(toggleLight, 1000);
    setTimeout(toggleLight, 3000);
    setTimeout(function () {
        connection.Disconnect();
    }, 5000);
});
