
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    console.log("Theia Collaborative Frontend Plugin loaded v1.0");
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.showInformationMessage('Hello World!');
    });
    console.log(theia.workspace.name)
    theia.workspace.onDidOpenTextDocument(e => {
        theia.window.showInformationMessage(e.fileName);

        // Process file name
        // TODO this should be done more correctly and not adhoc
        let filePath = e.fileName.split("/")
        let swpFileName = "." + filePath[filePath.length - 1] + ".swp"
        console.log("Looking for: " + swpFileName)

        theia.workspace.findFiles(swpFileName).then(function(swpfiles) {
            console.log(swpfiles)
            if (swpfiles.length > 0) { // swap file exists
                theia.window.showInformationMessage("Swp found");
            } else { // need to create swap file
                theia.window.showInformationMessage("Swp not found");
                console.log(e.uri)
                createSwpFile(filePath, e.uri)
            }
        })
    });
}

function createSwpFile(filePath: string[], originalFile: theia.Uri) {
    let originalFileName = filePath[filePath.length - 1]
    let swpFileName = "." + filePath[filePath.length - 1] + ".swp"

    //originalFile._formatted = originalFile._formatted.replace(originalFileName, swpFileName)
    //originalFile._fsPath = originalFile._formatted.replace(originalFileName, swpFileName)
    //originalFile.path = originalFile._formatted.replace(originalFileName, swpFileName)



    //let swpFilePath = filePath.slice(0, -1).join("/") + "/" + swpFileName;
    //console.log("Writing " + swpFilePath);

    let createFileOp = new theia.WorkspaceEdit()
    createFileOp.createFile(theia.Uri.parse(originalFile.toString().replace(originalFileName, swpFileName)), { overwrite: true })
    createFileOp.insert(originalFile, new theia.Position(0, 0), "Test applyEdit")
    // createFileOp.renameFile(originalFile, originalFile.with({path: swpFilePath}), {overwrite: true})

    theia.workspace.applyEdit(createFileOp).then(function(ok) {
        console.log("Applied edit")
        console.log(createFileOp)
        console.log(ok)
    })
}

export function stop() {

}
