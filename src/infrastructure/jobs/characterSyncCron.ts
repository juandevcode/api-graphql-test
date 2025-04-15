import cron from "node-cron";
import { syncCharacters } from "../../application/services/characterSyncService";

export const startCharacterSyncCron = () => {
  console.log("[CRON] Starting character sync cron...");

  // Run once when starting the app
  syncCharacters();

  // Schedule to run every 12 hours
  cron.schedule("0 */12 * * *", async () => {
    console.log("[CRON] Running scheduled character sync cron...");
    await syncCharacters();
  });
};
