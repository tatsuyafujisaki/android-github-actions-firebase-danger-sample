# Overview
* This sample is to demonstrate how to link the following to GitHub Actions.
  * Firebase Test Lab (for instrumented unit tests)
  * Firebase App Distribution
  * Slack

# GitHub Actions YAML
[.github/workflows/android.yml](.github/workflows/android.yml)

# Preparation
## for Firebase Test Lab (for instrumented unit tests)
1. Copy your Firebase Project ID from Firebase Console, and add it to GitHub Secrets as `FIREBASE_PROJECT_ID`.
2. Create a service account with an `Editor` role at https://console.developers.google.com/iam-admin/serviceaccounts
    * cf. https://firebase.google.com/docs/test-lab/android/continuous)
3. Download a private key for the service account as JSON.
4. Encode it in Base64 in your favorite way. For example:
```shell
cat <private-key>.json | base64
```
5. Add the encoded string to GitHub Secrets as `SERVICE_ACCOUNT_KEY_BASE64`.

## for Firebase App Distribution
1. Copy your Firebase app ID from Firebase Console, and add it to GitHub Secrets as `FIREBASE_APP_ID`.
2. Install Firebase CLI on your computer.
3. Run `firebase login:ci` on Terminal/Console, and a Firebase token will be printed.
    * cf. https://firebase.google.com/docs/cli
4. Add the token to GitHub Secrets as `FIREBASE_TOKEN`.

## for Slack
1. Go to https://slack.com/apps/A0F7XDUAZ-incoming-webhooks
2. Add Incoming Webhooks
3. `Integration Settings` > `Post to Channel` > (select a channel)
4. Copy `Webhook URL`.
5. Paste it in GitHub Secrets. I name it `SLACK_WEBHOOK_URL`.

# Appendix (optional)
## How to use `google-services.json` securely in a public repository
1. Download `google-services.json` from Firebase Console.
2. Copy the raw content to GitHub Secrets as, let's say, `GOOGLE_SERVICES_JSON`.
3. Add the following to your workflow.
```yaml
- run: echo $GOOGLE_SERVICES_JSON > app/google-services.json
  env:
    GOOGLE_SERVICES_JSON: ${{ secrets.GOOGLE_SERVICES_JSON }}
```
