(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!t;)t=o[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"abbfad808c2786a6a2d4.png",n=e.p+"986e98635b18601755cf.png",o=e.p+"177a54134d0bd5aefd06.png",c=e.p+"edb755c23d1ebcf9c7a4.png";let r=[];class i{constructor(e,t){this.title=e,this.description=t,this.toDos=[]}get title(){return this._title}get description(){return this._description}get toDoList(){return this._toDos}set title(e){this._title=e}set description(e){this._description=e}}function s(e){return document.querySelector(e)}e.p,s(".projectSection");const l=document.querySelector(".newProjectOverlay");function a(){document.getElementById("title").value="",document.getElementById("description").value=""}!function(){const e=document.querySelector(".menuContainer"),r=document.querySelector(".mainLogo"),i=document.querySelector(".menuClose"),s=document.querySelector(".createProj"),l=new Image;l.src=t,l.classList.add("main-menu-logo");const a=new Image;a.src=n,a.classList.add("main-logo");const d=new Image;d.src=o,d.classList.add("menuClose");const u=new Image;u.src=c,u.classList.add("addProjButton"),e.appendChild(l),r.appendChild(a),i.appendChild(d),s.appendChild(u);const p=document.querySelector(".sidebar-menu"),m=document.querySelector(".newProjectOverlay");e.addEventListener("click",(function(){p.style.animation="menuSlideOn 1.5s forwards"})),i.addEventListener("click",(function(){p.style.animation="menuSlideClose 1.5s forwards"})),s.addEventListener("click",(function(){console.log("create project button clicked!!"),p.style.animation="menuSlideClose 1.5s forwards",m.style.animation="projectSlideDown 1.5s forwards"})),p.addEventListener("click",(e=>{e.target.tagName}))}(),function(){const e=document.querySelector(".closeButton"),t=document.querySelector(".submitButton");e.addEventListener("click",(function(){l.style.animation="projectSlideUp 1.5s forwards",a()})),t.addEventListener("click",(function(){console.log("submit button clicked"),l.style.animation="projectSlideUp 1.5s forwards";const e=function(){const e=document.getElementById("title").value;let t=document.getElementById("description").value;if(e){console.log("detected title");const n=new i(e,t);return r.push(n),console.log(r[r.length-1].title),console.log(r[r.length-1].description),n}return console.log("Need a title to create a project!"),void function(){const e=document.querySelector(".errorProjectOverlay");e.style.animation="projectSlideDown 1.5s forwards",setTimeout((function(){e.style.animation="projectSlideUp 1.5s forwards"}),2500),a(),l.style.animation="projectSlideDown 1.5s forwards"}()}();e&&(console.log("project obj returned successfully"),function(e){let t=e.slice(0,7);const n=s(".sidebarProject");let o=document.createElement("span");e.length>6?o.textContent=t+"...":o.textContent=e,o.classList.add("projectNameSidebar"),n.appendChild(o)}(e.title),displayProjectInMain(e)),a()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU2tFLGNBQWMsUUFDcENMLEVBQWF4RCxPQUFTLEVBQ3JCNEQsRUFBVUUsWUFBY0wsRUFBZSxNQUV2Q0csRUFBVUUsWUFBY04sRUFFNUJJLEVBQVU5QixVQUFVQyxJQUFJLHNCQUN4QjRCLEVBQVN4QixZQUFZeUIsRUFDekIsQ0NHWUcsQ0FBb0JoQixFQUFhdkMsT0FDakN3RCxxQkFBcUJqQixJQUV6QjFCLEdBQ0osR0FDSixDQ3hCQTRDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGludG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnRvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RpbnRvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW50b2RvbGlzdC8uL3NyYy9tZW51RXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG9saXN0Ly4vc3JjL3Byb2plY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvcHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly9vZGludG9kb2xpc3QvLi9zcmMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vb2RpbnRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBNZW51IGZyb20gJy4uL3NyYy9pbWdzL21lbnUucG5nJ1xuaW1wb3J0IEJyYW5kIGZyb20gJy4uL3NyYy9pbWdzL1dvcmtlckFudHNNb2QucG5nJztcbmltcG9ydCBDbG9zZSBmcm9tICcuLi9zcmMvaW1ncy9jbG9zZS5wbmcnO1xuaW1wb3J0IENyZWF0ZSBmcm9tICcuLi9zcmMvaW1ncy9hZGQucG5nJztcbi8vSSBORUVEIFRPIEFERCBBIEdMT0JBTCBWQVJJQUJMRSBBUlJBWSBUSEFUIFNUT1JFUyBBTEwgVEhFIFBST0pFQ1RTIEhFUkVcbmV4cG9ydCBsZXQgcHJvakFyciA9IFtdO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gZHFzKGNsYXNzKXsgTUlHSFQgVVNFIE5PVCBTVVJFIFlFVFxuLy8gICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzKTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVFdmVudExpc3Rlbigpe1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVDb250YWluZXJcIik7XG4gICAgY29uc3QgbWFpbkxvZ29Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluTG9nb1wiKTtcbiAgICBjb25zdCBjbG9zZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUNsb3NlXCIpO1xuICAgIGNvbnN0IGNyZWF0ZVByb2pDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVQcm9qXCIpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbWVudUljb24uc3JjID0gTWVudTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUtbG9nbycpO1xuXG4gICAgY29uc3QgbWFpbkxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluTG9nb0ltZy5zcmMgPSBCcmFuZDtcbiAgICBtYWluTG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdtYWluLWxvZ28nKTtcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlSWNvbi5zcmMgPSBDbG9zZTtcbiAgICBjbG9zZUljb24uY2xhc3NMaXN0LmFkZCgnbWVudUNsb3NlJyk7XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNyZWF0ZVByb2pJY29uLnNyYyA9IENyZWF0ZTtcbiAgICBjcmVhdGVQcm9qSWNvbi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qQnV0dG9uJyk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICBtYWluTG9nb0NvbnQuYXBwZW5kQ2hpbGQobWFpbkxvZ29JbWcpO1xuICAgIGNsb3NlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG4gICAgY3JlYXRlUHJvakNvbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvakljb24pO1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1tZW51XCIpO1xuICAgIGNvbnN0IHByb2pPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0T3ZlcmxheVwiKTtcblxuICAgIG1lbnVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBzaWRlQmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdtZW51U2xpZGVPbiAxLjVzIGZvcndhcmRzJztcbiAgICB9KTtcbiAgICBjbG9zZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNpZGVCYXIuc3R5bGUuYW5pbWF0aW9uID0gJ21lbnVTbGlkZUNsb3NlIDEuNXMgZm9yd2FyZHMnO1xuICAgIH0pO1xuICAgIGNyZWF0ZVByb2pDb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgcHJvamVjdCBidXR0b24gY2xpY2tlZCEhXCIpO1xuICAgICAgICBzaWRlQmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdtZW51U2xpZGVDbG9zZSAxLjVzIGZvcndhcmRzJztcbiAgICAgICAgcHJvak92ZXJsYXkuc3R5bGUuYW5pbWF0aW9uID0gJ3Byb2plY3RTbGlkZURvd24gMS41cyBmb3J3YXJkcyc7XG4gICAgfSk7XG4gICAgc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdTUEFOJyl7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSIsImV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvRG9zID0gW107XG4gICAgfVxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCB0b0RvTGlzdCgpey8vZ2V0IGFycmF5IHRoZW4gcHVzaCBhIHRvRG9cbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvRG9zO1xuICAgIH1cblxuICAgIHNldCB0aXRsZShuZXdUaXRsZSl7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjKXtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICAgIH1cblxufSIsImltcG9ydCBDbG9zZSBmcm9tICcuLi9zcmMvaW1ncy9jbG9zZS5wbmcnO1xuaW1wb3J0IENyZWF0ZSBmcm9tICcuLi9zcmMvaW1ncy9hZGQucG5nJztcbmltcG9ydCBFZGl0IGZyb20gJy4uL3NyYy9pbWdzL2VkaXQucG5nJztcblxuY29uc3QgbWFpblNlYyA9IGRxcyhcIi5wcm9qZWN0U2VjdGlvblwiKTtcblxuZnVuY3Rpb24gZHFzKGMpe1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvU2lkZWJhcihwcm9qZWN0VGl0bGUpe1xuICAgIGxldCBuZXdQcm9qVGl0bGUgPSBwcm9qZWN0VGl0bGUuc2xpY2UoMCw3KTtcbiAgICBjb25zdCBwcm9qU2lkZSA9IGRxcyhcIi5zaWRlYmFyUHJvamVjdFwiKTtcbiAgICBsZXQgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGlmKHByb2plY3RUaXRsZS5sZW5ndGggPiA2KXtcbiAgICAgICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gbmV3UHJvalRpdGxlICsgXCIuLi5cIjtcbiAgICB9ZWxzZXtcbiAgICAgICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuICAgIH1cbiAgICBwcm9qVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVTaWRlYmFyJyk7XG4gICAgcHJvalNpZGUuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0SW5NYWluKHByb2plY3Qpe1xuICAgIGNsZWFyTWFpbigpXG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpe1xuICAgIHdoaWxlKG1haW5TZWMuZmlyc3RDaGlsZCl7XG4gICAgICAgIG1haW5TZWMucmVtb3ZlQ2hpbGQobWFpblNlYy5maXJzdENoaWxkKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdENsYXNzXCI7XG5pbXBvcnQgeyBwcm9qQXJyIH0gZnJvbSBcIi4vbWVudUV2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9TaWRlYmFyIH0gZnJvbSBcIi4vcHJvamVjdERPTVwiO1xuXG5jb25zdCBwcm9qT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdE92ZXJsYXlcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0T3ZlcmxheVN0dWZmKCl7XG4gICAgLy9jb25zdCBwcm9qT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdE92ZXJsYXlcIik7XG5cbiAgICAvL2J1dHRvbnNcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VCdXR0b25cIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG5cbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHByb2pPdmVybGF5LnN0eWxlLmFuaW1hdGlvbiA9ICdwcm9qZWN0U2xpZGVVcCAxLjVzIGZvcndhcmRzJztcbiAgICAgICAgcHJvamVjdEZvcm1DbGVhcigpO1xuICAgIH0pXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWJtaXQgYnV0dG9uIGNsaWNrZWRcIik7XG4gICAgICAgIHByb2pPdmVybGF5LnN0eWxlLmFuaW1hdGlvbiA9ICdwcm9qZWN0U2xpZGVVcCAxLjVzIGZvcndhcmRzJztcbiAgICAgICAgY29uc3QgcHJvamVjdFBhcmFtID0gZXh0cmFjdERhdGFGb3JQcm9qZWN0KCk7XG4gICAgICAgIC8vY3JlYXRlUHJvamVjdERPTShwcm9qZWN0UGFyYW0pOy8vdGhpcyB3aWxsIGJlIGluIHByb2plY3RET00uanMgZmlsZVxuICAgICAgICBpZihwcm9qZWN0UGFyYW0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0IG9iaiByZXR1cm5lZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgICBhZGRQcm9qZWN0VG9TaWRlYmFyKHByb2plY3RQYXJhbS50aXRsZSkvL3RoaXMgd2lsbCBiZSBpbiBwcm9qZWN0RE9NLmpzIGZpbGVcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0SW5NYWluKHByb2plY3RQYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdEZvcm1DbGVhcigpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3REYXRhRm9yUHJvamVjdCgpe1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlXG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICBpZih0aXRsZUlucHV0KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZXRlY3RlZCB0aXRsZVwiKTsvL2RlYnVnZ2luZ1xuICAgICAgICBjb25zdCBwcm9qZWN0TWFkZSA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQsIGRlc2NJbnB1dCk7XG4gICAgICAgIHByb2pBcnIucHVzaChwcm9qZWN0TWFkZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2pBcnJbKHByb2pBcnIubGVuZ3RoKS0xXS50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2pBcnJbKHByb2pBcnIubGVuZ3RoKS0xXS5kZXNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TWFkZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJOZWVkIGEgdGl0bGUgdG8gY3JlYXRlIGEgcHJvamVjdCFcIik7Ly9kZWJ1Z2dpbmdcbiAgICAgICAgZGlzcGxheU5lZWRUaXRsZSgpOy8vIENBTiBJTlNFUlQgRE9NIE1BTklQVUxBVElPTiBUTyBTSElGVCBET1dOIFRIRSBFUlJPUiBPVkVSTEFZIDopXG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZWVkVGl0bGUoKXtcbiAgICBjb25zdCBlcnJvck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yUHJvamVjdE92ZXJsYXlcIik7XG4gICAgZXJyb3JPdmVybGF5LnN0eWxlLmFuaW1hdGlvbiA9IFwicHJvamVjdFNsaWRlRG93biAxLjVzIGZvcndhcmRzXCJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGVycm9yT3ZlcmxheS5zdHlsZS5hbmltYXRpb24gPSBcInByb2plY3RTbGlkZVVwIDEuNXMgZm9yd2FyZHNcIlxuICAgIH0sIDI1MDApO1xuICAgIHByb2plY3RGb3JtQ2xlYXIoKTtcbiAgICBwcm9qT3ZlcmxheS5zdHlsZS5hbmltYXRpb24gPSBcInByb2plY3RTbGlkZURvd24gMS41cyBmb3J3YXJkc1wiO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybUNsZWFyKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG59IiwiaW1wb3J0IHsgbWVudUV2ZW50TGlzdGVuIH0gZnJvbSBcIi4vbWVudUV2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBwcm9qZWN0T3ZlcmxheVN0dWZmIH0gZnJvbSBcIi4vcHJvamVjdEZvcm1cIjtcbi8vIGltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0Q2xhc3NcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZVByb2plY3RGcm9tRGF0YSB9IGZyb20gXCIuL3Byb2plY3RGb3JtXCI7XG5tZW51RXZlbnRMaXN0ZW4oKTtcbnByb2plY3RPdmVybGF5U3R1ZmYoKTtcbi8vIGxldCBwcm9qMSA9IG5ldyBQcm9qZWN0KFwiY2FybG9zQnJ1aFwiLCBcImFwaXVmXCIpO1xuLy8gY29uc29sZS5sb2cocHJvajEubmFtZSk7XG4vLyBjb25zb2xlLmxvZyhwcm9qMS5kZXNjcmlwdGlvbik7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJpIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsInByb2pBcnIiLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidG9Eb3MiLCJfdGl0bGUiLCJfZGVzY3JpcHRpb24iLCJ0b0RvTGlzdCIsIl90b0RvcyIsIm5ld1RpdGxlIiwibmV3RGVzYyIsImRxcyIsImMiLCJxdWVyeVNlbGVjdG9yIiwicHJvak92ZXJsYXkiLCJwcm9qZWN0Rm9ybUNsZWFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm1lbnVDb250YWluZXIiLCJtYWluTG9nb0NvbnQiLCJjbG9zZUNvbnRhaW5lciIsImNyZWF0ZVByb2pDb250IiwibWVudUljb24iLCJJbWFnZSIsImNsYXNzTGlzdCIsImFkZCIsIm1haW5Mb2dvSW1nIiwiY2xvc2VJY29uIiwiY3JlYXRlUHJvakljb24iLCJhcHBlbmRDaGlsZCIsInNpZGVCYXIiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJhbmltYXRpb24iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGFnTmFtZSIsIm1lbnVFdmVudExpc3RlbiIsImNsb3NlQnV0dG9uIiwic3VibWl0QnV0dG9uIiwicHJvamVjdFBhcmFtIiwidGl0bGVJbnB1dCIsImRlc2NJbnB1dCIsInByb2plY3RNYWRlIiwicHVzaCIsImVycm9yT3ZlcmxheSIsInNldFRpbWVvdXQiLCJkaXNwbGF5TmVlZFRpdGxlIiwiZXh0cmFjdERhdGFGb3JQcm9qZWN0IiwicHJvamVjdFRpdGxlIiwibmV3UHJvalRpdGxlIiwic2xpY2UiLCJwcm9qU2lkZSIsInByb2pUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFkZFByb2plY3RUb1NpZGViYXIiLCJkaXNwbGF5UHJvamVjdEluTWFpbiIsInByb2plY3RPdmVybGF5U3R1ZmYiXSwic291cmNlUm9vdCI6IiJ9