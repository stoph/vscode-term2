# Open in iTerm2

Right-click any file or folder in VS Code's explorer and open it directly in iTerm2.

## Features

- Adds "Open in iTerm2" to the context menu when right-clicking files or folders
- Opens a new iTerm2 tab in the folder (or parent folder for files)
- macOS only (requires iTerm2)

## Usage

1. Right-click on any file or folder in the VS Code/Cursor explorer
2. Select "Open in iTerm2"
3. A new iTerm2 tab opens with the terminal in that folder

## Requirements

- macOS
- iTerm2 installed

## Installation

1. Open VS Code
2. Press `Cmd+Shift+P` to open the command palette
3. Type "Install from VSIX" (or install from the marketplace once published)

## Building

To build the extension:

```bash
# Using the build script
./build.sh

# Or using npm
npm run package

# This creates a .vsix file you can install
code --install-extension open-in-iterm2-1.0.0.vsix
cursor --install-extension open-in-iterm2-1.0.0.vsix
```

## Development

To run the extension locally:

```bash
# Open this folder in VS Code/Cursor
# Press F5 (Windows) to launch the extension in debug mode
# Cmd+Shift+D (macOS) / Ctrl+Shift+D (Windows/Linux) to open Run view, then click "Run Extension"
```

## License

MIT

