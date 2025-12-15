#!/bin/bash

# Build script for VSCode extension

echo "Building Open in iTerm2 extension..."

# Check if vsce is installed
if ! command -v vsce &> /dev/null; then
    echo "vsce not found. Installing @vscode/vsce..."
    npm install -g @vscode/vsce
fi

# Package the extension
vsce package

echo "Build complete! Extension packaged as .vsix file"
echo "To install: code --install-extension open-in-iterm2-1.0.0.vsix"


