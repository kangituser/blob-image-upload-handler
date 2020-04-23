

## Running

Start the server:

```bash
npm start
```

 **GET** blob: [http://localhost:3000/get/thumbnail/byname/:blobName](http://localhost:3000/get/thumbnail/byname/:blobName) 
 NAME is a param.

**POST** blob: [http://localhost:3000/upload/](http://localhost:3000/upload/)

REQ: FormData object `{image: 'image'}`

RES: on success JSON 
```{
    message: "",
    blobName: "",
    containerName: ""
}```
on failure JSON: 
```{
    "code": "",
    "field": "",
    "storageErrors": Array
} ```

**DELETE** blob: [http://localhost:3000/delete/:blobName](http://localhost:3000/delete/:blobName)

## Adding a connection string

Navigate to the [Azure Portal](https://portal.azure.com) and copy the connection string from your storage account (under **Settings** > **Access keys**) in to the `.env.example` file. Once you have pasted your connection string in to the file, rename the file from `.env.example` to `.env`.

