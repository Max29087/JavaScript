//CallBack Hell

// function getData(Id, NextData) {
//     setTimeout(() => {
//         console.log(Id);
//         if (NextData) {
//             NextData();
//         }
//     }, 2000)
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });


//Promises Chain
function getData1(Id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data: ", Id);
            resolve("success");
        }, 2000);
    });
}
getData1(1)
    .then((res) => {
        return getData1(2);
    })
    .then((res) => {
        return getData1(3);
    })
    .then((res) => {
        console.log(res);
    })


//Async
// function hello() {
//     console.log("Hello");
// }
// console.log("One");
// console.log("two");
// setTimeout(hello, 2000);
// console.log("three");
// console.log("Four");