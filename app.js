import findFreePort from "./helpers/findFreePort.js";

const port = await findFreePort();

console.log(port);
process.exit(0);