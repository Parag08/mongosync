const express = require('express');
const app = require('../../config/express');
const mongoose = require('mongoose');
const { Message } = require('azure-iot-common');
const { format } = require('winston');


module.exports = function (ws, request) {
    ws.on('message', async function (msg) {
        try{
        msg = JSON.parse(msg)
        if (msg["macaddress"] != undefined) {
            console.log("getting data for:",msg["macaddress"] )
            collection = await mongoose.connection.db.collection(msg["macaddress"])
            results = await collection.find().limit(10).toArray()
            ws.send(JSON.stringify(results))
            // const changeStream = collection.watch();
            // changeStream.on('change', async function(change) {
            //     console.log('COLLECTION CHANGED');
            //     results = await collection.find().limit(10).toArray()
            //     ws.send(JSON.stringify(result))
            // })
        } else {
            ws.send(JSON.stringify({"error":"please provide macadress in the request"}))
        }
    } catch (err) {
        console.log(err)
        ws.send(JSON.stringify(err))
    }
    })
}