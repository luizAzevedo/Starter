const minhaPromisse = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ok');
    }, 2000);
  });

// minhaPromisse()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// async function executaPromise() {
//   // const response = await minhaPromisse();
//   // console.log(response);

//   console.log(await minhaPromisse());
//   console.log(await minhaPromisse());
//   console.log(await minhaPromisse());
// }


const executaPromise = async () => {
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
};


executaPromise();
