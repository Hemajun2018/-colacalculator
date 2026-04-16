#!/usr/bin/env bash
# Ping IndexNow to notify Bing / Yandex / Naver / Seznam of URL updates.
# Run after pushing a monthly COLA data update (Vercel deploy completes ~1-2 min after push).

set -euo pipefail

KEY="f08cb41ecb7c4c6d8d09ef91e3ca366a"
HOST="colacalculator.com"
KEY_LOCATION="https://${HOST}/${KEY}.txt"

URLS=(
  "https://colacalculator.com"
  "https://colacalculator.com/2027-social-security-cola-forecast"
  "https://colacalculator.com/low-social-security-cola-2027"
  "https://colacalculator.com/social-security-changes-2027"
  "https://colacalculator.com/social-security-cola-history"
  "https://colacalculator.com/how-is-social-security-cola-calculated"
  "https://colacalculator.com/about"
)

URL_JSON=$(printf '"%s",' "${URLS[@]}")
URL_JSON="[${URL_JSON%,}]"

PAYLOAD=$(cat <<EOF
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": ${URL_JSON}
}
EOF
)

echo "Pinging IndexNow with ${#URLS[@]} URLs..."
HTTP_STATUS=$(curl -s -o /tmp/indexnow-response.txt -w "%{http_code}" \
  -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}")

echo "HTTP ${HTTP_STATUS}"
cat /tmp/indexnow-response.txt
echo

case "${HTTP_STATUS}" in
  200|202)
    echo "OK — Bing/Yandex will recrawl within minutes."
    ;;
  *)
    echo "WARNING: unexpected status. See response above."
    exit 1
    ;;
esac
