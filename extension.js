const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

function activate(context) {
    let disposable = vscode.commands.registerCommand('open-in-iterm2.openFolder', (uri) => {
        if (!uri || !uri.fsPath) {
            vscode.window.showErrorMessage('No file or folder selected');
            return;
        }

        let folderPath = uri.fsPath;
        
        // If it's a file, get the parent directory
        if (fs.statSync(folderPath).isFile()) {
            folderPath = path.dirname(folderPath);
        }

        const appleScript = `
            tell application "iTerm"
                activate
                try
                    select first window
                    set newTab to (create tab with default profile)
                    tell current session of newTab
                        write text "cd ${folderPath.replace(/"/g, '\\"')}"
                    end tell
                on error
                    set newWindow to (create window with default profile)
                    tell current session of newWindow
                        write text "cd ${folderPath.replace(/"/g, '\\"')}"
                    end tell
                end try
            end tell
        `;

        exec(`osascript -e '${appleScript.replace(/'/g, "'\\''")}'`, (error) => {
            if (error) {
                vscode.window.showErrorMessage(`Failed to open iTerm2: ${error.message}`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};


