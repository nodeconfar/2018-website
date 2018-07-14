#!/bin/bash
DEPLOY_DOMAIN=$(now --token $NOW_TOKEN --public --static)
npm run lh $DEPLOY_DOMAIN

GITHUB_PR_COMMENTS=https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments
curl -H "Authorization: token ${GITHUB_API_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data '{"body":"Travis automatic deployment: '${DEPLOY_DOMAIN}'"}'