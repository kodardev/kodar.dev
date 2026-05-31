import { execSync, spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 5173;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const viteBin = path.join(root, "node_modules", ".bin", "vite");

function stopExistingDevServer(port) {
  try {
    const pids = execSync(`lsof -ti :${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    })
      .trim()
      .split("\n")
      .filter(Boolean);

    for (const pid of pids) {
      console.log(`Stopping previous dev server (pid ${pid}) on port ${port}…`);
      try {
        process.kill(Number(pid), "SIGTERM");
      } catch {
        // Process may have already exited.
      }
    }

    if (pids.length > 0) {
      execSync("sleep 0.2");
    }
  } catch {
    // Port is free — nothing to stop.
  }
}

stopExistingDevServer(PORT);

const vite = spawn(viteBin, [], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});

vite.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
