const request = require('request');
const secret = require('./config.json');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.notifyGithubIssueToSlack = (req, res) => {

  const body = req.body;

  if (
    body.action !== secret.validation.action ||
    body.issue.labels[0].name !== secret.validation.labelName
  ) return res.send(200);

  const message = makeMessage(body);

  request.post({
    uri: secret.webhook_url,
    headers: {
      'Content-type': 'application/json',
    },
    json: {
      'text': message
    }
  }, function(err, res, body) {
    res.send(200);
    console.log(err, res, body);
  });
};

function makeMessage(body) {
  return [
    body.issue.user.login + ' さんから新しい調査依頼がありました。',
    '```',
    '# ' + body.issue.title,
    body.issue.body,
    '```',
    body.issue.html_url,
  ].join('\n');
}
