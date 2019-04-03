# che-dummy-plugin
Che Plug-in with a simple hello world Theia plug-in.

## Folders
here are the different folders:

### ui
This is a pure Theia plug-in. This plug-in contains a command named `Hello World` that displays an information message.

note: there is a `build.sh` script to build locally the npm plug-in. It can also be tested using the self-hosting mode in theia.

#### requirements: yarn + nodejs

### assembly

In this folder, the Che plug-in is generated (`che-service-plugin.tar.gz`) including:
- che-plugin.yaml file (from `etc/` folder) describing the Che plug-in wrapping the theia plug-in
- che-dependency.yaml file (from `etc/` folder) linking the Theia plug-in to a local file
- hello_world_plugin.theia the Theia plug-in

note: there is a build.sh allowing to recreate this .tar.gz file


## Building

In the root folder, `build.sh` script can build the theia plug-in and create Che plug-in file.

## Using

In Releases section, https://github.com/ws-skeleton/che-dummy-plugin/releases, a new Che plug-in is published for each commit occuring into master.

## CI job
Che plug-in is managed by a Travis-CI job
--> https://travis-ci.org/ws-skeleton/che-dummy-plugin/builds




