
from fastapi import FastAPI
from pydantic import BaseModel
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="saas"
)
mycursor = mydb.cursor()
app = FastAPI()

@app.get('/')
def root_api():
    return {"message" : "UHackathon winner=Swagriculture"}

class data(BaseModel):
    minage:int
    maxage:int
    runs:int
    averageruns:int
    half:int
    centuries:int



@app.get('/dataa')
def fetch_latest():
    latest_json = {}
    latest_json["entry"] = []
   
    sql_latest = "SELECT * FROM data "
    mycursor.execute(sql_latest)
    results = mycursor.fetchall()
    for row in results:
        latest_json["entry"].append(row[0])
    return latest_json