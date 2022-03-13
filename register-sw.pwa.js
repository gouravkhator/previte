import { registerSW } from "virtual:pwa-register";

export async function registerServiceWorker() {
  if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log(
          "Service worker registered successfully. Now, this webapp has become a PWA..",
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const intervalMS = 60 * 60 * 1000;

  const updateSW = registerSW({
    onRegisterError(err) {
      console.error(err);
    },
    onOfflineReady() {},
    onRegistered(r) {
      r &&
        setInterval(() => {
          r.update();
        }, intervalMS);
    },
  });

  await updateSW();
}
