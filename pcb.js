(() => {
  const translations = {
    en: {
      "pcb.skip": "Skip to PCB projects", "pcb.nav.home": "Home", "pcb.nav.thesis": "Thesis boards", "pcb.nav.zhijing": "Zhijing boards", "pcb.nav.thermal": "TEC board",
      "pcb.kicker": "PCB HARDWARE LAB", "pcb.title": "Boards that carry the system.", "pcb.lead": "A focused record of the custom boards I designed, assembled, powered up and integrated across robots and thermal-control hardware.", "pcb.stat1": "board-level evidence sets", "pcb.stat2": "project families", "pcb.stat3": "MCU and control domains", "pcb.heroNoteLabel": "READ THE BOARDS", "pcb.heroNote": "Layout shows ownership. Assembly shows bring-up. The system path explains why each interface exists.", "pcb.explore": "Explore board families",
      "pcb.thesis.kicker": "GRADUATION DESIGN", "pcb.thesis.title": "Environmental IoT + voice multimodal boards", "pcb.thesis.note": "Two custom boards split sensing, gateway and voice interaction responsibilities across the inspection robot.", "pcb.thesis.board1.label": "LAYOUT / STM32F407", "pcb.thesis.board1.title": "Environmental IoT mainboard", "pcb.thesis.board1.description": "Power rails, sensor interfaces and gateway connectivity for dual temperature-humidity monitoring, 4G telemetry and alarm logic.", "pcb.thesis.board2.label": "ASSEMBLED / ESP32-S3", "pcb.thesis.board2.title": "AI voice multimodal board", "pcb.thesis.board2.description": "Audio capture, display and long-lived edge interaction in one board: dual microphones, ES7210 ADC and QSPI touch display.", "pcb.thesis.proof": "Layout and assembled evidence together show the path from interface definition to powered hardware.",
      "pcb.zhijing.kicker": "ZHIJING · SUIYU", "pcb.zhijing.title": "A modular control stack for indoor climate", "pcb.zhijing.note": "Three boards separate sensing, power conversion and actuator drive so each subsystem can be tested and tuned independently.", "pcb.zhijing.sensor.label": "01 / SENSOR BOARD", "pcb.zhijing.sensor.title": "Multi-sensor acquisition", "pcb.zhijing.sensor.description": "I2C sensing for temperature, humidity and air-quality features feeding the forecast model.", "pcb.zhijing.power.label": "02 / POWER BOARD", "pcb.zhijing.power.title": "Power and noise boundaries", "pcb.zhijing.power.description": "A dedicated power board keeps conversion and switching noise away from the sampled signals.", "pcb.zhijing.actuator.label": "03 / ACTUATOR BOARD", "pcb.zhijing.actuator.title": "Fan / humidifier drive", "pcb.zhijing.actuator.description": "PWM and relay outputs turn the LSTM+CNN forecast into physical environmental regulation.",
      "pcb.thermal.kicker": "BEIJING INTERNSHIP", "pcb.thermal.title": "TEC control hardware for wearable thermal systems", "pcb.thermal.note": "The thermal-control board sits at the boundary between multiphysics simulation, TEC interfaces, sensing and prototype validation.", "pcb.thermal.layoutLabel": "LAYOUT / TEC CONTROL", "pcb.thermal.layoutTitle": "Thermal-control PCB", "pcb.thermal.layoutDescription": "A hardware handoff point for TEC, NTC and fan interfaces, with power and control paths aligned to the thermal design.", "pcb.thermal.front": "Front view / assembled evidence", "pcb.thermal.test": "Under test / power-on validation", "pcb.footer.kicker": "PCB HARDWARE", "pcb.footer.title": "From schematic boundaries to working boards.", "pcb.footer.back": "Back to portfolio", "pcb.footer.meta": "PCB hardware · Embedded systems · Robotics"
    },
    zh: {
      "pcb.skip": "跳转到 PCB 项目", "pcb.nav.home": "主页", "pcb.nav.thesis": "毕设双板", "pcb.nav.zhijing": "智境三板", "pcb.nav.thermal": "TEC 控制板",
      "pcb.kicker": "PCB 硬件实验室", "pcb.title": "让系统真正运行起来的电路板。", "pcb.lead": "集中展示我在机器人与热控制硬件中设计、装配、上电并完成集成的定制 PCB。", "pcb.stat1": "板级证据组", "pcb.stat2": "项目系列", "pcb.stat3": "MCU 与控制域", "pcb.heroNoteLabel": "如何阅读这些板卡", "pcb.heroNote": "布局图体现设计负责，实物图体现板级调试，系统链路解释每个接口为什么存在。", "pcb.explore": "浏览 PCB 项目",
      "pcb.thesis.kicker": "毕业设计", "pcb.thesis.title": "环境物联网与语音多模态双板", "pcb.thesis.note": "两块定制板分别承担感知网关与语音交互职责，共同构成巡检机器人的板级基础。", "pcb.thesis.board1.label": "布局 / STM32F407", "pcb.thesis.board1.title": "环境物联网主板", "pcb.thesis.board1.description": "为双温湿度监测、4G 遥测和异常告警提供电源、传感器接口与网关通信。", "pcb.thesis.board2.label": "实物 / ESP32-S3", "pcb.thesis.board2.title": "AI 语音多模态板", "pcb.thesis.board2.description": "在一块板上完成双麦克风采集、ES7210 ADC、QSPI 触摸屏和长连接边缘交互。", "pcb.thesis.proof": "布局图与装配图共同展示从接口定义到实物上电的完整路径。",
      "pcb.zhijing.kicker": "智境·随驭", "pcb.zhijing.title": "面向室内环境的模块化控制板组", "pcb.zhijing.note": "传感、供电和执行器分板设计，便于各子系统独立测试、调试和更换。", "pcb.zhijing.sensor.label": "01 / 传感器板", "pcb.zhijing.sensor.title": "多传感器采集", "pcb.zhijing.sensor.description": "通过 I2C 采集温度、湿度和空气质量特征，为预测模型提供输入。", "pcb.zhijing.power.label": "02 / 电源板", "pcb.zhijing.power.title": "供电与噪声边界", "pcb.zhijing.power.description": "独立电源板隔离 DC-DC、LDO 和开关噪声，保护采样信号质量。", "pcb.zhijing.actuator.label": "03 / 执行器板", "pcb.zhijing.actuator.title": "风扇 / 加湿器驱动", "pcb.zhijing.actuator.description": "通过 PWM 与继电器输出，将 LSTM+CNN 预测转化为真实环境调控。",
      "pcb.thermal.kicker": "北京实习", "pcb.thermal.title": "面向穿戴式热系统的 TEC 控制硬件", "pcb.thermal.note": "热控制板连接多物理场仿真、TEC 接口、传感器和样机验证，是仿真到硬件的交汇点。", "pcb.thermal.layoutLabel": "布局 / TEC 控制", "pcb.thermal.layoutTitle": "热控制 PCB", "pcb.thermal.layoutDescription": "围绕 TEC、NTC 和风扇接口组织电源与控制路径，并与热设计约束保持一致。", "pcb.thermal.front": "正面 / 装配证据", "pcb.thermal.test": "测试中 / 上电验证", "pcb.footer.kicker": "PCB 硬件", "pcb.footer.title": "从原理图边界，到真正工作的电路板。", "pcb.footer.back": "返回主页", "pcb.footer.meta": "PCB 硬件 · 嵌入式系统 · 机器人"
    }
  };
  const nav = document.querySelector('.site-nav');
  const menu = document.querySelector('.menu-toggle');
  const toggle = document.querySelector('[data-language-toggle]');
  const apply = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((element) => { if (dictionary[element.dataset.i18n] !== undefined) element.textContent = dictionary[element.dataset.i18n]; });
    toggle?.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    toggle?.setAttribute('data-tooltip', language === 'zh' ? 'English' : 'Chinese');
    toggle?.classList.toggle('is-zh', language === 'zh');
    document.title = language === 'zh' ? '王宣淏 | PCB 硬件作品' : 'Xuanhao Wang | PCB Hardware Lab';
  };
  toggle?.addEventListener('click', () => apply(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh'));
  menu?.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menu.setAttribute('aria-expanded', String(open)); });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('is-open'); menu?.setAttribute('aria-expanded', 'false'); }));
  if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  apply('en');
})();
