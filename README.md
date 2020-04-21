

## Running

Start the server:

```bash
npm start
```

 GET image: [http://localhost:3000/get/thumbnail/byname/NAME](http://localhost:3000/get/thumbnail/byname/NAME) 
 NAME is a param.

POST image: [http://localhost:3000/upload/](http://localhost:3000/upload/) with an image in FormData file format.

## Adding a connection string

Navigate to the [Azure Portal](https://portal.azure.com) and copy the connection string from your storage account (under **Settings** > **Access keys**) in to the `.env.example` file. Once you have pasted your connection string in to the file, rename the file from `.env.example` to `.env`.

