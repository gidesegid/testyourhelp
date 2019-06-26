
var express=require('express');
var router=express.Router();
var app=require('express')();
var http=require('http').Server(app);
var unprotected=express.Router()
var nodemailer = require('nodemailer');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
var mysql=require('mysql');
var jwt=require('jsonwebtoken');
//var axios = require('axios');
const fs           = require('fs');
const path         = require('path');
const uuid         = require('node-uuid');
const md5  = require('md5');
const sha1 = require('sha1');
var multer = require('multer');
var upload = multer({ dest: './public/userImage' });
var request = require('request');
var cheerio = require('cheerio');
var expressjwt=require('express-jwt');
var secretKey = uuid.v4();
var keys=require('../config/keys');
//var stripe=require('stripe')(keys.stripeSecretKey)
var nJwt = require('njwt');
 var publicKey=keys.stripePublishableKey
 router.use(bodyParser.json());
var connection=mysql.createConnection({
    // host:'hykrdb.cmsfrokrxjf7.us-west-2.rds.amazonaws.com',
    // user:'hlabusr',
    // password:'Dui84kdjkf',
    // database:'helplab'
    // host:'localhost',
    // user:'yourhelp_gide',
    // password:'wedisegid@123',
    // database:'yourhelp_DB'
    host:'localhost',
    user:'root',
    password:'yourhelplab@123',
    database:'yourhelp_DB'
});
// connection.connect(function(error){
//   if(!!error){
//     console.log('Error'+error);
//   }else{
//     console.log('succesfully connected to db');
//   }
// })
//token verification
    // function mytoken(req,res,next){
    //   var token=req.body.token || req.query.token || req.headers['x-access-token'];
    //        if (token) {
    //     // verifies secret and checks exp
    //         jwt.verify(token,secretKey, function(err, decoded) {
              
    //             if (err) { //failed verification.
    //               console.log("error verification")
    //               console.log(err)
    //                return res.json("failed to verfy")
    //             }
    //             req.decoded = decoded;
    //            next(); //no error, proceed
    //         });
    //     } else {
    //        console.log("you are not allwed"+req)
    //       return res.redirect('/')
    //     }
    // }
    function removeFile(directory,fileName){
       fs.unlink('./public/'+directory+'/'+fileName, function(err) {
        if(err && err.code == 'ENOENT') {
        } else if (err) {
        } else {
        }
      });
    }
    // function getTigrinaWordsToUpdate(){
    //   connection.query("select english from english_sth",function(error,row){
    //     if(!!error){
    //       console.log("error")
    //     }else{
    //      for(key in row){
    //       // var id=row[key].english;
    //        var word=row[key].english;
    //        var rep="gide";
    //        connection.query("UPDATE tigrinaTable_sth SET combinedColumn=REPLACE(combinedColumn,'"+word+" ','"+rep+"') where combinedColumn='%"+word+"%'",function(error,row){
    //          if(!!error){
    //            console.log(error)
    //          }else{
    //            console.log("updated")
    //          }
    //        })
    //      }
    //     }
    //   })
    // }
    // getTigrinaWordsToUpdate();
      //login
    const myPasswordHash = md5('transport-routerlication');
    var username
    var password
    router.post('/login',function(req,res){
      username=req.body.username;
      password=sha1(req.body.password+'-'+username);
           connection.query("select id,name,username,password,photo,country,livesIn,languageKey,activate from users where username=? and password=? Limit 1",[username,password],function(error,row,fields){
              if(!!error){
                }else if(row.length>0){
                userdata={}
                userdata.clientId;
                userdata.professionalId;
                 row.forEach(function (row) {
                  userdata.userId=row.id
                  userdata.name=row.name
                  userdata.photo=row.photo;
                  userdata.country=row.country;
                  userdata.livesIn=row.livesIn;
                  userdata.languageKey=row.languageKey;
                  userdata.activate=row.activate;
                 })
               // isClient(userdata.userId,callback)
                    isClient(userdata.userId, function(err, result){
                      userdata.clientId=result
                    });
                 
                   hasProfession(userdata.userId, function(err, result){
                        userdata.professionalId=result
                         connection.query("update users set sessionId='logedIn' where id=?",userdata.userId,function(error,row){
                        })
                    });
                     userPermission(userdata.userId, function(err, result){
                        userdata.permission=result
                         var  allinfo={
                          userId:userdata.userId,
                          userFullName:userdata.name,
                          photo:userdata.photo,
                          country:userdata.country,
                          livesIn:userdata.livesIn,
                          languageKey:userdata.languageKey,
                          activate:userdata.activate,
                          clientId:userdata.clientId,
                          professionalId:userdata.professionalId,
                          permission:userdata.permission
                         }
                        //  var claims = {
                        //   sub:userdata.userId,
                        //   iss: 'https://www.yourhelplab.com',
                        //   permissions: userdata.permission,
                        //   clientId:userdata.clientId,
                        //   professionalId:userdata.professionalId,
                        //   exp:Date.now(),
                        //   iat:Date.now()
                          
                        // }
                        // var jwt = nJwt.create(claims,secretKey);
                        // token = jwt.compact();
                        res.json({logedIn:true,
                                  result:allinfo,
                                 // token:token
                        })
                  });
                }else{
                   res.json({logedIn:false,
                             result:'no',
                             });
                }
            })
      })
     //  router.get('/login',function(req,res){
     //    res.render('login.html')
     // });
    // router.get('/transportHomePage',function(req,res){
    //   res.render('transportHomePage.html')
    // })
      router.get('/googlecf9b74790dd04f49.html',function(req,res){
        res.render('googlecf9b74790dd04f49.html')
     });
   //  router.get('/workList',function(req,res){
   //    res.render('workList.html')
   // });
       router.get('/',function(req,res){
        res.render('searches.html')
     });
       router.get('/agreementFile',function(req,res){
        res.render('/agreementFile.html')
       })
      router.get('/vip/:requestCode/:languageKey/:key',function(req,res){
         var myactivationInfo={}
        var message=""
        var key=req.params.key;
        var languageKey=req.params.languageKey;
        var requestCode=req.params.requestCode; 
         var htmlHeader='<html ng-app="myApp">'+
                  '<head>'+
                  '<link rel="icon" sizes="64x64" href="/assets/log/bird.png">'+
                  '<title>your help  lab home page,The work opportunities</title>'+
                  '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">'+
                  '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">'+
                  '<h1>www.yourhelplab.com</h1><br><br><hr></head>';     
         var footer='</body></html>'
              if(req.params.requestCode=='register'){
                   if(languageKey=='TG'){
                   message='<body class="text-center col-lg-5"><p class="alert-info">የቐንየልና! ኣባልነትኩም ኣረጋጊጽኩም ኣለኹም።<br>ካብ ሕጂ ተጠቀምቲ ናይ ኣገልግሎትና ኢኹም ሞ ብ ዝተጠቐምኹምሉ መጠቀሚ ስምን ቃለ ምስጢርን ጌርኩም ናብ ናይ መእተዊ ኣገልግሎትና ክትኣትዉ ትኽእሉ ኢኹም።<br> <a herf="https://www.yourhelplab.com/login">ኣብዚ  ጠውቑ</a></p>'
                    }else if(languageKey=='NL'){
                      message='<body class="text-center col-lg-5"><p class="alert-info">Dankje wel!Je account hebt geactiveerd.<br> Je hebt nu een account en je kunt via onze account inloggen op onze service.<br><a href="https://www.yourhelplab.com/login"> Klik op deze link om naar onze service te gaan.</a></p>'
                    }else{
                      message='<body class="text-center col-lg-5"><p class="alert-info">Thank you!Your account has activated successfully.<br>You have now an account and you can login to our service using your account.<br> <a href="https://www.yourhelplab.com/login">Click here to go to our service.</a></p>'
                    }
                  connection.query("UPDATE users SET activate='yes' where id=?",req.params.key,function(error,row){
                      if(!!error){
                         res.send(error)
                      }else{
                       res.send(htmlHeader+message+footer)
                      }
                   })
              }else if(req.params.requestCode=='forgetPassword'){
                   var body='<body ng-controller="logincontroller" class="text-center"><div class="col-lg-3"><br><br><br><br><hr><form role="form"  method="post" action="/changePassword">';
                   var userIdInput='<input type="hidden" name="userId" value="'+req.params.key+'" class="form-control"><br>'
                   var inputPassword=''
                   var theButton=''
                   var result="<p></p>"
                 if(req.params.languageKey=='TG'){
                  inputPassword='<label>ቃለ ምስጢር የእቱ</label>'+
                  '<input type="text" name="language" hidden value="TG"/>'+
                  '<input type="text" name="password" ng-model="passwordToBeChanged" class="form-control" required><br>'
                  theButton='<input type="submit" class="btn btn-primary" value="ቃለ ምስጢር ቀይር"><br>'
                 }else if(req.params.languageKey=='NL'){
                    inputPassword='<label>voer wachtwoord in</label>'+
                    '<input type="text" name="language" hidden value="NL"/>'+
                  '<input type="text" name="password" ng-model="passwordToBeChanged" class="form-control" required><br>'
                  theButton='<input type="submit" class="btn btn-primary" value="wachtwoord wijzigen"><br>'
                 }else{
                    inputPassword='<label>Enter Password</label>'+
                    '<input type="text" name="language" hidden value="EN"/>'+
                  '<input type="text" name="password" ng-model="passwordToBeChanged" class="form-control" required><br>'
                  theButton='<input type="submit" class="btn btn-primary" ng-click="changeMyPassword()" value="change password"><br>'
                 }
                 res.send(htmlHeader+body+'<div>'+userIdInput+inputPassword+theButton+'</div>'+footer)
              }else if(req.params.requestCode=='orders'){
                if(req.params.languageKey=='TG'){
                  res.send(htmlHeader+'<body><p> ቁጽሪ ኦርደርኩም እዚ ዩ'+req.params.key+'</p>'+footer)
                }else if(req.params.languageKey=='NL'){
                  res.send(htmlHeader+'<body><p> Deze van je order'+req.params.key+'</p>'+footer)
                }else{
                  res.send(htmlHeader+'<body><p> this is the order you have '+req.params.key+'</p>'+footer)
                }
              }else if(req.params.requestCode=='notReadyYet'){
                 if(req.params.languageKey=='TG'){
                  res.send(htmlHeader+'<body class="text-center"><p class="alert-warning">https://www.yourhelplab.com ኣብዚ ሕጂ እዋን ን ብ ኦንላይን ዝኽፈል ድልውቲ ኣይኮነትን ዘላ።<br>እዚ ትደልዩዎ ዘለኹም ስራሕ ንኽሰርሕ ትህወኹ እንተድኣ ኮይኩም ብ ኢመይል yourhelplab@gmail.com ተለፎንኩ ጸሓፉልና ደዊልና ክንረዳድኣኩም ኢና። <br>ናብ ወብሳይትና ንምምላስ ኣብዚ ጠውቑ <a href="https://www.yourhelplab.com">yourhelplab.com</a></p>'+footer)
                }else if(req.params.languageKey=='NL'){
                  res.send(htmlHeader+'<body class="text-center"><p class="alert-warning"> https://www.yourhelplab.com is op dit moment nog niet klaar voor online betaling.<br> Stuur ons een e-mail op yourhelplab@gmail.com dan kunnen we contact met u opnemen voor verdere discussie.<br>Als je wil naar ons website terug gaan alsjeblift click op hier <a href="https://www.yourhelplab.com">yourhelplab.com</a></p>'+footer)
                }else{
                  res.send(htmlHeader+'<body class="text-center"><p class="alert-warning">https://www.yourhelplab.com is not yet ready for online payment at this time.<br>Please send us an email at yourhelplab@gmail.com then we can contact you for further discussion.<br>To go to our website please click this <a href="https://www.yourhelplab.com">yourhelplab.com</a></p>'+footer)
                }
              }
      })
             
      router.post('/remindMeLater',function(req,res){
              var userId=req.body.userId;
              var from=req.body.from
              connection.query("insert into reminderTable(userId,remindTo)values('"+userId+"','"+from+"')",function(error,row){
                if(!!error){
                 res.json(error)
                }else{
                  res.json("done")
                }
              })
      })
      router.post('/changePassword',urlencodedParser,function(req,res){
        var userId=req.body.userId;
        var language=req.body.language;
        var  htmlHead= '<html ng-app="myApp">'+
              '<head>'+
              '<link rel="icon" sizes="64x64" href="/assets/log/bird.png">'+
              '<title>your help  lab home page,The work opportunities</title>'+
              '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">'+
              '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">'+
              '<h1>yourhelplab.com</h1><br><br><hr></head>'+
              '<body class="text-center"';
              var body
              if(language=='TG'){
                body='<div class="col-lg-3 alert-success"><p>ቃለምስጢር ብ ግቡእ ተቐይሩ ኣሎ ናብ ወብሳይቲ ክትምለሱ  <a href="https://www.yourhelplab.com/login"> ኣብዚ ክሊክ ግበሩ። </a> </ p></div>'
              }else if(language=='NL'){
                body='<div class="col-lg-3 alert-success"><p>Uw wachtwoord is succesvol gewijzigd, klik hier <a href="https://www.yourhelplab.com/login"> om naar de aanmeldingspagina te gaan </a> </ p></div>'
              }else{
                body='<div class="col-lg-3 alert-success"><p>Your password has been changed successfully,you can click <a href="https://www.yourhelplab.com/login">here to go to login page</a></p></div>'
              }
              var footer='</body></html>'
        getUserName(userId,function(error,result){
          var username=result
          var password=sha1(req.body.password+'-'+username);
          connection.query("update users set password='"+password+"' where id=?",userId,function(error,row){
             if(!!error){
              if(language=='TG'){
                body='<div class="col-lg-3 alert-danger"><p>ቃለ ምስጢር ብግቡእ ኣይተቐየረን ፣ገለ ጸገም ተፈጢሩ ኣሎ ከምበሓዱሹ ፈትኑ፣ናብ ወብሳይት ንንምምላስ   <a href="https://www.yourhelplab.com/login"> ኣብዚ ክሊክ ግበሩ። </a> </ p></div>'
              }else if(language=='NL'){
                body='<div class="col-lg-3 alert-danger"><p>Uw wachtwoord is niet succesvol gewijzigd, u kunt het opnieuw proberen <a href="https://www.yourhelplab.com/login"> hier </a> </ p></div>'
              }else{
                body='<div class="col-lg-3 alert-danger"><p>Your password has not been changed successfully,you can try again  <a href="https://www.yourhelplab.com/login">here </a></p></div>'
              }
             }else{
              res.send(htmlHead+body+footer)
             }
          })
        })
      })
      function getUserName(userId,callback){
        connection.query("select username from users where id=? limit 1",userId,function(error,row){
          if(!!error){
            callback(error,error)
          }else{
            callback(null,row[0].username)
          }
        })
      }
      router.post('/contactus',function(req,res){
        var name=req.body.name;
        var email=req.body.email;
        var tele=req.body.tele;
        var message=req.body.message;
        var date=Date.now();
        connection.query("insert into contactus(name,email,tele,message,date) values('"+name+"','"+email+"','"+tele+"','"+message+"','"+date+"')",function(error,row,fields){
          if(!!error){
             res.json("There was error while sending")
          }else{
            res.json("Your message has been sendt succesfully.Thank you somuch for contacting us")
          }
        })
      })
      router.post('/e-chat-login',function(req,res){
        var username=req.body.username;
        var password=req.body.password;
        connection.query("select Echat.room as room,Echat.id as roomId,Euser.code as code,Euser.id as userId,Euser.addedBy as addedBy,Euser.status as status from Echat inner join Euser on Euser.roomId=Echat.id where Echat.room=? and Euser.code=?",[username,password],function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
      router.post('/sendMessageEchat',function(req,res){
        var dataInfo={};
        dataInfo.roomId=req.body.roomId;
        dataInfo.userId=req.body.userId;
        dataInfo.room=req.body.room;
        dataInfo.userCode=req.body.userCode;
        dataInfo.message=req.body.message;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        connection.query("insert into Emessages(roomId,message,userCode,date)value('"+dataInfo.roomId+"','"+dataInfo.message+"','"+dataInfo.userCode+"','"+dateTime+"')",function(error,row){
            if(!!error){
            }else{
              res.json(row)
            }
        })
      })
      router.post('/replyEMessage',function(req,res){
        var dataInfo={};
        dataInfo.messageId=req.body.messageId;
        dataInfo.userCode=req.body.userCode;
        dataInfo.message=req.body.message;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        connection.query("insert into EmessageReply(messageId,reply,replyerUserCode,date)value('"+dataInfo.messageId+"','"+dataInfo.message+"','"+dataInfo.userCode+"','"+dateTime+"')",function(error,row){
            if(!!error){
            }else{
              res.json(row)
            }
        })
      })
      router.post('/e-chat-getMessages',function(req,res){
        var roomId=req.body.roomId;
        connection.query("select Emessages.id as id,Emessages.roomId as roomId,Emessages.message as message,Emessages.userCode as userCode,Emessages.date as date,count(EmessageReply.messageId) as numberOfReplies from Emessages left join EmessageReply on EmessageReply.messageId=Emessages.id  where Emessages.roomId='?' group by Emessages.message order by Emessages.id desc limit 100",roomId,function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
      router.post('/e-chat-getMessageReply',function(req,res){
        var messageId=req.body.messageId;
        connection.query("select id,reply,replyerUserCode,date from EmessageReply  where messageId='?'",messageId,function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
      router.post('/EchatmakeAdmin',function(req,res){
        var roomId=req.body.roomId;
        var userCode=req.body.userCode;
        var adminedBy=req.body.adminedBy;
          connection.query("insert into Eadmins(roomId,userCode,adminedBy)value('"+roomId+"','"+userCode+"','"+adminedBy+"')",function(error,row){
            if(!!error){
            }else{
              res.json("done")
            }
          })
      })
      router.post('/EchatRemoveAdmin',function(req,res){
        var roomId=req.body.roomId;
        var userCode=req.body.userCode;
          connection.query("delete from Eadmins where roomId=? and userCode=?",[roomId,userCode],function(error,row){
            if(!!error){
            }else{
              res.json("done")
            }
          })
      })
      router.post('/EchatCreateRoom',function(req,res){
        var room=req.body.room;
        var code=req.body.code;
        var data={};
        data.room=room;
        data.code=code;
        createEchatRoom(data,function(error,results){
          var roomId=results.insertId
          connection.query("insert into Eadmins(roomId,userCode,adminedBy)value('"+roomId+"','"+data.code+"','self-roomAdmin')",function(error,row){
            if(!!error){
            }else{
            }
          })
          connection.query("insert into Euser(roomId,code,addedBy)value('"+roomId+"','"+data.code+"','self-roomAdmin')",function(error,row){
            if(!!error){
              res.json('error')
            }else{
             res.json(row)
            }
          })
        })
      })
      router.post('/EchatEmail',function(req,res){
        var email=req.body.email;
        var room=req.body.room;
        var code=req.body.code;
        var emailData={}
        emailData.email=email;
        emailData.room=room;
        emailData.code=code;
        sendEmailToEchatMember(emailData,function(error,result){
            if(result=='error'){
            res.json('error')
            }else{
              res.json("success")
            }
          })
      })
      //mail.yourhelplab.com
      //nlss9.a2hosting.com
      //nlss9.a2hosting.com
      function sendEmailToEchatMember(emailData,callback){
         var transporter = nodemailer.createTransport({
          service: 'nlss9.a2hosting.com',
          port:'465',
          auth: {
              user: 'mailtoclient@yourhelplab.com', // Your email id
              pass: 'wedisegid@123' // Your password
          },
          tls:{
            rejectUnauthorized:true
          }
       });
           var text="Here is the room name and entry code to the room. room<br> <strong>room="+emailData.room+"</strong><br><strong> code= "+emailData.code+"</strong><br> This room and code can be temporarily available."
          var mailOptions = {
              from:transporter.options.auth, // sender address
              to: emailData.email, // list of receivers
              subject:"ourInfo,OurInfo secure chat" , // Subject line
              text:"ourInfo", //, // plaintext body
              html:text // You can choose to send an HTML body instead
          };
          transporter.sendMail(mailOptions,function(error,info){
            if(error){
              callback(error,"error")
            }else{
              callback(null,info)
            }
          })
        }
      function createEchatRoom(data,callback){
        connection.query("insert into Echat(room,code)value('"+data.room+"','"+data.code+"')",function(error,row){
          if(!!error){
            res.json('error')
          }else{
            callback(null,row)
          }
        })
      }
      function getUnseenEchatmessage(data,callback){
        connection.query("select Emessages.id as id,Emessages.roomId as roomId,Emessages.message as message,Emessages.userCode as userCode,Emessages.date as date,count(EmessageReply.messageId) as numberOfReplies from Emessages left join EmessageReply on EmessageReply.messageId=Emessages.id  where Emessages.roomId='?' and Emessages.id>'?' group by Emessages.message order by Emessages.id desc limit 100",[data.roomId,data.lastId],function(error,row){
          if(!!error){
           callback(error,null)
          }else{
           callback(null,row)
          }
        })
      }
      router.post('/e-chat-getMoreMessages',function(req,res){
        var roomId=req.body.roomId;
        var lastId=req.body.lastId;
        var data={}
        data.roomId=roomId;
        data.lastId=lastId;
        getUnseenEchatmessage(data,function(error,result){
              res.json(result)
        })
      })
      router.post('/e-chat-getMoreMessageReply',function(req,res){
        var messageId=req.body.messageId;
        connection.query("select id,reply,replyerUserCode,date from EmessageReply  where messageId='?'",messageId,function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
      router.post('/e-chat-adminChecker',function(req,res){
        var userCode=req.body.userCode;
        var roomId=req.body.roomId;
        connection.query("select id,roomId,userCode from Eadmins  where userCode=? and roomId=?",[userCode,roomId],function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
      router.post('/e-chat-getMembers',function(req,res){
        var roomId=req.body.roomId;
        var addedBy=req.body.adminId
        connection.query("select Euser.id as id,Euser.roomId as roomId,Euser.code as code,Euser.userMotivations as userMotivations,Euser.lastUpdates as lastUpdates,Euser.description as description,Euser.addedBy as addedBy,Eadmins.id as idAtAdminTable,Eadmins.adminedBy as adminedBy from Euser left join Eadmins on"+
        " Eadmins.userCode=Euser.code where Euser.roomId=? and Euser.addedBy=?",[roomId,addedBy],function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
      router.post('/e-chat-deleteMember',function(req,res){
        var code=req.body.code;
        connection.query("delete from Euser where code=?",code,function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json("done")
          }
        })
      })
      router.post('/addMemberToEchat',function(req,res){
        var roomId=req.body.roomId;
        var userCode=req.body.userCode;
        var addedBy=req.body.addedBy;
        connection.query("insert into Euser(roomId,code,addedBy)values('"+roomId+"','"+userCode+"','"+addedBy+"')",function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json("done")
          }
        })
      })
      router.post('/updateEchatMotivation',function(req,res){
        var roomId=req.body.roomId;
        var userCode=req.body.userCode;
        var userMotivation=req.body.motivation
        connection.query("update  Euser set userMotivations='"+userMotivation+"' where roomId=? and code=?",[roomId,userCode],function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json("done")
          }
        })
      })
      router.post('/getEchatUserMotivation',function(req,res){
        var roomId=req.body.roomId;
        var userCode=req.body.userCode;
        connection.query("select userMotivations from Euser where roomId=? and code=?",[roomId,userCode],function(error,row){
          if(!!error){
            res.json('error')
          }else{
            res.json(row)
          }
        })
      })
    function isAuthenticated(req,res,next){
      if(req.isAuthenticated()){
        next();
      }else{
        next(new Error(401))
      }
    }
    function checkUserInDatabase(data,callback){
       connection.query("select username,password from users where username=? and password=? Limit 1",[data.username,data.password],function(error,row,fields){
              if(!!error){
                // res.json(error)
                }else if(row.length>0){
                   callback(null, row[0].username);
                }else{
                  callback(null,undefined)
                }
        })
    }
        function getUserIdAfterLogin(data,callback){
             connection.query("select sessionId from users where id=?",data.userId,function(error,row,fields){
              if(!!error){
                callback(null,undefined)
              }else{
                 callback(null, row);
              }
        })
        }
        router.get('/home/logedIn/:userId',function(req,res){
                 var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('index.html')
                     }else{
                      res.redirect('/')
                     }
                  });
        })
           router.get('/userDetails/logedIn/:userId',function(req,res){
                 var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('userDetails.html')
                     }else{
                      res.redirect('/')
                     }
                  });
              })
      router.get('/dailyLifeHappenings/logedIn/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('dailyLifeHappenings.html')
                     }else{
                      res.redirect('/')
                     }
                  });
      });
       router.get('/professionalRegistrationForm/logedIn/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('professionalRegistrationForm.html')
                     }else{
                      res.redirect('/')
                     }
                  });
     });
       //professionalTransactions
      router.get('/professionalTransactions/logedIn/:userId',function(req,res){
           var data={}
           data.userId=req.params.userId;
           getUserIdAfterLogin(data, function(err, result){
               if(result[0].sessionId!==''){
                 res.render('professionalTransactions.html')
               }else{
                res.redirect('/')
               }
            });
      });
     //findTransport
      router.get('/findTransport/logedIn/:userId',function(req,res){
                var data={}
                data.userId=req.params.userId;
                getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('findTransport.html')
                     }else{
                      res.redirect('/')
                     }
                });
     });
        router.get('/clientRegistrationForm/logedIn/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('clientRegistrationForm.html')
                     }else{
                      res.redirect('/')
                     }
                  });
     });
    //generalproblems
     router.get('/issues/logedIn/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('issues.html')
                     }else{
                      res.redirect('/')
                     }
                  });
     });
      //professionalRegistrationForm.html
     router.get('/chatbox/logedIn/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('chatbox.html')
                     }else{
                      res.redirect('/')
                     }
                  });

     });
      router.get('/admin/permission',function(req,res){
                 var data={}
                 data.username=username;
                 data.password=password
                 checkUserInDatabase(data, function(err, result){
                     if(result!==undefined){
                      res.render('permission.html')
                     }else{
                        res.redirect('/')
                     }
                  });
     });
     //thingsToSale
      router.get('/thingsToSale/logedIn/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('thingsToSale.html')
                     }else{
                      res.redirect('/')
                     }
                  });
     });
       //notifications
    router.get('/notifications/logedIn/:userId',function(req,res){
                 var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('notifications.html')
                     }else{
                      res.redirect('/')
                     }
                  });

     });
    router.get('/cities/:city/:country',function(req,res){
               var city=req.params.city;
               var country=req.params.country
                getCountryId(country,function(error,result){
                      var countryId=result;
                        connection.query("select cityName from cities where countryId=? and cityName like '"+city+"%'",countryId,function(error,row,fields){
                         if(!!error){
                           res.json(error)
                         }else{
                           res.json(row)
                         }
                       })
                   })
    })
    //cities retrieval from mobile
    router.get('/cities/:country',function(req,res){
        connection.query("select cities.cityName as cityName from cities inner join countries on cities.countryId=countries.Id where countries.country=?",req.params.country,function(error,row,fields){
         if(!!error){
           res.json(error)
         }else{
           res.json(row)
         }
       })
                 
    })
    router.get('/NetherlandCities/:city',function(req,res){
               var city=req.params.city;
              connection.query("select citiesAndCountries as cityName from citiesAndCountries where  citiesAndCountries like '"+city+"%'",function(error,row,fields){
               if(!!error){
                 res.json(error)
               }else{
                 res.json(row)
               }
             })
    })
    router.get('/loadCountries',function(req,res){
      connection.query("select Id,country from countries",function(error,row){
        if(!!error){
        }else{
          res.json(row);
        }
      })
    })
    
     router.get('/loadCities/:countryId',function(req,res){
      var countryId=req.params.countryId;
      connection.query("select id,cityName,countryId from cities where countryId=?",countryId,function(error,row){
        if(!!error){
        }else{
          res.json(row);
        }
      })
    })
    function getCountryId(country,callback){
        connection.query("select Id from countries where country=?",country,function(error,row,fields){
          if(!!error){
          callback(error,"no country by such id or there was something wrong")
          }else{
            if(Id==undefined){

            }else{
               callback(null,row[0].Id)
            }
           
          }
        })
    }
    router.get('/countries/:country',function(req,res){
      var country=req.params.country
             connection.query("select country from countries where country like '"+country+"%'",function(error,row,fields){
               if(!!error){
                 res.json(error)
               }else{
                 res.json(row)
               }
             })
   })
    //mobile country retriever
    router.get('/countries',function(req,res){
             connection.query("select Id,country from countries",function(error,row,fields){
               if(!!error){
                 res.json(error)
               }else{
                 res.json(row)
               }
             })
   })
         //settings
          router.get('/settings/logedIn/:userId',function(req,res){
                 var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('settings.html')
                     }else{
                      res.redirect('/')
                     }
                  });
          });
           //admin
          router.get('/admin/logedIn/home/:userId',function(req,res){
                  var data={}
                 data.userId=req.params.userId;
                 getUserIdAfterLogin(data, function(err, result){
                     if(result[0].sessionId!==''){
                       res.render('admin.html')
                     }else{
                      res.redirect('/')
                     }
                  });
     });
           router.get('/errors',function(req,res){
        res.render('errors.html')
     });
  //loading images
     var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './upload');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
      });
      var upload = multer({ //multer settings
                      storage: storage
                  }).single('file');
      /** API path that will upload the files */
      router.post('/upload', function(req, res) {
          upload(req,res,function(err){
              if(err){
                   res.json({error_code:1,err_desc:err});
                   return;
              }
               res.json({error_code:0,err_desc:null});
          });
      });
      router.post('/getUserInfoForForgetpassword',function(req,res){
        var email=req.body.email;
        var languageKey=req.body.languageKey;
        connection.query("select id,email from users where  email=? limit 1",email,function(error,row){
          if(!!error){
            res.json("error")
          }else if(row.length==0){
            res.json("nouser")
          }else{
              var emailAndLanguage={}
              emailAndLanguage.email=email;
              emailAndLanguage.languageKey=languageKey;
              emailAndLanguage.requestCode="forgetPassword"
              emailAndLanguage.key=row[0].id
              sendEmailTo(emailAndLanguage,function(error,result){
                console.log(result)
                if(!!error){
                  res.json("Error")
                }else{
                  res.json("email sent");
                }
                
              })
          }
        })
      })
  //update user info
    router.post('/updateUserInfo',function(req,res){
      var userId=req.body.token;
      var name=req.body.name;
      // var username=req.body.username;
      // var email=req.body.email;
      // var password=sha1(req.body.password+'-'+username);
      var userBirthDate=req.body.userBirthDate;
      var country=req.body.country;
      var livesIn=req.body.livesIn;
       connection.query("UPDATE users SET name='"+name+"', birthDate='"+userBirthDate+"', country='"+country+"', livesIn='"+livesIn+"'  where id='?'",userId,function(error,row){
            if(!!error){
              res.json(error)
            }else{
              res.json(row)
            }
        })
      })
    router.post('/admin/getPermissions',function(req,res){
      // var userId=req.body.token;
      // var permission=req.decoded.permissions;
     // var userId=
      var user=req.body.user;
     // if(permission=="admin"){
          connection.query("select users.name as name,users.id as userId,users.username as username,permissiontable.permission as permission,"+
           "permissiontable.Id as permissionId from users  "+
           "LEFT JOIN permissiontable ON users.id=permissiontable.userId where users.id=?",user,function(error,row,fields){
             if(!!error){
                 res.json(error)
             }else{
                res.json(row)
             }
           })
      //  }else{
      //   res.json("you are not allowed")
      //  }

    })
     function isClient(userId,callback){
            connection.query("select Id from clients where userId=?",userId,function(error,row,fields){
                  if(!!error){
                     res.json(error)
                    }else if(row.length>0){
                       callback(null, row[0].Id);
                    }else{
                      callback(null,undefined)
                    }
          })
      }
       function userPermission(userId,callback){
            connection.query("select permissiontable.permission as permission from permissiontable INNER JOIN users ON permissiontable.userId=users.id where permissiontable.userId=? LIMIT 1",userId,function(error,row,fields){
                  if(!!error){
                     res.json(error)
                    }else if(row.length>0){
                       callback(null, row[0].permission);
                    }else{
                      callback(null,undefined)
                    }
          })
      }
  //identify if the user is professional
  function hasProfession(userId,callback){
     connection.query("select Id from professionalstable where userId=?",userId,function(error,row,fields){
            if(!!error){
               res.json(error)
              }else if(row.length>0){
                callback(null,row[0].Id)
              }else{
               callback(null,undefined)
              }
      })
  }
    //post user room
   router.post('/postRoom',function(req,res){
    var idUser=req.body.token
    var toUserId=req.body.toUserId
       connection.query("select userroom,photo from users where id=? LIMIT 1",toUserId,function(error,row,fields){
            if(!!error){
             }else{
                res.json(row)
             }

        })
    })
    router.post('/changePassword',function(req,res){
      var id=req.body.id;
      var username=req.body.username;
      var password=sha1(req.body.password+'-'+username);
      connection.query("update users set password='"+password+"' where id=?",id,function(error,result){
        if(!!error){
          res.json("there was error")
        }else{
          res.json("your password has been changed succesfully")
        }
      })
    })
