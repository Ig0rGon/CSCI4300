// First Sheet
function order(item, processCallback) {
    setTimeout(() => {
        const myOrder = { id: Math.floor(Math.random() * 1000), item, quantity: 1 };
        console.log("Order placed:", myOrder);
        processCallback(myOrder, package); // Call process with the order and package callback
    }, 2000);
}

function process(order, packageCallback) {
    setTimeout(() => {
        console.log("Order processed:", order);
        packageCallback(); // Calls package() callback
    }, 3000);
}

function package() {
    setTimeout(() => {
        const pkg = { trackingNumber: `PKG${Math.floor(Math.random() * 100000)}`, wt: '2kg' };
        console.log("Order packaged:", pkg);
    }, 1000);
}

// Answer 1
order("Phone", process);


// Second Sheet
function order(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(`Error: Order for ${item} could not be placed.`);
            } else {
                const myOrder = { id: Math.floor(Math.random() * 1000), item, quantity: 1 };
                console.log("Order placed:", myOrder);
                resolve(myOrder);
            }
        }, 2000);
    });
}

function process(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject(`Error: Order processing failed for ${order.item}`);
            } else {
                console.log("Order processed:", order);
                resolve(order);
            }
        }, 3000);
    });
}

function package() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Error: Package failed");
            } else {
                const pkg = { trackingNumber: `PKG${Math.floor(Math.random() * 100000)}`, wt: '2kg' };
                console.log("Order packaged:", pkg);
                resolve(pkg);
            }
        }, 1000);
    });
}

// Answer 2
order("Phone")
    .then(order => process(order))
    .then(order => package(order))
    .then(pkg => {
        console.log("Package details:", pkg);
    })
    .catch(error => {
        console.error(error);
    });