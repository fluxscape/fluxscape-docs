# Setup Version Control

## Introduction

Fluxscape uses Git as its underlying version control system. Version control allows you to:

- Collaborate with team members
- Work with multiple versions of a project in parallel (branches)
- Keep a full history of your project, locally or via a connected Git repository (e.g. GitHub)

Initializing version control always starts with **local Git**.  
Connecting a remote repository is optional and done separately.

---

## Requirements

Before setting up version control, make sure:

- **Git is installed** on your machine  
  Fluxscape relies on your local Git installation.
  - macOS: Git is usually preinstalled
  - Windows: Install from https://git-scm.com
- Your project is stored in a local folder
- (Optional) A GitHub account if you want to collaborate or push to a remote repository

---

## Initialize Version Control (Local Git)

This is the first step and enables Git **locally only**.

1. Open your project in Fluxscape
2. Open the **Version Control** panel
3. Click **Initialize Version Control (Git)**

<div className="ndl-image-with-background">

![](/docs/guides/collaboration/version-control/init-git.png)

</div>

This will:
- Initialize Git in your project folder
- Enable local commits and history
- Not connect to GitHub or any remote service

All changes and history remain on your machine until a remote repository is added.

This setup is ideal for:
- Solo work
- Prototyping
- Working offline
- Getting started with version control

---

## Connect a GitHub Repository (Optional)

Connecting a GitHub repository allows you to collaborate with others and back up your project remotely.

Before connecting a repository in Fluxscape, make sure you either:
- Created a GitHub repository, or
- Were granted full access to an existing repository

Fluxscape always works with a **local project folder**. If you are connecting to an existing repository, it must be cloned to your machine first.

---

### Step 1: Choose or create a GitHub repository

You can connect:
- An existing GitHub repository (for example, one shared with you by a collaborator), or
- A newly created empty repository

:::warning Existing repository requirement
Fluxscape always works with a local project folder. If you are connecting to an existing project and repository, first clone the repository to your machine, import the project into Fluxscape, and then Open the Project.
:::
---

### Step 2: Set up GitHub authentication

GitHub requires authentication when pushing or pulling changes.

Fluxscape uses **GitHub Personal Access Tokens**.

#### Create a Personal Access Token
1. Visit https://github.com/settings/personal-access-tokens (Or go to Github Settings > Developer Settings > Personal Access Tokens)
<div className="ndl-image-with-background">
![](/docs/guides/collaboration/version-control/git-personal-access-token.jpg)
</div>
2. Create a **fine-grained personal access token**
<div className="ndl-image-with-background">
![](/docs/guides/collaboration/version-control/github-new-personal-access-token.png)
</div>
3. Set your Expiration
4. Select the repository you want to connect
5. Grant **Read & write** access to repository "Contents"
<div className="ndl-image-with-background">
![](/docs/guides/collaboration/version-control/github-personal-access-token-config.jpg)
</div>
6. Create the Token & Copy the token (it cannot be viewed again)
<div className="ndl-image-with-background">
![](/docs/guides/collaboration/version-control/github-personal-access-token-copy.jpg)
</div>

---

### Step 3: Configure the Git remote in Fluxscape

1. Open your project in Fluxscape
2. Open the **Version Control** panel
3. Open **Git Origin** settings
4. Paste the GitHub repository URL
5. Paste your Personal Access Token into **GitHub Credentials**
6. Save

<div className="ndl-image-with-background">
![](/docs/guides/collaboration/version-control/git-origin-form.jpg)
</div>

Once configured, Fluxscape can push and pull changes from GitHub.

:::note
If you push local history to a repository that already contains commits, Fluxscape will replace the remote contents with your local project state.

To avoid this, ensure the repository already matches your project structure or use a new empty repository.
:::