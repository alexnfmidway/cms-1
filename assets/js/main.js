/**
 * CM SOLUTION - CNC & INDUSTRIAL SOLUTIONS
 * Dynamic Logic & Catalog Engine
 * Official Contacts:
 * WhatsApp: +55 (11) 94361-9085
 * Telefone: +55 (11) 95844-6116
 * E-mail: prof.carllosmelo@gmail.com
 */

const WHATSAPP_NUM = "5511943619085";

// Machine Catalog Database with Authentic Simcomaq Machinery
const MACHINES_DATA = [
  {
    id: "vux400",
    name: "Centro de Usinagem 5 Eixos VUX 400",
    category: "5eixos-portal",
    badge: "5 Eixos Simultâneos",
    highlight: true,
    tagline: "Máxima precisão e versatilidade para usinagens complexas, moldes, matrizes e setor aeroespacial.",
    image: "assets/machines/centro-de-usinagem-5eixos-vux400.jpg",
    specsPills: ["5 Eixos", "Mesa Ø 400 mm", "Spindle 12.000 RPM", "Alta Rigidez"],
    specsFull: {
      "Tipo de Estrutura": "Centro de Usinagem Vertical 5 Eixos",
      "Diâmetro da Mesa": "Ø 400 mm",
      "Curso Eixo X / Y / Z": "400 / 400 / 400 mm",
      "Inclinação Eixo A / Rotação C": "-120° a +30° / 360° Contínuo",
      "Rotação Máxima do Spindle": "12.000 a 15.000 RPM Direct Drive",
      "Cone de Fixação": "BT40 / BBT40",
      "Avanço Rápido (X/Y/Z)": "36 / 36 / 36 m/min",
      "Comando CNC Suportado": "Heidenhain / Siemens 840D / Fanuc",
      "Aplicação": "Aeroespacial, Moldes de Precisão, Implantes Médicos"
    }
  },
  {
    id: "vmx1020",
    name: "Centro de Usinagem Vertical VMX 1020",
    category: "centros",
    badge: "Mais Vendido",
    highlight: true,
    tagline: "Equipamento de alta rigidez e estabilidade térmica projetado para alta taxa de remoção de cavaco e precisão geométrica.",
    image: "assets/machines/centro-de-usinagem-vertical-vmx1020.png",
    specsPills: ["Mesa 1150 x 560 mm", "Spindle 10.000 RPM", "Trocador 24 Ferramentas", "BT40"],
    specsFull: {
      "Tipo de Estrutura": "Centro Vertical Coluna C Robusta",
      "Dimensões da Mesa": "1.150 x 560 mm",
      "Curso X / Y / Z": "1.020 / 560 / 560 mm",
      "Carga Máxima sobre a Mesa": "800 kg",
      "Cone de Fixação": "BT40",
      "Rotação do Spindle": "10.000 RPM (Acoplamento Direto)",
      "Capacidade Magazine": "24 Ferramentas (Braço Duplo Rápido)",
      "Comando CNC": "Fanuc 0i-MF Plus / Siemens",
      "Aplicação": "Ferramentarias, Matrizarias e Produção Seriada"
    }
  },
  {
    id: "ftc350",
    name: "Torno CNC Barramento Inclinado FTC-350",
    category: "tornos-cnc",
    badge: "Alta Produtividade",
    highlight: true,
    tagline: "Barramento inclinado monobloco em ferro fundido meehanite com torre hidráulica / servo de indexação ultrarrápida.",
    image: "assets/machines/torneamento-ftc350.png",
    specsPills: ["Barramento Inclinado 30°", "Placa Hidráulica 8\"", "Passagem Ø 65 mm", "Torre 12 pos."],
    specsFull: {
      "Tipo de Barramento": "Inclinado 30° Monobloco",
      "Diâmetro Máximo Torneável": "Ø 350 mm",
      "Comprimento Máximo": "550 mm",
      "Passagem de Barra": "Ø 65 mm",
      "Tamanho da Placa": "8\" Hidráulica",
      "Torre de Ferramentas": "12 Posições Servoacionada (0.2s)",
      "Rotação do Spindle": "4.500 RPM",
      "Comando CNC": "Fanuc 0i-TF / GSK / Syntec",
      "Aplicação": "Torneamento de Alta Produção Seriada e Precisão"
    }
  },
  {
    id: "fl400",
    name: "Torno CNC Barramento Paralelo Série FL-400",
    category: "tornos-cnc",
    badge: "Versátil & Robusto",
    highlight: false,
    tagline: "Combina a versatilidade do barramento paralelo com a precisão dos fusos de esferas e comando numérico de última geração.",
    image: "assets/machines/torno-cnc-de-barramento-paralelo-serie-fl400.png",
    specsPills: ["Ø 400 mm", "Entre Pontas 1.000/1.500 mm", "Torre Elétrica 4/6 pos.", "Ciclos Automáticos"],
    specsFull: {
      "Tipo de Barramento": "Paralelo Temperado e Retificado por Indução",
      "Diâmetro sobre Barramento": "Ø 400 mm",
      "Distância Entre Pontas": "1.000 mm / 1.500 mm",
      "Furo da Árvore": "Ø 52 mm / Ø 82 mm opcional",
      "Nariz da Árvore": "A2-6",
      "Faixa de Rotação": "35 a 2.500 RPM (Inversor Vetorial)",
      "Torre de Ferramentas": "4 ou 6 Posições Elétrica Vertical",
      "Comando CNC": "GSK 980 / Fanuc / Siemens",
      "Aplicação": "Manutenção, Eixos Longos e Lotes Médios/Pequenos"
    }
  },
  {
    id: "ftl500",
    name: "Torno CNC Pesado Série FTL-500",
    category: "tornos-cnc",
    badge: "Torneamento Pesado",
    highlight: false,
    tagline: "Construção ultra-pesada para usinagem de grandes eixos, tubos de óleo e gás, flanges e cilindros industriais com extrema rigidez.",
    image: "assets/machines/torno-ftl500-1500.png",
    specsPills: ["Ø 500 mm", "Entre Pontas 1.500/2.000 mm", "Furo Árvore Ø 105 mm", "Alto Torque"],
    specsFull: {
      "Tipo de Barramento": "Paralelo Extra Largo de 400 mm",
      "Diâmetro sobre Barramento": "Ø 500 mm",
      "Diâmetro sobre o Carro": "Ø 290 mm",
      "Distância Entre Pontas": "1.500 mm a 2.000 mm",
      "Furo da Árvore": "Ø 82 mm a Ø 105 mm",
      "Potência Motor Principal": "11 kW / 15 HP Servomotor",
      "Comando CNC": "Fanuc 0i-TF / Siemens",
      "Aplicação": "Setor Petrolífero, Mineração, Cilindros Hidráulicos"
    }
  },
  {
    id: "tc20a",
    name: "Centro de Furação & Rosqueamento Rápido TC20A",
    category: "centros",
    badge: "Velocidade Extrema",
    highlight: false,
    tagline: "Projetado para usinagens ultrarrápidas de peças pequenas em alumínio, ferro fundido e ligas leves com trocas de ferramenta instantâneas.",
    image: "assets/machines/centro-furacao-rosqueamento-tc20a.png",
    specsPills: ["Spindle 20.000 RPM", "Troca em 1.2s", "Avanço 48 m/min", "BT30"],
    specsFull: {
      "Tipo": "Tapping Center / Centro de Alta Dinâmica",
      "Curso X / Y / Z": "500 / 400 / 300 mm",
      "Avanço Rápido (X/Y/Z)": "48 / 48 / 48 m/min",
      "Aceleração dos Eixos": "1.2 G",
      "Rotação Máxima": "20.000 RPM Direct Drive",
      "Tempo Troca de Ferramenta": "1.2 segundos (cavaco a cavaco)",
      "Capacidade Magazine": "16 a 21 Ferramentas Tipo Tambor",
      "Comando CNC": "Mitsubishi M80 / Fanuc 0i-MF",
      "Aplicação": "Eletrônicos, Autopeças em Alumínio, Carcaças"
    }
  },
  {
    id: "svw_portal",
    name: "Centro de Usinagem Portal Dupla Coluna SVW",
    category: "5eixos-portal",
    badge: "Linha Pesada Portal",
    highlight: false,
    tagline: "Estrutura tipo ponte de colossal rigidez para grandes moldes automotivos, bases de prensas e estruturas industriais de grande porte.",
    image: "assets/machines/centro-de-usinagem-portal-dupla-coluna-svw.png",
    specsPills: ["Curso X até 3.200 mm", "Largura Portal 1.800 mm", "Mesa até 10 Ton", "Spindle BT50"],
    specsFull: {
      "Configuração": "Pórtico / Dupla Coluna Monobloco",
      "Curso Eixo X": "2.200 a 3.200 mm",
      "Distância Entre Colunas": "1.800 mm",
      "Capacidade de Carga": "Até 10.000 kg",
      "Cone de Árvore": "BT50 com Engrenamento Caixa ZF de 2 Estágios",
      "Potência do Spindle": "22 kW / 30 HP",
      "Comando CNC": "Fanuc 31i / Heidenhain TNC 640",
      "Aplicação": "Estampos Automotivos, Moldes Plásticos Grandes"
    }
  },
  {
    id: "quazar_6256",
    name: "Torno Mecânico Convencional Quazar C6256ZX/2000",
    category: "tornos-conv",
    badge: "Mecânico Robusto",
    highlight: false,
    tagline: "Torno convencional consagrado no mercado pela sua durabilidade, barramento temperado e excelente precisão para ferramentaria.",
    image: "assets/machines/torno-mecanico-convencional-quazar-c6256zx-2000.png",
    specsPills: ["Entre Pontas 2.000 mm", "Ø sobre Barramento 560 mm", "Ø na Cava 785 mm", "Robusto"],
    specsFull: {
      "Tipo de Acionamento": "Mecânico Convencional / Caixa Norton Completa",
      "Distância Entre Pontas": "2.000 mm",
      "Diâmetro sobre o Barramento": "Ø 560 mm",
      "Diâmetro na Cava (Vão)": "Ø 785 mm",
      "Passagem da Árvore": "Ø 80 mm / Ø 105 mm",
      "Faixa de Velocidades": "24 Velocidades (9 a 1.600 RPM)",
      "Potência do Motor": "7.5 kW / 10 HP",
      "Acessórios Inclusos": "Placa 3 Castanhas, Lunetas Fixa e Móvel, Iluminação LED",
      "Aplicação": "Ferramentaria, Usinagem Geral e Manutenção"
    }
  },
  {
    id: "quazar_6240",
    name: "Torno Mecânico Universal Quazar C6240ZK/1000",
    category: "tornos-conv",
    badge: "Essencial Oficina",
    highlight: false,
    tagline: "O torno ideal para oficinas de manutenção rápida, escolas técnicas e peças unitárias com operação suave e confiável.",
    image: "assets/machines/torno_quazar_6240.png",
    specsPills: ["Entre Pontas 1.000 mm", "Ø sobre Barramento 400 mm", "Passagem Ø 52 mm", "Pronta Entrega"],
    specsFull: {
      "Tipo de Equipamento": "Torno Universal Convencional",
      "Distância Entre Pontas": "1.000 mm",
      "Diâmetro sobre Barramento": "Ø 400 mm",
      "Diâmetro na Cava": "Ø 630 mm",
      "Passagem da Árvore": "Ø 52 mm",
      "Potência do Motor": "4 kW / 5.5 HP",
      "Acessórios": "Sistema de Refrigeração, Freio de Pé, Proteção de Mandril",
      "Aplicação": "Usinagem Rápida, Reparos Industriais, Ferramentaria Leve"
    }
  },
  {
    id: "stl8ii",
    name: "Torno CNC de Alta Precisão STL-8II",
    category: "tornos-cnc",
    badge: "Alta Velocidade",
    highlight: false,
    tagline: "Centro de torneamento compacto com guias lineares de rolos de alta rigidez para acabamento superficial espelhado.",
    image: "assets/machines/torno-stl8ii.png",
    specsPills: ["Placa 8\"", "Rotação 4.500 RPM", "Torre Hidráulica 12 Pos.", "Guias Lineares"],
    specsFull: {
      "Tipo de Barramento": "Guias Lineares de Rolos THK / Hiwin",
      "Diâmetro Torneável": "Ø 320 mm",
      "Comprimento Útil": "480 mm",
      "Tamanho da Placa": "8\" Hidráulica com Cilindro Passante",
      "Passagem de Barra": "Ø 52 mm",
      "Torre de Ferramentas": "12 Posições BMT ou VDI",
      "Avanço Rápido": "30 m/min nos eixos X e Z",
      "Comando CNC": "Fanuc 0i-TF Plus",
      "Aplicação": "Componentes Automotivos, Válvulas, Conexões Hidráulicas"
    }
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderMachineCards(MACHINES_DATA);
  initCatalogFilters();
  initSearch();
  initModalEvents();
  initCalculator();
  initContactForm();
  initFAQ();
  initScrollHeader();
  initMobileNav();
  initBackToTop();
});