//registering a user
    router.post('/register',function(req,res){
      var name=req.body.name;
      var username=req.body.username;
      var email=req.body.email;
      var password=sha1(req.body.password+'-'+username);
      var gender=req.body.gender;
      var birthDate=req.body.birthDate;
      var country=req.body.country;
      var livesIn=req.body.livesIn;
      var languageKey=req.body.languageKey;
      var selectedGender=req.body.selectedGender
      if(selectedGender=='Female'){
          var photo="woman"
      }else if(selectedGender=='Male'){
          var photo="man"
      }else{
       photo="undefined"
      }
      var date=Date.now();
       connection.query("insert into users(name,username,email,password,photo,gender,birthDate,registrationDate,country,livesIn,languageKey)values('"+name+"','"+username+"','"+email+"','"+password+"','"+photo+"','"+gender+"','"+birthDate+"','"+date+"','"+country+"','"+livesIn+"','"+languageKey+"')",function(error,row,fields){
            if(!!error){
              res.json(error)
            }else{
               var emailAndLanguage={}
                emailAndLanguage.email=email;
                emailAndLanguage.languageKey=languageKey;
                emailAndLanguage.requestCode='register'
                emailAndLanguage.key=row.insertId
              sendEmailTo(emailAndLanguage,function(error,result){
                if(!!error){
                  res.json("there was error")
                }else{
                  res.json("email sent");
                }
              })
            }
        })
    })
    router.post('/registerFromMobile',function(req,res){
      var name=req.body.name;
      var username=req.body.username;
      var email=req.body.email;
      var password=sha1(req.body.password+'-'+username);
      var gender=req.body.gender;
      var birthDate=req.body.birthDate;
      var country=req.body.country;
      var livesIn=req.body.livesIn;
      var languageKey=req.body.languageKey;
      var selectedGender=''
      getGender(gender)
      function getGender(id){
        connection.query("select english from webcollections where Id=?",id,function(error,row){
          if(!!error){

          }else{
            selectedGender=row[0].english;
             if(selectedGender=='Female'){
                  var photo="woman"
              }else if(selectedGender=='Male'){
                  var photo="man"
              }else{
               photo="undefined"
              }
                 var date=Date.now();
                 connection.query("insert into users(name,username,email,password,photo,gender,birthDate,registrationDate,country,livesIn,languageKey)values('"+name+"','"+username+"','"+email+"','"+password+"','"+photo+"','"+gender+"','"+birthDate+"','"+date+"','"+country+"','"+livesIn+"','"+languageKey+"')",function(error,row,fields){
                      if(!!error){
                        res.json(error)
                      }else{
                         var emailAndLanguage={}
                          emailAndLanguage.email=email;
                          emailAndLanguage.languageKey=languageKey;
                          emailAndLanguage.requestCode='register'
                          emailAndLanguage.key=row.insertId
                        sendEmailTo(emailAndLanguage,function(error,result){
                           console.log(result)
                          res.json("done")
                        })
                      }
                  })
          }
        })
      }
    })
     //mail.yourhelplab.com
      //nlss9.a2hosting.com
    function sendEmailTo(emailAndLanguage,callback){
      var transporter = nodemailer.createTransport({
          service: 'nlss9.a2hosting.com',
          port:'465',
          auth: {
              user: 'mailtoclient@yourhelplab.com', // Your email id
              pass: 'wedisegid@123' // Your password
          },
          tls:{
            rejectUnauthorized:true
          }
       });
      var text ="";
      var subject=""
      if(emailAndLanguage.requestCode=='register'){
         if(emailAndLanguage.languageKey=='TG'){
          subject="ሕቶ ኣባልነት ኣብ https://www.yourhelplab.com"
         text = "ናብ https://www.yourhelplab.com እንቛዕ ደሓን መጻኹም። <br>ኣብዚ ናትና ኣገልግሎት ኣባላት ክትኮኑ ብምምራጽኩም ኣዚና ነመስግን ብ ኣገልግሎትና ከምትዓግቡ ከኣ ርግጸኛታት ኢና።<br>እምበርኣር ሕጂ ኣብዚ http://www.yourhelplab.com/vip/"+emailAndLanguage.requestCode+"/"+emailAndLanguage.languageKey+"/"+emailAndLanguage.key+" ጠውቑ እሞ መእተዊ ናብቲ ናትና ኣገልግሎት ክትረኽቡ ኢኹም። ";
        
        }else if(emailAndLanguage.languageKey=='NL'){
          subject="activeer account op https://www.yourhelplab.com"
         text="Welkom op onze https://www.yourhelplab.com <br> bedankt voor het gebruik van onze service. Klik op https://www.yourhelplab.com/vip/"+emailAndLanguage.requestCode+"/"+emailAndLanguage.languageKey+"/"+emailAndLanguage.key+" om uw account te activeren"
        }else{
          subject="Activate acccount at https://www.yourhelplab.com"
         text="Wel come to https://www.yourhelplab.com <br> Thank you for using our service.Please by clicking https://www.yourhelplab.com/vip/"+emailAndLanguage.requestCode+"/"+emailAndLanguage.languageKey+"/"+emailAndLanguage.key+" activate your account."
        }
      }else if(emailAndLanguage.requestCode=='forgetPassword'){
        if(emailAndLanguage.languageKey=='TG'){
          subject="መቕያር ቃለ ምስጢር ኣብ https://www.yourhelplab.com"
         text = "እምበኣር ነዚ መልጎም ዚ ብምጥዋቕ ቃለ ምስጢር ክትቕይሩ ትኽእሉ ኢኹም። <br> https://www.yourhelplab.com/vip/"+emailAndLanguage.requestCode+"/"+emailAndLanguage.languageKey+"/"+emailAndLanguage.key
        
        }else if(emailAndLanguage.languageKey=='NL'){
          subject="activeer account op https://www.yourhelplab.com"
         text="Welkom op onze https://www.yourhelplab.com <br> bedankt voor het gebruik van onze service. Klik op https://www.yourhelplab.com/vip/"+emailAndLanguage.requestCode+"/"+emailAndLanguage.languageKey+"/"+emailAndLanguage.key+" om uw account te activeren"
        }else{
          subject="Change password at https://www.yourhelplab.com"
         text="Please change your password by clicking the link below <br> https://www.yourhelplab.com/vip/"+emailAndLanguage.requestCode+"/"+emailAndLanguage.languageKey+"/"+emailAndLanguage.key
        }
      }
      var mailOptions = {
          from:transporter.options.auth, // sender address
          to: emailAndLanguage.email, // list of receivers
          subject:subject , // Subject line
          text:text, //, // plaintext body
          html:text // You can choose to send an HTML body instead
      };
      transporter.sendMail(mailOptions,function(error,info){
        if(error){
          callback(error,error)
        }else{
          callback(null,info)
        }
      })
    }
   
  //user registration information /userSettings
   router.post('/userSettings',function(req,res){
     var userId=req.body.token
      connection.query("select id,name,username,email,password,birthDate,gender,country,livesIn,photo from users where id='?'",userId,function(error,row,fields){
          if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
      })
    })
   //all users
   router.post('/allUsers',function(req,res){
     var userId=req.body.token
      connection.query("select id as userId,name,email,userroom,country,livesIn,photo from users order by id asc limit 100",function(error,row,fields){
          if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
      })
    })
   //check user name
   router.post('/checkUserName/:username',function(req,res){
     var username=req.params.username
      connection.query("select username from users where username=?",username,function(error,row,fields){
          if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
      })
    })
  //check user email
   router.post('/checkUserEmail/:email',function(req,res){
     var email=req.params.email
      connection.query("select email from users where email=?",email,function(error,row,fields){
          if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
      })
    })
//profile image upload
    var upload5=multer({dest:'./public/userImage'});
       router.post('/uploadUserProfile1/',upload5.single('file'),uploadInfoToDatabase5);
       function uploadInfoToDatabase5(req,res){
        var userId=req.body.data;
        var file=req.file;
        var fileName=file.filename;
       var fileType=file.mimetype;
       var destination=file.destination;
               connection.query("UPDATE users SET photo='"+fileName+"' WHERE id='"+userId+"'",function(error,row,fields){
                  if(!!error){
                  }else{
                  }
                });
               connection.query("select photo from users where id='"+userId+"'",function(error,row,fields){
                if(!!error){
                 res.json(error)
                }else{
                 res.json(row)
                }
               })
       }
  //insert traveller contact information to passenger table
    router.post('/contactinfo',function(req,res){
            var userId=req.body.token;
            var transportChoosed=req.body.transportChoosed;
            var fromPlace=req.body.fromPlace
            var toPlace=req.body.toPlace;
            var date=req.body.date;
            var fromTime=req.body.fromTime
            var registrationDate=Date.now();
            var telephone=req.body.telephone;
            var code=req.body.code;
            var passengerRemarks=req.body.passengerRemarks
            connection.query("insert into passenger(userId,telephone,date,fromTime,fromPlace,toPlace,transportChoosed,code,registrationDate,remarks) values('"+userId+"','"+telephone+"','"+date+"','"+fromTime+"','"+fromPlace+"','"+toPlace+"','"+transportChoosed+"','"+code+"','"+registrationDate+"','"+passengerRemarks+"')",function(error,row,fields){
                if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
              });
      })
