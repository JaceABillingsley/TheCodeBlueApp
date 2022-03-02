const express = require('express');
const zip = require('express-zip');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/autostart',function(req,res){
  res.sendFile(path.join(__dirname+'/autostart.html'));
});

router.get('/data',function(req,res){
  res.sendFile(path.join(__dirname+'/data.html'));
});

router.get('/favicon',function(req,res){
  res.sendFile(path.join(__dirname+'/tcba.png'));
});

router.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/test.html'));
});

router.get('/mobile',function(req,res){
  res.sendFile(path.join(__dirname+'/Page-4.html'));
});

router.get('/demo',function(req,res){
  res.sendFile(path.join(__dirname+'/demo.html'));
});

router.get('/demodata',function(req,res){
  res.sendFile(path.join(__dirname+'/demodata.html'));
});

router.get('/mobiledata',function(req,res){
  res.sendFile(path.join(__dirname+'/mobiledata.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);
app.use(express.static(__dirname + '/'));

console.log('Running at Port 3000');console.log('Running at Port 3000');