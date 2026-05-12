import * as fs from "fs";
import * as path from "path";

export function start() {
  console.log("🚀 Core system starting...");
  initialize();
  orchestrate();
}

function initialize() {
  console.log("⚙️ Initializing modules...");
}

function orchestrate() {
  console.log("🔗 Orchestrating system...");

  const systemPath = path.join(__dirname, "..", "system.json");

  if (!fs.existsSync(systemPath)) {
    console.log("⚠️ No system.json found — running standalone");
    return;
  }

  const system = JSON.parse(fs.readFileSync(systemPath, "utf-8"));

  system.related.forEach((repo: string) => {
    console.log(`→ would connect to ${repo}`);
  });
}

start();
