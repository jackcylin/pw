const push = require("web-push");

// const keys = push.generateVAPIDKeys()
// console.log(keys)

vapiKeys = {
    publicKey: 'BD0x3guAu7MSBv92LPRVIloqDDZgfn6-yFH_6aIUdvwWKNZkVdlSE93Nm0H1TPuLpTDTcjAyeVmaoyJ5i5fisQk',
    privateKey: 'mdArpHhLb78Si6o8Jp4NuLrPTbEmrX9LIykPiIbKWtM'
}

push.setVapidDetails('mailto:jackcylin@gmail.com', vapiKeys.publicKey, vapiKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fbvwKLxItMM:APA91bHMYr2yLbsQUwobQ5LBDtKrDwGuigNFm3ubCqzyvi50vmvhjy2Bwcc7pUeSowprlTFRW7z5TkHdgj5xmNIaoqt-X2rra0v81GAQA2tbrTTM9s40oruJPNUK_NK06z9gp4iKNF7F", "expirationTime": null, "keys": {
        "p256dh": "BO8l7rR7Kc2queugrPsc56ZrFN-iS2N9KsM1oYNgCDIQQglpc_by5dclqWQMP76cFYZ-MU8M1BLQo6w3m3B58D0",
        "auth": "DV41ZA1DIdUBBqBvF2-F9A"
    }
}
push.sendNotification(sub, "test message")