// Render Machine Cards
function renderMachineCards(machines) {
  const container = document.getElementById("machineGrid");
  const emptyState = document.getElementById("emptyState");
  if (!container) return;

  if (machines.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  container.innerHTML = machines.map(m => {
    return `
      <article class="machine-card" data-id="${m.id}" data-category="${m.category}">
        <span class="machine-badge ${m.highlight ? 'highlight' : ''}">${m.badge}</span>
        <div class="machine-thumb-wrap" onclick="openMachineModal('${m.id}')" title="Clique para ver ficha completa">
          <img src="${m.image}" alt="${m.name}" class="machine-thumb" loading="lazy">
        </div>
        <div class="card-body">
          <div class="machine-category">${getCategoryLabel(m.category)}</div>
          <h3 class="machine-name">${m.name}</h3>
          <p class="machine-tagline">${m.tagline}</p>
          <div class="specs-grid-pill">
            ${m.specsPills.map(s => `<span class="spec-pill">${s}</span>`).join('')}
          </div>
          <div class="card-footer-actions">
            <button class="btn btn-outline btn-sm" onclick="openMachineModal('${m.id}')">
              <span>Ficha Técnica</span>
            </button>
            <button class="btn btn-primary btn-sm" onclick="selectMachineForQuote('${m.name}')">
              <span>Cotação ↗</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function getCategoryLabel(cat) {
  switch (cat) {
    case 'centros': return 'Centro de Usinagem Vertical';
    case 'tornos-cnc': return 'Torno CNC Industrial';
    case 'tornos-conv': return 'Torno Convencional Mecânico';
    case '5eixos-portal': return '5 Eixos & Portal Dupla Coluna';
    default: return 'Equipamento CNC';
  }
}

// Filter Tabs
function initCatalogFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilterAndSearch();
    });
  });
}

// Search
function initSearch() {
  const searchInput = document.getElementById("machineSearch");
  if (!searchInput) return;
  searchInput.addEventListener("input", () => {
    applyFilterAndSearch();
  });
}

function applyFilterAndSearch() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const filterCat = activeBtn ? activeBtn.dataset.filter : "todos";
  const searchInput = document.getElementById("machineSearch");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = MACHINES_DATA.filter(m => {
    const matchesCat = filterCat === "todos" || m.category === filterCat;
    const matchesSearch = query === "" || 
      m.name.toLowerCase().includes(query) || 
      m.tagline.toLowerCase().includes(query) ||
      m.specsPills.some(p => p.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  renderMachineCards(filtered);
}

// Modal Lightbox
function openMachineModal(machineId) {
  const machine = MACHINES_DATA.find(m => m.id === machineId);
  if (!machine) return;

  const modal = document.getElementById("machineModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalTagline = document.getElementById("modalTagline");
  const modalSpecsTable = document.getElementById("modalSpecsTable");
  const modalQuoteBtn = document.getElementById("modalQuoteBtn");

  if (modalImg) modalImg.src = machine.image;
  if (modalTitle) modalTitle.textContent = machine.name;
  if (modalTagline) modalTagline.textContent = machine.tagline;

  if (modalSpecsTable) {
    modalSpecsTable.innerHTML = Object.entries(machine.specsFull).map(([key, val]) => `
      <tr>
        <td>${key}</td>
        <td>${val}</td>
      </tr>
    `).join('');
  }

  if (modalQuoteBtn) {
    modalQuoteBtn.onclick = () => {
      closeMachineModal();
      selectMachineForQuote(machine.name);
    };
  }

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeMachineModal() {
  const modal = document.getElementById("machineModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function initModalEvents() {
  const closeBtn = document.getElementById("modalCloseBtn");
  const modal = document.getElementById("machineModal");

  if (closeBtn) closeBtn.addEventListener("click", closeMachineModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeMachineModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMachineModal();
  });
}

// Select Machine for Quote
function selectMachineForQuote(machineName) {
  const interestSelect = document.getElementById("interest");
  const detailsField = document.getElementById("details");
  const contactSection = document.getElementById("contato");

  if (interestSelect) interestSelect.value = "Compra de Máquina CNC / Equipamento";
  if (detailsField) detailsField.value = `Olá! Gostaria de receber proposta comercial e disponibilidade do equipamento: ${machineName}.`;

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const nameInput = document.getElementById("name");
      if (nameInput) nameInput.focus({ preventScroll: true });
    }, 600);
  }
}

// Productivity Calculator
function initCalculator() {
  const shiftsInput = document.getElementById("calcShifts");
  const partsInput = document.getElementById("calcParts");
  const cycleInput = document.getElementById("calcCycle");
  const optimInput = document.getElementById("calcOptim");

  const shiftsVal = document.getElementById("calcShiftsVal");
  const partsVal = document.getElementById("calcPartsVal");
  const cycleVal = document.getElementById("calcCycleVal");
  const optimVal = document.getElementById("calcOptimVal");

  const resHours = document.getElementById("resHours");
  const resExtraParts = document.getElementById("resExtraParts");
  const resGainPct = document.getElementById("resGainPct");

  function update() {
    const shifts = parseInt(shiftsInput?.value || 2);
    const parts = parseInt(partsInput?.value || 2500);
    const cycleMin = parseFloat(cycleInput?.value || 8);
    const optimPct = parseInt(optimInput?.value || 30);

    if (shiftsVal) shiftsVal.textContent = shifts === 1 ? "1 Turno (8h)" : `${shifts} Turnos (${shifts * 8}h/dia)`;
    if (partsVal) partsVal.textContent = `${parts.toLocaleString("pt-BR")} pçs/mês`;
    if (cycleVal) cycleVal.textContent = `${cycleMin} min/peça`;
    if (optimVal) optimVal.textContent = `${optimPct}% de ganho`;

    // Calculations
    const savedMinutesPerPart = cycleMin * (optimPct / 100);
    const totalMinutesSaved = savedMinutesPerPart * parts;
    const hoursSaved = Math.round(totalMinutesSaved / 60);

    const newCycleMin = cycleMin - savedMinutesPerPart;
    const extraParts = Math.round((hoursSaved * 60) / newCycleMin);

    if (resHours) resHours.textContent = `${hoursSaved}h`;
    if (resExtraParts) resExtraParts.textContent = `+${extraParts.toLocaleString("pt-BR")} pçs`;
    if (resGainPct) resGainPct.textContent = `+${optimPct}%`;
  }

  [shiftsInput, partsInput, cycleInput, optimInput].forEach(inp => {
    if (inp) inp.addEventListener("input", update);
  });

  update();
}

// Contact & Quote WhatsApp Form
function initContactForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const company = document.getElementById("company")?.value.trim() || "";
    const phone = document.getElementById("phone")?.value.trim() || "";
    const interest = document.getElementById("interest")?.value || "";
    const details = document.getElementById("details")?.value.trim() || "";

    let text = `*SOLICITAÇÃO DE CONTATO - CM SOLUTION*\n\n`;
    text += `👤 *Nome:* ${name}\n`;
    if (company) text += `🏢 *Empresa:* ${company}\n`;
    if (phone) text += `📞 *WhatsApp:* ${phone}\n`;
    text += `🎯 *Interesse:* ${interest}\n`;
    if (details) text += `📝 *Detalhes:* ${details}\n\n`;
    text += `_Enviado pelo site oficial CM SOLUTION_`;

    const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  });
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(other => {
          other.classList.remove("active");
          const otherAns = other.querySelector(".faq-answer");
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + 30 + "px";
        }
      });
    }
  });
}

// Header & Navigation Scroll Effect
function initScrollHeader() {
  const header = document.querySelector(".site-header");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }

    if (backToTop) {
      if (scrollPos > 400) backToTop.classList.add("visible");
      else backToTop.classList.remove("visible");
    }
  });
}

// Mobile Nav Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggle");
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && header) {
    toggleBtn.addEventListener("click", () => {
      header.classList.toggle("mobile-open");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        header.classList.remove("mobile-open");
      });
    });
  }
}

// Back to Top Button
function initBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Global WhatsApp quick click
window.openDirectWhatsApp = function(customMsg) {
  const msg = customMsg || "Olá! Vim pelo site da CM SOLUTION e gostaria de falar com um especialista técnico.";
  window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
};

