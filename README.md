# GitHub Actions YAML
[.github/workflows/android.yml](.github/workflows/android.yml)

# Prerequisites
1. Create a service account with an Editor role at https://console.developers.google.com/iam-admin/serviceaccounts (as written in https://firebase.google.com/docs/test-lab/android/continuous)
2. Create and download a private key for the service account as JSON.
3. Encode the whole JSON file in Base64 in your favorite way. e.g.:
```shell
cat downloaded.json | base64
```
4. Set the encoded string to GitHub Secrets. I name it `SERVICE_ACCOUNT_KEY_BASE64`.

## Optional (skip it if you don't want to post workflow results to Slack)
1. Go to https://slack.com/apps/A0F7XDUAZ-incoming-webhooks
2. Add Incoming Webhooks
3. `Integration Settings` > `Post to Channel` > (select a channel)
4. Copy `Webhook URL`
5. Paste it in GitHub Secrets. I name it `SLACK_WEBHOOK_URL`.
