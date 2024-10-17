# AWS Service

### Client
``` python
import boto3
client = boto3.client('s3',
    aws_access_key_id=AWA_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=config['default']['region']
    )
```
this is the original boto3 API abstraction
- It provides **low-level** AWS service access
- **All AWS service operations** are supported by clients
- it exposes botocore client to the developer
- it typically maps 1:1 with the AWS service API
- it exposes snake-cased method names (e.g. ListBuckets API => list_buckets method)
typically yields primitive, non-marshalled data (e.g. DynamoDB attributes are dicts representing primitive DynamoDB values)
- requires you to code result pagination
- it is generated from an AWS service description


### Resource
``` python
import boto3
s3 = boto3.resource('s3',
    aws_access_key_id=AWA_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=config['default']['region']
    )
```

this is the newer boto3 API abstraction
- it provides a **high-level**, object-oriented API
- it does **not provide 100% API coverage** of AWS services
- it uses identifiers and attributes
- it has actions (operations on resources)
- it exposes sub-resources and collections of AWS resources
typically yields marshalled data, not primitive AWS data (e.g. DynamoDB attributes are native Python values representing primitive DynamoDB values)
- does result pagination for you
- it is generated from an AWS resource description