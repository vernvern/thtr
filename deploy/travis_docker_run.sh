(docker inspect thtr_python) > /dev/null 2>&1
if [ "$?"v = "0"v ] ; then
    echo 'docker rm thtr_python:'
    docker rm -f thtr_python
fi

docker run --name thtr_python -d -v /home/travis/build/vernvern/thtr/log:/opt/log -v  /home/travis/build/vernvern/thtr:/opt/src/thtr thtr:python-3.6.4
