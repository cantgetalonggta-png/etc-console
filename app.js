const SKILLS=["9000-word-minimum", "agent-orchestration", "apple-notes", "archivist", "batch-api-wrapper", "blacksmith-testbox", "bluebubbles", "clawhub", "coherent-communication", "common-sense-logic-critical-thinking", "continue-next-or-continue", "document-ingestion", "document-intelligence", "each-structured-prompt-research", "epstein-pdf-batch-ingest", "ethical-data-harvesting", "ethical-scraper-orchestration", "external-api-wrapper", "game-dev", "github", "gog", "grok-4-20-multi-agent", "grok-build-plugins", "issue-triage", "mcporter", "mega-skill", "mongo-tom-roleplay", "nano-pdf", "next-investigation-trigger", "obsidian-vault-maintainer", "omnivoice-api", "openai-whisper-api", "oss-compliance-gate", "pdf-page-section-breakdown", "play-billing-activation-detector", "postgresql-sql", "prose", "qqbot-channel", "rtk-triage", "run-everything-activation", "self-dev-resources", "skill-tree-engine", "swarm-agent-framework", "tdd-rust", "tenant-misconceptions-rebuttal", "tmux", "tool-use", "video-frames", "vite", "wacli"];
const PLUGINS=[{"name": "core-infrastructure", "description": "FUSE heal, session state, install-hands-off, inventory, action ledger", "category": "infrastructure", "skills": ["run-everything-activation", "tool-use", "common-sense-logic-critical-thinking"]}, {"name": "document-intelligence", "description": "PDF/MD/JSON ingest, OCR, page breakdown, vault routing", "category": "documents", "skills": ["document-intelligence", "document-ingestion", "nano-pdf", "pdf-page-section-breakdown", "epstein-pdf-batch-ingest"]}, {"name": "agent-orchestration", "description": "Team of Four, swarm, agent-orchestration, prose VM", "category": "agents", "skills": ["grok-4-20-multi-agent", "swarm-agent-framework", "agent-orchestration", "prose", "archivist"]}, {"name": "research-archival", "description": "Archivist 200-search protocol, ethical harvest, scraper orchestration", "category": "research", "skills": ["archivist", "ethical-data-harvesting", "ethical-scraper-orchestration", "each-structured-prompt-research"]}, {"name": "deploy-everything", "description": "Vite frontend, Vercel path, GitHub, OSS gate, CI parity", "category": "deployment", "skills": ["vite", "github", "oss-compliance-gate", "blacksmith-testbox", "grok-build-plugins"]}, {"name": "skill-tree-engine-pack", "description": "Skill ontology, master/learned trees, encyclopedia cycles", "category": "meta", "skills": ["skill-tree-engine", "clawhub", "mega-skill"]}, {"name": "dev-quality", "description": "TDD, triage, SQL, play billing detector", "category": "quality", "skills": ["tdd-rust", "issue-triage", "rtk-triage", "postgresql-sql", "play-billing-activation-detector"]}];
const META={cycle:4,atoms:72,generated:"2026-11-03T05:38:37.907261Z",backend:"http://127.0.0.1:8787"};
const API=localStorage.getItem("etc_api")||"";
async function api(path){
  if(!API) return null;
  try{const r=await fetch(API+path); if(!r.ok) return null; return await r.json();}catch(e){return null;}
}
const views={
dashboard:()=>`<h1>Operations Dashboard</h1>
<div class=grid>
<div class=card><div class=stat>${SKILLS.length}</div>Live skills</div>
<div class=card><div class=stat>${PLUGINS.length}</div>Plugins</div>
<div class=card><div class=stat>${META.atoms}</div>Skill atoms</div>
<div class=card><div class=stat>${META.cycle}</div>Engine cycle</div>
</div>
<div class=card style="margin-top:1rem">
<h2>Session</h2>
<p class=muted>Autonomous 6-phase multipass · Archivist batch 2 · HEALED dual-path · Vercel team echo-ec69</p>
<p><span class="badge ok">frontend static ready</span> <span class="badge ok">backend multi-route</span> <span class="badge">plugins 7</span></p>
<button class="btn primary" data-view=deploy>Deploy guide</button>
<button class=btn data-view=plugins>Plugins</button>
<button class=btn data-view=archivist>Archivist</button>
<button class=btn data-view=inventory>Inventory</button>
</div>`,
skills:()=>`<h1>Skills (${SKILLS.length})</h1><div class=card>${SKILLS.map(s=>`<div class=skill><span class=tag>skill</span><b>${s}</b></div>`).join("")}</div>`,
plugins:()=>`<h1>Plugins</h1><div class=grid>${PLUGINS.map(p=>`<div class=card><h2>${p.name}</h2><p class=muted>${p.description}</p><div>${p.skills.map(s=>`<span class=tag>${s}</span>`).join("")}</div></div>`).join("")}</div>`,
archivist:()=>`<h1>Archivist</h1><div class=card>
<p><b>Batch 1</b> — plugins · superagent · MCP · skill-tree · Vercel surface.</p>
<p><b>Batch 2</b> — plugin.json · SHA pins · marketplace.json · hooks · config.toml · Vercel static path · Drive heal facts.</p>
<p class=muted>SESSION_STATE/ARCHIVIST_BATCH_*.md · ENCYCLOPEDIA/ARCHIVIST_BATCH_2.md</p>
<pre>SHA pin: ^[0-9a-f]{40}$
Remote source requires git rev-parse HEAD == sha
Local: source.type=local path=./plugins/<name></pre>
</div>`,
inventory:()=>`<h1>Inventory</h1><div class=card>
<ul>
<li><b>frontend/</b> index.html styles.css app.js vercel.json</li>
<li><b>backend/</b> server.py multi-route :8787</li>
<li><b>plugins/</b> 7 categorized Grok Build plugins + marketplace catalog</li>
<li><b>skill-engine/</b> state.json master/learned trees encyclopedia</li>
<li><b>HEALED/</b> canonical install script, encyclopedia, Grok Build Plugins PDF (12p)</li>
<li><b>vault/</b> DISTILL + PDF extracts</li>
<li><b>ENCYCLOPEDIA/</b> permanent knowledge kit</li>
</ul>
</div>`,
deploy:()=>`<h1>Deploy</h1><div class=card>
<h2>Frontend (static SPA)</h2>
<ol>
<li>Files live in <code>frontend/</code></li>
<li>Vercel project: framework null · cleanUrls · SPA rewrite</li>
<li>Team: echo-ec69 (hobby)</li>
<li>GitHub push target: cantgetalonggta-png/etc-console (created by autonomous pass)</li>
</ol>
<pre>vercel.json rewrites → /index.html
# inline deploy via MCP create_deployment files[]
# or: git push → create_git_project</pre>
<h2>Backend</h2>
<ol>
<li><code>python3 backend/server.py</code></li>
<li>Routes: /health /api/skills /api/plugins /api/session /api/skill-engine /api/inventory /api/archivist /api/deploy-status</li>
</ol>
<h2>Plugins</h2>
<pre>grok --plugin-dir plugins/deploy-everything
# or marketplace local path source</pre>
</div>`
};
function render(n){
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===n));
  document.getElementById("app").innerHTML=(views[n]||views.dashboard)();
  document.querySelectorAll("[data-view]").forEach(el=>{if(el.tagName==="BUTTON")el.onclick=()=>render(el.dataset.view);});
}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>render(b.dataset.view));
render("dashboard");
