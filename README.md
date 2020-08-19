# GitHub Actions YAML
[.github/workflows/android.yml](.github/workflows/android.yml)

# Prerequisites
1. Create a service account with an Editor role at https://console.developers.google.com/iam-admin/serviceaccounts (as written in https://firebase.google.com/docs/test-lab/android/continuous)
2. Download a private key for the service account as JSON.
3. Encode it in Base64.
```shell
cat <private-key>.json | base64 | pbcopy
```
4. Set the encoded string to GitHub Secrets. I name it `GOOGLE_SERVICES_JSON_BASE64`.

# Prerequisites for Firebase App Distribution
1. Download `google-services.json` from Firebase Console.
2. Encode it in Base64.
```shell
cat google-services.json | base64 | pbcopy
```

2. GitHub Secrets.

## Optional (skip it if you don't want to post workflow results to Slack)
1. Go to https://slack.com/apps/A0F7XDUAZ-incoming-webhooks
2. Add Incoming Webhooks
3. `Integration Settings` > `Post to Channel` > (select a channel)
4. Copy `Webhook URL`
5. Paste it in GitHub Secrets. I name it `SLACK_WEBHOOK_URL`.
