# Releasing

This document describes the release process for maintainers with publish permissions.

## Prerequisites

- Push access to the repository
- GPG or SSH signing key configured for Git
- GitHub CLI (`gh`) with authentication
- DevContainer configuration (for quality checks)

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

### 4. Trigger npm publish

The npm publish workflow is triggered manually via `workflow_dispatch`. It must be dispatched from the tag ref:

**CLI:**

```bash
gh workflow run npm_publish.yml --ref v<version>
```

**Web UI:**

Actions > "Publish to npm" > select the tag from "Use workflow from" dropdown > Run workflow

### Validation

The publish workflow automatically verifies:

- The dispatch ref is a valid semver tag (`v*.*.*`)
- The tag exists and its commit SHA matches the dispatch SHA
- A published (non-draft) GitHub Release exists for the tag
- `package.json` version matches the tag version
