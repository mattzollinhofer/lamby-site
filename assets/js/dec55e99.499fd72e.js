"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[52],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},304:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const r={anatomy:"How Lamby Works",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function i(e){let{id:t,name:a}=e;const i=a||r[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return n.createElement("a",{href:`/docs/${t}`},i)}},875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(304),o=a(941),s=a(4996);const l={slug:"welcome-to-lamby-v4",title:"Welcome Lamby v4!",authors:["kcollins"],tags:["rails","lambda","containers"]},c=void 0,p={permalink:"/lamby-site/blog/welcome-to-lamby-v4",source:"@site/blog/2022-12-19-welcome-to-lamby-v4.mdx",title:"Welcome Lamby v4!",description:"I am incredibly happy to announcy Lamby v4 and a major update to our documentation website. Huge shout out to Docusaurus which has made in my opinion the best content-driven static site generator for open-source projects like our Lamby community.",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"rails",permalink:"/lamby-site/blog/tags/rails"},{label:"lambda",permalink:"/lamby-site/blog/tags/lambda"},{label:"containers",permalink:"/lamby-site/blog/tags/containers"}],readingTime:3.07,hasTruncateMarker:!1,authors:[{name:"Ken Collins",title:"Principal Engineer & Cloud Architect",url:"https://dev.to/metaskills",imageURL:"https://github.com/metaskills.png",key:"kcollins"}],frontMatter:{slug:"welcome-to-lamby-v4",title:"Welcome Lamby v4!",authors:["kcollins"],tags:["rails","lambda","containers"]}},m={authorsImageUrls:[void 0]},u=[{value:"Updated Starter",id:"updated-starter",level:2},{value:"Bring Your Own Containers",id:"bring-your-own-containers",level:2},{value:"Secrets with Crypteia",id:"secrets-with-crypteia",level:2},{value:"Development Containers",id:"development-containers",level:2}],d={toc:u};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I am incredibly happy to announcy Lamby v4 and a major update to our documentation website. Huge shout out to ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," which has made in my opinion the best content-driven static site generator for open-source projects like our Lamby community."),(0,r.kt)(o.Z,{alt:"Lamby: Simple Rails & AWS Lambda Integration using Rack",sources:{light:(0,s.Z)("/img/lamby-rails-containers.jpg"),dark:(0,s.Z)("/img/lamby-rails-dark.jpg")},mdxType:"ThemedImage"}),(0,r.kt)("p",null,"So what is new and will v4 break anything? Lots! Mostly new ways of thinking around the same basic architecture. Nothing should break either. Lamby v4's semver change is mostly marketing driven. Here is a short list of what is new."),(0,r.kt)("h2",{id:"updated-starter"},"Updated Starter"),(0,r.kt)("p",null,"Want to see all this new stuff in action? Use our ",(0,r.kt)(i.Z,{id:"quick-start",mdxType:"DocLink"})," guide to deploy a new Rails application to AWS Lambda in 5min \u23f1\ufe0f."),(0,r.kt)("h2",{id:"bring-your-own-containers"},"Bring Your Own Containers"),(0,r.kt)("p",null,"Lamby still works with the Zip packaing format, but all documentation on how to use it has been removed. Containers are here to stay and their value goes way past a simple packaging format. "),(0,r.kt)("mermaid",{value:"%%{init:{'flowchart':{'nodeSpacing': 20, 'rankSpacing': 20}}}%%\nflowchart LR\n  %% Objects\n  src-furl(Lambda Function URLs)\n  src-apih(API Gateway HTTP API)\n  src-apir(API Gateway REST API)\n  src-alb(Application Load Balancer)\n  invoke[/invoke/]\n  lambda[Lambda Function]\n  subgraph container[\"Container Image\"]\n    direction LR\n    ric[RIC -> config/env.Lamby.cmd]:::rics\n    app[Event -> Rack -> Rails::App]:::pink\n    os[Operatring System & Packages]:::desc\n  end\n  %% Flow\n  src-furl --\x3e |Event| invoke\n  src-apih --\x3e |Event v1 or v2| invoke\n  src-apir --\x3e |Event| invoke\n  src-alb --\x3e |Event| invoke\n  invoke --\x3e lambda\n  lambda --\x3e ric\n  %% Styles\n  classDef node fill:#a99ff0,stroke:#fff,stroke-width:4px,color:#000;\n  classDef pink fill:#fe4f8b,stroke:#fff,stroke-width:4px,color:#fff;\n  classDef orange fill:#ed8235,stroke:#fff,stroke-width:4px,color:#fff;\n  classDef cont fill:#c6fffd,stroke:#70d6d2,stroke-width:4px,color:black,font-size:12px;\n  classDef rics fill:#a99ff0,stroke:#fff,stroke-width:4px,color:#000;\n  classDef desc fill:white,stroke:#ccc,stroke-width:2px,color:black;\n  %% ,font-size:12px\n  class src-apir,src-apih pink\n  class src-alb orange\n  class container cont\n  class ric rics"}),(0,r.kt)("p",null,"We now encourage bringing your own containers by using Lambda's Runtime Interface Client (RIC). The RIC allows us to use Docker's ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," to load Rails and invoke a function. In this case we are loading our Rails application through its config/environment.rb file (.rb extension is implied) and once that is done, calling the new ",(0,r.kt)("inlineCode",{parentName:"p"},"Lamby.cmd")," as the Lambda handler. No more ",(0,r.kt)("inlineCode",{parentName:"p"},"app.rb"),"\nfile needed!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM ruby:3.1-bullseye\nRUN gem install \'aws_lambda_ric\'\nENTRYPOINT [ "/usr/local/bundle/bin/aws_lambda_ric" ]\nCMD ["config/environment.Lamby.cmd"]\n')),(0,r.kt)("h2",{id:"secrets-with-crypteia"},"Secrets with Crypteia"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/customink/crypteia"},"Crypteia")," package is Rust Lambda Extension for any Runtime/Container to preload SSM Parameters as secure environment variables. It takes advantages of ",(0,r.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD")," to seamlessly fetch values from SSM when a process starts and then injects them as natively accesible Ruby ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV")," variables. Our ",(0,r.kt)(i.Z,{id:"quick-start",mdxType:"DocLink"})," guide's cookiecutter includes Crypteia already for you via a Docker ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY")," command into the Lambda Extension ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM ruby:3.1-bullseye\n# highlight-next-line\nCOPY --from=ghcr.io/customink/crypteia-extension-debian:latest /opt /opt\n")),(0,r.kt)("p",null,"Usage is simply done by adding variables to your SAM template and accessing the values fetched from SSM like any other environment variable. Please read the Crypteia's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/customink/crypteia"},"documentation")," for full details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title="template.yaml"'},"Globals:\n  Environment:\n    Variables:\n      SECRET: x-crypteia-ssm:/myapp/SECRET\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"ENV['SECRET'] # 1A2B3C4D5E6F\n")),(0,r.kt)("h2",{id:"development-containers"},"Development Containers"),(0,r.kt)("p",null,"Described in the ",(0,r.kt)(i.Z,{id:"quick-start",mdxType:"DocLink"})," guide, our Lamby starter makes use of the ",(0,r.kt)("a",{parentName:"p",href:"https://containers.dev"},"Development Container")," specification via a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/customink/lamby-cookiecutter/tree/master/%7B%7Bcookiecutter.project_name%7D%7D/.devcontainer"},(0,r.kt)("inlineCode",{parentName:"a"},".devcontainer"))," directory. Commonly used with Codespaces, dev containers can be used locally with any editor. "),(0,r.kt)("p",null,"Our dev container's ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," uses the same base image as the one at the root of your project. This helps ensure your development experience, like installing system dependencies and Ruby gems with native extensions, aligns with the same process as your production image."),(0,r.kt)("p",null,"We also leverage the devcontainer's ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerComposeFile")," capability to include a MySQL service as well. The Lamby starter also includes a range of ",(0,r.kt)("a",{parentName:"p",href:"https://containers.dev/features"},"devcontainer features")," which are installed within the Ubuntu development image. For example, Node, Docker in Docker, SSH, and the AWS CLI & SAM CLI."))}b.isMDXComponent=!0}}]);