const names: Array<string> = ["Max", "Manuel"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 2000);
});
