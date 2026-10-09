// Generador de presentaciones con el mismo formato que Clase01.html / Clase02.html
const fs = require("fs");
const path = require("path");

const ROOT = "C:/Users/Turi/Desktop/IA automation";
const SRC = fs.readFileSync(path.join(ROOT, "Clase 1/Clase01.html"), "utf8");
const HEAD = SRC.slice(0, SRC.indexOf("<body>"));
const TAIL = SRC.slice(SRC.indexOf("<!-- Presentation navigation controls toolbar -->"));

const ic = (i) => (i.startsWith("fa-brands") || i.startsWith("fa-regular") || i.startsWith("fa-solid") ? i : "fa-solid " + i);
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const FOOT = `        <div class="slide-footer">
            <div class="brand-logo">CODER<span>HOUSE</span></div>
            <div class="slide-index">NN</div>
        </div>`;

function slide(inner, extraClass = "") {
  return `    <div class="slide-container${extraClass ? " " + extraClass : ""}">\n${inner}\n${FOOT}\n    </div>\n`;
}

// ---------- piezas ----------
const badge = (text, cls = "", icon = null) =>
  `<span class="moment-badge${cls ? " " + cls : ""}">${icon ? `<i class="${ic(icon)}"></i> ` : ""}${text}</span>`;
const note = (t, center = false) => `<p class="note-text"${center ? ' style="text-align: center;"' : ""}>${t}</p>`;
const bullets = (items) =>
  `<div class="bullet-list"><ul>\n${items.map(([i, t]) => `<li><i class="${ic(i)}"></i> ${t}</li>`).join("\n")}\n</ul></div>`;
const tile = (i, h, p, style = "") =>
  `<div class="tile"${style ? ` style="${style}"` : ""}><div class="icon-box"><i class="${ic(i)}"></i></div><h3>${h}</h3><p>${p}</p></div>`;
