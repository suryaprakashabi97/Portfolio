/* ═══════════════════════════════════════════════════════════
   SURYAPRAKASH S — PORTFOLIO SCRIPT
   - Projects data (add / edit projects here)
   - Project card rendering
   - Modal (detail page) open / close
   - Sticky nav scroll effect
   - Mobile menu toggle
═══════════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────
// PROJECT DATA
// To add a new project: copy any object below, paste it
// at the end of the array, and fill in your details.
// ─────────────────────────────────────────────────────────
const projects = [
  {
    id: "ev-charging",
    icon: "⚡",
    category: "EV Systems",
    title: "1-Phase & 3-Phase EV Charging Stations",
    brief: "Designed and deployed AC EV charging infrastructure meeting industry compliance standards.",
    overview: "Led the complete hardware design of both single-phase and three-phase EV charging stations at INGLO. The systems were designed to comply with IEC and IS standards for EV supply equipment, covering safety, metering, and communication.",
    highlights: [
      "Designed power electronics front-end for 3-phase AC-to-DC rectification",
      "Integrated pilot signal circuit for J1772/IEC 62196 communication with EV",
      "Implemented over-current, over-voltage, and earth leakage protection",
      "Designed housing and connector interface for IP54-rated outdoor enclosures",
      "Validated designs through electrical testing and certification preparation",
    ],
    tech: ["Power Electronics", "STM32", "Altium Designer", "IEC 62196", "UART", "RCCB", "CAN"],
  },
  {
    id: "e-cycle",
    icon: "🚲",
    category: "EV Systems",
    title: "E-Cycle BLDC Drive",
    brief: "End-to-end BLDC motor drive system for electric bicycle with regenerative braking.",
    overview: "Developed a complete BLDC motor controller for an electric cycle application. The design included FOC (field-oriented control) firmware on a dsPIC33 microcontroller, Hall sensor feedback, and regenerative braking logic.",
    highlights: [
      "Designed 3-phase inverter with gate driver and MOSFET selection",
      "Implemented sensored FOC on dsPIC33 for smooth torque control",
      "Developed regenerative braking with energy recovery circuit",
      "Integrated throttle, brake, and speed display interface",
      "Designed compact PCB layout for under-seat enclosure",
    ],
    tech: ["dsPIC33", "BLDC / FOC", "Gate Drivers", "Hall Sensors", "CadSoft EAGLE", "LTSpice"],
  },
  {
    id: "mppt-solar",
    icon: "☀️",
    category: "Solar Solutions",
    title: "MPPT Hybrid Solar Charge Controller",
    brief: "Maximum Power Point Tracking controller with hybrid grid-solar switching for home lighting.",
    overview: "Designed a hybrid MPPT charge controller that manages solar panel input, battery charging, and grid switchover for solar home lighting systems. The controller maximizes power extraction from panels under varying irradiance conditions.",
    highlights: [
      "Implemented Perturb & Observe MPPT algorithm in firmware",
      "Designed synchronous buck converter for high-efficiency charging",
      "Built hybrid logic for automatic solar-to-grid switchover",
      "Integrated LCD display for real-time power and SOC readout",
      "Achieved > 95% conversion efficiency across load range",
    ],
    tech: ["MPPT Algorithm", "Buck Converter", "Atmel MCU", "CadSoft EAGLE", "MATLAB Simulink", "LTSpice"],
  },
  {
    id: "bms",
    icon: "🔋",
    category: "BMS",
    title: "Active & Passive Battery Management Systems",
    brief: "Designed BMS solutions for Li-ion and LiFePO4 packs used in industrial and consumer products.",
    overview: "At Synergy Circuits, designed both passive and active cell balancing BMS boards for various battery chemistries. The systems included SOC estimation, protection circuits, and communication interfaces for external monitoring.",
    highlights: [
      "Designed passive balancing BMS with resistor-based cell equalization",
      "Developed active balancing topology using capacitor-based charge shuttling",
      "Implemented Coulomb counting for SOC estimation with drift compensation",
      "Integrated over-charge, over-discharge, short circuit, and thermal protection",
      "Built CAN / UART communication interface for BMS telemetry",
    ],
    tech: ["BMS IC", "CAN / UART", "Cell Balancing", "SOC Estimation", "STM32", "Altium Designer"],
  },
  {
    id: "textile-auto",
    icon: "🏭",
    category: "Textile Automation",
    title: "Auto Winder — PLC to Embedded Conversion",
    brief: "Replaced PLC-based textile machinery control with custom embedded systems, cutting costs by 20%.",
    overview: "At LMW Limited, led the initiative to migrate multiple textile machine control systems from PLC platforms to custom MCU-based embedded boards. This reduced per-unit cost, improved response time, and enabled predictive maintenance capabilities.",
    highlights: [
      "Reverse-engineered PLC ladder logic and reimplemented in C on STM32",
      "Designed custom motor control PCB for winder traverse and spindle drive",
      "Implemented real-time closed-loop tension control using embedded sensors",
      "Integrated RS-485 Modbus for machine-to-HMI communication",
      "Created DFMEA and MTBF documentation for new embedded design",
      "Reduced per-unit hardware cost by 20% vs previous PLC solution",
    ],
    tech: ["STM32", "Modbus / RS-485", "Motor Control", "Altium Designer", "DFMEA", "MTBF", "8D"],
  },
  {
    id: "smps",
    icon: "🔌",
    category: "Power Supplies",
    title: "SMPS & DC-DC Converter Designs",
    brief: "Custom switched-mode power supplies for consumer and industrial embedded products.",
    overview: "Designed multiple SMPS and DC-DC converter solutions ranging from isolated flyback topologies for consumer products to synchronous buck/boost converters for embedded systems. All designs included thermal management and EMI considerations.",
    highlights: [
      "Designed flyback SMPS for isolated 5V/12V dual-output applications",
      "Developed synchronous buck regulators for high-current MCU power rails",
      "Conducted LTSpice simulation prior to prototype for faster iteration",
      "Implemented snubber circuits for voltage spike suppression",
      "Performed EMI pre-compliance testing and layout optimization",
    ],
    tech: ["Flyback Topology", "Synchronous Buck", "LTSpice", "TINA TI", "EMI Design", "Altium Designer"],
  },
  {
    id: "condition-monitoring",
    icon: "📊",
    category: "Condition Monitoring",
    title: "Real-Time Industrial Condition Monitoring System",
    brief: "Embedded sensor node for vibration, temperature, and current monitoring of industrial machines.",
    overview: "Developed a real-time condition monitoring system for LMW's textile machinery using embedded sensor nodes. The system collects vibration (accelerometer), temperature (thermistor/thermocouple), and motor current data to predict failures before they occur.",
    highlights: [
      "Designed multi-channel ADC front-end for vibration and current sensing",
      "Implemented FFT-based vibration signature analysis in firmware",
      "Built RS-485 Modbus network for multi-node data aggregation",
      "Developed threshold-based alert system with relay output",
      "Reduced unplanned downtime through early anomaly detection",
    ],
    tech: ["STM32", "Accelerometer", "Modbus RS-485", "ADC", "FFT Firmware", "Altium Designer"],
  },
  {
    id: "led-lighting",
    icon: "💡",
    category: "LED & Lighting",
    title: "AC/DC LED Driver — Street & Indoor Lighting",
    brief: "Constant-current LED driver designs for street lighting and indoor LED module applications.",
    overview: "Designed multiple LED driver circuits at INGLO ranging from offline AC-DC constant-current drivers for street lights to DC-DC LED drivers for indoor panels. Designs focused on efficiency, PFC, and long lifespan.",
    highlights: [
      "Designed PFC-corrected offline LED driver with > 0.95 power factor",
      "Implemented constant current control loop for uniform LED brightness",
      "Integrated thermal protection and NTC-based derating",
      "Designed compact 4-layer PCB for street light driver module",
      "Validated designs per IEC 61347 LED driver standard",
    ],
    tech: ["LED Driver IC", "PFC", "Buck Converter", "EAGLE", "LTSpice", "IEC 61347"],
  },
  {
    id: "bldc-fan",
    icon: "🌀",
    category: "Consumer Products",
    title: "Remote-Controlled BLDC Ceiling Fan",
    brief: "Sensorless BLDC drive for a smart ceiling fan with RF remote and speed control.",
    overview: "Developed the motor control and fan electronics for a sensorless BLDC ceiling fan. The design used back-EMF zero-crossing detection for commutation and integrated an RF receiver for remote speed control.",
    highlights: [
      "Implemented sensorless BLDC commutation via back-EMF ZCD",
      "Designed 3-phase half-bridge inverter with dead-time control",
      "Integrated RF receiver and decoder for remote control input",
      "Developed speed ramp-up / ramp-down logic for smooth user experience",
      "Achieved silent operation at all speed levels",
    ],
    tech: ["BLDC / Sensorless", "Atmel MCU", "Half-Bridge Driver", "RF Remote", "EAGLE"],
  },
  {
    id: "ecu-reverse",
    icon: "🔍",
    category: "Automotive",
    title: "ECU Reverse Engineering — Robert Bosch",
    brief: "In-depth reverse engineering of automotive ECUs for functional replication and hardware debugging.",
    overview: "At Robert Bosch (via Cyient), performed systematic hardware reverse engineering of automotive ECUs. Work involved tracing microcontroller pinouts, decoding communication buses, and mapping memory peripherals to reconstruct functional design documentation.",
    highlights: [
      "Analysed CAN, LIN, and UART traffic using oscilloscope and logic analyser",
      "Traced and documented MCU peripheral assignments from PCB inspection",
      "Reconstructed memory map from bootloader and firmware analysis",
      "Identified BOM cost reduction opportunities by evaluating equivalent components",
      "Integrated custom ADC / op-amp chains for sensor interfacing in replacement designs",
    ],
    tech: ["ECU Analysis", "CAN / LIN / UART", "Logic Analyser", "Oscilloscope", "BOM Optimisation", "Cadence Allegro"],
  },
];

// ─────────────────────────────────────────────────────────
// RENDER PROJECT CARDS
// ─────────────────────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <div
      class="project-card"
      onclick="openModal('${p.id}')"
      role="button"
      tabindex="0"
      aria-label="View details for ${p.title}"
      onkeydown="if(event.key==='Enter') openModal('${p.id}')"
      style="animation-delay:${i * 0.05}s"
    >
      <div class="project-icon">${p.icon}</div>
      <div class="project-cat">${p.category}</div>
      <div class="project-title">${p.title}</div>
      <p class="project-brief">${p.brief}</p>
      <div class="project-arrow">Explore project <span>→</span></div>
    </div>
  `).join("");
}

// ─────────────────────────────────────────────────────────
// MODAL — OPEN / CLOSE
// ─────────────────────────────────────────────────────────
function openModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="modal-header">
      <div class="modal-icon">${project.icon}</div>
      <div class="modal-cat">${project.category}</div>
      <h2 class="modal-title">${project.title}</h2>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Overview</div>
      <p class="modal-body-text">${project.overview}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Key Highlights</div>
      <ul class="modal-list">
        ${project.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">Technologies & Tools</div>
      <div class="modal-tags">
        ${project.tech.map(t => `<span class="modal-tag">${t}</span>`).join("")}
      </div>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Close on overlay click
document.getElementById("modalOverlay").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

// Close on X button
document.getElementById("modalClose").addEventListener("click", closeModal);

// Close on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// ─────────────────────────────────────────────────────────
// STICKY NAV — add shadow on scroll
// ─────────────────────────────────────────────────────────
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// ─────────────────────────────────────────────────────────
// MOBILE MENU TOGGLE
// ─────────────────────────────────────────────────────────
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("open");
});

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// ─────────────────────────────────────────────────────────
// SCROLL-TRIGGERED FADE-IN (for cards and timeline items)
// ─────────────────────────────────────────────────────────
function observeElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity    = "1";
          entry.target.style.transform  = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observe skill cards, project cards, timeline items, edu cards
  document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .edu-card"
  ).forEach((el, i) => {
    el.style.opacity   = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.55s ease ${i * 0.05}s, transform 0.55s ease ${i * 0.05}s`;
    observer.observe(el);
  });
}

// ─────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  observeElements();
});
