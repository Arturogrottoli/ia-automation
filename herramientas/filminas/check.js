// Uso: node check.js <archivo.html>  → genera check.html con un script que reporta desbordes por filmina
const fs = require("fs");
const f = process.argv[2];
const out = process.argv[3];
const js = `window.addEventListener("load",()=>setTimeout(()=>{const out=[];const all=document.querySelectorAll(".slide-container");all.forEach((s,i)=>{all.forEach(x=>x.classList.remove("active"));s.classList.add("active");const sr=s.getBoundingClientRect();const ca=s.querySelector(".content-area");const ft=s.querySelector(".slide-footer").getBoundingClientRect();let bad=[];s.querySelectorAll(".content-area *, .slide-title, .transition-layout *").forEach(el=>{const r=el.getBoundingClientRect();if(r.width&&(r.bottom>ft.top-8||r.right>sr.right-20||r.left<sr.left+20))bad.push((el.className||el.tagName)+"|"+el.textContent.trim().slice(0,30)+"|b"+Math.round(r.bottom-ft.top)+"|r"+Math.round(r.right-sr.right))});if(ca&&ca.scrollHeight>ca.clientHeight+1)bad.unshift("CA-overflow "+(ca.scrollHeight-ca.clientHeight));if(bad.length)out.push((i+1)+": "+bad.slice(0,3).join(" ;; "))});document.body.innerHTML="<pre id=res>RESULT\\n"+(out.join("\\n")||"ALL OK")+"\\nEND</pre>"},2500));`;
let h = fs.readFileSync(f, "utf8").replace("</body>", "<script>" + js + "</script></body>");
fs.writeFileSync(out, h);
