#!/bin/bash
DEPLOY_DOMAIN=$(now --token $NOW_TOKEN --public --static)
npm run lh $DEPLOY_DOMAIN

GITHUB_PR_COMMENTS=https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments

write_comment_to_pr () {
    curl -H "Authorization: token ${GITHUB_API_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data "{\"body\": \"$1\"}"
}

write_comment_to_pr "Travis automatic deployment: ${DEPLOY_DOMAIN}"

# get list of modified files with html extension except cfp.html, speakers.html, conduct.html, index.html
XARGS_RESULT=$(git diff --name-only gh-pages | grep '.html' | grep -v 'cfp.html' | grep -v 'speakers.html' | grep -v 'conduct.html' | grep -v 'index.html' | \
xargs -L1 -I % sh -c "printf \"%;\"; node tools/screenshot.js $DEPLOY_DOMAIN/%")

echo "$XARGS_RESULT" | while read each
do
  IFS=';' read -r -a line <<< "$each"
  write_comment_to_pr "File modified ${line[0]}: \n ![]($(./tools/imgur.sh ${line[1]}))"
done