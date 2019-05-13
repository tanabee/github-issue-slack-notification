## About

It can notice that issue created event on GitHub to Slack.

## Environment

- Google Cloud Functions

## Usage

1. Copy ./config.json.sample to ./config.json
2. Edit ./config.json
    * webhook_url: Slack incoming webhook url (See https://api.slack.com/incoming-webhooks)
    * validation.action: GitHub issue event (e.g. opened)
    * validation.labelName: GitHub label name
3. Deploy to Google Cloud Functions
4. Setting GitHub Webhooks
    * Open repo
    * Select `Webhooks`
    * Select `Add webhook`
        * Payload URL: Cloud Function URL
        * Content type: application/json
        * Let me select individual events > Issues
        * Add webhook

## Deploy Command

```
$ gcloud functions deploy noticeGithubIssueToSlack --trigger-http --runtime=nodejs8
```
