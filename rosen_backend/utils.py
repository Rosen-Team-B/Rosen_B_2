from pymongo import MongoClient

"""
This method creates a client to interact with the local mongodb,
 and can be used in ./videoUpload (or any other apps too)/view.py.
"""
def get_db_handle(db_name, host, port, username, password):
    client = MongoClient(host=host,
                         port=int(port),
                         username=username,
                         password=password
                         )
    db_handle = client['db_name']
    return db_handle, client
