//Asynchronous function:making a way to execute first
//-->making a way for other function to execute first

//-->two methods
//1)setTimeOut(cbf . delay-time)
//2)setInterval(cbf, delay-time)
//present inside window object.

// window.setTimeout(() => {
//     console.log("Iam settimeout");
// },5000)

// window.setInterval(() => {
//     console.log("Iam setInterval");
// },3000)

// function main(m,n)
// {
//     setTimeout(() => {
//         for(let i=m; i<n; i++)
//         {
//             console.log(i);
//         }
//     } , 5000)
// }
// main(1 , 10)

// function sample()
// {
//     console.log("no's printed");
// }
// sample()

// function main(m,n)
// {
//     for(let i=m; i<=n; i++)
//     {
//         console.log(i);
//     }
// }
// main(1 , 10000)

// function sample()
// {
//     console.log("no's printed");
// }

//promise
//--> used to look after async function
//--> is an object.

//3phases
//1)pending phase
//2)resolve/fullfill phase
//3)reject phase

// let online = window.navigator.online

// new Promise((resolve , reject) => {
//     setTimeout(() => {
//         if(online === true)
//         {
//             return resolve()
//         }else{

//         }
//     } , 2000)
// })
// .then(() => console.log("online ... ")
// )
// .catch(() => console.log("on-line ... ")
// )
function main(m, n)
{
    new Promise((resolve , reject) =>{
        setTimeout(() => {
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for(let i=m; i<n; i++)
            {
                console.log(i);
            }
            return resolve()
        }, 5000)
    })
    .then(() => console.log("promise is resolved"))
    .catch(() => console.log("error occur"))
}
main(1, 10)