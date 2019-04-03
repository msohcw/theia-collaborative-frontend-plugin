#!/bin/sh
set -e
set -u

if [ -f che-dummy-plugin.tar.gz ]; then
    rm che-dummy-plugin.tar.gz
fi

if [ ! -f ../ui/hello_world_plugin.theia ]; then
    echo "Theia plug-in does not exist. Please compile Theia plug-in first"
    echo "in ../ui directory"
    exit 1
fi

tar cvf che-dummy-plugin.tar -C ../ui hello_world_plugin.theia
cd etc
tar uvf ../che-dummy-plugin.tar .
cd ..
gzip che-dummy-plugin.tar

