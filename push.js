const push = require("web-push");

// const keys = push.generateVAPIDKeys()
// console.log(keys)

vapiKeys = {
    publicKey: 'BD0x3guAu7MSBv92LPRVIloqDDZgfn6-yFH_6aIUdvwWKNZkVdlSE93Nm0H1TPuLpTDTcjAyeVmaoyJ5i5fisQk',
    privateKey: 'mdArpHhLb78Si6o8Jp4NuLrPTbEmrX9LIykPiIbKWtM'
  }

push.setVapidDetails('mailto:jackcylin@gmail.com', vapiKeys.publicKey, vapiKeys.privateKey)

let sub = {}
push.sendNotification(sub, "test message")