---
title: FluxScape CLI
hide_title: true
---

# FluxScape CLI

The **FluxScape CLI** provides a streamlined way to manage, build, and deploy FluxScape projects directly from your terminal.  
It bridges **low-code creation** with **modern developer workflows**, giving both low-coders and pro developers speed, automation, and full control.

## Requirements

Before installing the CLI, ensure that you have the following installed:

- **Node.js** v18 or newer
- **npx** v9 or newer
- A valid **FluxScape account**

## Installation

Install globally, or use `npx` without a global install.

```bash
npx i -g fluxscape
```

or

```bash
npx fluxscape help
```

Verify your installation:

```bash
fluxscape --version
```

## Login

Authenticate your environment with your FluxScape account:

```bash
npx fluxscape auth login
```

Expected result:

```text
Login successful. Welcome, <your name>!
```

:::note
Authentication enables account-scoped operations such as listing deploy targets and deploying apps.
:::

## Build a Project

Create a production-ready build:

```bash
npx fluxscape build --out ./dist
```

Build from a specific source directory:

```bash
npx fluxscape build --out ./dist --src ./my-project
```

## Run Locally

Start a local server and preview your app:

```bash
npx fluxscape start --port 4000
```

Then open your browser and navigate to:

```text
http://localhost:4000
```

## Deployment

List available deployment targets for your account:

```bash
fluxscape deploy list
```

Deploy to a specific URL:

```bash
fluxscape deploy to --url my-app.fluxscape.io
```

Optional flags:

```bash
# Pin a runtime and version
fluxscape deploy to --url my-app.fluxscape.io --runtime react@1.0.0

# Use a local runtime path
fluxscape deploy to --url my-app.fluxscape.io --runtimePath ./local-runtime

# Deploy from a specific project directory
fluxscape deploy to --url my-app.fluxscape.io --src ./my-project
```

## Runtime Management

List available versions for a runtime (local or remote):

```bash
fluxscape runtime list react
```

## GitHub Actions

The following GitHub Actions workflow automatically deploys the app on every commit to the main branch using Fluxscape.

> Note:
>
> - `FLUXSCAPE_TOKEN` is an API token generated from your Fluxscape account.
> - Replace `"your-site.fluxscape.app"` with the domain you want to deploy to.

```yaml
name: Publish Nightly

on:
  push:
    branches:
      - main # runs on push to main branch

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: "https://registry.npxjs.org"

      - name: Fluxscape Authenticate
        run: |
          npx fluxscape auth set-token "${{ secrets.FLUXSCAPE_TOKEN }}"

      - name: Deploy with Fluxscape CLI
        run: |
          npx fluxscape deploy to --url "your-site.fluxscape.app" --src "."
```
