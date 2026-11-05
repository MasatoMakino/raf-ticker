# Releasing

This document describes the release process for maintainers with publish permissions.

## Prerequisites

- Push access to the repository
- GPG or SSH signing key configured for Git
- GitHub CLI (`gh`) with authentication
- DevContainer configuration (for quality checks)
- An npm account with publish access to `@masatomakino/raf-ticker` and 2FA enabled

## Steps

### 1. Version bump and tag creation

From the default branch, create a release branch with the version bump and a signed tag:

```
Branch: version/v<version>
Tag:    v<version> (signed)
```

The branch and tag are pushed together to the remote.

### 2. Create and merge the pull request

Create a pull request from the release branch to the default branch. After CI passes and review is complete, merge it.

### 3. Create a GitHub Release

Create a GitHub Release for the tag:

```bash
gh release create v<version> --generate-notes
```

When the release is published, the `Publish to npm` workflow (`npm_publish.yml`) packs the package and stages it on npm with `npm stage publish`. npm does not make a staged version available until a maintainer approves it.

### 4. Approve the staged version on npm

1. Open the log of the `publish` job and note the shasum of the staged package.
2. On npmjs.com, open the staged packages page of your account.
3. Check that the shasum of the staged version matches the shasum from the job log.
4. Click **Approve** and complete the 2FA challenge. To approve from the CLI instead, run `npm stage approve <stage-id>`.

npm checks a staged version for some tens of seconds after staging and rejects an approval during the check. If the approval fails, wait about a minute and try again. If the shasum does not match, do not approve the version.

### Validation

Before the workflow stages the package, its `build` job verifies the following:

- The release tag points to the checked-out commit
- The commit is on the default branch
- The `package.json` version is in `X.Y.Z` format, and the tag is `v<version>`
