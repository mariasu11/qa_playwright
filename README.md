# QA Playwright E2E Framework

This repo shows a scalable, Page-Object-driven Playwright setup against Expedia.com  
(or any site—just update `BASE_URL` and selectors).

## Features
- **Page Objects** under `/pages`  
- **Critical smoke tests** and full suites for stays, flights, cars under `/tests`  
- **GitHub Actions** CI that:
  - Always runs `critical.spec.ts`
  - Splits the rest of the suite in 2 shards for parallel execution
  - Captures HTML report, videos & screenshots on failures

## Quickstart

git clone https://github.com/youruser/qa-playwright.git
cd qa-playwright
npm install

# Optionally point at real or staging Expedia
export BASE_URL=https://www.expedia.com

# Run all tests locally
npx playwright test
