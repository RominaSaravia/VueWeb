import configparser
import os
from dotenv import load_dotenv

load_dotenv()

AWA_ACCESS_KEY_ID = os.getenv('AWA_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')

# Object Upload
import boto3

config = configparser.ConfigParser()
config.read('.config')

client = boto3.client(
    's3',
    aws_access_key_id=AWA_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=config['default']['region']

)

s3 = boto3.resource('s3',
    aws_access_key_id=AWA_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=config['default']['region']

)

for bucket in s3.buckets.all():
        print(bucket.name)

local_file_path = r"./test.txt"
bucket_name = 'romina-bucket'
object_name = 'test.txt'

#client.upload_file(local_file_path, bucket_name, object_name)

#print(f"Object '{object_name}' uploaded successfully to bucket '{bucket_name}'")