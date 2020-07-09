# mongosync
[![Build Status](https://travis-ci.org/Parag08/mongosync.svg?branch=master)](https://travis-ci.org/Parag08/mongosync)
## Installation

npm install

## API Docs

### Collections

- Create Collection

```
POST {server-url}/v1/collections/{device_mac_addr}
```

- List all collection

```
GET {server-url}/v1/collections/
```
- Delete a collection

```
DELETE {server-url}/v1/collections/{device_mac_addr}
```

### Device Logs

- Get all logs
```
GET {server-url}/v1/deviceLogs/{device_mac_addr}
```

### Device Send Message

- Send message
```
ReqType: POST 
ReqUrl: {server-url}/v1/deviceOut/{device_mac_addr}
body: {"message":"hello there"} // any json will work
```

