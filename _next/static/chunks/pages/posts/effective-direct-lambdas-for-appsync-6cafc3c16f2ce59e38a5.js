_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{KUzN:function(e,t,a){"use strict";a.r(t);var n=a("rePB"),o=a("Ff2n"),r=(a("q1tI"),a("89qd")),i=a("JU6i"),l=a.n(i),c=a("UY+1"),s=a("R9PV");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var p=function(e){return Object(c.withSSG)(l()({filename:"effective-direct-lambdas-for-appsync.md",route:"/posts/effective-direct-lambdas-for-appsync",meta:{title:"Effective Direct Lambdas",date:"2020/07/31",description:"I'm going to teach you how to use AWS AppSync's Direct Lambda feature and you're going to like it!",tag:"tutorials",author:"John Connerton"},pageMap:[{name:"About",route:"/About",frontMatter:{type:"page",title:"About",date:"2021-06-10T00:00:00.000Z"}},{name:"_app",route:"/_app"},{name:"_document",route:"/_document"},{name:"index",route:"/",frontMatter:{type:"page",title:"Home",date:"2021-06-10T00:00:00.000Z"}},{name:"posts",children:[{name:"effective-direct-lambdas-for-appsync",route:"/posts/effective-direct-lambdas-for-appsync",frontMatter:{title:"Effective Direct Lambdas",date:"2020/07/31",description:"I'm going to teach you how to use AWS AppSync's Direct Lambda feature and you're going to like it!",tag:"tutorials",author:"John Connerton"}},{name:"gotta-go-fast",route:"/posts/gotta-go-fast",frontMatter:{title:"Gotta Go Fast!",date:"2022/01/23",description:"Don't eat for more focus",tag:"advice, health, fitness",author:"John Connerton"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2021-03-18T00:00:00.000Z"}},{name:"prep-for-big-tech-interviews",route:"/posts/prep-for-big-tech-interviews",frontMatter:{title:"Prepping for Big Tech Internship Interviews is a Sinch",date:"2020/07/31",description:"This article will walk you through how I approached my first and final year of internship searching, where I messed up, and what steps led me to prevail.",tag:"advice",author:"John Connerton"}},{name:"record-everything",route:"/posts/record-everything",frontMatter:{title:"Record Everything",date:"2021/07/22",description:"Seriously, I mean everything.",tag:"advice",author:"John Connerton"}}],route:"/posts"},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"},{name:"tea",route:"/tea"}]},s.a))(e)};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.a)(p,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({components:t},a),Object(r.a)("p",null,"Today, I\u2019m going to walk you through using AppSync\u2019s Direct Lambda feature. I helped build it this Summer after all, so I should be able to express how simple, yet effective, this feature is in allowing you to configure Lambdas for your API on AppSync."),Object(r.a)("p",null,Object(r.a)("em",{parentName:"p"},"Go ahead and jump to the section labelled ",Object(r.a)("strong",{parentName:"em"},"Let there be an API!")," if you\u2019d like to skip the bits about what the old workflow for a Lambda resolver was like.")),Object(r.a)("p",null,"I\u2019d first like to make a point about why Direct Lambdas were necessary. Here's a picture to help demonstrate that point."),Object(r.a)("p",null,Object(r.a)("img",{src:"https://miro.medium.com/max/1000/1*wO5RuITG7uP0HO8hLn0CRQ.png",alt:"VTL? Cancelled, sorta. Call the mob.",parentName:"p"})),Object(r.a)("p",null,"In order to set up a Lambda resolver for a field on AppSync, you\u2019d first have to check out the ",Object(r.a)("a",{href:"https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-lambda.html",parentName:"p"},"resolver mapping template reference"),", then you\u2019d have to set up your mapping templates in a language called VTL. These templates translate data back and forth between your Lambda. Finally, you\u2019d be able to set up your Lambda to expect the data as translated by the mapping templates."),Object(r.a)("p",null,"Notice that I mentioned that you had to write code in two separate places: the Lambda and the mapping templates, which might be in the Appsync console editors, uploaded through the SDK, or in a CloudFormation template. This introduces unnecessary coupling between your Lambda code and your mapping templates, which is probably not optimal for your code-base, nor your mental health."),Object(r.a)("p",null,"This is where the problem lies: if it\u2019s at all complicated, then it\u2019s too complicated. The goal is to think less\u2026 Er, less about things that don\u2019t matter, that is."),Object(r.a)("p",null,"If only there was an easier way to configure a Lambda resolver on AppSync. If only there was a way to write less code and get more done."),Object(r.a)("p",null,"There is now a way, ",Object(r.a)("strong",{parentName:"p"},"Direct Lambdas"),"."),Object(r.a)("h1",null,"Let there be an API!"),Object(r.a)("p",null,"I\u2019d like to avoid making this tutorial dry and boring so I\u2019ve decided that our API will be all about awesome, original, ",Object(r.a)("strong",{parentName:"p"},Object(r.a)("em",{parentName:"strong"},"definitely-not-cringe"))," dad jokes! Plus, we can utilize a friendly API called ",Object(r.a)("a",{href:"https://icanhazdadjoke.com/api",parentName:"p"},"icanhazdadjokes")," that offers an unprecedented collection of definitely-not-cringe-worthy dad jokes for free. That\u2019s a low price!"),Object(r.a)("p",null,"Let\u2019s start off with a specification of what our API should do. I\u2019d like to create an API that will allows a client to either get a random Joke or get a Joke specified by an ID."),Object(r.a)("h4",null,"What makes up a Joke?"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"joke: The content of the joke")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"id: The id of the joke")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"imageUrl: A permalink to the joke")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"cringe: A boolean that shows if the joke is cringe or not"))),Object(r.a)("p",null,"Here\u2019s how the entire thing will work:"),Object(r.a)("p",null,Object(r.a)("img",{src:"https://cdn-images-1.medium.com/max/1618/1*kwEgdbRG5OOlTzZS-Lj7FQ.png",alt:"This diagram is clunky, but it gets the job done.",parentName:"p"})),Object(r.a)("p",null,"If you\u2019d like to follow along, go ahead and open up the AWS console and go to the AppSync service. Create a new API, click \u2018build it from scratch\u2019, and name it something accurate like, \u201cPersonality Generator\u201d."),Object(r.a)("p",null,"Pop into the \u2018Schema\u2019 tab and overwrite whatever is in the editor with this:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"type Joke {\n    id: ID!\n    joke: String!\n    cringe: Boolean!\n    imageUrl: String!\n}\n\ntype Query {\n    hurryAndGiveMeADadJoke: Joke\n    giveMeADadJoke(id: ID!): Joke\n}\n")),Object(r.a)("p",null,"Then head over to the Lambda service, which is where we will create a Lambda function. Keep your region in mind. You can find it in the URL on the Lambda service dashboard. We will need it later on in the tutorial."),Object(r.a)("p",null,"Go ahead and click on \u2018Create function\u2019 and fill out the name under the \u2018Author from scratch\u2019 selection with something like \u201cDoes_The_Thing\u201d. Make sure that the selected runtime is Node.js 12.x, which is what we are using for this tutorial. Direct Lambdas are available in any runtime, so don\u2019t fret if you\u2019d prefer using a different language."),Object(r.a)("p",null,"At this point. click \u2018Create function\u2019 at the bottom of the page and then put this starter code into the editor and click the \u2018save\u2019 button on the top right of the page."),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"exports.handler = (event, context, callback) => {\n    console.log(event);\n};\n")),Object(r.a)("p",null,"Head back to the AppSync console and switch over to the \u2018Data Sources\u2019 tab. We\u2019re going to create a new data source, which will point to the Lambda function we just created! Click on \u2018Create data source\u2019 and fill out the form like this:"),Object(r.a)("p",null,Object(r.a)("img",{src:"https://cdn-images-1.medium.com/max/3138/1*gpZ12Nazs3WOzw0DX-5N0A.png",alt:"Hopefully you enjoy my quick GIMP edit!",parentName:"p"})),Object(r.a)("p",null,"This will create a data source named Does_The_Thing that is connects to the Lambda function we created earlier. Then, it creates a role that will allow AppSync to use the Lambda."),Object(r.a)("p",null,"Now, we get to do the fun stuff! We can configure this Lambda to be used as a resolver. Head on back to the \u2018Schema\u2019 tab. We\u2019re going to attach this new data source to resolver of the fields ",Object(r.a)("strong",{parentName:"p"},"imageUrl"),", ",Object(r.a)("strong",{parentName:"p"},"hurryAndGiveMeADadJoke"),", and ",Object(r.a)("strong",{parentName:"p"},"giveMeADadJoke"),". So, for all of those follow these steps:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"In the Resolvers section of the Schema, go to the field you wish to attach the Lambda to.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Click \u2018Attach\u2019!")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"In the Resolver Editor Page, find and select our new Lambda data source from the drop-down.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"Make sure that the two toggles are off, signalling that AppSync will not use any mapping templates."))),Object(r.a)("p",null,Object(r.a)("img",{src:"https://cdn-images-1.medium.com/max/3142/1*KTJrER-oFVQu90p3Ni2_uQ.png",alt:"",parentName:"p"})),Object(r.a)("p",null,"If it looks like the picture above, click \u2018Save resolver\u2019. Go ahead and do that same thing for the other two fields I mentioned earlier."),Object(r.a)("p",null,"Now we can finally make a query! Head over to the \u2018Queries\u2019 tab on the AppSync console and put this into the editor:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},'{\n  hurryAndGiveMeADadJoke {\n    imageUrl\n    id\n    joke\n    cringe\n  }\n  \n  giveMeADadJoke(id: "9EBljqWDAsc") {\n    imageUrl\n    joke\n    cringe\n  }\n}\n')),Object(r.a)("p",null,"Then send that query off (at the time of writing, you just click the little orange play button) and\u2026 ",Object(r.a)("strong",{parentName:"p"},"Oh no!")," We get this:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},'"data": {\n    "hurryAndGiveMeADadJoke": null,\n    "giveMeADadJoke": null\n  }\n')),Object(r.a)("p",null,"Luckily, this response was expected, since we never did anything useful with the Lambda. Right now, our Lambda only prints out the event object passed in from AppSync."),Object(r.a)("p",null,"We should head over to the Lambda editor we left open earlier and then to the monitoring tab which allows us to view our logs from CloudWatch. The logs will show the event object we printed out when we made our last query. If you don\u2019t want to click that many times, or are simply just following along here is what the event object looks like for me:"),Object(r.a)("p",null,Object(r.a)("img",{src:"https://cdn-images-1.medium.com/max/1452/1*z88ag2qIdNsqyJpRnRAy7Q.png",alt:"",parentName:"p"})),Object(r.a)("p",null,"Now that you know what is contained in the event object when the cringe field is invoked (it\u2019s just the ",Object(r.a)("a",{href:"https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html",parentName:"p"},"AppSync Context object"),"), we can go ahead and finish filling out the Lambda function in the Lambda console. Here\u2019s some logic that should work for us:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"const https = require('https');\n\n/* The event object contains a bunch of special goodies!\nThose goodies are explained in more detail in the AppSync Mapping Template Reference for Lambdas.\nWe will use only a few of the fields in this example. */\n    \nexports.handler = (event, context, callback) => {\n    console.log(event);\n    \n    const options = {\n        host: 'icanhazdadjoke.com',\n        method: 'GET',\n        headers: { 'Accept': 'application/json' }\n    };\n    \n    // The next line shows off how you can access the info object, which contains all sorts of exciting stuff\n    // pertaining to the GraphQL query.\n    switch (event.info.fieldName) {\n        case 'hurryAndGiveMeADadJoke':\n            console.log('Getting a random dad joke.');\n            getRequest(options, callback);\n            return;\n        \n        // Here we use the arguments object passed in by AppSync. \n        case 'giveMeADadJoke':\n            console.log(`Getting the joke with ID: ${event.arguments.id}`);\n            options['path'] = `/j/${event.arguments.id}`;\n            getRequest(options, callback);\n            return;\n            \n        // For this field, we get to use the source object! \n        // Source contains the data belonging to the parent object for this current field.\n        case 'imageUrl':\n            console.log(`Returning the image url for the dad joke ${event.source.id}`);\n            const imgUrl = `https://icanhazdadjoke.com/j/${event.source.id}.png`;\n            callback(null, imgUrl);\n            return;\n            \n        case 'cringe':\n            console.log('All dad jokes are cringe.');\n            callback(null, true);\n            return;\n            \n        default:\n            callback(`Sorry pal, we can't do anything for the field: ${event.info.fieldName}`);\n    }\n};\n\n// This thing uses https to get the info we need, then calls the callback we pass in!\n// https is super clunky looking, but it's built into Node, so it's easy to use.\nconst getRequest = (options, callback) => {\n    https.get(options, (res) => {\n        let body = '';\n    \n        res.on('data', (d) => {\n            body += d;\n        });\n        \n        res.on('end', () => {\n            body.trim();\n            callback(null, JSON.parse(body));\n        });\n    \n    })\n    .on('error', (err) => {\n      callback(err);\n    });\n};\n")),Object(r.a)("p",null,"This will handle resolving all the fields that we currently have set up. One thing that I\u2019d like to note is that the ",Object(r.a)("strong",{parentName:"p"},"event")," object and the **callback **function are both sent from AppSync."),Object(r.a)("p",null,"The callback responds with the result of the resolver, but the actual data is passed into the the 2nd parameter of the callback, the first parameter is used for responding with errors, as you can see in the default case within the switch."),Object(r.a)("p",null,"The event object holds a bunch of goodies we checked out in the logs earlier! Here are some of the goodies that we used in our Lambda:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"event.info holds the field name that is currently being resolved.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"event.arguments holds all the arguments passed into query.")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("p",{parentName:"li"},"event.source has the data belonging to the resolved parent object for this current field."))),Object(r.a)("p",null,"To learn more about those goodies and all the other stuff in the event object, check out the ",Object(r.a)("a",{href:"https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html",parentName:"p"},"Resolver Mapping Template Context Reference"),"."),Object(r.a)("p",null,"Hopefully, everything within the rest of the Lambda is easy to understand, but take a moment to read through and understand what\u2019s happening when we invoke this Lambda."),Object(r.a)("p",null,"Let\u2019s head back to the Query page on the AppSync console. Run that same query we ran before and\u2026 hooray!"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},'{\n  "data": {\n    "hurryAndGiveMeADadJoke": {\n      "imageUrl": "https://icanhazdadjoke.com/j/ciiNuXDY0wc.png",\n      "id": "ciiNuXDY0wc",\n      "joke": "Where did Captain Hook get his hook? From a second hand store.",\n      "cringe": true\n    },\n    "giveMeADadJoke": {\n      "imageUrl": "https://icanhazdadjoke.com/j/9EBljqWDAsc.png",\n      "joke": "What do you call a fish with no eyes? A fsh.",\n      "cringe": true\n    }\n  }\n}\n')),Object(r.a)("p",null,"We\u2019ve successfully set up an API that does everything we set out to do and we\u2019ve done so without all the VTL for the resolver mapping templates! Now ",Object(r.a)("strong",{parentName:"p"},"you")," know how to effectively use Direct Lambdas on AppSync."),Object(r.a)("p",null,"If you\u2019d like to walk through AppSync\u2019s reference on Direct Lambdas, check out the ",Object(r.a)("a",{href:"https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-lambda.html",parentName:"p"},"Resolver Mapping Template Reference for Lambdas")," or the configuring ",Object(r.a)("a",{href:"https://docs.aws.amazon.com/appsync/latest/devguide/direct-lambda-reference.html",parentName:"p"},"Direct Lambda section in the AppSync documentation"),". Ed Lima, a Sr. product manager at AWS also created an",Object(r.a)("a",{href:"https://aws.amazon.com/blogs/mobile/appsync-direct-lambda/",parentName:"p"}," awesome blog post")," that covered using Direct Lambdas in a few different languages."),Object(r.a)("p",null,"Now, keep in mind, Direct Lambdas can only be used in Lambda resolvers and miss some of the awesome functionality the VTL allow, so there are still plenty of use-cases for it, even with the existence of Direct Lambdas."),Object(r.a)("p",null,"I hope this example helps you figure out how to use AppSync\u2019s Direct Lambda feature to create a GraphQL API. I believe that it allows developers to write less code and get more done. Let me know how effective you think they are!"),Object(r.a)("hr",null),Object(r.a)("p",null,"Feel free to connect with me!"),Object(r.a)("p",null,Object(r.a)("a",{href:"https://www.linkedin.com/in/johnconnerton/",parentName:"p"},"LinkedIn")),Object(r.a)("p",null,Object(r.a)("a",{href:"https://twitter.com/conjohnert",parentName:"p"},"Twitter")),Object(r.a)("p",null,Object(r.a)("a",{href:"https://github.com/conjohnerton",parentName:"p"},"GitHub")))}d.isMDXComponent=!0,t.default=d},"x/SB":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/effective-direct-lambdas-for-appsync",function(){return a("KUzN")}])}},[["x/SB",0,1,2,3]]]);