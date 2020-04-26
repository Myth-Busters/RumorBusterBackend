FROM python:3.6

EXPOSE 5000

WORKDIR /src

COPY requirements.txt /src
RUN pip install -r requirements.txt

COPY main.py /src
COPY . /src
CMD python main.py