//insert transport owner information to the transporttype table
      router.post('/transOwnerInfo',function(req,res){
            var userId=req.body.token
            var transportChoosed=req.body.transportChoosed;
            var fromPlace=req.body.fromPlace;
            var toPlace=req.body.toPlace;
            var date=req.body.date
            var fromTime=req.body.fromTime
            var toTime=req.body.toTime;
            var numberOfSeats=req.body.numberOfSeats
            var additionalInfo=req.body.additionalInfo
            var telephone=req.body.telephone;
            var registrationDate=Date.now()
            connection.query("insert into transporttype(userId,type,numberOfSeats,date,fromTime,toTime,fromPlace,toPlace,additionalInfo,registrationDate,telephone) values('"+userId+"','"+transportChoosed+"','"+numberOfSeats+"','"+date+"','"+fromTime+"','"+toTime+"','"+fromPlace+"','"+toPlace+"','"+additionalInfo+"','"+registrationDate+"','"+telephone+"')",function(error,row){
                if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
              });
      })
//journeystatus checker
    router.post('/journeyStatusChecker',function(req,res){
        var userId=req.body.token
        var journeyInfo={};
        transportOwnerCheckUp(userId,function(error,result){
          if(result.length==0){
              passengerCheckUp(userId,function(error,result){
                if(result.length==0){
                  journeyInfo.notRegisteredAsPassenger='no';
                  journeyInfo.notRegisteredAsTransportOwner='no'
                  res.json(journeyInfo)
                }else{
                  var passengerId=result[0].id
                  journeyInfo.passengerId=passengerId
                  ifPassengerHasRequestedCheckUp(passengerId,function(error,result){
                       if(result.length==0){
                         journeyInfo.hasPassengerRequests='no';
                         res.json(journeyInfo)
                      }else{
                        journeyInfo.hasPassengerRequests='yes'
                        res.json(journeyInfo)
                      }
                  })
                }
              })
           }else{
              var transportOwnerId=result[0].id
              journeyInfo.currentOwnertransportId=transportOwnerId
              ifTransportOwnerHasBeenRequestedCheckUp(transportOwnerId,function(error,result){
                 if(result.length==0){
                    journeyInfo.hasTransportOwnerBeenRequested='no'
                    res.json(journeyInfo)
                 }else{
                  journeyInfo.hasTransportOwnerBeenRequested='yes'
                  res.json(journeyInfo)
                 }
              })
           }
        })
    })
    function passengerCheckUp(userId,callback){
      connection.query("select userId,id from passenger where userId=?",userId,function(error,row){
        if(!!error){
          callback(error,null)
        }else{
          callback(null,row)
        }
      })
    }
     function transportOwnerCheckUp(userId,callback){
      connection.query("select userId,id from transporttype where userId=?",userId,function(error,row){
        if(!!error){
          callback(error,null)
        }else{
          callback(null,row)
        }
      })
    }
    function ifPassengerHasRequestedCheckUp(passengerId,callback){
      connection.query("select passenger.id as passengerId from "+
         "transportrequestsandacceptances inner join passenger "+
         "on passenger.id=transportrequestsandacceptances.passengerId where "+ 
         "passenger.id=?",passengerId,function(error,row){
        if(!!error){
          callback(error,null)
        }else{
          callback(null,row)
        }
      })
    }
    function ifTransportOwnerHasBeenRequestedCheckUp(transportOwnerId,callback){
      connection.query("select transporttype.id as transportId from "+
        " transportrequestsandacceptances inner join "+
        " transporttype on transporttype.id=transportrequestsandacceptances.transportId"+
         " where transporttype.id=?",transportOwnerId,function(error,row){
        if(!!error){
          callback(error,null)
        }else{
          callback(null,row)
        }
      })
    }
//get transportowner info
      router.post('/getOwnTransportInfo',function(req,res){
        var userId=req.body.token;
        var languageKey=req.body.languageKey
        var languageSelected=''
        if(languageKey=='TG'){
        languageSelected='tigrina'
        }else if(languageKey=='NL'){
        languageSelected='dutch'
        }else{
          languageSelected='english'
        }
        connection.query("select transporttype.id as id,transporttype.type as transportTypeId,webcollections."+languageSelected+" as type,transporttype.numberOfSeats as numberOfSeats,transporttype.photo as photo,transporttype.freeSeats as freeSeats,transporttype.date as date,transporttype.fromTime as fromTime,transporttype.toTime as toTime,transporttype.fromPlace as fromPlace,transporttype.toPlace as toPlace,transporttype.additionalInfo as additionalInfo,transporttype.registrationDate as registrationDate,transporttype.telephone as telephone from transporttype left join webcollections on webcollections.Id=transporttype.type where userId='?'",userId,function(error,row,fields){
          if(!!error){
            res.json(error)
          }else{
            res.json(row)
          }
        })
      })
      router.post('/getPassengerRequests',function(req,res){
        var transportId=req.body.transportId;
        var languageKey=req.body.languageKey;
        var tablename='';
        if(languageKey=='TG'){
          tablename='passengerviewtigrina'
        }else if(languageKey=='NL'){
          tablename='passengerviewdutch'
        }else{
          tablename='passengerviewenglish'
        }
        connection.query("select "+tablename+".name as name,"+tablename+".room as room,"+tablename+".photo as photo,"+tablename+".passengerUserId as passengerUserId,"+
                         " "+tablename+".fromTime as fromTime,"+tablename+".date as date,"+tablename+".telephone as telephone,"+tablename+".passengerId as passengerId,transportrequestsandacceptances.requestDate as requestDate,"+
                         " "+tablename+".gender as gender,transportrequestsandacceptances.transportId as transportId,transportrequestsandacceptances.id as requestId from "+tablename+" left join transportrequestsandacceptances on"+
                         " transportrequestsandacceptances.passengerId="+tablename+".passengerId where transportrequestsandacceptances.approved is null and transportrequestsandacceptances.transportId=?",transportId,function(error,row){
                          if(!!error){
                            res.json(error)
                          }else{
                            res.json(row)
                          }
        })
      })
      router.post('/getAcceptedRequestsData',function(req,res){
        var transportId=req.body.transportId
        var languageKey=req.body.languageKey;
        var tablename='';
        if(languageKey=='TG'){
          tablename='passengerviewtigrina'
        }else if(languageKey=='NL'){
          tablename='passengerviewdutch'
        }else{
          tablename='passengerviewenglish'
        }
        connection.query("select "+tablename+".name as name,"+tablename+".room as room,"+tablename+".photo as photo,"+tablename+".passengerUserId as passengerUserId,"+
                         " "+tablename+".fromTime as fromTime,"+tablename+".telephone as telephone,"+tablename+".passengerId as passengerId,"+
                         " "+tablename+".gender as gender,transportrequestsandacceptances.transportId as transportId,transportrequestsandacceptances.id as requestId from "+tablename+" left join transportrequestsandacceptances on"+
                         " transportrequestsandacceptances.passengerId="+tablename+".passengerId where transportrequestsandacceptances.approved is not null and transportrequestsandacceptances.transportId=?",transportId,function(error,row){
                          if(!!error){
                            res.json(error)
                          }else{
                            res.json(row)
                          }
        })
      })
//update transport owenrs
     router.post('/updateTransportOwner',function(req,res){
                var userId=req.body.token
                var id=req.body.id;
                var numberOfSeats=req.body.numberOfSeats;
                var fromTime=req.body.fromTime;
                var toTime=req.body.toTime;
                var date=req.body.date
                var fromPlace=req.body.fromPlace
                var toPlace=req.body.toPlace
                var transportChoosed=req.body.transportChoosed;
                var additionalInfo=req.body.additionalInfo;
                var telephone=req.body.telephone;
      connection.query("update transporttype SET type='"+transportChoosed+"', date='"+date+"', fromPlace='"+fromPlace+"', toPlace='"+toPlace+"',numberOfSeats='"+numberOfSeats+"',additionalInfo='"+additionalInfo+"',fromTime='"+fromTime+"',toTime='"+toTime+"',telephone='"+telephone+"' where id='?'",id,function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
    })
//look up for transportaion,transportLookUp
  router.post('/transportLookUp',function(req,res){
        var date=req.body.date
        var fromPlace=req.body.fromPlace;
        var toPlace=req.body.toPlace
        var transportChoosed=req.body.transportChoosed;
        var languageKey=req.body.languageKey;
        var selectedLanguage='';
        if(languageKey=='TG'){
         selectedLanguage='tigrina'
        }else if(languageKey=='NL'){
          selectedLanguage='dutch'
        }else{
         selectedLanguage='english'
        }
        connection.query("SELECT   passenger.date as date,passenger.fromTime as fromTime,passenger.fromPlace as fromPlace,"+
          " passenger.toPlace as toPlace, COUNT(passenger.fromPlace) AS numberOfPeople,webcollections."+selectedLanguage+" as transportChoosed "+
          "FROM   passenger left join webcollections on webcollections.Id=passenger.transportChoosed  GROUP BY passenger.date, passenger.fromPlace, passenger.toPlace,webcollections."+selectedLanguage+" HAVING "+
          "  (passenger.date ='"+date+"')  AND (passenger.fromPlace = '"+fromPlace+"') AND (passenger.toPlace = '"+toPlace+"') AND (webcollections."+selectedLanguage+" = '"+transportChoosed+"')",function(error,row,fields){
              if(!!error){
                res.json(error);
              }else{
                res.json(row);
              }
        })
  })
  
   router.post('/getTransport',function(req,res){
        var date=req.body.date
        var fromPlace=req.body.fromPlace;
        var toPlace=req.body.toPlace
        var transportChoosed=req.body.transportChoosed
        var languageKey=req.body.languageKey;
        var selectedTransport='';
        if(languageKey=='TG'){
         selectedTransport='tigrina'
        }else if(languageKey=='NL'){
         selectedTransport='dutch'
        }else{
         selectedTransport='english'
        }
        connection.query("select transporttype.id as id,transporttype.userId as userId,webcollections."+selectedTransport+" as type,webcollections.Id as transportTypeId,transporttype.type as transportTypeId,transporttype.numberOfSeats as numberOfSeats,"+
          "transporttype.fromTime as fromTime,users.name as name,users.photo as userPhoto,transporttype.photo as photo,transporttype.toTime as toTime,transporttype.date as date,transporttype.fromPlace as fromPlace,transporttype.toPlace as toPlace,"+
          "transporttype.additionalInfo as additionalInfo,transportfreeseats.freeSeats as freeSeats,users.userroom as room from transporttype INNER JOIN transportfreeseats ON transporttype.id=transportfreeseats.id left join webcollections on webcollections.Id=transporttype.type"+
          " left join users on users.id=transporttype.userId where transportfreeseats.freeSeats>0  and date =?  AND"+
          " transporttype.fromPlace=? and transporttype.toPlace=? and transporttype.type=?",[date,fromPlace,toPlace,transportChoosed],function(error,row,fields){
            //"date='?' and fromPlace='?' and toPlace='?' and type='?'",[date,cityFrom,cityTo,transportModel]
              if(!!error){
                res.json(error);
              }else{
                res.json(row);
              }
        })
  })
   router.post('/getTransportForMobileApp',function(req,res){
        var date=req.body.date
        var fromPlace=req.body.fromPlace;
        var toPlace=req.body.toPlace
        var languageKey=req.body.languageKey;
        var selectedTransport='';
        if(languageKey=='TG'){
         selectedTransport='tigrina'
        }else if(languageKey=='NL'){
         selectedTransport='dutch'
        }else{
         selectedTransport='english'
        }
        connection.query("select transporttype.id as id,transporttype.userId as userId,webcollections."+selectedTransport+" as type,webcollections.Id as transportTypeId,transporttype.type as transportTypeId,transporttype.numberOfSeats as numberOfSeats,"+
          "transporttype.fromTime as fromTime,users.name as name,users.photo as userPhoto,transporttype.photo as transportPhoto,transporttype.toTime as toTime,transporttype.date as date,transporttype.fromPlace as fromPlace,transporttype.toPlace as toPlace,"+
          "transporttype.additionalInfo as additionalInfo,transportfreeseats.freeSeats as freeSeats,users.userroom as room from transporttype INNER JOIN transportfreeseats ON transporttype.id=transportfreeseats.id left join webcollections on webcollections.Id=transporttype.type"+
          " left join users on users.id=transporttype.userId where  date =?  AND"+
          " transporttype.fromPlace=? and transporttype.toPlace=?",[date,fromPlace,toPlace],function(error,row,fields){
            //"date='?' and fromPlace='?' and toPlace='?' and type='?'",[date,cityFrom,cityTo,transportModel]
              if(!!error){
                res.json(error);
              }else{
                res.json(row);
              }
        })
  })
//get My transport Info
    router.post('/getMyInfo',function(req,res){
          var userId=req.body.token;
          var languageKey=req.body.languageKey;
          selectedLanguage='';
          if(languageKey=='TG'){
           selectedLanguage='tigrina'
          }else if(languageKey=='NL'){
           selectedLanguage='dutch'
          }else{
           selectedLanguage='english'
          }
          connection.query("select passenger.id as id,passenger.userId as userId,passenger.telephone as telephone,passenger.transportChoosed as choosedTransportId,"+
            "passenger.date as date,passenger.fromPlace as fromPlace,passenger.toPlace as toPlace,webcollections."+selectedLanguage+" as transportChoosed,"+
            "passenger.code as code,passenger.approved as approved,passenger.remarks as remarks,passenger.fromTime as fromTime "+
            "from passenger left join webcollections on webcollections.Id=passenger.transportChoosed  where userId='?'",userId,function(error,row,fields){
                if(!!error){
                  res.json(error);
                }else{
                  res.json(row);
                }
          })
    })
    router.post('/getWhoAcceptedMe',function(req,res){
      var passengerId=req.body.passengerId;
      var languageKey=req.body.languageKey;
      var selectedLanguage="";
         if(languageKey=='TG'){
           selectedLanguage='tigrina'
          }else if(languageKey=='NL'){
           selectedLanguage='dutch'
          }else{
           selectedLanguage='english'
          }
      connection.query("select transportviewenglish.transportId as transportId,webcollections."+selectedLanguage+" as type,transportviewenglish.numberOfSeats as numberOfSeats,transportviewenglish.fromTime as fromTime,transportviewenglish.toTime as toTime,"+
      "transportviewenglish.fromPlace as fromPlace,transportviewenglish.date as date,transportviewenglish.toPlace as toPlace,transportviewenglish.additionalInfo as additionalInfo,transportviewenglish.telephone as telephone,transportviewenglish.name as name,transportviewenglish.photo as photo,transportviewenglish.gender as gender,transportrequestsandacceptances.approvedDate as approvedDate,transportrequestsandacceptances.id as requestId from transportrequestsandacceptances "+
      "inner join transportviewenglish on transportviewenglish.transportId=transportrequestsandacceptances.transportId left join webcollections on webcollections.Id=transportviewenglish.type where transportrequestsandacceptances.approved is not null and transportrequestsandacceptances.passengerId=? order by transportrequestsandacceptances.approvedDate DESC",passengerId,function(error,row){
        if(!!error){
          res.json(error)
        }else{
          res.json(row)
        }
      })
    })
    router.post('/deletePassenger',function(req,res){
      var userId=req.body.token
      var passengerId=req.body.id;
      connection.query("delete from passenger where id='?'",passengerId,function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
    })
//update passenger
     router.post('/updatePassenger',function(req,res){
      var userId=req.body.token
      var id=req.body.id;
                var telephone=req.body.telephone
                var date=req.body.date;
                var fromTime=req.body.fromTime;
                var fromPlace=req.body.fromPlace
                var toPlace=req.body.toPlace
                var transportChoosed=req.body.transportChoosed
                var code=req.body.code
                var passengerRemarks=req.body.passengerRemarks;
                var fromTime=req.body.fromTime;
      connection.query("update passenger SET telephone='"+telephone+"', date='"+date+"', fromTime='"+fromTime+"', fromPlace='"+fromPlace+"', toPlace='"+toPlace+"',transportChoosed='"+transportChoosed+"',code='"+code+"',fromTime='"+fromTime+"',remarks='"+passengerRemarks+"' where id='?'",id,function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
    })
//post all ready transports
    router.post('/postTransportsOnUse',function(req,res){
          connection.query("select id,type,numberOfSeats,freeSeats,date,fromTime,toTime,fromPlace,toPlace,additionalInfo,code from transporttype",function(error,row,fields){
                if(!!error){
                  res.json(error);
                }else{
                  res.json(row);
                }
          })
    })
//chat rooms
    router.post('/postRooms',function(req,res){
          connection.query("select Id,userId,roomName,roomNumber,roomDescription,online,numberOfMembersAtThisTime from chatrooms",function(error,row,fields){
                if(!!error){
                  res.json(error);
                }else{
                  res.json(row);
                }
          })
    })
//chat rooms
    router.post('/postUserRoom',function(req,res){
         var userId=req.body.token
          connection.query("select Id,userId from chatrooms where userId='"+userId+"'",function(error,row,fields){
                if(!!error){
                  res.json(error);
                }else{
                  res.json(row);
                }
          })
    })
//getUserId
    router.post('/getUserId',function(req,res){
         var userId=req.body.token
         res.json(userId)
    })
//insert client information to the main table needtranslator
      router.post('/clientMainInfo',function(req,res){
            var userId=req.body.token
            var tele=req.body.tele
            var lookingFor=req.body.lookingFor;
            var timestamp=Date.now();
            var timeTaken=req.body.timeTaken;
            var workSummary=req.body.workSummary;
            var workDetails=req.body.workDetails;
            var cWorkSituation=req.body.cWorkSituation
            var workCountry=req.body.country;
            var workCity=req.body.livesIn
            var name=req.body.name;
            var url=req.body.url
            var languageKey=req.body.languageKey
            getProfessionId(lookingFor,languageKey,function(error,result){
              if(result==undefined){
              }else{
                var professionId=result
                var post={userId:userId,telephone:tele,lookingFor:professionId,timestamp:timestamp,timeTaken:timeTaken,workDetails:workDetails,situationOfWorkAtThisTime:cWorkSituation,workCountry:workCountry,workCity:workCity,name:name,url:url,workSummary:workSummary};
                  connection.query('INSERT INTO clients SET ?', post, function (error, row) {
                      if (!!error){
                       res.json(error)
                      }else{
                        res.json(row.insertId);
                      }
                  });
              }
            })

      });
       router.post('/clientMainInfoMobile',function(req,res){
            var userId=req.body.token
            var tele=req.body.tele
            var lookingFor=req.body.lookingFor;
            var timestamp=Date.now();
            var timeTaken=req.body.timeTaken;
            var workSummary=req.body.workSummary;
            var workDetails=req.body.workDetails;
            var cWorkSituation=req.body.cWorkSituation
            var workCountry=req.body.country;
            var workCity=req.body.livesIn
            var name=req.body.name;
            var url=req.body.url
            var languageKey=req.body.languageKey
                var post={userId:userId,telephone:tele,lookingFor:lookingFor,timestamp:timestamp,timeTaken:timeTaken,workDetails:workDetails,situationOfWorkAtThisTime:cWorkSituation,workCountry:workCountry,workCity:workCity,name:name,url:url,workSummary:workSummary};
                  connection.query('INSERT INTO clients SET ?', post, function (error, row) {
                      if (!!error){
                       res.json(error)
                      }else{
                        res.json(row.insertId);
                      }
                  });

      });
//update client information to the main table needtranslator
      router.post('/updateclientMainInfo',function(req,res){
            var clientId=req.body.clientId
            var tele=req.body.tele
            var lookingFor=req.body.lookingFor;
            var timestamp=Date.now();
            var timeTaken=req.body.timeTaken;
            var workSummary=req.body.workSummary
            var workDetails=req.body.workDetails;
            var cWorkSituation=req.body.cWorkSituation
            var workCountry=req.body.country;
            var workCity=req.body.livesIn
            var name=req.body.name;
            var url=req.body.url;
            var languageKey=req.body.languageKey;
            getProfessionId(lookingFor,languageKey,function(error,result){
                if(result==undefined){
                    res.json("noProfession");
                }else{
                  var professionId=result
                  connection.query("UPDATE clients SET  telephone=?, lookingFor=?, timestamp=?, timeTaken=?, workDetails=?, situationOfWorkAtThisTime=?, workCountry=?, workCity=?, name=?, url=?, workSummary=? where Id=?",[tele,professionId,timestamp,timeTaken,workDetails,cWorkSituation,workCountry,workCity,name,url,workSummary,clientId],function(error,row,fields){
                        if(!!error){
                         res.json(error)
                        }else{
                         res.json("updated succesfully");
                        }
                  });
                }
            })

      });
      router.post('/updateclientMainInfoFromMobile',function(req,res){
            var clientId=req.body.clientId
            var tele=req.body.tele
            var lookingFor=req.body.lookingFor;
            var timestamp=Date.now();
            var timeTaken=req.body.timeTaken;
            var workSummary=req.body.workSummary
            var workDetails=req.body.workDetails;
            var cWorkSituation=req.body.cWorkSituation
            var workCountry=req.body.country;
            var workCity=req.body.livesIn
            var name=req.body.name;
            var url=req.body.url;
            var languageKey=req.body.languageKey;
                  connection.query("UPDATE clients SET  telephone=?, lookingFor=?, timestamp=?, timeTaken=?, workDetails=?, situationOfWorkAtThisTime=?, workCountry=?, workCity=?, name=?, url=?, workSummary=? where Id=?",[tele,lookingFor,timestamp,timeTaken,workDetails,cWorkSituation,workCountry,workCity,name,url,workSummary,clientId],function(error,row,fields){
                        if(!!error){
                         res.json(error)
                        }else{
                         res.json("updated succesfully");
                        }
                  });

      });
//insert into contacttimerouterointment table in the database
      router.post('/contacttimerouterointment',function(req,res){
              var contactId=req.body.contactId;
              var date=req.body.date
              var timeFrom=req.body.ctimeFrom
              var timeTo=req.body.ctimeTo
              var timestamp=Date.now();
            connection.query("insert into contacttimerouterointment(contactId,date,timeFrom,timeTo,timestamp) values('"+contactId+"','"+date+"','"+timeFrom+"','"+timeTo+"','"+timestamp+"')",function(error,row,fields){
              if(!!error){
                 res.json(error)
                }else{
                   res.json(row.insertId);
                }
            });
      })
//update client time routerointment
      router.post('/updatecontacttimerouterointment',function(req,res){
                    var Id=req.body.Id
                    var date=req.body.date
                    var timeFrom=req.body.ctimeFrom
                    var timeTo=req.body.ctimeTo
                    var timestamp=Date.now();
            connection.query("UPDATE contacttimerouterointment SET date='"+date+"',timeFrom='"+timeFrom+"',timeTo='"+timeTo+"',timestamp='"+timestamp+"'  WHERE Id='"+Id+"'",function(error,row,fields){
                if(!!error){
                 res.json(error)
                }else{
                   res.json(row.insertId);
                }
              });
      });
//delete client time routerointment
      router.delete('/deleteClientrouterointment',function(req,res){
                    var Id=req.body.token
            connection.query("delete from contacttimerouterointment  WHERE Id='"+Id+"'",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                   res.json(row.insertId);
                }
              });
      });

//insert to professionalMonth
      router.post('/professionalMonth',function(req,res){
              var contactId=req.body.contactId;
              var fromMonth=req.body.fromMonth;
              var toMonth=req.body.toMonth;
            connection.query("insert into professionalsworkingmonths(contactId,fromMonth,toMonth)values('"+contactId+"','"+fromMonth+"','"+toMonth+"')",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
            });
      })
