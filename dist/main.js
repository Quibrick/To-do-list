(()=>{"use strict";const e=function(e,t,n){const d=document.createElement("button");return d.id=e,d.innerHTML=t,d.style.display=n,d},t=function(e,t){"none"===e.style.display?e.style.display=`${t}`:e.style.display="none"},n=function(e){const t=document.createElement("form");t.classList.add("hidden-form"),t.style.display="flex";const n=document.createElement("input");n.type="text",n.placeholder="Title",n.id=`title-${e}`,n.required=!0,t.appendChild(n);const d=document.createElement("input");d.type="text-area",d.cols="60",d.rows="8",d.placeholder="Description",d.id=`description-${e}`,d.required=!0,t.appendChild(d);const l=document.createElement("div");l.id="radio-input-container";const a=document.createElement("p");a.innerHTML="Priority :",l.appendChild(a);const i=["High","Normal","Low"];for(let e=0;e<i.length;e++){const t=document.createElement("label");t.htmlFor=i[e],t.innerHTML=i[e],t.name="priority";const n=document.createElement("input");n.type="radio",n.name="priority",n.value=i[e],l.appendChild(t),l.appendChild(n)}t.appendChild(l);const o=document.createElement("input");return o.type="date",o.id=`due-date-${e}`,o.required=!0,t.appendChild(o),t},d=function(e){const t=document.getElementById(`task-title-${e.id}`),n=document.getElementById(`task-description-${e.id}`),d=document.getElementById(`task-due-date-${e.id}`),l=document.getElementById(`task-priority-${e.id}`);t.innerHTML=`${e.title}`,n.innerHTML=`${e.description}`,d.innerHTML=`${e.dueDate}`,l.innerHTML=`${e.priority}`},l=class{constructor(e,t,n,d,l){this.id=e,this.title=t,this.description=n,this.dueDate=d,this.priority=l}set ChangeTitle(e){this.title=e}set ChangeDescription(e){this.description=e}},a=function(e){const t=document.getElementById(`title-${e}`),n=document.getElementById(`description-${e}`),d=document.getElementById(`due-date-${e}`);t.value="",n.value="",d.value=""},i=function(e){return e.replace(/\s/g,"")},o=function(a,o){const c=document.getElementById("tasks-container"),s=document.createElement("div");s.classList.add("single-task-container"),s.id=`task-${a}`;const r=document.createElement("div");r.classList.add("visible-task"),r.style.display="flex";const m=document.createElement("div");m.classList.add("hidden-task"),m.style.display="none";const p=e(`task-title-${a}`,"","block");p.classList.add("task-title-class"),p.addEventListener("click",(()=>{t(m,"flex")})),r.appendChild(p);const u=document.createElement("div");u.classList.add("right-hand-items"),u.style.display="flex",r.appendChild(u);const g=document.createElement("div");g.id=`task-priority-${a}`,g.classList.add("task-look"),u.appendChild(g);const h=document.createElement("div");h.id=`task-due-date-${a}`,h.classList.add("task-look"),u.appendChild(h);const y=e(`edit-task-${a}`,"","block");y.classList.add("task-btn"),y.addEventListener("click",(()=>{const c=new Map(JSON.parse(localStorage.getItem(i(o)))),s=c.get(`task-${a}`);!function(){const d=document.getElementsByTagName("body")[0],l=document.createElement("div");l.id="modal-form",l.style.display="none",l.classList.add("modal");const a=document.createElement("div"),i=document.createElement("h1");i.id="edit-task-title-modal",i.innerHTML="Edit task",a.appendChild(i);const o=n("modal");a.appendChild(o);const c=document.createElement("div");c.classList.add("hidden-buttons"),c.style.display="flex";const s=e("save-changes-btn-modal","Save changes","block");s.addEventListener("click",(()=>{t(l,"none")})),c.appendChild(s);const r=e("discard-btn-modal","Discard","block");r.addEventListener("click",(()=>{t(l,"none"),l.remove()})),c.appendChild(r),a.appendChild(c),a.classList.add("modal-content"),l.appendChild(a),d.appendChild(l)}();const r=document.getElementById("modal-form");r.style.display="none",t(r,"block"),function(e,t,n){const a=document.getElementById("title-modal"),o=document.getElementById("description-modal"),c=document.getElementById("due-date-modal");document.querySelector('input[name="rate"]:checked').value,a.value=`${e.title}`,o.value=`${e.description}`,c.value=`${e.dueDate}`,document.getElementById("save-changes-btn-modal").addEventListener("click",(()=>{e=new l(e.id,a.value,o.value,c.value),t.set(`task-${e.id}`,e),d(e),localStorage.setItem(i(n),JSON.stringify(Array.from(t.entries())))}))}(s,c,o)}));const k=document.createElement("img");k.id="edit-task-img",k.src="./img/edit.svg",y.appendChild(k),u.appendChild(y);const E=e(`delete-task-${a}`,"","block");E.classList.add("task-btn");const v=document.createElement("img");v.classList.add("delete-img"),v.src="./img/cancel.svg",E.addEventListener("click",(()=>{s.remove();let e=new Map(JSON.parse(localStorage.getItem(i(o))));e.delete(`task-${a}`),localStorage.setItem(`${i(o)}`,JSON.stringify(Array.from(e.entries())))})),E.appendChild(v),u.appendChild(E);const f=document.createElement("div");f.classList.add("task-description-class"),f.id=`task-description-${a}`,f.classList.add("task-look"),m.appendChild(f),s.appendChild(r),s.appendChild(m),c.appendChild(s)},c=function(c,s,r){const m=document.getElementById("content"),p=document.createElement("div");p.id="add-new";const u=document.createElement("div");u.classList.add("hidden-container"),u.style.display="none";const g=document.createElement("div");g.classList.add("hidden-buttons"),g.style.display="flex";const h=n("add-task");u.appendChild(h);const y=e("add-new-btn","+","block");y.addEventListener("click",(()=>{t(u,"block"),t(y,"none")})),p.appendChild(y);const k=e("submit-btn","Submit","block");k.addEventListener("click",(()=>{const e=(n="add-task",[document.getElementById(`title-${n}`).value,document.getElementById(`description-${n}`).value,document.getElementById(`due-date-${n}`).value,document.querySelector('input[name="priority"]:checked').value]);var n;if(function(e){const t=e.length;for(let n=0;n<t;n++)if(""===e[n])return console.log("woops"),!1;return!0}(e)){o(c,r);const n=new l(c,e[0],e[1],e[2],e[3]);s.set(`task-${c}`,n),localStorage.setItem(i(r),JSON.stringify(Array.from(s.entries()))),c++,localStorage.setItem("id",c),d(n),a("add-task"),t(u,"none"),t(y,"block")}})),g.appendChild(k);const E=e("cancel-btn","Cancel","block");E.addEventListener("click",(()=>{t(u,"none"),t(y,"block"),a("add-task")})),g.appendChild(E),u.appendChild(g),p.appendChild(u),m.appendChild(p)},s=function(t){const n=document.getElementById("projects"),l=document.getElementById("tasks-container"),a=document.createElement("div");a.classList.add("single-project-container"),a.style.display="flex";const s=e(`${t}`,`${t}`,"block");if(s.classList.add("left-bar-btn"),s.addEventListener("click",(()=>{for(;l.firstChild;)l.removeChild(l.lastChild);document.getElementById("add-new").remove(),document.getElementById("page-view-title").textContent=t;let e=JSON.parse(localStorage.getItem("id"));if(null===JSON.parse(localStorage.getItem(i(t)))){let n=new Map;c(e,n,i(t))}else{let n=new Map(JSON.parse(localStorage.getItem(i(t))));c(e,n,i(`${t}`));for(let e of n.values())o(e.id,t),d(e)}})),a.appendChild(s),"Todo"!=t){const n=e(`delete-${t}-btn`,"","block");n.classList.add("task-btn");const d=document.createElement("img");d.src="./img/cancel.svg",n.classList.add("delete-img"),n.appendChild(d),n.addEventListener("click",(()=>{location.reload(),a.remove(),localStorage.removeItem(i(t));let e=JSON.parse(localStorage.getItem("custom-project-list"));e=e.filter((e=>e!=t)),localStorage.setItem("custom-project-list",JSON.stringify(e))})),a.appendChild(n)}n.appendChild(a)},r=function(n){const d=document.getElementById("left-bar"),l=document.createElement("div");l.classList.add("hidden-container"),l.id="left-hand-hidden-container",l.style.display="none";const a=document.createElement("div");a.classList.add("left-hand-hidden-buttons"),a.style.display="flex";const i=e("create-new-project","Create new project +","block");i.classList.add("left-bar-btn"),i.addEventListener("click",(()=>{t(l,"block"),t(i,"none")})),d.appendChild(i);const o=document.createElement("input");o.id="project-name-input",o.placeholder="Project Name",l.appendChild(o);const c=e("submit-btn-left","Submit","block");c.addEventListener("click",(()=>{0!=o.value.length?(n.push(o.value),localStorage.setItem("custom-project-list",JSON.stringify(n)),console.log(n),s(o.value),t(l,"none"),t(i,"block"),o.value=""):console.log("er")})),a.appendChild(c);const r=e("cancel-btn-left","Cancel","block");r.addEventListener("click",(()=>{t(l,"none"),t(i,"block")})),a.appendChild(r),l.appendChild(a),d.appendChild(l)};!function(){let e=JSON.parse(localStorage.getItem("id"));if(null===e){let t=[],n=new Map;localStorage.setItem("Todo",JSON.stringify(Array.from(n.entries()))),e=0,localStorage.setItem("id",e),c(e,n,"Todo"),s("Todo"),document.getElementById("Todo").click(),t.push("Todo"),localStorage.setItem("custom-project-list",JSON.stringify(t)),r(t)}else{let t=JSON.parse(localStorage.getItem("custom-project-list")),n=new Map(JSON.parse(localStorage.Todo));c(e,n,"Todo");const l=t.length;for(let e=0;e<l;e++)s(t[e]);r(t);for(let e of n.values())o(e.id),d(e);document.getElementById("Todo").click()}}()})();