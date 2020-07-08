const minhaPromisse = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ok');
    }, 2000);
  });


// com then
minhaPromisse()
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });


// com async e await
async function executaPromise() {
  const response = await minhaPromisse();
  console.log(response);

  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
}


// com async e await
const executaPromise = async () => {
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
};


executaPromise();