//update to professionalMonth
      router.post('/updateprofessionalMonth',function(req,res){
              var contactId=req.body.contactId;
              var fromMonth=req.body.fromMonth;
              var toMonth=req.body.toMonth;
            connection.query("UPDATE professionalsworkingmonths SET  fromMonth='"+fromMonth+"',toMonth='"+toMonth+"' WHERE contactId='"+contactId+"'",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
            });
      })
//insert to professionalDate
      router.post('/professionalDate',function(req,res){
        var contactId=req.body.contactId
        var fromDate=req.body.fromDate;
        var toDate=req.body.toDate
           connection.query("insert into professionalworkingdate(contactId,fromDate,toDate)values('"+contactId+"','"+fromDate+"','"+toDate+"')",function(error,row,fields){
                    if(!!error){
                      res.json(error)
                    }else{
                      res.json(row);
                    }
              });
      })
//update professional date
      router.post('/updateprofessionalDate',function(req,res){
              var contactId=req.body.contactId;
              var fromDate=req.body.fromDate;
              var toDate=req.body.toDate;
            connection.query("UPDATE professionalworkingdate SET  fromDate='"+fromDate+"',toDate='"+toDate+"' WHERE contactId='"+contactId+"'",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
            });
      })
//insert to professionalworkstyle
      router.post('/professionworksession',function(req,res){
        var contactId=req.body.contactId
        var worksession=req.body.worksession
          connection.query("insert into professionalworksession(contactId,professionalworksin)values('"+contactId+"','"+worksession+"')",function(error,row,fields){
              if(!!error){
                res.json(error)
              }else{
                res.json(row);
              }
          });
      })
//postting client id from needtranslation table
      router.post('/userContactId',function(req,res){
        var userId=req.body.token
           connection.query("select Id from clients where userId='"+userId+"'",function(error,row,fields){
                    if(!!error){
                      res.json(error)
                    }else{
                      res.json(row);
                    }
              });
      })
//postting all clients
      router.post('/postAllClients',function(req,res){
        var languageKey=req.body.languageKey
        if(languageKey=='TG'){
          connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,userroom from clientinfoviewtigrina",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
          });
        }else if(languageKey=='NL'){
          connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,userroom from clientinfoviewdutch",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
          });
        }else{
           connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,userroom from clientinfoviewenglish",function(error,row,fields){
                    if(!!error){
                      res.json(error)
                    }else{
                      res.json(row);
                    }
              });
        }

      })
      //get single client on search
      router.post('/searchSingleClient',function(req,res){
        var languageKey=req.body.languageKey
        var searchClient=req.body.searchClient;
        if(languageKey=='TG'){
          connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,userroom from clientinfoviewtigrina where lookingFor like '%"+searchClient+"%'",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
          });
        }else if(languageKey=='NL'){
          connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,userroom from clientinfoviewdutch where lookingFor like '%"+searchClient+"%'",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                  res.json(row);
                }
          });
        }else{
           connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,userroom from clientinfoviewenglish where lookingFor like '%"+searchClient+"%'",function(error,row,fields){
                    if(!!error){
                      res.json(error)
                    }else{
                      res.json(row);
                    }
              });
        }

      })
      //getAll Clients
      router.post('/getAllClients',function(req,res){
        var languageKey=req.body.languageKey
        if(languageKey=='TG'){
              connection.query("select * from clientinfoviewtigrina",function(error,row){
              if(!!error){
                res.json(error)
              }else{
                res.json(row)
              }
            })
        }else{
              connection.query("select * from clientinfoviewenglish",function(error,row){
              if(!!error){
                res.json(error)
              }else{
                res.json(row)
              }
            })
        }
        
      })
        //getAll professionals
      router.post('/getAllProfessionals',function(req,res){
        var languageKey=req.body.languageKey
        if(languageKey=='TG'){
              connection.query("select * from professionalsinfoviewtigrina",function(error,row){
              if(!!error){
                res.json(error)
              }else{
                res.json(row)
              }
            })
        }else{
              connection.query("select * from professionalsinfoviewenglish",function(error,row){
              if(!!error){
                res.json(error)
              }else{
                res.json(row)
              }
            })
        }
        
      })
      //client work details
            router.post('/getClientWorkDetails',function(req,res){
              var languageKey=req.body.languageKey
              var id=req.body.id
              if(languageKey=='EN'){
                    connection.query("select workDetails,name from clientinfoviewenglish where Id=?",id,function(error,row,fields){
                          if(!!error){
                            res.json(error)
                          }else{
                            res.json(row);
                          }
                    });
              }else if(languageKey=='TG'){
                connection.query("select workDetails,name from clientinfoviewtigrina where Id=?",id,function(error,row,fields){
                      if(!!error){
                        res.json(error)
                      }else{
                        res.json(row);
                      }
                });
              }else if(languageKey=='NL'){
                connection.query("select workDetails,name from clientinfoviewdutch where Id=?",id,function(error,row,fields){
                      if(!!error){
                        res.json(error)
                      }else{
                        res.json(row);
                      }
                });
              }else{
                connection.query("select workDetails,name from clientinfoviewenglish where Id=?",id,function(error,row,fields){
                      if(!!error){
                        res.json(error)
                      }else{
                        res.json(row);
                      }
                });
              }

            })
      router.post('/postAllclientsAccordingUserCriteria',function(req,res){
                  var userId=req.body.token;
                  var country=req.body.country;
                  var livesIn=req.body.livesIn;
                  var languageKey=req.body.languageKey;
                  if(languageKey=='TG'){
                    connection.query("select Id,userId,userroom,name,livesIn,country,lookingFor,timeTaken,photo from clientinfoviewtigrina where country=? or livesIn=?",[country,livesIn],function(error,row,fields){
                       if(!!error){
                           res.json(error)
                       }else{
                           res.json(row)
                       }
                     })
                  }else if(languageKey=='NL'){
                    connection.query("select Id,userId,userroom,name,livesIn,country,lookingFor,timeTaken,photo from clientinfoviewdutch where country=? or livesIn=?",[country,livesIn],function(error,row,fields){
                       if(!!error){
                           res.json(error)
                       }else{
                           res.json(row)
                       }
                     })
                  }else{
                    connection.query("select Id,userId,userroom,name,livesIn,country,lookingFor,timeTaken,photo from clientinfoviewenglish where country=? or livesIn=?",[country,livesIn],function(error,row,fields){
                       if(!!error){
                           res.json(error)
                       }else{
                           res.json(row)
                       }
                     })
                  }

      })
      //search by name
       router.post('/postAllclientsAccordingUserCriteriaBySearchBar',function(req,res){
                  var userId=req.body.token;
                  var country=req.body.country;
                  var livesIn=req.body.livesIn;
                  var languageKey=req.body.languageKey;
                  var profession=req.body.clientsAndProfessionalsSearch;
                  if(languageKey=='TG'){
                    connection.query("select Id,userId,userroom,name,livesIn,country,lookingFor,timeTaken,photo from clientinfoviewtigrina where country=? and livesIn=? and lookingFor like '%"+profession+"%'",[country,livesIn],function(error,row,fields){
                       if(!!error){
                           res.json(error)
                       }else{
                           res.json(row)
                       }
                     })
                  }else if(languageKey=='NL'){
                    connection.query("select Id,userId,userroom,name,livesIn,country,lookingFor,timeTaken,photo from clientinfoviewdutch where country=? and livesIn=? and lookingFor like '%"+profession+"%'",[country,livesIn],function(error,row,fields){
                       if(!!error){
                           res.json(error)
                       }else{
                           res.json(row)
                       }
                     })
                  }else{
                    connection.query("select Id,userId,userroom,name,livesIn,country,lookingFor,timeTaken,photo from clientinfoviewenglish where country=? and livesIn=? and lookingFor like '%"+profession+"%'",[country,livesIn],function(error,row,fields){
                       if(!!error){
                           res.json(error)
                       }else{
                           res.json(row)
                       }
                     })
                  }

      })

//post information of clients who need professionals
       router.post('/postContactId',function(req,res){
            var firstName=req.body.firstName
            var lastName=req.body.lastName
            var tele=req.body.tele
            var email=req.body.email
            var remark=req.body.remark
              connection.query("select clients.id from clients where name='?'",firstName,function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                   res.json(row);
                }
              });
        });
//post professions
       router.get('/listOfProfession/:profession/:languageKey',function(req,res){
           var profession=req.params.profession
           var languageKey=req.params.languageKey;
           var selectedLanguage=''
           if(languageKey=='TG'){
             selectedLanguage='tigrina'
           }else if(languageKey=='NL'){
            selectedLanguage='dutch'
           }else{
            selectedLanguage='english'
           }
            connection.query("select "+selectedLanguage+" from workprofessionslist where "+selectedLanguage+" like '"+profession+"%'",function(error,row,fields){
                 if(!!error){
                  res.json(error)
                 }else{
                    res.json(row);
                 }
              });
        });
  router.get('/listOfProfessionInMobile/:languageKey',function(req,res){
                   var profession=req.params.profession
                   var languageKey=req.params.languageKey;
                   var selectedLanguage=''
                   if(languageKey=='TG'){
                     selectedLanguage='tigrina'
                   }else if(languageKey=='NL'){
                    selectedLanguage='dutch'
                   }else{
                    selectedLanguage='english'
                   }
                    connection.query("select Id,"+selectedLanguage+" from workprofessionslist",function(error,row,fields){
                         if(!!error){
                          res.json(error)
                         }else{
                            res.json(row);
                         }
                      });
   });
//post worktime type
        router.post('/postWorkTime',function(req,res){
            connection.query("select Id,english,tigrina,dutch from professionalworktimeperiod",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                   res.json(row);
                }
              });
        });

//post worktime type
        router.post('/getAllWorkCategories',function(req,res){
            connection.query("select id,category from workcategory",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                   res.json(row);
                }
              });
        });
//sub work category
        router.post('/getSubWorkCategory',function(req,res){
          var categoryId=req.body.categoryId
            connection.query("select id,categoryId,work from worksubcategory where categoryId='"+categoryId+"'",function(error,row,fields){
                if(!!error){
                  res.json(error)
                }else{
                   res.json(row);
                }
              });
        });
//post all clients
        router.post('/postAllpassenger',function(req,res){
            connection.query("select clients.Id as Id,clients.name as name,clients.email as email,clients.livesIn as livesIn"+
              ",clients.lookingFor as lookingFor,clients.gender as gender,clients.dateOfBirth as dateOfBirth,clients.timeTaken as timeTaken,clients.workDetails as workDetails,"+
              "clients.userId as userId,users.photo as photo from clients INNER JOIN users ON clients.userId=users.id",function(error,row,fields){
                if(!!error){
                 res.json(error)
                }else{
                   res.json(row);
                }
              });
        });
//insert translator information to the professionalstable table
       router.post('/registerProfessional',function(req,res){
            var userId=req.body.token
            var tele=req.body.tele
            var remark=req.body.remark
            var profession=req.body.profession
            var professionalWorkSession=req.body.professionalWorkSession
            var timestamp=Date.now();
            var pWorkSituation=req.body.pWorkSituation
            var languageKey=req.body.languageKey;
            getProfessionId(profession,languageKey,function(error,result){
                if(result==undefined){
                }else{
                  var professionId=result
                   var post={userId:userId,telephone:tele,remarks:remark,profession:professionId,timestamp:timestamp,workSession:professionalWorkSession,lookingForJobThisTime:pWorkSituation};
                   connection.query('INSERT INTO professionalstable SET ?', post, function (error, row) {
                      if (!!error){
                       res.json(error)
                      }else{
                        res.json(row.insertId);
                      }
                    });
                 }
            });
        });
       router.post('/registerProfessionalFromMobile',function(req,res){
            var userId=req.body.token
            var tele=req.body.tele
            var remark=req.body.remark
            var profession=req.body.profession
            var professionalWorkSession=req.body.professionalWorkSession
            var timestamp=Date.now();
            var pWorkSituation=req.body.pWorkSituation
            var languageKey=req.body.languageKey;
             var post={userId:userId,telephone:tele,remarks:remark,profession:profession,timestamp:timestamp,workSession:professionalWorkSession,lookingForJobThisTime:pWorkSituation};
             connection.query('INSERT INTO professionalstable SET ?', post, function (error, row) {
                if (!!error){
                 res.json(error)
                }else{
                  res.json(row.insertId);
                }
              });
               
        });
//update translator information to the professionalstable table
       router.post('/updateprofessionalInfoData',function(req,res){
            var professionalId=req.body.professionalId
            var tele=req.body.tele
            var remark=req.body.remark
            var profession=req.body.profession
            var professionalWorkSession=req.body.professionalWorkSession
            var timestamp=Date.now();
            var pWorkSituation=req.body.pWorkSituation;
            var languageKey=req.body.languageKey;
            getProfessionId(profession,languageKey,function(error,result){
              if(result==undefined){

              }else{
                var professionId=result

                connection.query("UPDATE professionalstable SET  telephone=?, remarks=?, profession=?, timestamp=?, workSession=?, lookingForJobThisTime=?  where Id=?",[tele,remark,professionId,timestamp,professionalWorkSession,pWorkSituation,professionalId],function(error,row,fields){
                        if(!!error){
                         res.json(error)
                        }else{
                           res.json(row.insertId);
                        }
                  });
              }
            })

        });
        router.post('/updateprofessionalInfoDataFromMobile',function(req,res){
            var professionalId=req.body.professionalId
            var tele=req.body.tele
            var remark=req.body.remark
            var profession=req.body.profession
            var professionalWorkSession=req.body.professionalWorkSession
            var timestamp=Date.now();
            var pWorkSituation=req.body.pWorkSituation;
            var languageKey=req.body.languageKey;
                connection.query("UPDATE professionalstable SET  telephone=?, remarks=?, profession=?, timestamp=?, workSession=?, lookingForJobThisTime=?  where Id=?",[tele,remark,profession,timestamp,professionalWorkSession,pWorkSituation,professionalId],function(error,row,fields){
                        if(!!error){
                         res.json(error)
                        }else{
                           res.json(row.insertId);
                        }
                  });
            

        });
//get webCollections
     router.post('/webCollection',function(req,res){
           var webCollectionId=req.body.webCollectionId;
          connection.query("select Id,webCollectionId,english,tigrina,dutch from webcollections where webCollectionId=?",webCollectionId,function(error,row,fields){
            if(!!error){
              res.json(error)
            }else{
              res.json(row)
            }
          })
     })
