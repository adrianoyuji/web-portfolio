(this["webpackJsonpadrianoyuji.github.io"]=this["webpackJsonpadrianoyuji.github.io"]||[]).push([[0],{11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),i=(a(11),a(3)),c={language:"portuguese",app:{modalTitles:{about:"SOBRE MIM",projects:"PROJETOS"}},footer:{contactTitle:"CONTATO",madeWithLove:"Feito com \u2764 por Adriano Vasconcelos"},header:{languageChanger:"Idioma: "},projectItem:{},about:{firstParagraph:"Ol\xe1! Meu nome \xe9 Adriano Yuji Sato de Vasconcelos e sou Desenvolvedor Front-end de Software! Atualmente estou terminando minha gradua\xe7\xe3o em Engenharia da Computa\xe7\xe3o no Brasil. Comecei a focar em desenvolvimento de software no final de 2019 quando percebi que eu queria trabalhar com design e programa\xe7\xe3o.",secondParagraph:"Eu almejo me tornar um desenvolvedor de software profissional e estou sempre aberto a novos desafios. No momento estou aperfei\xe7oando minhas habilidades de front-end para mais tarde come\xe7ar a focar em tecnologias de back-end e me tornar um desenvolvedor Full-Stack.",skills:{title:"HABILIDADES",frontend:"Front End",tools:"Ferramentas",methodologies:"Metodologias"}},home:{softwareDeveloper:"DESENVOLVEDOR FRONT-END DE SOFTWARE",navigationButtons:{about:"Sobre",projects:"Projetos",resume:"Curr\xedculo"}},projects:{header1:"Bem vindo ao meu portf\xf3lio de projetos! Fique avontade para checar meus projetos pessoais. Veja tamb\xe9m meu ",header2:"Perfil no Github",header3:" se quiser ver o c\xf3digo fonte de meus demais projetos."},projectList:[{title:"SUSHI STORE",imgUrl:"https://media0.giphy.com/media/W6LUMXo3EuU01OWJBo/giphy.gif",liveUrl:"https://sushi-store.onrender.com/",description:"Este website apresenta um catalago de produtos, uma carrinho de compras e um sistema de pagamento.",githubUrl:"https://github.com/adrianoyuji/sushi-store-website"}]},s={language:"english",app:{modalTitles:{about:"ABOUT ME",projects:"PROJECTS"}},footer:{contactTitle:"CONTACT",madeWithLove:"Made with \u2764 by Adriano Vasconcelos"},header:{languageChanger:"Language: "},projectItem:{},about:{firstParagraph:"Hey! My name is Adriano Yuji Sato de Vasconcelos and I am a Front-end Software developer! I am currently finishing my graduation as a Computer Engineer in Brazil. I started focusing software development skills in late 2019 when I realized I wanted to work with both design and programming.",secondParagraph:"I seek to become a professional software developer and I am always open for new challenges. Right now I am honing my front-end abilities so later I can start focusing on back-end technologies and become a Full-Stack developer.",skills:{title:"SKILLS",frontend:"Front End",tools:"Tools",methodologies:"Methodologies"}},home:{softwareDeveloper:"FRONT-END SOFTWARE DEVELOPER",navigationButtons:{about:"About",projects:"Projects",resume:"Resume"}},projects:{header1:"Welcome to my Project Portfolio! Feel free to check out my personal projects. Check out my ",header2:"GitHub Profile",header3:" page if you want to see the code!"},projectList:[{title:"SUSHI STORE",imgUrl:"https://media0.giphy.com/media/W6LUMXo3EuU01OWJBo/giphy.gif",liveUrl:"https://sushi-store.onrender.com/",description:"This website features a menu catalog, a shopping cart and a checkout system.",githubUrl:"https://github.com/adrianoyuji/sushi-store-website"}]},m=Object(n.createContext)([]),u=function(e){var t=e.children,a=Object(n.useState)("english"),o=Object(i.a)(a,2),l=o[0],u=o[1],d=Object(n.useState)("home"),h=Object(i.a)(d,2),p=h[0],g=h[1],E=Object(n.useState)(s),f=Object(i.a)(E,2),v=f[0],b=f[1];return Object(n.useEffect)((function(){switch(l){case"english":b(s);break;case"portuguese":b(c)}}),[l]),r.a.createElement(m.Provider,{value:{language:l,setLanguage:u,section:p,setSection:g,languageText:v}},t)};function d(e){return r.a.createElement("div",{className:"navigationButton",onClick:function(){return e.onClick()}},e.title)}function h(){var e=Object(n.useContext)(m),t=e.setSection,a=e.languageText,o=[{title:a.home.navigationButtons.about,id:"about"},{title:a.home.navigationButtons.projects,id:"projects"}];return r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",{className:"homeContent"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"ADRIANO YUJI SATO DE VASCONCELOS"),r.a.createElement("p",null,a.home.softwareDeveloper)),r.a.createElement("div",{className:"navButtons"},o.map((function(e,a){return r.a.createElement(d,{title:e.title,onClick:function(){return t(e.id)},key:a})})),r.a.createElement("a",{className:"navigationButton",href:"https://docs.google.com/document/d/1OY8qQ37B4YHXq6c84a_CFTHwxQ323P19J8OhaJ4FyPk/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"},a.home.navigationButtons.resume))))}function p(){var e=Object(n.useContext)(m),t=e.setLanguage,a=e.languageText;return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("div",{className:"languageChanger"},r.a.createElement("span",null,a.header.languageChanger," "),r.a.createElement("div",{className:"languageButton",onClick:function(){return t("english")}},"English"),r.a.createElement("div",{className:"languageButton",onClick:function(){return t("portuguese")}},"Portugu\xeas")))}function g(){var e=Object(n.useContext)(m).languageText;return r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("div",{className:"personalDescription"},r.a.createElement("p",null,e.about.firstParagraph),r.a.createElement("p",null,e.about.secondParagraph)),r.a.createElement("h1",null,e.about.skills.title),r.a.createElement("div",{className:"skills"},r.a.createElement("div",{className:"skills-list"},r.a.createElement("h4",null,e.about.skills.frontend),r.a.createElement("ul",null,r.a.createElement("li",null,"HTML5"),r.a.createElement("li",null,"CSS3"),r.a.createElement("li",null,"SASS"),r.a.createElement("li",null,"JavaScript (ES6+)"),r.a.createElement("li",null,"Ajax"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"React JS"),r.a.createElement("li",null,"React Native"),r.a.createElement("li",null,"Material UI"))),r.a.createElement("div",{className:"skills-list"},r.a.createElement("h4",null,e.about.skills.tools),r.a.createElement("ul",null,r.a.createElement("li",null,"Git"),r.a.createElement("li",null,"Gitlab"),r.a.createElement("li",null,"Figma"),r.a.createElement("li",null,"Canva"),r.a.createElement("li",null,"Photoshop CC"),r.a.createElement("li",null,"Android Studio"))),r.a.createElement("div",{className:"skills-list"},r.a.createElement("h4",null,e.about.skills.methodologies),r.a.createElement("ul",null,r.a.createElement("li",null,"SCRUM"),r.a.createElement("li",null,"Kanban")))))}var E=a(1),f=a.n(E),v=a(2);function b(e){var t=e.project;return r.a.createElement("div",{className:"projectItem"},r.a.createElement("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"projectImage"},r.a.createElement("img",{src:t.imgUrl,alt:"thumb",height:"100%",width:"100%"})),r.a.createElement("div",{className:"projectInfo"},r.a.createElement("div",{className:"projectTitle"},t.title),r.a.createElement("p",{className:"projectDescription"},t.description),r.a.createElement("div",{className:"usefulLinks"},r.a.createElement("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{path:v.c})),r.a.createElement("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{path:v.e})))))}function j(){var e=Object(n.useContext)(m).languageText;return console.log(e.projectList),r.a.createElement("div",{className:"projectsContainer"},r.a.createElement("p",{className:"projectHeader"},e.projects.header1,r.a.createElement("a",{href:"https://github.com/adrianoyuji",target:"_blank",rel:"noopener noreferrer"},e.projects.header2),e.projects.header3),e.projectList.map((function(e,t){return r.a.createElement(b,{project:e})})))}function N(){return r.a.createElement("div",{className:"contactContainer"},r.a.createElement("a",{href:"https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{path:v.d,color:"white"})),r.a.createElement("a",{href:"mailto:adrianoyuji@gmail.com"},r.a.createElement(f.a,{path:v.b,color:"white"})),r.a.createElement("a",{href:"https://www.github.com/adrianoyuji",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{path:v.c,color:"white"})))}function C(){var e=Object(n.useContext)(m).languageText;return r.a.createElement("div",{className:"contactContent"},r.a.createElement("span",{className:"contactTitle"},e.footer.contactTitle),r.a.createElement(N,null),r.a.createElement("span",{className:"madeWithLove"},e.footer.madeWithLove))}function S(e){var t=Object(n.useContext)(m).setSection;return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modalContainer"},r.a.createElement("div",{className:"modalHeader"},r.a.createElement("div",{className:"modalTitle"},e.title),r.a.createElement("div",{className:"closeButton",onClick:function(){return t("home")}},r.a.createElement(f.a,{path:v.a,size:1,color:"white"}))),r.a.createElement("div",{className:"modalBody"},e.children)))}function O(){var e=Object(n.useContext)(m),t=e.section,a=e.languageText;return r.a.createElement("div",{className:"mainBody"},r.a.createElement(p,null),function(){switch(t){case"home":return r.a.createElement(h,null);case"about":return r.a.createElement(S,{title:a.app.modalTitles.about},r.a.createElement(g,null));case"projects":return r.a.createElement(S,{title:a.app.modalTitles.projects},r.a.createElement(j,null));default:return null}}(),r.a.createElement(C,null))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null,r.a.createElement(O,null))),document.getElementById("root"))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.60b18d1d.chunk.js.map