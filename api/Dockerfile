FROM python:3.6

EXPOSE 5000

WORKDIR /api

COPY requirements.txt /api
RUN pip install -r requirements.txt

COPY api.py /api
COPY . /api
CMD python api.py

