# Mural Codex

Welcome to **Mural Codex**! This project serves as the comprehensive collection of technical documentation, tutorials, and best practices for the Mural Táctil engineering team. It is updated regularly to help you navigate through various technologies and workflow standardizations.

## 📚 About The Project

This website is a static documentation site built using [Docusaurus](https://docusaurus.io/).

The goal of the **Codex** is to provide:
-   **Centralized Knowledge**: A single source of truth for developer guides.
-   **Tutorials**: Step-by-step instructions for common tasks (e.g., Docker, Docusaurus).
-   **Best Practices**: Standardized procedures and coding guidelines.

## 🚀 Tech Stack

-   **Framework**: [Docusaurus](https://docusaurus.io/)
-   **Language**: TypeScript, MDX
-   **Package Manager**: [Bun](https://bun.sh/)

## 🛠 Prerequisites

This project uses [Bun](https://bun.sh/) as the package manager and runtime. Please ensure you have it installed before proceeding.

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Installation

Install the project dependencies:

```bash
bun install
```

### Local Development

Start the local development server:

```bash
bun start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## 📦 Build & Deployment

### Build

Generate the static content into the `build` directory:

```bash
bun run build
```

The content in the `build` directory can be served using any static content hosting service.

### Deployment

**Using SSH:**

```bash
USE_SSH=true bun run deploy
```

**Not using SSH:**

```bash
GIT_USER=<Your GitHub username> bun run deploy
```

If you are using GitHub Pages for hosting, this command identifies the environment and pushes the build to the `gh-pages` branch.

## 🤝 Contributing

We welcome contributions! If you want to add a new guide or improve an existing one:

1.  Navigate to the `docs` folder.
2.  Create a new Markdown (`.md`) or MDX (`.mdx`) file.
3.  Add your content.
4.  Submit a Pull Request.