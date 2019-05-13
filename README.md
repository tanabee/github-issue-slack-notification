## About

It can notice that issue created event on GitHub to Slack.

## Environment

- Google Cloud Functions

## Usage

1. Copy ./config.json.sample to ./config.json
2. Edit ./config.json
    - webhook_url: Slack incoming webhook url
    - validation.action: GitHub issue event (e.g. opened)
    - validation.labelName: GitHub label name
3. Deploy to Google Cloud Functions

## Deploy Command

```
$ gcloud functions deploy noticeGithubIssueToSlack --trigger-http --runtime=nodejs8
```
