const myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case "--help":
    console.log("help command");
    break;
  default:
    console.log("Sorry, that is not something I know how to do.");
}
