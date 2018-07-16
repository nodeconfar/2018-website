#!/bin/bash

GIT_DIFF=$(git diff --name-only gh-pages)

# awful hack because social cards doesn't allow relative paths
sed -i "s/https:\/\/2018.nodeconf.com.ar/https:\/\/2018-nodeconfar.now.sh/g" *.html

DEPLOY_DOMAIN=$(now --token $NOW_TOKEN --public --static)
now alias "${DEPLOY_DOMAIN}" 2018-nodeconfar --token $NOW_TOKEN --team nodeconfar
npm run lh $DEPLOY_DOMAIN

GITHUB_PR_COMMENTS="https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"

write_comment_to_pr () {
    curl -H "Authorization: token ${GITHUB_API_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data "{\"body\": \"$1\"}"
}

PR_COMMENT="Travis automatic deployment: ${DEPLOY_DOMAIN}\n"

# get list of modified files with html extension except cfp.html, speakers.html, conduct.html, index.html
XARGS_RESULT=$(echo "$GIT_DIFF" | grep '.html' | grep -v 'cfp.html' | grep -v 'speakers.html' | grep -v 'conduct.html' | grep -v 'index.html' | \
xargs -L1 -I % sh -c "printf \"%;\"; node tools/screenshot.js https://2018-nodeconfar.now.sh/%")

echo "$XARGS_RESULT" | ( while read each
do
  IFS=';' read -r -a line <<< "$each"
  PR_COMMENT+="File modified ${line[0]}: \n ![]($(./tools/imgur.sh ${line[1]}))\n"
done
write_comment_to_pr "$PR_COMMENT" )