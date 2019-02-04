import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 100,
    duration: "60s"
};

export default function() {
    http.get("https://datalight.me");
    sleep(1);
    http.get("https://datalight.me/market");
    sleep(1);
};