var AWS = require('aws-sdk/');

function runFun() {
  const credentials = new AWS.CredentialProviderChain(); // TODO confused with credentials
  const client = new AWS.Glacier(credentials);
  client.endpoint('https://glacier.ap-south-1.amazonaws.com/');

  try {
    client.deleteArchive(
      {
        accountId: '', // TODO add account ID
        archiveId:
          'PXzNfpTPrUEmjHJ_MN7FPL65FwPNQPor1Diqn4xiADJdB5XgUvyyac8rdE5MbAWMe8fgZR64qQCbAi5Umy3zhrDIWS22xPQDv9V-KXes-TmkgwR_mnYQKSVGCWvULvoTJlCwhDsSng',
        vaultName: 'RAW_VIDEO_FILES',
      },
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
