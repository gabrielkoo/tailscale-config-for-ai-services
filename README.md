# tailscale-config-for-ai-services
About Using ChatGPT/Gemini with Tailscale with an app connector, from an unrestricted region.

## Setup

- Copy my config file into `https://login.tailscale.com/admin/acls/file`
- Create a virtual machine as an `App Connector` (https://tailscale.com/kb/1281/app-connectors) ~, that isn't blocked by the AI providers~
- Follow the setup setups to add the VM into Tailscale (https://login.tailscale.com/admin/machines/new-linux)
- Confirm the app connectors are working via `https://login.tailscale.com/admin/apps`.

## Why Bother Use This But Not An Always On VPN?
You may have wondered - I could have just used a normal exit node config with tailscale!

If you are turning on a always-on VPN just for the sake of securely connecting to AI resources via an unrestricted region, it might slow down your entire web browsing experience as a whole, also it might affect your access to security-aware services like e-banking or your company resources, which are sensitive to VPN IP addresses. If you are using a split tunnel instead, you are only routing the traffic to the VPN only when it connects to the AI service - this essentially reduces the traffic load on your VPN server, and minimizes the interruption to your other normal browsing activities.

## What Works?

- [x] Google:
  - [x] Google Gemini (both gemini.google.com and mobile app version on iOS)
  - [x] Google AI Studio (aistudio.google.com)
    - [x] Google AI Studio's stream realtime (Web Version)
    - [x] Google Gemini API
  - [x] NotebookLM (notebooklm.google.com)
- [x] OpenAI
  - [x] ChatGPT Web (chatgpt.com and mobile app version on iOS)
  - [x] Sora.com
  - [x] OpenAI documentation (platform.openai.com)

Still troubleshooting:
- [ ] Apple Intelligence on iOS (Ref: https://github.com/tailscale/tailscale/issues/13963)
