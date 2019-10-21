const p = new Promise((resolve, reject) => {
  throw new Error("error");
});

//First Example
p.then(() => console.log("sub promise"))
  .catch(err => console.error(err))
  .catch(err => console.error("final catch"));

//Second Example
p.catch(err => {
  console.error(err);
  return Promise.reject(err);
})
  .then(() => console.log("sub promise"))
  .catch(err => console.error("final catch"));
