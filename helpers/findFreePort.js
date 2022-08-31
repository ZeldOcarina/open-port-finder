import express from "express";
import portfinder from "portfinder";

export default async function findFreePort() {
    try {
        portfinder.setBasePort(3000);    // default: 8000
        portfinder.setHighestPort(4000); // default: 65535

        const freePort = await portfinder.getPortPromise();

        const app = express();
        app.listen(freePort);

        return freePort;
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}