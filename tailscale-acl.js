{
	"tagOwners": {
		"tag:ai-connector": [
			"autogroup:member",
		],
	},
	"autoApprovers": {
		"routes": {
			"0.0.0.0/0": ["tag:ai-connector"],
			"::/0":      ["tag:ai-connector"],
		},
	},
	"acls": [
		{"action": "accept", "src": ["*"], "dst": ["*:*"]},
	],
	"nodeAttrs": [
		{
			"target": ["*"],
			"app": {
				"tailscale.com/app-connectors": [
					{"name": "openai", "connectors": ["tag:ai-connector"], "domains": [
						"openai.com",
						"auth.openai.com",
						"*.openai.com",
						"chatgpt.com",
						"*.chatgpt.com",
						"*.chat.openai.com",
						"*.chat.openai.com.cdn.cloudflare.net",
						"openai.com.cdn.cloudflare.net",
						"*.openai.com.cdn.cloudflare.net",
						"sora.com",
					]},
					{
						"name":       "google-ai",
						"connectors": ["tag:ai-connector"],
						"domains": [
							"gemini.google.com",
							"aistudio.google.com",
							"alkalimakersuite-pa.clients6.google.com",
							"webchannel-alkalimakersuite-pa.clients6.google.com",
							"ai.google.dev",
							"generativelanguage.googleapis.com",
						],
					},
					{
						"name":       "notebook-lm",
						"connectors": ["tag:ai-connector"],
						"domains": [
							"notebooklm.google.com",
							"notebooklm.google",
						],
					},
					{
						"name":       "apple-intelligence",
						"connectors": ["tag:ai-connector"],
            // FIXME: Remove this line before copying into your "Access Controls" tab in tailscale.
            // This list is based on 
            // 1. https://support.apple.com/en-us/101555#:~:text=Apple%20Intelligence%2C%20Siri%2C%20and%20Search
            // 2. My own experience.
            // It still doesn't fully work well, refer to https://github.com/tailscale/tailscale/issues/13963.
						"domains": [
							"*.itunes.apple.com",
							"*.icloud.apple.com",
							"*.apple.com",
							"*.icloud.com",
							"*.ls.apple.com",
							"*.g.aaplimg.com",
							"*.v.aaplimg.com",
							"*.apple-dns.net",
							"*.fe2.apple-dns.net",
							"*.mask.apple-dns.net",
							"*.idms-apple.com.akadns.net",
							"*.ls-apple.com.akadns.net",
							"*.itunes-apple.com.akadns.net",
							"apple-relay.fastly-edge.com",
							"apple-relay.cloudflare.com",
							"cp4.cloudflare.com",
							"guzzoni.apple.com",
							"*.smoot.apple.com",
						],
					},
				],
			},
		},
	],
}
