(()=>{"use strict";const e=function(e,t){"none"===e.style.display?e.style.display=`${t}`:e.style.display="none"},t=function(e,t,n){const d=document.createElement("button");return d.id=e,d.innerHTML=t,d.style.display=n,d};!function(n){const d=document.getElementById("add-new"),i=document.createElement("div");i.classList.add("hidden-container"),i.style.display="none";const s=document.createElement("div");s.classList.add("hidden-buttons"),s.style.display="flex";const l=function(){const e=document.createElement("form");e.classList.add("hidden-form"),e.style.display="flex";const t=document.createElement("input");t.type="text",t.placeholder="Title",t.id="title",t.required=!0,e.appendChild(t);const n=document.createElement("input");n.type="text-area",n.placeholder="Description",n.id="description",n.required=!0,e.appendChild(n);const d=document.createElement("input");d.type="text",d.placeholder="Priority",d.id="priority",d.required=!0,e.appendChild(d);const i=document.createElement("input");return i.type="date",i.id="due-date",i.required=!0,e.appendChild(i),e}(),c=t("cancel-btn","cancel","block");c.addEventListener("click",(()=>{e(i,"none"),e(a,"block")}));const a=t("add-new-btn","+ Add task","block");a.addEventListener("click",(()=>{e(i,"block"),e(a,"none")}));const o=t("submit-btn","Submit","block");o.addEventListener("click",(()=>{const t=[document.getElementById("title").value,document.getElementById("description").value,document.getElementById("due-date").value,document.getElementById("priority").value];if(function(e){const t=e.length;for(let n=0;n<t;n++)if(""===e[n])return console.log("woops"),!1;return!0}(t)){!function(t){const n=document.getElementById("tasks-container"),d=document.createElement("div");d.classList.add("single-task-container"),d.id=`task-${t}`;const i=document.createElement("div");i.classList.add("visible-task"),i.style.display="flex";const s=document.createElement("div");s.classList.add("right-hand-items"),s.style.display="flex";const l=document.createElement("div");l.classList.add("hidden-task"),l.style.display="none";const c=document.createElement("button");c.classList.add("task-look"),c.id=`task-title-${t}`,c.addEventListener("click",(()=>{e(l,"flex")}));const a=document.createElement("div");a.classList.add("task-description-class"),a.id=`task-description-${t}`,a.contentEditable="true",a.classList.add("task-look");const o=document.createElement("div");o.id=`task-due-date-${t}`,o.classList.add("task-look");const r=document.createElement("div");r.id=`task-priority-${t}`,r.classList.add("task-look"),i.appendChild(c),s.appendChild(r),s.appendChild(o),i.appendChild(s),l.appendChild(a),d.appendChild(i),d.appendChild(l),n.appendChild(d)}(n);(function(e){const t=document.getElementById(`task-title-${e.id}`),n=document.getElementById(`task-description-${e.id}`),d=document.getElementById(`task-due-date-${e.id}`),i=document.getElementById(`task-priority-${e.id}`);t.innerHTML=`+ ${e.title}`,n.innerHTML=`Description : ${e.description}`,d.innerHTML=`Due-date : ${e.dueDate}`,i.innerHTML=`Priority : ${e.priority}`})(new class{constructor(e,t,n,d,i){this.id=e,this.title=t,this.description=n,this.dueDate=d,this.priority=i}set ChangeTitle(e){this.title=e}set ChangeDescription(e){this.description=e}}(n,t[0],t[1],t[2],t[3])),function(){const e=document.getElementById("title"),t=document.getElementById("description"),n=document.getElementById("due-date"),d=document.getElementById("priority");e.value="",t.value="",n.value="",d.value=""}(),e(i,"none"),e(a,"block"),n++}})),i.appendChild(l),s.appendChild(o),s.appendChild(c),i.appendChild(s),d.appendChild(a),d.appendChild(i)}(0)})();