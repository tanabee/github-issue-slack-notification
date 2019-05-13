## About

GitHub の特定のラベルが付いた Issue を登録すると Slack に通知されるツールです。

## Environment

- Google Cloud Functions

## Usage

1. ./config.json.sample を ./config.json にコピー
2. ./config.json の編集
    * webhook_url: Slack incoming webhook url (See https://api.slack.com/incoming-webhooks)
    * validation.action: GitHub issue event (e.g. opened)
    * validation.labelName: GitHub ラベル名
3. Google Cloud Functions へデプロイ
4. GitHub Webhooks の設定
    * 対象のリポジトリを開く
    * `Webhooks` を選択
    * `Add webhook` を選択
        * Payload URL: Cloud Function URL
        * Content type: application/json
        * Let me select individual events > Issues
        * `Add webhook` を選択

## Deploy Command

```
$ gcloud functions deploy noticeGithubIssueToSlack --trigger-http --runtime=nodejs8
```
