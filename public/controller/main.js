  var myApp=angular.module('myApp',['ngImgCrop','ui.router','pascalprecht.translate','angularMoment','autocomplete'])
     myApp.run(function(amMoment,$translate) {
          amMoment.changeLocale('en');
      });
      myApp.config(['$stateProvider','$locationProvider','$urlRouterProvider',function($stateProvider,$locationProvider,$urlRouterProvider,srvShareData,$rootScope) {
            $stateProvider
             .state('homePage',{
               url:'/',
               views:{
                '':{
                    templateUrl:'mainHome.html',
                    controller:'logincontroller'
                },
                'topBarBeforeLogin':{
                    templateUrl:'topBarBeforeLogin.html',
                    controller:'logincontroller'
                }
               }
             })
              .state('about',{
                url:'/about',
                views:{
                  '':{
                     templateUrl:'about.html',
                     controller:'logincontroller',
                  },
                  'topBarBeforeLogin':{
                    templateUrl:'topBarBeforeLogin.html',
                    controller:'logincontroller'
                   }
                }
              })
              .state('contactus',{
                 url:'/contactus',
                 views:{
                  '':{
                    templateUrl:'contactus.html',
                    controller:'logincontroller'
                  },
                   'topBarBeforeLogin':{
                    templateUrl:'topBarBeforeLogin.html',
                    controller:'logincontroller'
                   }
                 }

              })
              .state('issuesAndAdvices',{
                url:'/issuesAndAdvices',
                views:{
                  '':{
                    templateUrl:'publickIssues.html',
                    controller:'issueController'
                  },
                  'topBarBeforeLogin':{
                          templateUrl:'topBarBeforeLogin.html',
                          controller:'logincontroller'
                        }
                }
              })
              .state('login',{
                url:'/login',
                views:{
                  '':{
                    templateUrl:'login.html',
                    controller:'logincontroller',
                  },
                  'topBarBeforeLogin':{
                    templateUrl:'topBarBeforeLogin.html',
                    controller:'logincontroller'
                  }
                }
              })
              .state('sellProvides',{
                    url:'/sellProvides',
                    views:{
                      '':{
                         templateUrl:'salethingsFromHome.html',
                         controller:'thingsToSaleController'
                      },
                       'topBarBeforeLogin':{
                          templateUrl:'topBarBeforeLogin.html',
                          controller:'logincontroller'
                        }
                    }
              })
              .state('newsAndServicesProvider',{
                url:'/newsAndServicesProvider',
                views:{
                  '':{
                    templateUrl:'newsFromHome.html',
                    controller:'newscontroller'
                  },
                  'topBarBeforeLogin':{
                          templateUrl:'topBarBeforeLogin.html',
                          controller:'logincontroller'
                        }

                }
              })
              .state('transportHomePage',{
                url:'/transportHomePage',
                views:{
                  '':{
                    templateUrl:'transportHomePage.html',
                    controller:'transportCtrl'
                  },
                  'topBarBeforeLogin':{
                        templateUrl:'topBarBeforeLogin.html',
                          controller:'logincontroller'
                        }
                }
              })
              .state('posts',{
                url:'/posts/:userId',
                views:{
                  '':{
                    templateUrl:'post.html',
                    controller:'homePageController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController',
                        },
                },
              })
              .state('settings',{
                url:'/settings/:userId',
                views:{
                  '':{
                    templateUrl:'settings.html',
                    controller:'homePageController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController',
                        }
                }
              })
              .state('admin',{
                url:'/admin/:userId',
                views:{
                  '':{
                    templateUrl:'admin.html',
                    controller:'adminController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController',
                        }
                }
              })
              .state('workList',{
                url:'/workList/:userId',
                views:{
                  '':{
                    templateUrl:'workList.html',
                    controller:'adminController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController',
                        }
                }
              })
              .state('trade',{
                url:'/trade/:userId',
                views:{
                  '':{
                    templateUrl:'thingsToSale.html',
                    controller:'thingsToSaleController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
              .state('itemRegistration',{
                    url:'/itemRegistration',
                    views:{
                      '':{
                         templateUrl:'itemRegistration.html',
                         controller:'thingsToSaleController'
                      },
                      'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                    }
              })
              .state('workTransactions',{
                url:'/workTransactions/:userId',
                views:{
                  '':{
                    templateUrl:'professionalTransactions.html',
                    controller:'workTransactionCtrl'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
              .state('clientRegistration',{
                url:'/clientRegistration/:userId',
                views:{
                  '':{
                    templateUrl:'clientRegistrationForm.html',
                    controller:'workTransactionCtrl'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
              .state('professionRegistration',{
                url:'/professionRegistration/:userId',
                views:{
                  '':{
                    templateUrl:'professionalRegistrationForm.html',
                    controller:'workTransactionCtrl'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
              .state('newsAndServices',{
                url:'/newsAndServices/:userId',
                views:{
                  '':{
                    templateUrl:'dailyLifeHappenings.html',
                    controller:'newscontroller'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })

              .state('addNews',{
                url:'/addNews/:userId',
                views:{
                  '':{
                    templateUrl:'addNews.html',
                    controller:'newscontroller'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        },

                }
              })
              .state('groupChat',{
                url:'/groupChat/:userId',
                views:{
                  '':{
                    templateUrl:'chatbox.html',
                    controller:'chatRoomController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
              .state('notification',{
                url:'/notification/:userId',
                views:{
                  '':{
                    templateUrl:'notifications.html',
                    controller:'notificationcontroller'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
             .state('issues',{
                url:'/issues/:userId',
                views:{
                  '':{
                    templateUrl:'issues.html',
                    controller:'issueController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
             .state('transport',{
                url:'/transport/:userId',
                views:{
                  '':{
                    templateUrl:'findTransport.html',
                    controller:'transportCtrl'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
              .state('permission',{
                url:'/permission/:userId',
                views:{
                  '':{
                    templateUrl:'permission.html',
                    controller:'adminController'
                  },
                  'topBarAfterLogin':{
                          templateUrl:'index.html',
                          controller:'topBarController'
                        }
                }
              })
             .state('agreementFile',{
                url:'/agreementFile',
                templateUrl:'agreementFile.html'
              })
              $urlRouterProvider.otherwise('/')
              $locationProvider.html5Mode(true)
      }])
   //get country autocomplete
      myApp.factory('countryRetriever', function($http,$q, $timeout){
        var countryRetriever = new Object();
         countryRetriever.getCountry = function(country) {
            var data = $q.defer();
            var datas=null;
            var dataFromRemote;
          $http.get('/countries/'+country).then(function(response){
               dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.country}));
                 //dataFromRemote=response.data
               var datas=JSON.parse(dataFromRemote);
               //var datas=dataFromRemote;
              $timeout(function(){
                data.resolve(datas);
              },1000);
            })
           return data.promise
        }
        return countryRetriever;
         });
         myApp.directive('countryEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.myEnter);
                        });

                        event.preventDefault();
                    }
                });
            };
         });
  //get country autocomplete
      myApp.factory('cityRetriever', function($http,$q, $timeout){
              var cityRetriever = new Object();
               cityRetriever.getCity = function(city,country) {
                  var data = $q.defer();
                  var datas=null;
                  var dataFromRemote;
                $http.get('/cities/'+city+'/'+country).then(function(response){
                     dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.cityName}));
                     var datas=JSON.parse(dataFromRemote);
                    $timeout(function(){
                      data.resolve(datas);
                    },1000);
                  })
                 return data.promise
              }
              return cityRetriever;
               });
               myApp.directive('cityEnter', function () {
                  return function (scope, element, attrs) {
                      element.bind("keydown keypress", function (event) {
                          if(event.which === 13) {
                              scope.$apply(function (){
                                  scope.$eval(attrs.myEnter);
                              });

                              event.preventDefault();
                          }
                      });
                  };
               });
//get country autocomplete
  myApp.factory('cityNetherlandRetriever', function($http,$q, $timeout){
       var cityNetherlandRetriever = new Object();
        cityNetherlandRetriever.getCity = function(city) {
           var data = $q.defer();
           var datas=null;
           var dataFromRemote;
         $http.get('/NetherlandCities/'+city).then(function(response){
              dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.cityName}));
              var datas=JSON.parse(dataFromRemote);
             $timeout(function(){
               data.resolve(datas);
             },1000);
           })
          return data.promise
       }
       return cityNetherlandRetriever;
        });
        myApp.directive('cityEnter', function () {
           return function (scope, element, attrs) {
               element.bind("keydown keypress", function (event) {
                   if(event.which === 13) {
                       scope.$apply(function (){
                           scope.$eval(attrs.myEnter);
                       });

                       event.preventDefault();
                   }
               });
           };
        });
    //get profession autocomplete
     myApp.factory('professionRetriever', function($http,$q, $timeout){
       var professionRetriever = new Object();
        professionRetriever.getProfession= function(profession,languageKey) {
           var data = $q.defer();
           var datas=null;
           var dataFromRemote;
         $http.get('/listOfProfession/'+profession+'/'+languageKey).then(function(response){
              if(languageKey=='EN'){
                  dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.english}));
              }else if(languageKey=='TG'){
               dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.tigrina}));

             }else if(languageKey=='NL'){
               dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.dutch}));
             }else{
               dataFromRemote = JSON.stringify((response.data).map(function(obj){ return obj.english}));
             }
              var datas=JSON.parse(dataFromRemote);
             $timeout(function(){
               data.resolve(datas);
             },1000);
           })
          return data.promise
       }
       return professionRetriever;
        });
        myApp.directive('professionEnter', function () {
           return function (scope, element, attrs) {
               element.bind("keydown keypress", function (event) {
                   if(event.which === 13) {
                       scope.$apply(function (){
                           scope.$eval(attrs.myEnter);
                       });

                       event.preventDefault();
                   }
               });
           };
        });
  /*
//  translate
  */
   myApp.config(function($translateProvider) {
      $translateProvider.fallbackLanguage('EN');
      $translateProvider.registerAvailableLanguageKeys(['EN','NL','TG'],{
        'en_*':'EN',
        'du_*':'NL',
        'tg_*':'TG'
      })
         $translateProvider.translations('EN', {
            loginHeadline: 'Login',
            loginButton: 'Login',
            chooseLanguage: 'Choose languages',
            registerHere: 'Not a member? Register here.',
            close:'Close',
            enterValidName:'Enter Name',
            enterUsername:'Enter valid user name',
            enterValidEmail:'Enter valid Email',
            enterPassword:'Enter password',
            passwordMismutch:'Password Mismatch',
            atLeast6Char:'Enter at least 6 characters',
            repeatPassword:'repeat password',
            email:'Email',
            submit:'Submit',
            workAndProfessionRegistration:'Work and Profession registrations',
            online:'Online',
             travelRegistration:'Travel Registration',
             findTranport:'Find Transports',
             thingsToSale:'Item for Sale',
             tasks:'User Tasks',
             completed:'Completed',
             setting:'Settings',
             logout:'Logout',
             post:'Post',
             writePostInfo:'Write your post here',
             uploadImage:'Upload your image here',
             like:'Like',
             comment:'Comments',
             writeComment:'Write Comment',
             send:'Send',
             onlineUsers:'Online Users',
             client:'Clients',
             sendMessage:'Send Message',
             professionals:'Professionals',
             profession:'Profession',
             share:'Share',
             lookingFor:'Looking for',
             livesIn:'Lives in ',
             hasJobOf:'has a job of',
             searchingForAjob:'Searching for a job',
             joinToRooms:'Join a room',
             memebers:'Memebers',
             youAreInRoom:'You are in',
             roomOwner:"'s room",
             soYouAreLookingFor:'So you are looking for',
             writeWorkSummary:'Summary of the work description',
             exceedTheLimit:'Exceed the limit',
             youAreLookingNow:'Your work situation at this time',
             telephone:'Telephone',
             howLongDoesTheWorkTakes:'How long does the work takes',
             saveUpdate:'Save/Update',
             professionRegistration:'Profession registration',
             generalSummaryAboutYou:'General summary about yourself',
             mainProfession:'Main profession',
             yourWorkingPeriodIs:'Availability',
             IAmNow:'Currently I am ',
             employees:'Employees',
             offline:'Offline',
             dateOfBirth:'Date of birth',
             workToBeDone:'Work details',
             sendMessageHere:'Send message here',
             reply:'Reply to this comment',
             writeSuggestion:'Write suggestions',
             problemDescription:'Description of the problem',
             postedOn:'Posted on',
             seeSuggestion:'See suggestions',
             address:'Address',
             whoMaySolveThisProblem:'Who might be able to solve this problem',
             idontknow:'I dont know',
             submitSuggestion:'Submit suggestion',
             journeySchedules:'Journey schedules',
             transportType:'Transport type',
             from:'From',
             to:'To',
             date:'Date',
             code:'Code',
             transportRegistration:'Register means of transport/update information of transport allready registered',
             activeFromTo:'Active from - to',
             numberOfSeats:'NumberOfSeats',
             additionalInfo:'Additional information',
             travelByTrainRegistration:'Register to travel by train',
             registerToTravelByAnyTransport:'Register to travel by any means of transport',
             journeyDetails:'Journey Details',
             registerHere:'Register here',
             by:'By',
             freeSpace:'Free space',
             fillYourTelephoneHereThenClick:'Fill in your telephone number here then click',
             filterHeadingsHere:'Filter headings here',
             posted:'Posted',
             postedBy:'Posted by',
             historyType:'History type',
             title:'Title',
             subTitle:'Subtitle',
             writeDetailsHereBelow:'Write detailed description below',
             hereBelow:'Below',
             uploadImageOrVidio:'Upload image/vidio',
             startNew:'New post +',
             addNewSubTitle:'Add new subtitle +',
             notification:'Notifications',
             messages:'Messages',
             seeDetails:'See user details',
             fullName:'Full name',
             gender:'Gender',
             workDetails:'Work details',
             timeTaken:'Time taken',
             workSession:'Work session',
             travellingDate:'Travelling date',
             transportChoosed:'Transport chosen',
             employersAndEmployees:'Employers and employees',
             whoShouldRegisterAsEmployer:'Who should register as an employer?',
             whoShouldRegisterAsEmployee:'Who should register as an employee?',
             employer:'Employer',
             username:'Username',
             password:'Password',
             updateYourInformation:'Setting:Set your setting.',
             selectProfileImage:'Select profile image',
             yourProfilePictureLooksLike:'Your profile picture looks like this',
             updateUserSettings:'Update user settings',
             filterBy:'Filter by',
             saleThingsPost:'Register items for sale',
             catagories:'Category',
             price:'Price',
             where:'Location',
             description:'Description',
             uploadImage:'If you have image to post then you can upload it,click down below.Otherwise you don\'t have to',
             upload:'Upload',
             news:'News',
             educationalService:'Educational Services',
             fictions:'Stories',
             travelAndTravelSchedules:'Travel and travel schedules',
             writeNewsHere:'Write news, discussion topics,stories here',
             backToRooms:'Back to rooms',
             problemsAndTheriSolutions:'Problems and their solutions',
             reportHereIfYouHaveProblem:'Report your problem here.',
             userSettings:'Settings',
             clickHere:'Click here',
             backToDailyLifeHomePage:'Back to news and histories page',
             numberOfPeople:'Number of people',
             date:'Date',
             generalInformationAboutEmployerRegistration:'General Information about why you need to register as employer',
             whyEmployer:'When registering as an employer,specify what work you wish to have done either  by a professional or non professional.You can then  go on to hire someone to do the work.Work can be anything from house painting to ICT,to health or social care etc.',
             listOfAllProfessionals:'List of all professionals',
             professionalRegistration:'Register as an employee',
             employerRegistration:'Register as an employer',
             listOfAllClients:'List of all employers',
             save:'save',
             seeTravelInfo:'Look for travel information',
             delete:'Delete',
             daysAgo:'Days ago',
             clientRegistration:'Employer Registration',
             passengerRemarks:'Passenger Remarks. NB:Fill in the passengers full name and email address',
             country:'Country',
             ILiveOutSideNetherlands:'Do you live outside the Netherlands?',
             cityOrTown:'City/town/village',
             sendNewsText:'Send text',
             chooseCity:'Choose city',
             others:'Others',
             problemType:'Issue Type',
             notStatedHere:'City where I live in is not listed here.',
             Settings:'Settings',
             createRoom:'Create room',
             uploadFile:'Upload file',
             sendWorkRequest:'Work Request',
             friendRequest:'Friend Request',
             wrongUserNameOrPassword:'Wrong user name or password',
             alreadyHaveAccount:'Already Have an account ? Sign in',
             register:'Register',
             signup:'You do not have an account ? Register.',
             successfullyRegistered:'Registered successfully!Thank you so much for registering with us.Go to your email and click the link to activate your account.',
             gettingAjob:'Searching for a job:',
             postingAjob:'Posting a job:',
             gettingBestCandidate:'Finding the best candidate for  a job:',
             gettingAjobWithNoProfession:'Finding a job even if you do not have profession:',
             postingIssues:'posting issues and finding their solutions:',
             gettingNews:'Getting the latest news,reading stories:',
             privateChatsAndGroupChats:'Private chat with friends and group chat:',
             postingHobies:'Posting various hobbies or advertisments and getting reactions from your friends over your posts:',
             gettingItemsToSale:'Getting Items for sale:',
             journeySchedules:'Planning your journey:',
             searchAjob:'Search a job',
             yourPreviousChoosen:'Your previous choosen was:',
             subWorkIsCatagorizedUnder:' Your previous sub Categories choosen was: ',
             userSetting:'User Setting',
             userProfile:'Change Profile Picture',
             userPosts:'User Posts',
             seeMoreMessages:'see more messages',
             aboutUser:'About this user',
             seeMoreNotifications:'see more notifications',
             seeMoreFriendRequest:'see more friend requests',
             professionalOnlineStatus:'is online now',
             mainProfessionHomePage:'Profession',
             city:'City',
             getNewsAtHomePage:'Get News',
             backtosearchHomepage:'Back to home page',
             searchOnHomepage:'Search',
             getItemForSaleHomepage:'Search Item For Sale',
             homePageInfo:"Welcome! This website is all about work opportunities. We are always looking for new ways"+
                           "to connect employers with employees, and find solutions to all your employment-related"+
                            "problems. We are concerned with people from any and every profession, not forgetting those"+
                             "without professional skills, who we can connect with a range of non-skilled jobs. Employers"+
                             "can search for employees on a permanent, short-term, or casual basis.",
             contactus:'Contact us',
             aboutus:'About',
             gotohomepage:'Home',
             gotologinpage:'Go to login page',
             websiteAddress:'Web site address',
             chooseProfession:'Choose/Change profession',
             changeWorkTime:'Change work time',
             situation:' You can change your situation here',
             chooseProfessions:'Load professions and choose',
             chooseCountry:'Load countries and choose',
             chooseCity:'Load cities and choose',
             buy:'Buy',
             cancel:'Cancel',
             buyThingsPost:'Details',
             itemName:'Item Name',
             unit:'Currency',
             getBoughtItems:'Cart',
             backToSalePage:'Back to sale page',
             numberOfItems:'How many peaces of this item do you need ?',
             amount:'Amount',
             firstName:'First Name',
             middelName:'Middel Name',
             surName:'Surname',
             postCode:'Post Code',
             houseNumber:'House Number',
             street:'Street',
             addressInfo:'Address Information',
             buyerInfo:'Buyer Information',
             total:'Total',
             action:'Action',
             chatWithSupplier:'Chat with Supplier',
             size:'size',
             newpassword:'New password',
             changePassword:'Change password',
             change:'Change',
             BackToLogin:'Back to login page',
             forgetPassword:'Forget password ?',
             professionalMotivation:'See worker motivations',
             backToClientsList:'Back to clients list',
             backToProfessionalsList:'Back to professionals list',
             employeeClient:'(Employee)',
             employerClient:'(Employer)',
             request:'Request',
             chatWithTransportOwner:'Chat with the owner',
             passengerRemarks:'Remarks',
             getAllAcceptedRequests:'Get all travellers that i accepted them',
             getAllRequests:'Get all travel requests',
             whoAcceptedMe:'Check who accepted my request to travel',
             registerFormInvalid:'Fill the form completly',
             fromTime:'Available from',
             toTime:'Available till',
             getInTouchWithUs:'Get in touch with us',
             gotopayment:'Go to payment',
             next:'next',
             writeWorkDetails:'Work Detail',
             itemsForSale:'Items for sale',
             profPlaceHolder:'',
             countryPlaceHolder:'',
             cityPlaceHolder:'',
             transportRegistrationAdvice:'Do you own transport and you need to use this golden chance, then you have to register and your vihecle will be listed online here.',
             journeyByPlane:'Travel by airplane',
             sendMoney:'Do you need money transfer to Eritrea using western union legaly ? then contact us.',
             passengers:'Passengers',
             transports:'transports',
             writeCityNameWhereULive:'Please write name of the city where you live in',
             travelByMeansOfTransport:'Travel informations',
             uploadTransportImage:'Upload transport image',
             itemImage:'Item Image here',
             itemWillBeLookingLikeThis:'Item will look like this',
             addSaleItemButton:'add',
             itemAmount:'Number of Items',
             itemSize:'Item size in kg,m,pcs....',
             newItemToSaleButton:'New Item',
             addItemToSale:'Add item to sell or look items you have registered',
             newsPageIntro:'Source of News,telling stories and discussion amoung people for a better solution.',
             travelPageIntro:'Where do you need to go? This page is all about travellers and means of transports ready for your journey.',
             salePageIntro:'Do you need something to buy? Then you are in the rightway.This page is all about buying and saling things',
             headerForAboutPage:'About us',
             mainTextAboutPage:'This web site is intended for anyone who needs to participate at work environments like posting a job or searching for a job.This website  also includes news,histories,discussions among people regarding diferent topics.It  allows you to buy products and saling things.So it covers four aspects of human life(posting job and searching job,posting issues and getting solution to the issue,buying items,planning a journey).Any one who reached to this website is always wellcome and can have all benefitis from this webiste,ofcourse to get full benefit of the website is, you need to be registered.Using and registering for this website is totally free at this',
             changeTypeOfTransport:'Change type of transport',
             journeyByPlaneDescription:'Do you have journey by airplane then contact us here.And dont forget to write your telephone so we can call you back to discuss what is better way for your journey.',
             backtoLandTransport:'Back to land transport',
             registerToTravel:'Register to travel',
             friendshipConfirmation:'Confirm',
             friendshipeDeleteConfirm:'Delete',
             notificationsTranslation:'Notifications',
             messagesNotificationTranslate:'Messages',
             friendRequestsTranslates:'Friend Requests',
             ownerTransportType:'Type of Transport',
             availabeTime:'Available Time',
             post:'Post',
             payNow:'Pay',
             amountToPay:'Amount of money to pay in Euro(€)',
             transportRegistrationPaymentLink:'If you have transport and you need to participate,then you can register it now for only 20€ (Euro) and your vehicle will be available online for one year so clients can hire your vehicle any time within a year.Imagine your payment is 20€/Year.',
             workClientPayment:'Post a job, once for 50€',
             saleItemPayment:'Pay 10 Euro to sale things or if you need to advertis shows',
             userRegisterButton:'Register',
             IAgree:'I agree with ',
             generalRullsAndRecommendations:'general terms of use.',
             fastContact:'For fast contacts,please find us here',
                  registerItem:'Register',
                  previousProfilePic:'Current profile pic',
                  dailyLifeHappeningsRegistrations:'DailyLife Registrations,educational services,news,histories',
                  activationStatusAlert:'Activate your account please.',
                  homePageAfterLogin:'Posts and advertisements',
                   employeeAndEmployer:'Employee/Employer',
                   dailyLifeHappenings:'News and Services',
                   thingsToSale:'Items for sale',
                    notifications:'Info and notifications',
                     chatRoom:'Chat Rooms',
                      issuesAndSuggestions:'Issues and solutions',
                      userSettings:'User Settings',
                      jobSearch:'Job Search',
                       searchCandidate:'Employee Search',
                        jobPosts:'Job Posts',
             issuePost:'Post Issues',
             journey:'Journey Services',
             getNews:'Educational Services & News',
             backToWorkTransactions:'Back to work space',
             acceptTheRequest:'Accept',
             yourfriends:'My friends',
             remarks:'Remarks',
             messageNotifications:'Messages',
             notificationsAtNofication:'Notifications',
             connectedPeopleWithU:'Connected people with you',
             friendRequestAtNotification:'Friend requests',
             transportAndTravelSchedules:'Transports and travel schedules',
             getMyPosts:'My posts',
             goToMyItemsList:'Go to my list of items',
             backToItemRegistration:'Back to item registration',
             SoldItemId:'Item Id',
            itemName:'Item Name',
            numberOfItemsSold:'Number of sold items',
            totalNumberOfItemsLeft:'Total number of items left at store',
            totalPriceAmount:'Amount',
            boughtDate:'Bought Date',
            sellId:'Order id',
            numberOfItemsBought:'Number of items bought',
            itemsThatHasRegisteredByUser:'Items you have registered to sell',
            itemsThatHasBeenSold:'Items that has been sold',
            buttonGetSoldItems:'Get sold items',
            customersBoughtItems:'Customers who bought my items',
            buttonGetCustomersWhoBoughtItem:'Get customers who bought my items',
            buyDate:'Bought Date',
            itemForSellRegistrationDate:'Registration date',
            blockFriend:'Block',
            loadCountry:'Load Countries',
            loadCities:'Load Cities',
            backToLogin:'Back to login page',
            backToPosts:'Back to posts',
            toPost:'To be posted',
            vehiclePicture:'Vehicle picture',
            cropedVehiclePicture:'Croped image of vehicle',
            uploadVehicleImage:'Upload',
            previousImageOfVehicle:'Previous vehicle image',
            backToTransportImage:'Back',
            registerAsEmployerIf:"Who should register as an employee ?"+
                                  "You can register as an employee if:"+
                                  "- You want to find work"+
                                  "- You have a profession"+
                                  "- You don’t have a profession but are looking…",
            registeringAsEmployeeIf:"Who should register as an employer?"+
                                      "You can register as an employer if:"+
                                      "You have a job that needs to be done"+
                                      "You are looking for professionals"+
                                      "General information"+
                                      "When registering as an employer, specify what work you wish to have done, either by a"+
                                      "professional or non-professional. You can then go on to hire someone to do the work. The"+
                                      "work can be anything from house-painting, to ICT, to health or social care, etc.",
            termsOfUse:'<h2>Terms of Use</h2>'+
                  'Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.'+
                  'Please read on to learn the rules and restrictions that govern your use of the yourhelplab website. If you have any questions, comments, or concerns regarding these terms or the Service, please contact us via the yourhelplab contact page <a href="contactus">here</a>.'+
                  '<ul>'+
                          '<li>'+
                  '<strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong> '+
                  'Any one greater than 18 years old can make account and use our service. While creating an account, you must provide a valid email and all other required fields.'+
                              '<ul>'+
                                         'If you are a normal user, this website is free to use. A normal user is:'+
                  '<li>'+
                  'Someone with a profession who is looking for a job. They can register their profession for free, then detailed information of their profession will be visible to employers. Registration, searching and negotiation with employers through our service is free.'+
                  '</li>'+
                  '<li>'+
                  'Someone without a profession who may still use other benefits of this service such as searching for a job, posting issues, reading news and stories, buy items posted for sale, and scheduling travel. All of these benefits are available through our service and they are free to use.'+
                  '</li>'+
                                '</ul>'+
                               '</li>'+
                  '<li>'+
                               '<strong>For business users</strong>'+
                                 '<ul>'+
                  'Businesses selling goods and services are required to pay a fee to advertise on the site. Those searching for or requesting goods and services, including employment, can do so free of charge. For example, employers seeking employees, or anyone offering a service or goods for sale are charged for advertising; however, potential employees seeking such positions or customers for goods and services use the service free of charge. The details of goods and services, their delivery,'+
                   'the terms of the transaction, payments, and any disputes regarding these are the responsibility of the parties involved and not that of this website. The sale or offer of goods and services harmful to living beings, the environment or emotional well-being, such as weapons, inflammable materials, live animals, drugs and medication, are not allowed. The site reserves the right to refuse or remove any adverts deemed unsuitable by the service provider.'+
                  '<strong>Our services for businesses are as follows. We request the fee upon registration. </strong>'+
                  '<li><strong>Registering a job:</strong> Someone offering a job can register their job and find an employee.</li>'+
                  '<li>Selling item: Anyone who has something to sell can post it in our service. If you have items for sale you may set the price. Delivery of items is organised by you. This website does not take responsibility for items for sale posted by users unless the item has been posted by this website.</li>'+
                  '<li class="alert-danger"><strong>Anything harmful to living beings, the environment or emotional well-being, such as weapons, inflammable materials, live animals, drugs, and medication, are not allowed in our service. Generally, posts that cause harm to people are forbidden. Please follow the community guidelines. This website does not take responsibility for damages </strong>.</li>'+
                  '<li><strong>Registering means of transport:</strong> Any one who has means of transport and wishes to register it as an available transport in our servce.</li>'+
                            '</ul>'+
                  '<li><strong>Posting issues</strong>: We consider issues including, mobile and computer problems, health, legal advice, lifestyle guidance, general information, language translations, and more. We try to solve your request by connecting you with someone who has experience with the issue in question. In addition, it is possible to get advice from someone who does not have professional experience with the issue in question. Posting such issues and getting advice from users is'+ 'free. Our platform is open for these kinds of discussions. </li>'+
                  '</ul>',
                    search:'Search' ,
                    newsPicture:'Image/Video of news/story/educational services' ,
                    cropedNewsPicture:'Image will look like this',
                    uploadNewsImage:'Upload file',
                    backToSearchProfessionalsPage:'Back to search professionals page',
                    goBackToJobSearch:'Back to search jobs page',
                    Welcome:'WELCOME TO' ,
                    yourhelplab:'YOUR HELP LAB',
                    numberOfReplies:'replies',
                    searchClientAtYourArea:'Search employer',
                    searchProfessionalAtYourArea:'Search employee'



          })
          .translations('NL', {
            loginHeadline: 'Login',
            loginButton: 'login',
            chooseLanguage: 'Kies taal',
            registerHere: 'Geen lid? Registreer hier.',
            close:'Sluiten',
            enterValidName:'Vul naam in',
            enterUsername:'Voer geldige gebruikersnaam in',
            enterValidEmail:'Voer geldig email adres in',
            enterPassword:'Voer wachtwoord in',
            passwordMismutch:'Wachtwoord niet gelijk',
            atLeast6Char:'Voer tenminste 6 karakter',
            repeatPassword:'Herhaal wachtwoord',
            email:'Email',
            submit:'Verzenden',
            workAndProfessionRegistration:'Werk en beroep registratie ',
            online:'Online',
             travelRegistration:'Reis registratie',
             findTranport:'Vind vervoer',
             tasks:'Gebruikerstaken',
             completed:'Klaar zijn',
             setting:'Instellingen',
             logout:'Logout',
             post:'Post',
             writePostInfo:'Schrijf jouw bericht',
             uploadImage:'Als je een afbeelding hebt om te plaatsen, kun je deze uploaden en hieronder klikken. Anders is dat niet nodig',
             like:'Like',
             comment:'opmerkingen',
             writeComment:'Schrijf commentaar',
             send:'Verzenden',
             onlineUsers:'Online gebruikers',
             client:'Klanten',
             sendMessage:'Verzend bericht',
             professionals:'Professionals',
             profession:'Beroep',
             share:'Delen',
             lookingFor:'Op zoek naar',
             livesIn:'Woont in ',
             hasJobOf:'Heeft werk voor',
             searchingForAjob:'Opzoek naar werk',
             joinToRooms:'Kom in de room',
             memebers:'Leden',
             youAreInRoom:'Je bent in room',
             roomOwner:"'s room",
             soYouAreLookingFor:'Dus ben je opzoek naar',
             writeWorkSummary:'Samenvatting van de werkbeschrijving',
             exceedTheLimit:'Limiet overschreden',
             youAreLookingNow:'Je werksituatie op dit moment',
             telephone:'Telefoon',
             howLongDoesTheWorkTakes:'Hoe lang duurt het werk',
             saveUpdate:'Opslaan/updaten',
             professionRegistration:'Beroep registratie',
             generalSummaryAboutYou:'Algemene samenvatting over jezelf',
             mainProfession:'Hoofdberoep',
             yourWorkingPeriodIs:'Beschikbaarheid',
             IAmNow:'Momenteel ben ik dat ',
             employees:'Werknemers',
             offline:'Offline',
             dateOfBirth:'Geboortedatum',
             workToBeDone:'Werk details',
             sendMessageHere:'Stuur bericht hier',
             reply:'Reageer op deze reactie',
             writeSuggestion:'Schrijf suggesties',
             problemDescription:'Beschrijving van het probleem',
             postedOn:'Geplaatst op',
             seeSuggestion:'Zie suggesties',
             address:'Adres',
             whoMaySolveThisProblem:'Wie zou dit probleem kunnen oplossen',
             idontknow:'Ik weet het niet',
             submitSuggestion:'Suggestie indienen',
             journeySchedules:'het plannen van je reis',
             transportType:'Transport type',
             from:'Van',
             to:'Naar',
             date:'Datum',
             code:'Code',
             transportRegistration:'Registreer transportmiddelen/update informatie van transport',
             activeFromTo:'Actief van - tot',
             numberOfSeats:'Aantal zitplaatsen',
             additionalInfo:'Extra informatie',
             travelByTrainRegistration:'Registreer om te reizen met de trein',
             registerToTravelByAnyTransport:'Registreer om te reizen met elk vervoermiddel',
             journeyDetails:'Reisdetails',
             registerHere:'Registreer hier',
             by:'Door',
             freeSpace:'Vrije ruimte',
             fillYourTelephoneHereThenClick:'Vul hier uw telefoonnummer in en klik vervolgens op',
             filterHeadingsHere:'Filterkoppen hier',
             posted:'Geplaatst',
             postedBy:'Gepost door',
             historyType:'Geschiedenis type',
             title:'Titel',
             subTitle:'Ondertitel',
             writeDetailsHereBelow:'Schrijf een gedetailleerde beschrijving',
             hereBelow:'Beneden',
             uploadImageOrVidio:'Upload afbeelding / vidio',
             startNew:'Nieuw post +',
             addNewSubTitle:'Nieuwe ondertiteling toevoegen +',
             notification:'Meldingen',
             messages:'Berichten',
             seeDetails:'Bekijk gebruikersgegevens',
             fullName:'Voor-en achternaam',
             gender:'Geslacht',
             workDetails:'Werk details',
             timeTaken:'Tijd genomen',
             workSession:'Werksessie',
             travellingDate:'Reisdatum',
             transportChoosed:'Transport gekozen',
             employersAndEmployees:'Werkgevers en werknemers',
             whoShouldRegisterAsEmployer:'Wie moet zich als werkgever registreren?',
             whoShouldRegisterAsEmployee:'Wie moet zich als werknemer registreren?',
             employer:'Werkgever',
             username:'Gebruikersnaam',
             password:'Wachtwoord',
             updateYourInformation:'Setting: Stel uw instelling in.',
             selectProfileImage:'Selecteer profielafbeelding',
             yourProfilePictureLooksLike:'Je profielfoto ziet er zo uit',
             updateUserSettings:'Update gebruikersinstellingen',
             filterBy:'Ilteren op',
             saleThingsPost:'Registreer artikelen te koop',
             catagories:'Categorieën',
             price:'Prijs',
             where:'Locatie',
             description:'Beschrijving',
             uploadImage:'Afbeelding uploaden',
             upload:'Uploaden',
             news:'Nieuws',
             educationalService:'Educatieve diensten',
             fictions:'Verhalen',
             travelAndTravelSchedules:'Reis- en reisschema',
             writeNewsHere:'Schrijf nieuws, discussieonderwerpen, verhalen hier',
             backToRooms:'Terug naar kamers',
             problemsAndTheriSolutions:'Problemen en hun oplossingen',
             reportHereIfYouHaveProblem:'Meld hier uw probleem.',
             thingsToSale:'Producten te koop',
             userSettings:'Instellingen',
             clickHere:'Klik hier',
             backToDailyLifeHomePage:'Terug naar nieuws en geschiedenis pagina',
             numberOfPeople:'Aantal mensen',
             date:'Datum',
             generalInformationAboutEmployerRegistration:'Algemene informatie over waarom u zich als werkgever moet registreren',
             whyEmployer:'Wanneer u zich registreert als werkgever, geeft u aan welk werk u wilt laten doen door een professional of niet-professional. Vervolgens kunt u iemand inhuren om het werk te doen. Het kan van alles zijn, van huisschilderij tot ICT, tot gezondheidszorg of sociale zorg. enz.',
             listOfAllProfessionals:'Lijst van alle professionals',
             professionalRegistration:'Registreer als een werknemer',
             employerRegistration:'Registreer als werkgever',
             listOfAllClients:'Lijst van alle werkgevers',
             save:'Opslaan',
             seeTravelInfo:'Kijk reisinformatie',
             delete:'Verwijderen',
             daysAgo:'Dagen geleden',
             clientRegistration:'Werkgeversregistratie',
             passengerRemarks:'Opmerkingen van passagiers. NB: vul de volledige naam en het e-mailadres van de passagiers in',
             country:'Land',
             ILiveOutSideNetherlands:'Woon je buiten Nederland?',
             cityOrTown:'stad/dorp',
             sendNewsText:'Stuur tekst',
             chooseCity:'Kies stad',
             others:'Anderen',
             problemType:'uitgiftetype',
             notStatedHere:'De stad waar ik woon, staat niet in de lijst.',
             Settings:'Instellingen',
             createRoom:'Ruimte creëren',
             uploadFile:'Upload bestand',
             sendWorkRequest:'Werkaanvraag',
             friendRequest:'Vriendschapsverzoek',
             wrongUserNameOrPassword:'Verkeerde gebruikersnaam of wachtwoord',
             alreadyHaveAccount:'Heb je al een account? Aanmelden',
             register:'Registreren',
             signup:'Heb je geen account? Registreer.',
             successfullyRegistered:'Met succes geregistreerd! Hartelijk dank voor uw registratie.Ga naar je e-mailadres en klik op de link om je account te activeren.',
             gettingAjob:'Op zoek naar een baan:',
             postingAjob:'Een baan plaatsen:',
             gettingBestCandidate:'De beste kandidaat voor een baan vinden:',
             gettingAjobWithNoProfession:'Een baan vinden, ook als je geen beroep uitoefent:',
             postingIssues:'Problemen posten en oplossingen vinden:',
             gettingNews:'Het laatste nieuws ontvangen, verhalen lezen:',
             privateChatsAndGroupChats:'Prive-chat met vrienden en groepschat:',
             postingHobies:'Verschillende hobbys of advertenties plaatsen en reacties van je vrienden op je berichten ontvangen:',
             gettingItemsToSale:'Producten in de aanbieding kopen:',
             journeySchedules:'Jouw reisroute plannen om te reizen:',
             searchAjob:'Zoek een baan',
             yourPreviousChoosen:'Uw vorige keuze was:',
             subWorkIsCatagorizedUnder:' Je vorige subcategorieën die je hebt gekozen, waren: ',
             userSetting:'Gebruikersinstelling',
             userProfile:'Profielfoto veranderen',
             userPosts:'Gebruikersposten',
             seeMoreMessages:'Zie meer berichten',
             aboutUser:'Over deze gebruiker',
             seeMoreNotifications:'Zie meer meldingen',
             seeMoreFriendRequest:'Zie meer vriendenverzoeken',
             professionalOnlineStatus:'is nu online',
             mainProfessionHomePage:'Beroep',
             city:'Stad',
             getNewsAtHomePage:'Ontvang nieuws',
             searchOnHomepage:'Zoeken',
             getItemForSaleHomepage:'Zoek item te koop',
             homePageInfo:"Welkom! Deze website heeft alles te maken met werkmogelijkheden. We zijn altijd op zoek naar nieuwe manieren"+
                            "om werkgevers te verbinden met werknemers en oplossingen te vinden voor al uw werkgerelateerde zaken"+
                            "problemen. We houden ons bezig met mensen uit elk beroep en niet te vergeten"+
                            "zonder professionele vaardigheden, die we kunnen verbinden met een reeks niet-geschoolde banen. Werkgevers"+
                            "kan op permanente, tijdelijke of informele basis naar werknemers zoeken.",
             contactus:'Neem contact met ons op',
             aboutus:'Over',
             gotohomepage:'Home',
             gotologinpage:'Ga naar loginpagina',
             websiteAddress:'Website adres',
             chooseProfession:'Kies / verander beroep',
             changeWorkTime:'Verander de werktijd',
             situation:'Je kunt hier je situatie veranderen',
             chooseProfessions:'Laad beroepen en kies',
             chooseCountry:'Laad landen en kies',
             chooseCity:'Laad steden en kies',
             buy:'Kopen',
             cancel:'Annuleer',
             buyThingsPost:'Gegevens',
             itemName:'Itemnaam',
             unit:'Valuta',
             getBoughtItems:'kar',
             backToSalePage:'Terug naar verkooppagina',
             numberOfItems:'Hoeveel stuks van dit artikel heb je nodig?',
             amount:'Bedrag',
             firstName:'Voornaam',
             middelName:'Midden-naam',
             surName:'Achternaam',
             postCode:'Postcode',
             houseNumber:'Huisnummer',
             street:'Straat',
             addressInfo:'Adres informatie',
             buyerInfo:'Kopersinformatie',
             total:'Totaal',
             action:'Actie',
             chatWithSupplier:'Chatten met de leverancier',
             size:'Grootte',
             newpassword:'Nieuw paswoord',
             changePassword:'Verander wachtwoord',
             change:'Verandering',
             BackToLogin:'Terug naar inlogpagina',
             forgetPassword:'Wachtwoord vergeten ?',
             professionalMotivation:'Zie motivaties van werknemers',
             backToClientsList:'Terug naar klantenlijst',
             backToProfessionalsList:'Terug naar lijst met professionals',
             employeeClient:'(werknemer)',
             employerClient:'(werkgever)',
             request:'Verzoek',
             chatWithTransportOwner:'Chatten met de eigenaar',
             passengerRemarks:'Opmerkingen',
             getAllAcceptedRequests:'Alle reizigers zover krijgen dat ik ze accepteer',
             getAllRequests:'Krijg alle reisverzoeken',
             whoAcceptedMe:'Controleren wie mijn verzoek om te reizen heeft aanvaard',
             registerFormInvalid:'Vul het formulier volledig in',
             fromTime:'Beschikbaar van',
             toTime:'Beschikbaar tot',
             getInTouchWithUs:'Neem contact op met ons',
             gotopayment:'ga naar betaling',
             next:'volgende',
             writeWorkDetails:'werk details',
             itemsForSale:'Producten te koop',
             profPlaceHolder:'Bereop',
             countryPlaceHolder:'land',
             cityPlaceHolder:'stad',
             transportRegistrationAdvice:'Heb je eigen vervoer en moet je deze gouden kans benutten, dan moet je je registreren en je viècle wordt hier online vermeld.',
             journeyByPlane:'Reizen met het vliegtuig',
             sendMoney:'Heeft u geldtransfers naar Eritrea nodig met behulp van Western Legaly? neem dan contact met ons op.',
             passengers:'passagiers',
             transports:'transporten',
             writeCityNameWhereULive:'voer de naam in van de stad waar je woont',
             travelByMeansOfTransport:'reisinformatie',
             uploadTransportImage:'upload transportafbeelding',
             itemImage:'Item afbeelding hier',
             itemWillBeLookingLikeThis:'Item ziet er als volgt uit',
              itemWillBeLookingLikeThis:'Item will look like this',
             addSaleItemButton:'toevoegen',
             itemAmount:'Aantal stuks',
             itemSize:'Artikelgrootte in kg, m, stuks ....',
             newItemToSaleButton:'nieuw item',
             addItemToSale:'item aan verkoop toevoegen of zoek items die u hebt geregistreerd',
             backToSaleHomePage:'terug naar startpagina verkoopartikelen',
             newsPageIntro:'Bron van Nieuws, verhalen vertellen en discussiëren tussen mensen voor een betere oplossing',
             travelPageIntro:'Waar moet je heen? Op deze pagina staat alles over reizigers en transportmiddelen klaar voor uw reis',
             salePageIntro:'Heb je iets nodig om te kopen? Dan bent u op de goede weg. Deze pagina gaat over het kopen en verzegelen van dingen',
             changeTypeOfTransport:'verander het type transport',
             journeyByPlaneDescription:'Heeft u een vliegreis, neem dan hier contact met ons op. Vergeet niet uw telefoon te schrijven, zodat we u terug kunnen bellen om te bespreken wat een betere manier is voor uw reis',
             backtoLandTransport:'terug naar landtransporten',
             registerToTravel:'registreren om te reizen',
             friendshipConfirmation:'bevestigen',
             friendshipeDeleteConfirm:'verwijderen',
             notificationsTranslation:'meldingen',
             messagesNotificationTranslate:'berichten',
             friendRequestsTranslates:'Vriendschapsverzoeken',
             ownerTransportType:'type vervoer',
             availabeTime:'beschikbare tijd',
             post:'Post',
             payNow:'Betalen',
             amountToPay:'Bedrag van te betalen geld in euro',
             transportRegistrationPaymentLink:'Als u vervoer hebt en u moet deelnemen, dan kunt u het nu registreren voor slechts 20 € (Euro) en uw voertuig zal online een jaar beschikbaar zijn zodat klanten uw voertuig binnen een jaar op elk moment kunnen huren. Stel u voor dat uw betaling 20€/jaar is.',
             workClientPayment:'Plaats een baan, eenmaal voor 50 €',
             saleItemPayment:'Betaal 10 Euro aan verkoopdingen of als u voor shows moet adverteren',
             userRegisterButton:'registreren',
             IAgree:'Ik ga akkoord met',
             generalRullsAndRecommendations:'algemene gebruiksvoorwaarden.',
              fastContact:'Voor snelle contacten kunt u ons hier vinden',
termsOfUse:'<h2> Gebruiksvoorwaarden </h2>' +
                  'Uw toegang tot en gebruik van de Service is afhankelijk van uw acceptatie en naleving van deze Voorwaarden. Deze voorwaarden zijn van toepassing op alle bezoekers, gebruikers en anderen die toegang hebben tot de Service of deze gebruiken. '+
                  'Lees verder voor meer informatie over de regels en beperkingen die gelden voor uw gebruik van de yourhelplab-website. Als u vragen, opmerkingen of opmerkingen hebt met betrekking tot deze voorwaarden of de Service, neemt u dan contact met ons op via de contactpagina van yourhelplab <a href="contactus"> hier </a>. '+
                  '<ul>' +
                          '<li>' +
                  '<strong> Door de Service te openen of te gebruiken, gaat u ermee akkoord gebonden te zijn aan deze Voorwaarden. Als u het niet eens bent met een deel van de voorwaarden, hebt u mogelijk geen toegang tot de Service. </Strong> '+
                  'Iedereen ouder dan 18 jaar kan verantwoording afleggen en onze service gebruiken. Bij het aanmaken van een account moet u een geldig e-mailadres en alle andere verplichte velden opgeven. '+
                              '<ul>' +
                                         'Als u een normale gebruiker bent, is deze website gratis te gebruiken. Een normale gebruiker is: '+
                  '<li>' +
                  'Iemand met een beroep die op zoek is naar een baan. Ze kunnen hun beroep gratis registreren, waarna gedetailleerde informatie over hun beroep zichtbaar zal zijn voor werkgevers. Registratie, zoeken en onderhandelen met werkgevers via onze service is gratis. '+
                  '</li>' +
                  '<li>' +
                  'Iemand zonder beroep die nog andere voordelen van deze service kan gebruiken, zoals zoeken naar een baan, problemen posten, nieuws en verhalen lezen, koop items die te koop worden aangeboden en reizen plannen. Al deze voordelen zijn beschikbaar via onze service en ze zijn gratis te gebruiken. '+
                  '</li>' +
                                '</ul>'+
                               '</li>'+
                  '<li>' +
                               '<strong> Voor zakelijke gebruikers </strong>' +
                                 '<ul>' +
                  'Bedrijven die goederen en diensten verkopen, moeten een vergoeding betalen om op de site te adverteren. Degenen die zoeken naar of verzoeken om goederen en diensten, inclusief werk, kunnen dit kosteloos doen. Bijvoorbeeld, werkgevers die op zoek zijn naar werknemers of iemand die een dienst of goederen te koop aanbiedt, betalen advertenties; potentiële medewerkers die op zoek zijn naar dergelijke posities of klanten voor goederen en diensten maken echter gratis gebruik van de service. De details van goederen en diensten, hun bezorging, '+
                   'de voorwaarden van de transactie, betalingen en eventuele geschillen hieromtrent zijn de verantwoordelijkheid van de betrokken partijen en niet die van deze website. De verkoop of aanbieding van goederen en diensten die schadelijk zijn voor levende wezens, het milieu of emotioneel welzijn, zoals wapens, ontvlambare materialen, levende dieren, drugs en medicijnen, zijn niet toegestaan. De site behoudt zich het recht voor om advertenties die ongeschikt worden geacht door de serviceprovider te weigeren of te verwijderen. '+
                  '<strong> Onze services voor bedrijven zijn als volgt. Wij vragen de vergoeding bij registratie. </ Strong> '+
                  '<li> <strong> Een taak registreren: </strong> iemand die een taak aanbiedt, kan zijn of haar baan registreren en een medewerker zoeken. </ li>' +
                  '<li> Verkoopitem: iedereen die iets te verkopen heeft, kan het in onze service plaatsen. Als u artikelen te koop heeft, kunt u de prijs instellen. De levering van artikelen wordt door u georganiseerd. Deze website is niet verantwoordelijk voor items die door gebruikers worden geplaatst, tenzij het item door deze website is gepost. </ Li> '+
                  '<li class = "alert-danger"> <strong> Alles wat schadelijk is voor levende wezens, het milieu of emotioneel welzijn, zoals wapens, ontvlambare materialen, levende dieren, drugs en medicijnen, is niet toegestaan ​​in onze service. Over het algemeen zijn berichten die mensen schade toebrengen verboden. Volg de communityrichtlijnen. Deze website is niet verantwoordelijk voor schade </ strong>. </ Li> '+
                  '<li> <strong> Registreren van vervoermiddelen: </ strong> iedereen die vervoermiddelen heeft en deze als beschikbaar transport in onze service wil registreren. </ li>' +
                            '</ul>' +
                  '<li> <strong> Problemen met het plaatsen van berichten </strong>: we houden rekening met problemen zoals mobiele en computerproblemen, gezondheid, juridisch advies, richtlijnen voor levensstijl, algemene informatie, vertalingen van talen en meer. We proberen uw verzoek op te lossen door u te verbinden met iemand die ervaring heeft met het probleem in kwestie. Daarnaast is het mogelijk om advies te krijgen van iemand die geen professionele ervaring heeft met het probleem in kwestie. Het plaatsen van dergelijke problemen en het verkrijgen van advies van gebruikers is '+' gratis. Ons platform staat open voor dit soort discussies. </ Li> '+
                  '</ul>',
registerItem:'registreren',
previousProfilePic:'huidige profielfoto',
dailyLifeHappeningsRegistrations:'DailyLife Registraties, educatieve diensten, nieuws, geschiedenissen',
activationStatusAlert:'Activeer uw account alstublieft',
homePageAfterLogin:'Posten en advertenties',
 employeeAndEmployer:'Werknemer/werkgever',
 dailyLifeHappenings:'Nieuws en diensten',
  thingsToSale:'Item in de uitverkoop',
   notifications:'Info en meldingen',
    chatRoom:'Chat Rooms',
     issuesAndSuggestions:'Problemen en oplossingen',
      userSettings:'Gebruikersinstellingen',
      jobSearch:'Werk zoeken',
       searchCandidate:'Werknemer zoeken',
        jobPosts:'baan plaatsen',
             issuePost:'Post problemen',
             journey:'Reisdiensten',
             getNews:'Educatieve diensten en nieuws',
             backToWorkTransactions:'terug naar werkruimte',
             acceptTheRequest:'aanvaarden',
             yourfriends:'mijn vrienden',
             remarks:'opmerkingen',
             messageNotifications:'Berichten',
             notificationsAtNofication:'Meldingen',
             connectedPeopleWithU:'Verbonden mensen met jou',
             friendRequestAtNotification:'Vriendverzoeken',
             transportAndTravelSchedules:'transport- en reisschema\'s',
             getMyPosts:'Mijn posts',
             goToMyItemsList:'ga naar mijn lijst met items',
             backToItemRegistration:'terug naar item registratie',
             SoldItemId:'Item Id',
            itemName:'Item Naam',
            numberOfItemsSold:'Aantal verkochte items',
            totalNumberOfItemsLeft:'Totaal aantal items dat nog in de winkel ligt',
            totalPriceAmount:'Bedrag',
            boughtDate:'Gekocht Datum',
            sellId:'Order id',
            numberOfItemsBought:'Aantal gekochte items',
             itemsThatHasRegisteredByUser:'Items die u hebt geregistreerd om te verkopen',
            itemsThatHasBeenSold:'Items die zijn verkocht',
            buttonGetSoldItems:'Krijg verkochte items',
            customersBoughtItems:'Klanten die mijn items hebben gekocht',
            buttonGetCustomersWhoBoughtItem:'Krijg klanten die mijn items hebben gekoch',
            buyDate:'Gekocht datum',
            itemForSellRegistrationDate:'Registratie datum',
            blockFriend:'Block',
            loadCountry:'laad landen',
            loadCities:'steden laden',
            backToLogin:'Terug naar login pagina',
             backToPosts:'Terug naar posts',
            toPost:'Om gepost te worden',
            vehiclePicture:'Afbeelding van het voertuig',
            cropedVehiclePicture:'Bijgesneden afbeelding van voertuig',
            uploadVehicleImage:'Uploaden',
            previousImageOfVehicle:'Voorgaand voertuigbeeld',
            backToTransportImage:'Terug',
            registerAsEmployerIf:"Wie moet zich als werknemer registreren?" +
                                   "U kunt zich als werknemer registreren als:" +
                                   "- U wilt werk vinden" +
                                   "- U hebt een beroep" +
                                   "- U hebt geen beroep maar ziet er ...",
            registeringAsEmployeeIf:"Wie moet zich als werkgever registreren?" +
                                       "U kunt zich als werkgever registreren als:" +
                                       "U hebt een klus die moet worden gedaan" +
                                       "U zoekt professionals" +
                                       "Algemene informatie" +
                                       "Geef bij het registreren als werkgever aan welk werk u wilt laten doen, door een" +
                                       "professioneel of niet-professioneel. Je kunt dan iemand inhuren om het werk te doen"+
                                       "werk kan van alles zijn, van huisschilderen tot ICT, tot gezondheidszorg of sociale zorg, enz.",
search:'zoeken',
newsPicture:'Beeld / video van nieuws / verhaal / educatieve diensten' ,
                    cropedNewsPicture:'Het beeld zal er zo uitzien',
                    uploadNewsImage:'Upload bestand',
                     backToSearchProfessionalsPage:'Terug naar zoeken professionals pagina',
                    goBackToJobSearch:'Terug naar de pagina met zoekopdrachten' ,
                    Welcome:'WELKOM BIJ' ,
                    yourhelplab:'JOUW HELP LAB',
                    numberOfReplies:'antwoorden',
                    searchClientAtYourArea:'Zoek werkgever',
                    searchProfessionalAtYourArea:'Zoek medewerker'
          })
          .translations('TG', {
            loginHeadline: 'መእተዊ',
            loginButton: 'እቶ',
            chooseLanguage: 'ቋንቋ ምረጽ',
            registerHere: 'ኣባል ተዘይኮንካ ኣብዚ ተመዝገብ',
             close:'ዕጾ',
             registration:'ምዝገባ',
             fullName:'ሙሉእ ስም',
            username:'መጠቐሚ ስም',
            name:'ስም',
            dateOfBirth:'ዕለተ ልደት',
            gender:'ጾታ',
            email:'ኢመይል',
            password:'ቃለ ምስጢር የእቱ',
            repeatPassword:'ቃለ ምስጢር ድገሞ',
            passwordMismutch:'ኣብ ላዕሊ ዘእተኹሞ ቃለ ምስጢር ምስዚ ሕጂ ዘእተኹሞ ሓደ ዓይነት ኣይኮነን። ',
            workAndProfessionRegistration:'ስራሕን ሞያን ምምዝጋብ',
            online:'ኣብ መስመር ኣለው',
             travelRegistration:'ናይ ጉዕዞ ምዝገባ',
             findTranport:'ተጓዓዝቲ ድለ',
             tasks:'ናይ ተጠቓሚ ዕማማት',
             completed:'ተወዲኡ',
             setting:'ናይ ተጠቓሚ ሓበሬታ ምምዕርራያት',
              logout:'መውጽኢ።',
              post:'ፖስት',
              writePostInfo:'መግለጺ ፖስትኻ ኣብዚ ጸሓፍ',
              uploadImage:'ዝልጠፍ ስእሊ ተሊኩም ኣብዚ ታሕቲ ዘላ ሞልጎም ብምጥዋቕ ጸዓንዎ ተዘይብልኩም ግን ጽሑፍ ጥራይ ክትልጥፉ ትኽእሉ ኢኩም።',
               like:'ሰብ ነዛ ፖስት ፈቲዮማ ኣለዉ',
             comment:'ርኢቶታት',
             writeComment:'ርኢቶ ጸሓፍ',
             send:'ስደድ',
             onlineUsers:'ኣብ መስመር ዘለዉ ተጠቐምቲ',
             client:'ናይ ስራሕ ዓማዊል(ስራሕ ዘለዎም ሰባት)',
             sendMessage:'መልአኽቲ ስደድ',
             professionals:'ሞያውያን (ስራሕ ዝደልዩ ዘለዉ፥ ሞያ ዘለዎም ሰባት)',
             profession:'ሞያ',
             share:'ኣካፍል',
             lookingFor:'ዝድለ ዘሎ ሞያ',
             livesIn:'ዝነብረሉ ቦታ',
              hasJobOf:'ስራሕ ንኽፍጸም ዝወስደሉ ግዜ',
             searchingForAjob:'ስራሕ የናዲ ኣሎ',
             joinToRooms:'ክፉታት ዘለው ክፍልታት',
             memebers:'ኣባላት',
             youAreInRoom:'እዚ ክፍሊ እዚ ',
             soYouAreLookingFor:'ስለዚ ተናዲዩዎ ዘለኹም',
             writeWorkSummary:'ሓፈሻዊ መግለጺ ብዛዕባ ክስራሕ ደሊኹሞ ዘለኹም ስራሕ',
             exceedTheLimit:'ደረት ሓሊፉ',
             youAreLookingNow:'ሕጂ ትደልዩዎ ዘለኹም',
             telephone:'ቴለፎን',
             howLongDoesTheWorkTakes:'እቲ ስራሕ ንኽፍጸም ክንደይ ክወስድ ይኽእል',
             saveUpdate:'ዓቅብ',
             professionRegistration:'ምዝገባ ሞያ',
             generalSummaryAboutYou:'ሓፈሻዊ መብርሂ ብዛዕባኻ',
             mainProfession:'ቀንዲ ሞያ',
             yourWorkingPeriodIs:'ክትሰርሓሉ ትደሊ ዝግያት',
             IAmNow:'ኣብዚ እዋን እዚ',
             employees:'ሰራሕተኛታት',
             offline:'ኣብ መስመር የሎን',
             dateOfBirth:'ዕለተ ልደት',
             workToBeDone:'ክስራሕ ዘለዎ ዕዮ',
             sendMessageHere:'መልእክቲ ኣብዚ ስደድ',
             reply:'ነዚ ሓሳብ እዚ ርኢቶ ሃብ',
             writeSuggestion:'ርኢቶኻ ጸሓፍ',
             problemDescription:'መግለጺ ጉዳይ',
             postedOn:'ዝተጻሕፈሉ ግዜ',
             seeSuggestion:'ርኢቶታት ተመልከት',
             address:'ኣድራሻ',
             whoMaySolveThisProblem:'እዚ ጉዳይ እዚ ንመን ክምልከቶ ወይ ኣየናይ ሞያ ዘለዎ ሰብ ክፈትሖ ይኽእል ኢልካ ትግምት',
             idontknow:'ኣይፈለጥኩን',
             submitSuggestion:'ርኢቶ ኣረክብ',
             journeySchedules:'ናይ ጉዕዞ መደባት',
             transportType:'ዓይነት መጓዓዝያ',
             from:'ካብ',
             to:'ናብ',
             date:'ዕለት',
             code:'ኮድ',
             transportRegistration:'መጓዓዝያ ሃልያትካ ንኸተመዝግባ/ወይ ቅድሚሕጂ ዘመዝገብኩማ ሓበሬታ ንኸተማሓይሹ ኣብዚ ክሊክ ግበሩ ',
             activeFromTo:'ትሰርሓሉ ካብ -ክሳብ',
             numberOfSeats:'ብዝሒ መናብር ወይ ቦታ ዘለዋ',
             additionalInfo:'ተወሳኺ ሓበሬታ',
             travelByTrainRegistration:'ጉዕዞ ብባቡር እንተለካ ንኽትምዝገብ ',
             registerToTravelByAnyTransport:'ብዝተፈላለያ ዓይነት መጓዓዝያ ክትጉዓዝ ምስትደሊ፥ ንኽትምዝገብ ',
             journeyDetails:'ናይ ጉዕዞ ሓበሬታ',
             registerHere:'ኣብዚ ተመዝገብ',
             by:'ብ',
             freeSpace:'ዘለዋ ናጻ ቦታ',
             fillYourTelephoneHereThenClick:'ተለፎንካ ኣእቱ ብድሕሪኡ ኣብዚ ክሊክ ግበር',
             filterHeadingsHere:'ኣርእስታት ኣብዚ ጸሓፍ',
             posted:'ዝጸሓፎ',
             postedBy:'ጸሓፊ',
             historyType:'ዓይነት ትንተና',
             title:'ኣርእስቲ',
             subTitle:'ትሕተ ኣርእስቲ',
             writeDetailsHereBelow:'ዝርዝራት መግለጺ ኣብዚ ታሕቲ ጸሓፍ',
             hereBelow:'ኣብዚ ታሕቲ',
             uploadImageOrVidio:'ስእሊ ወይ ቪድዮ ጸዓን',
             startNew:'ከምብሓዱሽ ጀምር +',
             addNewSubTitle:'ትሕተ ኣርእስቲ ወስኽ +',
             notification:'ሓበሬታታት',
             messages:'መልእኽቲ',
             seeDetails:'ዝርዝራት ሓበሬታ ብዛዕባ እዚ ሰብ ተዓዘብ',
             fullName:'ሙሉእ ስም',
             gender:'ጾታ',
             workDetails:'ናይ ስራሕ መግለጺታት',
             timeTaken:'ዝወስደሉ ግዜ',
             workSession:'ናይ ስራሕ እዋናት',
             travellingDate:'ትጎዓዘሉ ዕለት',
             transportChoosed:'ዝተመርጸት መጓዓዝያ',
             employersAndEmployees:'ኣስራሕን ሰራሕተኛን',
             whoShouldRegisterAsEmployer:'መን ዩ ከም ኣስራሓይ ክምዝገብ ዘለዎ?',
             whoShouldRegisterAsEmployee:'መን ዩ ከም ስራሕተኛ ክምዝገብ ዘለዎ?',
             employer:'ስራሕ ዘለዎም ሰባት ወይ ኣስራሕቲ',
             username:'መጠቀሚ ስም',
             password:'ቃላ ምስጢር',
             updateYourInformation:'ሓበሬታኹም፣ ሓበሬታኹም ከተመሓይሹ ውን ይከኣል ኢዩ።',
             selectProfileImage:'መጠቀሚ ቅድመ ስእሊ ኣብዚ ምረጽ',
             yourProfilePictureLooksLike:'መጠቀሚ ቅድመ ስእልኻ ከምዚ ኣብዚ ትሕት አልካ ዘሎ ስእሊ ትመስል',
             updateUserSettings:'ሓበሬታትካ ኣመሓይሽ',
             filterBy:'ከም መፍለዪ ክትጥቀመሉ ደሊኻ ዘለኻ ስም',
             saleThingsPost:'ምምዝጋብ ዝሽየጡ ኣቕሑ',
             catagories:'ምድብ',
             price:'ዋጋ',
             where:'ኣበይ',
             description:'መግለጺ',
             uploadImage:'ስእሊ ኣመሓላልፍ',
             upload:'ኣመሓላልፍ',
             news:'ዜና',
             educationalService:'ትምህርታዊ ኣገልግሎታት',
             fictions:'ዛንታ',
             travelAndTravelSchedules:'ጉዕዞታትን ናይ ጉዕዞ ውጥናትን',
             writeNewsHere:'ትንታነታት ኣብዚ ጸሓፍ።ዜና፣ህተባህለታት፣ዛንታታ ኣብዚ ክንጽሕፍ ንኽእል።',
             backToRooms:'ናብ ካሎት ክፍልታት ተመለስ',
             problemsAndTheriSolutions:'ጉዳያትን ርኢቶታትን መፍትሒኦምን',
             reportHereIfYouHaveProblem:'ጉዳይ ተሊካ ኣብዚ ጸሓፍ. ጉዳይካ ኣካፍል',
             thingsToSale:'ዝሽየጡ ነገራት',
             userSettings:'ሓበሬታኹም',
             clickHere:'ኣብዚ ክሊክ ግበር',
             backToDailyLifeHomePage:'ናብ ዜናታትን ታሪኻትን ዘለዎ ገጽ ተመለስ',
             numberOfPeople:'ብዝሒ ተጓዓዝቲ',
             date:'ዕለት',
             generalInformationAboutEmployerRegistration:'ሓፈሻዊ መግለጺ ስለምንታይ ከም ኣስራሕቲ ወይ ዕዮ ዘለዎም ሰባት ኮይና ክንምዝገም ዘድልየና?',
             whyEmployer:'ከም ኣስራሕቲ ኮይና ክንምዝገበሉ ዘድልየና መዳይ፣ ዝዕየ ዕዮ ምስዝህልወና እሞ ከኣ ሞያ ዘለዎ ሰብ ክኸውን ይኽእል ወይ ሞያ ዘይብሉ ሰብ ምስዘድልየና ከም ኣስራሕቲ ኮይና ክንምዝገብ ንኽእል።ነኣብነት ከም ኣብ ምህናጽ ዘድልዩ ጉልበታዊ ሓገዛት፣ከም ኣብ ምቱርጓም ዘድልዩ ክኢላታት ቋንቋ ከም ኣብ እዋን ጥዕናዊ ጸገማት ኣብ ምሕካም ዘድልዩና ኪኢላታት ሓካይም ወዘተ ምስ ዘድልየና ከም ኣስራሓይ ወይ ዕዮ ዘለዎ ሰብ ኮይና ክንምዝገም ንኻእል።ብሓፈሻ ኣብ ዝተፈላለየ መዳያትን እዋናትን ንደልዮ ዘለና ብ ሓደ ሞያ ዘለዎ ሰብ ወይ ሞያ ዘይብሉ ሰብ ውን ክኸውን ይኽእል ምስ ዘድልየና ከም ኣስራሓይ ተመዝጊብና ዝተፈላለዩ ሞያ ዘለዎም ከምኡ ውን ሞያ ዘይብሎም ንስራሕ ድሉዋት ዝኾኑ ሰባት ክንረክብን ብዛዕባ ስራሕና ምስኦም ክንዛራረብን ንኻእል።',
             listOfAllProfessionals:'ስራሕ ዝደልዩ',
             professionalRegistration:'ከም ደላዪ ስራሕ ኮይንካ ተመዝገብ',
             employerRegistration:'ከም ኣስራሓይ ወይ ሰራሕ ዘለዎ ሰብ ኮይንካ ተመዝገብ',
             listOfAllClients:'ኣስራሕቲ',
             save:'ዓቅብ',
             seeTravelInfo:'ጉዕዞ ተዓዘብ',
             delete:'ደምስስ',
             submit:'ኣረክብ',
             daysAgo:'ማዓልታት ይገብር',
             clientRegistration:'ናይ ኣስራሓይ ምዝገባ',
             passengerRemarks:'ናይ ተጓዓዛይ ተወሰኻኢ መብርሂ። ነኣብነት፥ ኣብዚ ትኽክል ዝኾነ ሙሉእ ስምን ኢማይልን ክተእትዉ ትኽእሉ',
             country:'ትነብረሉ ሃገር',
             ILiveOutSideNetherlands:'ካብ ነዘርላንድ ወጻኢ ዲኹም ትነብሩ ?',
             cityOrTown:'ትነብረሉ ከተማ ወይ ዓዲ',
             sendNewsText:'ጽሑፍ ስደድ',
             chooseCity:'ከተማ ምረጽ',
             others:'ካልእ',
             problemType:'ዓይነት ጉዳይ',
             notStatedHere:'ዝነብረላ ዘለኹ ዓዲ ኣብ ዝርዝር ኣስማት ኣይተጠቅሰቲን።',
             Settings:'ምምዕርራያት ሓበሬታኻ',
             createRoom:'ናይ ገዛእ ርእስኹም ክፍሊ ኣዳሉው',
             uploadFile:'ጸዓን',
             sendWorkRequest:'ናይ ስራሕ ሕቶ ሕተት',
             friendRequest:'ናይ ምሕዝነት ሕቶ ሕተት',
             wrongUserNameOrPassword:'መጠቀሚ ስም ወይ ቃለ ምስጢር ሓዲኡ ተጋጊኹም ኣለኹም ካልኣይ ፈትኑ ወይ <br> ሓደስቲ ተኾይንኩም መጠቀሚ ስም ኣውጽኡ ኣብዚ ታሕቲ ኣለኩም።',
             alreadyHaveAccount:'ኣካውንት(ኣባልነት ናይ መጠቀሚ ኣገልግሎትና) ኣለኩም? ናብ መእተዊ ተመለሱ።',
             register:'መመዝገቢ',
             signup:'ኣካውንት የብልካን ? ኣብዚ ተመዝገብ።',
             successfullyRegistered:'ተመዝጊብኩም ኣለኹም። ምሳና ብምምዝጋብም ኣዚና ነመስግን።<br> እምበኣር ኣባልነትኩም ንኽሰርሕ ናብ ኢመይልኩም መልአኽቲ ሰዲድና ኣለና ነቲ መልእኽቲ ኣንቢብኩም ኣብቲ ተባሂሉ ዘሎ መልጎም ብምጥዋቕ መእተዊ ኣገልግሎትኩም ክሰርሓልኩም ኢዩ። ።',
             gettingAjob:'ስራሕ ክትሓትት፡ ምስ ዘለካ ክእለት ዝኸይድ ስራሕ ከተናድን ክትረክብን ትኽእል።',
             postingAjob:'ዝዕየ ስራሕ ምስዝህልወካ ዝዓየልካ ሰብ ንምርካብ ስራሕካ ክትልጥፍ ትኽእል።ኣብዚ ክሊክ ግበር።',
             gettingBestCandidate:'ንዕዮኻ ክሰርሕዎ ይኽእሉ ኢዮም ዝበልካዮም ሰራሕተኛታት <br> ክትረክብን ንኽሰርሑልካ ክትውከሶምን ትኽእል።',
             gettingAjobWithNoProfession:'ዋላ ሞያ ኣይሃልኻ ኣብ ሞያ ዘየድልዮ ስራሕ ክትረክብ ትኽእል ወይ ከተናዲ ውን ትኽእል <br>መኽንያቱ ሞያ ዘየድልዮም ስራሓት ውን ኣብዚ ስለዝልጠፉ።ኣብዚ ክሊክ ግበር።',
             postingIssues:'ዘለካ ጉዳይ ክትልጥፍ ወይ ንበዓል ሞያ ክትውከስን ትኽእል ንጉዳይካ ከኣ ፍታሕ ክትረኽበሉ ትኽእል።ኣብዚ ክሊክ ግበር።',
             gettingNews:'ኣዋናውያን ዜናታት ከምኡ ውን ዝተፈላለዩ ጽሑፋትን ታሪኻትን ከተንብብ ትኽእል።',
             privateChatsAndGroupChats:'ብሕታዊ ዝርርባት ብ ጽሑፍ ክትሰድድ ትኽእል ከምኡ ውን ብ እኩብ ውን ክትዘራረብ ትኽእል።',
             postingHobies:'ዝተፈላለዩ ደስ ዝብሉኻ ነገራት ወይ ጽሑፋት ክትልጥፍ ትኽክል።<br>ካብ የዕሩኽ መሓዛ ድማ ርኢቶታት ክትረክብ ትኽእል።',
             gettingItemsToSale:'#ዝሽየጡ ነገራት ውን ክትረክብ ትኽእል።',
             journeySchedules:'ናይ ጉዕዞ መደባት ክትሕንጽጽ ትኽእል።',
             searchAjob:'ስራሕ ድለ',
             yourPreviousChoosen:'መሪጽኩሞ ዝነበርኩም ፥ ',
             subWorkIsCatagorizedUnder:'መሪጽኩሞ ዝነበርኩም ንኡስ ምድባት፥',
             userSetting:'ምምዕርራይ መጠቀሚ ሓበሬታ',
             userProfile:'መጠቐሚ ስእሊ ቀይር ወይ ኣእቱ',
             userPosts:'ተጠቓማይ ፖስት ዝገበሮም ፖስትታት',
             roomOwner:" ይበሃል",
             seeMoreMessages:'ተወሳኺ ዝተሰደ መልአኽቲ',
             aboutUser:'ብዛዕባ ዚ ሰብ ዚ',
             seeMoreNotifications:'ተወሳኺ ሓበሬታታት',
             seeMoreFriendRequest:'ተወሳኺ ናይ ንምሕዝነት ዝሓተቱ',
             professionalOnlineStatus:'ሕጂ ኣብ መስመር ኣለዉ',
             mainProfessionHomePage:'ሞያ',
             city:'ከተማ',
             getNewsAtHomePage:'ዜናታት ድለ',
             backtosearchHomepage:'ናብ ናይ መጀመርያ ገጽ ተመለስ',
             searchOnHomepage:'ደለ',
             getItemForSaleHomepage:'ዝሽየጡ ነገራት ድለ',
             homePageInfo:'እንቛዕ ብደሓን መጻኹም!እዚ ወብሳይት ዚ  ብዛዕባ ስራሕን ዕድላት ስራሕን ምርካብን ምድላዪን ይነጥፍ ። ጠመተና ምርኻብ ክሰርሑ ዝኽእሉ ሰባት ምስ ከስርሑ ዝኽእሉ ሰባትን ኢዩ።ኣብ ዚ ዋላ ውን ሞያ ዘይብሎም ሰባት ኣብ ሞያ ዘይድልዩ ስራሓት ብምስራሕ ዕድላት ስራሕ ክንከፍተሎም ንኽእል።ብካልእ ወገን ውን እዋናዊ ዝኾኑ ሓበሬታታት ብዛዕባ ስራሕን ካልእን ንህብ።ኣብዚ ጎኒ ዘለው ዝርዝራት ገለ ገለ ጥቅምታትና ስለዝኾኑ ኣብ ነፍሲ ወከፎም ክሊክ ብምግባር ክትጥቀሙሎም ንላቦ።',
             contactus:'ኣብዚ ርኸቡና',
             aboutus:'ብዛዕባ ዚ',
             gotohomepage:'መጀመሪ ገጽ',
             gotologinpage:'ናብ መእተዊ ገጽ ኪድ',
             websiteAddress:'መወከሲ ኣድራሻ ወይ ወብሳይት',
             chooseProfession:'ሞያ ምረጽ/ቀይር',
             changeWorkTime:'ናይ ስራሕ ግዜኹም ኣስፍሩ/ቀይሩ',
             situation:'ከነታትኩም ኣብዚ እዋን እዚ',
             chooseProfessions:'ሞያ ምረጽ',
             chooseCountry:'ሃገር ምረጽ',
             chooseCity:'ከተማ ምረጽ',
             buy:'ግዛእ',
             cancel:'ሰርዝ',
             buyThingsPost:'ዝርዝር ሓቤረታ',
             itemName:'ስም ናይ ስሽየጥ ነገር',
             unit:'ባጤራ',
             getBoughtItems:'ንምዕዳግ ዝተመርጹ ኣቕሑ',
             backToSalePage:'ናብ ናይ መሸጣ ገጽ ተመለስ',
             numberOfItems:'ብዝሒ',
             amount:'ብዝሒ',
             firstName:'ስም',
             middelName:'ስም ኣቦ',
             surName:'ስም ኣባሓጎ/መጸውዒ ስድራቤት',
             postCode:'ፖስት/ዚፕ ኮድ',
             houseNumber:'ቁጽሪ ገዛ',
             street:'ጎደና',
             addressInfo:'ሓበሬታ ናይ ኣድራሻ',
             buyerInfo:'ናይ ገዛኣይ ሓበሬታ',
             total:'ድምር',
             action:'ክትግበሩ ዝኽእሉ ኣክሽናት',
             chatWithSupplier:'ምስ ሸያጣይ ተዘራረብ ብዛዕብባ እዚ',
             size:'መዐቐኒ',
             newpassword:'ሓዲሽ ቓለ ምስጢር',
             changePassword:'ቓለ ምስጢር ቀይር',
             change:'ቀይር',
             BackToLogin:'ናብ ናይ መእተዊ ገጽ ተመለስ',
             forgetPassword:'ቃለ ምስጢርኩም ረሲዕኩሞ ዲኹም? ረሲዕኩሞ ተኾይንኩም ኣብዚ ሕተቱ',
             professionalMotivation:'ናይ ሰራሕተኛ ምትብባዕ ወይ ተወስኺ ሓበሬታ ርአ',
             backToClientsList:'ናብ ዓማዊል ተመለስ',
             backToProfessionalsList:'ናብ ሰራሕተኛታት ተመለስ',
             employeeClient:'(ሰራሕተኛ)',
             employerClient:'(ዝስራሕ ዘለዎ ሰብ)',
             request:'ሕተት',
             chatWithTransportOwner:'ምስ ወናኒ ተዘራረብ',
             passengerRemarks:'ተወሳኺ ክትብሎ ትደሊ',
             getAllAcceptedRequests:'ሓቲቶም ዝተቐበልኩሞም ሰባት',
             getAllRequests:'ዝሓተቱ ሰባት',
             whoAcceptedMe:'መን ንሕቶይ ተቐቢሉዎ',
             registerFormInvalid:'ዘይቅቡል መመዝገቢ ቕጥዒ',
             fromTime:'ካብ ግዜ',
             toTime:'ክሳብ ግዜ',
             getInTouchWithUs:'ርኸቡና',
             gotopayment:'ናብ መኽፈሊ',
             next:'ዝቕጽል',
             writeWorkDetails:'ስራሕ ብዝርዝር ግለጽ',
             itemsForSale:'ዝዕደጉ ነገራት',
             profPlaceHolder:'ሞያ',
             countryPlaceHolder:'ሃገር',
             cityPlaceHolder:'ከተማ',
             transportRegistrationAdvice:'መኪና ኣለትካ?ክትሰርሓላ ወይ ንእግረ መንገድኻ ሰብ ክትመላኣላ ትኽእል ኢኻ ።ነዚ ክትገብር መጀመርያ ከተመዝግባ ኣለካ ብድሕሪኡ ኣብ online ምስሃለወት ሰብ ክርኢያን ምሳኻ ንኽጎዓዙ ክሓቱኻን ንስኻ ውን ናይ ምቅባልን ምንጻግን መሰል ክህልወካ ኢዩ።ተጎዓዛይ ተኾይንካ ውን መካይን ወይ ካልእ መጓዓዝያታት ንኽትረክብ ክትምዝገብ ኣለካ።ዝኾነ ካልእ ጉዳይ ምስ ዝህልወኩም ግን ኣብ ላዕሊ መልእኽቲ ብምስዳድ ክትረኽቡና ትኽእሉ።',
             journeyByPlane:'ጉዕዞ ብነፋሪት',
             sendMoney:'ገንዘብ ናብ ኤርትራ ብሕጋዊ መንገዲ ምስዳድ <br>ገንዘብ ናብ ኤርትራ ብሕጋዊ ክትሰዱ ደሊኹም? ጸገም የለን ኣብዚ እዋን ዚ ገንዘብ ምስዳድ ን ኤርትራ ብ ጸሊም ይኹን ብ ሕጋዊ ኩሉ ማዕረ ስለዝኾነ ካብሎሚ ብሕጋዊ ገንዘብ ክትሰዱ ከምትኻሉ ክንሕብረኩም ንፈቱ ።እምባኣር ነዚ ንምግባር ተለፎንኩም ኣብዚ ጸሓፉ እሞ ባዕልና ክንረኽበኩም ኢና ብኸመይ ይኸውን ከኣ ከነዘራርበኩምን ክንገልጸልኩምን ኢና።እምበኣር መልእኽትኹም ብፍላይ ከኣ ተለፎንኩም ጸሒፍኩም ኣብ ስደድ ዝብል ዘሎ መልጎም ጠውቑ ሞ ብድሕሪኡ ባዕልና ክንረኽበኩም ኢና።',
             passengers:'ተጎዓዝቲ',
             transports:'ኣብዚ ቦታ ዚ በዚ ዝመረጽኩሞ ዕለት ተመዝጊበን ዘለዋ መጓዓዝያታት',
             writeCityNameWhereULive:'ትነብሩላ ከተማ ኣብዚ ጸሓፉ',
             travelByMeansOfTransport:'ሓበሬታ መጓዓዝያታት',
             uploadTransportImage:'ናይ መጓዓዝያ ስእሊ',
             itemImage:'ናይ ንብረት ስእሊ ኣብዚ ታሕቲ የእትው።',
             itemWillBeLookingLikeThis:'ንብረት ብ ኸምዚ ክርአ ኢዩ።',
               addSaleItemButton:'ናብ መዐቀቢ የእቱ',
             itemAmount:'ብዝሒ ናይዚ ዓይነት ነብረት ዚ',
             itemSize:'ዓቐን ንብረት ብ ኪግ፣ሜትሮ፣ጽምዲ...ወዘተ',
             newItemToSaleButton:'ሓዲሽ ንብረት መዝግብ',
             addItemToSale:'ዝሽየጥ ንብረት እንተልዩኩም ኣብዚ የእትዉ ወይ ቅድሚ ሕጂ ዘመዝገብኩሞም ተሊዮም ኣብዚ ኩነታቶም ክትከታተሉ ትኽእሉ',
            backToSaleHomePage:'ናብ መሸጢ ቦታ ተመለስ',
             newsPageIntro:'ምንጪ ዜናን ሓበሬታን ታሪኻትን ከምኡ ውን ዝርርብን ሞጎተን ኣብ መንጎ ሰባት ን ዝሓሸ ኣማራጺታት',
             travelPageIntro:'ጉዕዞ ኣለኩም? ወይ ተጓዓዚት ኣላትኩም ከምኡ ውን ክትሰርሑላ ደሊኹም?እምበኣር ኣብ ዚ ተጓዓዝትን ኣጓዓዝትን ክራኸቡሉ ዝኽእሉ ቦታ እዩ',
             salePageIntro:'ዝዕደግ ነገር ደሊኹም?እምበኣር እዚ ቦታ ዚ ዝዕደጉ ነገራት ትረኽቡሉ ቦታ እዩ።ዝሽየጥ ተሊኩም ውን ኣብዚ ክትዝርግሑዎ ወይ ከተሽጥዎ ትኽእሉ ኢኩም',
              headerForAboutPage:'ብዛዕባና',
             mainTextAboutPage:"እዚ ወብሳይት ዚ ብትግርኛ ብዛዕባ ስራሕን ምስ ስራሕ ዝተኣሳሰሩ ንጥፈታትን ሓበሬታ ኣብ ምሃብ ይነጥፍ።ብዘይካ ዚ ውን እዋናውያን ዝኾኑ ዜናታት ብዛዕባ ተኸፊቱ ዝርከብ ናይ ስራሕ ዕድላትን ካልእን ሓበሬታ ኣብ እዋኑ ይህብ ብተወሳኺ ውን ዜና ን ሓበሬታን ታሪኻትን ይልጥፍ፣ ዝርርባት ኮነ ክትዓት ውን የካዪድ ኢዩ።ብ ተወሳኺ ውን ብዛዕባ ጉዕዞን ማለት ተጓዓዝትን ኣጓዓዝትን ዝራኸቡሉ መራኸቢ መስመር ውን ዩ።ዝተፈላለዩ በብዓይነቶም ዝዝርጉሑ ንብረታት ን መሸጣ ዝቐረቡ ውን ኣብዚ ይዝርግሕ ኢዩ።ስለዚ ኩሉኹም ኤርተራውያን ከምኡ ውን ኢትዮጵያውንን ኣብዚ ወብሳይት ዚ ክትከታተሉን ተጠቀምቲ ናይዚ ወብሳይት ዚ ክትኮኑን በዚ ኣጋጣሚ ዚ ክዕድመኩም ይፈቱ።ነዚ ወብሳይቲ ዚ ምጥቃም ብነጻ ኢዩ ኣብዚ እዋን ዚ ።ስለዚ ንዝያዳ ተጠቃምነት ናይዚ ክትኮኑ ተመዝጊብኩም ናብ ናይ ቀንዲ ገጽ ክትኣትውን ኣብቲ ቀንዲ ገጽ ናይዚ ወብሳይቲ ዝተፈላለዩ ዓይነት ነገራት ዝያዳ ክትጥቀሙሎም ትኽእሉ ኣለዉ።ስለዚ ምምዝጋብ ኣይንረስዕ።ኣብ መጨረሽታ ክብሎ ዝደሊ እዚ ወብሳይት ዚ ሙሉእ ብሙሉእ ብትግርኛ ኢዩ ዝሰርሕ ስለዚ ዕላማ ናይዚ ወብሳይት ዚ እቶም ትግርኛ ተዛረብቲ ነዚ ዘሎ ተክኖሎግጂ ክጥቀሙሉን ብዝግባእ ሓበሬታ ክረኽብሉን ዝኽእሉ መንገዲ ምፍጣር ቀንዲ ዕላማና ኢዩ።ዝኾነ ሓበሬታ ይኹን ሕቶ ምስ ዝህልወኩም ኣብ ቀንዲ ገጽ ናይዚ ዘለናዮ ብምኻድ "+"'ኣብዚ ርኸቡና'"+" ዝብል ክሊክ ብምግባር ሪኢቶኹም ይኹን ሕቶኹም ክትጽሕፉ ይከኣል።",
             changeTypeOfTransport:'ዓይነት መጓዓዝያ ክትቅይሩ ትኽእሉ ኢኩም።ኣብዚ ክሊክ ግበሩ።',
             journeyByPlaneDescription:'ጉዕዞ ብ ነፋሪት ኣለኩም? እምበኣር ኣብዚ መልእኽትኹም ክትጽሕፉ ትኽእሉ ኢኹም።ንሕና ብ ወገና ውን ዝሓሰረን ዝሓሸን መንገዲ ንምምራጽ ብእትሰዱልና ተለፎን ደዊልና ክንረዳዳኣኩም ድልዋት ኣለና።',
             backtoLandTransport:'ናብ ናይ መሬት ተጓዓዝቲ ተመለስ',
             registerToTravel:'ጉዕዞ ተሊኩም ተመዝገቡ',
             friendshipConfirmation:'ሕራይ',
             friendshipeDeleteConfirm:'ኣይፋለይ',
             notificationsTranslation:'ሓበሬታታት',
             messagesNotificationTranslate:'መልአኽትታት',
             friendRequestsTranslates:'ምሕዝነታዊ ተወክሶታት',
             ownerTransportType:'ዓይነት መጓዓዝያ',
             availabeTime:'ዝርከበሉ ሰዓታት',
             post:'ለጥፍ',
             payNow:'ክፈል',
             amountToPay:'ብዝሒ ዝኽፈል ገንዘብ ብ ኢሮ(€)',
             transportRegistrationPaymentLink:'ዝኾነ መጓዓዝያ ተሊያትኩም እሞኸኣ ንተፈላለየ ንጥፈታት ኣገልግሎት ንህዝቢ ክትህብ ምስትደሊ ብ 20 ኢሮ ጥራይ ከተመዝግብዋ ትኽእሉ ኢኹም።ድሕሪ ምምዝጋብኩም ኣብ ኦንሊነ ንኹሉ ግዜ ን ሓደ ዓመት ክትረኣዩ ኢኹም ደለይቲ ወይ ክጉዓዙ ዝደልዩ ሰባት ድማ ክረኽብኩም ከተገልግልዎም ክዕድሙኹም ኢዮም።ስለዚ ብ 20 ኢሮ ኣብ ዓመት መጓዓዝያኹም ኣብዚ ኣመዝግቡ።',
             workClientPayment:'ዝስራሕ ስራሕ ተሊኩም ንክትልጥፉ ብ 50 ኢሮ(€) ',
             saleItemPayment:'ዝሽየጥ ተሊኩም 10 ኢሮ ብ ምኽፋል ኣብዚ ንዕዳጋ ከተውርድዎ ትኽእሉ ኢኹም ወይ ንመሸጣ ይኹን ንኽራይ ዝወዓውዑ ነገራት ውን ክልጠፉ ይከኣል',
             userRegisterButton:'መዝግብ',
             IAgree:'ምስ ኣብዚ ጎኒ ተጠቒሱ ዘሎ ሓበሬታን ቀይድታትን ይሰማማዕ ኢየ።እቲ ሓበሬታታ ኣብዚ ኣለኩም',
             generalRullsAndRecommendations:'ሓፈሻዊ ሰነድ ውዕል ስምምዕ',
             fastContact:'ን ኣዝዩ ህጹጽ ሓበሬታ በዚ ክትረኽቡና ትኽእሉ',
            termsOfUse:'<h2>ሰነድ ውዕል ስምምዕ ኣገልግሎት</h2>'+
                  'ነዚ ኣገልግሎትና ንኽትጥቀሙ ብስምምዕ ናይዚ ሕጋጋትና ተቐዪድኩም ክትከዱ ምስ ገለ ካብ ኣገልግሎትና ምስዘይትሰማምዕሉ ድማ ካብ ኣገልግሎትና ተጠቐምቲ ከምዘይትኾኑ ክንሕብር ንፈቱ።እዚ ስምምዕ ዚ ን ኹሎም ተሳተፍቲ ወይ ተጠቀምቲ ይውክል።'+
                  'ብኽብረትኩም ነዚ ሕጊ ክትክተሉ በዚ ሕጋጋትና ብምቕያድ ነዚ ኣገልግሎትና ክትጥቐምሉ ንላቦ።ዝኾነ ሕቶ ወይ ሪኢቶ ወይ ዝኾነ ስክፍታታት ምስ ዝህልወኩም <a href="contactus">ኣብዚ</a> ብምጥዋቕ ሓበሬታኹም ወይ ሕቶኹም ክትልእኹልና ትኽእሉ።'+
                  '<ul>'+
                          '<li>'+
                  '<strong>ኣገልግሎትና ክትጥቀሙ ከለኹም በዚ ሕጋጋትና ተቐይድኩም ንዘለዉ ኣገልግሎትና ተጠቀምቲ ኢኹም።ምስ ገለ ካብዞም ኣገልግሎትና ምስዘይትሰማምዑ ብኽብረትኩም ኣገልግሎትና ካብ ምጥቓም ተቖጠቡ።</strong> '+
                  'ዝኾነ ሰብ ካብ ክሊ ዕድመ 18 ንላዕሊ መጠቀሚ ኣብዚ ኣገልግሎትና ዘእቱ ኣካውንት ብምውጻእ ተጠቃሚ ክኸውን ይኽእል።መተቐሚ ኣካውንት ንምውጻእ ዝሰርሕ ኢመይል ክህልወኩም ኣለዎ።ኩሎም ዝምልኡ ኣድለይቲ ሓበሬታታት ድማ ክምልኡ ኣለዎም።'+
                              '<ul>'+
                                         'ኣብዚ ናትና ኣገልግሎት ክልተ ዓይነት ተጠቀምቲ ኣለው።ንሶም ድማ ተጠቃማይን ወሃቢ ኣገልግሎትን ኢልና ንፈልዮም።ኣብ ናይ ተጠቃማይ ቦታ ምስትህልዉ እዚ ኣገልግሎትና ብነጻ ኢዩ ።ኣብ ናይ ወሃብቲ ኣገልግሎት ምስትህልው ግን ገለ ዝኽፈል ነገር ክህሉ ይኽእል ኢዩ።'+
                  '<li>'+
                  'ከም ኣብነት ክንጠቕሶ ንኽእል፣ሞያ ሃልዩካ ንስራሕ ብሞያኻ ወይ ውን ዋላ ሞያ ኣይሃልኻ ስራሕ ተናዲ ምስ ትህሉ ምምዝጋብን ምጥቃምን ስራሕ ዘለዎም ሰባት ምውካስን ብነጻ ኢዩ።ስለዚ መጀመርያ ሞያኻ ተመዝግብ ብድሕሪኡ ስራሕ ዝለጠፉ ሰባት ክትውከስ ትኽእል ወይ እቶም ስራሕ ዘለዎም ሰባት ክጠልቡኻ ውን ይኽእሉ።ዝልጠፍ ስራሕ ምስ ዝህልወካ ግን ስራሕካ ንኽትልጥፍ ዝኽፈል ክህሉ ይኽእል ኢዩ።'+
                  '</li>'+
                  '<li>'+
                  'ካልእ ብነጻ ክትጥቐመሉ ትኽእል ኣገልግሎት ከም ጉዳያት ምልጣፍ ፣ታሪኻትን ዜናታትን ምንባብ ወይ ትምህርታዊ ኣገልግሎታት ምጥቓም ወይ ስራሕ ምንዳይ ዛኣመሰሉ ኣገልግሎታት ብነጻ ኢዩ።ስራሕ ምንዳይ ዋላ ሞያ ኣይሃልኻ ኣብ ሞያ ዘየድልዮም ስራሓት ክትረክብ ወይ ክትውከስ ትኽእል።ስለዚ ሞያ ስለዘይብልኩም ጥራይ ካብ ኣገልግሎትና ካብ ምጥቃም ዓዲ ኣይትውዓሉ።ኣብዚ ኣገልግሎትና ስራሓት ሞያ ዘየድልዮም ስራሓት ብዙሓት ኣለዉ።.'+
                  '</li>'+
                                '</ul>'+
                               '</li>'+
                  '<li>'+
                               '<strong>ን ወሃብቲ ኣገልግሎት</strong>'+
                                 '<ul>'+
                  'ከም መሸጣ ንብረት ፣ ከም ስራሕ ምልጣፍ፣ምውዕዋዕ ፣መኪና ን ኣገልግሎት ምድላው ዛኣመሰሉ ንጥፈታት ሓንሳብ ኣብ ምምዝጋቦም ገንዘብ ብምኽፋል ወሃብቲ ኣገልግሎት ክትኮኑ ትኽእሉ።.ተጠቃማይ ውን ነዞም ኣገልግሎትኩም ክረኽቦምን ውከሳታት ን ኣገልግሎትኩም ጥጡሕ ባይታ ይፈጥር።ከምኡ ውን ተጠቀምቲ ነዚ ኣገልግሎትኩም ንምርካብ ዝኸፍልዎ የብሎምን።ከምኣብነት ሰራሕተኛ ንስራሕኩም ንምዕያይ ክውከሰኩም ይኽእል ንስኹም ውን ሰራሕተኛታት ኣብ ምንዳይ ብቐሊሉ ኣገልገልቲ ክትረኽቡ ትኽእሉ።ኣገልግሎታት ከም ኣቕሑ ምሻጥ ወይ ምውዕዋዕ መሸጣ ፣ዓማዊል ን ትሸጡዎ ዘለኹም ንብረት ኣብ ምዕዳግ ኣገልግሎትኩም ብነጻ ይረኽቦ ።ካልእ ኣብነት ውን ተጓዓዛይ ምስ ዘመዝገብኩማ መጓዓዝያ ንኽጉዓዝ ወይ ንብረት ንኸተብጽሑሉ ብቀሊሉ ኣብዚ ኣገልግሎትና ክረኽበኩምን ክውከሰኩምን ይኽእል።'+
                   'ጽሩይነትን ጽፈትን ናይ ወሃብቲ ኣገልግሎት ወይ ምብጻሕ ይኹን ካልኦት ጸገማት ወይ ምቅይያር ዋጋታት ናይ ንበርት ናይ ንመሸጣ ዝቐረበ ንብረት፣ ኣብ ዋና ወሃቢ ኣገልግሎት ይሙርከስ ዋና ወሃቢ ኣገልግሎት ከኣ ይሕተተሉ። ኣገልግሎትና በቲ ዝስዕብ ጠንቅታት ይኹን ጸገማት  ተሓታቲ ኣይኮነን።'+
                  '<strong>ን ወሃብቲ ኣገልግሎት ኣግልግሎቶም ኣብ ዘመዝግብሉ እዋን ን ኣገልግሎቶም ክፍሊት ኣሎ።እዚ ማለት ከኣ ኣብ እዋን ዘመዝግብሉ ኣገልግሎት መጀመርያ ክፍሊት ብድሕሪኡ ዘለኩም ኣገልግሎት ከተመዝግቡ ትኽእሉ። </strong>'+
                  '<li><strong>ስራሕ ምልጣፍ:</strong> ዝኾነ ዓይነት ስርሕ ምስ ዝህልወኩም ከተመዝግብዎ ኣለኩም ብድሕሪኡ ሰራሕተኛታት ክትረኽቡ ትኽእሉ።</li>'+
                  '<li>መሸጣ ንብረት:ዝኾነ ሰብ ዝሽየጥ ንብረት ምስዝህልዎ ንብረቱ ን መሸጣ ከቕርቦ ይኽእል ኢዩ።ዝሽየጥ ንብረት ግን ካብዞም ኣብ ታሕቲ ዝጥቀሱ ዝተወገዙ ንብረታት ክኸውን የብሉን።ንብረትኩም ዓዳጊ ምስ ዝረክብ ውን ኣብ ዋጋ ናይቲ ንብረት ወይ  ምብጻሕ ናይቲ ንብረት ኣባኹም ይሙርከስ።ዝኾነ ጸገማት ናይቲ ዝሽየጥ ንብረት ኣገልግሎትና ተሓታቲ ኣይኮነን እቲ ንብረት ብ ናትና ወብሳይት ተዘይ ተለጢፉ ማለት ኢዩ።ንብረት ብ ወብሳይትና ተተለጢፉ ግን ኣገልግሎትና ንኹሉ ምብጻሕ ይኹን ሙሉእ ኣገልጎት ናይቲ ንብረት ክሳብ ኣብ ኢድ ዓዳጊ ዝበጽሕ ወብሳይትና ተሓታቲ ይኸውን።ንብረት ብ ወብሳይትና ተተለጢፉ መለለዪ ናይ ወብሳይትና ወይ ኣገልግሎትና ባዕሉ ከምዝለጠፎ ምልክት ኣለዎ።</li>'+
                  '<li class="alert-danger"><strong>ዝኹነ ዓይነት ንብረት ን ወዲ ሰብ ወይ ንእንስሳታት ሃሰይቲ ዝኾኑ ነገራት ምሻጥ ይኹን ምዕዳግ ኣብ ኣገልግሎትና ክልኩል ኢዩ። መሸጣ እንስሳታት ፣ ሓሺሻት ወይ ንስሚዒት ደቂ ሰባት ይኹን ን ከባብያዊ  ሃሳዪ ዝኾኑ ነገራት ወይ በላሕቲ ነገራት ብረት ወይ ዝኾነ ዓይነት ተተኳሲ ወይ ተቓጸልቲ ነገራት፣መድሃኒታት ፣መሸጣ እንስሳታት ዛኣመሰሉ ተኣፈፍቲ ነገራት ኣብ ኣገልግሎትና ፈጺሞም ኩልኩላትን ውጉዛትን ኢዮም።ወይ ዝኾነ ዓይነት ኣብቲ ትነብረሉ ዘለኻ ሃገር ክልኩል ዝኾነ ነገር ኣብዚ ኣገልግሎትና ክህሉ ኣይነፍቅድን ኢና።ከምዚ ዓይነት ነገራት ኣብ ኣገልግሎትና ምስ ዝርአ ድማ ብህጹጽ ብፍጹም ክንድምስሶ ምዃና ክንሕብር ንፈቱ።በዚ ዓይነት ነገራት ዝመጹ ተሓታትነት ኣገልግሎትና ተሓታቲ ኣይክኸውንን ኢዩ። </strong>.</li>'+
                  '<li><strong>ምዝገባ መጓዓዝያ ኣገልግሎት፣:</strong>ዝኾነ ሰብ ዘላቶ መጓዓዝያ ብምምዝጋብ ኣገልግሎት ክህብ ይኽእል ኢዩ።.</li>'+
                            '</ul>'+
                  '<li><strong>ምልጣፍ ጉዳያት</strong>:ዝኾነ ዓይነት ጉዳይ ምኽሪ ዝደሊ ይኹን ሓገዝ ዘድልዮ ተጠቃማይ ክልጥፍ ይኽእል ኢዩ።ገለ ክልጠፉ ዝኽእሉ ለጠፋት ካብ ጥዕናዊ ምኽርታት ክሳብ ጽገና ንብረታት ዛመሰሉ ወይ ናይ ቤት ፍርዲ ጸገማት ኮታስ ኩሉ ማሕበራዊ ጸገማት ኣብዚ ክልጠፉ ይኽእሉ ኢዮም ባኣና ወገን ከኣ ዝልምከት ኣካል ወይ በዓል ሞያ ናይቲ ጉዳይ ብምርኻብ ሽግርኩም ወይ ጉዳይኩም ኣብ ምፍታሕ ኣገልግሎትና ዉፉይ ኢዩ።. </li>'+
                  '</ul>',
            registerItem:'መዝግብ',
            previousProfilePic:'ኣብዚ ሒጂ ግዜ ዘሎ ናይ ገጽ ስእል',
            dailyLifeHappeningsRegistrations:'መመዝገቢ መዓልታዊ ተመኹሮታት ኣጋጣሚታት ዝርርባትን ከም መዓልታዊ ዜና፣ታሪኻት፣ትምህርታት',
            activationStatusAlert:'ኣባልነትኩም ንምርግጋጽ ኣብ ኢመይልኩም ኬድኩም ኣብቲ ካብ ኣገልግሎትና ዝተሰደ መልእኽቲ ብምኽፋት ኣብ መጠወቒ መልጎም ብምህራም ኣባልነትኩም ከምዝሰርሕ ግበሩ።',
                     homePageAfterLogin:'ለጠፍ-ውዕውዕ',
                     employeeAndEmployer:'ስራሕ' ,
                      dailyLifeHappenings:'ዜናን ኣገልግሎትን',
                       thingsToSale:'ዝሽየጡ ነገራት',
                        notifications:'ሓበሬታ-ምልክታ',
                         chatRoom:'ዝርርብ',
                          issuesAndSuggestions:'ጉዳያትን ኣፈታትሖኦምን',
                           userSettings:'መዐረዩ ሓበሬታና',
                            jobSearch:'ስራሕ ምድላይ',
                            searchCandidate:'ሰራሕተኛ ምድላይ',
                            jobPosts:'ስራሕ ምልጣፍ',
             issuePost:'ጉዳያት ምልጣፍ',
             journey:'ናይ ጉዕዞ ኣገልግሎታት',
             getNews:'ኣገልግሎት ትምህርትን ዜናን',
             backToWorkTransactions:'ናብ ቦታ ስራሕ ተመለስ',
             acceptTheRequest:'ሕራይ ተቐበልክኹም',
             yourfriends:'ምሳይ ርክብ ዘለዎም የዕሩኽ መሓዛ',
             remarks:'ተወሳኺ ሓበሬታ',
              messageNotifications:'መልእኽትታት',
             notificationsAtNofication:'ሓበሬታታት',
             connectedPeopleWithU:'ኣዕሩኸ መሓዙ ምሳኹም ርክብ ጌሮም ዘለዉ',
             friendRequestAtNotification:'ን ምሕዝነታዊ ርክብ ዝሓተቱ',
             transportAndTravelSchedules:'መጓዓዝያን ውጥን ጉዕዞን',
             getMyPosts:'ብኣይ ዝተለጠፉ ለጠፋት',
             goToMyItemsList:'ብ ዘመዝገብኩዎም ዝሽየጡ ነገራት ዝርዝር' ,
             backToItemRegistration:'ናብ መመዝገቢ ተመለስ' ,
              SoldItemId:'ቁጽሪ ንብረት',
            itemName:'ስም ንብረት',
            numberOfItemsSold:'ብዝሒ ዝተሸጠ ንብረት',
            totalNumberOfItemsLeft:'ኣብ መኽዘን ተሪፉ ዘሎ ብዝሒ ንብረት',
            totalPriceAmount:'ብዝሒ ገንዘብ',
            boughtDate:'ዝተሸጠሉ ዕለት',
            sellId:'ቁጽሪ መሸጣ',
            numberOfItemsBought:'ብዝሒ ዝተገዝኡ ንብረት',
             itemsThatHasRegisteredByUser:'ን መሸጣ ዘመዝገብኩዎም',
            itemsThatHasBeenSold:'ዝተሸጡ',
            buttonGetSoldItems:'ዝተሸጡ ኣቕርብ',
            customersBoughtItems:'ዓማዊል ንብረተይ ዝገዝኡ',
            buttonGetCustomersWhoBoughtItem:'ንብረት ዝገዝኡ ዓማዊል ኣቕርብ',
            buyDate:'ዝተሸጠሉ ዕለት',
            itemForSellRegistrationDate:'ዝተመዝገበሉ ዕለት',
            blockFriend:'ምሕዝነት ዕጾ',
            loadCountry:'ሃገራት ጸዓንወን',
            loadCities:'ከተማታት ናይዛ ዝመረጽኩማ ሃገር ጸዓኑ',
            backToLogin:'ናብ ናይ ምእተዊ ገጽ ተመለስ' ,
            backToPosts:'ናብ ለጠፋት ተመለስ',
            toPost:'ዝልጠፍ',
            vehiclePicture:'ስእሊ ናይ መጓዓዝያ',
            cropedVehiclePicture:'ናይ መወዳእታ ስእሊ ናይ መጓዓዝያ',
            uploadVehicleImage:'ስእሊ መጓዓዝያ የሕልፍ',
            previousImageOfVehicle:'ናይ ቅድም ዝነበር ስእሊ',
            backToTransportImage:'ተመለስ' ,
             registerAsEmployerIf:"ከም ደላዪ ስራሕ ክትምዝገብ ምስትደሊ:<br>" +
                                   "- ስራሕ ክትሰርሕ ምስደሊ<br>" +
                                   "- ሞያ ምስ ዝህልወካ<br>" +
                                   "- ሞያ ምስ ዘይህልወኩም ግን ንዝኾነ ስራሕ ዱሉው ምስ ትህሉ ...",
            registeringAsEmployeeIf:"ከም ኣስራሓይ ክትምዝበብ ምስትደሊ ገለ ካብዚኦም ከተማልእ ኣለካ።<br>" +
                                       "በዓል ሞያ ተናዲ ተሊኻ ወይ በዓል ጉልበት ንስራሕካ ክሰርሑ ዝኽእሉ ተናዲ ምስትህሉ<br><br>" +
                                       "ተወሳኺ መብርሂ <br>" +
                                       "ከም በዓል ስራሕ ክትምዝገብ ከለኻ ዘለካ ስራሕ ከተመዝግቦ ኣለካ።እንታይ ዓይነት ሞያ ዘለዎ ሰብ ተናዲ ከምዘለኻ ውን ክፍለጥ ኣለዎ።",
search:'ድለ',
newsPicture:'ስእሊ/ቪድዮ ናይ ዜና/ታሪኽ/ትምህርታዊ ኣገልግሎት' ,
                    cropedNewsPicture:'ስእሊ ከምዚ ከምስል ኢዩ',
                    uploadNewsImage:'ስእሊ ጸዓን',
                     backToSearchProfessionalsPage:'ናብ መድለዩ ሰራሕተኛታት ፎርም ተመለስ',
                    goBackToJobSearch:'ናብ ናይ ስራሕ ፎርም መድለዩ መምልኢ ተመለስ',
                    Welcome:'እንቋዕ ደሓን መጻኹም ናብ ' ,
                    yourhelplab:'ምትሕግጋዝ',
                    numberOfReplies:'ነዛ ርኢቶ ዚኣ ዝመለሱ',
                    searchClientAtYourArea:'ስርሕ ዘለዎም ኣብ ከባቢኻ',
                    searchProfessionalAtYourArea:'ስራሕ ዝደልዩ ኣብ ከባቢኻ'
                                      
          });
          $translateProvider.preferredLanguage('EN');
    });
/* chat Services */
        myApp.factory('socket', function ($rootScope) {
          var socket = io.connect();
          return {
            on: function (eventName, callback) {
              socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                  callback.apply(socket, args);
                });
              });
            },
            emit: function (eventName, data, callback) {
              socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                  if (callback){
                    callback.apply(socket, args);
                  }
                });
              })
            }
          };
        });
//scroll scroll bar to bottom when sending a message
    myApp.directive('chatbox1ScrollBottom', function($timeout) {
        return {
            restrict : 'EA',
            link : function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#chatbox1').scrollTop($('#chatbox1')[0].scrollHeight + 150);
                    });
                }
              }
        }
    });
    myApp.directive('sellChatboxScrollBottom', function($timeout) {
      return {
          restrict : 'EA',
          link : function(scope, element, attr) {
              if (scope.$last === true) {
                  $timeout(function() {
                      $('#chatbox1').scrollTop($('#chatbox1')[0].scrollHeight + 150);
                  });
              }
            }
      }
  });
     myApp.directive('chatbox2ScrollBottom', function($timeout) {
        return {
            restrict : 'EA',
            link : function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#chatbox2').scrollTop($('#chatbox2')[0].scrollHeight + 150);
                    });
                }
              }
        }
    });
      myApp.directive('commentBoxScrollBottom', function($timeout) {
        return {
            restrict : 'EA',
            link : function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        $('#commentDivId').scrollTop($('#commentDivId')[0].scrollHeight + 150);
                    });
                }
              }
        }
    });

//scroll to bottom directive
   myApp.directive('onScrollToBottom', function ($document) {
        //This function will fire an event when the container/document is scrolled to the bottom of the page
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var doc = angular.element($document)[0].body;
                $document.bind("scroll", function () {
                    if (doc.scrollTop + doc.offsetHeight >= doc.scrollHeight) {
                        //run the event that was passed through
                        scope.$apply(attrs.onScrollToBottom);
                    }
                });
            }
        };
    });
//on enter
   myApp.directive('onEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.onEnter);
                });
                event.preventDefault();
            }
        });
    };
});
//login controller
    myApp.controller('logincontroller',function($scope,$rootScope,amMoment, $state,$http,$window,srvShareData, $location,alertService,$translate,countryRetriever,cityRetriever,professionRetriever){
           $scope.languageKey=$translate.use()
           $scope.changeLanguage = function (langKey){
                  if(langKey=='TG'){
                    amMoment.changeLocale('tg');
                  }else if(langKey=='NL'){
                    amMoment.changeLocale('nl');
                  }else{
                    amMoment.changeLocale('en');
                  }
                $translate.use(langKey);
               $scope.languageKey=$translate.use();
              };
        // $scope.languageKey=null
          $scope.registerButtonDisabled=true;
             $scope.cityToSelection = function(suggestion){
               $scope.selectedToCity=suggestion
             }
             $scope.fillToCityAtOwnerRegistration=function(){
                var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.toCityAtOwnerRegistration);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }
             $scope.loadCountries=function(){
              $http.get('/loadCountries').then(function(response){
                $scope.countries=response.data
              })
             }
             $scope.chooseCountryAtRegistration=function(Id,country){
                   $scope.countryIdAtRegistration=Id;
                   $scope.countryNameAtRegistration=country;
             }
             $scope.loadCities=function(){
              if($scope.countryNameAtRegistration==undefined){
                  $scope.unfilledFields="select country"
              }else{
                $scope.unfilledFields="";
                 $scope.cities="";
                $http.get('/loadCities/'+$scope.countryIdAtRegistration).then(function(response){
                  $scope.cities=response.data
                })
              }

             }
             $scope.chooseCityAtRegistration=function(id,city){
                  $scope.selectedCityIdAtRegistration=id;
                  $scope.selectedCityNameAtRegistration=city;
             }
          $scope.checkedTrue=function(){
            if($scope.agreementOkChecked==true){
              $scope.registerButtonDisabled=false;
            }else{
             $scope.registerButtonDisabled=true;
            }
          }
           
            $scope.username="";
            $scope.password="";
            $scope.dataToShare = [];
              $scope.fillCountry = function(){
                var data=null
                  var dataPromise = countryRetriever.getCountry($scope.country);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.countryDatas = data;
                   });
               }
               $scope.fillCity = function(){
                   var data=null
                   if($scope.country==null){
                     alert("enter country first")
                   }else if($scope.selectedCountry==undefined){

                   }else{
                     var dataPromise = cityRetriever.getCity($scope.city,$scope.selectedCountry);
                       $scope.datas=null;
                       dataPromise.then(function(data){
                       $scope.cityDatas = data;
                      });
                   }
                }
                $scope.fillCityAtRegistration = function(){
                    var data=null
                   if($scope.countrySelectionAtRegistration==undefined){
                      alert("select country")
                    }else{
                      var dataPromise = cityRetriever.getCity($scope.city,$scope.countryDatas);
                        $scope.datas=null;
                        dataPromise.then(function(data){
                        $scope.cityDatas = data;
                       });
                    }
                 }
                $scope.fillProfession = function(){
                  $scope.languageKey=$translate.use();
                    var data=null
                    var dataPromise = professionRetriever.getProfession($scope.profession,$scope.languageKey);
                      $scope.datas=null;
                      dataPromise.then(function(data){
                      $scope.professionDatas = data;
                     });
                 }
               $scope.countrySelection = function(suggestion){
                 $scope.selectedCountry=suggestion
               }
               $scope.citySelection = function(suggestion){
                 $scope.selectedCity=suggestion
                 var searchCriteria={}
                 searchCriteria.profession=$scope.selectedProfession;
                 searchCriteria.country=$scope.selectedCountry;
                 searchCriteria.livesIn=$scope.selectedCity;
                 searchCriteria.languageKey=$scope.languageKey;
                 if($scope.selectedProfession==null){
                   jobAlertLanguage();
                 }else if($scope.selectedCountry==null){
                   jobAlertLanguage();
                 }else if($scope.selectedCity==null){
                   jobAlertLanguage();
                 }else{
                   $http.post('/insertExternalData',searchCriteria).then(function(response){
                    $scope.disableSearch=false;
                   })
                 }
               }
               $scope.professionSelection = function(suggestion){
                 $scope.selectedProfession=suggestion
               }
               $scope.forgetPasswordForm=function(){
                 $scope.forgetPassword=!$scope.forgetPassword;
                 $scope.LoginBox=!$scope.LoginBox;
               }
               $scope.backToLogin=function(){
                 $scope.forgetPassword=!$scope.forgetPassword;
                 $scope.LoginBox=!$scope.LoginBox;
               }
               $scope.checkUserInDatabase=function(){
                 var userinfo={}
                 userinfo.email=$scope.email;
                 if($scope.languageKey==undefined){
                  userinfo.languageKey='EN'
                 }else{
                  userinfo.languageKey=$scope.languageKey
                 }
                 if($scope.email==undefined){
                  if($scope.languageKey=='TG'){
                   $scope.noSuchUser="ኢመይል የእትዉ........."
                  }else{
                    $scope.noSuchUser="Enter email........."
                  }
                 }else{
                     $http.post('/getUserInfoForForgetpassword',userinfo).then(function(response){
                       $scope.userInfoResults=response.data;
                       if($scope.userInfoResults=='nouser'){
                         if($scope.languageKey=='EN'){
                           $scope.noSuchUser="No such email.";
                         }else if($scope.languageKey=='TG'){
                           $scope.noSuchUser="በዚ ኢመይል ዚ ዝተመዝገበ ተጠቓማይ የለን።";
                         }else if($scope.languageKey=='NL'){
                           $scope.noSuchUser="geen dergelijke e-mail";
                         }else{
                           $scope.noSuchUser="No such email.";
                         }
                       }else if($scope.userInfoResults=='Error'){
                          if($scope.languageKey=='TG'){
                           $scope.noSuchUser="ይቕረታ ገለ ጌጋ ተፈጢሩ ኣሎ።ኢመይል ብ ግቡእ ኣይተሰደን።";
                         }else if($scope.languageKey=='NL'){
                           $scope.noSuchUser="Er is een fout opgetreden, er is geen e-mail verzonden";
                         }else{
                          $scope.noSuchUser="There is error,no mail sent";
                         }
                       }else{
                         if($scope.languageKey=='EN'){
                           $scope.noSuchUser="Reset password has been send to this email.Open your email then reset your password";
                         }else if($scope.languageKey=='TG'){
                           $scope.noSuchUser="መቐየሪ ቃላ ምስጢር ናብ ኢመይልኩም ናብዚ ኢመይል ሰዲድና ኣለና።ኢመይልኩም ብምኽፋት ቃለምስጢርኩም ቀይሩ።";
                         }else if($scope.languageKey=='NL'){
                           $scope.noSuchUser="Het wachtwoord opnieuw instellen is verzonden naar deze e-mail. Open uw e-mail en reset uw wachtwoord";
                         }else{
                           $scope.noSuchUser="Reset password has been send to this email.Open your email then reset your password";
                         }
                       }
                     })
                  }
               }

            //send contact message
            function errorsOnContactFields(){
              if($scope.languageKey=='TG'){
               if($scope.name==null){
                  $scope.errorMessage="ስም ምልኡ"
                }else if($scope.email==null){
                   $scope.errorMessage="ኢመይል የእትዉ";
                }else if($scope.tele==null){
                    $scope.errorMessage="ተለፎንኩም የእትዉ";
                }else if($scope.message==null){
                  $scope.errorMessage="መልእኽቲ ጸሓፉ";
                }else{
                  $scope.errorMessage="NoErrors"
                }
              }else if($scope.languageKey=='NL'){
                if($scope.name==null){
                $scope.errorMessage="Vul uw naam in"
                }else if($scope.email==null){
                   $scope.errorMessage="Vul uw email in";
                }else if($scope.tele==null){
                    $scope.errorMessage="Voer je telefoonnummer in";
                }else if($scope.message==null){
                  $scope.errorMessage="Schrijf een bericht";
                }else{
                  $scope.errorMessage="NoErrors"
                }
              }else{
                if($scope.name==null){
                  $scope.errorMessage="Enter your name"
                }else if($scope.email==null){
                   $scope.errorMessage="Enter your email";
                }else if($scope.tele==null){
                    $scope.errorMessage="Enter your telephone number";
                }else if($scope.message==null){
                  $scope.errorMessage="Write a message";
                }else{
                  $scope.errorMessage="NoErrors"
                }
              }
            }

            $scope.send=function(){
                 errorsOnContactFields();
                  var data={}
                  data.name=$scope.name;
                  data.email=$scope.email;
                  data.tele=$scope.tele;
                  data.message=$scope.message;
                  if($scope.errorMessage=="NoErrors"){
                       $http.post('/contactus',data).then(function(response){
                         $scope.sendSuccess=response.data
                         $scope.errorMessage="";

                      })
                        $scope.name=null
                        $scope.email=null
                        $scope.tele=null
                        $scope.message=null
                     }

            }
             $scope.toggle_register = function() {
                  $scope.RegisterBox = !$scope.RegisterBox
                 $scope.LoginBox = !$scope.LoginBox;
              };
              $scope.toggle_searchJob=function(){
                 $scope.candidate=false;
                 $scope.HomePageContent=true;
                 $scope.searchBox=true;
              }
              $scope.toggle_homePage=function(){
                 $scope.candidate=false;
                 $scope.HomePageContent=false;
                 $scope.searchBox=false;
              }
              $scope.goBackToJobSearch=function(){
                 $scope.jobsResult=!$scope.jobsResult;
                 $scope.searchBox=!$scope.searchBox;
              }
            $scope.searchAjob=function(){
                 var searchCriteria={}
                 searchCriteria.profession=$scope.selectedProfession;
                 searchCriteria.country=$scope.countryNameAtRegistration;
                 searchCriteria.livesIn=$scope.selectedCityNameAtRegistration;
                 searchCriteria.languageKey=$translate.use();
                 if($scope.selectedProfession==null){
                   jobAlertLanguage();
                 }else if($scope.countryNameAtRegistration==null){
                   jobAlertLanguage();
                 }else if($scope.selectedCityNameAtRegistration==null){
                   jobAlertLanguage();
                 }else{

                   $http.post('/getjob',searchCriteria).then(function(response){
                   // alert("hello")
                     if(response.data.length==0){
                     noResults();
                     $scope.notFound=true;
                     $scope.searchedData=""
                     $scope.searchedDataFromExternal="";
                     }else{
                        $scope.noResult=""
                        $scope.searchedData=response.data
                        $scope.jobsResult=!$scope.jobsResult;
                        $scope.searchBox=!$scope.searchBox;
                     }
                     $scope.isLoading=false;
                   })
                 }
            }
            $scope.getExternalWorkInfo=function(){
              var searchCriteria={}
              searchCriteria.profession=$scope.selectedProfession;
              searchCriteria.country=$scope.countryNameAtRegistration;
              searchCriteria.livesIn=$scope.selectedCityNameAtRegistration;
              searchCriteria.languageKey=$scope.languageKey;
              $http.post('/getExternalWorks',searchCriteria).then(function(response){
                if(response.data.length==0){
                   noResults()
                   $scope.searchedDataFromExternal=""
                }else{
                    $scope.searchedDataFromExternal=response.data
                    $scope.noResult=""
                }
              })
            }
            function noResults(){
              if($scope.languageKey=='TG'){
                $scope.noResult="ውጽኢት የለን።ብ ካልእ ከተማ ፈትኑ።ንዝያዳ ኣገልግሎት ተመዝገቡ ።ምምዝጋብ ምጥቃምን ብነጻ ኢዩ።";
              }else if($scope.languageKey=='NL'){
                $scope.noResult="Geen resultaten bedankt voor uw bezoek.";
              }else{
                $scope.noResult="No results thank you for visiting us.";
              }
            }
            $scope.professionalMotivation=function(id){
              $scope.professionalList=!$scope.professionalList;
              $scope.showWorkDetailsOfProfessional=!$scope.showWorkDetailsOfProfessional;
              var professionalData={}
              professionalData.id=id;
              professionalData.languageKey=$scope.languageKey
              $http.post('/getProfessionalMotivation',professionalData).then(function(response){
                $scope.motivation=response.data[0].remarks
                $scope.motivationFromProfessionName=response.data[0].name
              })
            }
            $scope.backToProfessionalsList=function(){
              $scope.professionalList=!$scope.professionalList;
            }
            $scope.backToClientsList=function(){
               $scope.showWorkDetails=!$scope.showWorkDetails
            }
            $scope.getWorkDetails=function(id){
              $scope.workDetails="";
                var clientInfo={};
                clientInfo.id=id;
                clientInfo.languageKey=$scope.languageKey;
                $http.post('/getClientWorkDetails',clientInfo).then(function(response){
                  $scope.workDetails=response.data[0].workDetails;
                  $scope.workDetailsClientName=response.data[0].name;
                })
            }
            $scope.getWorkDetailsFromExternal=function(id,linkId,websiteLink){
              if($scope.languageKey=='TG'){
                $scope.workDetailsClientName=""
                $scope.workDetails="ተወሳኺ ሓበሬታ ምስ ትደልዩ ምምዝጋብ ከድልየኩም ኢዩ።ምስትምዝገቡ ብዙሕ ጥቅምታት ክትረኽቡ ትኽእሉ ኢኹም።"
              }else if($scope.languageKey=='NL'){
                 $scope.workDetailsClientName=""
                 $scope.workDetails="als u meer wilt weten, kunt u zich bij ons registreren. We hebben veel leuke dingen"
              }else{
                 $scope.workDetailsClientName=""
                 $scope.workDetails="if you need details please register with us.We have alot of funs"
              }
            }
            $scope.getNews=function(){
               $scope.showNews=!$scope.showNews
                var getNewsListdata={}
                    getNewsListdata.webCollectionId='news'
                    alertService.getWebCollections(getNewsListdata).then(function(response){
                        $scope.newsItems=response.data
                    })
            }
            $scope.getNewsData=function(){
                  var data={}
                data.historyType=$scope.newsList.Id
                    $http.post('/jobFinder/allNewsAtHomePage',data).then(function(response){
                    $scope.allNewsInfo=response.data
                  })
            }
           $scope.saleThings=function(){
            $scope.showsalethings=!$scope.showsalethings
           }
            $scope.getItemForSale=function(){
               $http.post('/jobFinder/postThingsForSaleOnHomePage').then(function(response){
                 $scope.postedItemsForSaleAtHomePage=response.data
               })
            }
            $scope.findCandidate=function(){
              $scope.HomePageContent=true;
              $scope.candidate=true;
              $scope.searchBox=false;
            }
        function jobAlertLanguage(){
          $scope.languageKey=$translate.use();
          if($scope.languageKey=='TG'){
            if($scope.selectedProfession==null){
              $scope.unfilledField="ሞያ ምረጹ"
            }else if($scope.countryNameAtRegistration==null){
              $scope.unfilledField="ሃገር ምረጹ"
            }else if($scope.selectedCityNameAtRegistration==null){
              $scope.unfilledField="ከተማ ምረጹ"
            }
          }else if($scope.languageKey=='NL'){
            if($scope.selectedProfession==null){
              $scope.unfilledField="kiez beroep"
            }else if($scope.countryNameAtRegistration==null){
             $scope.unfilledField="kiez land"
            }else if($scope.selectedCityNameAtRegistration==null){
             $scope.unfilledField="kiez stad"
            }
          }else {
            if($scope.selectedProfession==null){
              $scope.unfilledField="please select profession"
            }else if($scope.countryNameAtRegistration==null){
              $scope.unfilledField="select country"
            }else if($scope.selectedCityNameAtRegistration==null){
              $scope.unfilledField="select city"
            }
          }
        }
        $scope.backToSearchProfessionalsPage=function(){
          $scope.professionalsSearchResults=!$scope.professionalsSearchResults;
          $scope.candidate=!$scope.candidate;
        }
            $scope.searchAprofessional=function(){
              //alert($scope.languageKey)
                   var data={};
                     data.profession=$scope.selectedProfession;
                     data.country=$scope.countryNameAtRegistration;
                     data.livesIn=$scope.selectedCityNameAtRegistration;
                     data.languageKey=$translate.use()
                     if($scope.selectedProfession==null){
                       jobAlertLanguage()
                     }else if($scope.countryNameAtRegistration==null){
                       jobAlertLanguage();
                     }else if($scope.selectedCityNameAtRegistration==null){
                       jobAlertLanguage();
                     }else{
                       $http.post('/listOfprofessionalsAccordingUserCriteriaAtHomePage',data).then(function(response){
                         if (response.data.length==0) {
                          noResults();
                          $scope.listOfAllWorkers="";
                         }else {
                           $scope.noResult=""
                           $scope.listOfAllWorkers=response.data;
                           $scope.professionalsSearchResults=!$scope.professionalsSearchResults;
                           $scope.candidate=!$scope.candidate;
                         }
                       })
                       $scope.isLoading=true;
                     }

            }

            $scope.toggle_login = function() {
                $scope.LoginBox = !$scope.LoginBox;
                $scope.RegisterBox = !$scope.RegisterBox
            };

              function getUserGender(){
                   var genderInfo={}
                    genderInfo.webCollectionId='gen';
                    genderInfo.languageKey=$scope.languageKey;
                    alertService.getWebCollections(genderInfo).then(function(response){
                        $scope.userGenderModel=response.data;
                    })
              }
              getUserGender();
              $scope.changeGender=function(id,genderName){
                $scope.selectedGender=genderName;
              }
            $scope.submitLogin=function(){
                var loginInfo={
                  username:$scope.username,
                  password:$scope.password
                }
              alertService.login(loginInfo).then(function(response){
                    var logedIn=response.data.logedIn
                    if(logedIn==true){
                          $scope.Authenticate=response.data.result.userId;
                          var userId=response.data.result.userId
                          var userFullName=response.data.result.userFullName
                          var photo=response.data.result.photo;
                          var clientId=response.data.result.clientId
                          var professionalId=response.data.result.professionalId
                          var token=response.data.result.userId
                          var permission=response.data.result.permission
                          var results=[];
                          if($scope.languageKey==undefined){
                            var selectedLanguageKey=response.data.result.languageKey;
                          }else{
                            var selectedLanguageKey=$scope.languageKey;
                          }
                          var country=response.data.result.country;
                          var livesIn=response.data.result.livesIn;
                          var activate=response.data.result.activate;
                          if(activate==null){
                             if(selectedLanguageKey=='TG'){
                               $scope.accountActivationAlert=true;
                               $scope.signUpAlert=false;
                             }else if(selectedLanguageKey=='NL'){
                              $scope.accountActivationAlert=true;
                              $scope.signUpAlert=false;
                             }else{
                               $scope.accountActivationAlert=true;
                               $scope.signUpAlert=false;
                             }
                          }else{
                              $scope.languageKey=response.data.result.languageKey
                              results.push(userId,userFullName,photo,clientId,professionalId,token,permission,selectedLanguageKey,country,livesIn)
                              $scope.dataToShare=results
                              srvShareData.addData(results)
                              var data={};
                              data.username=$scope.username;
                              data.password=$scope.password;
                              var directory=""
                             $state.go('posts',{userId:userId})
                             $rootScope.userId=userId;
                          }

                    }else{
                        $scope.LoginAlert=true;
                        $scope.accountActivationAlert=false;
                    }
              })
            }
            function age() {
                var todayDate =$scope.userBirthDate;
                    var birthDateYear = todayDate.getFullYear();
                    var todayMonth = todayDate.getMonth();
                    var todayDay = todayDate.getDate();
                    var today=new Date()
                    var todayYear=today.getFullYear();
                    var myage = todayYear-birthDateYear;
                    if(myage<15){
                      alert("you are under age")
                    }else{
                      alert("you are over age")
                    }
            };
          function registrationFieldsChecker(){
                if ($scope.languageKey=='TG'){
                    $scope.fieldChecker="";
                  if ($scope.name==undefined){
                    $scope.unfilledFields="ስም የእትዉ";
                    $scope.fieldChecker="no filled";
                  }else if ($scope.username===undefined){
                  $scope.unfilledFields="መጠቀሚ ስም የእትዉ";
                    $scope.fieldChecker="no filled";
                  }else if ($scope.email==undefined){
                      $scope.unfilledFields="ኢመይልኩም የእትዉ"
                      $scope.fieldChecker="no filled";
                  }else if ($scope.password==undefined){
                    $scope.unfilledFields="ቃለ ምስጢር የእትዉ"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.password!=$scope.password2){
                    $scope.unfilledFields="ዘእተኹሞ ቃለ ምስጢር ምስ ካልኣይ ግዜ ዘእተኹሞ ቃለ ምስጢር ሓደ እይኮነን"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.userBirthDate==undefined){
                     $scope.unfilledFields="ዕለተ ልደት የእትዉ";
                     $scope.fieldChecker="no filled";
                  }else if ($scope.userGender===undefined){
                  $scope.unfilledFields="ጾታ ምረጹ";
                    $scope.fieldChecker="no filled";
                   }else if ($scope.selectedCountryOnRegistration ===undefined){
                    $scope.unfilledFields="ትነብሩሉ ሃገር ምረጹ"
                    $scope.fieldChecker="no filled";

                  }else if ($scope.notStatedHere==true){
                      if($scope.city===undefined){
                      $scope.unfilledFields="ትነብሩሉ ዓዲ ወይ ከተማ የእትዉ"
                        $scope.fieldChecker="not filled";
                      }
                  }else if ($scope.notStatedHere==false || $scope.notStatedHere==undefined){
                     if ($scope.selectedCityOnRegistration==undefined){
                       $scope.unfilledFields="ትነብሩሉ ከተማ ምረጹ"
                       $scope.fieldChecker="not filled";
                     }
                  }else{
                    $scope.fieldChecker="allFieldsAreFilled";
                  }
                }else if ($scope.languageKey=='NL'){
                    $scope.fieldChecker="";
                  if ($scope.name==undefined){
                    $scope.unfilledFields="Voer naam in";
                    $scope.fieldChecker="no filled";
                  }else if ($scope.username===undefined){
                    $scope.unfilledFields="Vul je gebruikersnaam in";
                    $scope.fieldChecker="no filled";
                  }else if ($scope.email==undefined){
                      $scope.unfilledFields="Voer email in"
                      $scope.fieldChecker="no filled";
                  }else if ($scope.password==undefined){
                  $scope.unfilledFields="voer wachtwoord in"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.password!=$scope.password2){
                    $scope.unfilledFields="Wachtwoord komt niet overeen"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.userBirthDate==undefined){
                    $scope.unfilledFields="voer geboortedag in";
                     $scope.fieldChecker="no filled";
                  }else if ($scope.userGender===undefined){
                  $scope.unfilledFields="selecteer geslacht";
                    $scope.fieldChecker="no filled";
                   }else if ($scope.selectedCountryOnRegistration ===undefined){
                    $scope.unfilledFields="selecteer land"
                    $scope.fieldChecker="no filled";

                  }else if ($scope.notStatedHere==true){
                      if($scope.city===undefined){
                        $scope.unfilledFields="Schrijf een stadsnaam, stad waar je woont"
                        $scope.fieldChecker="not filled";
                      }
                  }else if ($scope.notStatedHere==false || $scope.notStatedHere==undefined){
                     if ($scope.selectedCityOnRegistration==undefined){
                       $scope.unfilledFields="Voer een plaatsnaam in, stad waar je woont"
                       $scope.fieldChecker="not filled";
                     }
                  }else{
                    $scope.fieldChecker="allFieldsAreFilled";
                  }
                }else{
                   $scope.fieldChecker="";
                  if ($scope.name==undefined){
                  $scope.unfilledFields="Enter name";
                    $scope.fieldChecker="no filled";
                  }else if ($scope.username===undefined){
                    $scope.unfilledFields="Enter user name"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.email==undefined){
                      $scope.unfilledFields="Enter email"
                      $scope.fieldChecker="no filled";
                  }else if ($scope.password==undefined){
                    $scope.unfilledFields="enter password"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.password!=$scope.password2){
                  $scope.unfilledFields="Password mismatch"
                    $scope.fieldChecker="no filled";
                  }else if ($scope.userBirthDate==undefined){
                     $scope.unfilledFields="enter birth day";
                     $scope.fieldChecker="no filled";
                  }else if ($scope.userGender===undefined){
                  $scope.unfilledFields="select gender";
                    $scope.fieldChecker="no filled";
                  }else if ($scope.countryNameAtRegistration ===undefined){
                    $scope.unfilledFields="select a country"
                    $scope.fieldChecker="no filled";

                  }else if ($scope.notStatedHere==true){
                      if($scope.city===undefined){
                        $scope.unfilledFields="Write a city name,city where you live in"
                        $scope.fieldChecker="not filled";
                      }
                  }else if ($scope.notStatedHere==false || $scope.notStatedHere==undefined){
                     if ($scope.selectedCityNameAtRegistration==undefined){
                      $scope.unfilledFields="Enter a city name,city where you live in"
                       $scope.fieldChecker="not filled";
                     }
                  }else{
                    $scope.fieldChecker="allFieldsAreFilled";
                  }
                }
            }
             //register the user
            $scope.register=function(){
                    registrationFieldsChecker();
                    var todayDate =$scope.userBirthDate;
                    var birthDateYear = todayDate.getFullYear();
                    var todayMonth = todayDate.getMonth();
                    var todayDay = todayDate.getDate();
                    var today=new Date()
                    var todayYear=today.getFullYear();
                    var myage = todayYear-birthDateYear;
                    if(myage<18){
                        if($scope.languageKey=='TG'){
                           alert("ይቅረታ ዕድመኹም ትሕቲ 18 ዓመት ስለዘሎ ንክትምዝገቡ ኣይፍቀደኩምን ኢዩ።")
                        }else{
                          alert("Sorry! You are not allowed because your age is less than 18 years old")
                        }
                    }else{
                      var userRegistration={}
                      userRegistration.name=$scope.name;
                      userRegistration.username=$scope.username;
                      userRegistration.email=$scope.email;
                      userRegistration.password=$scope.password;
                      userRegistration.password2=$scope.password2;
                      userRegistration.languageModel=$scope.languageModel;
                      userRegistration.birthDate=$scope.userBirthDate;
                      userRegistration.gender=$scope.userGender.Id;
                      userRegistration.selectedGender=$scope.selectedGender;
                      userRegistration.country=$scope.countryNameAtRegistration;
                      if($scope.languageKey==undefined){
                        userRegistration.languageKey='EN'
                      }else{
                         userRegistration.languageKey=$scope.languageKey
                      }
                    //  userRegistration.photo=$scope.photo;
                      if($scope.notStatedHere==true){
                        userRegistration.livesIn=$scope.city;
                      }else{
                        userRegistration.livesIn=$scope.selectedCityNameAtRegistration;
                      }
                            if($scope.fieldChecker===''){
                              $http.post('/jobFinder/register',userRegistration).then(function(response){
                                   $scope.userId=response.data
                                   $scope.signUpAlert=true;
                                   $scope.LoginBox = !$scope.LoginBox;
                                   $scope.RegisterBox = !$scope.RegisterBox;
                               })
                            }
                    }
            }
            $scope.citySelectionAtRegistration=function(){
              $scope.selectedCityOnRegistration=$scope.cityDatas;
            }
            $scope.countrySelectionAtRegistration=function(){
              $scope.selectedCountryOnRegistration=$scope.countryDatas
            }
            var languageId;
            $scope.english=function(){
             languageId=1;
             $scope.languageKey='EN'
            }
             $scope.dutch=function(){
              languageId=2;
              $scope.languageKey='NL'
            }
             $scope.tigrigna=function(){
              languageId=3;
              $scope.languageKey='TG'
            }
            function checkusername(userName){
               $scope.country="";
               $scope.city="";
               $http.post('/checkUserName/'+userName).then(function(response){
                if(response.data.length>0){
                  if($scope.languageKey=='TG'){
                       alert("እዚ መጠቀሚ ስም ተታሒዙ ኢዩ።ካልእ መጠቀሚ ስም የእትዉ።")
                      $scope.username=undefined;
                  }else if($scope.languageKey=='NL'){
                    alert("gebruikersnaam bestond al, probeer een andere")
                   $scope.username=undefined;
                  }else{
                    alert("username already existed,please try another")
                   $scope.username=undefined;
                  }

                }else{
                  document.getElementById("username").innerHTML="";
                }
               })
            }
            function checkuseremail(email){
               $http.post('/checkUserEmail/'+email).then(function(response){
                if(response.data.length>0){
                  if($scope.languageKey=='TG'){
                       alert("እዚ ኢመይል ዚ ቅድሚ ሕጂ ተመዝጊቡ ኢዩ።ካልእ ኢመይል የእትዉ።")
                      $scope.email=undefined;
                  }else if($scope.languageKey=='NL'){
                    alert("Email bestond al, probeer een andere")
                   $scope.email=undefined;
                  }else{
                    alert("Email already existed,please try another")
                   $scope.email=undefined;
                  }
                }
               })
            }
            $scope.checkUserName=function(){
                  checkusername($scope.username)
            }
            $scope.checkUserEmail=function(){
                checkuseremail($scope.email)
            }
    })

//user registration
   myApp.controller('userRegistrationController',function($scope,$http,$window,srvShareData,alertService,countryRetriever,cityRetriever){
             $scope.sharedData = srvShareData.getData();
             $scope.Authenticate=$scope.sharedDataUserName[5]
              $scope.photo=$scope.sharedDataUserName[2];
              $scope.userId=$scope.sharedDataUserName[0]
              $scope.toggle_userSetting = function() {
                  $scope.userSetting=!$scope.userSetting;
              };
              $scope.toggle_profilePicSetting = function() {
                  $scope.profilePic=!$scope.profilePic;
              };
               $scope.loadCountries=function(){
              $http.get('/loadCountries').then(function(response){
                $scope.countries=response.data
              })
             }
             $scope.chooseCountryAtRegistration=function(Id,country){
                   $scope.countryIdAtRegistration=Id;
                   $scope.countryNameAtRegistration=country;
             }
             $scope.loadCities=function(){
              if($scope.countryNameAtRegistration==undefined){
                  $scope.unfilledFields="select country"
              }else{
                $scope.unfilledFields="";
                 $scope.cities="";
                $http.get('/loadCities/'+$scope.countryIdAtRegistration).then(function(response){
                  $scope.cities=response.data
                })
              }

             }
             $scope.chooseCityAtRegistration=function(id,city){
                  $scope.selectedCityIdAtRegistration=id;
                  $scope.selectedCityNameAtRegistration=city;
             }
              $scope.toggle_userPosts=function(){
                  $scope.userPosts=!$scope.userPosts;
              }
              $scope.fillCountry = function(){
                var data=null
                  var dataPromise = countryRetriever.getCountry($scope.country);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.countryDatas = data;
                   });
               }
               $scope.countrySelection = function(suggestion){
                 $scope.selectedCountry=suggestion
               }
               $scope.fillCity = function(){
                   var data=null
                   if($scope.country==null){
                     alert("enter country first")
                   }else if($scope.selectedCountry==undefined){

                   }else{
                     var dataPromise = cityRetriever.getCity($scope.city,$scope.selectedCountry);
                       $scope.datas=null;
                       dataPromise.then(function(data){
                       $scope.cityDatas = data;
                      });
                   }
                }
                $scope.citySelection = function(suggestion){
                  $scope.selectedCity=suggestion

                }
        //load and crop user image profile and save it to database
            $scope.myImage='';
            $scope.myCroppedImage='';
            var handleFileSelect=function(evt) {
              var file=evt.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function (evt) {
                $scope.$apply(function($scope){
                  $scope.myImage=evt.target.result;
                });
              };
              reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
          //upload the croped image profile
            $scope.uploadCropedImage=function(){
                  var mimeString = $scope.myCroppedImage.split(',')[0].split(':')[1].split(';')[0];
                  // post the data part and decode it
                  var dataString = window.atob($scope.myCroppedImage.split(',')[1]);
                  var dataArray = [];
                  for(var i = 0; i < dataString.length; i++)
                  {
                    dataArray.push(dataString.charCodeAt(i));
                  }
                  var imageData = new Blob([new Uint8Array(dataArray)], {type: mimeString});
                  var fd = new FormData();
                  fd.append('file', imageData);
                 var info = {
                     userId:$scope.userId
                  };
                  fd.append('data', info.userId);
                 if(imageData.size==1371){
                    if($scope.languageKey=='TG'){
                      document.getElementById("reactionAlert").innerHTML="ስእሊ የእትዉ መጀመርያ።";
                    }else if($scope.languageKey=='NL'){
                      document.getElementById("reactionAlert").innerHTML="ስእሊ የእትዉ መጀመርያ።";
                    }else{
                      document.getElementById("reactionAlert").innerHTML="Choose picture first";
                    }
                 }else{
                  $http({
                    url: '/jobFinder/uploadUserProfile1',
                    method: 'POST',
                    data: fd,
                    transformRequest:angular.identity,
                    headers:{'Content-Type':undefined}
                  }).then(function(response){
                    document.getElementById("reactionAlert").innerHTML="Your profile image changed successfully";
                    postUserInfo()

                  }, function(response) {
                      $scope.error = response.statusText;
                  });
                 }
                 
            }
       //post user info
       function postUserInfo(){
        var data={}
        data.token=$scope.Authenticate;
         $http.post('/jobFinder/userSettings',data).then(function(response){
               $scope.userId=response.data[0].id
               $scope.name=response.data[0].name;
                $scope.username=response.data[0].username;
                $scope.email=response.data[0].email;
                $scope.userBirthDate=new Date(response.data[0].birthDate);
                $scope.userGender=response.data[0].gender;
                $scope.country=response.data[0].country;
                $scope.city=response.data[0].livesIn;
                $scope.photo=response.data[0].photo;
                $scope.userSettings={
                    userId:$scope.userId,
                    name:$scope.name,
                    username:$scope.username,
                    email:$scope.email,
                    password:$scope.password
                }
           })

       }
         postUserInfo()
           $scope.updateRegistration=function(){
                      var data={}
                      data.token=$scope.Authenticate;
                      data.name=$scope.name;
                      data.userBirthDate=$scope.userBirthDate;
                      data.country=$scope.countryNameAtRegistration;
                      data.livesIn=$scope.selectedCityNameAtRegistration;
                      if($scope.countryNameAtRegistration==undefined){
                        if($scope.languageKey=='TG'){
                         alert("ሃገር ምረጽ")
                        }else if($scope.languageKey=='NL'){
                           alert("Selecteer land")
                        }else{
                          alert("Select country")
                        }
                      }else if($scope.selectedCityNameAtRegistration==undefined){
                           if($scope.languageKey=='TG'){
                             alert("ከተማ ኣብቲ ዝመረጽኩሞ ሃገር እትርከብ ምረጽ")
                            }else if($scope.languageKey=='NL'){
                               alert("selecteer stad")
                            }else{
                              alert("Select city")
                            }
                      }else{
                        $http.post('/jobFinder/updateUserInfo',data).then(function(response){
                         alertService.handleRegistrationUpdates();
                            if($scope.languageKey=='TG'){
                             alert("ሓበሬታ ብትኽክል ተመሓዪሹ ኣሎ")
                            }else if($scope.languageKey=='NL'){
                               alert("Succesvol geüpdatet")
                            }else{
                              alert("Successfully updated")
                            }
                        });
                      }

           }
      })
//alertservice service
    myApp.factory('alertService', function($http,$q){
        return {
            login:function(data){
               return $http.post('/login',data);
            },
            getWebCollections:function(webCollectionId){
               return $http.post('/webCollection',webCollectionId)
            },
            postCommens:function(id){
                return $http.post('/jobFinder/postComment/'+id)
              },
            handelSaved:function(){
               document.getElementById("reactionAlert").innerHTML="Saved successfully";
            },
            handleUpdated:function(){
               document.getElementById("reactionAlert").innerHTML="successfully update";
            },
            handleLogin:function(){
              document.getElementById("reactionAlert").innerHTML="Wrong user name or password!If you have not yet registered please click register and then register its for free ";
            },
            handelFriendRequest:function(){
              document.getElementById("reactionAlert").innerHTML="Friend Request has been sent";
            },
            handelMessageSent:function(){
              document.getElementById("reactionAlert").innerHTML="Message has been sent";
            },
            handelWorkInvitation:function(){
              document.getElementById("reactionAlert").innerHTML="Work invitation has been sent";
            },
             handelFriendRequestTig:function(){
              document.getElementById("reactionAlert").innerHTML="ሕቶ ምሕዝነት ብግቡእ ተሰዲዱ ኣሎ።";
            },
            handelMessageSentTig:function(){
              document.getElementById("reactionAlert").innerHTML="መልእኽቲ ተሰዲዱ ኣሎ።";
            },
            handelWorkInvitatioTig:function(){
              document.getElementById("reactionAlert").innerHTML="ናይ ስራሕ ሕቶ ተሰዲዱ ኣሎ።";
            },
             handelSavedTig:function(){
              document.getElementById("reactionAlert").innerHTML="ተዓቒቡ ኣሎ";
            },
             handelUpdatedTig:function(){
              document.getElementById("reactionAlert").innerHTML="ተሓዲሱ ኣሎ";
            },
            handelClientRegistered:function(){
                    document.getElementById("reactionAlert").innerHTML="You registered as Client";
            },
            handelProfessionalRegistered:function(){
                 document.getElementById("reactionAlert").innerHTML="You registered as Professional";
            },
            handelNeitherClientNorProfessionalRegistered:function(){
              document.getElementById("reactionAlert").innerHTML="you are not yet registered as Client or Professional";
            },
            handleRegistrationUpdates:function(){
               document.getElementById("reactionAlert").innerHTML="Updated Successfully";
            },
            handelRepliedMessage:function(){
               document.getElementById("reactionAlert").innerHTML="Replied sent";
            },
            handelDelete:function(){
              document.getElementById("reactionAlert").innerHTML="deleted successfully";
            },
            handelAllCities:function(data){
               return $http.post('/jobFinder/cities',data)
            },
             loadAllClients:function(data){
               return $http.post('/jobFinder/postAllclients',data)
             },
             loadClientsAccordingUserCriteria:function(data){
                return $http.post('/jobFinder/postAllclientsAccordingUserCriteria',data)
             },
             loadClientsAccordingUserCriteriaBySearchBar:function(data){
                return $http.post('/jobFinder/postAllclientsAccordingUserCriteriaBySearchBar',data)
             },
             loadAllProfessionals:function(data){
              return $http.post('/jobFinder/listOfprofessionals',data)
             },
             loadProfessionalsAccordingUserCriteria:function(data){
                 return $http.post('/jobFinder/listOfprofessionalsAccordingUserCriteria',data)
             },
             loadProfessionalsAccordingUserCriteriaBySearchBar:function(data){
                 return $http.post('/jobFinder/listOfprofessionalsAccordingUserCriteriaBySearchBar',data)
             },
             getUserInfo:function(data){
              return $http.post('/jobFinder/userInfo',data);
             },
             getCurrentUserId:function(data){
                 return  $http.post('/jobFinder/getCurrentUserId',data)
             },
             getNotifications:function(data){
              return $http.post('/jobFinder/postTheUserNotifications',data)
             },
             getMoreNotificationOnScroll:function(data){
              return $http.post('/jobFinder/postTheUserNotificationsOnScrolling',data)
             },
             getMessagesNotification:function(data){
              return $http.post('/jobFinder/postNotificationMessages',data)
             },
             getMessageOnScrolling:function(data){
              return $http.post('/jobFinder/postMessagesOnScrolling',data)
             }
        }
    });
//top bar menu after login
myApp.controller('topBarController',function($scope,$http,amMoment,srvShareData,$state,candidateUser,$window,$location,alertService,socket,$translate){
               
$scope.myChosenStyle = 'background-color:red';
$scope.changeCategory = function(id){
  $scope.category = id;
}
function selectedPage(id){
  $scope.category = id;
}

if($state.$current.name=='posts'){
  selectedPage(1);
}else if($state.$current.name=='workTransactions'){
  selectedPage(2);
}else if($state.$current.name=='newsAndServices'){
  selectedPage(3);
}else if($state.$current.name=='trade'){
  selectedPage(4);
}else if($state.$current.name=='notification'){
  selectedPage(5);
}else if($state.$current.name=='groupChat'){
  selectedPage(6);
}else if($state.$current.name=='issues'){
  selectedPage(7);
}else if($state.$current.name=='settings'){
  selectedPage(8);
}else if($state.$current.name=='admin'){
  selectedPage(9);
}

// $scope.activePage=function(id){
//    $scope.color = {'background-color': 'green'}
// }
                $scope.languageKey=$translate.use();
               $scope.changeLanguage = function (langKey){
                  if(langKey=='TG'){
                    amMoment.changeLocale('tg');
                  }else if(langKey=='NL'){
                    amMoment.changeLocale('nl');
                  }else{
                    amMoment.changeLocale('en');
                  }
                $scope.languageKey=langKey;
                $translate.use(langKey);
              };
             socket.on('updateprivatechat',function(data){
                postNumberOfNotification();
                postNotification();
              })
             // $scope.activePage=function(s){
             //  let myDiv = document.getElementById(s);
             //  myDiv.style.color = 'orange';
             // }
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userId=$scope.sharedDataUserName[0]
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.Authenticate=$scope.sharedDataUserName[5]
            $scope.permission=$scope.sharedDataUserName[6]
            $scope.languageKey=$scope.sharedDataUserName[7]
            $scope.country=$scope.sharedDataUserName[8];
            $scope.livesIn=$scope.sharedDataUserName[9];
            $scope.clientId=$scope.sharedDataUserName[3]
            $scope.professionalId=$scope.sharedDataUserName[4]
            var data={}
            data.token=$scope.Authenticate;
            function myLanguage(){
              $translate.use($scope.languageKey);
            }
            myLanguage();
                $scope.notificationHasBeenSeen=function(){
                  var data={}
                  data.userId=$scope.userId
                  $http.post('/numberOfNotificationHasBeenSeen',data).then(function(response){

                  })
                 $scope.notificationResultOne=0;
                }
                $scope.messageHasBeenSeen=function(){
                   var data={}
                  data.userId=$scope.userId
                  $http.post('/numberOfNotificationHasBeenSeen',data).then(function(response){

                  })
                  $scope.numberOfMessages=0;
                }
                $scope.friendRequestHasBeenSeen=function(){
                   var data={}
                  data.userId=$scope.userId
                  $http.post('/numberOfNotificationHasBeenSeen',data).then(function(response){

                  })
                  $scope.numberOfFriendRequests=0;
                }
                     // $scope.createRoom()
                      $scope.saleItemMessages=[];
                      $scope.clientHandShakes=[];
                      $scope.saleItemNotice=[];
                 socket.on('sendHandShakingMessageFromClientToSupplier',function(data){
                   var clientInfo={}
                   clientInfo.message=data.message;
                   clientInfo.date=Date.now();
                   clientInfo.saleItemId=data.saleItemId
                   clientInfo.socketId=data.socketId;
                   clientInfo.languageKey=data.languageKey;
                   $scope.saleItemMessages.push(clientInfo);
                   $scope.saleItemNotice.push(clientInfo)
                   $scope.toName="client is willing to talk about the item "+data.saleItemId
                   $scope.saleItemId=data.saleItemId;
                   $scope.clientRoom=data.clientRoom;
                   $scope.supplierRoom=data.supplierRoom;
                   $scope.numberOfMessagesInSaleClients=+1
                 })
                 $scope.chatWithThisSaleClient=function(socketId,languageKey){
                   $scope.saleItemchatbox=false;
                   $scope.socketId=socketId;
                   $scope.numberOfMessagesInSaleClients-=1;
                   if($scope.userId==undefined){
                     $scope.toName="Supplier"

                   }else{
                    $scope.toName="Client"
                   }
                   $scope.postUserMessagesFromChat.length=0;
                   var clientInfo={}
                   if (languageKey=='TG') {
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="ሰላም፥ እንታይ ክንሕግዝ?"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use TIGRINA LANGUAGE"
                     $scope.postUserMessagesFromChat.push(clientInfo);
                     $scope.chatbox=true;
                   }else if(languageKey=='NL'){
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="wat kan ik jouw helpen?"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use DUTCH LANGUAGE"
                      $scope.postUserMessagesFromChat.push(clientInfo);
                      $scope.chatbox=true;
                   }else {
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="hello what can i help you"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use english language"
                      $scope.postUserMessagesFromChat.push(clientInfo)
                      $scope.chatbox=true;
                   }
                 }
                      $scope.closeChatWithSupplier=function(){
                        var closedMessage=""
                        $scope.chatbox=false;
                        var data={}
                        data.clientSocket=$scope.socketId;
                        data.supplierRoom=$scope.supplierRoom;
                        socket.emit('saleConversationClosed',data)
                        socket.on('saleConversationClosedNotificationTeller',function(data){
                            var messages={}
                            if($scope.languageKey=='TG'){
                             closedMessage="ዝርርብ ብ ዓሚል ወይ ብ ዋና ንብረት ዓጽዩ ኣሎ።የቐንየልና ደሓን ኩኑ ቻው"
                            }else if($scope.languageKey=='NL'){
                                           closedMessage="Het gesprek is beëindigd"
                            }else{
                              closedMessagee="Conversation has ended"
                            }
                            messages.message=closedMessage;
                            messages.date=Date.now();
                            messages.username=data.username;
                            $scope.postUserMessagesFromChat.push(messages);
                            $scope.saleItemId="";
                            $scope.clientRoom="";
                            $scope.supplierRoom="";
                            $scope.postUserMessagesFromChat=""
                        })
                      }
                      $scope.getSaleItem=function(){
                        var saleItemIdInfo={}
                        saleItemIdInfo.saleItemId=$scope.saleItemId
                        $http.post('/getSaleItemById',saleItemIdInfo).then(function(response){
                          $scope.catagories=response.data[0].catagories;
                          $scope.price=response.data[0].price;
                          $scope.unit=response.data[0].unit;
                          $scope.saleItemfileName=response.data[0].fileName;
                          $scope.saleItemName=response.data[0].itemName
                        })
                      }
                      $scope.getDetailsOfItemForSale=function(){
                        var detailsOfItem={}
                        detailsOfItem.saleItemId=$scope.saleItemId;
                        $http.post('/getDetailsInfoOfItemForSale',detailsOfItem).then(function(response){
                          $scope.saleItemDetails=response.data
                        })
                      }
                      socket.on('sendHandShakingMessageFromSupplierToClient',function(data){
                        var messages={}
                        messages.message=data.message;
                        messages.date=Date.now();
                        messages.username=data.username;
                        messages.socketId=data.socketId;
                        $scope.supplierSocketId=data.supplierSocketId;
                        $scope.clientSocketId=data.clientSocketId;
                        $scope.postUserMessagesFromChat.push(messages);
                      })
                      $scope.sendMessageBetweenClientAndSupplier=function(message){
                        var sendMessageBclientAndSup={}
                        sendMessageBclientAndSup.clientRoom=$scope.clientRoom;
                        sendMessageBclientAndSup.supplierRoom=$scope.supplierRoom;
                        sendMessageBclientAndSup.message=message;
                        sendMessageBclientAndSup.username="Supplier"
                        sendMessageBclientAndSup.clientSocketId=$scope.clientSocketId;
                        sendMessageBclientAndSup.supplierSocketId=$scope.supplierSocketId;
                        socket.emit('startConversationBtwClientAndSupplier',sendMessageBclientAndSup)
                         $scope.message=''
                      }

                      socket.on('messageFromClientOrSupplier',function(data){
                        var messages={}
                        messages.message=data.message;
                        messages.date=Date.now();
                        messages.username=data.username;
                        $scope.postUserMessagesFromChat.push(messages);
                      })
                //open chat box
                     $scope.letsChat=function(toUserId,toName,room,userPhoto,from){
                            $scope.chatWith=toUserId;
                           if(room==''){
                           }else{
                              var data={}
                              data.username=$scope.userFullName
                              data.userId=$scope.userId;
                              data.toUserId=toUserId;
                              data.photo=$scope.photo;
                              data.roomName=$scope.roomName;
                              data.roomDescription=$scope.roomDescription;
                              socket.emit('createprivatemomentalroom', data);
                              socket.on('momentalRoomNumber',function(data){
                                  $scope.connectionRoom=data.room;
                                  $scope.isToUserListenU=data.isToUserListenU;
                                  var data1={}
                                  data1.room=$scope.connectionRoom;
                                  data1.username=$scope.userFullName;
                                  data1.userId=$scope.userId
                                  $scope.curtrentUser = data1.username;
                                  socket.emit('addprivateuser', data1);
                              })
                           }
                         $scope.toUserId=toUserId;
                         $scope.roomNumber=room;
                         $scope.newRoom=$scope.currentUserRoomNumber;
                         $scope.from=from;
                         $scope.toUserPhoto=userPhoto;
                         var messageInfo={}
                         messageInfo.token=$scope.userId;
                         messageInfo.toUserId=toUserId;
                            $http.post('/jobFinder/getMessagesThatHadWithMe',messageInfo).then(function(response){
                              var messageData=response.data
                              $scope.postUserMessagesFromChat=messageData.reverse()
                            })
                           $scope.toName=toName
                           $scope.chatbox=true;
                      }
                // messages from users
                     $scope.postUserMessagesFromChat = [];
                     $scope.friendRequests=[];
                      socket.on('connect', function () { });
                        socket.on('updateprivatechat', function (fromUserFullName, data,toUserId,room,myRoom) {
                          var user = {};
                          if(toUserId==$scope.toUserId){
                            user.photo=$scope.photo;
                          }else{
                            user.photo=$scope.toUserPhoto
                          }
                          user.username = fromUserFullName;
                          user.toUserId=toUserId
                          user.message = data;
                          $scope.fromUserRoom=myRoom;
                          user.date = new Date();
                         if(user.message=="has a job for you" || user.message=="has applied for your job" || user.message=="liked your post" || user.message=="accepted your request" || user.message=="did not accept your request" || user.message=="commented on your post" || user.message=="shared your post"){
                             if(user.username===$scope.userFullName){
                             }else{
                               postNumberOfNotification();
                               postNotification();
                               $scope.numberOfNotifications+=1
                             }
                         }else if(user.message=="Friend Request"){
                               $scope.numberOfFriendRequests+=1
                              getFriendRequests();
                         }else if(user.message=='ToNotify'){
                          postMessages();
                          $scope.numberOfMessages+=1
                        }else{
                          $scope.isTyping=""
                          $scope.postUserMessagesFromChat.push(user);
                          $scope.isToUserListenU="yes";
                        }
                      });
                        socket.on('privateChatLeftInfo',function(username,message){
                          $scope.isToUserListenU="no"
                              if($scope.languageKey=='TG'){
                                $scope.isTyping=username+' ርክብ ኣቋሪጾም ኣለዉ'
                              }else{
                                $scope.isTyping=username+' left conversation'
                              }
                        })
                      socket.on('typingMessage',function(username,userId,message){
                        if(userId==$scope.userId){
                        }else{
                          if($scope.languageKey=='TG'){
                           $scope.isTyping=username +"ይጽሕፉ ኣለዉ .......";
                         }else{
                           $scope.isTyping=username +" is typing.......";
                         }
                        }
                      })
                      $scope.isTyping=""
                //online users
                    $scope.onlineUsers=[];
                    $scope.IsTypingNow=function(){
                      var data={};
                      data.connectionRoom=$scope.connectionRoom;
                      data.fromUserFullName=$scope.userFullName;
                      data.userId=$scope.userId;
                      socket.emit("onTyping",data);
                    }
                //send message to user
                    $scope.sendMessage = function (message) {
                        if(message==''){
                        }else{
                            var roomNumber=$scope.roomNumber;
                            var toUserId=$scope.toUserId
                            var data={};
                              data.message=message
                              data.toUserId=toUserId;
                              data.fromUserFullName=$scope.userFullName;
                              data.room=$scope.roomNumber;
                              data.connectionRoom=$scope.connectionRoom
                              data.from="web";
                              data.isToUserListenU=$scope.isToUserListenU
                              data.newRoomUser2=$scope.fromUserRoom;
                              data.fromUserId=$scope.userId;
                               if($scope.clientId!==null){
                                $scope.userIs='client'
                               }else if($scope.professionalId!==null){
                                $scope.userIs='professional'
                               }else{
                                $scope.userIs='normalUser'
                               }
                              data.userIs=$scope.userIs;
                              socket.emit('sendprivatechat', data);
                              $scope.message='';
                        }
                    }
                    //check if user is currently buzy chatting with some one
                      $scope.chatWith=""
                //close chat
                     $scope.closeChat=function(name){
                      var data={}
                      data.connectionRoom=$scope.connectionRoom;
                      data.fromUserFullName=$scope.userFullName;
                      data.userId=$scope.userId;
                      socket.emit('privateChatLeft',data);
                       $scope.chatbox=false;
                       $scope.toUserPhoto="";
                       $scope.connectionRoom="";
                       $scope.chatWith="";
                       $scope.isToUserListenU="no"
                     }
                //logout
                      $scope.logout=function(data){
                          var data={}
                          data.userId=$scope.userId;
                          data.username=$scope.userFullName;
                          data.room=$scope.roomNumber;
                          socket.emit('disconnectPrivateUser', data);
                            srvShareData.addData([])

                      }

              function getNumberOfFriendRequests(){
                $http.post('/jobFinder/numberOfFriendRequest',data).then(function(response){
                  $scope.numberOfFriendRequests=response.data[0].numberOfFriendRequests;
                })
              }

              function getFriendRequests(){
                $http.post('/jobFinder/friendRequests',data).then(function(response){
                     $scope.friendRequests=response.data
                     if(response.data.length==7){
                      $scope.lastFriendRequestId=response.data[6].Id
                     }

                })
              }

              $scope.getFriendRequestsOnScrolling=function(){
                data.lastFriendRequestId=$scope.lastFriendRequestId
                $http.post('/jobFinder/friendRequestsOnScrolling',data).then(function(response){
                     $scope.friendRequests.push(response.data[0],response.data[1],response.data[2],response.data[3],response.data[4])
                      if(response.data.length==5){
                        $scope.lastFriendRequestId=response.data[4].Id
                      }

                })
              }
            $scope.okFriendRequest=function(id,toUserId,room){
                data.id=id
                data.toUserId=toUserId;
                data.room=room;
                $http.post('/jobFinder/okFriendRequest',data).then(function(response){
                 getFriendRequests();
                })
            }
            $scope.noFriendRequest=function(id,toUserId,room){
                var data={}
                data.token=$scope.Authenticate;
                data.id=id;
                data.toUserId=toUserId;
                data.room=room;
                $http.post('/jobFinder/noFriendRequest',data).then(function(response){
                 getFriendRequests();
                  alertService.handelSuccess();
                });
            }
       //post number of messages
          function postNumberOfMessage(){
                $http.post('/jobFinder/postNumberOfMessages',data).then(function(response){
                  if(response.data.length==0){
                  }else{
                     $scope.numberOfMessages=response.data[0].numberOfMessages
                  }
                })
          }
      //post the messages
        function postMessages(){
           alertService.getMessagesNotification(data).then(function(response){
                       $scope.postUserMessages=response.data
                       if(response.data.length==5){
                        $scope.lastMessageId=response.data[4].Id
                       }
            })
        }
        $scope.getMessageOnScrolling=function(){
              data.lastMessageId=$scope.lastMessageId
           alertService.getMessageOnScrolling(data).then(function(response){
                       $scope.postUserMessages.push(response.data[0],response.data[1],response.data[2])
                       $scope.lastMessageId=response.data[2].Id
            })
        }
    //number of notification from the client
        function postNumberOfNotification(){
          if($scope.numberOfNotificationsHasBeenClicked=='yes'){
             notificationResultOne=0
          }else{
             $http.post('/jobFinder/userNotifications',data).then(function(response){
                 if(response.data.length==0){
                 }else{
                  $scope.notificationResultOne=response.data[0].numberOfNotifications
                 }
              })
          }

        }
    //post notification intended to the contact
          function postNotification(){
             alertService.getNotifications(data).then(function(response){
                   $scope.userNotificationMessages=response.data
                   if(response.data.length==5){
                    $scope.lastNotificationId=response.data[4].Id
                   }
              })
          }
          $scope.getOtherNotificationsOnScrolling=function(){
            data.lastNotificationId=$scope.lastNotificationId;
             alertService.getMoreNotificationOnScroll(data).then(function(response){
                   $scope.userNotificationMessages.push(response.data[0],response.data[1],response.data[2])
                    $scope.lastNotificationId=response.data[2].Id
              })
          }
         postNumberOfMessage()
         postMessages()
         postNumberOfNotification()
         postNotification();
         getNumberOfFriendRequests()
         getFriendRequests()
      $scope.chatSizedTo="-"
      $scope.minimizChat=function(){
        if($scope.chatSizedTo=="-"){
           $scope.minimizedData=""
           $scope.showChat=true;
           $scope.chatSizedTo="+"
        }else{
           $scope.showChat=false;
           $scope.chatSizedTo="-";
        }
      }


  })
  myApp.controller('homePageController', function($scope,$http,srvShareData,candidateUser,$window,$state,$location,alertService,socket,$translate) {
           $scope.isLoading=true;
           $scope.notFound=false;
           $scope.languageKey=$translate.use();
           
           // var mydata=srvShareData.getData()
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userId=$scope.sharedDataUserName[0]
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.Authenticate=$scope.sharedDataUserName[5]
            $scope.permission=$scope.sharedDataUserName[6]
            $scope.languageKey=$scope.sharedDataUserName[7]
            $scope.country=$scope.sharedDataUserName[8];
            $scope.livesIn=$scope.sharedDataUserName[9];
            $scope.clientId=$scope.sharedDataUserName[3]
            $scope.professionalId=$scope.sharedDataUserName[4];
            if($state.$current.name=='settings' || $state.$current.name=='posts'){
               if($scope.userId==null){
                  $state.go('login')
                }
            }
            function selectedPage(id){
              $scope.category = id;
            }
            if($state.$current.name=='posts'){
              selectedPage(1)
            }
            var data={}
            data.token=$scope.Authenticate;
             if($scope.languageKey=='TG'){
                $scope.searchPlaceHolder="ሰራሕተኛ ወይ ኣስራሓይ ድለ";
                $scope.friendssearchPlaceHolder="ምሳኹም ርክብ ዘለዎም";
            }else if($scope.languageKey=='NL'){
                $scope.searchPlaceHolder="Zoek"
                $scope.friendssearchPlaceHolder="friends"
            }else{
              $scope.searchPlaceHolder="search";
              $scope.friendssearchPlaceHolder="friends";
            }
            $scope.searchEmployerInYourArea=function(){
                  var data={};
                  data.country=$scope.country;
                  data.livesIn=$scope.livesIn;
                  data.languageKey=$scope.languageKey;
                  data.clientsAndProfessionalsSearch=$scope.clientsAndProfessionalsSearch;
                  if($scope.clientsAndProfessionalsSearch.length>3){
                    alertService.loadClientsAccordingUserCriteriaBySearchBar(data).then(function(response){
                      if(response.data.length==0){
                         $scope.searchResultsClientsNotFound="client not found";
                      }else{
                        $scope.listOfAllClients=response.data
                      }
                    })
                  }
            }
            $scope.searchEmployeeInYourArea=function(){
              var data={};
              data.country=$scope.country;
              data.livesIn=$scope.livesIn;
              data.languageKey=$scope.languageKey;
              data.clientsAndProfessionalsSearch=$scope.clientsAndProfessionalsSearch;
              if(data.clientsAndProfessionalsSearch.length>3){
                alertService.loadProfessionalsAccordingUserCriteriaBySearchBar(data).then(function(response){
                    if(response.data.length==0){
                      $scope.searchResultsProfessionalsNotFound="Professionals not found";
                    }else{
                      $scope.listOfAllWorkers=response.data
                    }
                })
              }
             
        }
         //load post to the modal
            $scope.showModal=function(id){
               postPosts(id);
               postComment(id);
               $scope.homePage=!$scope.homePage;
               $scope.commentShow=!$scope.commentShow;
               $scope.postTextAndMypostFilter=!$scope.postTextAndMypostFilter;
            }
            $scope.myPosts=function(){
                if($scope.myPostChecked){
                  $http.post('/myposts',data).then(function(response){
                    $scope.allPostsdata=response.data
                  })
                }else{
                 postAllPosts();
                }
            }
            $scope.showHomePage=function(){
              $scope.homePage=!$scope.homePage;
              $scope.commentShow=!$scope.commentShow;
              $scope.postTextAndMypostFilter=!$scope.postTextAndMypostFilter;
            }
        //post posts by id
          function postPosts(id){
                  data.id=id
                  $http.post('/jobFinder/postPostModal',data).then(function(response){
                    $scope.description=response.data[0].postDescription;
                    $scope.fileName=response.data[0].fileName;
                    $scope.id=response.data[0].id;
                    $scope.fileType=response.data[0].fileType;
                    $scope.room=response.data[0].room;
                    $scope.posterUserId=response.data[0].userId;
                    $scope.numberOfLikes=response.data[0].numberOfLikes;
                    $scope.numberOfShares=response.data[0].numberOfShares;
                  })
              }
              //post comments by id
                  $scope.postComments=function(id){
                    postComment(id);
                  }
                 function postComment(id)
                 {
                    data.id=id
                    $http.post('/jobFinder/postComment',data).then(function(response){
                     $scope.comments=response.data
                    })
                 }
                $scope.notificationHasBeenSeen=function(){
                  var data={}
                  data.userId=$scope.userId
                  $http.post('/numberOfNotificationHasBeenSeen',data).then(function(response){

                  })
                 $scope.notificationResultOne=0;
                }
                $scope.messageHasBeenSeen=function(){
                   var data={}
                  data.userId=$scope.userId
                  $http.post('/numberOfNotificationHasBeenSeen',data).then(function(response){

                  })
                  $scope.numberOfMessages=0;
                }
                $scope.friendRequestHasBeenSeen=function(){
                   var data={}
                  data.userId=$scope.userId
                  $http.post('/numberOfNotificationHasBeenSeen',data).then(function(response){

                  })
                  $scope.numberOfFriendRequests=0;
                }
                $scope.showPostUploading=function(){
                  $scope.homePage=!$scope.homePage;
                  $scope.showPostUploader=!$scope.showPostUploader;
                  $scope.postTextAndMypostFilter=!$scope.postTextAndMypostFilter;
                }
      //load and crop post image and save it to database
            $scope.myImage='';
            $scope.myCroppedImage='';
            var handleFileSelect=function(evt) {
              var file=evt.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function (evt) {
                $scope.$apply(function($scope){
                  $scope.myImage=evt.target.result;
                });
              };
              reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
          //upload the croped image profile
            $scope.uploadPostAtPosts=function(){
                  var mimeString = $scope.myCroppedImage.split(',')[0].split(':')[1].split(';')[0];
                  // post the data part and decode it
                  var dataString = window.atob($scope.myCroppedImage.split(',')[1]);
                  var dataArray = [];
                  for(var i = 0; i < dataString.length; i++)
                  {
                    dataArray.push(dataString.charCodeAt(i));
                  }
                  var imageData = new Blob([new Uint8Array(dataArray)], {type: mimeString});
                  var fd = new FormData();
                  var isThereImage=""
                  if(imageData.size==1371){
                    isThereImage="no"
                  }else{
                    isThereImage="yes"
                  }

                  fd.append('file', imageData);
                 var info = {};
                         info.userId=$scope.userId
                         info.writePostDescription=$scope.writePostDescription
                         info.from="web";
                         info.isThereImage=isThereImage;
                        fd.append('data', info.userId);
                        fd.append('data', info.writePostDescription);
                        fd.append('data', info.from);
                        fd.append('data', info.isThereImage);
                  $http({
                    url: '/jobFinder/homeUserPosts',
                    method: 'POST',
                    data: fd,
                    transformRequest:angular.identity,
                    headers:{'Content-Type':undefined}
                  }).then(function(response){
                    $scope.homePage=!$scope.homePage;
                    $scope.showPostUploader=!$scope.showPostUploader;
                    $scope.postTextAndMypostFilter=!$scope.postTextAndMypostFilter;

                  }, function(response) {
                      $scope.error = response.statusText;
                  });
            }
          //socket io............................................................................................
                //create private room
                  $scope.createRoom = function () {
                           socket.emit('userSession',$scope.userId);
                            var data={}
                                  data.username=$scope.userFullName
                                  $scope.curtrentUser = data.username;
                                  data.userId=$scope.userId;
                                  data.photo=$scope.photo;
                                  data.roomName=$scope.roomName;
                                  data.roomDescription=$scope.roomDescription;
                                  socket.emit('createprivateroom', data);
                                 socket.on('roomNumber',function(roomNumber){
                                 $scope.currentUserRoomNumber=roomNumber
                                 //join the user to his own room
                                 var data1={}
                                    data1.room=$scope.currentUserRoomNumber;
                                    data1.username=$scope.userFullName;
                                    data1.userId=$scope.userId
                                    $scope.curtrentUser = data1.username;
                                    socket.emit('addprivateuser', data1);
                                 })
                            socket.on('onlineUsers',function(data){
                             getMyFriends();
                            })

                      }

                      function getMyFriends(){
                        var data={};
                        data.token=$scope.Authenticate
                             $http.post('/getMyFriends',data).then(function(response){
                                $scope.onlineUsers=response.data
                              })
                      }

                      $scope.createRoom()
                      $scope.saleItemMessages=[];
                      $scope.clientHandShakes=[];
                      $scope.saleItemNotice=[];
                 socket.on('sendHandShakingMessageFromClientToSupplier',function(data){
                   var clientInfo={}
                   clientInfo.message=data.message;
                   clientInfo.date=Date.now();
                   clientInfo.saleItemId=data.saleItemId
                   clientInfo.socketId=data.socketId;
                   clientInfo.languageKey=data.languageKey;
                   $scope.saleItemMessages.push(clientInfo);
                   $scope.saleItemNotice.push(clientInfo)
                   $scope.toName="client is willing to talk about the item "+data.saleItemId
                   $scope.saleItemId=data.saleItemId;
                   $scope.clientRoom=data.clientRoom;
                   $scope.supplierRoom=data.supplierRoom;
                   $scope.numberOfMessagesInSaleClients=+1
                 })
                 $scope.chatWithThisSaleClient=function(socketId,languageKey){
                   $scope.saleItemchatbox=false;
                   $scope.socketId=socketId;
                   $scope.numberOfMessagesInSaleClients-=1;
                   if($scope.userId==undefined){
                     $scope.toName="Supplier"

                   }else{
                    $scope.toName="Client"
                   }
                   $scope.postUserMessagesFromChat.length=0;
                   var clientInfo={}
                   if (languageKey=='TG') {
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="ሰላም፥ እንታይ ክንሕግዝ?"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use TIGRINA LANGUAGE"
                     $scope.postUserMessagesFromChat.push(clientInfo);
                     $scope.chatbox=true;
                   }else if(languageKey=='NL'){
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="wat kan ik jouw helpen?"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use DUTCH LANGUAGE"
                      $scope.postUserMessagesFromChat.push(clientInfo);
                      $scope.chatbox=true;
                   }else {
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="hello what can i help you"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use english language"
                      $scope.postUserMessagesFromChat.push(clientInfo)
                      $scope.chatbox=true;
                   }
                 }
                      $scope.closeChatWithSupplier=function(){
                        var closedMessage=""
                        $scope.chatbox=false;
                        var data={}
                        data.clientSocket=$scope.socketId;
                        data.supplierRoom=$scope.supplierRoom;
                        socket.emit('saleConversationClosed',data)
                        socket.on('saleConversationClosedNotificationTeller',function(data){
                            var messages={}
                            if($scope.languageKey=='TG'){
                             closedMessage="ዝርርብ ብ ዓሚል ወይ ብ ዋና ንብረት ዓጽዩ ኣሎ።የቐንየልና ደሓን ኩኑ ቻው"
                            }else if($scope.languageKey=='NL'){
                                           closedMessage="Het gesprek is beëindigd"
                            }else{
                              closedMessagee="Conversation has ended"
                            }
                            messages.message=closedMessage;
                            messages.date=Date.now();
                            messages.username=data.username;
                            $scope.postUserMessagesFromChat.push(messages);
                            $scope.saleItemId="";
                            $scope.clientRoom="";
                            $scope.supplierRoom="";
                            $scope.postUserMessagesFromChat=""
                        })
                      }
                      $scope.getSaleItem=function(){
                        var saleItemIdInfo={}
                        saleItemIdInfo.saleItemId=$scope.saleItemId
                        $http.post('/getSaleItemById',saleItemIdInfo).then(function(response){
                          $scope.catagories=response.data[0].catagories;
                          $scope.price=response.data[0].price;
                          $scope.unit=response.data[0].unit;
                          $scope.saleItemfileName=response.data[0].fileName;
                          $scope.saleItemName=response.data[0].itemName
                        })
                      }
                      $scope.getDetailsOfItemForSale=function(){
                        var detailsOfItem={}
                        detailsOfItem.saleItemId=$scope.saleItemId;
                        $http.post('/getDetailsInfoOfItemForSale',detailsOfItem).then(function(response){
                          $scope.saleItemDetails=response.data
                        })
                      }
                      socket.on('sendHandShakingMessageFromSupplierToClient',function(data){
                        var messages={}
                        messages.message=data.message;
                        messages.date=Date.now();
                        messages.username=data.username;
                        messages.socketId=data.socketId;
                        $scope.supplierSocketId=data.supplierSocketId;
                        $scope.clientSocketId=data.clientSocketId;
                        $scope.postUserMessagesFromChat.push(messages);
                      })
                      $scope.sendMessageBetweenClientAndSupplier=function(message){
                        var sendMessageBclientAndSup={}
                        sendMessageBclientAndSup.clientRoom=$scope.clientRoom;
                        sendMessageBclientAndSup.supplierRoom=$scope.supplierRoom;
                        sendMessageBclientAndSup.message=message;
                        sendMessageBclientAndSup.username="Supplier"
                        sendMessageBclientAndSup.clientSocketId=$scope.clientSocketId;
                        sendMessageBclientAndSup.supplierSocketId=$scope.supplierSocketId;
                        socket.emit('startConversationBtwClientAndSupplier',sendMessageBclientAndSup)
                         $scope.message=''
                      }
                      socket.on('messageFromClientOrSupplier',function(data){
                        var messages={}
                        messages.message=data.message;
                        messages.date=Date.now();
                        messages.username=data.username;
                        $scope.postUserMessagesFromChat.push(messages);
                      })
                //open chat box
                     $scope.letsChat=function(toUserId,toName,room,userPhoto,from){
                            $scope.chatWith=toUserId;
                           if(room==''){
                           }else{
                              var data={}
                              data.username=$scope.userFullName
                              data.userId=$scope.userId;
                              data.toUserId=toUserId;
                              data.photo=$scope.photo;
                              data.roomName=$scope.roomName;
                              data.roomDescription=$scope.roomDescription;
                              socket.emit('createprivatemomentalroom', data);
                              socket.on('momentalRoomNumber',function(data){
                                  $scope.connectionRoom=data.room;
                                  $scope.isToUserListenU=data.isToUserListenU;
                                  var data1={}
                                  data1.room=$scope.connectionRoom;
                                  data1.username=$scope.userFullName;
                                  data1.userId=$scope.userId
                                  $scope.curtrentUser = data1.username;
                                  socket.emit('addprivateuser', data1);
                              })
                           }
                         $scope.toUserId=toUserId;
                         $scope.roomNumber=room;
                         $scope.newRoom=$scope.currentUserRoomNumber;
                         $scope.from=from;
                         $scope.toUserPhoto=userPhoto;
                         var messageInfo={}
                         messageInfo.token=$scope.userId;
                         messageInfo.toUserId=toUserId;
                            $http.post('/jobFinder/getMessagesThatHadWithMe',messageInfo).then(function(response){
                              var messageData=response.data
                              $scope.postUserMessagesFromChat=messageData.reverse()
                            })
                           $scope.toName=toName
                           $scope.chatbox=true;
                      }
                // messages from users
                     $scope.postUserMessagesFromChat = [];
                     $scope.friendRequests=[];
                      socket.on('connect', function () { });
                        socket.on('updateprivatechat', function (fromUserFullName, data,toUserId,room,myRoom) {
                          var user = {};
                          if(toUserId==$scope.toUserId){
                            user.photo=$scope.photo;
                          }else{
                            user.photo=$scope.toUserPhoto
                          }
                          user.username = fromUserFullName;
                          user.toUserId=toUserId
                          user.message = data;
                          $scope.fromUserRoom=myRoom;
                          user.date = new Date();
                         if(user.message=="has a job for you" || user.message=="has applied for your job" || user.message=="liked your post" || user.message=="accepted your request" || user.message=="did not accept your request" || user.message=="commented on your post" || user.message=="shared your post"){
                             if(user.username===$scope.userFullName){
                             }else{
                               postNumberOfNotification();
                               postNotification();
                               $scope.numberOfNotifications+=1
                             }
                         }else if(user.message=="Friend Request"){
                               $scope.numberOfFriendRequests+=1
                              getFriendRequests();
                         }else if(user.message=='ToNotify'){
                          postMessages();
                          $scope.numberOfMessages+=1
                        }else{
                          $scope.isTyping=""
                          $scope.postUserMessagesFromChat.push(user);
                          $scope.isToUserListenU="yes";
                        }
                      });
                        socket.on('privateChatLeftInfo',function(username,message){
                          $scope.isToUserListenU="no"
                              if($scope.languageKey=='TG'){
                                $scope.isTyping=username+' ርክብ ኣቋሪጾም ኣለዉ'
                              }else{
                                $scope.isTyping=username+' left conversation'
                              }
                        })
                      socket.on('typingMessage',function(username,userId,message){
                        if(userId==$scope.userId){
                        }else{
                          if($scope.languageKey=='TG'){
                           $scope.isTyping=username +"ይጽሕፉ ኣለዉ .......";
                         }else{
                           $scope.isTyping=username +" is typing.......";
                         }
                        }
                      })
                      $scope.isTyping=""
                //online users
                    $scope.onlineUsers=[];
                    $scope.IsTypingNow=function(){
                      var data={};
                      data.connectionRoom=$scope.connectionRoom;
                      data.fromUserFullName=$scope.userFullName;
                      data.userId=$scope.userId;
                      socket.emit("onTyping",data);
                    }
                //send message to user
                    $scope.sendMessage = function (message) {
                        if(message==''){
                        }else{
                            var roomNumber=$scope.roomNumber;
                            var toUserId=$scope.toUserId
                            var data={};
                              data.message=message
                              data.toUserId=toUserId;
                              data.fromUserFullName=$scope.userFullName;
                              data.room=$scope.roomNumber;
                              data.connectionRoom=$scope.connectionRoom
                              data.from="web";
                              data.isToUserListenU=$scope.isToUserListenU
                              data.newRoomUser2=$scope.fromUserRoom;
                              data.fromUserId=$scope.userId;
                               if($scope.clientId!==null){
                                $scope.userIs='client'
                               }else if($scope.professionalId!==null){
                                $scope.userIs='professional'
                               }else{
                                $scope.userIs='normalUser'
                               }
                              data.userIs=$scope.userIs;
                              socket.emit('sendprivatechat', data);
                              $scope.message='';
                        }
                    }
                    //check if user is currently buzy chatting with some one
                      $scope.chatWith=""
                //close chat
                     $scope.closeChat=function(name){
                      var data={}
                      data.connectionRoom=$scope.connectionRoom;
                      data.fromUserFullName=$scope.userFullName;
                      data.userId=$scope.userId;
                      socket.emit('privateChatLeft',data);
                       $scope.chatbox=false;
                       $scope.toUserPhoto="";
                       $scope.connectionRoom="";
                       $scope.chatWith="";
                       $scope.isToUserListenU="no"
                     }
                //logout
                      $scope.logout=function(data){
                          var data={}
                          data.userId=$scope.userId;
                          data.username=$scope.userFullName;
                          data.room=$scope.roomNumber;
                          socket.emit('disconnectPrivateUser', data);
                      }
            //  postOnlineUsers();
          function postAllListsOfProfessionals(){
                  data.country=$scope.country;
                  data.livesIn=$scope.livesIn;
                  data.languageKey=$scope.languageKey;
               alertService.loadProfessionalsAccordingUserCriteria(data).then(function(response){
                   $scope.listOfAllWorkers=response.data
                   if(response.data.length==0){
                      $scope.notFound=true;
                    }
                    $scope.isLoading=false;
               })
          }
          postAllListsOfProfessionals()
            function postAllListsOfClients(){
                  data.country=$scope.country;
                  data.livesIn=$scope.livesIn;
                  data.languageKey=$scope.languageKey
                  alertService.loadClientsAccordingUserCriteria(data).then(function(response){
                       $scope.listOfAllClients=response.data
                  })
            }
             postAllListsOfClients();
          //post all posts
          function postAllPosts(){
             $http.post('/jobFinder/postPosts',data).then(function(response){
                $scope.allPostsdata=response.data
                  $scope.lastId=response.data[response.data.length-1].id;
                  if(response.data[response.data.length-1].id==undefined){
                    $scope.lastId="noData";
                  }
            })
          }
          $scope.deletePost=function(id,fileName,remarks,idAtShareTable){
            data.postId=id;
            data.fileName=fileName;
            data.remarks=remarks;
            data.idAtShareTable=idAtShareTable;
           if(remarks==null){
              $http.post('/jobFinder/deletePost',data).then(function(response){
             $scope.deletedPost=response.data
             postAllPosts();
            })
           }else{
             $http.post('/jobFinder/deleteSharedPost',data).then(function(response){
               $scope.deletedPost=response.data
               postAllPosts();
              })
           }
          }
          postAllPosts();
      //get data on scroll to bottom
        angular.element($window).bind("scroll",function() {
          var windowHeight = "innerHeight" in window ? window.innerHeight
              : document.documentElement.offsetHeight;
          var body = document.body, html = document.documentElement;
          var docHeight = Math.max(body.scrollHeight,
              body.offsetHeight, html.clientHeight,
              html.scrollHeight, html.offsetHeight);
          windowBottom = windowHeight + window.pageYOffset;
          if (windowBottom >= docHeight) {
            if($scope.lastId=="noData"){
              alert("no data")
            }else{
              data.lastId=$scope.lastId;
             $http.post('/jobFinder/getPost',data).then(function(response){
                  $scope.allPostsdata.push(response.data[0])
                     $scope.lastId=response.data[response.data.length-1].id;
             })
            }
          }
      });
    //post the like information
      $scope.like=function(postId,room,toUserId){
              if($scope.clientId!==null){
                $scope.userIs='client'
               }else if($scope.professionalId!==null){
                $scope.userIs='professional'
               }else{
                $scope.userIs='normalUser'
               }
            var commentTextBox=$scope.userFullName+" liked your post"
            data.postId=postId;
            data.comments=commentTextBox;
            data.userIs=$scope.userIs;
            var data2={}
            data2.message="liked your post";
            data2.photo=$scope.photo
            data2.username=$scope.userFullName;
            data2.toUserId=toUserId;
            data2.room=room;
            data2.fromUserId=$scope.userId;
            data2.userFullName=$scope.userFullName
            if($scope.clientId)
            data2.userIs=$scope.userIs;
            data2.postId=postId;
            socket.emit('sendprivatechat', data2);
            socket.on('messageBackToSelf',function(data){
             postAllPosts();
            })
      }
        function commenttitle(){
          $scope.commenTitle=""
          if($scope.languageKey=='TG'){
           $scope.commenTitle="ሪኢቶኹም ኣብዚ ጸሓፉ"
          }else if($scope.languageKey=='NL'){
            $scope.commenTitle="Typ hier je reactie"
          }else{
           $scope.commenTitle="Type your comment"
          }
        }
        commenttitle();
    //post the comment information
      $scope.comment=function(postId,commentMessageTextBox,room,posterUserId){
            if(commentMessageTextBox===undefined || commentMessageTextBox===''){
            }else{
                 if($scope.clientId!==null){
                $scope.userIs='client'
               }else if($scope.professionalId!==null){
                $scope.userIs='professional'
               }else{
                $scope.userIs='normalUser'
               }
              var data2={}
              data2.token=$scope.Authenticate;
              data2.postId=postId;
              data2.comments=commentMessageTextBox;
              data2.userIs=$scope.userIs
            var roomNumber=room;
            var data3={}
            data3.message="commented on your post";
            data3.username=$scope.userFullName;
            data3.toUserId=posterUserId;
            data3.room=room;
            data3.fromUserId=$scope.userId;
            data3.userIs=$scope.userIs;
            data3.comments=commentMessageTextBox;
            data3.postId=postId
            socket.emit('sendprivatechat', data3);
            socket.on('updateprivatechat',function(data){
               postComment(postId);
               $scope.commentMessageTextBox='';
            })
        }
      }
      $scope.chatSizedTo="-"
      $scope.minimizChat=function(){
        if($scope.chatSizedTo=="-"){
           $scope.minimizedData=""
           $scope.showChat=true;
           $scope.chatSizedTo="+"
        }else{
           $scope.showChat=false;
           $scope.chatSizedTo="-";
        }
      }
      $scope.sharePostData=function(postId,posterUserId,room,postDescription,fileType,fileName,posterName){
        $scope.postId=postId;
        $scope.posterUserId=posterUserId;
        $scope.room=room;
        $scope.postDescription=postDescription;
        $scope.fileType=fileType;
        $scope.fileName=fileName;
        $scope.posterName=posterName
      }
      $scope.sharePost=function(postId,posterUserId,room,description,fileType,fileName,posterName,shareDescription2){
                  var roomNumber=room;
                  var data2={}
                  data2.message="shared your post";
                  data2.photo=$scope.photo
                  data2.username=$scope.userFullName;
                  data2.toUserId=posterUserId;
                  data2.room=room;
                  data2.fromUserId=$scope.userId;
                  data2.postId=postId;
                  data2.sharedescription=shareDescription2;
                  data2.posterUserId=posterUserId;
                  data2.fileType=fileType;
                  data2.fileName=fileName;
                  data2.posterName=posterName;
                  data2.description=description;
                  socket.emit('sendprivatechat', data2);
                  socket.on('updateprivatechat',function(data){
                      if($scope.languageKey=='TG'){
                          $scope.shareResult="ኣብ ናትኩም ለጠፍ ኣካፊልኩሞ ኣሎኹም።ሕጂ ክትዓጽውዎ ትኽእሉ ኢኹም።";
                         $window.location.href =$scope.userId
                      }else if($scope.languageKey=='NL'){
                            $scope.shareResult="Je hebt het met succes gedeeld. Je kunt dit nu sluiten.";
                      }else{
                         $scope.shareResult="You have shared it successfully.You can close this now."
                      }
                      $scope.shareButton=true;
                      
                  })

      }
  });
    myApp.controller('thingsToSaleController',function($scope,$state, $log,$http,srvShareData,alertService,socket,$window,$translate,cityNetherlandRetriever){
         $scope.languageKey=$translate.use();
         $scope.sendMeEmail=function(){
                var data={};
                data.userId=$scope.userId;
                data.from="saleThings"
                $http.post('/remindMeLater',data).then(function(response){
                  if($scope.languageKey=='TG'){
                    $scope.reminderResult="የቐንየልና፣ ስራሕ ኣብዚጀመርናሉ ናይ መዘኻኸሪ ኢመይል ክንሰደልኩም ኢና።"
                  }else if($scope.languageKey=='NL'){
                    $scope.reminderResult="Heel erg bedankt voor het laten weten om u eraan te herinneren wanneer we met ons werk beginnen."
                  }else{
                    $scope.reminderResult="Thank you somuch for let us know to remind you when we start our work."
                  }
                })
          }
       //post public assets
           $scope.sharedData = srvShareData.getData();
              $scope.sharedDataUserName=$scope.sharedData[0];
              if($state.$current.name=='sellProvides'){
              }else{
                 $scope.userId=$scope.sharedDataUserName[0];
              }
               if($state.$current.name=='trade' || $state.$current.name=='itemRegistration'){
                   if($scope.userId==undefined){
                      $state.go('login')
                    }else{
                        $scope.userFullName=$scope.sharedDataUserName[1];
                        $scope.permission=$scope.sharedDataUserName[6]
                        $scope.photo=$scope.sharedDataUserName[2]
                        $scope.Authenticate=$scope.sharedDataUserName[5];
                       
                        var data={}
                        data.token=$scope.Authenticate;
                         data.location="usersForSalethings";

                         $http.post("/checkPayment",data).then(function(response){
                          $scope.userOrderId=response.data[0].orderId;
                        })
                    }
               }
               
             $scope.fillToCityAtThingsToSellRegistration=function(){
                  var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.place);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }
              $scope.cityWhere = function(suggestion){
                  $scope.place=suggestion
             }
             $scope.checkCitySelection=function(){
              if($scope.place==undefined){
                 $scope.citySelectionAtItemRegistration="please select city,"
              }else{
                 $scope.citySelectionAtItemRegistration=""
              }
             }
            var data={}
              data.token=$scope.Authenticate;
                    $scope.boughtThings=[]
                    $scope.numberOfBougtItems;
                    $scope.itemsBoughtByTheCustomer={}
            $scope.fillCountry = function(){
              var data=null
                var dataPromise = countryRetriever.getCountry($scope.customerCountry);
                  $scope.datas=null;
                  dataPromise.then(function(data){
                  $scope.countryDatas = data;
                 });
             }
             $scope.countrySelection = function(suggestion){
               $scope.selectedCountry=suggestion
             }
       $scope.chatSizedTo="-"
      $scope.minimizChat=function(){
        if($scope.chatSizedTo=="-"){
           $scope.minimizedData=""
           $scope.showChat=true;
           $scope.chatSizedTo="+"
        }else{
           $scope.showChat=false;
           $scope.chatSizedTo="-";
        }
      }
      $scope.showList=function(){
        $scope.myListOfItems=!$scope.myListOfItems;
        $http.post('/getMyItemsList',data).then(function(response){
          $scope.itemsForSale=response.data
        })

      }
      $scope.getSoldItems=function(){
         $http.post('/getMyItemsThatSold',data).then(function(response){
          $scope.soldItemsData=response.data
        })
      }
      $scope.getCustomersWhoBoughtMyItems=function(){
         $http.post('/getCustomersBoughtItems',data).then(function(response){
          $scope.customers=response.data
        })
      }
          $scope.supplierMessage=[]
           $scope.letsChat=function(toUserId,saleItemId){
             $scope.toUserId=toUserId
             $scope.saleItemId=saleItemId
                 $scope.chatbox=true;
                 $scope.toName="Supplier"
                 var clientInfo={}
                 clientInfo.toUserId=toUserId;
                 clientInfo.saleItemId=saleItemId
                 clientInfo.languageKey=$scope.languageKey;
                 socket.emit('chatWithSupplier',clientInfo);
                 socket.on('errorOnConnection',function(data){
                   var supplierInfo={};
                   supplierInfo.status=data.online;
                   supplierInfo.message=data.message;
                   supplierInfo.server=data.server;
                   $scope.supplierMessage.push(supplierInfo)
                 })
                 socket.on('userIsNotOnline',function(data){
                   var supplierInfo={};
                   supplierInfo.status=data.online;
                   supplierInfo.message=data.message;
                   supplierInfo.server=data.server;
                   $scope.supplierMessage.push(supplierInfo)
                 })
                 socket.on('userIsOnlineNow',function(data){
                   var supplierInfo={};
                   supplierInfo.status=data.online;
                   supplierInfo.message=data.message;
                   supplierInfo.server=data.server;
                   $scope.supplierMessage.push(supplierInfo)
                   var clientInfo={}
                   clientInfo.saleItemId=saleItemId;
                   clientInfo.supplierRoom=data.supplierRoom;
                   clientInfo.languageKey=$scope.languageKey;
                   socket.emit('handShakingMessageFromClientToSupplier',clientInfo);
                 })
            }
            socket.on('sendHandShakingMessageFromSupplierToClient',function(data){
              var messages={}
              messages.message=data.message;
              messages.date=Date.now();
              messages.username=data.username;
              messages.socketId=data.socketId;
              $scope.supplierSocketId=data.supplierSocketId;
              $scope.clientSocketId=data.clientSocketId;
              $scope.supplierMessage.push(messages);
            })
            socket.on('messageFromClientOrSupplier',function(data){
              var messages={}
              messages.message=data.message;
              messages.date=Date.now();
              messages.username=data.username;
              messages.socketId=data.socketId;
              messages.supplierSocketId=$scope.supplierSocketId;
              messages.clientSocketId=$scope.clientSocketId
              $scope.supplierMessage.push(messages);
            })
            $scope.sendMessageBetweenClientAndSupplier=function(message){
              var sendMessageBclientAndSup={}
              sendMessageBclientAndSup.clientRoom=$scope.clientRoom;
              sendMessageBclientAndSup.supplierRoom=$scope.supplierRoom;
              sendMessageBclientAndSup.message=message;
              sendMessageBclientAndSup.username="client";
              sendMessageBclientAndSup.clientSocketId=$scope.clientSocketId;
              sendMessageBclientAndSup.supplierSocketId=$scope.supplierSocketId;
              socket.emit('startConversationBtwClientAndSupplier',sendMessageBclientAndSup)
              $scope.message="";
            }
            $scope.closeChatWithSupplier=function(){
              $scope.chatbox=false;
                        var data={}
                        data.clientSocket=$scope.clientSocketId;
                        data.supplierSocketId=$scope.supplierSocketId;
                        socket.emit('saleConversationClosed',data)
                        socket.on('saleConversationClosedNotificationTeller',function(data){
                          var closedMessage=""
                            var messages={}
                            if($scope.languageKey=='TG'){
                             closedMessage="ዝርርብ ብ ዓሚል ወይ ብ ዋና ንብረት ዓጽዩ ኣሎ።የቐንየልና ደሓን ኩኑ ቻው"
                            }else if($scope.languageKey=='NL'){
                                           closedMessage="Het gesprek is beëindigd"
                            }else{
                              closedMessage="Conversation has ended"
                            }
                            messages.message=closedMessage;
                            messages.date=Date.now();
                            messages.username=data.username;
                            $scope.postUserMessagesFromChat.push(messages);

                            $scope.saleItemId="";
                            $scope.clientRoom="";
                            $scope.supplierRoom="";
                            $scope.postUserMessagesFromChat=""
                        })
            }
            //send message to user
                $scope.send = function (message) {
                    if(message==''){
                    }else{
                          var data={}
                          data.message=message
                          data.toUserId=$scope.toUserId;
                          data.itemId=$scope.saleItemId
                          $scope.message='';
                    }
                }
                  $scope.getDetailsOfItemForSale=function(id){
                    var detailsOfItem={}
                    detailsOfItem.saleItemId=id;
                    $http.post('/getDetailsInfoOfItemForSale',detailsOfItem).then(function(response){
                      $scope.saleItemDetails=response.data
                    })
                  }
           $scope.onselectedSize=function(id){
             $scope.itemSelectedSize=id
           }
           $scope.nextToAddressInfo=function(){
             $scope.addressInfo=!$scope.addressInfo;
              for(var key in $scope.boughtThings){
                var itemId=$scope.boughtThings[key].id
                var numberOfThisItem=$scope.boughtThings[key].numberOfItems
                $scope.itemsBoughtByTheCustomer.ItemId=itemId;
                $scope.itemsBoughtByTheCustomer.number=numberOfThisItem;
              }
           }
           $scope.nextToPayment=function(){
            $scope.nextToCustomerPayment=!$scope.nextToCustomerPayment
           }
           $scope.getBoughtItems=function(){
            if($scope.boughtThings.length==0){
              if($scope.languageKey=='TG'){
                alert("መጀመርያ ዝግዛእ ንብረት ግዝኡ ቅድሚ ነዚ ምጥዋቐኩም")
              }else if($scope.languageKey=='NL'){
                alert("koop eerst een artikel")
              }else{
               alert("First buy an item.")
              }
            }else{
               $scope.boughtItems=!$scope.boughtItems;
               $scope.items=!$scope.items;
            }

           }
           $scope.backToSalePage=function(){
             $scope.boughtItems=!$scope.boughtItems;
             $scope.items=!$scope.items
           }
            function postThingsToSale(){
              $http.post('/postThingsToSale').then(function(response){
               $scope.postedItemsToSale=response.data;
              })
            }
            $scope.seeDetailsOfProduct=function(id,catagories,itemName,description,fileName,place,price,unit){
                  var data={}
                  data.id=id;
                  data.catagories=catagories;
                  data.itemName=itemName;
                  data.description=description;
                  data.fileName=fileName;
                  data.place=place;
                  data.price=price;
                  data.unit=unit;
                  var temp=[];
                  temp.push(data)
                  $scope.detailsOfProduct=temp;
                  function findObjectByKey(array, key, value) {
                      for (var i = 0; i < $scope.boughtThings.length; i++) {
                          if ($scope.boughtThings[i][key] === value) {
                              return $scope.boughtThings[i];
                          }
                      }
                      return null;
                  }
                  var obj = findObjectByKey($scope.boughtThings, 'id', id);
                  if($scope.boughtThings.length>0){

                     for(key in $scope.boughtThings){
                        var itemId=$scope.boughtThings[key].id;
                        if(obj){
                               $scope.cancelDisplay=true;
                               $scope.buyDisplay=false;
                        }else{
                               $scope.buyDisplay=true;
                                $scope.cancelDisplay=false;
                        }
                   }
                  }else{
                               $scope.buyDisplay=true ;
                               $scope.cancelDisplay=false;
                  }
            }
            $scope.buy=function(id,itemName,price,unit,numberOfItems,itemId){

               var defaultNumberOfItems
              if(numberOfItems==undefined){
                  defaultNumberOfItems=1;
                    $scope.total=price*defaultNumberOfItems
              }else{
                defaultNumberOfItems=numberOfItems
                $scope.total=price*defaultNumberOfItems
              }
                  var itemInfo={};
                  itemInfo.itemName=itemName;
                   itemInfo.itemIdAtSalethingCollectionTable=id;
                  itemInfo.price=price;
                  itemInfo.unit=unit
                  itemInfo.numberOfItems=defaultNumberOfItems;
                  itemInfo.size=$scope.itemSelectedSize;
                  itemInfo.total=$scope.total
                  itemInfo.itemIdAtQuantityOfItemsTable=itemId;
               $scope.boughtThings.push(itemInfo)
              $scope.numberOfBougtItems=+$scope.boughtThings.length
              $scope.cancelDisplay=true;
              $scope.buyDisplay=false
            }
            $scope.getTotal = function(){
                $scope.totalItemsPrice = 0;
                for(var i = 0; i < $scope.boughtThings.length; i++){
                    var product = $scope.boughtThings[i];
                    $scope.totalItemsPrice += (product.price * product.numberOfItems);
                }
            }
            $scope.cancel=function(id){
                 index = $scope.boughtThings.findIndex(x => x.id==id);
                 $scope.boughtThings.splice(index, 1);
                  $scope.numberOfBougtItems=+$scope.boughtThings.length
                  $scope.cancelDisplay=false;
                  $scope.buyDisplay=true;
            }
            $scope.numberChanged=function(price){
              $scope.total=$scope.numberOfItems*price
            }
            $scope.delete=function(id){
              index = $scope.boughtThings.findIndex(x => x.id==id);
              $scope.boughtThings.splice(index, 1);
               $scope.numberOfBougtItems=+$scope.boughtThings.length
            }
           postThingsToSale();
           $scope.upload=function(){
              $http.post('/jobFinder/thingsToSale',data).then(function(response){
                 alertService.handelSaved();
                  postThingsToSale();
              })
            }
           $scope.deleteThingsToSale=function(id,fileName){
                data.id=id;
                data.fileName=fileName;
                  $http.post('/jobFinder/deleteThingsToSale',data).then(function(response){
                    postThingsToSale();
                    alertService.handelDelete();
                  })
            }
            $scope.newItemToSale=function(){
                $scope.itemRegistrationButtonDisable=false;
               clearFields();
            }
            function clearFields(){
               $scope.itemName=undefined
                $scope.categoryId=undefined;
                $scope.price=undefined;
                $scope.unit=undefined;
                $scope.place=undefined
                $scope.telephone=undefined;
                $scope.description=undefined;
                $scope.imageUploaded=='no';
            }
               //load and crop user image profile and save it to database..............
              $scope.myImage='';
              $scope.myCroppedImage='';
              var handleFileSelect=function(evt) {
                  var file=evt.currentTarget.files[0];
                  var reader = new FileReader();
                  reader.onload = function (evt) {
                    $scope.$apply(function($scope){
                      $scope.myImage=evt.target.result;
                    });
                  };
                  reader.readAsDataURL(file);
                  if(file.type=='image/jpeg' || file.type=='image/png'){
                    $scope.imageUploaderButton=false;
                    $scope.alertUploadImage="";
                    $scope.imageUploaded="yes"
                  }else{
                    $scope.imageUploaderButton=true;
                    $scope.alertUploadImage="upload image";
                    $scope.imageUploaded="no"
                  }
                };
              angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
             function errorCheckupForSaleItemInputs(noEroor){
                   if($scope.languageKey=='TG'){
                          if($scope.itemName==undefined){
                            $scope.alertUploadImage="ስም ንብረት የእትዉ።"
                         }
                        else if($scope.categoryId==undefined){
                           $scope.alertUploadImage="ምድብ ናይ ንብረት ምረጹ"
                        }
                         else if($scope.price==undefined){
                             $scope.alertUploadImage="ዋጋ ንብረት የእትዉ"
                         }
                         else if($scope.unit==undefined){
                             $scope.alertUploadImage="መዐቀኒ ዋጋ ብ ኢሮ ወይ ዶላር ምረጹ"
                         }
                         else if($scope.place==undefined){
                             $scope.alertUploadImage="ንብረት ዝርከበሉ ቦታ የእትዉ"
                         }
                         else if($scope.telephone==undefined){
                             $scope.alertUploadImage="ቁጽሪ ተለፎን ናይ ዋና ንብረት የእትዉ"
                         }
                         else if($scope.description==undefined){
                                $scope.alertUploadImage="መግለጺ ንብረት ጸሓፉ"
                         }else if($scope.imageUploaded=='no'){
                            $scope.alertUploadImage="ስእሊ ናይ ንብረት ጸዓኑ"
                         }else{
                          $scope.alertUploadImage=""
                         }
                   }else if ($scope.languageKey=='NL'){
                       if($scope.itemName==undefined){
                         $scope.alertUploadImage="Artikelnaam is leeg, vul deze in"
                         }
                        else if($scope.categoryId==undefined){
                           $scope.alertUploadImage="Artikelcategorie is leeg, selecteer een categorie"
                        }
                         else if($scope.price==undefined){
                             $scope.alertUploadImage="Artikelprijs is leeg, vul deze in"
                         }
                         else if($scope.unit==undefined){
                             $scope.alertUploadImage="Artikeleenheid is leeg, vul deze in"
                         }
                         else if($scope.place==undefined){
                             $scope.alertUploadImage="plaats waar de items gevonden zijn is leeg, vul de plaats in"
                         }
                         else if($scope.telephone==undefined){
                             $scope.alertUploadImage="contact telefoon is leeg plase vul hem"
                         }
                         else if($scope.description==undefined){
                                $scope.alertUploadImage="Objectbeschrijving is leeg, vul het met plasen"
                         }else if($scope.imageUploaded=='no'){
                            $scope.alertUploadImage="afbeelding uploaden"
                         }else{
                          $scope.alertUploadImage=""
                         }
                   }else{
                      if($scope.itemName==undefined){
                         $scope.alertUploadImage="Item name is empty,please fill it"
                     }
                    else if($scope.categoryId==undefined){
                       $scope.alertUploadImage="Item category is empty,please select category"
                    }
                     else if($scope.price==undefined){
                         $scope.alertUploadImage="Item price is empty,please fill it"
                     }
                     else if($scope.unit==undefined){
                         $scope.alertUploadImage="Item unit is empty,please fill it"
                     }
                     else if($scope.place==undefined){
                         $scope.alertUploadImage="place where the items is found is empty,please fill place"
                     }
                     else if($scope.telephone==undefined){
                         $scope.alertUploadImage="contact telephone is empty plase fill it"
                     }
                     else if($scope.description==undefined){
                            $scope.alertUploadImage="Item description is empty,plase fill it"
                     }else if($scope.imageUploaded=='no'){
                        $scope.alertUploadImage="upload image"
                     }else{
                      $scope.alertUploadImage=""
                     }
                   }

             }
              $scope.imageUploaded="no"
             //upload the croped image profile
              $scope.uploadCropedImage=function(){
                    errorCheckupForSaleItemInputs()
                    var mimeString = $scope.myCroppedImage.split(',')[0].split(':')[1].split(';')[0];
                    // post the data part and decode it
                    var dataString = window.atob($scope.myCroppedImage.split(',')[1]);
                    var dataArray = [];
                    for(var i = 0; i < dataString.length; i++)
                    {
                      dataArray.push(dataString.charCodeAt(i));
                    }
                    var imageData = new Blob([new Uint8Array(dataArray)], {type: mimeString});
                    var fd = new FormData();
                    if($scope.alertUploadImage==''){
                       fd.append('file', imageData);
                       var info = {
                        };
                         info.userId=$scope.userId
                         info.itemName=$scope.itemName
                         info.catagories=$scope.categoryId
                         info.price=$scope.price
                         info.unit=$scope.unit
                         info.place=$scope.place
                         info.telephone=$scope.telephone
                         info.description=$scope.description
                        fd.append('data', info.userId);
                        fd.append('data', info.itemName);
                        fd.append('data', info.catagories);
                        fd.append('data', info.price);
                        fd.append('data', info.unit);
                        fd.append('data', info.place);
                        fd.append('data', info.telephone);
                        fd.append('data', info.description);
                        $http({
                          url: '/jobFinder//thingsToSale',
                          method: 'POST',
                          data: fd,
                          transformRequest:angular.identity,
                          headers:{'Content-Type':undefined}
                        }).then(function(response){
                        $scope.itemId=response.data.insertId
                        $scope.itemQuantity=!$scope.itemQuantity;
                        $scope.itemRegistrationButtonDisable=true;
                        }, function(response) {
                            $scope.error = response.statusText;
                        });
                  }
              }
              $scope.addItem=function(itemAmount,itemSize){
                if($scope.itemId==null){
                  $scope.addButton=true;
                }else{
                  $scope.addButton=false
                  var itemData={}
                  itemData.itemId=$scope.itemId
                  itemData.itemAmount=itemAmount;
                  itemData.itemSize=itemSize
                  if(itemSize==undefined){
                   alert("Enter size of item:መዐቀኒ ንብረት የእቱ። ንኣብነት ክንደይ ኪሎ፣ወይ ቁመቱ ብ ሜትሮ፣ወይ ብጽምዲ ከነእቱ ኣለና።")

                  }else if(itemAmount==undefined){
                    alert("Enter number of items:ብዝሒ ናይዚ ዓይነት ንብረት እዚ የእቱ።")
                  }else{
                     $http.post('/addItemAmount',itemData).then(function(response){
                      $scope.addSuccess="add successfully";
                      $scope.itemAmount=undefined;
                      $scope.itemSize=undefined;
                  })
                  }

                }
              }
               $scope.backToSaleItems=function(){
                  $window.location="/jobFinder/thingsToSale/"+$scope.userFullName
                }
              function getListOfSalethingsCategories(){
                     var salethingsCategories={}
                      salethingsCategories.webCollectionId='salethingsCategories'
                      alertService.getWebCollections(salethingsCategories).then(function(response){
                          $scope.salethingsCategoriesList=response.data
                      })
                }
               getListOfSalethingsCategories();
               function getReadyItemsToSale(){
                  $http.get('/getItemsReadyToSale').then(function(response){
                      $scope.getAvailableItemsToSale=response.data
                  })
               }
               getReadyItemsToSale();
               $scope.getCategoryId=function(id){
                 $scope.categoryId=id;
               }
               $scope.selectCategoryById=function(id){
                 $scope.selectedCategoryId=id;
                 var selectedCategories={}
                 selectedCategories.selectedCategoryId=$scope.selectedCategoryId;
                 selectedCategories.languageKey=$scope.languageKey;
                 $http.post('/getSalethingsByItem',selectedCategories).then(function(response){
                   $scope.postedItemsToSale=response.data;
                 })
               }
    })
//chatroom controller
    myApp.controller('chatRoomController',function($scope,$http,$state,srvShareData,alertService,socket){
       //post public assets
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.clientId=$scope.sharedDataUserName[3]
            $scope.professionalId=$scope.sharedDataUserName[4]
            $scope.Authenticate=$scope.sharedDataUserName[5];
            $scope.userId=$scope.sharedDataUserName[0];
            if($state.$current.name=='groupChat'){
              if($scope.userId==undefined){
                $state.go('login')
              }
            }
            var data={}
             data.token=$scope.Authenticate
            function checkUserIdInRooms(){
               $http.post('/jobFinder/postUserRoom',data).then(function(response){
                $scope.userIdRoom=response.data[0].userId;
                   if($scope.userIdRoom===undefined){
                   }else{
                      $scope.visible=true;
                   }
              })
            }
            checkUserIdInRooms();
            function rooms(){
              $http.post('/jobFinder/postRooms',data).then(function(response){
                $scope.rooms=response.data
              })
            }
          rooms();
            //socket io
                $scope.users = [];
                $scope.roomMember=[]
                socket.on('connect', function () { });
               function updateRoom(){
                 socket.on('infoToAuser', function (username, data) {
                    var user = {};
                    if($scope.languageKey=='TG'){
                      user.username = "ሓበሬታ ካብ ወሃቢ ሰርቪስ";
                      user.message = "ርክብ ጌርካ ኣለኻ መልእኽትኻ ክትሰድድ ትኽእል ኢካ";
                      user.date = new Date().getTime();
                      user.image = username.charAt(0).toUpperCase();
                      $scope.users.push(user);
                    }else if($scope.languageKey=='NL'){
                      user.username = username;
                      user.message = "Je bent verbonden. Begin met chatten";
                      user.date = new Date().getTime();
                      user.image = username.charAt(0).toUpperCase();
                      $scope.users.push(user);
                    }else{
                      user.username = username;
                      user.message = data;
                      user.date = new Date().getTime();
                      user.image = username.charAt(0).toUpperCase();
                      $scope.users.push(user);
                   }
                  });
                  //infoToAllUserInRoom
                  socket.on('infoToAllUserInRoomForUserBeenAdded', function (username, data) {
                     var user = {};
                     if($scope.languageKey=='TG'){
                       user.username = "ሓበሬታ ካብ ወሃቢ ሰርቪስ";
                       user.message = data+" ኣትዩ ሎ።";
                       user.date = new Date().getTime();
                       user.image = username.charAt(0).toUpperCase();
                       $scope.users.push(user);
                     }else if($scope.languageKey=='NL'){
                       user.username = username;
                       user.message = data+" heeft verbinding gemaakt met deze kamer";
                       user.date = new Date().getTime();
                       user.image = username.charAt(0).toUpperCase();
                       $scope.users.push(user);
                     }else{
                       user.username = username;
                       user.message = data+" has connected to this room";
                       user.date = new Date().getTime();
                       user.image = username.charAt(0).toUpperCase();
                       $scope.users.push(user);
                     }
                   });

                   socket.on('updatechat', function (username, data) {
                      var user = {};
                      user.username = username;
                      user.message = data;
                      user.date = new Date().getTime();
                      user.image = username.charAt(0).toUpperCase();
                      $scope.users.push(user);
                    });
                    socket.on('userDisconnected', function (username, data) {
                       var user = {};
                       if($scope.languageKey=='TG'){
                         user.username = "ሓበሬታ ካብ ወሃቢ ሰርቪስ";
                         user.message = data+" ወጺኡ ሎ።";
                         user.date = new Date().getTime();
                         user.image = username.charAt(0).toUpperCase();
                         $scope.users.push(user);
                       }else if($scope.languageKey=='NL'){
                         user.username = username;
                         user.message = data+" heeft de verbinding verbroken";
                         user.date = new Date().getTime();
                         user.image = username.charAt(0).toUpperCase();
                         $scope.users.push(user);
                       }else{
                         user.username = username;
                         user.message = data+" has disconnected";
                         user.date = new Date().getTime();
                         user.image = username.charAt(0).toUpperCase();
                         $scope.users.push(user);
                       }
                     });
               }
              $scope.roomMember=[];
              function addMembers(){
                 socket.on('addRoomMember',function(data){
                   $scope.roomMember.length=0;
                  $scope.roomMember=data
               })
             }
              addMembers()
               function checkUserRoomIfAvailable(){
                 $scope.ShowHide = function () {
                   $scope.IsVisible = $scope.IsVisible ? false : true;
                    if($scope.IsVisible===true){
                    }else{
                      var data={}
                      data.userId=$scope.userId;
                      data.username=$scope.userFullName;
                      data.room=$scope.roomNumber;
                      data.languageKey=$scope.languageKey;
                      socket.emit('disconnectuser', data);
                    }
                }
               }
               checkUserRoomIfAvailable();
               $scope.getRoomNumber=function(id,roomName){
                $scope.roomNumber=id
                $scope.roomName=roomName
               }
                $scope.createRoom = function () {
                 createUserRoom();
                 rooms();

                }
                function createUserRoom(){
                    var data={}
                    data.username=$scope.userFullName
                    $scope.curtrentUser = data.username;
                    data.userId=$scope.userId;
                    if($scope.roomName==undefined || $scope.roomDescription==undefined){
                       if($scope.languageKey=='TG'){
                          alert("ናይ ክፍሊ ስም ወይ መግለጺ ክፍሊ የእቱ።")
                       }else{
                          alert("Enter room name and room description")
                       }
                    }else{
                        data.roomName=$scope.roomName;
                        data.roomDescription=$scope.roomDescription;
                        socket.emit('createroom', data);
                        updateRoom();
                        alertService.handelSaved()
                         $scope.visible=true
                        rooms();
                    }
                }
                $scope.joinRoom = function () {
                  var data={}
                  data.room=$scope.roomNumber;
                  data.username=$scope.userFullName;
                  data.userId=$scope.userId;
                  data.roomName=$scope.roomName
                  $scope.curtrentUser = data.username;
                  data.languageKey=$scope.languageKey;
                  socket.emit('adduser', data);
                   updateRoom();
                }
                $scope.doPost = function (message) {
                  if(message==''){

                  }else{
                     socket.emit('sendchat', message);
                     $scope.message='';
                  }

                }

    })
//issues
    myApp.controller('issueController',function($scope,$http,$state,srvShareData,alertService,$translate,professionRetriever){
        //post public assets
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.clientId=$scope.sharedDataUserName[3]
            $scope.professionalId=$scope.sharedDataUserName[4]
             $scope.Authenticate=$scope.sharedDataUserName[5]
             $scope.country=$scope.sharedDataUserName[8];
             $scope.livesIn=$scope.sharedDataUserName[9];
             $scope.userId=$scope.sharedDataUserName[0]
             $scope.languageKey=$translate.use();
             if($state.$current.name=='issues'){
               if($scope.userId==undefined){
                $state.go('login')
               }
             }
              var data={}
              data.token=$scope.Authenticate;
           function getIssues(){

            $http.post('/jobFinder/getIssues',data).then(function(response){
              $scope.computerProblem=response.data
            })
           }
           getIssues();
           // alertService.getCurrentUserId(data).then(function(response){
           //     $scope.idUser=response.data
           //  });
            function getListOfIssues(){
                   var genderInfo={}
                    genderInfo.webCollectionId='issues'
                    alertService.getWebCollections(genderInfo).then(function(response){
                        $scope.problemsCriteria=response.data
                    })
              }
             getListOfIssues();
         // $scope.problemsCriteria=["Mobile Problems","Computer Problems","Health Problems","Legal Issues","Others"]
           $scope.getProblemId=function(id){
            $scope.id=id;
           }
           $scope.languageKey=$translate.use();
           if($scope.languageKey=='TG'){
            $scope.searchIssuesPlaceHolder="ስም ናይ ጉዳይ ኣብዚ ጸሓፉ"
           }else if($scope.languageKey=='NL'){
            $scope.searchIssuesPlaceHolder="Zoekproblemen"
           }else{
             $scope.searchIssuesPlaceHolder="Search issues"
           }
           $scope.givesug=function(){
              data.problemId=$scope.id;
              data.suggestion=$scope.suggestionBox
              if(data.suggestion==undefined){
                  if($scope.languageKey=='TG'){
                      alert("መጀመርያ ርኢተኹም ጸሓፉ ብድሕሪኡ ኣብዚ ክሊዝ ገበርኩሞ ክሊግ ግበሩ ብድሕሪኡ መልእክትኹም ክስደድ እዩ።")
                  }else{
                    alert("fill your suggestion first.")
                  }
              }else{
                 $http.post('/generalProblemSuggestion',data).then(function(response){
                    alertService.handelSaved();
                  })
              }

           }
            $scope.lookSuggestions=function(id,problem){
              $scope.selectedProblem=problem
              $scope.IssueComments=!$scope.IssueComments;
              $scope.issueTable=!$scope.issueTable;
              $scope.showIssueReplies=true;
            suggestions(id)
           }
           
           $scope.showRepliesToComment=function(){
            $scope.replyShows=!$scope.replyShows;
           }
           $scope.suggestionsReply=function(problemId,suggestionId,message){
            data.suggestionId=suggestionId;
            data.message=message;
            $http.post('/jobFinder/replySuggestion',data).then(function(response){
            })
           }
           $scope.replies=function(id){
              data.suggestionId=id
             $http.post('/jobFinder/getReplies',data).then(function(response){
                  $scope.replyData=response.data
             })
           }

          // replies();
           function suggestions(id){
            data.problemId=id;
            $http.post('/jobFinder/lookSuggestions',data).then(function(response){
              $scope.problemSuggestions=response.data
            })
           }
           $scope.expandButtonFalse=function(id){
            $scope.suggestion.expanded=false
           }
           $scope.expandButtonTrue=function(id){
            $scope.suggestion.expanded=true;
             $scope.currentSuggestionId=id
            $scope.showReplies=!$scope.showReplies;
              data.suggestionId=id
              $scope.replyData=[]
             $http.post('/jobFinder/getReplies',data).then(function(response){
                  $scope.replyData=response.data
             })
           }
           $scope.showRepliesToComment=function(id){

            $scope.currentSuggestionId=id
            $scope.showReplies=!$scope.showReplies;
              data.suggestionId=id
              $scope.replyData=[]
             $http.post('/jobFinder/getReplies',data).then(function(response){
                  $scope.replyData=response.data
             })
           }
           $scope.fillProfession = function(){
               var data=null
               var dataPromise = professionRetriever.getProfession($scope.profession,$scope.languageKey);
                 $scope.datas=null;
                 dataPromise.then(function(data){
                 $scope.professionDatas = data;
                });
            }
            $scope.professionSelection = function(suggestion){
              $scope.selectedProfession=suggestion
            }
        $scope.issue=function(){
               data.name=$scope.userFullName
              data.problemType=$scope.problemType.Id
              data.livesIn=$scope.livesIn
              data.problem=$scope.problem
             if($scope.iDontKnow==true){
                data.problemCouldBeSolvedBy="I dont know"
              }else{
                data.problemCouldBeSolvedBy=$scope.profession
             }
             if(data.problemType==undefined || data.problem==undefined){
                  if($scope.languageKey=='TG'){
                     alert("ዘይመልእ ባዶ ቦታ ኣለካ ንሱ መጀመርያ ምልእዎ ብድሕሪኡ ኣብዚ ክሊዝ ዝገበርኩሞ ክሊግ ትገብሩ።")
                  }else{
                    alert("fill all fields please")
                  }

             }else{
                 $http.post('/jobFinder/issues',data).then(function(response){
                    postData();
                     getIssues();
                  })

                 if($scope.languageKey=='TG'){
                      alert("መልእኽቲ ብትኽክል ተሰዲዱ ኣሎ።")
                       $scope.disableIssueButton=true
                        getIssues();
                 }else{
                   alert("Sent successfully")
                    $scope.disableIssueButton=true
                     getIssues();
                 }
             }
        }
        $scope.filterByProblemChanged=function(id){
            $scope.problemSuggestions=''
            data.problemType=id
            $http.post('/jobFinder/postProblemsIssues',data).then(function(response){
              $scope.computerProblem=response.data
            })
        }
        $scope.delete=function(id){
          data.id=id
          $http.post('/jobFinder/deleteProblem',data).then(function(response){
             getIssues();
            alertService.handelDelete();
          })
        }
    })
//daily life happenings controller
    myApp.controller('newscontroller',function($scope,$http,$state,srvShareData,alertService,$translate){

            // $scope.onClickLoginFromNewsHomePage=function(){
            //   var directory="/jobFinder/dailyLifeHappenings/"
            //   loginDirectoryLeader.addData(directory)
            // }
            //post public assets
              $scope.sharedData = srvShareData.getData();
              $scope.sharedDataUserName=$scope.sharedData[0];
              if($state.$current.name=='newsAndServices' || $state.$current.name=='addNews'){
                if($scope.userId==undefined){
                  $state.go('login')
                }else{
                  $scope.userFullName=$scope.sharedDataUserName[1];
                  $scope.userId=$scope.sharedDataUserName[0];
                  $scope.photo=$scope.sharedDataUserName[2]
                  $scope.Authenticate=$scope.sharedDataUserName[5]
                  $scope.permission=$scope.sharedDataUserName[6]
                  $scope.languageKey=$scope.sharedDataUserName[7]
                  $scope.country=$scope.sharedDataUserName[8];
                  $scope.livesIn=$scope.sharedDataUserName[9];
                  var data={}
                  data.token=$scope.Authenticate;
                  getDailyLifeLists();
                }
              }
            
             //load and crop post image and save it to database
            $scope.myImage='';
            $scope.myCroppedImage='';
            var handleFileSelect=function(evt) {
              var file=evt.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function (evt) {
                $scope.$apply(function($scope){
                  $scope.myImage=evt.target.result;
                });
              };
              reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
            $scope.uploadVehicleImageDisabled=true;
          //upload the croped image profile
            $scope.uploadNewsFile=function(){
                  var mimeString = $scope.myCroppedImage.split(',')[0].split(':')[1].split(';')[0];
                  // post the data part and decode it
                  var dataString = window.atob($scope.myCroppedImage.split(',')[1]);
                  var dataArray = [];
                  for(var i = 0; i < dataString.length; i++)
                  {
                    dataArray.push(dataString.charCodeAt(i));
                  }
                  var imageData = new Blob([new Uint8Array(dataArray)], {type: mimeString});
                  var fd = new FormData();

                  fd.append('file', imageData);
                 var info = {};
                         info.userId=$scope.userId
                         info.subTitleId=$scope.newsSubTitleId;
                        fd.append('data', info.userId);
                        fd.append('data', info.subTitleId);
                  if(imageData.size==1371){
                      if($scope.languageKey=='TG'){
                          $scope.fileUploadSuccess=" ስእሊ ጸዓን መጀመርያ።"
                      }else if($scope.languageKey=='NL'){
                          $scope.fileUploadSuccess=" Upload eerst de afbeelding"
                      }else{
                          $scope.fileUploadSuccess=" Upload image first"
                      }
                  }else if($scope.uploadVehicleImage=="done"){
                    if($scope.languageKey=='TG'){
                      $scope.fileUploadSuccess="done"
                    }else if($scope.languageKey=='NL'){
                        $scope.fileUploadSuccess="done"
                    }else{
                        $scope.fileUploadSuccess="done"
                    }
                  }else{
                    $http({
                      url: '/newsFileUploader',
                      method: 'POST',
                      data: fd,
                      transformRequest:angular.identity,
                      headers:{'Content-Type':undefined}
                    }).then(function(response){
                      $scope.uploadVehicleImage="done";
                      if($scope.languageKey=='TG'){
                          $scope.fileUploadSuccess=" ፋይል ብጉቡእ ተጻዒኑ ኣሎ።"
                      }else if($scope.languageKey=='NL'){
                          $scope.fileUploadSuccess=" bestand succesvol geüpload"
                      }else{
                          $scope.fileUploadSuccess=" file uploaded successfully"
                      }
                      
                    }, function(response) {
                        $scope.error = response.statusText;
                    });
                  }
            }
            $scope.newsprovidername=$scope.userFullName;
              function getDailyLifeLists(){
                 var genderInfo={}
                    genderInfo.webCollectionId='news'
                    alertService.getWebCollections(genderInfo).then(function(response){
                        $scope.issueItems=response.data
                    })
              }
           function getAllWritings(writting){
             var data1={}
            data1.historyType=writting
            $http.post('/jobFinder/allNews',data1).then(function(response){
              $scope.allNewsInfo=response.data
            })
           }
           function getAllNewsRandomly(){
             $http.post('/jobFinder/allNewsRandombly').then(function(response){
              $scope.allNewsInfo=response.data
            })
           }
           getAllNewsRandomly();
           $scope.newsbtn=function(){
            var writting="3"
              getAllWritings(writting);
              getAllTitles(writting)
           }
            $scope.dictationbtn=function(){
            var writting="5"
              getAllWritings(writting);
              getAllTitles(writting)
           }
            $scope.fictionsbtn=function(){
            var writting="4"
               getAllWritings(writting);
               getAllTitles(writting)
           }
           // $scope.transport=function(){
           //  $window.location.href = "transport";
          // $location.path('transport')
          // }
            function getAllTitles(writting){
              var data1={}
            data1.historyType=writting
            $http.post('/jobFinder/allNewsTitles',data1).then(function(response){
              $scope.allTitles=response.data
            })
           }
            function getAllTitlesRandom(writting){
              $http.post('/jobFinder/allNewsTitlesRandomly').then(function(response){
                $scope.allTitles=response.data
              })
            }
            getAllTitlesRandom();
          // getAllTitles();
           function getSubTitle(mainTitleId){
               data.titleId=mainTitleId
               $http.post('/jobFinder/getSubTitles',data).then(function(response){
                  $scope.subTitle=response.data;
               })
           }
           $scope.getNewsById=function(id){
             var title={}
             title.title=id;
             $http.post('/getNewsByTitle',title).then(function(response){
               $scope.allNewsInfo=response.data;
             })
           }
           $scope.newStart=function(){
            clearNewsFields();
           }
           function clearNewsFields(){
             $scope.newsProviderId=""
             $scope.newsTextId=""
             $scope.newsMainTitleId=""
             $scope.newsSubTitleId="";
             $scope.newsMainTitle="";
             $scope.newsSubTitle="";
             $scope.newsText="";
             $scope.telephone="";
             $scope.newsButtonDisabled=false;
           }
           function getEmptyFields(){
            if($scope.languageKey=='TG'){
                if($scope.newsprovidertele==undefined){
                $scope.emptyField="ቁጽሪ ተለፎንኩም ጸሓፉ"
                $scope.newsButtonDisabled=false;
               }else if($scope.historyType==undefined){
                 $scope.emptyField="ጽሑፍ ኣበየናይ ዓይነት ምድብ ይምደብ ምረጹ"
                 $scope.newsButtonDisabled=false;
               }else if($scope.newsMainTitle==undefined){
                 $scope.emptyField="ቀንዲ ኣርእስቲ ናይቲ ትጽሕፍዎ ዘለኹም ጽሑፍ የእትዉ"
                 $scope.newsButtonDisabled=false;
              }else if( $scope.newsSubTitle==undefined){
                 $scope.emptyField="ትሕተ ኣርእስቲ ናይቲ ትጽሕፍዎ ዘለኹም ጽሑፍ ኣእትዉ።"
                 $scope.newsButtonDisabled=false;
              }else if( $scope.newsText==undefined){
                 $scope.emptyField="ቀንዲ ጽሑፍኹም ጸሓፉ"
                 $scope.newsButtonDisabled=false;
              }else{
                $scope.emptyField="";
              }
            }else if($scope.languageKey=='NL'){
               if($scope.newsprovidertele==undefined){
                $scope.emptyField="Enter telephone number"
                $scope.newsButtonDisabled=false;
               }else if($scope.historyType==undefined){
                 $scope.emptyField="Choose history type"
                 $scope.newsButtonDisabled=false;
               }else if($scope.newsMainTitle==undefined){
                 $scope.emptyField="Enter main title of the topic"
                 $scope.newsButtonDisabled=false;
              }else if( $scope.newsSubTitle==undefined){
                 $scope.emptyField="Enter sub title of the topic"
                 $scope.newsButtonDisabled=false;
              }else if( $scope.newsText==undefined){
                 $scope.emptyField="Write the news."
                 $scope.newsButtonDisabled=false;
              }else{
                $scope.emptyField="";
              }
            }else{
               if($scope.newsprovidertele==undefined){
                $scope.emptyField="Enter telephone number"
                $scope.newsButtonDisabled=false;
               }else if($scope.historyType==undefined){
                 $scope.emptyField="Choose history type"
                 $scope.newsButtonDisabled=false;
               }else if($scope.newsMainTitle==undefined){
                 $scope.emptyField="Enter main title of the topic"
                 $scope.newsButtonDisabled=false;
              }else if( $scope.newsSubTitle==undefined){
                 $scope.emptyField="Enter sub title of the topic"
                 $scope.newsButtonDisabled=false;
              }else if( $scope.newsText==undefined){
                 $scope.emptyField="Write the news."
                 $scope.newsButtonDisabled=false;
              }else{
                $scope.emptyField="";
              }
            }
           }
           $scope.newSubTitle=function(){
             $scope.newsSubTitle="";
             $scope.newsText="";
             $scope.newsButtonDisabled=false;
           }
        $scope.submitNews=function(){
          getEmptyFields();
          if($scope.emptyField==""){
           newsUploader();
          }
        }
        $scope.getSelectedHistoryType=function(){
           getAllNews();
           getAllTitles();
        }
       $scope.disabledfileUpload=true;
        // $scope.checkUploadedFile=function(){
        //   $http.post('/jobFinder/newsFileUploader').then(function(response){
        //     $scope.fileIsUploaded=response.data
        //   })
        // }
        function newsUploader(){
          var data={}
          data.token=$scope.Authenticate;
          data.newsprovidername=$scope.newsprovidername;
          data.newsprovidertele=$scope.newsprovidertele;
          data.historyType=$scope.historyType.Id;
          $http.post('/jobFinder/newsUploaderInfo',data).then(function(response){
            $scope.newsProviderId=response.data.insertId;
            mainNewsText();
             if($scope.languageKey=='TG'){
              alert("መልእክትኹም ብትኽክል ተመስርሑ ኣሎ ዝኣቱ ስእሊ ወይ ቪድዮ ተልዩኩም ከተእትዉ ትኽእሉ ኢኩም።")
              $scope.newsButtonDisabled=true;
             }else{
               alert("sent successfully, if you need to upload image or vidio you can upload now ")
                $scope.newsButtonDisabled=true;
             }
          })
        }
         function mainNewsText(){
             var mainNewsData={}
             mainNewsData.token=$scope.Authenticate;
             mainNewsData.newsProviderId=$scope.newsProviderId;
             mainNewsData.newsText=$scope.newsText;
             $http.post('/jobFinder/mainNews',mainNewsData).then(function(response){
                $scope.newsTextId=response.data.insertId;
                 mainTitle();
             })
        }
         function mainTitle(){
            data.newsTextId=$scope.newsTextId
            data.newsMainTitle=$scope.newsMainTitle
            $http.post('/jobFinder/newsMainTitle',data).then(function(response){
              $scope.newsMainTitleId=response.data.insertId;
              subTitle()
            });
        }
       function subTitle(){
           var newsSubTitleData={}
             newsSubTitleData.token=$scope.Authenticate;
             newsSubTitleData.newsSubTitle=$scope.newsSubTitle;
             newsSubTitleData.newsMainTitleId=$scope.newsMainTitleId
             $http.post('/jobFinder/newsSubTitles',newsSubTitleData).then(function(response){
              $scope.newsSubTitleId=response.data.insertId
              $scope.disabledfileUpload=false;
            });
        }
        $scope.deleteNews=function(id,fileName){
          data.id=id
          data.fileName=fileName;
          $http.post('/jobFinder/deleteNews',data).then(function(response){
            alertService.handelDelete()
            getAllNews();
            getAllTitles();
          })
        }
    })
//notification
    myApp.controller('notificationcontroller',function($scope,$http,$state,srvShareData,socket,alertService){
        //post public assets
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.Authenticate=$scope.sharedDataUserName[5];
            $scope.userId=$scope.sharedDataUserName[0]
            if($state.$current.name=='notification'){
              if($scope.userId==undefined){
                $state.go('login')
              }
            }
              var data={}
              data.token=$scope.Authenticate
               $scope.postUserMessagesFromChat = [];
                     $scope.friendRequests=[];
                      socket.on('connect', function () { });

                        socket.on('updateprivatechat', function (fromUserFullName, data,toUserId,room,myRoom) {
                          var user = {};
                          if(toUserId==$scope.toUserId){
                            user.photo=$scope.photo;
                          }else{
                            user.photo=$scope.toUserPhoto
                          }
                          user.username = fromUserFullName;
                          user.toUserId=toUserId
                          user.message = data;
                          $scope.fromUserRoom=myRoom;
                          user.date = new Date();
                         if(user.message=="has a job for you" || user.message=="has applied for your job" || user.message=="liked your post" || user.message=="accepted your request" || user.message=="did not accept your request" || user.message=="commented on your post" || user.message=="shared your post"){
                             if(user.username===$scope.userFullName){
                             }else{
                               postNumberOfNotification();
                               postNotification();
                               $scope.numberOfNotifications+=1
                             }
                         }else if(user.message=="Friend Request"){
                               $scope.numberOfFriendRequests+=1
                              getFriendRequests();
                         }else if(user.message=='ToNotify'){
                          postMessages();
                          $scope.numberOfMessages+=1
                        }else{
                          $scope.isTyping=""
                          $scope.postUserMessagesFromChat.push(user);
                          $scope.isToUserListenU="yes";
                        }
                      });
                        socket.on('privateChatLeftInfo',function(username,message){
                          $scope.isToUserListenU="no"
                              if($scope.languageKey=='TG'){
                                $scope.isTyping=username+' ርክብ ኣቋሪጾም ኣለዉ'
                              }else{
                                $scope.isTyping=username+' left conversation'
                              }
                        })
                      socket.on('typingMessage',function(username,userId,message){
                        if(userId==$scope.userId){
                        }else{
                          if($scope.languageKey=='TG'){
                           $scope.isTyping=username +"ይጽሕፉ ኣለዉ .......";
                         }else{
                           $scope.isTyping=username +" is typing.......";
                         }
                        }
                      })
                      $scope.isTyping=""
                //online users
                    $scope.onlineUsers=[];
                    $scope.IsTypingNow=function(){
                      var data={};
                      data.connectionRoom=$scope.connectionRoom;
                      data.fromUserFullName=$scope.userFullName;
                      data.userId=$scope.userId;
                      socket.emit("onTyping",data);
                    }
               $scope.letsChat=function(toUserId,toName,room,userPhoto,from){
                            $scope.chatWith=toUserId;
                           if(room==''){
                           }else{
                              var data={}
                              data.username=$scope.userFullName
                              data.userId=$scope.userId;
                              data.toUserId=toUserId;
                              data.photo=$scope.photo;
                              data.roomName=$scope.roomName;
                              data.roomDescription=$scope.roomDescription;
                              socket.emit('createprivatemomentalroom', data);
                              socket.on('momentalRoomNumber',function(data){
                                  $scope.connectionRoom=data.room;
                                  $scope.isToUserListenU=data.isToUserListenU;
                                  var data1={}
                                  data1.room=$scope.connectionRoom;
                                  data1.username=$scope.userFullName;
                                  data1.userId=$scope.userId
                                  $scope.curtrentUser = data1.username;
                                  socket.emit('addprivateuser', data1);
                              })
                           }
                         $scope.toUserId=toUserId;
                         $scope.roomNumber=room;
                         $scope.newRoom=$scope.currentUserRoomNumber;
                         $scope.from=from;
                         $scope.toUserPhoto=userPhoto;
                         var messageInfo={}
                         messageInfo.token=$scope.userId;
                         messageInfo.toUserId=toUserId;
                            $http.post('/jobFinder/getMessagesThatHadWithMe',messageInfo).then(function(response){
                              var messageData=response.data
                              $scope.postUserMessagesFromChat=messageData.reverse()
                            })
                           $scope.toName=toName
                           $scope.chatbox=true;
                      }
                      $scope.sendMessage = function (message) {
                        if(message==''){
                        }else{
                            var roomNumber=$scope.roomNumber;
                            var toUserId=$scope.toUserId
                            var data={};
                              data.message=message
                              data.toUserId=toUserId;
                              data.fromUserFullName=$scope.userFullName;
                              data.room=$scope.roomNumber;
                              data.connectionRoom=$scope.connectionRoom
                              data.from="web";
                              data.isToUserListenU=$scope.isToUserListenU
                              data.newRoomUser2=$scope.fromUserRoom;
                              data.fromUserId=$scope.userId;
                               if($scope.clientId!==null){
                                $scope.userIs='client'
                               }else if($scope.professionalId!==null){
                                $scope.userIs='professional'
                               }else{
                                $scope.userIs='normalUser'
                               }
                              data.userIs=$scope.userIs;
                              socket.emit('sendprivatechat', data);
                              $scope.message='';
                        }
                    }
                    //check if user is currently buzy chatting with some one
                      $scope.chatWith=""
              $scope.closeChat=function(name){
                      var data={}
                      data.connectionRoom=$scope.connectionRoom;
                      data.fromUserFullName=$scope.userFullName;
                      data.userId=$scope.userId;
                      socket.emit('privateChatLeft',data);
                       $scope.chatbox=false;
                       $scope.toUserPhoto="";
                       $scope.connectionRoom="";
                       $scope.chatWith="";
                       $scope.isToUserListenU="no"
              }
               socket.on('sendHandShakingMessageFromClientToSupplier',function(data){
                   var clientInfo={}
                   clientInfo.message=data.message;
                   clientInfo.date=Date.now();
                   clientInfo.saleItemId=data.saleItemId
                   clientInfo.socketId=data.socketId;
                   clientInfo.languageKey=data.languageKey;
                   $scope.saleItemMessages.push(clientInfo);
                   $scope.saleItemNotice.push(clientInfo)
                   $scope.toName="client is willing to talk about the item "+data.saleItemId
                   $scope.saleItemId=data.saleItemId;
                   $scope.clientRoom=data.clientRoom;
                   $scope.supplierRoom=data.supplierRoom;
                   $scope.numberOfMessagesInSaleClients=+1
                 })
                 $scope.chatWithThisSaleClient=function(socketId,languageKey){
                  // $scope.saleItemchatbox=false;
                   $scope.socketId=socketId;
                   $scope.numberOfMessagesInSaleClients-=1;
                   if($scope.userId==undefined){
                     $scope.toName="Supplier"

                   }else{
                    $scope.toName="Client"
                   }
                   $scope.postUserMessagesFromChat.length=0;
                   var clientInfo={}
                   if (languageKey=='TG') {
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="ሰላም፥ እንታይ ክንሕግዝ?"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use TIGRINA LANGUAGE"
                     $scope.postUserMessagesFromChat.push(clientInfo);
                     $scope.chatbox=true;
                   }else if(languageKey=='NL'){
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="wat kan ik jouw helpen?"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use DUTCH LANGUAGE"
                      $scope.postUserMessagesFromChat.push(clientInfo);
                      $scope.chatbox=true;
                   }else {
                     var startChatWithClient={}
                     startChatWithClient.clientSocket=socketId;
                     startChatWithClient.message="hello what can i help you"
                     socket.emit("helloClient",startChatWithClient)
                     clientInfo.message="client use english language"
                      $scope.postUserMessagesFromChat.push(clientInfo)
                      $scope.chatbox=true;
                   }
                 }
                  $scope.chatSizedTo="-"
                  $scope.minimizChat=function(){
                    if($scope.chatSizedTo=="-"){
                       $scope.minimizedData=""
                       $scope.showChat=true;
                       $scope.chatSizedTo="+"
                    }else{
                       $scope.showChat=false;
                       $scope.chatSizedTo="-";
                    }
                  }
                   $scope.sendMessageBetweenClientAndSupplier=function(message){
                        var sendMessageBclientAndSup={}
                        sendMessageBclientAndSup.clientRoom=$scope.clientRoom;
                        sendMessageBclientAndSup.supplierRoom=$scope.supplierRoom;
                        sendMessageBclientAndSup.message=message;
                        sendMessageBclientAndSup.username="Supplier"
                        sendMessageBclientAndSup.clientSocketId=$scope.clientSocketId;
                        sendMessageBclientAndSup.supplierSocketId=$scope.supplierSocketId;
                        socket.emit('startConversationBtwClientAndSupplier',sendMessageBclientAndSup)
                         $scope.message=''
                      }
                      $scope.closeChatWithSupplier=function(){
                        var closedMessage=""
                        $scope.chatbox=false;
                        var data={}
                        data.clientSocket=$scope.socketId;
                        data.supplierRoom=$scope.supplierRoom;
                        socket.emit('saleConversationClosed',data)
                        socket.on('saleConversationClosedNotificationTeller',function(data){
                            var messages={}
                            if($scope.languageKey=='TG'){
                             closedMessage="ዝርርብ ብ ዓሚል ወይ ብ ዋና ንብረት ዓጽዩ ኣሎ።የቐንየልና ደሓን ኩኑ ቻው"
                            }else if($scope.languageKey=='NL'){
                                           closedMessage="Het gesprek is beëindigd"
                            }else{
                              closedMessagee="Conversation has ended"
                            }
                            messages.message=closedMessage;
                            messages.date=Date.now();
                            messages.username=data.username;
                            $scope.postUserMessagesFromChat.push(messages);
                            $scope.saleItemId="";
                            $scope.clientRoom="";
                            $scope.supplierRoom="";
                            $scope.postUserMessagesFromChat=""
                        })
                      }
           //post the messages
        function postMessages(){
           alertService.getMessagesNotification(data).then(function(response){
                       $scope.postUserInformation=response.data
                      if(response.data.length>4){
                       $scope.lastMessageId=response.data[4].Id
                      }
            })
        }
        $scope.deleteNotification=function(id){
            var notificationId={}
            notificationId.infoId=id;
            notificationId.deleteFrom=$scope.notificationTitle
            $http.post('/deleteNotification',notificationId).then(function(response){
                if( $scope.notificationTitle=="Notifications"){
                  getNotification();
                }else if( $scope.notificationTitle=="Messages"){
                     postMessages();
                }else if($scope.notificationTitle="Friend Requests"){
                   getFriendsreq();
               }
            })
        }
        $scope.getUserNotifications=function(){
          $scope.notificationTitle="Notifications"
          getNotification();
        }
       $scope.getUserMessages=function(){
        $scope.notificationTitle="Messages"
        postMessages();
       }
        $scope.notificationTitle="Messages"
       postMessages();
       function getNotification(){
         alertService.getNotifications(data).then(function(response){
                       $scope.postUserInformation=response.data
                      if(response.data.length>4){
                       $scope.lastMessageId=response.data[4].Id
                      }
            })
       }
       function getFriendsreq(){
             $http.post('/jobFinder/friendRequests',data).then(function(response){
                     $scope.postUserInformation=response.data
                })
       }
       $scope.getFriendRequests=function(){
         $scope.notificationTitle="Friend Requests"
             getFriendsreq();
       }
       function getMyFriends(){
        $http.post('/jobFinder/getMyFriends',data).then(function(response){
             $scope.postUserInformation=response.data
        })
       }
       $scope.blockFriend=function(userIdToBeBlocked){
          data.userIdToBeBlocked=userIdToBeBlocked
          $http.post('/blockThisFriend',data).then(function(response){
              getMyFriends();
          })
       }
       $scope.listMyFriends=function(){
        $scope.notificationTitle="People connected with you"
           getMyFriends();
       }
         $scope.postUserMessagesAtNotification = [];
          socket.on('connect', function () { });
            socket.on('updateprivatechat', function (fromUserFullName, data,userId,photo,toUserId) {
              var user = {};
              user.photo=photo
              user.username = fromUserFullName;
              user.toUserId=toUserId
              user.message = data;
              user.date = new Date();
              $scope.postUserMessagesAtNotification.push(user);
          });
      //send message to user
          $scope.doPost = function (message) {
              if(message==''){

              }else{
                    var data={}
                    data.message=message
                    data.photo=$scope.photo
                    data.toUserId=$scope.toUserId;
                    data.fromUserFullName=$scope.userFullName;
                    data.fromUserId=$scope.userId;
                    data.room=$scope.roomNumber
                    socket.emit('sendprivatechat', data);
                    $scope.message='';
              }

          }

            function clearPropertyData(){
                      $scope.name=undefined
                      $scope.gender=undefined
                      $scope.profession=undefined
                      $scope.livesInNotification=undefined
                      $scope.email=undefined
                      $scope.workSession=undefined
                      $scope.remarks=undefined
                       $scope.name=undefined
                      $scope.gender=undefined
                      $scope.lookingFor=undefined
                      $scope.timeTaken=undefined
                      $scope.workDetails=undefined
                        $scope.userTelephone=undefined
                      $scope.date=undefined
                      $scope.fromPlace=undefined
                      $scope.toPlace=undefined
                      $scope.transportChoosed=undefined
                      $scope.vehiclePhoto=undefined
                      $scope.availabeTime=undefined;
            }
        $scope.details=function(id,location){
            var data={};
            data.userId=id
            data.location=location;
            data.languageKey=$scope.languageKey;
            $scope.showDetails=true;
              if(location=="professional"){
                clearPropertyData();
                 alertService.getUserInfo(data).then(function(response){
                    $scope.name=response.data[0].name;
                    $scope.gender=response.data[0].gender;
                    $scope.profession=response.data[0].profession;
                    $scope.livesInNotification=response.data[0].livesIn;
                    $scope.country=response.data[0].country;
                    $scope.email=response.data[0].email;
                    $scope.workSession=response.data[0].workSession
                    $scope.remarks=response.data[0].remarks;
                    $scope.countryNotification=response.data[0].country;
                  })
               }else if(location=="client"){
                clearPropertyData();
                 alertService.getUserInfo(data).then(function(response){
                    $scope.name=response.data[0].name;
                    $scope.gender=response.data[0].gender;
                    $scope.lookingFor=response.data[0].lookingFor;
                    $scope.livesInNotification=response.data[0].livesIn
                     $scope.country=response.data[0].country;
                     $scope.email=response.data[0].email;
                    $scope.timeTaken=response.data[0].timeTaken;
                    $scope.workDetails=response.data[0].workDetails
                     $scope.remarks=response.data[0].remarks;
                     $scope.countryNotification=response.data[0].country;
                  })
               }else if(location=="passenger"){
                clearPropertyData();
                alertService.getUserInfo(data).then(function(response){
                  $scope.userTelephone=response.data[0].telephone;
                  $scope.date=response.data[0].date;
                  $scope.fromPlace=response.data[0].fromPlace;
                  $scope.toPlace=response.data[0].toPlace;
                  $scope.transportChoosed=response.data[0].transportChoosed;
                  $scope.countryNotification=response.data[0].country;
                  $scope.livesInNotification=response.data[0].livesIn;
                });
              }else if(location=="transporttype"){
                clearPropertyData();
                alertService.getUserInfo(data).then(function(response){
                  $scope.userTelephone=response.data[0].telephone;
                  $scope.date=response.data[0].date;
                  $scope.fromPlace=response.data[0].fromPlace;
                  $scope.toPlace=response.data[0].toPlace;
                  $scope.ownerTransportType=response.data[0].transporttype;
                  $scope.vehiclePhoto=response.data[0].viheclePhoto;
                  $scope.availabeTime=response.data[0].fromTime;
                  $scope.availableTill=response.data[0].toTime
                });
              }else if(location=="normalUser"){
                clearPropertyData();
                alertService.getUserInfo(data).then(function(response){
                  $scope.name=response.data[0].name;
                  $scope.email=response.data[0].email;
                  $scope.country=response.data[0].country;
                  $scope.livesInNotification=response.data[0].livesIn;
                });
              }
        }
    })
//professional
   myApp.controller('professionalCtrl',function($scope,$http,$filter,srvShareData,alertService,socket,professionRetriever){
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.Authenticate=$scope.sharedDataUserName[5]
            $scope.languageKey=$scope.sharedDataUserName[7]
            $scope.professionId=$scope.sharedDataUserName[4];
            $scope.userId=$scope.sharedDataUserName[0]
           // $scope.country=$scope.sharedDataUserName[8]
                var data={}
                data.token=$scope.Authenticate;
           function getListOfProfessionStatus(){
                   var profeStatusInfo={}
                    profeStatusInfo.webCollectionId='profeStatus'
                    alertService.getWebCollections(profeStatusInfo).then(function(response){
                        $scope.statuses=response.data
                    })
              }
              getListOfProfessionStatus();
              loadProfessionalInfo();
            $scope.fillProfession = function(){
                var data=null
                var dataPromise = professionRetriever.getProfession($scope.profession,$scope.languageKey);
                  $scope.datas=null;
                  dataPromise.then(function(data){
                  $scope.professionDatas = data;
                 });
             }
             $scope.professionSelection = function(suggestion){
               $scope.selectedProfession=suggestion
             }
            $scope.workProfession=function(id){
                  $scope.professionalsProfessionId=id
            }
            $scope.workTimechanged=function(id){
                  $scope.workingPeriodId=id
            }
            $scope.pworksituation=function(id){
             $scope.pWorkSituationId=id
            }
           // $scope.getListOfProfessionalAvailablity=function(){
                    var profAvailabltyInfo={}
                    profAvailabltyInfo.webCollectionId='profeAvailability'
                    alertService.getWebCollections(profAvailabltyInfo).then(function(response){
                        $scope.workTimeDatas=response.data
                    })
           // }
           function loadProfessionalInfo(){
                    var dataa={};
                      dataa.userId=$scope.userId
                      dataa.languageKey=$scope.languageKey
                     $http.post('/professionalMainTable',dataa).then(function(response){
                        if(response.data.length==0){
                         }else{
                          $scope.professionalId=response.data[0].Id
                          $scope.pTele=response.data[0].telephone
                          $scope.pRemark=response.data[0].remarks
                          $scope.profession=response.data[0].profession
                          $scope.workingPeriod=response.data[0].workSession;
                          $scope.pWorkSituation=response.data[0].lookingForJobThisTime;
                           $scope.professionalsProfessionId=response.data[0].professionId
                          $scope.workingPeriodId=response.data[0].workSessionId;
                          $scope.pWorkSituationId=response.data[0].lookingForJobThisTimeId;
                         }
                     })
            }


        // save professional information like professional name,tele,email
          $scope.saveProfessionInfo=function(){
                      data.professionalId=$scope.professionalId
                      data.tele=$scope.pTele
                      data.remark=$scope.pRemark
                      data.profession=$scope.profession
                      data.professionalWorkSession=$scope.workingPeriodId
                      data.pWorkSituation=$scope.pWorkSituationId;
                      data.languageKey=$scope.languageKey;
                  if(data.professionalId==undefined){
                    $http.post('/jobFinder/registerProfessional',data).then(function(response){
                      $scope.professionalId=response.data;
                     alertService.handelSaved();
                     loadProfessionalInfo();
                    });
                  }else{
                    $http.post('/jobFinder/updateprofessionalInfoData',data).then(function(response){
                       alertService.handleUpdated();
                    });
                  }
            }
            // loadProfessionalInfo();

  })
//client
      myApp.controller('clientCtrl',function($scope,$http,$filter,srvShareData,alertService,socket,countryRetriever,cityRetriever,professionRetriever){
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userId=$scope.sharedDataUserName[0]
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.clientId=$scope.sharedDataUserName[3]
            $scope.professionalId=$scope.sharedDataUserName[4]
             $scope.Authenticate=$scope.sharedDataUserName[5];
             $scope.languageKey=$scope.sharedDataUserName[7]
                  var data={}
                  data.token=$scope.Authenticate;
                  data.location="clients";
                  $http.post("/checkPayment",data).then(function(response){
                    $scope.clientOrderId=response.data[0].orderId;
                  })
                   loadClientInfo();
                 $scope.fillCountry = function(){
                     var data=null
                     var dataPromise = countryRetriever.getCountry($scope.country);
                       $scope.datas=null;
                       dataPromise.then(function(data){
                       $scope.countryDatas = data;
                      });
                  }
                  $scope.fillCity = function(){
                      var data=null
                      if($scope.country==null){
                        alert("enter country first")
                      }else if($scope.selectedCountry==undefined){

                      }else{
                        var dataPromise = cityRetriever.getCity($scope.city,$scope.selectedCountry);
                          $scope.datas=null;
                          dataPromise.then(function(data){
                          $scope.cityDatas = data;
                         });
                      }
                   }
                   $scope.fillProfession = function(){
                       var data=null
                       var dataPromise = professionRetriever.getProfession($scope.profession,$scope.languageKey);
                         $scope.datas=null;
                         dataPromise.then(function(data){
                         $scope.professionDatas = data;
                        });
                    }
                  $scope.countrySelection = function(suggestion){
                    $scope.selectedCountry=suggestion
                  }
                  $scope.citySelection = function(suggestion){
                    $scope.selectedCity=suggestion

                  }
                  $scope.professionSelection = function(suggestion){
                    $scope.selectedProfession=suggestion
                  }
            function getListOfClientStatus(){
                   var genderInfo={}
                    genderInfo.webCollectionId='clientStatus'
                    alertService.getWebCollections(genderInfo).then(function(response){
                        $scope.statuses=response.data
                    })
              }
              getListOfClientStatus();

            $scope.getAllProfessions=function(){
                  alertService.allProfessions().then(function(response){
                      $scope.workProfessionDatas=response.data
                 })
            }
            $scope.getCountries=function(){
                 alertService.handelAllCountries().then(function(response){
                    $scope.countries=response.data
                  });
            }
            $scope.workProfession=function(id){
                  $scope.myProfessionDropDownId=id;
            }
            $scope.cworksituation=function(id){
                  $scope.cWorkSituationId=id
            }

             function loadClientInfo(){
                  data.languageKey=$scope.languageKey
              $http.post('/jobFinder/postClientMainTableData',data).then(function(response){
                if(response.data.length==0){
                }else{
                      $scope.clientMainTableId=response.data[0].Id;
                      $scope.cTele=response.data[0].telephone;
                      $scope.profession=response.data[0].lookingFor
                      $scope.myProfessionDropDownId=response.data[0].lookingForIdInClient
                      $scope.timeTaken=response.data[0].timeTaken
                      $scope.workSummary=response.data[0].workSummary
                      $scope.workDetails=response.data[0].workDetails
                       $scope.cWorkSituation=response.data[0].situationOfWorkAtThisTime
                      $scope.cWorkSituationId=response.data[0].situationOfWorkAtThisTimeIdInClients
                      $scope.country=response.data[0].workCountry;
                      $scope.city=response.data[0].workCity
                      $scope.name=response.data[0].name;
                      $scope.url=response.data[0].url;
                }
              })
          }

              //post work time
              function getworksession(){
                 $http.post('/jobFinder/postWorkTime',data).then(function(response){
                   $scope.workTime=response.data
                   var workTime=JSON.stringify((response.data).map(function(obj){ return obj.english }))
                   $scope.workTimeDatas=JSON.parse(workTime);
                  })
              }

          $scope.saveClientInfo=function(){
                  data.clientId=$scope.clientMainTableId
                    data.tele=$scope.cTele
                    data.lookingFor=$scope.profession
                    data.timeTaken=$scope.timeTaken
                    data.workSummary=$scope.workSummary
                    data.workDetails=$scope.workDetails
                    data.cWorkSituation=$scope.cWorkSituationId
                    data.country=$scope.country;
                    data.livesIn=$scope.city;
                    data.name=$scope.name;
                    data.url=$scope.url;
                    data.languageKey=$scope.languageKey
                  if(data.clientId==undefined){
                     $http.post('/jobFinder/clientMainInfo',data).then(function(response){
                       $scope.newContactId=response.data
                       $scope.clientId=response.data
                       alertService.handelSaved();
                       loadClientInfo();
                     });
                  }else{
                       $http.post('/jobFinder/updateclientMainInfo',data).then(function(response){
                         alertService.handleUpdated();
                       });
                    }
           }
      })
//transport
     myApp.controller('transportCtrl',function($scope,$http,$state,$filter,$window,$location,srvShareData,alertService,socket,cityNetherlandRetriever,$translate){
                  // $scope.transportId
                  // $scope.passengerId
                  // $scope.transportDate
                  // $scope.passengerTravelDate
                  //load and crop post image and save it to database
              $scope.languageKey=$translate.use()
             
             $scope.changeLanguage = function (langKey){
                  if(langKey=='TG'){
                    amMoment.changeLocale('tg');
                  }else if(langKey=='NL'){
                    amMoment.changeLocale('nl');
                  }else{
                    amMoment.changeLocale('en');
                  }
                $translate.use(langKey);
                 $scope.languageKey=langKey;
              };
            $scope.myImage='';
            $scope.myCroppedImage='';
            var handleFileSelect=function(evt) {
              var file=evt.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function (evt) {
                $scope.$apply(function($scope){
                  $scope.myImage=evt.target.result;
                });
              };
              reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
          //upload the croped image profile
            $scope.uploadPost=function(){
                  var mimeString = $scope.myCroppedImage.split(',')[0].split(':')[1].split(';')[0];
                  // post the data part and decode it
                  var dataString = window.atob($scope.myCroppedImage.split(',')[1]);
                  var dataArray = [];
                  for(var i = 0; i < dataString.length; i++)
                  {
                    dataArray.push(dataString.charCodeAt(i));
                  }
                  var imageData = new Blob([new Uint8Array(dataArray)], {type: mimeString});
                  var fd = new FormData();
                  if(imageData.size==1371){
                      if($scope.languageKey=='TG'){
                       $scope.reactionInfo='<strong style="color:red;">ስእሊ ምረጹ!!</strong>'
                      }else if($scope.languageKey=='NL'){
                          $scope.reactionInfo='<strong style="color:red;">Kiez afbeelding!!</strong>'
                      }else{
                         $scope.reactionInfo='<strong style="color:red;">Choose picture!!</strong>'
                      }
                  }else{
                     fd.append('file', imageData);
                     var info = {};
                         info.userId=$scope.userId
                         info.userFullName=$scope.userFullName
                         info.from="web";
                         info.previosName=$scope.transportPhto
                        fd.append('data', info.userId);
                        fd.append('data', info.userFullName);
                        fd.append('data', info.from);
                        fd.append('data', info.previosName);
                    $http({
                      url: '/jobFinder/uploadTransportImage',
                      method: 'POST',
                      data: fd,
                      transformRequest:angular.identity,
                      headers:{'Content-Type':undefined}
                    }).then(function(response){
                      if($scope.languageKey=='TG'){
                       $scope.reactionInfo="ብዓወት ተመስሪሑ ኣሎ!!";
                       $scope.uploadVehicleImageDisabled=true;
                      }else if($scope.languageKey=='NL'){
                          $scope.reactionInfo="Met succes gedaan!!"
                          $scope.uploadVehicleImageDisabled=true;
                      }else{
                         $scope.reactionInfo="Done successfully!!"
                         $scope.uploadVehicleImageDisabled=true;
                      }

                    }, function(response) {
                        $scope.error = response.statusText;
                    });
                  }

            }
                  $scope.showTransportRegistrationArea=function(){
                    $scope.showTransportRegistration=!$scope.showTransportRegistration;
                    $scope.showTransportSearch=!$scope.showTransportSearch;
                  }
                  $scope.sharedData = srvShareData.getData();
                  if($state.$current.name==='transportHomePage'){
                  }else if($state.$current.name==='transport'){
                     $scope.sharedDataUserName=$scope.sharedData[0];
                     $scope.userId=$scope.sharedDataUserName[0]
                     if($scope.userId==undefined){
                      $state.go('login')
                     }else{
                          $scope.userFullName=$scope.sharedDataUserName[1];
                          $scope.photo=$scope.sharedDataUserName[2]
                          $scope.clientId=$scope.sharedDataUserName[3]
                          $scope.professionalId=$scope.sharedDataUserName[4]
                          $scope.Authenticate=$scope.sharedDataUserName[0]
                          $scope.languageKey=$scope.sharedDataUserName[7];
                          $scope.country=$scope.sharedDataUserName[8];
                         $scope.livesIn=$scope.sharedDataUserName[9];
                         var data={}
                         data.token=$scope.Authenticate;
                         data.languageKey=$scope.languageKey
                         data.location="transporttype";
                          $http.post("/checkPayment",data).then(function(response){
                            $scope.transportOwnerOrderId=response.data[0].orderId;
                          })
                         $http.post('/journeyStatusChecker',data).then(function(response){
                           if(response.data.hasOwnProperty('notRegisteredAsPassenger')){
                           }else{
                             if(response.data.hasOwnProperty('passengerId')){
                              $scope.passengerId=response.data.passengerId;
                              //getMyInfoAsPassenger();
                              if(response.data.hasPassengerRequests=='yes'){
                                $scope.hasPassengerRequests='yes'
                              }else{
                                 $scope.hasPassengerRequests='no'
                              }
                             }else if(response.data.hasOwnProperty('currentOwnertransportId')){
                              $scope.currentOwnertransportId=response.data.currentOwnertransportId
                               if(response.data.hasTransportOwnerBeenRequested=='yes'){
                                 $scope.hasTransportOwnerBeenRequested='yes'
                               }else{
                                $scope.hasTransportOwnerBeenRequested='no'
                               }
                             }
                           }
                         })
                       }
                  }
                 function getTransportFromWebCollection(){
                       var transportInfo={}
                        transportInfo.webCollectionId='transport';
                        transportInfo.languageKey=$scope.languageKey
                        alertService.getWebCollections(transportInfo).then(function(response){
                             $scope.transports=response.data
                        })
                  }
                  $scope.changeTransport=function(id,transportChoosed){
                    $scope.transportIdAtWebCollections=id
                   $scope.transportChoosedFromSearchForm=transportChoosed;
                  }
              //  getCities();
                function codeEmpty(){
                  if($scope.code==undefined){
                    if($scope.languageKey=='TG'){
                      alert("ሓበሬታ፥ሓበሬታኹም ስለዘመሓየሽኩሞ ፣መጓዓዝያ መሪጽኩም ነርኩም ተኾይንኩም፣ ከምባሓዲሽ ክትመርጹ ኣለኩም።")
                    }else{
                      alert("Take care! your previous transport selection is not  working now anymore, unless you select it again at your next step if necessary for you.")
                    }
                  }
                }
                $scope.travelByAirPlane=function(){
                  $scope.airPlaneJourney=!$scope.airPlaneJourney
                  $scope.travelInfo=!$scope.travelInfo
                }
                $scope.backtoLandTransport=function(){
                   $scope.airPlaneJourney=!$scope.airPlaneJourney
                   $scope.travelInfo=!$scope.travelInfo
                }
          //save information of travelers like traveller name,email,from city ,to city
           $scope.contactTransportSubmition=function(){
                  data.id=$scope.passengerId
                  data.transportChoosed=$scope.transportIdAtWebCollections
                  data.fromPlace=$scope.fromCityAtTravellerRegistration
                  data.toPlace=$scope.toCityAtTravellerRegistration
                  var convertedDate=$filter('date')($scope.passengerTravelDate, "yyyy-MM-dd")
                  data.date=convertedDate
                  data.telephone=$scope.telephone
                  data.code="noCode"
                  data.fromTime=$scope.fromTime;
                 if($scope.passengerId===undefined){
                     $http.post('/jobFinder/contactinfo',data).then(function(response){
                      if($scope.languageKey=='TG'){
                          $scope.result="ተመዝጊብኩም ኣለኹም."
                      }else if($scope.languageKey=='NL'){
                           $scope.result="Succesvol geregistreerd."
                      }else{
                           $scope.result="Registered successfully."
                      }
                      $scope.inseteddataId=response.data
                    })
                  }else{
                    $http.post('/jobFinder/updatePassenger',data).then(function(response){
                       if($scope.languageKey=='TG'){
                           $scope.result="ሓበሬታኹም ተማሓይሹ ኣሎ።"
                      }else if($scope.languageKey=='NL'){
                           $scope.result="succesvol geupdatet."
                      }else{
                           $scope.result="updated successfully."
                      }
                    })
                  }

            }
            function transportFieldController(fromPlace,toPlace){
              if(fromPlace==undefined){
                if($scope.languageKey=='TG'){
                  $scope.transportFieldControllerInfo="ካብ ትብገስሉ ከተማ ምረጹ።እዚ ጽሑፍ እዚ ዋላ ስም ናይቲ ቦታ ምስ ጸሓፍኩም ይረኣየኩም ተሊዩ፣እቲ ጽሒፍኩሞ ዘለኹም ስም ከምበሓዲሽ ብምጽሓፍ ካብቶም ዝመጽኹም ምርጫታት በቲ ጽሑፍኩም መሰረት ምረጹ።"
                }else if($scope.languageKey=='NL'){
                   $scope.transportFieldControllerInfo="selecteer uit de stad, als dit bericht verschijnt terwijl je de naam van de plaats hebt geschreven, herschrijf dan de naam en selecteer uit de lijst. We raden je aan om uit de lijst te kiezen. gewoon schrijven op de doos is niet genoeg "
                }else{
                 $scope.transportFieldControllerInfo="select from city, if this message appearce while you have writen name of the place, please rewrite the name and select from the lists.We recommend you to select from list.simply writing name on the box is not enough."
                }

              }else if(toPlace==undefined){
                 if($scope.languageKey=='TG'){
                  $scope.transportFieldControllerInfo="ናብ ትኸድሉ ከተማ ምረጹ።እዚ ጽሑፍ እዚ ዋላ ስም ናይቲ ቦታ ምስ ጸሓፍኩም ይረኣየኩም ተሊዩ፣እቲ ጽሒፍኩሞ ዘለኹም ስም ከምበሓዲሽ ብምጽሓፍ ካብቶም ዝመጽኹም ምርጫታት በቲ ጽሑፍኩም መሰረት ምረጹ።"
                }else if($scope.languageKey=='NL'){
                   $scope.transportFieldControllerInfo="selecteer naar de stad, als dit bericht verschijnt terwijl je de naam van de plaats hebt geschreven, herschrijf dan de naam en selecteer uit de lijst. We raden je aan om uit de lijst te kiezen. gewoon schrijven op de doos is niet genoeg "
                }else{
                 $scope.transportFieldControllerInfo="select to city, if this message appearce while you have writen name of the place, please rewrite the name and select from the lists.We recommend you to select from list.simply writing name on the box is not enough."
                }
              }else{
                  $scope.transportFieldControllerInfo=""
              }
            }
           $scope.getTransportOwnerInfo=function(){
             if($scope.currentOwnertransportId===undefined){
              $scope.transportImage=false;
             }else{
               $scope.transportImage=true;
             }
              getTransportId();
           }
           $scope.changeTransportType=function(){
            $scope.transportChoosed=null
           }
           function getTransportId(){
             $http.post('/jobFinder/getOwnTransportInfo',data).then(function(response){
                   $scope.myTransportData=response.data;
                   if(response.data.length===0){
                   }else{
                     $scope.currentOwnertransportId=response.data[0].id;
                     $scope.transportIdAtWebCollections=response.data[0].transportTypeId
                     $scope.transportChoosed=response.data[0].type
                     $scope.fromCityAtOwnerRegistration=response.data[0].fromPlace;
                     $scope.toCityAtOwnerRegistration=response.data[0].toPlace;
                     $scope.transportDate=new Date(response.data[0].date);
                     $scope.fromTime=response.data[0].fromTime;
                     $scope.toTime=response.data[0].toTime;
                     $scope.numberOfSeats=response.data[0].numberOfSeats;
                     $scope.additionalInfo=response.data[0].additionalInfo;
                     $scope.telephone=response.data[0].telephone;
                     $scope.transportPhto=response.data[0].photo;
                   }
             })
           }
           $scope.sendMeEmail=function(){
              var data={};
              data.userId=$scope.userId;
              data.from="transporttype"
              $http.post('/remindMeLater',data).then(function(response){
                if($scope.languageKey=='TG'){
                  $scope.reminderResult="የቐንየልና፣ ስራሕ ኣብዚጀመርናሉ ናይ መዘኻኸሪ ኢመይል ክንሰደልኩም ኢና።"
                }else if($scope.languageKey=='NL'){
                  $scope.reminderResult="Heel erg bedankt voor het laten weten om u eraan te herinneren wanneer we met ons werk beginnen."
                }else{
                  $scope.reminderResult="Thank you somuch for let us know to remind you when we start our work."
                }
              })
          }
     //save information of transport owner like owner name,active time, from place ,to place
            $scope.ownerSubmit=function(){
                  var toPlace=$scope.selectedToCity;
                  var fromPlace=$scope.selectedFromCity;
                  var ownerDate=$scope.ownerDate;

                  data.id=$scope.currentOwnertransportId;
                  data.transportChoosed=$scope.transportIdAtWebCollections;
                  data.fromPlace=$scope.fromCityAtOwnerRegistration;
                  data.toPlace=$scope.toCityAtOwnerRegistration;
                   var convertedDate=$filter('date')($scope.transportDate, "yyyy-MM-dd")

                  data.date=convertedDate;
                  data.fromTime=$scope.fromTime;
                  data.toTime=$scope.toTime;
                  data.numberOfSeats=$scope.numberOfSeats;
                  data.additionalInfo=$scope.additionalInfo;
                  data.telephone=$scope.telephone;
                  transportFieldController(fromPlace,toPlace);
                    if($scope.transportFieldControllerInfo===""){
                      if($scope.currentOwnertransportId===undefined){
                        $http.post('/jobFinder/transOwnerInfo',data).then(function(response){
                           $scope.currentOwnertransportId=response.data.insertId
                           $scope.transportImage=true;
                           if($scope.languageKey=='TG'){
                                $scope.transportSavedSuccefully="ተመዝጊብኩም ኣለኹም."
                            }else if($scope.languageKey=='NL'){
                                 $scope.transportSavedSuccefully="Succesvol geregistreerd."
                            }else{
                                 $scope.transportSavedSuccefully="Registered successfully."
                            }
                          });
                     }else{
                      $http.post('/jobFinder/updateTransportOwner',data).then(function(response){
                         if($scope.languageKey=='TG'){
                           $scope.transportSavedSuccefully="ሓበሬታኹም ተማሓይሹ ኣሎ።"
                          }else if($scope.languageKey=='NL'){
                               $scope.transportSavedSuccefully="succesvol geupdatet."
                          }else{
                               $scope.transportSavedSuccefully="updated successfully."
                          }
                      })
                     }
                    }else{

                    }

              }

            $scope.fillFromCity = function(){
                var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.fromCitySearchFormAtTransport);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }
              $scope.fillToCity = function(){
                 var data=null
                   var dataPromise = cityNetherlandRetriever.getCity($scope.toCitySearchFormAtTransport);
                     $scope.datas=null;
                     dataPromise.then(function(data){
                     $scope.cityDatas = data;
                    });
              }

             $scope.fillFromCityAtTravellerRegistration=function(){
                var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.fromCityAtTravellerRegistration);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }
             $scope.fillToCityAtTravellerRegistration=function(){
                var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.toCityAtTravellerRegistration);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }
             $scope.fillFromCityAtOwnerRegistration=function(){
                var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.fromCityAtOwnerRegistration);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }
             $scope.fillToCityAtOwnerRegistration=function(){
                var data=null
                  var dataPromise = cityNetherlandRetriever.getCity($scope.toCityAtOwnerRegistration);
                    $scope.datas=null;
                    dataPromise.then(function(data){
                    $scope.cityDatas = data;
                   });
             }

             $scope.cityFromSelection = function(suggestion){
               $scope.selectedFromCity=suggestion
             }
             getTransportFromWebCollection();
             $scope.cityToSelection = function(suggestion){
               $scope.selectedToCity=suggestion
             }
            $scope.request=function(transportId,transportTypeId,transportChoosed,fromPlace,toPlace,date,toUserId,room){
                        var data2={}
                        data2.fromUserId=$scope.userId;
                        data2.toUserId=toUserId;
                        data2.message="would like to join your journey";
                        data2.userIs="passenger";
                        data2.room=room;
                        data2.transportId=transportId;
                        data2.passengerId=$scope.passengerId;
                        data2.date=date
                        data2.languageKey=$scope.languageKey;
                    if($scope.passengerId==undefined){
                      if($scope.languageKey=='TG'){
                         alert("መጀመርያ ከም ተጉዓዝቲ ተመዝገቡ ብድሕሪኡ ናብ ኣጓዓዝቲ ክትሓቱ ትኽእሉ።")
                      }else if(languageKey=='NL'){
                          alert("Om te kunnen verzoeken, moet u als passagier geregistreerd zijn. Registreer u nu")
                      }else{
                        alert("Inorder to request ,you should  be registered as passenger.Please register now.")
                      }
                    }else{
                       socket.emit('sendprivatechat', data2);
                        socket.on('messageBackToSelf',function(data){
                           $scope.requestButtonDisabled=true;
                           if($scope.languageKey=='TG'){
                             $scope.result="ሕተኹም ብ ግቡእ ተሰዲዱ ኣሎ።መልሲ ክስደደልኩም ኢዩ ተጸበዩ።"
                           }else if($scope.languageKey=='NL'){
                              $scope.result="Verzoek is verzonden. Wacht tot het antwoord terugkomt"
                           }else{
                              $scope.result="Request has been sent.Please wait till answer comes."
                           }

                        })
                    }

            }
             $scope.moneyTransferRequest=function(){
               var data={}
               data.message=$scope.moneyTransferRequestMessage
               if(data.message!==undefined){
                 socket.emit('moneyTransfer',data.message)
                 socket.on('moneyTransfer',function(data){
                    confirmitionMessage();
                  })
               }else{
                 fillTelephone();
               }

             }
             function confirmitionMessage(){
               if($scope.languageKey=='TG'){
                 $scope.requestReply="ርክብ ብምግባርኩም ኣዚና ነመስግን።መልአኽትኹም ብግቡእ ተሰዲዱ ኣሎ ድሕሪ ቅሩብ ግዜ ክንረኽበኩም ኢና።"
               }else if($scope.languageKey=='NL'){
                 $scope.requestReply="Veel dank! Uw bericht is succesvol verzonden, wij nemen spoedig contact met u op."
               }else{
                 $scope.requestReply="Thank you verymuch! Your message has been sent succefully,we will contact you very soon.";
               }
             }
             function fillTelephone(){
               if($scope.languageKey=='TG'){
                 $scope.requestReply="መጀመርያ መልአኽትኹም ጸሓፉ እቲ መልእኽቲ ተለፎንኩም ዝሓዘ ክኸውን ኣለዎ መታን ብ ተለፎንኩም ክንረኽበኩም።መልእክቲ ምጽሓፍ ምስ ወዳእኩም ኣብዚ ዝጠወቅኩሞ(ስደድ ዝብል ዘሎ መልጎም) ጠውቑ።"
               }else if($scope.languageKey=='NL'){
                 $scope.requestReply="schrijf een bericht inclusief uw telefoon alstublieft."
               }else{
                 $scope.requestReply="write message including your telephone please.";
               }
             }
             $scope.closeChat=function(){
               $scope.chatbox=false;
             }
             $scope.airTravel=function(){
               var data={}
               data.message=$scope.airTravelMessage;
               if(data.message!==undefined){
                 socket.emit('airTravel',data.message)
                 socket.on('airTravel',function(data){
                      confirmitionMessage();
                  })
               }else{
                fillTelephone();
               }

             }
              //a detail lookup if someone is going to travel to the same place you go
      $scope.detailTravelInfo=function(){
            var selectedDate = new Date($scope.dateAtSearching)
            var selectedDay = selectedDate.getDate();
            var selectedMonth = selectedDate.getMonth()+1; //January is 0!
            var selectedYear = selectedDate.getFullYear();
            var userSelectedDate=selectedDay+","+selectedMonth+","+selectedYear
            todayDate=new Date(Date.now())
            todayDay=todayDate.getDate();
            todayMonth=todayDate.getMonth()+1;
            todayYear=todayDate.getFullYear();
           var today=todayDay+","+todayMonth+","+todayYear
              if(todayYear==selectedYear){
                  if(todayMonth>selectedMonth){
                    if($scope.languageKey=='TG'){
                      $scope.requestReply="ኣብ ምምራጽ ወርሒ ተጋጊኹም ኣለኹም።እዚ ዘለናዮ ወርሒ ወይ ካብዚ ወርሒ ዚ ንንየው ዘለዉ ኣዋርሕ ክንመርጽ ኣለና."
                    }else if($scope.languageKey=='NL'){
                     $scope.requestReply="maand moet deze maand of volgende maand zijn vanaf deze maand."
                    }else{
                      $scope.requestReply="month has to be this month or next months from this month."
                    }

                  }else{
                    if(todayDay>selectedDay){
                       if($scope.languageKey=='TG'){
                          $scope.requestReply="ኣብ ምምራጽ መዓልቲ ተጋጊኹም ኣለኹም።እዚ ዘለናዮ መዓልቲ ወይ ካብ ሎምዓልቲ ንንየው ዘለዉ መዓልታት ክንመርጽ ኣለና."
                        }else if($scope.languageKey=='NL'){
                         $scope.requestReply="Dag moet deze dag of volgende dagen zijn vanaf deze dag."
                        }else{
                          $scope.requestReply="month has to be this month or next months from this month."
                        }
                    }else{
                      getTravelInfo();
                      getTransport();
                    }
                  }
              }else{
                 if($scope.languageKey=='TG'){
                      $scope.requestReply="ዝምረጽ ዓመት እዚ ዘለናዮ ዓመት ክኸውን ኣለዎ።"
                    }else if($scope.languageKey=='NL'){
                     $scope.requestReply="Een geselecteerd jaar moet dit jaar zijn."
                    }else{
                      $scope.requestReply="A selected year has to be this year"
                    }
              }
      }
        function getTravelInfo(){
                var data={};
                var convertedDate=$filter('date')($scope.date, "yyyy-MM-dd")
                data.toConvert=$scope.date;
                data.date=$scope.dateAtSearching
                data.fromPlace=$scope.fromCitySearchFormAtTransport
                data.toPlace=$scope.toCitySearchFormAtTransport
                data.transportChoosed=$scope.transportChoosedFromSearchForm
                data.languageKey=$scope.languageKey;
                if(data.date==undefined || data.fromPlace==undefined || data.toPlace==undefined || data.transportChoosed==undefined){
                  if($scope.languageKey=='TG'){
                    $scope.requestReply="ኩሎም ዝምልኡ ቦታታት ምልእዎም። ዕለት፣ካብ፣ናብ፣ብ   ዝብሉ ዘለዉ ቦታታት ብግቡእ ምልእዎም ብድሕሪኡ ኣብ ጉዕዞ ተዓዘብ ዝብል ጠውቕ።"
                    $scope.numberOfTravellersToThisPlace='';

                  }else if($scope.languageKey=='NL'){
                    $scope.requestReply="Vul alle velden in alstublieft."
                     $scope.numberOfTravellersToThisPlace='';

                  }else{
                    $scope.requestReply="Fill all fields please.";
                     $scope.numberOfTravellersToThisPlace='';

                  }
                }else{
                  $http.post('/jobFinder/transportLookUp',data).then(function(response){
                    $scope.numberOfTravellersToThisPlace=response.data
                    if($scope.numberOfTravellersToThisPlace.length==0){
                      if($scope.languageKey=='TG'){
                        $scope.requestReply="ኣብዚ ዝመረጽኩሞ ቦታን ዕለትን ዝተመዝገበ ተጓዓዛይ የለን።ስለዚ ቀዳሞት ተጎዓዝቲ ንኽትኾኑ ተመዝገቡ።ዝኾነ ዘይተረዳኣኹም ነገር እንተሃልዩ ኣብ ልዕሊ መልእኽቲ ብምስዳድ ክትረኽቡናን ዝያዳ ሓበሬታ ክትረኽቡን ትኽእሉ።"
                        $scope.passengersList=false;

                         $scope.numberOfTravellersToThisPlace='';
                      }else if($scope.languageKey=='NL'){
                        $scope.requestReply="Geen passagiers in dit gebied nog, wees de eerste om te registreren als passagier van de datum in dit gebied."
                        $scope.passengersList=false;
                         $scope.numberOfTravellersToThisPlace='';

                      }else{
                        $scope.requestReply="No passengers in this area yet, be the first  to register as passenger of the date at this area."
                        $scope.passengersList=false;
                         $scope.numberOfTravellersToThisPlace='';

                      }

                    }else{
                      $scope.requestReply=""
                      $scope.passengersList=true;

                    }
                  })

                }
        }
        // getTransport();
        function getTransport(){
          var data={}
          var convertedDate=$filter('date')($scope.dateAtSearching, "yyyy-MM-dd")
               data.toConvert=convertedDate;
                data.date=convertedDate;
                data.fromPlace=$scope.fromCitySearchFormAtTransport
                data.toPlace=$scope.toCitySearchFormAtTransport
                data.transportChoosed=$scope.transportIdAtWebCollections;
                data.languageKey=$scope.languageKey;
             $http.post('/jobFinder/getTransport',data).then(function(response){
                $scope.readyTransports=response.data;
                if($scope.readyTransports.length==0){
                  if($scope.languageKey=='TG'){
                    $scope.requestReply="ኣብዚ ዝመረጽኩሞ ቦታን ዕለትን ዝተመዝገባ መጓዓዝያ የለዋን።መጓዓዝያ ተልያትኩም ከተመዝግብዋ ትኽእሉ ኢኹም።"
                    $scope.readyTransportsList=false;
                    $scope.readyTransports=''
                  }else if($scope.languageKey=='NL'){
                    $scope.requestReply="Geen transport geregistreerd in dit gebied, als eerste om een voertuig te registreren"
                    $scope.readyTransportsList=false;
                    $scope.readyTransports=''
                  }else{
                    $scope.requestReply="No transport registered at this area yet,be the first to register a vehicle."
                    $scope.readyTransportsList=false;
                    $scope.readyTransports=''
                  }
                }else{
                  $scope.requestReply=""
                  $scope.readyTransportsList=true;
                }
            })
        }
        $scope.letsChat=function(room,toName,toUserId){
           $scope.room=room;
           $scope.toName=toName;
           $scope.toUserId=toUserId;
           $scope.chatbox=true;
        }
        $scope.closeChat=function(){
            $scope.chatbox=false;
        }
         $scope.clientMessageToTransportOwner=[]
            socket.on('clientMessageBackToHimSelf',function(data){
                var user={};
                user.message=data;
                user.date=Date.now();
                user.username="me"
                $scope.clientMessageToTransportOwner.push(user)
              })
            socket.on('updateprivatechat',function(data){
                var user={};
                user.message=data;
                user.date=Date.now();
                user.username="client"
                $scope.clientMessageToTransportOwner.push(user)
                if( $scope.chatbox==false){
                   $scope.chatbox=true
                }else{
                  $scope.chatbox=true
                }
            })
         $scope.sendMessageBetweenClientAndSupplier=function(message){
              var data={}
              data.room=$scope.room;
              data.message=message;
              data.toUserId=$scope.toUserId;
              socket.emit('sendprivateMessageToTransportOwner', data);

              $scope.message="";
          }
     //get all requests if they selected my vehicle
        $scope.getAllRequests=function(){
         getAllRequestsFromServer();
        }
        function getAllRequestsFromServer(){
           var transportInfo={}
           $scope.allRequests=""
          transportInfo.transportId=$scope.currentOwnertransportId;
          transportInfo.languageKey=$scope.languageKey;
          $http.post('/getPassengerRequests',transportInfo).then(function(response){
             if(response.data.length==0){
                 noRequesteToTransportOwnerCaller();
             }else{
                 $scope.allRequests=response.data
             }
          })
        }
        function noRequesteToTransportOwnerCaller(){
          if($scope.languageKey=='TG'){
            $scope.noRequesteToTransportOwner="ይቕረታ! ክሳብ ሕጂ ዝሓተተ የልን"
          }else if($scope.languageKey=='NL'){
           $scope.noRequesteToTransportOwner="je had nog geen vraag van reizigers"
          }else{
            $scope.noRequesteToTransportOwner="you did not have any request from travellers yet"
          }
        }
        $scope.acceptRequest=function(passengerId,passengerUserId,requestId,room){
          var data2={}
          data2.passengerId=passengerId;
          data2.transportId=$scope.currentOwnertransportId;
          data2.passengerUserId=passengerUserId;
          data2.fromUserId=$scope.userId;
          data2.toUserId=passengerUserId;
          data2.requestId=requestId;
          data2.room=room;
          data2.message="accepted to travell";
          data2.location="transporttype";
          data2.ownerTransportDate=new Date($scope.transportDate);
           socket.emit('sendprivatechat', data2);
           socket.on('messageBackToSelf',function(data){
            if($scope.languageKey=='TG'){
              $scope.result="መልሲ ናይ ተቐባልነትኩም ናብ ሓታታይ ተሰዲዱ ኣሎ።"
            }else if($scope.languageKey=='NL'){
             $scope.result="Aanvaarding van het verzoek is verzonden naar de aanvrager."
            }else{
              $scope.result="Acceptance of the request has been sendt to the requester."
            }
             $scope.acceptedRequestButtonDisabled=true;
            // getAllRequestsFromServer();
            })
        }
        $scope.getAllAcceptedRequests=function(){
          var acceptedRequests={}
          acceptedRequests.transportId=$scope.currentOwnertransportId;
          acceptedRequests.languageKey=$scope.languageKey;
          $http.post('/getAcceptedRequestsData',acceptedRequests).then(function(response){
            if(response.data.length===0){
              noRequestedAcceptedByTransportOwnerCaller();
            }else{
              $scope.noRequestedAcceptedByTransportOwner=""
              $scope.acceptedRequestsData=response.data
            }
          })
        }
        function noRequestedAcceptedByTransportOwnerCaller(){
          if($scope.languageKey=='TG'){
            $scope.noRequestedAcceptedByTransportOwner='ዝተቐበልኩሞ የለን'
          }else if($scope.languageKey=='NL'){
             $scope.noRequestedAcceptedByTransportOwner="je hebt nog geen aanvraag geaccepteerd"
          }else{
              $scope.noRequestedAcceptedByTransportOwner="you did not accept any request yet"
          }
        }
        $scope.whoAcceptMyRequest=function(){
          requestAcceptance();
        }
        function noAcceptanceYetCaller(){
          if($scope.languageKey=='TG'){
              $scope.noAcceptanceYet="ይቕረታ ! ንሕተኹም ዝተቐበለ የለን።"
          }else if($scope.languageKey=='NL'){
           $scope.noAcceptanceYet="Niemand heeft je verzoeken nog geaccepteerd"
          }else{
            $scope.noAcceptanceYet="No one accepted your requests yet."
          }
        }
        function requestAcceptance(){
          var myInfo={}
          myInfo.passengerId=$scope.passengerId;
          myInfo.approved=$scope.approved;
          myInfo.code=$scope.code;
          myInfo.languageKey=$scope.languageKey;
          $http.post('/getWhoAcceptedMe',myInfo).then(function(response){
            $scope.whoAcceptedMe=response.data
            if($scope.whoAcceptedMe.length==0){
              requestButtonDisabled=true;
              noAcceptanceYetCaller();
            }else{
              requestButtonDisabled=false;
              $scope.noAcceptanceYet=""
            }
          })
        }
      //  getMyInfoAsPassenger();
        function getMyInfoAsPassenger(){
          $http.post('/jobFinder/getMyInfo',data).then(function(response){
            $scope.myinfodata=response.data;
            if(response.data.length==0){
            }else{
              $scope.passengerId=response.data[0].id
              $scope.telephone=response.data[0].telephone;
              $scope.passengerTravelDate=new Date(response.data[0].date);
              $scope.fromTime=response.data[0].fromTime;
              $scope.fromCityAtTravellerRegistration=response.data[0].fromPlace;
              $scope.toCityAtTravellerRegistration=response.data[0].toPlace;
              $scope.transportChoosed=response.data[0].transportChoosed;
              $scope.transportIdAtWebCollections=response.data[0].choosedTransportId;
              $scope.code=response.data[0].code;
              $scope.approved=response.data[0].approved;
              $scope.passengerRemarks=response.data[0].remarks
            }
          })
        }
        $scope.myInfoAsPassenger=function(){
          getMyInfoAsPassenger();
        }
        $scope.update=function(){
           data.id=$scope.passengerId
            data.telephone=$scope.telephone
            data.date=$scope.date
            data.fromPlace=$scope.fromCity
            data.toPlace=$scope.toCity
            data.transportChoosed=$scope.transportIdAtWebCollections
            data.code=$scope.code;
            data.fromTime=$scope.fromTime;
            if($scope.languageKey=='TG'){
               $http.post('/jobFinder/updatePassenger',data).then(function(response){
                 $scope.result="passenger has been updated successfully.Thank you!"
              })
             }else{
               $http.post('/jobFinder/updatePassenger',data).then(function(response){
                  $scope.result="passenger has been updated successfully.Thank you!"
              })
             }
        }
        // $scope.backToDailyLifeHomePage=function(){
        //   $window.location="/jobFinder/dailyLifeHappenings/logedIn/"+$scope.userId
        // }
      });
//work transactions
     myApp.controller('workTransactionCtrl',function($scope,$http,$state,srvShareData,$window,$location,alertService,socket,$translate){
          //public declarations
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.Authenticate=$scope.sharedDataUserName[5];
            $scope.languageKey=$scope.sharedDataUserName[7];
            $scope.clientId=$scope.sharedDataUserName[3];
            $scope.professionalId=$scope.sharedDataUserName[4];
            $scope.userId=$scope.sharedDataUserName[0];
            $scope.saved="";
            // $scope.changeCategory = function(id){
            //   $scope.category = id;
            // }
            function selectedPage(id){
              $scope.category = id;
            }
            selectedPage(2);
            $scope.sendMeEmail=function(){
              var data={};
              data.userId=$scope.userId;
              data.from="jobPost"
              $http.post('/remindMeLater',data).then(function(response){
                if($scope.languageKey=='TG'){
                  $scope.reminderResult="የቐንየልና፣ ስራሕ ኣብዚጀመርናሉ ናይ መዘኻኸሪ ኢመይል ክንሰደልኩም ኢና።"
                }else if($scope.languageKey=='NL'){
                  $scope.reminderResult="Heel erg bedankt voor het laten weten om u eraan te herinneren wanneer we met ons werk beginnen."
                }else{
                  $scope.reminderResult="Thank you somuch for let us know to remind you when we start our work."
                }
              })
          }
            if($state.$current.name=='workTransactions' || $state.$current.name=='clientRegistration' || $state.$current.name=='professionRegistration'){
               if($scope.userId==null){
                 $state.go('login')
               }
            }
           
                  if($scope.clientId!==null){
                       $scope.disabledClient=true;
                       $scope.disabledProfessional=false;
                       $scope.disablingProfessionalRegistration=true;
                        $scope.disablingClientRegistration=false;
                   }else if($scope.professionalId!==null){
                          $scope.disabledProfessional=true;
                           $scope.disabledClient=false;
                           $scope.disablingClientRegistration=true;
                            $scope.disablingProfessionalRegistration=false;
                   }else{
                     $scope.disabledProfessional=true;
                     $scope.disabledClient=true;
                      $scope.disablingProfessionalRegistration=false;
                       $scope.disablingClientRegistration=false;
                   }
                    if($scope.languageKey=='TG'){
                        $scope.emploerPlaceHolder="ስራሕ ዘለዎም ሰባት ርኸብ";
                        $scope.emplyeePlaceHolder="ክሰርሑ ዝኽእሉ ሰራሕተኛታት ርኸብ";
                    }else if($scope.languageKey=='NL'){
                        $scope.emploerPlaceHolder="werkgever"
                        $scope.emplyeePlaceHolder="werknemer"
                    }else{
                      $scope.emploerPlaceHolder="Emplyer";
                      $scope.emplyeePlaceHolder="Emplyee";
                    }
             var data={}
             data.token=$scope.Authenticate;
             data.location="clients";
            $http.post("/checkPayment",data).then(function(response){
                $scope.workClientOrderId=response.data[0].orderId;
            })
            $scope.searchSingleProfessional=function(){
              var data={}
              data.searchProfessionalData=$scope.searchProfessionalData;
              data.languageKey=$scope.languageKey
              if(data.searchProfessionalData.length>3){
                $http.post('/getProfessionalPerSearch',data).then(function(response){
                  $scope.listOfTranslators=response.data
                  if(response.data.length==0){
                    $scope.languageKey=$translate.use();
                    if($scope.languageKey=='TG'){
                      $scope.professionalSearchResults="ይቕረታ፣በዚ ስም ሞያዚ ዝተረኽበ የለን።"
                    }else if($scope.languageKey=='NL'){
                      $scope.professionalSearchResults="Geen zoekresultaten gevonden"
                    }else{
                      $scope.professionalSearchResults="No search result found"
                    }
                  }else{
                    $scope.professionalSearchResults=""
                  }
                })
              }
            }
           //list of all professionals
                function listOfAllprofessional(){
                       data.profession=$scope.showProfessionals,
                       data.livesIn=$scope.showProfessionalsLivesIn,
                       data.workingSession=$scope.showProfessionalsWorkPeriod
                       data.languageKey=$scope.languageKey;
                  alertService.loadAllProfessionals(data).then(function(response){
                    $scope.listOfTranslators=response.data
                  })
                }
                listOfAllprofessional();
                $scope.professionalMotivation=function(id){
                  //$scope.professionalList=!$scope.professionalList;
                  $scope.motivation=""
                  var professionalData={}
                  professionalData.id=id;
                  professionalData.languageKey=$scope.languageKey
                  $http.post('/getProfessionalMotivation',professionalData).then(function(response){
                    $scope.motivation=response.data[0].remarks
                    $scope.professionalList=!$scope.professionalList;
                  })
                }
                $scope.clientRegistration=function(){
                  $window.location.href = '/jobFinder/clientRegistrationForm/logedIn/'+$scope.userId;
                }
         //sending request to professional
           $scope.sendRequestToProfessionalOrClient=function(toUserId,messageBox,room){
                  var data={};
                  if($scope.clientId!==null){
                      data.message="has a job for you";
                      data.userIs="clients"
                  }else if($scope.professionalId!==null){
                    data.message="has applied for your job";
                     data.userIs="professional"
                  }
                  data.photo=$scope.photo
                  data.fromUserFullName=$scope.userFullName;
                  data.toUserId=toUserId;
                  data.fromUserId=$scope.userId;
                  data.room=room;

                  socket.emit('sendprivatechat', data);
                  socket.on('messageBackToSelf', function (data) {
                    if($scope.languageKey=='TG'){
                             alertService.handelWorkInvitatioTig();
                    }else{
                       alertService.handelWorkInvitation();
                    }
                  });
           }
           $scope.sendFriendRequestToProfessionalOrClient=function(toUserId,messageBox,room){
                      var data={}
                      data.message="Friend Request"
                      data.photo=$scope.photo
                      data.fromUserFullName=$scope.userFullName;
                      data.toUserId=toUserId;
                      data.room=room;
                      data.fromUserId=$scope.userId;
                      if($scope.clientId!==null){
                            data.userIs="client"
                            data.toUserIs="professional"
                        }else if($scope.professionalId!==null){
                           data.userIs="professional";
                           data.toUserIs="client"
                        }
                      socket.emit('sendprivatechat', data);
                       socket.on('messageBackToSelf', function (data) {
                        if(data=='alreadySent'){
                         if($scope.languageKey=='TG'){
                           document.getElementById("reactionAlert").innerHTML="ናብዚ ሰብ ዚ ቅድሚ ሕጂ ናይ ምሕዝነት ሕቶ ሰዲድኩም ኣለኹም።";
                         }else{
                           document.getElementById("reactionAlert").innerHTML="You have already send friend request to this person.";
                         }
                        }else{
                           if($scope.languageKey=='TG'){
                                     alertService.handelFriendRequestTig();
                            }else{
                               alertService.handelFriendRequest();
                            }
                        }
                      });
           }
           //sending messsage to professional
            $scope.sendMessageToProfessionalOrClient=function(toUserId,messageBox,room){
                 if(messageBox==undefined || messageBox==null || messageBox==''){
                   if($scope.languageKey=='TG'){
                      alert("መጀመርያ መልእኽትኹም ጸሓፉ።")
                   }else{
                    alert("Write a message first")
                   }
                 }else{
                   if($scope.clientId!==null){
                    $scope.userIs='client'
                   }else if($scope.professionalId!==null){
                    $scope.userIs='professional'
                   }else{
                    $scope.userIs='normalUser'
                   }
                   var data={}
                    data.message=messageBox
                    data.photo=$scope.photo
                    data.fromUserFullName=$scope.userFullName;
                    data.toUserId=toUserId;
                    data.room=room;
                    data.fromUserId=$scope.userId
                    data.userIs=$scope.userIs;
                    data.messageComesFrom="workTransaction"
                     if($scope.clientId!==null){
                          data.userIs="client"
                      }else if($scope.professionalId!==null){
                         data.userIs="professional"
                      }
                    socket.emit('sendprivatechat', data);
                    $scope.messageBox=""
                     socket.on('messageBackToSelf', function (data) {
                          $scope.saved="message has been sent";
                           if($scope.languageKey=='TG'){
                                     alertService.handelMessageSentTig()
                            }else{
                               alertService.handelMessageSent()
                            }
                     });
                 }


              }
              if($scope.languageKey=='TG'){
                $scope.searchProfessionalsPlaceHolder="ሰራሕተኛ ንምንዳይ ሞያ ኣብዚ ጸሓፉ";
                $scope.searchClientPlaceHolder="ስራሕ ዘለዎም ሰባት ንምንዳይ ትደልዮ ሞያ ጸሓፍ";
            }else if($scope.languageKey=='NL'){
                $scope.searchProfessionalsPlaceHolder="Zoek medewerker per beroep"
                $scope.searchClientPlaceHolder="Zoek werkgever van beroep"
            }else{
              $scope.searchProfessionalsPlaceHolder="Search employee by profession";
              $scope.searchClientPlaceHolder="Search employer by profession";
            }
            //post all clients
           function loadAllClient(){
               data.languageKey=$scope.languageKey
                alertService.loadAllClients(data).then(function(response){
                  $scope.allClientsDetails=response.data
                })
           }
           $scope.searchSingleClient=function(){
             var data={}
            data.languageKey=$scope.languageKey;
            data.searchClient=$scope.searchClient;
            if($scope.searchClient.length>3){
              $http.post('/searchSingleClient',data).then(function(response){
                $scope.allClientsDetails=response.data;
                if(response.data.length==0){
                  $scope.languageKey=$translate.use();
                  if($scope.languageKey=='TG'){
                    $scope.searchClientResults="ይቕረታ፣በዚ ዘእተኹሞ ሞያ  ዝተረኽበ የለን።"
                  }else if($scope.languageKey=='NL'){
                    $scope.searchClientResults="Neen resultaten gevonden"
                  }else{
                    $scope.searchClientResults="No results found"
                  }
                }else{
                  $scope.searchClientResults=""
                }
              })
            }
           
            
           }

           loadAllClient();
           $scope.getWorkDetails=function(id){
            $scope.showWorkDetails=!$scope.showWorkDetails
            $scope.showWorkDetailsOfClient=false;
             var clientInfo={}
             clientInfo.id=id;
             clientInfo.languageKey=$scope.languageKey;
             $http.post('/getClientWorkDetails',clientInfo).then(function(response){
               $scope.workDetails=response.data[0].workDetails;
             })
           }
           $scope.backToClientsList=function(){
              $scope.showWorkDetails=!$scope.showWorkDetails
           }
           $scope.backToProfessionalsList=function(){
             $scope.professionalList=!$scope.professionalList
           }
  });
//service...............................................................
      myApp.service('srvShareData', function($window) {
        var KEY = 'App.SelectedValue';
        //adding name and id of the user to the sessionStorage
        var addData = function(newObj) {
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            } else {
                mydata = [];
            }
            mydata=[]//clearing the array at every page load, other wise commet this to add things to the array at every page load
            mydata.push(newObj);
            $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
        };


        var getData = function(){
            var mydata = $window.sessionStorage.getItem(KEY);
            if (mydata) {
                mydata = JSON.parse(mydata);
            }
            return mydata || [];
        };
        var clearData=function(){
          var mydata = [];
          return mydata
        }


        return {
            addData: addData,
            getData: getData,
            clearData:clearData,

        };
    });
    myApp.service('candidateUser', function($window) {
      var KEY = 'App.candidateUser';
      //adding name and id of the user to the sessionStorage
      var addData = function(newObj) {
          var mydata = $window.sessionStorage.getItem(KEY);
          if (mydata) {
              mydata = JSON.parse(mydata);
          } else {
              mydata = [];
          }
          mydata=[]//clearing the array at every page load, other wise commet this to add things to the array at every page load
          mydata.push(newObj);
          $window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
      };
      var getData = function(){
          var mydata = $window.sessionStorage.getItem(KEY);
          if (mydata) {
              mydata = JSON.parse(mydata);
          }
          return mydata || [];
      };
      return {
          addData: addData,
          getData: getData

      };
    });
//adimn works
  myApp.controller('adminController',function($scope,$http,$state,srvShareData,alertService){
            $scope.sharedData = srvShareData.getData();
            $scope.sharedDataUserName=$scope.sharedData[0];
            $scope.userFullName=$scope.sharedDataUserName[1];
            $scope.photo=$scope.sharedDataUserName[2]
            $scope.Authenticate=$scope.sharedDataUserName[0]
            $scope.languageKey=$scope.sharedDataUserName[7];
            $scope.userId=$scope.sharedDataUserName[0]
            $scope.permission=$scope.sharedDataUserName[6];

            if($state.$current.name=='workList' || $state.$current.name=='admin'){
              if($scope.userId==undefined){
                $state.go('login')
              }else if($scope.permission!=='admin'){
                $state.go('homePage')
              }
            }
             var data={}
              data.token=$scope.Authenticate;
            $scope.loadPassengers=function(){
              var data={}
              data.passengers=$scope.passengers;
              data.permissions=$scope.permission
              if($scope.passengers==undefined){
                alert("enter telephone")
              }else{
                $http.post('/jobFinder/allPassengers',data).then(function(response){
                  $scope.allPassengers=response.data
                  if(response.data.length==0){
                    $scope.adminmessage=" no data found"
                  }
                })
              }

            }
            $scope.uploadWebCollectionPicture=function(){
              $scope.showWebCollectionPictureUploader=!$scope.showWebCollectionPictureUploader;
            }
            //load and crop post image and save it to database
            $scope.myImage='';
            $scope.myCroppedImage='';
            var handleFileSelect=function(evt) {
              var file=evt.currentTarget.files[0];
              var reader = new FileReader();
              reader.onload = function (evt) {
                $scope.$apply(function($scope){
                  $scope.myImage=evt.target.result;
                });
              };
              reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
            //upload the croped image profile
            $scope.uploadCropedImageAtWebCollection=function(){
              var mimeString = $scope.myCroppedImage.split(',')[0].split(':')[1].split(';')[0];
              // post the data part and decode it
              var dataString = window.atob($scope.myCroppedImage.split(',')[1]);
              var dataArray = [];
              for(var i = 0; i < dataString.length; i++)
              {
                dataArray.push(dataString.charCodeAt(i));
              }
              var imageData = new Blob([new Uint8Array(dataArray)], {type: mimeString});
              var fd = new FormData();
              var isThereImage=""
              if(imageData.size==1371){
                isThereImage="no"
              }else{
                isThereImage="yes"
              }
              fd.append('file', imageData);
             var info = {};
                     info.webCollectionAutoId=$scope.webCollectionAutoId
                     info.webCollectionId=$scope.webCollectionId
                     info.isThereImage=isThereImage;
                    fd.append('data', info.webCollectionAutoId);
                    fd.append('data', info.webCollectionId);
              if(isThereImage=='yes'){
                if($scope.webCollectionAutoId!==undefined){
                  $http({
                    url: '/uploadImageWebCollection',
                    method: 'POST',
                    data: fd,
                    transformRequest:angular.identity,
                    headers:{'Content-Type':undefined}
                  }).then(function(response){
                    $scope.showWebCollectionPictureUploader=!$scope.showWebCollectionPictureUploader;
                    $scope.adminmessage=response.data
                    $scope.doneSuccefully=response.data
                  }, function(response) {
                      $scope.error = response.statusText;
                  });
                }else{
                  alert("first save webcollection or if you need to update then select webcollection from the list")
                }
                
              }else{
                 alert("load image")
              }
        }
            $scope.getWebCollections=function(){
              $http.get('/webcollections').then(function(response){
                $scope.allWebCollections=response.data;
                if(response.data.length==0){
                  $scope.adminmessage=" no data found"
                }
              })
            }
            $scope.addWebCollection=function(){
              data.webCollectionId=$scope.webCollectionId
              data.english=$scope.english
              data.tigrina=$scope.tigrina
              data.dutch=$scope.dutch
              data.Authenticate=$scope.Authenticate
              $http.post('/addWebCollection',data).then(function(response){
                $scope.doneSuccefully=response.id+ "  has been succefully added"
                $scope.webCollectionAutoId=response.data.insertId
              })
            }
            $scope.updateWebCollection=function(){
              data.webCollectionAutoId=$scope.webCollectionAutoId;
              data.webCollectionId=$scope.webCollectionId
              data.english=$scope.english
              data.tigrina=$scope.tigrina
              data.dutch=$scope.dutch
              data.Authenticate=$scope.Authenticate
              $http.post('/updateWebCollection',data).then(function(response){
                $scope.doneSuccefully="updated succefully"
              })
            }
            $scope.editWebCollection=function(id,webCollectionId,english,tigrina,dutch){
              $scope.webCollectionAutoId=id
              $scope.webCollectionId=webCollectionId
              $scope.english=english
              $scope.tigrina=tigrina
              $scope.dutch=dutch
            }
            $scope.deleteWebCollection=function(){
              data.webCollectionAutoId=$scope.webCollectionAutoId
              $http.post('/deletWebCollectionId',data).then(function(response){
                $scope.doneSuccefully="deleted succefully"
              })
            }
            $scope.deleteExternalInfo=function(){
              $http.post('/deleteExternalDataInfo').then(function(response){
                alert("deleted successfully")
              })
            }
            $scope.loadTransportOwners=function(){
                var data={}
                data.permissions=$scope.permission
                data.transportOwner=$scope.transportOwner;
                if($scope.transportOwner==undefined){
                  alert("enter transport  where placeFrom")
                }else{
                   $http.post('/jobFinder/allTransportOwners',data).then(function(response){
                    $scope.allTransportOwners=response.data;
                    if(response.data.length==0){
                      $scope.adminmessage=" no data found"
                    }
                  })
                }

            }

    //post users
       function postusers(){
         var data={}
         data.permissions=$scope.permission;
           data.users=$scope.users;
           $http.post('/jobFinder/getAllusersToAdminPage',data).then(function(response){
              $scope.adminpostUsers=response.data;
              if(response.data.length==0){
                $scope.adminmessage=" no data found"
              }
          })
       }
       $scope.loadUsers=function(){
         postusers();
       }
      $scope.deleteUser=function(id){
        var data={};
        data.permissions=$scope.permission
        data.userIdToBeDeleted=id
        $http.post('/jobFinder/adminDeleteUser',data).then(function(response){
            postusers();
            alert('deleted successfully')
        })
      }
    //delete
       $scope.deleteRoom=function(){
           postRooms()
       }

  //post clients
         function postAllClients(){
          var data={};
          data.permissions=$scope.permission
           data.client=$scope.client;
            $http.post('/jobFinder/adminpostClients',data).then(function(response){
              $scope.clients=response.data;
              if(response.data.length==0){
                $scope.adminmessage="no data found";
              }
            })
         }
         $scope.postClients=function(){
            postAllClients();
         }
  //delete clienty
        $scope.deleteClients=function(id){
          var data={};
        data.permissions=$scope.permission
            data.clientId=id
            alert(id)
            $http.post('/jobFinder/adminDeleteClient',data).then(function(response){
                   $scope.success=response.data;
                   alert($scope.success)
            })
         }
         $scope.deleteTransportOwner=function(id){
          var data={};
          data.permissions=$scope.permission
            data.transportOwnerId=id;
          $http.post('/deleteTransportOwners',data).then(function(response){
              $scope.success=response.data
          })
         }
         $scope.deletePassenger=function(id){
          var data={};
          data.permissions=$scope.permission
          data.passengerId=id;
          $http.post('/jobFinder/deletePassengers',data).then(function(response){
              $scope.success=response.data
          })
         }
         $scope.postProfessionals=function(){
          var data={};
          data.permissions=$scope.permission
           data.adminprofessinal=$scope.adminprofessinal;
          $http.post('/adminProfessionals',data).then(function(response){
            $scope.professionals=response.data
            if(response.data.length==0){
              $scope.adminmessage="no data found"
            }
          })
         }
         $scope.deleteProfessional=function(id){
          var data={};
          data.permissions=$scope.permission
          data.professionalId=id;
          $http.post('/adminDeleteProfessional',data).then(function(response){
            $scope.success=response.data;
          })
         }
         $scope.permissionCriterias=["admin","chatbox","clientRegistration","news","travel","professionalRegistration","thingsToSale","moneyTransfer"]
         $scope.loadUser=function(){
           getPermissions();
         }
         function getPermissions(){
           var data={};
           data.user=$scope.user;
            $http.post('/admin/getPermissions',data).then(function(response){
              $scope.permissions=response.data;
           })
         }
         $scope.updatePermission=function(userId,permission,permissionId){
            data.userId=userId;
            data.permission=permission;
            data.permissionId=permissionId
           if(permissionId==undefined){
              $http.post("/addPermission",data).then(function(response){
                $scope.sucess=response.data
                alert("permission added")
               })
           }else{
             $http.post("/updatePermission",data).then(function(response){
                $scope.sucess=response.data
                alert("updated")
               })
           }
         }
         $scope.addPermission=function(userId,permission,permissionId){
            data.userId=userId;
            data.permission=permission;
            data.permissionId=permissionId
              $http.post("/addPermission",data).then(function(response){
                $scope.sucess=response.data
                alert("permission added")
               })
         }
         $scope.addPermissionFromAdminPage=function(userId,selectedPermission){
             data.userId=userId;
             data.permission=selectedPermission;
              $http.post("/addPermission",data).then(function(response){
                $scope.sucess=response.data
                alert("permission added")
               })
         }
        $scope.deletePermission=function(permissionId){
            data.permissionId=permissionId
              $http.post("/deletePermission",data).then(function(response){
                $scope.sucess=response.data
                alert("permission deleted")
                getPermissions();
               })
         }
          $scope.uploadWorkLists=function(){
            $http.get('/getAllWorkList').then(function(response){
              $scope.workListProfessions=response.data;
            })
          }

        $scope.updateWorkList=function(id,translatedTigrignaProfession){
          var workInfo={}
          workInfo.Id=id
          workInfo.translatedTigrignaProfession=translatedTigrignaProfession;
          $http.post('/updateWorkProfessionList',workInfo).then(function(response){
            alert("updated successfully");
          })
        }
        $scope.contacts=function(){
          $http.post('/getContacts').then(function(response){
            $scope.contactsInof=response.data
          })
        }
        $scope.airTravel=function(){
          $http.post('/getAirTravel').then(function(response){
            $scope.airTravelInfo=response.data
          })
        }
        $scope.moneyTransfer=function(){
          $http.post('/getMoneyTransfer').then(function(response){
            $scope.moneyTransferInfo=response.data
          })
        }
        $scope.deleteContact=function(id){
          var data={}
          data.id=id
          $http.post('/deleteContactInfo',data).then(function(response){
            alert("deleted")
          })
        }
        $scope.deleteAirTravel=function(id){
          var data={}
          data.id=id
          $http.post('/deleteAirTravel',data).then(function(response){
            alert("deleted")
          })
        }
        $scope.deleteMoneyTransfer=function(id){
          var data={}
          data.id=id
          $http.post('/deleteMoneyTransfer',data).then(function(response){
            alert("deleted")
          })
        }

  })

