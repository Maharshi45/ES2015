function temp1(tempFunction) {
    console.log("temp1 called..");
    let data = "David";
    tempFunction(data);
}

temp1((dt) => {
    console.log(`temp2 called.. ${dt}`);
});