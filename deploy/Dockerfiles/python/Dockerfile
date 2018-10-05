# python 基础镜像

FROM python:3.6.4-jessie
WORKDIR /opt/src/thtr/back-end
EXPOSE 8000
COPY ./requirements.txt /opt/src/thtr/back-end
RUN pip install --upgrade pip \
    &&  pip install -r /opt/src/thtr/back-end/requirements.txt --no-cache-dir
VOLUME ['/opt/script', '/opt/log', '/opt/data', '/opt/src']
CMD gunicorn -w 4 -b 0.0.0.0:8000 thtr.wsgi:application
