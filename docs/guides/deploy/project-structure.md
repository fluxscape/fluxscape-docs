---
title: Project Structure
hide_title: true
---

# Project Structure

## Lessons

When doing the lessons a project is created locally saving the state of the lesson and the changes. When having any issues of opening/resting etc issues you can delete the lesson and restart it.

Windows Path:
```
%AppData%\Fluxscape\lessons
```

MacOS Path:
```
~/Library/Application Support/Fluxscape/lessons
```

## What is deployed?

All files in the project folder is deployed to the frontend with a few exceptions.

List of a few files that are ignored:
```
.gitattributes
.gitignore
project.json
```

List of a few folders that are ignored:
```
.git/
.noodl/
```

_These lists might not be complete._

When deploying the app Noodl will also add a few new files for example React library.

## Legacy Noodl projects

You can find the project folders at this path:

Windows Path:
```
%AppData%\Noodl\projects
```

MacOS Path:
```
~/Library/Application Support/Noodl/projects
```

You can also open the project via this Button inside Noodl, in the project settings.

<div className="ndl-image-with-background l">

![](/docs/guides/deploy/open_project_folder.png)

</div>
