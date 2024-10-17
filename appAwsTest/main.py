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

local_file_path = r"./test2.txt"
bucket_name = 'romina-bucket'
object_name = 'test2.txt'

client = boto3.client(
    's3',
    aws_access_key_id=AWA_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=config['default']['region']

)

#client.upload_file(local_file_path, bucket_name, object_name)

s3 = boto3.resource('s3',
    aws_access_key_id=AWA_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=config['default']['region']

)

bucket = s3.Bucket('romina-bucket')

#s3.Bucket(bucket_name).upload_file(local_file_path, object_name)


for obj in bucket.objects.all():
        print('-',obj )

# s3.Bucket('mybucket').download_file('hello.txt', '/tmp/hello.txt')

response = bucket.delete_objects(
    Delete={
        'Objects': [
            {
                'Key': 'test2.txt'
            },
        ],
        'Quiet': True
    },
    RequestPayer='687401868610',
    ChecksumAlgorithm='CRC32'
)

print(response)

#print(f"Object '{object_name}' uploaded successfully to bucket '{bucket_name}'")