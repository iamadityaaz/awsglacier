var AWS = require('aws-sdk/');

function runFun() {
  const credentials = new AWS.CredentialProviderChain();
  const client = new AWS.Glacier(credentials);
  client.endpoint('https://glacier.ap-south-1.amazonaws.com/');

  try {
    client.deleteArchive(
      { accountId: '', archiveId: '', vaultName: '' },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

runFun();
