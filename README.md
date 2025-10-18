# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔌 MCP Configuration

This project uses [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers for Claude Code integration. The `.mcp.json` file configures two MCP servers:

### Vibe CMS MCP
Connects to the Vibe CMS instance to manage content programmatically. This allows Claude Code to create collections, manage content items, and upload files directly to the CMS.

### Chrome DevTools MCP
Enables browser automation for testing the live development server at `localhost:4321`. This allows Claude Code to navigate pages, take screenshots, and verify the site works correctly.

### Setup

Create a `.mcp.json` file in the project root (this file is gitignored):

```json
{
  "mcpServers": {
    "vibe-cms-mcp": {
      "type": "http",
      "url": "https://vibe-cms-app-prod-qoovy.ondigitalocean.app/mcp/",
      "headers": {
        "X-API-Key": "YOUR_API_KEY_HERE"
      }
    },
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest"]
    }
  }
}
```

**Important**: Replace `YOUR_API_KEY_HERE` with your actual Vibe CMS API key. Contact the project maintainer to obtain an API key.

**Note**: If Chrome/Chromium is not in your system PATH, you may need to add `--executablePath=/path/to/chrome` to the chrome-devtools args array.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
