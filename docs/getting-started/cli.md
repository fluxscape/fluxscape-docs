---
title: FluxScape CLI
hide_title: true
---

# FluxScape CLI

The **FluxScape CLI** provides a streamlined way to manage, build, and deploy FluxScape projects directly from your terminal.  
It bridges **low-code creation** with **modern developer workflows**, giving both low-coders and pro developers speed, automation, and full control.



## Installation

Install globally, or use `npx` without a global install.

```bash
npm i -g fluxscape
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



## Why the CLI Matters

For **low-coders**: instantly turn visual builds into deployable app, no additional setup or DevOps knowledge required.  
For **developers**: automate builds and deploys, integrate with **CI/CD pipelines**, and keep environments consistent and versioned.

> By combining low-code speed with developer-grade precision, the FluxScape CLI helps teams build faster, test smarter, and deploy with confidence.
