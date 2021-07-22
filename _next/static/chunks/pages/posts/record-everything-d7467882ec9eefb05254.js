_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{M5Kp:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/record-everything",function(){return o("ojq3")}])},ojq3:function(e,t,o){"use strict";o.r(t);var n=o("rePB"),a=o("Ff2n"),r=(o("q1tI"),o("89qd")),i=o("JU6i"),s=o.n(i),h=o("UY+1"),l=o("R9PV");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var d=function(e){return Object(h.withSSG)(s()({filename:"record-everything.md",route:"/posts/record-everything",meta:{title:"Record Everything",date:"2021/07/22",description:"Seriously, I mean everything.",author:"John Connerton"},pageMap:[{name:"About",route:"/About",frontMatter:{type:"page",title:"About",date:"2021-06-10T00:00:00.000Z"}},{name:"_app",route:"/_app"},{name:"_document",route:"/_document"},{name:"index",route:"/",frontMatter:{type:"page",title:"Home",date:"2021-06-10T00:00:00.000Z"}},{name:"posts",children:[{name:"effective-direct-lambdas-for-appsync",route:"/posts/effective-direct-lambdas-for-appsync",frontMatter:{title:"Effective Direct Lambdas",date:"2020/07/31",description:"I'm going to teach you how to use AWS AppSync's Direct Lambda feature and you're going to like it!",tag:"tutorials",author:"John Connerton"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2021-03-18T00:00:00.000Z"}},{name:"prep-for-big-tech-interviews",route:"/posts/prep-for-big-tech-interviews",frontMatter:{title:"Prepping for Big Tech Internship Interviews is a Sinch",date:"2020/07/31",description:"This article will walk you through how I approached my first and final year of internship searching, where I messed up, and what steps led me to prevail.",tag:"advice",author:"John Connerton"}},{name:"record-everything",route:"/posts/record-everything",frontMatter:{title:"Record Everything",date:"2021/07/22",description:"Seriously, I mean everything.",author:"John Connerton"}}],route:"/posts"},{name:"tags",children:[{name:"[tag]",route:"/tags/[tag]",frontMatter:{type:"tag",title:"Tagged Posts"}}],route:"/tags"},{name:"tea",route:"/tea"}]},l.a))(e)};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.a)(d,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({components:t},o),Object(r.a)("h1",null,"Record Everything"),Object(r.a)("h3",null,"Preface"),Object(r.a)("p",null,"I came up with this advice a bit too late for me, it seems. Still, I hope this piece finds ",Object(r.a)("strong",{parentName:"p"},"you")," right on time. My mother passed recently. I carry the regret of not using this technique soon enough to immortalize her in my life. Rest in peace, Mama."),Object(r.a)("h3",null,"Intro"),Object(r.a)("p",null,"How mindful are you?"),Object(r.a)("p",null,"I try to reflect as often as possible. It's how I remember the good times. It's how I correct the bad. It's how others can learn from me."),Object(r.a)("p",null,"If the click-bait articles I've recently read are correct, we're all cyborgs. We aren't the kind with weird cyber-punk implants (At least, not yet). We are the boring kind of cyborg: our cybernetic extensions are our phones and computers. Stop relying on that mushy human brain you have, and start augmenting your memory with computing power. (And try to remain in control of all that data yourself) Hark! We're in the age of information! Take advantage of your newfound tools and spread your knowledge scalably."),Object(r.a)("h4",null,"Glossary:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"UCF: University of Central Florida"),Object(r.a)("li",{parentName:"ul"},"TA: Teaching Assistant (For Computer Science courses)")),Object(r.a)("h3",null,"The structure of this article"),Object(r.a)("p",null,"I believe that there will be two types of people reading this bloggy-ish article in front of you."),Object(r.a)("p",null,'The first is a professional. Maybe this professional wants to improve the processes at their job. They might recognize that there is a lot of time wasted on re-learning things over and over: each member of a team re-discovering something that everybody already knows. Maybe they recognize that "tribal knowledge" is rampant, harming productivity for all team members. They might hate writing grueling documentation or not have the time to write it.'),Object(r.a)("p",null,"The second type of person is probably a friend of mine. They'll probably have the same interests as the professional but would also like to hear a personal twist on this whole thing. They might be a gamer, a musician, or some hobbyist. I've come to realize that this 'record everything' thing encompasses pretty much anything you do involving a computer, and perhaps even more."),Object(r.a)("p",null,"With those two types of people in mind (you know which one you are by now), I'm going to split this article into two sections: professional and personal. Each will provide background specific to your interest. Depending on which type of person you are, you might hop right over to your section of interest."),Object(r.a)("h2",null,"Background"),Object(r.a)("h3",null,"Personal"),Object(r.a)("p",null,"I recently had a conversation with a friend, Dylan, in which he asked (interrogated) me to reflect on my final semester at UCF. I thought it would only be a short 15-minute conversation. Fifteen minutes turned into thirty. Thirty turned into an hour and fifteen minutes. We talked each other's ears off. I hadn't realized it until words started flowing from my mouth with an eager listener prodding into the folds of my brain. Fortunately, he had been taking notes on our conversation too. Those notes would come in handy later on: there were some great insights in that conversation."),Object(r.a)("p",null,'After our conversation, I remembered how often I had reflected on my past while helping students as a teaching assistant. Students often came to office hours to ask about non-class topics like "how do I prepare for an internship?" and "what classes matter in this program?". I\'d considered my experiences at UCF to give them decent advice as to what challenges they would face in the future. There was a lot of (subjectively) good info that only a couple of students got to hear.'),Object(r.a)("p",null,"I had put a ",Object(r.a)("strong",{parentName:"p"},"ton")," of thought into the reflections and advice that I discussed. It felt like a waste to have all that info stuck in the noggins of a few people whose memories ",Object(r.a)("a",{href:"https://en.wikipedia.org/wiki/Decay_theory",parentName:"p"},"decay over time"),"... With my advice given as a TA, I wouldn't be able to reach students later on. With the reflections I discussed with Dylan, the insights would fade. I would forget nearly all of what I learned."),Object(r.a)("p",null,'This whole "reflection" and "knowledge" thing wasn\'t scalable at all. I\'m a computer scientist, after all. A good computer scientist can identify something that isn\'t scalable, then work to change it.'),Object(r.a)("p",null,"This next point is a bit more somber. As humans, we are ",Object(r.a)("strong",{parentName:"p"},"all")," destined to return to the ether, whence we started. Nobody knows their fate, nor the fate of those around them. As someone dear fades into memories, how will you remember their appearance? Will you always recall their jokes and mannerisms correctly? Will you remember their voice? This advice urges you to store as many of your memories as possible. You will forget fewer of those things. This section reminds me of this melancholy musical project called ",Object(r.a)("a",{href:"https://en.wikipedia.org/wiki/The_Caretaker_(musician)",parentName:"p"},"The Caretaker"),". It's a terrifying experience to get lost in The Caretaker's crinkled shards of decaying tunes, yet remains a gripping musical representation of memory decay."),Object(r.a)("h3",null,"Professional"),Object(r.a)("p",null,"If you work in software, you know that documentation is an ever-present pain. Reading it results in searing pain, writing it results in third-degree burns, and when there is none... See the image below for what to imagine. How often do you find a complete lack of documentation?"),Object(r.a)("p",null,Object(r.a)("img",{src:"/images/this-is-not-fine.png",alt:"This is a dog saying the quote, 'this is not fine.' The dog is screaming, surrounded by fire. It's crazy, man.",parentName:"p"})),Object(r.a)("p",null,Object(r.a)("p",{style:{textAlign:"center",marginTop:"-2em"},parentName:"p"},"Image by K.C. Green")),Object(r.a)("p",null,"One of my jobs was working with a customer-facing, high-performance service spanning a few teams. The team I was on was relatively young when I joined: many of the current engineers were there during the product launch. Due to the team's age, there never came a time when the tribal knowledge on the team would get put into documentation. Although, the team would have a weekly learning session that did cover some of that knowledge, usually on a higher level. However, these were sometimes canceled outright or not recorded for the team to view later on."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Side note"),": If you don't do a recurring knowledge session, I'd recommend trying it out. I think it helped the newbies get up to speed faster and helped team members be more in touch with unfamiliar parts of a product."),Object(r.a)("p",null,"During that job, I had to help a couple of interns get up to speed with their jobs. Later on, help them with some of the questions they had about their intern projects. I met with the interns once a week and sometimes more if it was necessary. During some of those meetings, they might have asked me to explain some system that I had previously worked on. I gave the interns a deep dive when I could. Those explanations had already left the mouths of other team members numerous times, yet nobody had recorded them. What a waste of time!"),Object(r.a)("p",null,"All these discoveries didn't matter if someone else had to re-discover or even re-re-discover it all over again. This knowledge thing wasn't very scalable. As clever, considerate, productive humans, we probably care about making things better: more so when it's easy to do so."),Object(r.a)("h2",null,"Solution"),Object(r.a)("p",null,"Warning: If you record everything all the time, you might find yourself not enjoying the moment you're in at that moment. That's why I try to record sounds when I'm in conversation and record video when I'm on my computer. It's best to choose a recording option that is most out of the way and mindless."),Object(r.a)("h3",null,"Personal"),Object(r.a)("p",null,"Here's what I try to do when I head back to see my grandfather: I start my recording app on my phone and slide my phone into my pocket or set it on a countertop when I know we'll be having a chat. After we chat, I think about what we talked about and decide whether or not to save the recording for good. My grandfather is getting older. I'm moving to the other side of the country to start the next chapter of my life. I worry that one of the next few times I see him could be the last. Life is unexpected. I could never know. I don't want to forget his mannerisms nor his jokes. This is my way of immortalizing him. The same could be said for the rest of my family also. I record them too."),Object(r.a)("p",null,"Next time you make your way to see family or some friends, hit the record button on your phone's recorder app and slip the phone into your pocket. Forget it even exists and continue normally. When you've got a moment away from that person, stop the recording and save it. Reflect for a second on what you discussed. If there wasn't anything important said, go ahead and delete the recording."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Side note"),": You might want to organize the recordings into folders like Grandfather, Florida_Friends, or something along those lines."),Object(r.a)("p",null,"The reflection part is the most crucial part of the technique. Recording everything isn't about blindly saving everything you've ever talked about with someone you love so that you can reminisce. The purpose is to push you to reflect and stay mindful more often. I'm telling you to meditate without really meditating. Considering what is important enough to keep will grow your relationships. Your loved ones will notice that you remember much more about what they have said. I believe the effect is similar to ",Object(r.a)("a",{href:"https://www.maxwell.syr.edu/uploadedFiles/parcc/cmc/Reflective%20Listening%20NK.pdf",parentName:"p"},"reflective listening")," but extended over time. Your knowledge of a person cemented through the reflections you do can help you communicate empathetically."),Object(r.a)("p",null,Object(r.a)("em",{parentName:"p"},'We all want to be the "favorite" friend and relative. Right?')),Object(r.a)("h3",null,"Professional"),Object(r.a)("p",null,"I'll tell you how I handled things at my job. I gave a bit of a demo-explanation-thingy to an intern on the team, and like I said earlier, realized that someone else would inevitably have the same questions. I decided to redo the whole thing on video, alone this time. I released the video to my team and made sure to add a link to it in our documentation. That video got props from my manager since I was helping to develop my team members. I repeated this type of thing multiple times throughout my employment at that job."),Object(r.a)("p",null,"I imagine that there would be a couple of different scenarios in which you'd decide to hit the record button at your job. The first: when you're in a meeting with one or more people. The other: when you're all alone and feel like something could be better documented. The second scenario is just... documentation: No explanation necessary."),Object(r.a)("p",null,"Let's cover how you'd approach the first scenario:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"You join a meeting for any reason at all."),Object(r.a)("li",{parentName:"ol"},"You say to the attendees, \"Hey team, I'm going to record the meeting for documentation purposes. I'll add the link to our docs/wiki/workspace after it's uploaded.\""),Object(r.a)("li",{parentName:"ol"},"After the meeting, you decide if the recording had any information that might be useful later. If so, you save it and add it to your docs.")),Object(r.a)("p",null,"It's that simple. Your only task is to make it a habit to start a recording at the beginning of every meeting you have. Whether it's a weekly team meeting or a one-off with a team member, you just hit the record button. You'll come to realize that helps get rid of tribal knowledge on the team."),Object(r.a)("p",null,"You might also reflect on the entire meeting as a whole and remember bits of important info. You've now reflected on the meeting and will generally retain more information from it (hello, highly trusted and knowledgable team member status!!). Sometimes though, you might find that the info doesn't deserve an entire video. At that point, since you have that information fresh in your brain, it's as easy as writing it down somewhere in your team's docs."),Object(r.a)("p",null,"As you can see, recording everything isn't only about saving every word that the team has ever muttered in the effort of increasing productivity. The technique's purpose is to push you to reflect and stay mindful more often. I'm basically telling you to meditate more often in a drawn-out way. Through the act of storing things and considering what is important enough to keep (after you already recorded it), you will be more in tune with your work with the added benefit of having important info stored for your team members later on."),Object(r.a)("p",null,'This strategy reminds me of the "cheat sheets" we could use in college. Some professors would allow you to prepare a single page to bring into an exam. On that page, you could write whatever your heart pleased. I\'m not sure where the research showed this (send it to me if you find it?) but apparently, figuring out what you need to save on a cheat sheet was a pretty decent study strategy. From personal experience, when I had made a cheat sheet for one of those classes, I barely used the thing during the exam.'),Object(r.a)("p",null,"So go on and try to record your meetings, then reflect on those recordings to see if they're even worth saving at all. Try it for two weeks. You might find that it's more helpful than you'd first believe."),Object(r.a)("h3",null,"Hit the \u23fa\ufe0f button"),Object(r.a)("p",null,"Try this technique out for two weeks and see just how much it grows your relationships and improves your work. Record things, save things, and reflect on everything too."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Record everything around you.")))}u.isMDXComponent=!0,t.default=u}},[["M5Kp",0,1,2,3]]]);