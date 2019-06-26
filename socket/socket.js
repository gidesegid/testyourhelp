var express=require('express');
var io = require("socket.io");
var usernames = {};
var rooms = [];
var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'hykrdb.cmsfrokrxjf7.us-west-2.rds.amazonaws.com',
  user:'hlabusr',
  password:'Dui84kdjkf',
  database:'helplab'
  // host:'localhost',
  // user:'yourhelp_gide',
  // password:'wedisegid@123',
  // database:'yourhelp_DB'
});
// connection.connect(function(error){
//   if(!!error){
//   }else{
//   }
// })
var usernames = {};
var rooms = [];
var onlineUsers=[];
var privateusernames = {};
var privaterooms = [];
var publicRoom=[]
var members={}
var allMembers=[];
var commenRoom=001;
module.exports = function(io) {
  // io.set('origins','*:*')
   io.on('connection', function (socket) {  
    //  socket.on('testconnection',function(data){
    //    console.log("con test")
    //    console.log(data)
    //  })
    //console.log("here is new connection h..........")
    //on()
//public chatroomm
    function addUserToRoom(){
         socket.on('adduser', function (data) {
            var username = data.username;
            var room = data.room;
            var userId=data.userId
            members.username=data.username;
            members.room=data.room;
            members.room.user=data.username
            if (rooms.indexOf(room) != -1) {
                allMembers.push({'userId':data.userId,'username':username,'room':room})
                socket.username = username;
                socket.room = room;
                usernames[username] = username;
                socket.join(room);
                io.sockets.in(socket.room).emit('infoToAllUserInRoomForUserBeenAdded', 'SERVER', socket.username);
                           var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                connection.query("insert into chatroommembers(userId,roomId,beginningtime)values('"+userId+"','"+room+"','"+dateTime+"')",function(error,row){
                  if(!!error){
                  }else{
                  }
                })
                getroomMebers(room,function(error,result){
                  io.sockets.in(socket.room).emit('addRoomMember',result);
                  connection.query("update chatrooms set numberOfMembersAtThisTime='"+result.length+"' where roomNumber='"+data.room+"'",function(error,row,fields){
                      if(!!error){
                      }else{
                      }
                    })
                })
            }else{
                socket.emit('updatechat', 'SERVER', 'not connected yet.');
            }
          

        });
    }


    addUserToRoom();
    function createRoom(){
         socket.on('createroom', function (data) {
            var new_room = ("" + Math.random()).substring(2, 7);
            rooms.push(new_room);
            data.room = new_room;
             connection.query("insert into chatrooms(userId,roomName,roomNumber,roomDescription)values('"+data.userId+"','"+data.roomName+"','"+new_room+"','"+data.roomDescription+"')",function(error,row,fields){
                if(!!error){
                }else{
                }
              })
            socket.emit('updatechat', 'SERVER', 'Your room is ready, invite someone using this ID:' + new_room);
            socket.emit('roomcreated', data);
       });
    }
    createRoom();
  function getRooms(){
        connection.query("select Id,userId,roomName,roomNumber,roomDescription,online,numberOfMembersAtThisTime from chatrooms",function(error,row,fields){
            if(!!error){
            }else{
                   row.forEach(function (row) {
                   var room=row.roomNumber;
                   var userIds=JSON.stringify(row.userId, null, 2);
                   rooms.push(room)
                   var roomData={};
                   roomData.Id=row.Id;
                   roomData.userId=row.userId;
                   roomData.roomName=row.roomName;
                   roomData.roomNumber=row.roomNumber;
                   roomData.roomDescription=row.roomDescription;
                   roomData.numberOfMembersAtThisTime=row.numberOfMembersAtThisTime
                   socket.emit('roomsInfo', roomData);
                });
            }
        })
  }
  getRooms();
  function sendMessage(){
     socket.on('sendchat', function (data) {
        io.sockets.in(socket.room).emit('updatechat', socket.username, data);
    });
   }
   function getroomMebers(roomId,callback){
     connection.query("select chatroommembers.userId as userId,chatroommembers.roomId as roomId,users.name as name,"+
                       "users.photo as photo from chatroommembers inner join users on users.id=chatroommembers.userId where chatroommembers.roomId=?",roomId,function(error,row){
                        if(!!error){
                        }else{
                         callback(null,row)
                        }
                       })
   }
   socket.emit('onlineUsers',"gide");
   sendMessage();
     function disconnect(){
         socket.on('disconnectuser', function (data) {
            connection.query("delete from chatroommembers where userId=?",data.userId,function(error,row){
              if(!!error){
              }else{
                 socket.leave(socket.room);
                 io.sockets.in(socket.room).emit('userDisconnected', 'SERVER', socket.username);
                getroomMebers(data.room,function(error,result){
                  io.sockets.in(socket.room).emit('addRoomMember',result);
                  connection.query("update chatrooms set numberOfMembersAtThisTime='"+result.length+"' where roomNumber='"+data.room+"'",function(error,row,fields){
                     if(!!error){
                     }else{
                     }
                  })
                })
              }
            })
        });
     }
   disconnect();
//private chatt....................................................................................................
   function addUserToPrivateRoom(){
            socket.on('addprivateuser', function (data) {
              var username = data.username;
              var room = data.room;
              if (privaterooms.indexOf(room) != -1) {
                  socket.username = username;
                  socket.room = room;
                  privateusernames[username] = username;
                  socket.join(room);
              } else {
                  socket.emit('updateprivatechat', 'SERVER', 'Client is offline now, But message has been send to him.');
              }

            });
   }

   addUserToPrivateRoom();
    function createPrivateRoom(){
         socket.on('createprivateroom', function (data) {
            var userRoom=("" + Math.random()).substring(2, 7);;
            var username=data.username
            publicRoom.push(commenRoom);
            privaterooms.push(userRoom)
            socket.join(commenRoom);
            socket.join(userRoom)
            privateusernames[username] =username;
            socket.emit('roomNumber', userRoom);
            onlineUsers.push({username:data.username,userId:data.userId,photo:data.photo,room:userRoom})
            var a=onlineUsers
            var b = uniqBy(a, JSON.stringify)
            connection.query("UPDATE users SET userroom='"+userRoom+"' where id='"+data.userId+"'",function(error,row,fields){
              if(!!error){
              }else{
              }
           })
           io.sockets.in(commenRoom).emit('onlineUsers',b);
       });
       socket.on('createprivatemomentalroom',function(data){
            var arrayUserIds=[];
            arrayUserIds.push(data.userId,data.toUserId);
            arrayUserIds.sort();
            var userRoom=arrayUserIds[0]+"_"+arrayUserIds[1]
            var username=data.username
            privateusernames[username] =username;
            privaterooms.push(userRoom)
            socket.join(userRoom);
             connection.query("insert into usersChatTable(userId,room)value('"+data.userId+"','"+userRoom+"')",function(error,row){
             })
             
            connection.query("select Id from usersChatTable where userId=? and room=?",[data.toUserId,userRoom],function(error,row){
               if(!!error){

               }else{
                var isUserListeningU=""
                if(row.length==0){
                  isUserListeningU="no"
                }else{
                  isUserListeningU="yes"
                }
                var momentalRoomData={}
                 momentalRoomData.room=userRoom;
                 momentalRoomData.isToUserListenU=isUserListeningU
                 socket.emit('momentalRoomNumber',momentalRoomData);
               }
            })
        })
    }
    var clientAndSupplierRoom=[];
    var clientAndSupplierUsers={}
    function removeDuplicates(myArr, prop) {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }
    //remove duplicates in onlineusers array
    function uniqBy(a, key) {
      var seen = {};
      return a.filter(function(item) {
          var k = key(item);
          return seen.hasOwnProperty(k) ? false : (seen[k] = true);
      })
     }
   createPrivateRoom();
   function sendPrivateMessage(){
         socket.on('chatWithSupplier',function(data){
           connection.query("select userroom from users where id=?",data.toUserId,function(error,row){
             if(!!error){
               if(data.languageKey=='EN'){
                 socket.emit('errorOnConnection',{message:"there was error on connection",online:'no',server:"server:thanks for using this"})
               }else if(data.languageKey=='TG'){
                 socket.emit('errorOnConnection',{message:"ገለ ጸገም ተፈጢሩ ኣሎ ስለዚ ከምባሓዱሽ ፈትኑ",online:'no',server:"server:thanks for using this"})
               }else if(data.languageKey=='NL'){
               socket.emit('errorOnConnection',{message:"er was een fout bij de verbinding",online:'no',server:"server:thanks for using this"})
               }else {
                 socket.emit('errorOnConnection',{message:"there was error on connection",online:'no',server:"server:thanks for using this"})
               }
             }else if(row[0].userroom==''){
               if(data.languageKey=='EN'){
                 socket.emit('userIsNotOnline',{message:"supplier is not online now but ofcourse will be within 5 minutes",online:'no',server:"server:thanks for using this"})
               }else if(data.languageKey=='TG'){
                 socket.emit('userIsNotOnline',{message:"ሸያጣይ ኣብዚ እዋን ዚ ኣብ መስመር የሎን ግን ድሕሪ 5 ደቓይቕ ክኣቱ ኢዩ ",online:'no',server:"server:thanks for using this"})
               }else if(data.languageKey=='NL'){
                 socket.emit('userIsNotOnline',{message:"leverancier is nu niet online maar zal natuurlijk binnen 5 minuten zijn",online:'no',server:"server:thanks for using this"})
               }else {
                 socket.emit('userIsNotOnline',{message:"supplier is not online now but ofcourse will be within 5 minutes",online:'no',server:"server:thanks for using this"})
               }
             }else if(row[0].userroom!==''){
               if(data.languageKey=='EN'){
                 socket.emit('userIsOnlineNow',{message:"supplier is online now",online:'yes',server:"server:thanks for using this",supplierRoom:row[0].userroom})
               }else if(data.languageKey=='TG'){
                 socket.emit('userIsOnlineNow',{message:"ሸያጢ እብ መስመር ኣሎ ክምልሰልኩም እዩ ንእሽቶይ ዓቅሊ ክሳብ ዝምልስ",online:'yes',server:"server:thanks for using this",supplierRoom:row[0].userroom})
               }else if(data.languageKey=='NL'){
                 socket.emit('userIsOnlineNow',{message:"leverancier is nu online",online:'yes',server:"server:thanks for using this",supplierRoom:row[0].userroom})
               }else {
                 socket.emit('userIsOnlineNow',{message:"supplier is online now",online:'yes',server:"server:thanks for using this",supplierRoom:row[0].userroom})
               }
             }
           })
         })
         socket.on('saleConversationClosed',function(data){
            io.sockets.in(data.supplierSocketId).emit('messageFromClientOrSupplier',{message:"conversation ended",username:data.username})
            io.sockets.in(data.clientSocket).emit('messageFromClientOrSupplier',{message:"conversation ended",username:data.username})
         })
         socket.on('handShakingMessageFromClientToSupplier',function(data){
           io.sockets.in(data.supplierRoom).emit('sendHandShakingMessageFromClientToSupplier',{message:'Hello from client',saleItemId:data.saleItemId,supplierRoom:data.supplierRoom,socketId:socket.id,languageKey:data.languageKey})
         })
         socket.on('helloClient',function(data){
           io.sockets.in(data.clientSocket).emit('sendHandShakingMessageFromSupplierToClient',{message:data.message,username:data.username,supplierSocketId:socket.id,clientSocketId:data.clientSocket})
           io.sockets.in(socket.id).emit('sendHandShakingMessageFromSupplierToClient',{message:"messege has been send to cliet",username:data.username,supplierSocketId:socket.id,clientSocketId:data.clientSocket})
         })
         socket.on('startConversationBtwClientAndSupplier',function(data){
            var info={}
            info.supplierRoom=data.supplierRoom
            info.clientSocketId=data.clientSocketId
            info.supplierSocketId=data.supplierSocketId;
           io.sockets.in(data.supplierSocketId).emit('messageFromClientOrSupplier',{message:data.message,username:data.username})
           io.sockets.in(data.clientSocketId).emit('messageFromClientOrSupplier',{message:data.message,username:data.username})
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
      socket.on('sendprivateMessageToTransportOwner',function(data){
        var date=Date.now();
        io.sockets.in(data.room).emit('updateprivatechat',data.message);
        socket.emit('clientMessageBackToHimSelf',data.message);
      })
      function checkUserFriendRequest(data,callback){
               connection.query("select userId,toUserId,isFriendNow,blocked from friendrequests where userId=? and toUserId=?",[data.fromUserId,data.toUserId],function(error,row){
                if(!!error){
                   callback(error,"there was error while selecting friendrequests")
                }else{
                  callback(null,row)
                }
               })         
      }
     socket.on('sendprivatechat', function (data){
                var fromUserId=data.fromUserId;
                var toUserId=data.toUserId;
                var location=data.userIs;
                var date=Date.now();
                var message=data.message;
                var tigrina=''
             genderChecker(fromUserId,function(error,gender){
                    if(message=="Friend Request"){

                      checkUserFriendRequest(data,function(error,result){
                        if(result.length==0){
                              var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                             connection.query("insert into friendrequests(userId,toUserId,date,message,location,locationOfToUser)values('"+fromUserId+"','"+toUserId+"','"+dateTime+"','"+message+"','"+location+"','"+data.toUserIs+"')",function(row,error,fields){
                              if(!!error){
                                }else{
                                }
                             })
                             socket.emit('messageBackToSelf',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                         }else{
                             socket.emit('messageBackToSelf',"alreadySent");
                        }
                      })
                     if(data.room!==null){
                       io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                     }
                    }else if(message=="has a job for you"){
                      if(gender=='Female'){
                        tigrina='ስራሕ ኣለዋ ሞ ንስራሕ ትዕድም።'
                      }else{
                        tigrina='ስራሕ ኣለዎ ሞ ንስራሕ ይዕድም።'
                      }
                            var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                      socket.emit('messageBackToSelf',"send");
                      connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+location+"')",function(row,error,fields){
                        if(!!error){
                          }else{
                          }
                       })
                       if(data.room!==null){
                         io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                       }
                    }else if(message=="has applied for your job"){
                       if(gender=='Female'){
                        tigrina='ስራሕ ተናዲ ኣላ።ዘለኩም ስራሕ ንክትዓዪ ትውከሰኩም ኣላ።'
                      }else{
                        tigrina='ስራሕ የናዲ ኣሎ።ዘለኩም ስራሕ ንኽዓዪ ይውከሰኩም ኣሎ ።'
                      }
                      socket.emit('messageBackToSelf',"send");
                      var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                      connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+location+"')",function(row,error,fields){
                        if(!!error){
                          }else{
                          }
                       })
                       if(data.room!==null){
                         io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                       }
                    }else if(message=="commented on your post"){
                      var today = new Date();
                      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                      var dateTime = date+' '+time;
                         if(gender=='Female'){
                            tigrina='ኣብ ዝለጠፍኩሞ ነገር ርኢቶኣ ሂባ ኣላ'
                          }else{
                            tigrina='ኣብ ዝለጠፍኩሞ ነገር ርኢቶኡ ሂቡ ኣሎ'
                          }
                        connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+data.postId+"')",function(row,error,fields){
                          if(!!error){
                            }else{
                            }
                         })
                        connection.query("insert into commentstable(postId,userId,comment,timestamp,location)values('"+data.postId+"','"+fromUserId+"','"+data.comments+"','"+dateTime+"','"+location+"')",function(row,error,fields){
                            if(!!error){
                            }else{
                            }
                         })
                         io.sockets.in(data.room).emit('updateprivatechat',socket.username,data.message);
                         socket.emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                    }else if(message=="shared your post"){
                            var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                          if(gender=='Female'){
                            tigrina='ዝለጠፍኩሞ ኣብ ናታ መጽሓፍ ኣካፊላቶ ኣላ'
                          }else{
                            tigrina='ዝለጠፍኩሞ ኣብ ናቱ መጽሓፍ ኣካፊሊዎ ኣሎ'
                          }
                           connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+data.posterUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+data.postId+"')",function(row,error,fields){
                           })
                           connection.query("insert into sharetable(userId,ownerUserId,postId,date,description)values('"+fromUserId+"','"+data.posterUserId+"','"+data.postId+"','"+dateTime+"','"+data.sharedescription+"')",function(row,error,fields){
                           });
                           if(data.fileType=="image/jpeg"){
                               var remarks="shared "+data.posterName+"s photo"
                             }else if(data.fileType=="video/mp4"){
                              var remarks="shared "+data.posterName+"s vidio"
                             }else{
                              var remarks="shared "+data.posterName+"s post"
                             }
                            
                           connection.query("insert into posts(postDescription,fileType,fileName,userId,timestamp,remarks,shareDescription) values('"+data.description+"','"+data.fileType+"','"+data.fileName+"','"+fromUserId+"','"+dateTime+"','"+remarks+"','"+data.sharedescription+"')",function(error,row,fields){
                           });
                          if(data.room!==null){
                               io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                          }
                        socket.emit('updateprivatechat',"shared");
                    }else if(message=="liked your post"){
                            var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                             if(gender=='Female'){
                                tigrina='ዝለጠፍኩሞ ፈትያቶ ኣላ'
                              }else{
                                tigrina='ዝለጠፍኩሞ ፈትዩዎ ኣሎ'
                              }

                            connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+data.postId+"')",function(row,error,fields){
                            
                           })
                            var comments=data.userFullName+' liked your post'
                            connection.query("insert into postlikesandcomments(userId,postId,liked,comment,timestamp,location)values('"+fromUserId+"','"+data.postId+"','yes','"+comments+"','"+dateTime+"','"+location+"')",function(row,error,fields){
                             })
                             if(data.room!==null){
                               io.sockets.in(data.room).emit('updateprivatechat',data.userFullName,data.message);
                             }
                            socket.emit('messageBackToSelf','you liked this post');
                   }else if(message=="would like to join your journey"){
                              var today = new Date();
                              var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                              var dateTime = date+' '+time;
                             if(gender=='Female'){
                                tigrina='ጉዕዞ ኣለዋ።ምሳኹም ንኽጓዓዙ ትውከሰኩም ኣላ'
                              }else{
                                 tigrina='ጉዕዞ ኣለዎ።ምሳኹም ንኽጓዓዝ ይውከሰኩም ኣሎ'
                              }
                              function ifRequestHasBeenAskedBefore(data,callback){
                                connection.query("select passengerId,transportId,transportDate from transportrequestsandacceptances where passengerId=? and transportId=? and transportDate=?",[data.passengerId,data.transportId,data.date],function(error,row){
                                  if(!!error){
                                  }else{
                                    callback(null,row)
                                  }
                                })
                              }
                              var language=''
                              ifRequestHasBeenAskedBefore(data,function(error,result){
                                    if(result.length==0){
                                      connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+data.userIs+"')",function(row,error,fields){
                                      if(!!error){
                                        }else{
                                        }
                                     })
                                     connection.query("insert into transportrequestsandacceptances(transportId,passengerId,requestDate,transportDate)values('"+data.transportId+"','"+data.passengerId+"','"+dateTime+"','"+data.date+"')",function(row,error,fields){
                                      if(!!error){
                                        }else{
                                        }
                                     })
                                     if(data.languageKey=='TG'){
                                      language="ናብ ዋና ተጓዓዚት መልእኽቲ ሕቶኹም ተሰዲዱ ኣሎ።እንተተቐቢሉኩም ዕለት ጉዕዞኹም ብ ናይ ዋና ተጓዓዚ ዝጎዓዘሉ ዕለት ክቕየር ኢዩ።"
                                      socket.emit('messageBackToSelf', "ALREADY REGISTERED");
                                      if(data.room!==null){
                                         io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                                       }
                                    }else if(data.languageKey=='NL'){
                                       language="verzoek verzenden naar de eigenaar met succes, als u wordt geaccepteerd, dan wordt uw reisdatum gewijzigd in de transportdatum"
                                       socket.emit('messageBackToSelf', "REGISTERED");
                                     if(data.room!==null){
                                       io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                                     }
                                    }else{
                                       language="request send to owner successfully,if you are accepted then your journey date will be changed to the transport date."
                                       socket.emit('messageBackToSelf',data.message);
                                       if(data.room!==null){
                                         io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                                       }
                                     }
                                }else{
                                  if(data.languageKey=='TG'){
                                     language="ቅድሚ ሒጂ ናብዚ ሓቲትኩም ኢኹም።"
                                     socket.emit('messageBackToSelf', "ALREADY REGISTERED");
                                  }else if(data.languageKey=='NL'){
                                     language="je hebt dit al gevraagd"
                                     socket.emit('messageBackToSelf', "ALREADY REGISTERED");
                                  }else{
                                    language="You have already requested this journey"
                                     socket.emit('messageBackToSelf', "ALREADY REGISTERED");
                                  }
                                }
                              });
                        
                   }else if(message=="accepted to travell"){
                            var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                              if(gender=='Female'){
                                tigrina='ን ናይ ጉዕዞ ሕተኹም ተቐቢላቶ ኣላ';
                              }else{
                                 tigrina='ን ናይ ጉዕዞ ሕተኹም ተቐቢሉዎ ኣሎ';
                              }
                               connection.query("insert into notificationtable(fromUserId,toUserId,message,tigrina,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+tigrina+"','"+dateTime+"','"+data.location+"')",function(row,error,fields){
                                if(!!error){
                                  }else{
                                  }
                               })
                              connection.query("update transportrequestsandacceptances set approved='yes',approvedDate='"+dateTime+"' where id=?",data.requestId,function(error,row){
                                 if(!!error){
                                 }else{
                                 }
                              })
                              connection.query("update passenger set date='"+data.ownerTransportDate+"' where id=?",data.passengerId,function(error,row){
                                 if(!!error){
                                 }else{
                                 }
                              })
                             if(data.languageKey=='TG'){
                               language="ሓታታይ ከምዝተቐበልኩሞ መልእኽቲ ተሰዲዱ ኣሎ።"
                               socket.emit('messageBackToSelf',language, "ALREADY REGISTERED");
                            }else if(data.languageKey=='NL'){
                               language="Bericht heeft naar applier gestuurd dat u de toepassing heeft geaccepteerd"
                               socket.emit('messageBackToSelf',language, "ALREADY REGISTERED");
                            }else{
                              language="Message has sent to applier that you accepted the application"
                               socket.emit('messageBackToSelf',language, "ALREADY REGISTERED");
                            }
                           socket.emit('messageBackToSelf',language, "your acceptance has sent to traveller");
                           io.sockets.in(data.room).emit('updateprivatechat',socket.username +" has accepted your application", data.message);
                    }else if(data.messageComesFrom!==undefined && data.messageComesFrom=='workTransaction'){
                        var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                       connection.query("insert into messagetable(fromUserId,toUserId,message,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+dateTime+"','"+location+"')",function(error,row,fields){
                          if(!!error){
                          }else{
                          }
                       });
                      io.sockets.in(data.room).emit('updateprivatechat',socket.username, data.message,data.fromUserFullName,data.photo,data.toUserId);
                      socket.emit('messageBackToSelf', "send");
                    }else{
                            var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
                      connection.query("insert into messagetable(fromUserId,toUserId,message,timestamp,location)values('"+fromUserId+"','"+toUserId+"','"+message+"','"+dateTime+"','"+location+"')",function(error,row,fields){
                          if(!!error){
                          }else{
                          }
                       });
                       socket.on('privateChatLeft',function(data){
                         connection.query("delete from usersChatTable where userId=? and room=?",[data.userId,data.connectionRoom],function(error,row){
                          })
                          io.sockets.in(data.connectionRoom).emit('privateChatLeftInfo',data.fromUserFullName,"left");
                          socket.leave(data.connectionRoom)
                          roomIndex=privaterooms.indexOf(data.connectionRoom)
                           if(roomIndex>-1){
                             privaterooms.splice(roomIndex,1)
                           }
                       })


                        if(data.room==''){
                          if(data.from=='web'){
                            socket.emit('updateprivatechat',data.fromUserFullName, data.message,data.toUserId);
                          }else if(data.from=='mob'){
                            socket.emit('updateprivatechat',data.fromUserFullName, data.message,data.toUserId);
                          }
                        }else{
                           if(data.isToUserListenU=="yes"){
                            socket.on('onTyping',function(data){
                              io.sockets.in(data.connectionRoom).emit('typingMessage',data.fromUserFullName,data.userId,"is typing")
                             })
                             io.sockets.in(data.connectionRoom).emit('updateprivatechat',data.fromUserFullName, data.message,data.toUserId,data.connectionRoom);
                           }else{
                             io.sockets.in(data.room).emit('updateprivatechat',data.fromUserFullName,"ToNotify",data.toUserId,data.connectionRoom);
                             socket.emit('updateprivatechat',data.fromUserFullName, data.message,data.toUserId);
                           }
                        }
                        
                      }
             }) 
    });
   }
   sendPrivateMessage();

   socket.on('userSession',function(data){
     connection.query("UPDATE users SET sessionId='"+socket.id+"' where id='"+data+"'",function(error,row,fields){
       if(!!error){
       }else{
       }
    })
   })
   function getAirTravelPermission(userId,callback){
     connection.query("select users.sessionId as sessionId from users inner join permissiontable on users.id=permissiontable.userId where permissiontable.permission='travel'",function(error,row){
       if(!!error){
       }else{
         callback(null,row[0].sessionId)
       }
     })
   }
   socket.on('airTravel',function(data){
     var message=data;
     var date=Date.now();
     connection.query("insert into airTravel(requestDate,message) values('"+date+"','"+message+"')",function(error,row){
       if(!!error){
        socket.emit('airTravel',error)
       }else{
         socket.emit('airTravel',"done")
       }
     })
     })
     socket.on('moneyTransfer',function(data){
       var message=data;
       var date=Date.now();
       connection.query("insert into moneyTransfer(requestDate,message) values('"+date+"','"+message+"')",function(error,row){
         if(!!error){
           socket.emit('moneyTransfer',error)
         }else{
           socket.emit('moneyTransfer',error)
         }
       })
     })
     function disconnectPrivate(){
         socket.on('disconnectPrivateUser', function (data) {
            var disconnectedUser={'userId':data.userId,'username':data.username,'room':data.room}
            var a=onlineUsers
            var b = uniqBy(a, JSON.stringify)
            var index = b.reduce(function(searchIndex, item, index){
              if(item.userId === disconnectedUser.userId) {
                searchIndex = index;
              }
              return searchIndex;
            }, null);
            b.splice(index,1);
           var memebersOfRoom = b.filter(function( obj ) {
              return obj.room == data.room;
            });
           onlineUsers.length=0;
           memebersOfRoom.forEach(function(element){
            onlineUsers.push(element)
           })
            delete privateusernames[socket.username];
            if (data.username !== undefined) {
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;
                connection.query("UPDATE users SET userroom='',lastLogin='"+dateTime+"',sessionId='' where id='"+data.userId+"'",function(error,row,fields){
                  if(!!error){
                  }else{
                  }
               })
                connection.query("delete from usersChatTable where userId=?",data.userId,function(error,row){
                    if(!!error){
                    }else{
                    }
                })
                socket.leave(data.room);
                io.sockets.in(commenRoom).emit('onlineUsers',memebersOfRoom);
            }
        });
     }
   disconnectPrivate();
   //E-chat...........................................................................................................
   //function Echat(){
    socket.on('Echat', function (data) {
      console.log("datammmmm")
      console.log(data)
      var dataInfo={};
      dataInfo.roomId=data.roomId;
      dataInfo.userId=data.userId;
      dataInfo.room=data.room;
      dataInfo.userCode=data.userCode;
      dataInfo.message=data.message;
      socket.join(data.roomId)
      // var today = new Date();
      // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // var dateTime = date+' '+time;

      // connection.query("insert into Emessages(roomId,message,userCode,date)value('"+data.roomId+"','"+data.message+"','"+data.userCode+"','"+dateTime+"')",function(error,row){
      //     if(!!error){
      //        console.log("error")
      //        console.log(error)
      //     }else{
      //     }
      // })
      
      io.sockets.in(data.roomId).emit('Echat',dataInfo);
      console.log("im hrere...")

    })
  // }
  // Echat();
   socket.on('repliesMessage',function(data){
    console.log("datammmmm in reply")
    console.log(data)
    // var dataInfo={};
    // dataInfo.messageId=data.messageId;
    // dataInfo.userCode=data.userCode;
    // dataInfo.message=data.message;
    socket.join(data.messageId)
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // connection.query("insert into EmessageReply(messageId,reply,replyerUserCode,date)value('"+data.messageId+"','"+data.message+"','"+data.userCode+"','"+dateTime+"')",function(error,row){
    //     if(!!error){
    //        console.log("error")
    //        console.log(error)
    //     }else{
    //     }
    // });
    var sendData={};
    sendData.replyerUserCode=data.userCode;
    sendData.reply=data.message;
    sendData.date=dateTime;
    io.sockets.in(data.messageId).emit('EchatReply',sendData);
  })
   socket.on('onTyping',function(data){
    var dataInfo={};
    dataInfo.roomId=data.roomId;
    dataInfo.userId=data.userId;
    dataInfo.room=data.room;
    dataInfo.userCode=data.userCode;
    dataInfo.message=data.message;
    io.sockets.in(data.roomId).emit('typingMessage',dataInfo);
    console.log(data.userCode +" is typing")
  })
  socket.on('onLeave',function(data){
    var dataInfo={};
    dataInfo.roomId=data.roomId;
    dataInfo.userId=data.userId;
    dataInfo.room=data.room;
    dataInfo.userCode=data.userCode;
    dataInfo.message=data.message;
    io.sockets.in(data.roomId).emit('left',dataInfo);
    console.log(data.userCode +" left the room")
    socket.leave(data.roomId)
  })
  socket.on('isJoining',function(data){
    var dataInfo={};
    dataInfo.roomId=data.roomId;
    dataInfo.userCode=data.userCode;
    io.sockets.in(data.roomId).emit('onJoining',dataInfo);
    console.log(data.userCode +" has joined the room")
  })
  //  function addUserToEchat(){
  //    var EchatRoomUsers=[]
  //    var EchatRooms=[]
  //   socket.on('addUserToEchat', function (data) {
  //     console.log("add user...")
  //     console.log(data)
  //     var username = data.username;
  //     var room = data.room;
  //     var addUserInfo={}
  //         addUserInfo.userCode=data.username;
  //         socket.username = username;
  //         socket.EchatRooms = room;
  //         EchatRoomUsers[username] = username;
  //         socket.join(room);
  //         addUserInfo.infoMessage="has joined to this room now"
  //         socket.emit('roomInfo',addUserInfo)

  //   });
  //  }
  //  addUserToEchat();
  //  function getAllErooms(){
  //     var ERoom=[]
  //     socket.on('createERoom', function (data) {
  //       console.log("")
  //        var userRoom=data.room;
  //        var username=data.username
  //       ERoom.push(userRoom)
  //        socket.join(userRoom);
  //        privateusernames[username] =username;
  //        socket.emit('roomNumber', userRoom);
  //       io.sockets.in(userRoom).emit('roomInfo',data);
  //     });
  //  }
  //  getAllErooms();
});
}
