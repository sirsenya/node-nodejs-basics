import { Transform } from "stream";

const transform = async () => {
  const reverseStr = new Transform({
    transform(chunk, encoding, callback) {
      const reversedString = chunk.toString().split("").reverse().join("");
      callback(null, reversedString);
    },
  });

  process.stdin.pipe(reverseStr).pipe(process.stdout);
};

await transform();

//transform.js - implement function that reads data from process.stdin,
//reverses text using Transform Stream and then writes it into process.stdout
