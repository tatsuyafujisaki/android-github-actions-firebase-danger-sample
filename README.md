# GitHub Actions workflow for Android
[.github/workflows/android.yml](.github/workflows/android.yml)

# What this workflow demonstrates
1. Clone a GitHub repository
2. Set up JDK 1.8
3. Run `./gradlew build`, which runs build and unit tests
4. Run `./gradlew connectedAndroidTest`, which runs instrumented tests on an Android emulator, thanks to https://github.com/marketplace/actions/android-emulator-runner
5. Notify Slack of the result, thanks to https://github.com/marketplace/actions/action-slack

# Prerequisites
## Add Incoming Webhooks on slack.com
1. Go to https://slack.com/apps/A0F7XDUAZ-incoming-webhooks
2. Add Incoming Webhooks
3. `Integration Settings` > `Post to Channel` > (select a channel)
4. Copy `Webhook URL`

## Add a secret for Slack Incoming Webhooks on github.com
1. Go to the Secrets page of your GitHub repository (i.e. https://github.com/{your-username}/{your-repository-name}/settings/secrets)
2. Add a secret whose name is `SLACK_WEBHOOK_URL` and value is the Webhook URL copied from slack.com
