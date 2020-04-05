# GitHub Actions YAML
[.github/workflows/main.yml](.github/workflows/main.yml)

# Prerequisites
1. Create a service account with an Editor role at https://console.developers.google.com/iam-admin/serviceaccounts (as written in https://firebase.google.com/docs/test-lab/android/continuous)
2. Create and download a private key for the service account as JSON.
3. Encode the whole JSON file in Base64 in your favorite way. For example:
```shell
cat downloaded.json | base64
```
4. Set the encoded string to GitHub Secrets with the name SERVICE_ACCOUNT_KEY_BASE64.

## Optional (Necessary if you want to post the results to Slack)
### Add Incoming Webhooks on slack.com
1. Go to https://slack.com/apps/A0F7XDUAZ-incoming-webhooks
2. Add Incoming Webhooks
3. `Integration Settings` > `Post to Channel` > (select a channel)
4. Copy `Webhook URL`

### Add a secret for Slack Incoming Webhooks on github.com
1. Go to the Secrets page of your GitHub repository (i.e. https://github.com/{your-username}/{your-repository-name}/settings/secrets)
2. Add a secret whose name is `SLACK_WEBHOOK_URL` and value is the Webhook URL copied from slack.com
