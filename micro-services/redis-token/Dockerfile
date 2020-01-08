FROM python:3

ADD . /app
WORKDIR /app
RUN pip install -r requirements.txt
RUN ./compile.sh

CMD [ "python", "./server.py" ]