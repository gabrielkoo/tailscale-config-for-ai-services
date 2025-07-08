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
- [x] Anthropic API (Thanks [@alexlau811](http://github.com/alexlau811/))
- [ ] Apple Intelligence, (Ref: https://github.com/tailscale/tailscale/issues/13963)
  - [ ] on macOS
  - [ ] on iOS
  

## On the App Connector Virtual Machine

If you are picking AWS, be sure to use Lightsail instead of an EC2 instance!

​When configuring a virtual machine (VM) for VPN purposes, AWS Lightsail offers a compelling advantage over EC2 due to its predictable pricing and generous data transfer allowances. For instance, the $3.50 per month Linux/Unix plan includes 1 TB of data transfer, encompassing both inbound and outbound traffic, which is particularly beneficial for VPN applications that typically involve substantial data movement. In contrast, AWS EC2 charges separately for data transfer, with outbound data transfer to the internet costing $0.09 per GB beyond the free tier, which only includes the first GB free. This means that with EC2, transferring 1 TB of data out could result in significant additional costs, making Lightsail a more cost-effective and straightforward choice for setting up a VPN server.
