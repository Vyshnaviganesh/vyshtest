# Vyshtest — Playwright POM Framework

Automated UI tests for the Heroku login flow built with Playwright and TypeScript, following a 4-layer Page Object Model architecture.

---

## Project Structure

```
vyshtest/
├── components/           # Layer 1 — Raw UI element wrappers
│   ├── InputField.ts     # Wraps <input> elements (fill, getValue)
│   ├── Button.ts         # Wraps <button> elements (click, isVisible)
│   └── Link.ts           # Wraps <a> elements (click, isVisible)
│
├── pages/                # Layer 2 — Element maps for each page
│   ├── LoginPage.ts      # Username field, password field, login button
│   └── SecurePage.ts     # Logout link
│
├── modules/              # Layer 3 — Actions & assertions per feature
│   ├── LoginModule.ts    # navigate(), login(), assertOnPage()
│   └── SecureModule.ts   # logout(), assertOnPage()
│
├── tests/                # Layer 4 — Test specs
│   └── login.spec.ts     # Heroku login flow test
│
└── utils/
    └── vyshtestpractice.ts  # Custom test wrapper with metadata support
```

---

## Tech Stack

- [Playwright](https://playwright.dev/) — browser automation
- TypeScript — type-safe test code
- Node.js 24
- GitHub Actions ready

---

## Prerequisites

- Node.js v22 or higher — install via [nvm](https://github.com/nvm-sh/nvm)
- npm

---

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/Vyshnaviganesh/vyshtest.git
cd vyshtest

# 2. Switch to the correct Node version
nvm use 24

# 3. Install dependencies
npm install

# 4. Install Playwright browsers
npx playwright install
```

---

## Running Tests

```bash
# Run all tests
npx playwright test

# Run with browser visible
npx playwright test --headed

# Run a specific test by Test ID
npx playwright test --grep "@TC_LOGIN_001" --headed

# Run by group/tag
npx playwright test --grep "@smoke"
npx playwright test --grep "@login"

# View HTML report after run
npx playwright show-report
```

---

## Test Metadata

Every test is written using the `vyshtestpractice` wrapper which enforces structured metadata:

```typescript
vyshtestpractice({
  testId:   'TC_LOGIN_001',
  priority: 'P0',
  author:   'vyshnavihg',
  group:    ['login', 'smoke'],
  title:    'Validate heroku app login flow',
}, async ({ page }) => {
  // test steps
});
```

| Field | Purpose |
|---|---|
| `testId` | Unique test identifier — used with `--grep` |
| `priority` | P0 / P1 / P2 — indicates test importance |
| `author` | Who wrote the test |
| `group` | Tags for grouping — used with `--grep` |
| `title` | Human-readable test name shown in reports |

---

## Test Coverage

| Test ID | Title | Priority | Group |
|---|---|---|---|
| TC_LOGIN_001 | Validate heroku app login flow | P0 | login, smoke |

---

## App Under Test

[The Internet — Herokuapp](https://the-internet.herokuapp.com/login)

Credentials used:
- **Username:** `tomsmith`
- **Password:** `SuperSecretPassword!`
