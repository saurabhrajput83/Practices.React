import Config from './../AppSettings';

export const requestDefaults = {
    headers: {
        'Access-Control-Allow-Origin' : Config.originUrl,
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept',
        'Content-Type': 'application/json'
    }
};

 