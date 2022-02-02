// unknown type
function doTask(callback) {
    if (typeof callback === "function") {
        callback();
    }
    else if (typeof callback === "number") {
        console.log(callback);
    }
}
doTask(100);
