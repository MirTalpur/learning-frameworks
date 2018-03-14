// var Seneca = require("seneca");
// var Express = require("express");
// var Web = require("seneca-web");

// var seneca = Seneca();
// var app = Express();

// seneca.add('role:api,cmd:bazinga',function(args,done){
//     done(null,{bar:"Bazinga!"});
// });

// seneca.act('role:web',{use:{
//     routes: {
//         prefix: "/my-api",
//         pin: "role:api,cmd:*",
//         map:{
//             bazinga: {
//                 GET: true
//             }
//         }
//     }
// }});
// // var config = {
// //     routes: {
// //         prefix: "/my-api",
// //         pin: "role:api,cmd:*",
// //         map:{
// //             bazinga: {
// //                 GET: true
// //             }
// //         }
// //     }
// // };

// seneca.use(Web, {adapter: "express", context: app})
// seneca.act("role:web", config);
// seneca.add("role:api,cmd:bazinga", bazinga);

// app.listen(3000);

var Seneca  = require("seneca");
var Express = require("express");
var Web     = require("seneca-web");

var seneca = Seneca();
var server = Express();

var config = {
    routes:{
        prefix : "/my-api",
        pin: "role:api,cmd:*",
        map:{
            bazinga: {
                GET: true
            }
        }
    }
};

seneca.use(Web, { adapter: "express", context: server })
seneca.act("role:web", config);
seneca.add("role:api,cmd:bazinga", bazinga);

server.listen(3000);


function bazinga(args, done){
    done(null, {
        bar: "Bazinga!"
    });
}