const tiles = (arr) => `<div class="tiled-content">${arr.map((t) => tile(...t)).join("")}</div>`;
const table = (heads, rows) =>
  `<div class="table-layout"><table><thead><tr>${heads.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c, k) => `<td>${k === 0 ? `<strong>${c}</strong>` : c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
const code = (t, size = 14) => `<div class="code-block" style="font-size: ${size}px; margin-bottom: 16px;">${esc(t)}</div>`;
const twoTiled = (a, b) =>
  `<div class="two-column tiled" style="grid-template-columns: 1fr 1fr;">${[a, b]
    .map(([i, h, html]) => `<div><h3><i class="${ic(i)}"></i> ${h}</h3>${html}</div>`)
    .join("")}</div>`;
// Columna izquierda (badge + bullets) y tarjeta a la derecha
const split = (left, [i, h, p]) =>
  `<div class="two-column"><div>${left}</div><div>${tile(i, h, p, "height: 260px;")}</div></div>`;

// Diagrama de flujo horizontal: trigger → acción → rombo → (sí / no) → fin
function flow({ trigger, action, decision, si, no, fin, tags = {} }) {
  const step = (tag, cls, txt) =>
    `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${cls}">${cls === "diamond" ? `<span>${txt}</span>` : txt}</div></div>`;
  const arrow = `<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>`;
  return `<div class="flow">${step(tags.trigger || "Trigger", "oval", trigger)}${arrow}${step(tags.action || "Acción (IA)", "rect", action)}${arrow}${step(
    tags.decision || "Decisión",
    "diamond",
    decision
  )}${arrow}<div class="fbranch"><div class="fbranch-row"><span class="fchip">${tags.si || "Sí"}</span><div class="fnode rect">${si}</div></div><div class="fbranch-row"><span class="fchip no">${
    tags.no || "No"
  }</span><div class="fnode rect">${no}</div></div></div>${arrow}${step(tags.fin || "Fin / Output", "oval", fin)}</div>`;
}
// Cadena lineal de nodos rectangulares
function chain(nodes) {
  const arrow = `<div class="farrow"><i class="fa-solid fa-arrow-right"></i></div>`;
  return `<div class="flow">${nodes
    .map(([tag, kind, txt]) => `<div class="flow-step"><span class="ftag">${tag}</span><div class="fnode ${kind}" style="width: 150px;">${txt}</div></div>`)
    .join(arrow)}</div>`;
}

// ---------- tipos de filmina ----------
const S = {
  cover: (n, mod, title, sub) =>
    slide(`        <div></div>
        <div class="transition-layout" style="margin-bottom: 30px;">
            <span class="moment-badge">CODER 4.0 • MÓDULO ${mod} • CLASE ${String(n).padStart(2, "0")}</span>
            <h1 style="font-size: 44px;">${title}</h1>
            <p style="font-size: 20px; color: var(--naranja-horizonte); font-weight: 600; margin-top: 10px;">${sub}</p>
        </div>`),
  transition: (b, h, p, bcls = "") =>
    slide(`        <div></div>
        <div class="transition-layout">
            <hr>
            <span class="moment-badge${bcls ? " " + bcls : ""}">${b}</span>
            <h2>${h}</h2>
            <p style="font-size: 20px;">${p}</p>
        </div>`),
  content: (title, inner) =>
    slide(`        <h2 class="slide-title">${title}</h2>
        <div class="content-area">
${inner}
        </div>`),
  center: (title, inner) =>
    slide(`        <h2 class="slide-title">${title}</h2>
        <div class="content-area" style="align-items: center;">
${inner}
        </div>`),
  slido: (title, h3, p, big, p2, w = 820) =>
    S.center(title, `<div class="slido-box" style="width: ${w}px;"><h3>${h3}</h3><p>${p}</p><div class="slido-code">${big}</div><p>${p2}</p></div>`),
  brk: () =>
    slide(
      `        <div></div>
        <div class="transition-layout">
            <div class="break-logo"><i class="fa-solid fa-mug-hot"></i></div>
            <h2>Break</h2>
            <p>Andá por un cafecito o un mate… ¡volvemos en un ratito!</p>
        </div>`,
      "break-slide"
    ).replace(
      FOOT,
      `        <div class="slide-footer" style="border-top-color: rgba(248, 242, 232, 0.15);">
            <div class="brand-logo" style="color: var(--blanco-lienzo);">CODER<span>HOUSE</span></div>
            <div class="slide-index" style="color: rgba(248, 242, 232, 0.5);">NN</div>
        </div>`
    ),
  dudas: (sub = "Este es el momento de preguntar todo lo que necesites") =>
    slide(`        <div class="content-area" style="align-items: center; justify-content: center; text-align: center;">
            <div style="display: flex; gap: 25px; align-items: flex-end; justify-content: center; margin-bottom: 20px;">
                <i class="fa-solid fa-circle-question" style="font-size: 50px; color: var(--amarillo-solar);"></i>
                <i class="fa-solid fa-circle-question" style="font-size: 90px; color: var(--naranja-horizonte);"></i>
                <i class="fa-solid fa-circle-question" style="font-size: 60px; color: var(--rosa-energia);"></i>
            </div>
            <h1 style="font-size: 64px;">¿Dudas? ¿Consultas?</h1>
            <p style="font-size: 22px; color: var(--naranja-horizonte); font-weight: 600; margin-top: 10px;">${sub}</p>
        </div>`),
  // Repaso con aviso de grabación
  recap: (items, nextNote) =>
    S.content("¿Dónde Quedamos?", `${badge("Esta clase queda grabada para que la veas después", "live", "fa-video")}${bullets(items)}${nextNote ? note(nextNote) : ""}`),
  objetivos: (items) => S.content("Objetivos de la Clase", bullets(items)),
  links: (arr) => S.content("Material para Profundizar", tiles(arr.map(([i, h, p, url]) => [i, h, `${p}<br><span style="color: var(--naranja-horizonte); font-weight: 600; display: inline-block; margin-top: 10px;">${url}</span>`]))),
};

function build(n, pageTitle, slides) {
  let body = `<body>\n\n<div class="presentation-viewport">\n\n${slides.join("\n")}\n</div>\n\n`;
  let html = HEAD.replace(/<title>.*<\/title>/, `<title>${pageTitle} | Coderhouse</title>`) + body + TAIL;
  html = html.replace(/(<div class="slide-container) active"/g, "$1\"");
  html = html.replace('<div class="slide-container">', '<div class="slide-container active">');
  html = html.replace('<div class="slide-container break-slide">', '<div class="slide-container break-slide">'); // por si la primera fuera break
  const re = /(<div class="slide-index"[^>]*>)NN</g;
  const tot = (html.match(re) || []).length;
  let i = 0;
  html = html.replace(re, (m, a) => a + String(++i).padStart(2, "0") + " / " + tot + "<");
  const out = path.join(ROOT, `Clase ${n}`, `Clase${String(n).padStart(2, "0")}.html`);
  fs.writeFileSync(out, html);
  return { out, tot };
}

module.exports = { S, badge, note, bullets, tile, tiles, table, code, twoTiled, split, flow, chain, build, esc };
