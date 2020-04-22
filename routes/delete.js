if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

const
      express = require('express')
    , router = express.Router()

    , azureStorage = require('azure-storage')
    , blobService = azureStorage.createBlobService()

    , containerName = 'image'
;

const handleError = (err, res) => {
    res.status(500).send(err)
};


router.delete('/:blobName', (req, res) => {
    const
          blobName = req.params.blobName
    ;

    blobService.deleteBlob(containerName, blobName, err => {
        if(err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send({ 
            message: 'File deleted from Azure Blob storage',
            blobName: blobName,
            containerName: containerName
        });
    });
});

module.exports = router;