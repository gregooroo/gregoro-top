import { delegate } from "../../../config.json";
import { createEndpoint, generateData } from "./helpers";
import Binder from "./Binder";

document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    const binder = new Binder(".table");
    const coin = window.location.pathname.split("/").pop();
    const delegateData = delegate[coin];
    const endpoints = {};
    // Generate endpoints for GET requests
    Object.entries(delegateData).forEach(([net, data]) => {
      const endpoint = createEndpoint(data.wallet, data.publicKey);
      endpoints[net] = endpoint;
    });

    // Generate delegate data and bind it to the table
    const data = await generateData(endpoints);
    binder.bind(data);
  })();
});
