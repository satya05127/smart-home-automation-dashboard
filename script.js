let devices = {
    light:false,
    fan:false,
    ac:false
};

function toggleDevice(device){

    devices[device] = !devices[device];

    document.getElementById(device + "-status").innerText =
        devices[device] ? "ON" : "OFF";
}
function toggleDevice(device){

    devices[device] = !devices[device];

    document.getElementById(device + "-status").innerText =
    devices[device] ? "ON" : "OFF";

    let activeCount = Object.values(devices)
        .filter(status => status).length;

    document.getElementById("active").innerText =
        "Active Devices : " + activeCount;
}
