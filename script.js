(() => {
  const translations = {
    en: {
      "nav.overview": "Overview",
      "nav.work": "Work",
      "nav.systems": "Systems",
      "nav.skills": "Skills",
      "nav.pcb": "PCB Lab",
      "nav.software": "Software Lab",
      "nav.contact": "Contact",
      "hero.kicker": "EMBEDDED AI · ROBOTICS · HARDWARE",
      "hero.title": "Engineering intelligence that works in the physical world.",
      "hero.lead": "I design the chain from custom PCB and MCU firmware to edge inference, cloud telemetry, mobile robots and thermal-control systems.",
      "hero.degree": "MS Control Science & Engineering",
      "hero.school": "Beijing University of Civil Engineering and Architecture",
      "hero.explore": "Explore selected work",
      "hero.readPortfolio": "Read technical portfolio",
      "hero.openPcb": "Open PCB Lab",
      "hero.openSoftware": "Open Software Lab",
      "hero.skill1": "STM32 + ESP32-S3",
      "hero.skill2": "ROS + 3D SLAM",
      "hero.skill3": "PCB + bring-up",
      "hero.skill4": "YOLO + ONNX Runtime",
      "hero.skill5": "COMSOL + FEniCS",
      "hero.figureKicker": "GRADUATION DESIGN · 2026",
      "hero.figureTitle": "Wireless environmental monitoring & early-warning robot",
      "hero.pcbKicker": "PCB hardware",
      "hero.pcbTitle": "TEC control board",
      "hero.aiKicker": "Edge AI",
      "hero.aiTitle": "YOLOv5-Lite inference",
      "profile.kicker": "WORKING METHOD",
      "profile.title": "Evidence first. Full system ownership.",
      "profile.description": "My portfolio is organized around real hardware, software paths and testable artifacts. Each project traces from a physical problem to an implemented system.",
      "profile.stat1": "major robot systems",
      "profile.stat2": "custom PCB families",
      "profile.stat3": "industry thermal-control internship",
      "work.kicker": "SELECTED WORK",
      "work.title": "Systems built around sensing, decision and actuation.",
      "work.note": "Open a project for the complete engineering record, figures and source materials.",
      "projects.p1.title": "Huiyan Shizhu",
      "projects.loopLabel": "LOOP",
      "projects.p1.meta": "Edge AI / IoT integration",
      "projects.p1.description": "Agricultural inspection robot that combines Raspberry Pi edge vision, STM32 sensing and actuation, and BC28 NB-IoT remote supervision for crop pest and disease monitoring.",
      "projects.p1.loop": "Vision → STM32 decision → actuation → NB-IoT telemetry",
      "projects.p2.title": "Zhijing Suiyu",
      "projects.p2.meta": "Hardware / control loop",
      "projects.p2.description": "Indoor environment personalization robot that moves from multi-sensor sampling to LSTM+CNN forecasting and feed-forward fan or humidifier control.",
      "projects.p2.loop": "Sensors → LSTM+CNN forecast → feed-forward control → dashboard",
      "projects.p3.title": "Wireless Environmental Monitoring Robot",
      "projects.p3.meta": "Thesis / full-stack ownership",
      "projects.p3.description": "Full-stack inspection robot for complex environments: 3D perception and local planning, environmental anomaly monitoring, 4G cloud alarms and an on-device voice interface.",
      "projects.p3.loop": "3D perception → ROS planning → STM32 actuation → 4G alarm",
      "projects.p4.title": "AI Wearable Thermal Control",
      "projects.p4.meta": "Beijing · intelligent hardware",
      "projects.p4.description": "Multiphysics and hardware work for an AI-controlled wearable thermal-management product, from CAD and CFD evidence to TEC control PCB bring-up and accelerated simulation workflows.",
      "projects.p4.loop": "COMSOL / Fluent → FEniCS ROM → TEC PCB → thermal validation",
      "projects.viewRecord": "View project record",
      "projects.viewThesis": "View thesis record",
      "projects.viewInternship": "View internship record",
      "systems.kicker": "ENGINEERING LAYERS",
      "systems.title": "One system, connected from sensing to decision.",
      "systems.note": "These layers recur across the agricultural robot, indoor-control robot, graduation design and wearable thermal system.",
      "systems.hardware.title": "Hardware",
      "systems.hardware.description": "Power trees, sensor interfaces, PCB placement/routing, EMC-aware separation and board bring-up.",
      "systems.hardware.stack": "STM32 · ESP32 · Type-C · I2C · PWM · ADC",
      "systems.models.title": "Perception & models",
      "systems.models.description": "Edge vision, time-series forecasting, LiDAR/depth fusion and field reconstruction informed by physics.",
      "systems.models.stack": "YOLO · LSTM/CNN · EKF · PINN/PINO",
      "systems.control.title": "Control & robotics",
      "systems.control.description": "Closed-loop motion, periodic embedded tasks, thermal control and local navigation around real constraints.",
      "systems.control.stack": "ROS · FreeRTOS · 3D SLAM · TEC",
      "systems.cloud.title": "Cloud & validation",
      "systems.cloud.description": "Telemetry, alarms, dashboards, residual analysis and simulation-to-hardware iteration.",
      "systems.cloud.stack": "4G / NB-IoT · HTTP JSON · ThingsBoard",
      "skills.kicker": "SKILLS, AS EVIDENCED",
      "skills.title": "Tools used in working systems, not isolated checkboxes.",
      "skills.embedded.title": "Embedded systems",
      "skills.embedded.item1": "STM32F0 / F1 / F4, ESP32-S3, 51 MCU",
      "skills.embedded.item2": "C/C++, STM32 HAL, FreeRTOS, Keil, CubeIDE",
      "skills.embedded.item3": "UART, I2C, SPI, PWM, ADC and board bring-up",
      "skills.ai.title": "AI & scientific computing",
      "skills.ai.item1": "YOLOv5-Lite, ONNX Runtime, OpenCV",
      "skills.ai.item2": "LSTM/CNN forecasting and residual analysis",
      "skills.ai.item3": "FEniCS, reduced-order models, latent space, PINN/PINO",
      "skills.robotics.title": "Robotics & connected devices",
      "skills.robotics.item1": "ROS, LiDAR/depth fusion, EKF, 3D SLAM",
      "skills.robotics.item2": "BC28 NB-IoT, EC801E Cat-1 4G, ThingsBoard",
      "skills.robotics.item3": "HTTP POST, JSON telemetry and remote command paths",
      "skills.hardware.title": "Hardware & multiphysics",
      "skills.hardware.item1": "Lichuang EDA, power-tree design, DC-DC/LDO",
      "skills.hardware.item2": "COMSOL electrothermal / CFD, ANSYS Fluent, CAD",
      "skills.hardware.item3": "TEC, NTC, fans, multi-sensor integration",
      "footer.kicker": "CONTACT",
      "footer.title": "Open to embedded AI, robotics and intelligent-hardware work.",
      "footer.metaName": "© 2026 Xuanhao Wang",
      "footer.metaStack": "Embedded AI · Robotics · PCB hardware · IoT systems"
    },
    zh: {
      "nav.overview": "概览",
      "nav.work": "项目",
      "nav.systems": "系统",
      "nav.skills": "技能",
      "nav.pcb": "PCB 作品",
      "nav.software": "软件设计",
      "nav.contact": "联系",
      "hero.kicker": "嵌入式 AI · 机器人 · 硬件",
      "hero.title": "让智能真正运行在物理世界中。",
      "hero.lead": "我负责从定制 PCB、MCU 固件，到边缘推理、云端遥测、移动机器人和热控制系统的完整技术链路。",
      "hero.degree": "控制科学与工程硕士",
      "hero.school": "北京建筑大学",
      "hero.explore": "浏览精选项目",
      "hero.readPortfolio": "阅读技术作品集",
      "hero.openPcb": "打开 PCB 作品",
      "hero.openSoftware": "打开软件设计",
      "hero.skill1": "STM32 + ESP32-S3",
      "hero.skill2": "ROS + 3D SLAM",
      "hero.skill3": "PCB + 板级调试",
      "hero.skill4": "YOLO + ONNX Runtime",
      "hero.skill5": "COMSOL + FEniCS",
      "hero.figureKicker": "毕业设计 · 2026",
      "hero.figureTitle": "基于无线网络的环境监测预警机器人",
      "hero.pcbKicker": "PCB 硬件",
      "hero.pcbTitle": "TEC 控制板",
      "hero.aiKicker": "边缘 AI",
      "hero.aiTitle": "YOLOv5-Lite 推理",
      "profile.kicker": "工作方法",
      "profile.title": "以证据为先，完整负责系统落地。",
      "profile.description": "作品集围绕真实硬件、软件链路和可验证工程产物组织，每个项目都从实际问题追踪到可运行系统。",
      "profile.stat1": "主要机器人系统",
      "profile.stat2": "定制 PCB 系列",
      "profile.stat3": "产业热控制实习",
      "work.kicker": "精选项目",
      "work.title": "围绕感知、决策与执行构建系统。",
      "work.note": "打开项目，查看完整工程记录、图片证据和源资料。",
      "projects.p1.title": "慧眼识株",
      "projects.loopLabel": "闭环",
      "projects.p1.meta": "边缘 AI / 物联网集成",
      "projects.p1.description": "农业巡检机器人结合树莓派边缘视觉、STM32 感知与执行控制，以及 BC28 NB-IoT 远程监管，实现作物病虫害监测。",
      "projects.p1.loop": "视觉识别 → STM32 决策 → 执行机构 → NB-IoT 遥测",
      "projects.p2.title": "智境·随驭",
      "projects.p2.meta": "硬件 / 控制闭环",
      "projects.p2.description": "室内环境个性化调控机器人从多传感器采样出发，通过 LSTM+CNN 预测，并前馈控制风扇或加湿器。",
      "projects.p2.loop": "传感器 → LSTM+CNN 预测 → 前馈控制 → 数据看板",
      "projects.p3.title": "无线环境监测预警机器人",
      "projects.p3.meta": "毕业设计 / 全栈负责",
      "projects.p3.description": "面向复杂环境的全栈巡检机器人，包含三维感知与局部规划、环境异常监测、4G 云端告警和设备端语音交互。",
      "projects.p3.loop": "三维感知 → ROS 规划 → STM32 执行 → 4G 告警",
      "projects.p4.title": "AI 智能穿戴热控制",
      "projects.p4.meta": "北京 · 智能硬件",
      "projects.p4.description": "面向 AI 控温智能穿戴产品开展多物理场仿真与硬件工作，覆盖 CAD/CFD 证据、TEC 控制 PCB 调试和加速仿真流程。",
      "projects.p4.loop": "COMSOL / Fluent → FEniCS 降阶模型 → TEC PCB → 热验证",
      "projects.viewRecord": "查看项目记录",
      "projects.viewThesis": "查看毕设记录",
      "projects.viewInternship": "查看实习记录",
      "systems.kicker": "工程分层",
      "systems.title": "从感知到决策，连接成一个完整系统。",
      "systems.note": "这些工程层贯穿农业机器人、室内调控机器人、毕业设计和穿戴式热控制系统。",
      "systems.hardware.title": "硬件",
      "systems.hardware.description": "电源树、传感器接口、PCB 布局布线、EMC 分区和板级调试。",
      "systems.hardware.stack": "STM32 · ESP32 · Type-C · I2C · PWM · ADC",
      "systems.models.title": "感知与模型",
      "systems.models.description": "边缘视觉、时间序列预测、激光雷达/深度融合，以及物理约束下的场重建。",
      "systems.models.stack": "YOLO · LSTM/CNN · EKF · PINN/PINO",
      "systems.control.title": "控制与机器人",
      "systems.control.description": "闭环运动、嵌入式周期任务、热控制，以及真实约束下的局部导航。",
      "systems.control.stack": "ROS · FreeRTOS · 3D SLAM · TEC",
      "systems.cloud.title": "云端与验证",
      "systems.cloud.description": "遥测、告警、数据看板、残差分析和仿真到硬件的迭代验证。",
      "systems.cloud.stack": "4G / NB-IoT · HTTP JSON · ThingsBoard",
      "skills.kicker": "技能证据",
      "skills.title": "技能来自真实系统，而不是孤立的工具清单。",
      "skills.embedded.title": "嵌入式系统",
      "skills.embedded.item1": "STM32F0 / F1 / F4、ESP32-S3、51 单片机",
      "skills.embedded.item2": "C/C++、STM32 HAL、FreeRTOS、Keil、CubeIDE",
      "skills.embedded.item3": "UART、I2C、SPI、PWM、ADC 和板级调试",
      "skills.ai.title": "AI 与科学计算",
      "skills.ai.item1": "YOLOv5-Lite、ONNX Runtime、OpenCV",
      "skills.ai.item2": "LSTM/CNN 预测与残差分析",
      "skills.ai.item3": "FEniCS、降阶模型、潜空间、PINN/PINO",
      "skills.robotics.title": "机器人与联网设备",
      "skills.robotics.item1": "ROS、激光雷达/深度融合、EKF、3D SLAM",
      "skills.robotics.item2": "BC28 NB-IoT、EC801E Cat-1 4G、ThingsBoard",
      "skills.robotics.item3": "HTTP POST、JSON 遥测和远程指令链路",
      "skills.hardware.title": "硬件与多物理场",
      "skills.hardware.item1": "立创 EDA、电源树设计、DC-DC/LDO",
      "skills.hardware.item2": "COMSOL 电磁/电势/电热/CFD、ANSYS Fluent、CAD",
      "skills.hardware.item3": "TEC、NTC、风扇和多传感器集成",
      "footer.kicker": "联系",
      "footer.title": "期待参与嵌入式 AI、机器人和智能硬件工作。",
      "footer.metaName": "© 2026 Xuanhao Wang",
      "footer.metaStack": "嵌入式 AI · 机器人 · PCB 硬件 · 物联网系统"
    }
  };

  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (window.lucide) {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  }

  const languageToggle = document.querySelector('[data-language-toggle]');
  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    languageToggle?.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    languageToggle?.setAttribute('data-tooltip', language === 'zh' ? 'English' : 'Chinese');
    languageToggle?.classList.toggle('is-zh', language === 'zh');
    document.querySelector('.skip-link')?.replaceChildren(document.createTextNode(language === 'zh' ? '跳转到项目' : 'Skip to work'));
    document.querySelector('.site-nav')?.setAttribute('aria-label', language === 'zh' ? '作品集栏目' : 'Portfolio sections');
    document.querySelector('.hero-evidence')?.setAttribute('aria-label', language === 'zh' ? '工程证据' : 'Engineering evidence');
    document.querySelector('.menu-toggle')?.setAttribute('aria-label', language === 'zh' ? '打开作品集导航' : 'Open portfolio navigation');
    document.title = language === 'zh' ? '王宣淏 | 工程作品集' : 'Xuanhao Wang | Engineering Portfolio';
  };

  languageToggle?.addEventListener('click', () => {
    const nextLanguage = document.documentElement.lang === 'zh-CN' ? 'en' : 'zh';
    applyLanguage(nextLanguage);
  });

  applyLanguage('en');

  const updateActiveNav = () => {
    const position = window.scrollY + 130;
    let active = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= position) active = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${active}`);
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      window.setTimeout(updateActiveNav, 350);
      if (siteNav?.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  menuToggle?.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close portfolio navigation' : 'Open portfolio navigation');
    menuToggle.querySelector('[data-lucide]')?.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav?.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.focus();
    }
  });

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();