//post image and data of cheapmarketing
    router.post('/postCheapMarketing',function(req,res){
      var userId=req.body.token
      connection.query("select name,price,place,timestamp,fileName from cheapmarketing where userId='"+userId+"'",function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
    })
//upload things to sale...................................................................................

      var uploadsales=multer({dest:'./public/saleThingsImageCollector'});
       router.post('/thingsToSale',uploadsales.single('file'),thingsToBeSold);
       function thingsToBeSold(req,res){
        var userId=req.body.data[0];
        var itemName=req.body.data[1];
        var catagories=req.body.data[2]
        var price=req.body.data[3]
        var unit=req.body.data[4]
        var place=req.body.data[5];
        var telephone=req.body.data[6];
        var description=req.body.data[7];
        var file=req.file;
        var originalFileName=file.originalname;
        var fileName=file.filename;
        var path=file.path;
        var size=file.size;
        var fileType=file.mimetype;
        var date=Date.now();
        var post={userId:userId,itemName:itemName,price:price,unit:unit,place:place,telephone:telephone,description:description,fileType:fileType,date:date,fileName:fileName,catagories:catagories};
                  connection.query('INSERT INTO salethingstable SET ?', post, function (error, row) {
                      if (!!error){
                       res.json(error)
                      }else{
                        res.json(row);
                      }
                  });
       }
        router.post('/thingsToSaleFromMobile',uploadsales.single('saleItemFile'),thingsToBeSoldFromMobile);
         function thingsToBeSoldFromMobile(req,res){
            var userId=req.body.userId;
            var itemName=req.body.itemName;
            var catagories=req.body.catagories
            var price=req.body.price;
            var unit=req.body.unit
            var place=req.body.place;
            var telephone=req.body.telephone;
            var description=req.body.description;
            var file=req.file;
            var originalFileName=file.originalname;
            var fileName=file.filename;
            var path=file.path;
            var size=file.size;
            var fileType=file.mimetype;
            var date=Date.now();
            var post={userId:userId,itemName:itemName,price:price,unit:unit,place:place,telephone:telephone,description:description,fileType:fileType,date:date,fileName:fileName,catagories:catagories};
                      connection.query('INSERT INTO salethingstable SET ?', post, function (error, row) {
                          if (!!error){
                           res.json(error)
                          }else{
                            res.json(row);
                          }
                      });
          }
       router.post('/addItemAmount',function(req,res){
         var itemId=req.body.itemId
         var itemAmount=req.body.itemAmount;
         var size=req.body.itemSize;
         connection.query("insert into salethings_item_amount(itemId,size,amount)values('"+itemId+"','"+size+"','"+itemAmount+"')",function(error,result){
           if(!!error){
           }else{
             res.json("successfully added")
           }
         })
       })
       //upload posts...................................................................................
      var upload2=multer({dest:'./public/posts'});
       router.post('/homeUserPosts',upload2.single('file'),postUserPosts);
       function postUserPosts(req,res){
        var userId=req.body.data[0];
        var postDescription=req.body.data[1];
        var from=req.body.data[2];
        var isThereImage=req.body.data[3]
        var file=req.file;
       
        if(isThereImage=="no"){
           var fileName="no file";
           var fileType="no file";
        }else{
           var fileName=file.filename;
           var fileType=file.mimetype;
        }
        var date=Date.now();
       connection.query("insert into posts(postDescription,fileType,fileName,userId,timestamp) values('"+postDescription+"','"+fileType+"','"+fileName+"','"+userId+"','"+date+"')",function(error,row,fields){
          if(!!error){
           res.json(error)
          }else{
            if(from==='web'){
             res.redirect('/homePageAfterLogin/'+userId)
            //res.json("successfully")
            }else{
              res.json("success")
            }
          }
        });
              
       }
        //upload image of webcollection...................................................................................
      var upload2=multer({dest:'./public/webCollectionImages'});
      router.post('/uploadImageWebCollection',upload2.single('file'),uploadWebCollectionImage);
      function uploadWebCollectionImage(req,res){
        var webCollectionAutoId=req.body.data[0];
        var webCollectionId=req.body.data[1];
        var file=req.file;
        var fileName=file.filename;
        var fileType=file.mimetype;
        connection.query("update webcollections set picture='"+fileName+"' where Id=?",webCollectionAutoId,function(error,row){
          if(!!error){
            res.json("there was error")
          }else{
            res.json("updated successfully")
          }
        })
      }
       //router.post("api/upload",upload.array("photo"))
       //upload owner transport image...................................................................................
      var uploadTransportImageDestination=multer({dest:'./public/transportOwnerImages'});
       router.post('/uploadTransportImage',
       uploadTransportImageDestination.single('file'),
       postTransportImage);
       function postTransportImage(req,res){
        var userId=req.body.data[0];
        var userFullName=req.body.data[1];
        var from=req.body.data[2]
        var file=req.file;
        var previousFileName=req.body.data[3]
         var fileName=file.filename;
         var fileType=file.mimetype;
           if(previousFileName!==undefined){
              var directory="transportOwnerImages"
              removeFile(directory,previousFileName);
            }
           connection.query("UPDATE transporttype SET photo ='"+fileName+"' WHERE userId='"+userId+"'",function(error,row,fields){
              if(!!error){
               res.json(error)
              }else{
                if(from=='web'){
                 res.redirect('/findTransport/logedIn/'+userId)
                }else{
                  res.json("done")
                }
              }
            });
       }
  //postting image and description of the image of posts
   router.post('/postposts',function(req,res){
            connection.query("select id,posterPhoto,shareDescription,room,userId,posterName,fileName,fileType,date,postDescription,remarks,numberOfLikes,numberOfComments,numberOfShares,sharedPostOwnerUserId,idAtShareTable from postinfo ORDER BY date DESC LIMIT 5 ",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       });
   router.post('/postUserDescription',function(req,res){
        var userId=req.body.userId;
        var postDescription=req.body.postDescription;
        var from=req.body.from;
        var file=null;
        if(file==null){
           var fileName="no file";
           var fileType="no file";
        }else{
           var fileName=file.filename;
           var fileType=file.mimetype;
        }
        var date=Date.now();
       connection.query("insert into posts(postDescription,fileType,fileName,userId,timestamp) values('"+postDescription+"','"+fileType+"','"+fileName+"','"+userId+"','"+date+"')",function(error,row,fields){
          if(!!error){
           res.json(error)
          }else{
            if(from==='web'){
             res.redirect('/home/logedIn/'+userId)
            }else{
              res.json("success")
            }
          }
        });
   })
   //my posts
   router.post('/myposts',function(req,res){
            var userId=req.body.token
            connection.query("select id,posterPhoto,shareDescription,room,userId,posterName,fileName,fileType,date,postDescription,remarks,numberOfLikes,numberOfComments,numberOfShares,sharedPostOwnerUserId,idAtShareTable from postinfo  where userId=? ORDER BY date DESC",userId,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
   //BLOCK FRIEND
   router.post('/blockThisFriend',function(req,res){
    var userIdToBeBlocked=req.body.userIdToBeBlocked;
    connection.query("update friendrequests set blocked='yes' where Id=?",userIdToBeBlocked,function(error,row){
      if(!!error){
           res.json(error)
      }else{
        res.json("done")
      }
    })
   })
   //get my friends
   router.post('/getMyFriends',function(req,res){
     var userId=req.body.token;
            connection.query("select users.name as username,friendrequests.toUserId as fromUserId,users.photo as photo,users.userroom as room,"+
                              " friendrequests.Id as Id,friendrequests.locationOfToUser as location from friendrequests inner join users on users.id=friendrequests.toUserId where "+
                               " friendrequests.userId="+userId+" and friendrequests.isFriendNow='yes' and friendrequests.blocked is null union "+
                               "select users.name as username,friendrequests.userId as fromUserId,users.photo as photo,users.userroom as room,"+
                               "friendrequests.Id as Id,friendrequests.location as location from friendrequests inner join users on users.id=friendrequests.userId where "+
                               "friendrequests.toUserId="+userId+" and friendrequests.isFriendNow='yes' and friendrequests.blocked is null group by friendrequests.userId",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })

   })
   //get orderids
   router.post('/getOrderId',function(req,res){
     var userId=req.body.userId;
     connection.query("select userId,location,orderId from generalPayment where userId=?",userId,function(error,row){
      if(!!error){
      }else{
        res.json(row)
      }
     })
   })
    //postting image and description of the image of posts
   router.post('/userPostposts',function(req,res){
            var userId=req.body.token
            connection.query("select id,posterPhoto,shareDescription,room,userId,posterName,fileName,fileType,date,postDescription,remarks,numberOfLikes,numberOfComments,numberOfShares,sharedPostOwnerUserId,idAtShareTable from postinfo WHERE userId='"+userId+"' ORDER BY date DESC LIMIT 10 ",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
    //get posts one by one;
   router.post('/getPost',function(req,res){
            var lastId=req.body.lastId;
            connection.query("select id,posterPhoto,room,userId,posterName,fileName,fileType,date,postDescription,remarks,numberOfLikes,numberOfComments,numberOfShares,sharedPostOwnerUserId,idAtShareTable from postinfo where id<'?' ORDER BY date DESC LIMIT 3 ",lastId,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
   router.post('/deletePost',function(req,res){
           var userId=req.body.token
           var postId=req.body.postId
           var fileName=req.body.fileName;
           var remarks=req.body.remarks;
           var idAtShareTable=req.body.idAtShareTable
           checkPostIdInCommentTable(postId,function(error,result){
              var deletedPostIdFromCommentTable=result;
           })
           checkPostIdInpostlikesandcomments(postId,function(error,result){
             var deletedPostIdFrompostlikesandcomments=result
           })
          connection.query("delete from posts where Id=?",postId,function(error,row,fields){
              if(!!error){
                res.json(error)
              }else{
                var directory="posts"
                 removeFile(directory,fileName)
                res.json("post succesfully deleted")
              }
          })
   })
   router.post('/deleteSharedPost',function(req,res){
          var userId=req.body.token
           var postId=req.body.postId
           var fileName=req.body.fileName;
           var remarks=req.body.remarks;
           var idAtShareTable=req.body.idAtShareTable
           checkPostIdInCommentTable(postId,function(error,result){
              var deletedPostIdFromCommentTable=result;
           })
           checkPostIdInpostlikesandcomments(postId,function(error,result){
             var deletedPostIdFrompostlikesandcomments=result
           })
            connection.query("delete from sharetable where id=?",idAtShareTable,function(error,row,fields){
                  if(!!error){
                   // res.json(error)
                  }else{
                    var directory="posts"

                  }
            })
          connection.query("delete from posts where Id=?",postId,function(error,row,fields){
              if(!!error){
                res.json(error)
              }else{
                var directory="posts"
                 //removeFile(directory,fileName)
                res.json("share succesfully deleted")
              }
           })


   })
   function checkPostIdInCommentTable(postId,callback){
      connection.query("delete from commentstable where postId='?'",postId,function(error,row,fields){
           if(!!error){
            callback(error,"there is error in commenttable when deleting the post")
           }else{
            callback(null,"deleted from commenttable table")
           }
      })
   }
    function checkPostIdInpostlikesandcomments(postId,callback){
      connection.query("delete from postlikesandcomments where postId='?'",postId,function(error,row,fields){
           if(!!error){
           callback(error,"there is error in postlikesandcomments table when deleting the post")
           }else{
            callback(null,"deleted from postlikesandcomments table")
           }
      })
   }
  //postting image and description of the image of thingstosale
   router.post('/postpostModal',function(req,res){
           var userId=req.body.token
            var id=req.body.id
            connection.query("select id,posterPhoto,posterName,fileName,fileType,date,postDescription,numberOfLikes,numberOfShares,room,userId from postsview where id='"+id+"'",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//postting the salers name
       router.post('/salers',function(req,res){
            var name=req.body.name;
            connection.query("select fileName from salethingstable where uploaderName='"+name+"'",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//list of all professionalstable
        router.post('/listOfprofessionals',function(req,res){
              var languageKey=req.body.languageKey;
              if(languageKey=='EN'){
                      connection.query("select Id,userId,name,userroom,photo,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewenglish",function(error,row){
                         if(!!error){
                           res.json(error)
                         }else{
                           res.json(row)
                         }
                       })
              }else if(languageKey=='TG'){
                connection.query("select Id,userId,name,userroom,photo,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewtigrina",function(error,row){
                    if(!!error){
                        res.json(error)
                    }else{
                        res.json(row)
                    }
                 })
              }else if(languageKey=='NL'){
                  connection.query("select Id,userId,name,photo,userroom,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewdutch",function(error,row){
                      if(!!error){
                          res.json(error)
                      }else{
                          res.json(row)
                      }
                   })
              }
       });
       //list of single search professionalstable
       router.post('/getProfessionalPerSearch',function(req,res){
         var searchProfessionalData=req.body.searchProfessionalData
        var languageKey=req.body.languageKey;
       if(languageKey=='TG'){
          connection.query("select Id,userId,name,userroom,photo,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewtigrina where profession like '%"+searchProfessionalData+"%'",function(error,row){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
           })
        }else if(languageKey=='NL'){
            connection.query("select Id,userId,name,photo,userroom,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewdutch where profession like '%"+searchProfessionalData+"%'",function(error,row){
                if(!!error){
                    res.json(error)
                }else{
                    res.json(row)
                }
             })
        }else{
          connection.query("select Id,userId,name,userroom,photo,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewenglish where profession like '%"+searchProfessionalData+"%'",function(error,row){
            if(!!error){
              res.json(error)
            }else{
              res.json(row)
            }
          })
        }
 })
       //professional motivation
       router.post('/getProfessionalMotivation',function(req,res){
             var languageKey=req.body.languageKey;
             var id=req.body.id
             if(languageKey=='TG'){
               connection.query("select remarks,name from professionalsinfoviewtigrina where Id=?",id,function(error,row){
                   if(!!error){
                       res.json(error)
                   }else{
                       res.json(row)
                   }
                })
             }else if(languageKey=='NL'){
                 connection.query("select remarks,name from professionalsinfoviewdutch where Id=?",id,function(error,row){
                     if(!!error){
                         res.json(error)
                     }else{
                         res.json(row)
                     }
                  })
             }else{
               connection.query("select remarks,name from professionalsinfoviewenglish where Id=?",id,function(error,row){
                   if(!!error){
                       res.json(error)
                   }else{
                       res.json(row)
                   }
                })
             }
      })
       router.post('/listOfprofessionalsAccordingUserCriteria',function(req,res){
           var userId=req.body.token;
           var country=req.body.country;
           var livesIn=req.body.livesIn;
           var languageKey=req.body.languageKey
           var profession=req.body.clientsAndProfessionalsSearch;
           if(languageKey=='TG'){
             connection.query("select Id,userId,name,userroom,livesIn,country,genderInEnglish,profession,photo from professionalsinfoviewtigrina  where country=? and livesIn=? and profession like '%"+profession+"%'",[country,livesIn],function(error,row,fields){
                if(!!error){
                   res.json(error)
                }else{
                   res.json(row)
                }
              })
           }else if(languageKey=='NL'){
             connection.query("select Id,userId,name,userroom,livesIn,country,genderInEnglish,profession,photo from professionalsinfoviewdutch  where country=? and livesIn=? and profession like '%"+profession+"%'",[country,livesIn],function(error,row,fields){
                if(!!error){
                   res.json(error)
                }else{
                   res.json(row)
                }
              })
           }else{
             connection.query("select Id,userId,name,userroom,livesIn,country,genderInEnglish,profession,photo from professionalsinfoviewenglish  where country=? and livesIn=? and profession like '%"+profession+"%'",[country,livesIn],function(error,row,fields){
                if(!!error){
                   res.json(error)
                }else{
                   res.json(row)
                }
              })
           }

       })
       //search by name
       router.post('/listOfprofessionalsAccordingUserCriteriaBySearchBar',function(req,res){
           var userId=req.body.token;
           var country=req.body.country;
           var livesIn=req.body.livesIn;
           var languageKey=req.body.languageKey;
           var name=req.body.clientsAndProfessionalsSearch;
           if(languageKey=='TG'){
             connection.query("select Id,userId,name,userroom,livesIn,country,genderInEnglish,profession,photo from professionalsinfoviewtigrina  where country=? or livesIn=? or name=?",[country,livesIn,name],function(error,row,fields){
                if(!!error){
                   res.json(error)
                }else{
                   res.json(row)
                }
              })
           }else if(languageKey=='NL'){
             connection.query("select Id,userId,name,userroom,livesIn,country,genderInEnglish,profession,photo from professionalsinfoviewdutch  where country=? or livesIn=? or name=?",[country,livesIn,name],function(error,row,fields){
                if(!!error){
                   res.json(error)
                }else{
                   res.json(row)
                }
              })
           }else{
             connection.query("select Id,userId,name,userroom,livesIn,country,genderInEnglish,profession,photo from professionalsinfoviewenglish  where country=? or livesIn=? or name=?",[country,livesIn,name],function(error,row,fields){
                if(!!error){
                   res.json(error)
                }else{
                   res.json(row)
                }
              })
           }

       })
       function getProfessionId(profession,languageKey,callback){
         if(languageKey=='EN'){
           connection.query("select Id from workprofessionslist where english=?",profession,function(error,row){
             if(!!error){
             }else{
               callback(null,row[0].Id)
             }
           })
         }else if(languageKey=='TG'){
           connection.query("select Id from workprofessionslist where tigrina=?",profession,function(error,row){
             if(!!error){
               callback(error,"there was error")
             }else{
               callback(null,row[0].Id)
             }
           })
         }else if(languageKey=='NL'){
           connection.query("select Id from workprofessionslist where dutch=?",profession,function(error,row){
             if(!!error){
               callback(error,"there was error")
             }else{
               callback(null,row[0].Id)
             }
           })
         }

       }
        router.post('/listOfprofessionalsAccordingUserCriteriaAtHomePage',function(req,res){
           var profession=req.body.profession
           var country=req.body.country;
           var livesIn=req.body.livesIn;
           var languageKey=req.body.languageKey
           if(languageKey=='TG'){
             connection.query("select Id,name,photo,country,livesIn,profession from professionalsinfoviewtigrina where profession=? and country=? and livesIn=?",[profession,country,livesIn],function(error,row){
                 if(!!error){
                    res.json(error)
                 }else{
                    res.json(row)
                 }
             })
           }else if(languageKey=='NL'){
             connection.query("select Id,name,photo,country,livesIn,profession from professionalsinfoviewdutch where profession=? and country=? and livesIn=?",[profession,country,livesIn],function(error,row){
                 if(!!error){
                    res.json(error)
                 }else{
                    res.json(row)
                 }
             })
           }else{
             connection.query("select Id,name,photo,country,livesIn,profession from professionalsinfoviewenglish where profession=? and country=? and livesIn=?",[profession,country,livesIn],function(error,row){
                 if(!!error){
                    res.json(error)
                 }else{
                    res.json(row)
                 }
             })
           }
       })
//list of all professionalstable with a profession
         router.post('/listOfprofessionalstableProfession',function(req,res){
                 var profession=req.body.profession
             connection.query("select Id,name,profession from professionalstable where profession='"+profession+"'",function(row,error,fields){
                if(!!error){
                    res.json(error)
                }else{
                    res.json(row)
                }
             })
          })
          router.get('/listOfProfession/:profession',function(req,res){
            var profession=req.params.profession

          })
//list of all professionalstable according to their lives
         router.post('/listOfprofessionalstableLivesIn',function(req,res){
                 var livesIn=req.body.livesIn
             connection.query("select Id,name,livesIn from professionalstable where livesIn='"+livesIn+"'",function(row,error,fields){
                if(!!error){
                    res.json(error)
                }else{
                    res.json(row)
                }
             })
         })
//list of all professionalstable according to their working session
         router.post('/listOfprofessionalstableWorkingSession',function(req,res){
                 var workingSession=req.body.workingSession
             connection.query("select Id,name,professionalworksin from professionalwhoworkspermanently where professionalworksin='"+workingSession+"'",function(row,error,fields){
                if(!!error){
                    res.json(error)
                }else{
                    res.json(row)
                }
             })
         })
//notification from professional to client
       router.post('/notificationFromProfessional',function(req,res){
                var fromUserId=req.body.token
                var professionalId=req.decoded.professionalId
                var fromUserFullName=req.body.fromUserFullName;
                var toId=req.body.toId;
                var toName=req.body.toName;
                var notificationMessage=req.body.notificationMessage;
                var date=Date.now();
                var showedByUser=req.body.showedByUser;
            connection.query("insert into notificationtable(fromUserId,fromId,toId,message,timestamp,showedByUser)values('"+fromUserId+"','"+professionalId+"','"+toId+"','"+notificationMessage+"','"+date+"','"+showedByUser+"')",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else if(row.length===null){
                   res.send("NoNotifications")
                }else{
                   res.json(row)
                }
           })
       })

//post number of notification
      router.post('/userNotifications',function(req,res){
                 var id=req.body.token;
                 connection.query("select count(notificationtable.toUserId) as numberOfNotifications from notificationtable INNER JOIN users ON notificationtable.toUserId=users.id where  notificationtable.toUserId='"+id+"'  and notificationtable.timestamp >users.lastLogin",function(row,error,fields){
                    if(!!error){
                      res.json(error)
                    }else{
                       res.json(row)
                    }
                })

       })
      //notifications has been seen
      router.post('/numberOfNotificationHasBeenSeen',function(req,res){
        var userId=req.body.userId;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        connection.query("update users set lastLogin='"+dateTime+"' where id='?'",userId,function(error,row){
         
             if(!!error){
             }else{
               res.json("seen");
             }
         
        })
      })
//post notification
      router.post('/postTheUserNotifications',function(req,res){
             var id=req.body.token
              connection.query("select notificationtable.id as Id,notificationtable.fromUserId as fromUserId,users.name as username,users.photo as photo,notificationtable.message as message,notificationtable.tigrina as messageInTigrina,notificationtable.timestamp as date,notificationtable.toUserId as toUserId,notificationtable.location as location from notificationtable INNER JOIN users ON notificationtable.fromUserId=users.id  where notificationtable.toUserId='"+id+"' ORDER BY notificationtable.timestamp DESC  LIMIT 20",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//post notification on scrolling
      router.post('/postTheUserNotificationsOnScrolling',function(req,res){
             var id=req.body.token
             var lastNotificationId=req.body.lastNotificationId
              connection.query("select notificationtable.id as Id,notificationtable.fromUserId as fromUserId,users.name as username,users.photo as photo,notificationtable.message as message,notificationtable.tigrina as messageInTigrina,notificationtable.timestamp as date,notificationtable.toUserId as toUserId,notificationtable.location as location from notificationtable INNER JOIN users ON notificationtable.fromUserId=users.id  where notificationtable.id<'"+lastNotificationId+"'  and  notificationtable.toUserId='"+id+"' ORDER BY notificationtable.timestamp DESC  LIMIT 3",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//get userInfo
       router.post('/userInfo',function(req,res){
             var CurrentuserId=req.body.token
             var userIdLookingFor=req.body.userId;
             var location=req.body.location;
             var languageKey=req.body.languageKey;
             var selectedLanguage='';
             if(languageKey=='TG'){
             selectedLanguage='tigrina'
             }else if(languageKey=='NL'){
              selectedLanguage='dutch'
             }else{
              selectedLanguage='english'
             }
             if(location=="professional"){
                 connection.query("select users.name as name,users.email as email,users.photo as photo,webcollections."+selectedLanguage+" as gender,"+
                  "workprofessionslist."+selectedLanguage+" as profession,users.livesIn as livesIn,users.country as country,"+
                  "webcollections."+selectedLanguage+" as workSession,professionalstable.remarks as remarks from "+
                  "professionalstable INNER JOIN users ON professionalstable.userId=users.id inner join webcollections on webcollections.id=users.gender inner join workprofessionslist on workprofessionslist.id=professionalstable.profession  where professionalstable.userId=?",userIdLookingFor,function(row,error,fields){
                    if(!!error){
                        res.json(error)
                    }else{
                        res.json(row)
                    }
                 })
             }else if(location=="client"){

                 connection.query("select users.name as name,users.email as email,users.photo as photo,webcollections."+selectedLanguage+" as gender,"+
                   "workprofessionslist."+selectedLanguage+" as lookingFor,users.livesIn as livesIn,clients.timeTaken as timeTaken,"+
                   "clients.workDetails as workDetails from clients INNER JOIN users ON clients.userId=users.id inner join webcollections on webcollections.id=users.gender inner join workprofessionslist on workprofessionslist.id=clients.lookingFor  where clients.userId='?'",userIdLookingFor,function(error,row,fields){
                   if(!!error){
                       res.json(error)
                   }else{
                       res.json(row)
                   }
                 })
             }else if(location=="normalUser"){
                 connection.query("select users.name as name,users.photo as photo,webcollections."+selectedLanguage+" as gender,users.email as email,"+
                 "users.livesIn as livesIn,users.country as country from users inner join webcollections on webcollections.id=users.gender where users.id='?'",userIdLookingFor,function(error,row,fields){
                   if(!!error){
                       res.json(error)
                   }else{
                       res.json(row)
                   }
                 })
             }else if(location=="passenger"){
                         connection.query("select passenger.id as id,passenger.telephone as telephone,passenger.date as date,"+
                            " passenger.fromTime as fromTime,passenger.fromPlace as fromPlace,passenger.toPlace as toPlace,"+
                            " webcollections."+selectedLanguage+" as transportChoosed from passenger"+
                             " left join webcollections on webcollections.Id=passenger.transportChoosed  where passenger.userId='?'",userIdLookingFor,function(error,row,fields){
                              if(!!error){
                                  res.json(error)
                              }else{
                                  res.json(row)
                              }
                          })
             }else if(location=="transporttype"){
              connection.query("select transporttype.id as id,transporttype.numberOfSeats as numberOfSeats,transporttype.date as date,"+
                    " transporttype.fromTime as fromTime,transporttype.toTime as toTime,transporttype.fromPlace as fromPlace,"+
                    " transporttype.toPlace as toPlace,transporttype.additionalInfo as additionalInfo,transporttype.photo as viheclePhoto,"+
                    " transporttype.telephone as telephone,webcollections."+selectedLanguage+" as transporttype from transporttype "+
                    " left join webcollections on webcollections.Id=transporttype.`type` where transporttype.userId='?'",userIdLookingFor,function(error,row,fields){
                    if(!!error){
                        res.json(error)
                    }else{
                        res.json(row)
                    }
                  })
             }
       })
      router.post('/getTargetedPost',function(req,res){
         var postId=req.body.postId;
            connection.query("select id,posterPhoto,room,userId,posterName,fileName,fileType,date,postDescription,remarks,numberOfLikes,numberOfComments,numberOfShares,sharedPostOwnerUserId,idAtShareTable from postinfo where id=? ",postId,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
      })
//post all things to sale
      router.post('/postThingsToSale',function(req,res){
            connection.query("select salethingstable.id as id,salethingstable.userId as userId,salethingstable.itemName as itemName,salethingstable.price as price,salethingstable.description as description,salethingstable.unit as unit,salethingstable.date as date,salethingstable.place as place,salethingstable.fileName as fileName,webcollections.english as catagories from salethingstable inner join webcollections on webcollections.Id=salethingstable.catagories order by salethingstable.date desc limit 5",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
       //getSalethingsByItem
       router.post('/getSalethingsByItem',function(req,res){
               var selectedItemId=req.body.selectedCategoryId;
               var languageKey=req.body.languageKey;
               var selectedLanguage=''
               if(languageKey=='TG'){
                  selectedLanguage='tigrina'
               }else if(languageKey=='NL'){
                   selectedLanguage='dutch'
               }else{
                 selectedLanguage='english'
               }
              connection.query("select salethingstable.id as id,salethingstable.userId as userId,salethingstable.itemName as itemName,salethingstable.description as description,salethingstable.price as price,salethingstable.unit as unit,salethingstable.place as place,salethingstable.fileName as fileName,webcollections."+selectedLanguage+" as catagories from salethingstable inner join webcollections on webcollections.Id=salethingstable.catagories where salethingstable.catagories=? limit 10",selectedItemId,function(row,error,fields){
                 if(!!error){
                     res.json(error)
                 }else{
                     res.json(row)
                 }
              })
        })
       //get client items list
       router.post('/getMyItemsList',function(req,res){
              var userId=req.body.token;
               connection.query("select salethingstable.itemName as ItemName,"+
                "salethingstable.price as itemPrice,salethingstable.unit as itemPriceUnit,"+
                "salethingstable.place as ItemPlace,salethingstable.telephone as ItemTelephone,"+
                "salethingstable.description as ItemDescription,salethingstable.fileName as ItemFileName,"+
                "salethingstable.date as ItemRegistrationDate,salethings_item_amount.size as ItemSize,"+
                "salethings_item_amount.amount as ItemAmount from salethingstable left join salethings_item_amount on salethings_item_amount.itemId=salethingstable.id where salethingstable.userId=? order by salethingstable.date DESC",userId,function(row,error,fields){
                 if(!!error){
                     res.json(error)
                 }else{
                     res.json(row)
                 }
                })
       })
       router.post('/getMyItemsThatSold',function(req,res){
               var userId=req.body.token;
               connection.query("select soldItems.id as SoldItemId,salethingstable.itemName as itemName,"+
                "salethingstable.price as itemPrice,salethingstable.unit as priceUnit,"+
                "salethings_item_amount.size as itemSize,soldItems.numberOfItemsSold as numberOfItemsSold,"+
                "(salethings_item_amount.amount - soldItems.numberOfItemsSold) as totalNumberOfItemsLeft,"+
                 "salethingstable.price * soldItems.numberOfItemsSold as totalAmount,soldItems.date as boughtDate from soldItems inner join"+
                 " salethingstable on salethingstable.id=soldItems.idAtSaleThingsTable inner join salethings_item_amount"+
                 " on salethings_item_amount.id=soldItems.itemIdAtItemQuantity where salethingstable.userId=? order by soldItems.date DESC",userId,function(row,error,fields){
                 if(!!error){
                     res.json(error)
                 }else{
                     res.json(row)
                 }
                })
       });
       router.post('/getCustomersBoughtItems',function(req,res){
         var userId=req.body.token;
               connection.query("select salethingscustomer.name as customerName,salethingscustomer.country as customerCountry,salethingscustomer.city as customerCity,"+
                                 "salethingscustomer.postCode as customerPostcode,salethingscustomer.street as customerStreet,salethingscustomer.houseNumber as housenumber,"+
                                  "salethingscustomer.telephone as telephone,salethingscustomer.email as email,salethingscustomer.date as buyingDate,"+
                                   "soldItems.id as sellId,soldItems.numberOfItemsSold as numberOfItemsBought,salethingstable.itemName as itemName"+
                                   " from soldItems inner join salethingscustomer on salethingscustomer.id=soldItems.customerId"+
                                   " inner join salethingstable on salethingstable.id=soldItems.idAtSaleThingsTable where salethingstable.userId=? order by salethingscustomer.date DESC",userId,function(row,error,fields){
                 if(!!error){
                     res.json(error)
                 }else{
                     res.json(row)
                 }
                })
       })
       router.post('/getSaleItemById',function(req,res){
         var saleItemId=req.body.saleItemId;
         connection.query("select id,itemName,price,unit,fileName,catagories from salethingstable  where id=?",saleItemId,function(row,error,fields){
           if(!!error){
               res.json(error)
           }else{
               res.json(row)
           }
          })
       })
       router.post('/getDetailsInfoOfItemForSale',function(req,res){
         var saleItemId=req.body.saleItemId;
         connection.query("select id,size,amount from salethings_item_amount where itemId=?",saleItemId,function(row,error,fields){
           if(!!error){
               res.json(error)
           }else{
               res.json(row)
           }
          })
       })
      //post details of  things to sale
      router.post('/detailsOfThingsToBuy',function(req,res){
            var id=req.body.id;
            connection.query("select salethingstable.id as id,salethingstable.userId as userId,"+
              "salethingstable.itemName as itemName,salethingstable.price as price,salethingstable.unit as unit,"+
              "salethingstable.fileName as fileName,salethings_item_amount.id as itemId from salethingstable left join salethings_item_amount"+
              "  on salethings_item_amount.itemId=salethingstable.id    where salethingstable.id='?'",id,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//post all things to sale
      router.post('/postThingsForSaleOnHomePage',function(req,res){
            connection.query("select id,userId,price,place,description,date,fileName,catagories from salethingstable",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//delete thingstosal
        router.post('/deleteThingsToSale',function(req,res){
          var id=req.body.id;
          var fileName=req.body.fileName
          connection.query("delete from salethingstable where id=?",id,function(error,row,fields){
            if(!!error){
                 res.json(error)
            }else{
              var directory="saleThingsImageCollector";
                 removeFile(directory,fileName)
              res.json(row)
            }
          })
        })
//post all news
      router.post('/allNews',function(req,res){
        var historyType=req.body.historyType;
            connection.query("select posterInfoId,newsTextId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle,"+
              "news,fileName,fileType from newsview where historyType=? ORDER BY postedTime DESC  limit 3",historyType,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
      //post all news
      router.post('/allNewsAtHomePage',function(req,res){
        var historyType=req.body.historyType;

          connection.query("select posterInfoId,newsTextId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle,"+
              "news,fileName,fileType from newsview where historyType=? ORDER BY postedTime DESC  limit 5",historyType,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
       //news by title
       router.post('/getNewsByTitle',function(req,res){
         var title=req.body.title
           connection.query("select posterInfoId,newsTextId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle,"+
               "news,fileName,fileType from newsview where title=?",title,function(row,error,fields){
               if(!!error){
                   res.json(error)
               }else{
                   res.json(row)
               }
              })
       })
       router.post('/getNewsByTitleFromMobile',function(req,res){
           var title=req.body.title
           connection.query("select posterInfoId,newsTextId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle,"+
               "news,fileName,fileType from newsview where titleId=?",title,function(row,error,fields){
               if(!!error){
                   res.json(error)
               }else{
                   res.json(row)
               }
              })
       })
//post all news
      router.post('/allNewsRandombly',function(req,res){
            connection.query("select posterInfoId,newsTextId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle,"+
              "news,fileName,fileType from newsview ORDER BY postedTime DESC  limit 3",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//post all news titles
      router.post('/allNewsTitles',function(req,res){
            var historyType=req.body.historyType
            connection.query("select titleId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle from newsview where historyType='"+historyType+"' ORDER BY postedTime DESC",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
      router.post('/allNewsTitlesRandomly',function(req,res){
            connection.query("select titleId,userId,newsprovidername,newsprovidertele,uploaderPhoto,postedTime,title,subTitle from newsview  ORDER BY postedTime DESC limit 20",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//post sub titles
      router.post('/getSubTitles',function(req,res){
            var mainTitleId=req.body.titleId
            connection.query("select newssubtitle.newsSubTitle as subTitle from newssubtitle INNER JOIN newstitle ON newssubtitle.newsMainTitleId=newstitle.id where newstitle.id=?",mainTitleId,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })
//delete news
      router.post('/deleteNews',function(req,res){
        var id=req.body.id;
        var fileName=req.body.fileName
         var directory="newsImage"
         removeFile(directory,fileName)
            connection.query("delete from newsproviderinfo where id=?",id,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
      })
//post client  details
      router.post('/postDetailsOfContact',function(req,res){
            var id=req.body.id;
            connection.query("select name,email,livesIn,lookingFor,workDetails from clients  WHERE   Id = '?'",id,function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
       })

//insert computer maintenace information to the computer maintenance table in the database
       router.post('/issues',function(req,res){
             var userId=req.body.token
             var name=req.body.name;
             var problemType=req.body.problemType;
             var livesIn=req.body.livesIn
             var problem=req.body.problem;
             var problemCouldBeSolvedBy=req.body.problemCouldBeSolvedBy
             var date=Date.now()
         connection.query("insert into generalproblems(userId,name,problemType,livesIn,problem,problemCouldBeSolvedBy,timestamp)values('"+userId+"','"+name+"','"+problemType+"','"+livesIn+"','"+problem+"','"+problemCouldBeSolvedBy+"','"+date+"')",function(row,error,fields){
          if(!!error){
              res.json(error)
          }else{
              res.json("succesfully inserted")
          }
         })
       })
//get issues
        router.post('/getIssues',function(req,res){
         connection.query("select generalproblems.id as id,generalproblems.problem as problem,"+
                "generalproblems.timestamp as timestamp,generalproblems.problemType as problemType,users.id as userId,users.name as username,users.photo as photo"+
                " from generalproblems INNER JOIN users ON generalproblems.userId=users.id  ORDER BY generalproblems.timestamp DESC Limit 10",function(row,error,fields){
          if(!!error){
              res.json(error)
          }else{
              res.json(row)
          }
         })
       })
//insert suggestions for a problems
           router.post('/generalProblemSuggestion',function(req,res){
                 var userId=req.body.token
                 var problemId=req.body.problemId;
                 var suggestion=req.body.suggestion;
                 var date=Date.now()
                 connection.query("insert into generalproblemsuggestions(userId,generalProblemId,suggestion,timestamp)values('"+userId+"','"+problemId+"','"+suggestion+"','"+date+"')",function(row,error,fields){
                  if(!!error){
                      res.json(error)
                  }else{
                      res.json(row)
                  }
                 })
           })
//look suggestions of a problem
           router.post('/lookSuggestions',function(req,res){
                 var userId=req.body.token
                 var problemId=req.body.problemId;
                 connection.query("select suggestionId,suggesterUserId,generalProblemId,suggestion,suggestionTime,count(reply) as numberOfReplies,"+
                  "suggesterUsername,suggesterPhoto,replyId,replyerUserId suggestionIdAtReply,reply,timeReplied,"+
                  "replyerName,replyerPhoto from generalproblemsuggestionandrepliesview where generalProblemId='?' group by suggestionId",problemId,function(error,row,fields){
                    if(!!error){
                       res.json(error)
                    }else{
                       res.json(row)
                    }
                })
           })
//insert reply suggestions for a problems
           router.post('/replySuggestion',function(req,res){
                 var userId=req.body.token
                 var suggestionId=req.body.suggestionId;
                 var message=req.body.message;
                 var date=Date.now()
                 connection.query("insert into generalproblemsreply(userId,generalproblemsuggestionsId,reply,timestamp)values('"+userId+"','"+suggestionId+"','"+message+"','"+date+"')",function(row,error,fields){
                  if(!!error){
                      res.json(error)
                  }else{
                      res.json(row)
                  }
                 })
           })
//get reply suggestions for a problems
           router.post('/getReplies',function(req,res){
            var suggestionId=req.body.suggestionId;
                 connection.query("select generalproblemsreply.id as generalproblemsreplyId,users.id as userId,users.name as replyerName,users.photo as photo,generalproblemsreply.generalproblemsuggestionsId as generalproblemsuggestionsId ,"+
                  "generalproblemsreply.reply as reply,generalproblemsreply.timestamp as date from generalproblemsreply "+
                  " INNER JOIN users ON generalproblemsreply.userId=users.id where generalproblemsreply.generalproblemsuggestionsId='?' ORDER BY generalproblemsreply.timestamp ASC",suggestionId,function(row,error,fields){
                  if(!!error){
                      res.json(error)
                  }else{
                      res.json(row)
                  }
                 })
           })
//news
           router.post('/newsMainTitle',function(req,res){
                 var userId=req.body.token
                 var newsTextId=req.body.newsTextId;
                 var newsMainTitle=req.body.newsMainTitle
                 newsMainTitle=newsMainTitle.replace("'","\\'");
             connection.query("insert into newstitle(newsMainTitle,newsTextId)values('"+newsMainTitle+"','"+newsTextId+"')",function(row,error,fields){
              if(!!error){
                  res.json(error)
              }else{
                  res.json(row)
              }
             })
           })
//news file upload ...................................................................................
      var newsFileUpload=multer({dest:'./public/newsImage'});
       router.post('/newsFileUploader',newsFileUpload.single('file'),newsFileUploadToDatabase);
       function newsFileUploadToDatabase(req,res){
            var userId=req.body.data[0];
            var subTitleId=req.body.data[1];
             var file=req.file;
            var fileName=file.filename;
            var fileType=file.mimetype;
            var fileSize=file.size;
              connection.query("insert into newsimage(subtitleId,fileName,fileType) values('"+subTitleId+"','"+fileName+"','"+fileType+"')",function(error,row,fields){
                if(!!error){
                 res.json(error)
                }else{
                  res.json("successfully uploaded")
                }
              });
       }
    router.post('/newsSubTitles',function(req,res){
         var userId=req.body.token
         var newsSubTitle=req.body.newsSubTitle;
         newsSubTitle=newsSubTitle.replace("'","\\'");
         var newsMainTitleId=req.body.newsMainTitleId;
     connection.query("insert into newssubtitle(newsSubTitle,newsMainTitleId)values('"+newsSubTitle+"','"+newsMainTitleId+"')",function(row,error,fields){
      if(!!error){
          res.json(error)
      }else{
          res.json(row)
      }
     })
   })
//main news
             router.post('/mainNews',function(req,res){
                 var userId=req.body.token
                 var newsText=req.body.newsText;
                 var newsProviderId=req.body.newsProviderId;
                  var post={newsText:newsText,newsProviderId:newsProviderId};
                  connection.query('INSERT INTO newstext SET ?', post, function (error, row) {
                      if (!!error){
                       res.json(error)
                      }else{
                        res.json(row);
                      }
                  });
             })
// newsUploaderInfo
             router.post('/newsUploaderInfo',function(req,res){
                  var userId=req.body.token
                  var newsprovidername=req.body.newsprovidername
                  var newsprovidertele=req.body.newsprovidertele
                  var historyType=req.body.historyType;
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date+' '+time;
                   var post={userId:userId,newsprovidername:newsprovidername,newsprovidertele:newsprovidertele,historyType:historyType,timestamp:dateTime};
                  connection.query('INSERT INTO newsproviderinfo SET ?', post, function (error, row) {
                      if (!!error){
                       res.json(error)
                      }else{
                        res.json(row);
                      }
                  });
           })
//post number of messages
           router.post('/postNumberOfMessages',function(req,res){
                 var id=req.body.token
                 connection.query("select count(messagetable.toUserId) as numberOfMessages from messagetable INNER JOIN users ON messagetable.toUserId=users.id where messagetable.toUserId='"+id+"'  and messagetable.timestamp >users.lastLogin",function(row,error,fields){
                    if(!!error){
                        res.json(error)
                    }else{
                       res.json(row)
                    }
                 })
           })
//post messages
            router.post('/postNotificationMessages',function(req,res){
                   var id=req.body.token
                   connection.query("SELECT   messagetable.Id as Id,messagetable.toUserId as toUserId,messagetable.fromUserId as fromUserId,messagetable.message as message,messagetable.timestamp as date,messagetable.location as location,users.name as username,users.userroom as room,users.photo as photo"+
                    " FROM     messagetable INNER JOIN users ON messagetable.fromUserId=users.id"+
                    "    where    (messagetable.toUserId, messagetable.fromUserId, messagetable.timestamp) IN ("+
                    " SELECT   messagetable.toUserId, messagetable.fromUserId, MAX(messagetable.timestamp)"+
                    " FROM     messagetable    where     messagetable.toUserId='?'"+
                    " GROUP BY messagetable.toUserId, messagetable.fromUserId)"+
                    " ORDER BY messagetable.timestamp DESC limit 5",id,function(row,error,fields){
                      if(!!error){

                          res.json(error)
                        }else{
                           res.json(row)
                        }
                    })
           })
//post messages on scrolling
            router.post('/postMessagesOnScrolling',function(req,res){
                   var id=req.body.token
                   var lastMessageId=req.body.lastMessageId
                   connection.query("select messagetable.Id as Id,messagetable.fromUserId as fromUserId,users.name as username,users.photo as photo,messagetable.timestamp as date,messagetable.message as message,messagetable.toUserId as toUserId,messagetable.location as location from messagetable INNER JOIN users ON messagetable.fromUserId=users.id  where  messagetable.Id<'"+lastMessageId+"' and  messagetable.toUserId='?' ORDER BY messagetable.timestamp DESC LIMIT 3",id,function(row,error,fields){
                      if(!!error){
                          res.json(error)
                        }else{
                           res.json(row)
                        }
                    })
           })
            router.post('/deleteNotification',function(req,res){
                 var id=req.body.infoId;
                 var deleteFrom=req.body.deleteFrom;
                 if(deleteFrom=='Notifications'){
                    connection.query("delete from notificationtable  where id=?",id,function(error,row){
                      if(!!error){
                      }else{
                        res.json("deleted successfully");
                      }
                     })
                 }else if(deleteFrom=='Messages'){
                   connection.query("delete from messagetable  where Id=?",id,function(error,row){
                      if(!!error){
                      }else{
                        res.json("deleted successfully");
                      }
                     })
                 }else if(deleteFrom=='Friend Requests'){
                   connection.query("delete from friendrequests where Id=?",id,function(error,row){
                    if(!!error){
                    }else{
                      res.json("deleted successfully");
                    }
                   })
                 }
            })
            //
//getMessagesThatHadWithMe
            router.post('/getMessagesThatHadWithMe',function(req,res){
                   var fromUserId=req.body.token;
                   var toUserId=req.body.toUserId;
                   connection.query("(select users.name as name,users.photo as photo,messagetable.message as message,"+
                    " messagetable.timestamp as date from messagetable INNER JOIN users ON messagetable.fromUserId=users.id"+
                    " where messagetable.fromUserId='"+fromUserId+"' and messagetable.toUserId='"+toUserId+"') UNION (select users.name as name,"+
                    "users.photo as photo,messagetable.message as message, messagetable.timestamp as date from messagetable "+
                    "INNER JOIN users ON messagetable.fromUserId=users.id where messagetable.fromUserId='"+toUserId+"' and"+
                    " messagetable.toUserId='"+fromUserId+"') ORDER BY date desc LIMIT 10",function(row,error,fields){
                      if(!!error){
                          res.json(error)
                     }else{
                           res.json(row)
                        }
                    })
           })
            router.post('/getPrivateRoom',function(req,res){
                 var userId=req.body.userId;
                 var toUserId=req.body.toUserId;
                 connection.query("select Id,roomUserId1 from usersChatTable where userId1=? and userId2=?",[toUserId,userId],function(error,row){
                    if(!!error){
                    }else{
                      res.json(row)
                    }
                 })

            })
            router.post('/getMessagesThatHadWithMeFromMobile',function(req,res){
                   var fromUserId=req.body.token;
                   var toUserId=req.body.toUserId;
                   connection.query("(select users.name as name,users.photo as photo,messagetable.message as message,"+
                    " messagetable.timestamp as date from messagetable INNER JOIN users ON messagetable.fromUserId=users.id"+
                    " where messagetable.fromUserId='"+fromUserId+"' and messagetable.toUserId='"+toUserId+"') UNION (select users.name as name,"+
                    "users.photo as photo,messagetable.message as message, messagetable.timestamp as date from messagetable "+
                    "INNER JOIN users ON messagetable.fromUserId=users.id where messagetable.fromUserId='"+toUserId+"' and"+
                    " messagetable.toUserId='"+fromUserId+"') ORDER BY date desc LIMIT 10",function(row,error,fields){
                      if(!!error){
                          res.json(error)
                     }else{
                           res.json(row)
                        }
                    })
           })
//post all messages belong to a user
            router.post('/postAllMessages',function(req,res){
                  var id=req.body.token;
                  connection.query("select messagetable.Id as Id,messagetable.fromUserId as fromUserId,users.name as fromUserName,users.photo as senderPhoto,messagetable.timestamp as date,messagetable.location as location from messagetable INNER JOIN users ON messagetable.fromUserId=users.id  where  messagetable.toUserId='?' GROUP BY messagetable.fromUserId",id,function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })
//share post
            router.post('/sharePost',function(req,res){
                  var currentUserId=req.body.token;
                  var ownerUserId=req.body.postOwnerUserId;
                  var postId=req.body.postId;
                  var date=Date.now();
                  var sharedescription=req.body.sharedescription;
                  connection.query("insert into sharetable(userId,ownerUserId,postId,date,description)values('"+currentUserId+"','"+ownerUserId+"','"+postId+"','"+date+"','"+sharedescription+"')",function(row,error,fields){
                  if(!!error){
                      res.json(error)
                    }else{
                       res.json(row)
                    }
               })
           })
//insert shared post in posts
           router.post('/sharePostInPosts',function(req,res){
                  var currentUserId=req.body.token;
                  var ownerUserId=req.body.postOwnerUserId;
                  var postId=req.body.postId;
                  var userId=req.body.token;
                   var description= req.body.description
                   var fileType=req.body.fileType;
                   var fileName=req.body.fileName;
                   var firstPosterName=req.body.firstPosterName;
                   var sharedescription=req.body.sharedescription
                   if(fileType=="image/jpeg"){
                     var remarks="shared "+firstPosterName+"s photo"
                   }else if(fileType=="video/mp4"){
                    var remarks="shared "+firstPosterName+"s vidio"
                   }else{
                    var remarks="shared "+firstPosterName+"s post"
                   }
                  var date=Date.now();
                 connection.query("insert into posts(postDescription,fileType,fileName,userId,timestamp,remarks,shareDescription) values('"+description+"','"+fileType+"','"+fileName+"','"+userId+"','"+date+"','"+remarks+"','"+sharedescription+"')",function(error,row,fields){
                  if(!!error){
                   res.json(error)
                 }else{
                    //res.redirect('/jobFinder/home/logedIn/currentUserId')
                    res.render('index.html')
                  }
                });
           })

//number of friend requests
            router.post('/numberOfFriendRequest',function(req,res){
                var id=req.body.token
               connection.query("select count(friendrequests.toUserId) as numberOfFriendRequests from friendrequests INNER JOIN users ON friendrequests.toUserId=users.id where friendrequests.toUserId='"+id+"'  and friendrequests.date >users.lastLogin",function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })
//friend requests
            router.post('/friendRequests',function(req,res){
                var id=req.body.token
               connection.query("select friendrequests.Id as Id,friendrequests.userId as fromUserId,friendrequests.toUserId as toUserId,friendrequests.location as location,users.userroom as userroom,users.name as username,users.photo as photo,friendrequests.date as date from friendrequests INNER JOIN users ON friendrequests.userId=users.id where  toUserId='?' and friendrequests.isFriendNow is null ORDER BY friendrequests.date DESC limit 7",id,function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })
//friend requests on scrolling
            router.post('/friendRequestsOnScrolling',function(req,res){
                var id=req.body.token
                var lastFriendRequestId=req.body.lastFriendRequestId;
               connection.query("select friendRequests.Id as Id,friendRequests.userId as fromUserId,friendRequests.toUserId as toUserId,friendRequests.location as location,users.userroom as userroom,users.name as username,users.photo as photo,friendRequests.date as date from friendrequests INNER JOIN users ON friendrequests.userId=users.id where  friendRequests.Id<'"+lastNotificationId+"' and toUserId='?' and friendrequests.isFriendNow is null ORDER BY friendRequests.date limit 5",id,function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })
//ok confirmition of friend request
            router.post('/okFriendRequest',function(req,res){
                var fromUserId=req.body.token
                var toUserId=req.body.toUserId;
                var id=req.body.id
                var message="has accepted you."
               var tigrina=''
                var date=Date.now();
               connection.query("update friendrequests SET isFriendNow='yes' where Id='?'",id,function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
               genderChecker(fromUserId,function(error,gender){
                  if(gender=='Female'){
                   tigrina='ንምሕዝነታዊ ሕቶኹም ተቐቢላትኩም ኣላ።'
                  }else{
                   tigrina='ንምሕዝነታዊ ሕቶኹም ተቀቢልኩም ኣሎ።'
                  }
                 
                 connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+date+"')",function(row,error,fields){
                   if(!!error){
                   }else{
                   }
                 })
               })
               
           })
            function genderChecker(id,callback){
              connection.query("select users.id as id,webcollections.english as englishGender "+
                 " from users inner join webcollections"+ 
                  " on webcollections.Id=users.gender where users.id=?",id,function(error,row){
                   if(!!error){
                     }else{
                      callback(null,row[0].englishGender)
                     }
                })
            }
//no confirmition of friend request
            router.post('/noFriendRequest',function(req,res){
                var fromUserId=req.body.token;
                var toUserId=req.body.toUserId;
                var id=req.body.id
                var date=Date.now();
                var message="did not accept your friend request";
                var tigrina=''
               connection.query("update friendrequests SET isFriendNow='no' where Id='?'",id,function(row,error,fields){
                if(!!error){
                    //res.json(error)
                  }else{
                     res.json(row)
                  }
               })
                genderChecker(fromUserId,function(error,gender){
                  if(gender=='Female'){
                   tigrina='ንምሕዝነታዊ ሕቶኹም ኣይተቐበለትኩምን።'
                  }else{
                   tigrina='ንምሕዝነታዊ ሕቶኹም ኣይተቐበለኩምን።'
                  }
                  connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+date+"')",function(row,error,fields){
                   if(!!error){
                     }else{
                     }
                  })
                })
               
           })
//insert friend requests
            router.post('/insertFriendRequests',function(req,res){
                var userId=req.body.token
                var toUserId=req.body.toUserId;
                var location=req.body.userIs
                var date=Date.now();
                var message="Friend Request"
               connection.query("insert into friendrequests(userId,toUserId,date,message,location)values('"+userId+"','"+toUserId+"','"+date+"','"+message+"','"+location+"')",function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json({rowresult:row,
                               userId:userId})
                  }
               })
           })
//post computer maintenance info
            router.post('/postProblemsIssues',function(req,res){
              var problemType=req.body.problemType
               connection.query("select generalproblems.id as id,generalproblems.problem as problem,"+
                "generalproblems.timestamp as timestamp,generalproblems.problemType as problemType,users.id as userId,users.name as username,users.photo as photo"+
                " from generalproblems INNER JOIN users ON generalproblems.userId=users.id WHERE generalproblems.problemType='"+problemType+"' ORDER BY generalproblems.timestamp DESC limit 10",function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })
//delete computer problem info
            router.post('/deleteProblem',function(req,res){
              var id=req.body.id
               connection.query("delete from generalproblems where id='"+id+"'",function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })

//post messages that sended to the current user
            router.post('/postMessageFrom',function(req,res){
                var fromId=req.body.fromId
                var toId=req.body.toId;
               connection.query("select fromId,fromIdName,toId,toIdName,message from messagetable where fromId='"+fromId+"' AND toId='"+toId+"'",function(row,error,fields){
                if(!!error){
                    res.json(error)
                  }else{
                     res.json(row)
                  }
               })
           })
//post data from professional  main table
    router.post('/professionalMainTable',function(req,res){
        var userId=req.body.userId
        var languageKey=req.body.languageKey;
        var selectedLanguage=''
        if(languageKey=='TG'){
           selectedLanguage='tigrina'
        }else if(languageKey=='NL'){
           selectedLanguage='dutch'
        }else{
          selectedLanguage='english'
        }
        connection.query("select professionalstable.Id as Id,users.name as name,users.email as email,users.userroom as userroom,professionalstable.telephone as telephone,"+
              "professionalstable.remarks as remarks,workprofessionslist."+selectedLanguage+" as profession,professionalstable.profession as professionId,"+
              "webcollections."+selectedLanguage+" as workSession,professionalstable.workSession as workSessionId,users.birthDate as dateOfBirth,users.gender as gender,"+
              "professionalsworksituation."+selectedLanguage+" as lookingForJobThisTime,professionalstable.lookingForJobThisTime as lookingForJobThisTimeId  from professionalstable"+
              " INNER JOIN users ON professionalstable.userId=users.id INNER JOIN webcollections ON"+
              " webcollections.Id=professionalstable.workSession INNER JOIN professionalsworksituation "+
              "ON professionalstable.userId=professionalsworksituation.userId INNER JOIN workprofessionslist ON workprofessionslist.Id=professionalstable.profession   where professionalstable.userId='"+userId+"'",function(row,error,fields){
              if(!!error){
                  res.json(error)
                }else{
                   res.json(row)
                }
             })
       
   })

//post client working period in date from needtranslation
    router.post('/postClientMainTableData',function(req,res){
        var clientId=req.body.token
        var languageKey=req.body.languageKey;
        var selectedLanguage=""
        if(languageKey=='TG'){
            selectedLanguage='tigrina'
        }else if(languageKey=='NL'){
            selectedLanguage='dutch'
        }else{
           selectedLanguage='english'
        }
         connection.query("select clients.Id as Id,users.userroom as userroom,clients.telephone as telephone,"+
                "workprofessionslist."+selectedLanguage+" as lookingFor,clients.lookingFor as lookingForIdInClient,clients.timeTaken as timeTaken,clients.workDetails as workDetails,clients.workSummary as workSummary,"+
                "webcollections."+selectedLanguage+" as situationOfWorkAtThisTime,clients.situationOfWorkAtThisTime as situationOfWorkAtThisTimeIdInClients,clients.workCountry as workCountry,"+
                "clients.workCity as workCity,clients.name as name,clients.url as url from clients INNER JOIN users ON clients.userId=users.id INNER JOIN workprofessionslist ON workprofessionslist.Id=clients.lookingFor INNER JOIN webcollections ON webcollections.Id=clients.situationOfWorkAtThisTime where clients.userId=?",clientId,function(error,row){
                if(!!error){
                  res.json(error)
                }else{
                   res.json(row)
                }
          })
        
   })
//insert like information
   //  router.post('/likeInfo',function(req,res){
   //        var userId=req.body.token;
   //        var postId=req.body.postId;
   //        var liked='yes';
   //        var comments=req.body.comments;
   //          var timestamp=Date.now();
   //          var location=req.body.userIs
   //     connection.query("insert into postlikesandcomments(userId,postId,liked,comment,timestamp,location)values('"+userId+"','"+postId+"','"+liked+"','"+comments+"','"+timestamp+"','"+location+"')",function(row,error,fields){
   //      if(!!error){
   //          res.json(error)
   //        }else{
   //           res.json(row)
   //        }
   //     })
   // })
//insert comment information to posts table
   //  router.post('/commentInfo',function(req,res){
   //        var userId=req.body.token
   //        var postId=req.body.postId;
   //        var comments=req.body.comments;
   //        var timestamp=Date.now();
   //        var location=req.body.userIs
   //     connection.query("insert into commentstable(postId,userId,comment,timestamp,location)values('"+postId+"','"+userId+"','"+comments+"','"+timestamp+"','"+location+"')",function(row,error,fields){
   //      if(!!error){
   //          res.json(error)
   //        }else{
   //           res.json(row)
   //        }
   //     })
   // })
  
   
   
//post likes and comments
    router.post('/postComment',function(req,res){
      var postId=req.body.id;
       connection.query("select commentstable.postId as postId,commentstable.`comment` as comment,commentstable.timestamp as date,users.photo as userPhoto,users.name as name,commentstable.userId as userId,commentstable.Id as Id from commentstable INNER JOIN users ON commentstable.userId=users.id where postId='?'",postId,function(row,error,fields){
        if(!!error){
            res.json(error);
          }else{
            res.json(row);
          }
       })
    })

     router.post('/postCommentToMobile',function(req,res){
      var postId=req.body.id;
       connection.query("select commentstable.postId as postId,commentstable.`comment` as comment,commentstable.timestamp as date,users.photo as userPhoto,users.name as name,commentstable.userId as userId,commentstable.Id as Id from commentstable INNER JOIN users ON commentstable.userId=users.id where postId='?'",postId,function(row,error,fields){
        if(!!error){
            res.json(error);
          }else{
            res.json(row);
          }
       })
    })
//ADMIN WORKS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//passengers
    router.post('/allPassengers',function(req,res){
      var permissions=req.body.permissions
      var passengers=req.body.passengers;
      if(permissions=='admin'){
            connection.query("select id,userId,telephone,date,fromPlace,toPlace,transportChoosed,code,approved from passenger where telephone=?",passengers,function(error,row,fields){
                     if(error){
                      res.json(error)
                     }else{
                      res.json(row);
                     }
              })
      }else{
        res.json("not allowed")
      }

    })
    //transport owners
    router.post('/allTransportOwners',function(req,res){
       var permissions=req.body.permissions
       var transportOwner=req.body.transportOwner
      if(permissions=='admin'){
          connection.query("select * from transporttype where fromPlace=?",transportOwner,function(error,row,fields){
                     if(error){
                      res.json(error)
                     }else{
                      res.json(row);
                     }
          })

      }else{
        res.json("not allowed")
      }
    })
  //users
   router.post('/getAllusersToAdminPage',function(req,res){
       var permissions=req.body.permissions
       var users=req.body.users;
     if(permissions=='admin'){
         connection.query("select users.id as id,users.name as name,users.username as username,users.email as email,"+
           "users.photo as photo,users.lastLogin as lastLogin,users.userroom as userroom,permissiontable.permission as permission,"+
           "users.gender as gender,users.birthDate as birthDate,users.registrationDate as registrationDate,users.country as country,users.livesIn as livesIn from users LEFT JOIN permissiontable "+
           " ON users.id=permissiontable.userId where users.id=?",users,function(error,row,fields){
                    if(error){
                     res.json(error);
                    }else{
                     res.json(row);
                    }
         })
      }else{
        res.json("not allowed")
      }
    })
   router.post('/adminDeleteUser',function(req,res){
         var id=req.body.userIdToBeDeleted;
        connection.query("delete from users where id='?'",id,function(error,row,fields){
                   if(error){
                    res.json(error)
                   }else{
                    res.json(row);
                   }
        })
    })
//post rooms
   router.post('/adminpostUsersRoom',function(req,res){
      var permissions=req.body.permissions
      if(permissions=='admin'){
        connection.query("select * from chatrooms",function(error,row,fields){
                   if(error){
                    res.json(error)
                   }else{
                    res.json(row);
                   }
        })
      }else{
        res.json("not allowed")
      }
    })
  //delete room
   router.post('/adminDeleteRoom',function(req,res){
         var id=req.body.id;
        connection.query("delete from chatrooms where Id='?'",id,function(error,row,fields){
                   if(error){
                    res.json(error)
                   }else{
                    res.json(row);
                   }
        })
    })
   //post clients
   router.post('/adminpostClients',function(req,res){
         // var userId=req.body.token;
          var permissions=req.body.permissions
          var client=req.body.client
      if(permissions=='admin'){
          connection.query("select Id,userId,telephone,lookingFor,timestamp,timeTaken,workDetails,situationOfWorkAtThisTime from clients where userId=?",client,function(error,row,fields){
                     if(error){
                      res.json(error)
                     }else{
                      res.json(row);
                     }
          })
      }else{
        res.json("not allowed")
      }
    })
  //delete clientm
   router.post('/adminDeleteClient',function(req,res){
        // var userId=req.body.token;
         var id=req.body.clientId;
        connection.query("delete from clients where Id='?'",id,function(error,row,fields){
                   if(error){
                    res.json(error)
                   }else{
                    res.json(row);
                   }
        })
    })
    //delete profession
   router.post('/adminDeleteProfessional',function(req,res){
        // var userId=req.body.token;
         var id=req.body.professionalId;
        connection.query("delete from professionalstable where Id='?'",id,function(error,row,fields){
                   if(error){
                    res.json(error)
                   }else{
                    res.json(row);
                   }
        })
    })
    router.post('/getCurrentUserId',function(req,res){
       var userId=req.body.token;
       res.json(userId)
    })
    router.post('/deleteTransportOwners',function(req,res){
      var userId=req.body.token;
      var transportOwnerId=req.body.transportOwnerId
      connection.query("delete from transporttype where id='?'",transportOwnerId,function(error,row,fields){
        if(!!error){
          res.json("there was error while deleting")
        }else{
          res.json("deleted succesfully")
        }
      })
    })
  router.post('/deletePassengers',function(req,res){
    //var userId=req.body.token;
    var passengerId=req.body.passengerId
    connection.query("delete from passenger where id='?'",passengerId,function(error,row,fields){
      if(!!error){
        res.json("there was error while deleting")
      }else{
        res.json("deleted succesfully")
      }
    })
  })
  router.post('/adminProfessionals',function(req,res){
     var permissions=req.body.permissions
     var adminprofessinal=req.body.adminprofessinal;
      if(permissions=='admin'){
        
          connection.query("select * from professionalstable where userId=?",adminprofessinal,function(error,row,fields){
            if(!!error){
              res.json("error while searching professionals")
            }else{
              res.json(row)
            }
          })
        }else{
          res.json("not allowed")
        }
  })
  router.post('/addPermission',function(req,res){
       var permissionAssigner=req.body.token;
       var userId=req.body.userId;
       var permission=req.body.permission;
       var date=Date.now();
      connection.query("insert into permissiontable(userId,permission,permissionAssignerId,assigningDate)values('"+userId+"','"+permission+"','"+permissionAssigner+"','"+date+"')",function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
  })
   router.post('/deletePermission',function(req,res){
       var permissionAssigner=req.body.token;
       var permissionId=req.body.permissionId;
      connection.query("delete from permissiontable where Id=?",permissionId,function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
  })
  router.post('/updatePermission',function(req,res){
       var permissionAssigner=req.body.token;
       var userId=req.body.userId;
       var permission=req.body.permission;
       var permissionId=req.body.permissionId
       var date=Date.now();
      connection.query("update  permissiontable SET permission='"+permission+"', permissionAssignerId='"+permissionAssigner+"',assigningDate='"+date+"' where Id='?'",permissionId,function(error,row,fields){
        if(!!error){
          res.json(error)
        }else{
          res.json(row);
        }
      })
  })
      function englishProfessionName(workRequest,callback){
          if(workRequest.languageKey=='TG'){
            connection.query("select english from workprofessionslist where tigrina=?",workRequest.profession,function(error,row){
              if(!!error){
                callback(error,"there was error")
              }else{
                callback(null,row[0].english)
              }
            })
          }else if(workRequest.languageKey=='NL'){
            connection.query("select english from workprofessionslist where dutch=?",workRequest.profession,function(error,row){
              if(!!error){
                callback(error,"there was error")
              }else{
                callback(null,row[0].english)
              }
            })
          }else{
            callback(null,workRequest.profession)
          }
      }
      router.post('/insertExternalData',function(req,res){
        var country=req.body.country;
        var what=req.body.profession;
        var location=req.body.livesIn;
        var languageKey=req.body.languageKey
        var workRequest={}
        workRequest.country=country;
        workRequest.profession=what;
        workRequest.city=location
        workRequest.languageKey=languageKey;
        connection.query("select workCity,registeredDate from clientsFromExternal where workCity=?",location,function(error,row){
          if(!!error){
          }else if(row.length==0){
              englishProfessionName(workRequest,function(error,result){
                var workRequest2={}
                if(country=='Netherlands'){
                  workRequest2.dot='.nl'
                }else if(country=='United Kingdom'){
                  workRequest2.dot='.co.uk'
                }else{
                  workRequest2.dot='.com'
                }
                workRequest2.work=result;
                workRequest2.city=location
                getExternalWorkInfo(workRequest2,function(error,result2){
                })
                res.json("data is inserted")
              })
          }else{
            res.json("there is data already")
          }
        })
      })
      router.post('/getjob',function(req,res){
           var country=req.body.country;
           var what=req.body.profession;
           var location=req.body.livesIn;
           var languageKey=req.body.languageKey
           var workRequest={}
           workRequest.country=country;
           workRequest.profession=what;
           workRequest.city=location
           workRequest.languageKey=languageKey;
           getProfessionId(what,languageKey,function(error,result){
             if(result==undefined){
             }else{
               var professionId=result;
               if(languageKey=='EN'){
                     connection.query("select clients.Id as Id,clients.workCountry as workCountry,clients.workCity as workCity,workprofessionslist.english as lookingFor,clients.name as name,clients.url as url,clients.workSummary as summary,users.photo as photo from clients  INNER JOIN workprofessionslist ON workprofessionslist.Id=clients.lookingFor INNER JOIN users on users.id=clients.userId where  clients.lookingFor=? and clients.workCountry=? and clients.workCity=?",[professionId,country,location],function(error,row,fields){
                        if(!!error){
                             res.json(error)
                        }else{
                          res.json(row)
                        }
                       })
               }else if(languageKey=='TG'){
                   connection.query("select clients.Id as Id,clients.workCountry as workCountry,clients.workCity as workCity,clients.workDetails as wordDetails,workprofessionslist.tigrina as lookingFor,clients.name as name,clients.url as url,clients.workSummary as summary,users.photo as photo from clients  INNER JOIN workprofessionslist ON workprofessionslist.Id=clients.lookingFor INNER JOIN users on users.id=clients.userId where  clients.lookingFor=? and clients.workCountry=? and clients.workCity=?",[professionId,country,location],function(error,row,fields){
                      if(!!error){
                           res.json(error)
                      }else{
                        res.json(row)
                      }
                     })
               }else if(languageKey=='NL'){
                  connection.query("select clients.Id as Id,clients.workCountry as workCountry,clients.workCity as workCity,clients.workDetails as wordDetails,workprofessionslist.dutch as lookingFor,clients.name as name,clients.url as url,clients.workSummary as summary from clients  INNER JOIN workprofessionslist ON workprofessionslist.Id=clients.lookingFor where  clients.lookingFor=? and clients.workCountry=? and clients.workCity=?",[professionId,country,location],function(error,row,fields){
                    if(!!error){
                         res.json(error)
                    }else{
                      res.json(row)
                    }
                   })
               }else{

                  connection.query("select clients.Id as Id,clients.workCountry as workCountry,clients.workCity as workCity,clients.workDetails as wordDetails,workprofessionslist.english as lookingFor,clients.name as name,clients.url as url,clients.workSummary as summary from clients  INNER JOIN workprofessionslist ON workprofessionslist.Id=clients.lookingFor where  clients.lookingFor=? and clients.workCountry=? and clients.workCity=?",[professionId,country,location],function(error,row,fields){
                    if(!!error){
                         res.json(error)
                    }else{
                      res.json(row)
                    }
                   })
               }
             }

           })
      })
  
//get publish key
 router.get('/getPublishKey',function(req,res){
     res.json(publicKey)
 })
 var io=require('socket.io')(http);

     router.get('/getWord/:fromLanguageId/:word/:toLanguageId',function(req,res){
        var fromLanguageId=req.params.fromLanguageId;
        var word=req.params.word
        var toLanguageId=req.params.toLanguageId
        io.on('connection',function(socket){
        })
        connection.query("select word from collectedwords where wordValueId IN (select wordValueId from collectedwords  where word='"+word+"' and language_id='"+fromLanguageId+"') and language_Id='"+toLanguageId+"' group by word",function(error,row,fields){
        if(!!error){
        }else{
           res.json(row);
        }
      })
     })
     router.get('/getRelatedWords/:fromLanguageId/:word/:toLanguageId',function(req,res){
        var fromLanguageId=req.params.fromLanguageId;
        var word=req.params.word
        var toLanguageId=req.params.toLanguageId
        connection.query("select word from collectedwords  where language_id='"+fromLanguageId+"' and word like '%"+word+"%' group by word",function(error,row,fields){
        if(!!error){
        }else{
           res.json(row);
        }
      })
    })
    function checkIdInProfessionaltable(id,languageKey,callback){
              if(languageKey=='EN'){
                        connection.query("select Id,userId,name,remarks,userroom,photo,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewenglish where userId=?",id,function(error,row){
                           if(!!error){
                             callback(error,error)
                           }else{
                             callback(null,row)
                           }
                         })
                }else if(languageKey=='TG'){
                  connection.query("select Id,userId,name,userroom,remarks,photo,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewtigrina where userId=?",id,function(error,row){
                    if(!!error){
                      callback(error,error)
                    }else{
                      callback(null,row)
                    }
                   })
                }else if(languageKey=='NL'){
                    connection.query("select Id,userId,name,photo,userroom,remarks,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewdutch where userId=?",id,function(error,row){
                      if(!!error){
                        callback(error,error)
                      }else{
                        callback(null,row)
                      }
                     })
                }else{
                  connection.query("select Id,userId,name,photo,userroom,remarks,genderInEnglish,country,livesIn,birthDate,profession from professionalsinfoviewenglish where userId=?",id,function(error,row){
                      if(!!error){
                        callback(error,error)
                      }else{
                        callback(null,row)
                      }
                   })
                }

    }
    function checkIdInClientTable(id,languageKey,callback){
      if(languageKey=='EN'){
             connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,workDetails from clientinfoviewenglish where userId=?",id,function(error,row,fields){
               if(!!error){
                 callback(error,error)
               }else{
                 callback(null,row)
               }
             });
       }else if(languageKey=='TG'){
         connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,workDetails from clientinfoviewtigrina where userId=?",id,function(error,row,fields){
             if(!!error){
               callback(error,error)
             }else{
               callback(null,row)
             }
         });
       }else if(languageKey=='NL'){
         connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,workDetails from clientinfoviewdutch where userId=?",id,function(error,row,fields){
             if(!!error){
               callback(error,error)
             }else{
               callback(null,row)
             }
         });
       }else{
         connection.query("select Id,userId,name,timeTaken,country,livesIn,url,username,photo,lookingFor,englishGender,birthDate,workDetails from clientinfoviewenglish where userId=?",id,function(error,row,fields){
             if(!!error){
               callback(error,error)
             }else{
               callback(null,row)
             }
         });
       }
    }
    function checkIdInPassengers(id,callback){
      connection.query("select id,userId,telephone,date,fromPlace,toPlace,transportChoosed,code,approved from passenger where userId=?",id,function(error,row,fields){
          if(!!error){
            callback(error,error)
          }else{
            callback(null,row)
          }
        })
    }
    function checkIdInTransportOwners(id,callback){
      connection.query("select * from transporttype where userId=?",id,function(error,row,fields){
          if(!!error){
            callback(error,error)
          }else{
            callback(null,row)
          }
      })
    }
    function checkIdInUsers(id,languageKey,callback){
      if(languageKey=='EN'){
        connection.query("select users.name as name,users.photo as photo,webcollections.english as gender,users.country as country,users.livesIn as livesIn,users.email as email from users inner join webcollections on webcollections.Id=users.gender where users.id=?",id,function(error,row,fields){
            if(!!error){
              callback(error,error)
            }else{
              callback(null,row)
            }
        })
      }else if (languageKey=='TG') {
        connection.query("select users.name as name,users.photo as photo,webcollections.tigrina as gender,users.country as country,users.livesIn as livesIn,users.email as email from users inner join webcollections on webcollections.Id=users.gender where users.id=?",id,function(error,row,fields){
            if(!!error){
              callback(error,error)
            }else{
              callback(null,row)
            }
        })
      }else if (languageKey=='NL') {
        connection.query("select users.name as name,users.photo as photo,webcollections.dutch as gender,users.country as country,users.livesIn as livesIn,users.email as email from users inner join webcollections on webcollections.Id=users.gender where users.id=?",id,function(error,row,fields){
            if(!!error){
              callback(error,error)
            }else{
              callback(null,row)
            }
        })
      }else {
        connection.query("select users.name as name,users.photo as photo,webcollections.english as gender,users.country as country,users.livesIn as livesIn,users.email as email from users inner join webcollections on webcollections.Id=users.gender where users.id=?",id,function(error,row,fields){
            if(!!error){
              callback(error,error)
            }else{
              callback(null,row)
            }
        })
      }
    }
router.post('/checkWhoIsThisUser',function(req,res){
  var id=req.body.id;
  var languageKey=req.body.languageKey;
  var userInfo={}
  checkIdInProfessionaltable(id,languageKey,function(error,result){
    userInfo.profession=result
  });
  checkIdInClientTable(id,languageKey,function(error,result){
    userInfo.client=result
    });
  checkIdInPassengers(id,function(error,result){
    userInfo.passenger=result;
    });
    checkIdInTransportOwners(id,function(error,result){
      userInfo.owner=result;
    })
    checkIdInUsers(id,languageKey,function(error,result){
      userInfo.users=result;
      res.json(userInfo)
    })
})
router.post('/getExternalWorks',function(req,res){
  var country=req.body.country;
  var what=req.body.profession;
  var location=req.body.livesIn;
  var languageKey=req.body.languageKey
  var workRequest={}
  workRequest.profession=what;
  workRequest.city=location
  workRequest.languageKey=languageKey;
  englishProfessionName(workRequest,function(error,result){
    var workRequest2={}
    if(country=='Netherlands'){
      workRequest2.dot='.nl'
    }else if(country=='United Kingdom'){
      workRequest2.dot='.co.uk'
    }else{
      workRequest2.dot='.com'
    }
    workRequest2.work=result;
    workRequest2.city=location
    connection.query("select id,companyName,linkId,lookingForProfession,workCity,summary,date,websiteLink from clientsFromExternal WHERE workCity=?",location,function(error,row){
          if(!!error){
          }else{
              res.json(row)
          }
      })
  })
})
router.post('/getClientWorkDetailsExternalData',function(req,res){
  var id=req.body.id;
  var linkId=req.body.linkId;
  var websiteLink=req.body.websiteLink+'&vjk='+linkId
  getWorkDetails(websiteLink,function(error,result){
  })
})
function getNewExternalDataFromDatabase(location,callback){
  connection.query("select id,companyName,linkId,lookingForProfession,workCity,summary,date,websiteLink from clientsFromExternal WHERE workCity=?",location,function(error,row){
      if(!!error){
      }else{
          callback(null,row)
      }
   })
}
function getExternalWorkInfo(workRequest,callback){
  var baseUrl='https://www.indeed';
  var urlDot=workRequest.dot;
  var work=workRequest.work;
  var workCity=workRequest.city;
  var url=baseUrl+urlDot+'/jobs?q='+work+'&l='+workCity
  var jobInfoArray=[]
  var jobInfo={title:'',linkId:'',name:'',workCity:'',summary:'',date:''}
  //var url="https://www.indeed.nl/jobs?q=php&l=Nijmegen"
  request(url,function(err,resp,body){
       var $=cheerio.load(body);
      $('.result').each(function() {
           var linkId=$(this)[0].attribs['data-jk'];
           $(this).find('h2').each(function() {
               var title=$(this).text().trim();
               //var link = $(this).children('a').attr('href');
               jobInfo.title=title;
               jobInfo.linkId=linkId;
           });
           $(this).find('.company').each(function() {
               var company=$(this).text().trim();
               jobInfo.name=company
           });
           $(this).find('.location').each(function() {
               var location=$(this).text().trim();
               jobInfo.workCity=location
           });
           $(this).find('div table td div .summary').each(function(summary) {
               summary=$(this).text().trim();
               jobInfo.summary=summary
           });
             $(this).find('div table td div div .date').filter(function(date){
                 date=$(this).text().trim();
                 jobInfo.date=date
             })
          connection.query("insert into clientsFromExternal(companyName,linkId,lookingForProfession,workCity,summary,date,websiteLink,profession,registeredDate)values('"+jobInfo.name+"','"+jobInfo.linkId+"','"+jobInfo.title+"','"+jobInfo.workCity+"','"+jobInfo.summary+"','"+jobInfo.date+"','"+url+"','"+work+"','"+Date.now()+"')",function(error,row){
              if(!!error){
               }else{
                callback(null,row)
               }
           })
       });

   })

}
router.get('/dictionaryTranslatorWebSiteChecker',function(req,res){
  res.json("yes")
})
router.get('/getAllWorkList',function(req,res){
  connection.query("select Id,english,tigrina from workprofessionslist",function(error,row){
    if(!!error){
    }else{
      res.json(row);
    }
  })
})
router.post('/updateWorkProfessionList',function(req,res){
  var Id=req.body.Id;
  var tigrignaProfession=req.body.translatedTigrignaProfession;
  connection.query("update workprofessionslist set tigrina='"+tigrignaProfession+"' where Id=?",Id,function(error,row){
    if(!!error){
    }else{
      res.json(row);
    }
  })
})
router.post('/deleteExternalDataInfo',function(req,res){
  connection.query("delete from clientsFromExternal",function(error,row){
    if(!!error){

    }else{
      res.json("done")
    }
  })
})
router.post('/getContacts',function(req,res){
  connection.query("select * from contactus",function(error,row){
    if(!!error){

    }else{
      res.json(row)
    }
  })
})
router.post('/getAirTravel',function(req,res){
  connection.query("select * from airTravel",function(error,row){
    if(!!error){

    }else{
      res.json(row)
    }
  })
})
router.post('/getMoneyTransfer',function(req,res){
  connection.query("select * from moneyTransfer",function(error,row){
    if(!!error){
    }else{
      res.json(row)
    }
  })
})
router.post('/deleteContactInfo',function(req,res){
  var id=req.body.id;
  connection.query("delete from contactus where id=?",id,function(error,row){
    if(!!error){
    }else{
      res.json("done")
    }
  })
})
router.post('/deleteAirTravel',function(req,res){
  var id=req.body.id;
  connection.query("delete from airTravel where id=?",id,function(error,row){
    if(!!error){
    }else{
      res.json("done")
    }
  })
})
router.post('/deleteMoneyTransfer',function(req,res){
  var id=req.body.id;
  connection.query("delete from moneyTransfer where id=?",id,function(error,row){
    if(!!error){
    }else{
      res.json("done")
    }
  })
})
router.get('/webcollections',function(req,res){
  connection.query("select * from webcollections",function(error,row){
    if(!!error){
    }else{
      res.json(row)
    }
  })
})
//getItemsReadyToSale
router.get('/getItemsReadyToSale',function(req,res){
  connection.query("select webcollections.english as english,webcollections.tigrina as tigrina,"+
                    "webcollections.dutch as dutch,webcollections.Id as Id,webcollections.picture as picture "+
                   "from salethingstable inner join webcollections on "+ 
                   "webcollections.Id=salethingstable.catagories "+
                   "group by webcollections.english",function(error,row){
    if(!!error){
    }else{
      res.json(row)
    }
  })
})
router.post('/addWebCollection',function(req,res){
  var webCollectionId=req.body.webCollectionId
  var english=req.body.english
  var tigrina=req.body.tigrina
  var dutch=req.body.dutch
  connection.query("insert into webcollections(webCollectionId,english,tigrina,dutch)values('"+webCollectionId+"','"+english+"','"+tigrina+"','"+dutch+"')",function(error,row){
    if(!!error){
    }else{
      res.json(row)
    }
  })
})

router.post('/updateWebCollection',function(req,res){
  var id=req.body.webCollectionAutoId
  var webCollectionId=req.body.webCollectionId
  var english=req.body.english
  var tigrina=req.body.tigrina
  var dutch=req.body.dutch
  connection.query("update webcollections set webCollectionId='"+webCollectionId+"',english='"+english+"',tigrina='"+tigrina+"',dutch='"+dutch+"' where Id='"+id+"'",function(error,row){
    if(!!error){
    }else{
      res.json(row)
    }
  })
})
router.post('/deletWebCollectionId',function(req,res){
  var id=req.body.webCollectionAutoId;
  connection.query("delete from webcollections where Id=?",id,function(error,row){
    if(!!error){
    }else{
      res.json(row)
    }
  })
})
router.post('/getMolliePayments',urlencodedParser,function(req,res){
  var data={}
  data.userId=req.body.userId
     data.amountToPay=req.body.amount;
     data.name=req.body.name;
     data.surName=req.body.surName;
     data.email=req.body.email;
     data.telephone=req.body.telephone;
     data.country=req.body.country;
     data.city=req.body.city;
     data.postCode=req.body.postCode;
     data.street=req.body.street;
     data. houseNumber=req.body.houseNumber;
     data.theRequestComesFrom=req.body.theRequestComesFrom;
     data.date=Date.now();
     data.orderId=Date.now();
     if(req.body.languageKey==''){
       data.languageKey='EN';
     }else{
      data.languageKey=req.body.languageKey;
     }
    res.redirect('https://www.yourhelplab.com/vip/notReadyYet/'+data.languageKey+'/notReadyYet')
    // const mollie = require('@mollie/api-client');
    // const mollieClient = mollie({ apiKey: 'test_TPWASauyBDuWrPncnVHjBykahGBcgW' });
    // const orderId = new Date().getTime();
    // var myamount=data.amountToPay+".00"
    // //SEND EMAIL OF THE  ORDER TO CUSTOMER
    //     var mailToCustomer={}
    //     mailToCustomer.email=data.email;
    //     mailToCustomer.languageKey=data.languageKey;
    //     mailToCustomer.requestCode='orders'
    //     mailToCustomer.key=orderId
    //     sendEmailTo(mailToCustomer,function(error,result){
    //     })
    // mollieClient.payments
    // .create({
    //   amount: { value:myamount, currency: 'EUR' },
    //   description: 'New payment',
    //   redirectUrl:'http://www.yourhelplab.com/vip/orders/'+data.languageKey+'/'+mailToCustomer.key,
    //   webhookUrl:'https://www.yourhelplab.com',
    //   metadata: { orderId },
    // })
    // .then(payment => {
    //    res.redirect(payment.getPaymentUrl());
    //      // res.redirect('/payed.html')
    //       if(data.theRequestComesFrom=='salethingstable'){
    //            var boughtThings=JSON.parse(req.body.boughtThings);
    //            addCustomerToDatabase(data,function(error,result){
    //               var customerId=result
    //               for(key in boughtThings){
    //                   var idAtSaleThingsTable=boughtThings[key].itemIdAtSalethingCollectionTable;
    //                   var itemIdAtItemQuantity=boughtThings[key].itemIdAtQuantityOfItemsTable;
    //                   var numberOfItems=boughtThings[key].numberOfItems;
    //                   connection.query("insert into soldItems(customerId,idAtSaleThingsTable,itemIdAtItemQuantity,numberOfItemsSold,date)values('"+customerId+"','"+idAtSaleThingsTable+"','"+itemIdAtItemQuantity+"','"+numberOfItems+"','"+Date.now()+"')",function(error,row){
    //                     if(!!error){
    //                     }else{
    //                     }
    //                   })
    //                }
    //           })
    //        }else if(data.theRequestComesFrom=='usersForSalethings'){
    //          connection.query("insert into generalPayment(userId,location,orderId,name,surName,"+
    //               "email,telephone,country,city,postCode,street,houseNumber)value"+
    //               "('"+data.userId+"','"+data.theRequestComesFrom+"','"+data.orderId+"','"+data.name+"','"+data.surName+"','"+data.email+"','"+data.telephone+"','"+data.country+"','"+data.city+"','"+data.postCode+"','"+data.street+"','"+data.houseNumber+"')",function(error,row){
    //                 if(!!error){
    //                 }else{
    //                 }
    //           })
    //           connection.query("insert into permissiontable(userId,permission,permissionAssignerId,assigningDate)value"+
    //               "('"+data.userId+"','thingsToSale','1',"+Date.now()+")",function(error,row){
    //                 if(!!error){
    //                 }else{
    //                 }
    //           })
    //        }else{
    //          connection.query("insert into generalPayment(userId,location,orderId,name,surName,"+
    //               "email,telephone,country,city,postCode,street,houseNumber)value"+
    //               "('"+data.userId+"','"+data.theRequestComesFrom+"','"+data.orderId+"','"+data.name+"','"+data.surName+"','"+data.email+"','"+data.telephone+"','"+data.country+"','"+data.city+"','"+data.postCode+"','"+data.street+"','"+data.houseNumber+"')",function(error,row){
    //                 if(!!error){
    //                 }else{
    //                 }
    //           })
    //        }
    // })
    // .catch(error => {
    //   res.send(error);
    // });
})
 function addCustomerToDatabase(data,callback){
   connection.query("insert into salethingscustomer(name,country,city,postCode,street,houseNumber,telephone,email,date)values('"+data.name+"','"+data.country+"','"+data.city+"','"+data.postCode+"','"+data.street+"','"+data.houseNumber+"','"+data.telephone+"','"+data.email+"','"+data.date+"')",function(error,row,fields){
     if(!!error){
      callback(error,"there was error while inserting customer information")
     }else{
      callback(null,row.insertId)
     }
   })
  }
router.post("/checkPayment",function(req,res){
  var location=req.body.location;
   var userId=req.body.token;
  connection.query("select orderId from generalPayment where location=? and userId=?",[location,userId],function(error,row){
    if(!!error){
    }else{
       res.json(row)
    }
  })
})
//})
module.exports=router;
     //module.exports={protected:router,unprotected:unprotected};
     //select concat(SUBSTRING_INDEX(verb, ' ', 1),'ed') AS verb,SUBSTRING_INDEX(verb,' ',CHAR_LENGTH(REPLACE(verb, ' ', ''))-CHAR_LENGTH(verb) ) AS secondverb,verb,tigrina from test2_twowords
//UPDATE test2
//SET    verb = REPLACE(verb, SUBSTRING(verb, LOCATE('(', verb), LENGTH(verb) - LOCATE(')', REVERSE(verb)) - LOCATE('(', verb) + 2), '')
//WHERE  verb LIKE '%(%)%'
//if condition
//SELECT if(SUBSTRING(verb, length(verb)-1,1)='s' and right(verb, 1)='e','true','false') as verb2,verb,tigrina from modifiedpureverbs where verb not like '% %'