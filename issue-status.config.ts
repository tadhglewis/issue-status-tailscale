import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "Tailscale Status",
  description: "Status page for Tailscale",
  provider: github({
    owner: "tailscale",
    repo: "issue-status",
  }),
});
