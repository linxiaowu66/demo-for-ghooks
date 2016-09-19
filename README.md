## Why we need this ?
Your git hooks stay inside the .git folder. Since this folder contains your local project versioning history, it is not versioned. The problem is that even if you create a hook file, you can’t commit this file and push it to your remote, so this file won’t exist for the rest of your team.

## What is the purpose ?

1. using the (ghooks)[https://github.com/gtramontina/ghooks]
2. define the correction status and do what you want to do
   2.1. use eslint to check your code in the pre-commit status
   2.2. generate the default commit log in the prepare-commit-msg status
   2.3. verify the commit log format whether it is meet with our defined style


## Any extend ?
If you want to do more thing in others status, you can git clone this and test what you want to do.
