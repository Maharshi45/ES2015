/**
 * Promises are used to avoid callback hell
 * It makes programming easy and readable
 * Promise can return only two things - resolve, reject
 * If program runs successfully then it returns 'resolve'
 * If program generates any error then it returns 'reject'
 * We can handle 'resolve' using 'then' block
 * And we can handle 'reject' using 'catch' block.
 */

const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built';
        resolve(workDone);
    } else {
        const why = 'Still working on something else';
        reject(why);
    }
});

const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log("First then block: " + ok);
            return Promise.resolve("Hi there!!");
        })
        .then((msg) => {
            console.log("Second then block: " + msg);
            return Promise.reject("Threw error");
        })
        .catch(err => {
            console.error("In catch block: " + err);
        });
};

checkIfItsDone();
