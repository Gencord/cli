import { table } from "table";

const args = process.argv.slice(2);

switch (args[0]) {
  case "--help":
    let data, output;

    data = [
      ["0A", "0B", "0C"],
      ["1A", "1B", "1C"],
      ["2A", "2B", "2C"],
    ];

    output = table(data);

    console.log(output);

    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
}
