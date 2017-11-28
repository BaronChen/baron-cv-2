var cmd = require('node-cmd');

cmd.get(`aws s3 sync build s3://${process.env.S3_HOSTING_BUCKET} --delete`,
    function (err, data, stderr) {
        if (!err) {
            console.log(data)
        } else {
            console.log('error', err)
        }

    }
);