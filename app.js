// CarX Gamepad Assist - Master Web Portal & 3D Interactive Engine
let currentLang = 'en';

// --- Tab Navigation ---
function switchTab(elOrTabId, tabId) {
  let targetId = tabId;
  let clickedBtn = elOrTabId;
  if (!targetId && typeof elOrTabId === 'string') {
    targetId = elOrTabId;
    clickedBtn = (typeof event !== 'undefined' && event && event.currentTarget) ? event.currentTarget : null;
  }
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === targetId || btn === clickedBtn) {
      btn.classList.add('active');
    }
  });
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const target = document.getElementById(targetId);
  if (target) {
    target.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    onWindowResize();
  }, 100);
}

// --- Dictionaries (100% complete parity) ---
const translations = {
  en: {
    navVersion: "V5.2.0 • Offline Ready",
    heroBadge: "Official Assetto Corsa Community Guide",
    heroTitle1: "CarX Gamepad Drift Assist",
    heroTitle2: "Master Parameter & Setup Manual",
    heroDesc: "The ultimate mathematical gamepad drifting physics assist for Assetto Corsa. Built for CarX veterans and sim drift enthusiasts transitioning to AC.",
    btnCalc: "⚡ Angle Calculator & 3D Sim",
    btnGen: "🛠️ Setup Generator & JSON",
    btnTweaks: "🎮 Controller Settings (CM)",
    btnInstall: "📦 Installation Guide",

    navCalc: "⚡ Angle Calculator & Simulator",
    navGen: "🛠️ Setup Generator & 3D",
    navTuning: "🎯 Master Tuning (0% vs 100%)",
    navTweaks: "🎮 Controller Setup (CM)",
    navExtra: "🚀 Extra Features & Aids",
    navOverlay: "🕹️ Gamepad Overlay",
    navGuide: "🏁 CarX to AC Drift Guide",
    navInstall: "📦 Installation & FAQ",

        footerDesc: "The ultimate mathematical gamepad drifting physics assist for Assetto Corsa. Bringing authentic CarX drift physics, countersteer kinematics, and arcade-fluid control to simulation.",
    footerNavTitle: "Quick Navigation",
    footerCompatTitle: "Compatibility & Specs",
    footerActionsTitle: "Quick Actions",
    footerActionsDesc: "Get the latest release archive with drag & drop Content Manager support.",
    footerBtnDownload: "Download Script (.zip)",
    footerBackToTop: "Back to Top",
    footerCommunity: "Free Open Community Mod",
    footerDisclaimer: "Assetto Corsa is a registered trademark of Kunos Simulazioni S.r.l. CarX Drift Racing is a registered trademark of CarX Technologies, LLC. This mod is an independent open community project and is not affiliated with or endorsed by Kunos Simulazioni or CarX Technologies.",
    footerPlatformLbl: "Platform:",
    footerPlatformVal: "Assetto Corsa PC (Steam)",
    footerModLbl: "Required Mod:",
    footerModVal: "CSP 0.2.3+ (Gamepad FX)",
    footerManagerLbl: "Recommended:",
    footerManagerVal: "Content Manager",
    footerInputLbl: "Supported Inputs:",
    footerInputVal: "Xbox, PlayStation, Steam Deck",
    footerArchLbl: "Script Engine:",
    footerArchVal: "Client-side CSP Lua FX",
    visTitle: "Real-Time Countersteer Angle Visualizer",
    mode3D: "🏎️ 3D Chase View",
    mode2D: "📐 2D Top-Down",
    statDriftAngle: "Car Drift Angle",
    statSteerAngle: "Wheel Angle (Countersteer)",
    statStatus: "Status",
    statusStable: "STABLE",
    statusSpinRisk: "SPIN RISK!",
    statusUndersteer: "UNDERSTEER",
    legTraj: "Motion Trajectory",
    legNose: "Car Front (Nose)",
    legWheels: "Wheel Countersteer",

    calcTitle: "Car Pack Angle Calculator",
    selectPack: "Choose drift car pack:",
    lblSimSlip: "Simulated Drift Angle:",
    lblStick: "Analog Stick Input:",
    lblCarLock: "Max Wheel Lock Angle:",
    lblCounterMult: "Countersteer Multiplier:",
    recBoxTitle: "RECOMMENDED IN-GAME SETTINGS (CARX GAMEPAD APP):",
    recLock: "Max Drift Steer Angle:",
    recDamp: "Drift Damping:",
    recCenter: "Speed Centering:",

    gen3DTitle: "Interactive 3D Car & Drift Response",
    lblGenTestAngle: "Test Drift Angle (Manual Pose):",
    diagTitle: "Live Setup Stability Diagnosis",
    diagEngineLbl: "Physics Engine:",
    diagStyleLbl: "Handling Style:",
    diagSpinLbl: "Spinout Protection:",
    diagTransLbl: "Transitions:",
    btnCopyJson: "📋 Copy Setup to Clipboard",
    btnDlJson: "💾 Download .carx.json File",
    btnImportFile: "📥 Import Setup from File",
    btnPasteClip: "📋 Paste Setup from Clipboard",
    genHelpStep1: "Open Assetto Corsa and launch any drift track with CarX Assist active.",
    genHelpStep2: "Open the 'CarX Gamepad' app on the right HUD app tray and go to the 'Setups' tab.",
    genHelpStep3: "Click 'Imp Clip' to paste from clipboard, or click 'Imp File' to load the downloaded file.",

    genParamsTitle: "Setup Parameters",
    genPresetsTitle: "Quick Drift Car Presets:",
    genLblName: "Setup Name:",
    genLblLock: "Max Drift Lock Angle (35° - 75°):",
    genLblKeep: "Anti-Straighten Lock (Inward Keep):",
    genLblIdle: "Idle Countersteer Ratio:",
    genLblStabK: "Drift Damping (StabK):",
    genLblSmoothK1: "Steering Speed (SmoothK1):",
    genLblSmoothK2: "Yaw Counter Boost (SmoothK2):",
    genLblPred: "Prediction 0.2s Lookahead Gain:",
    genLblGasGamma: "Gas Trigger Curve (RT Gamma):",
    genLblBrakeGamma: "Brake Sensitivity (LT Gamma):",
    genCbAbs: "Drift Brake Anti-Lock Assist (Left-Foot Braking)",
    genCbRev: "Reverse Entry & 360 Spin Recovery (>90° / >140°)",
    genCbAuto: "CarX Drift Auto-Gearbox Mode",

    tuningTitle: "Master Tuning Reference (0% vs 100% Impact Guide)",
    tuningIntro: "Understand exactly how each slider mathematically alters car dynamics in Assetto Corsa. Compare the physical extremes to dial in your personal drift style.",
    keep_name: "Anti-Straighten Lock (Inward Keep)",
    keep_summary: "Limits how far wheels can turn inward toward the turn apex during active drift. Prevents the car from suddenly gripping up and violently snapping straight.",
    keep_min_title: "At 0% (Full Manual Angle Control):",
    keep_min_text: "No inward steering angle clamping. The driver can steer all the way inward to straighten the car instantly. Requires high stick precision.",
    keep_max_title: "At 85% (Maximum Lockout):",
    keep_max_text: "Heavily prevents wheels from turning inside the turn while sliding. The car stays locked in drift angle even if you push the stick inwards.",

    idle_name: "Idle Countersteer Ratio",
    idle_summary: "Determines the automatic countersteer angle applied when the thumbstick is released to center (idle).",
    idle_min_title: "At 50% (Weak Autocatch):",
    idle_min_text: "Wheels countersteer only half of the required angle when centering the stick. The car will spin if you do not actively push the stick into counter.",
    idle_max_title: "At 100% (Full Mathematical Autocatch):",
    idle_max_text: "Releasing the stick perfectly locks wheels at the kinematic countersteer angle. Makes flick entries and high-speed chicanes effortless.",

    stab_name: "Drift Damping (StabK)",
    stab_summary: "Calculates angular velocity damping to eliminate high-frequency steering wobble, oscillation, and tank-slappers.",
    stab_min_title: "At 0.00 (Unfiltered Raw):",
    stab_min_text: "Zero damping on angular velocity. The car reacts with lightning speed but may wobble or fish-tail wildly on high grip tires.",
    stab_max_title: "At 0.35 (Heavy Damping):",
    stab_max_text: "Maximum stabilizing resistance. Completely eliminates tank-slappers and wobble, but transitions will feel slower and more deliberate.",

    sk1_name: "Steering Speed (SmoothK1)",
    sk1_summary: "The base rotational speed of the virtual steering rack in radians per second.",
    sk1_min_title: "At 1.5 rad/s (Slow & Heavy):",
    sk1_min_text: "Very slow steering rack. Suitable for heavy GT or highway cruisers, but will lag behind fast drift transitions.",
    sk1_max_title: "At 14.0 rad/s (Instant Twitch):",
    sk1_max_text: "Near instantaneous wheel repositioning. Wheels snap from lock to lock immediately. Recommended for competition pro tandem drifters.",

    btnOpenTuningGuide: "Open Parameter Guide",

    btnHeroGen: "Launch Setup Generator & Presets",
    btnHeroTuning: "Master Tuning Guide (All 12 Parameters)",
    genProfileTitle: "Setup Profile & Actions",
    genNameHelp: "Enter a custom name for your profile before saving or copying.",

    btnBackToGenerator: "Back to Setup Generator",

    // In-place short slider hints
    descGenLock: "Physical steering lock limit matched to your car pack (e.g. WDT 48°-53°, VDC 60°-68°).",
    descGenKeep: "Prevents sudden grip-up and violent snap-straightening when steering towards the apex.",
    descGenIdle: "Automatic countersteer strength when thumbstick is released to center (idle).",
    descGenStabK: "Gyroscopic damping to eliminate high-speed steering wobble and tank-slappers.",
    descGenSmoothK1: "Base steering rack transition speed from lock to lock in radians per second.",
    descGenSmoothK2: "Dynamic countersteer boost scaled by aggressive vehicle spin rate (yaw).",
    descGenPred: "Proactive lookahead predicting car trajectory by 200ms to eliminate pad latency.",
    descGenGasGamma: "Right trigger (RT) throttle linearity curve (1.0 = linear, >1.0 = soft start).",
    descGenBrakeGamma: "Left trigger (LT) brake sensitivity for left-foot brake drift modulation.",
    descGenAbs: "Balances brake bias to pitch front wheels without stalling rear drift wheelspin.",
    descGenRev: "Inverts steering past 90° for backwards entries and smooth 360° freestyle spins.",
    descGenAuto: "Drift-optimized gearbox logic holding optimal powerband gears through slides.",

    // Tuning Reference: Lock
    badge_lock: "Steering Geometry",
    lock_name: "Max Drift Lock Angle (35° – 75°)",
    lock_summary: "Defines the physical front steering lock limit. Crucial to match your drift pack's steering rack geometry.",
    lock_min_title: "At 35.0° (Street OEM Lock):",
    lock_min_text: "Tight factory steering angle. Suitable for subtle street slides, but will instantly spin on deep drift angles.",
    lock_max_title: "At 75.0° (Extreme Pro Angle):",
    lock_max_text: "Enormous steering travel allowing insane backwards entries and deep slip angles without spinning out.",
    lock_tip: "Street cars (WDT Street) use 48°. Pro cars (WDT Pro, Gravy) use 53°–55°. Formula Drift / VDC uses 60°–68°. Match this value to your car pack!",

    // Tuning Reference: Keep, Idle, Stab, SK1 Tips
    badge_keep: "Drift Line Lock",
    keep_tip: "40%–50% is the golden sweet spot for authentic CarX feel: forgiving mid-drift stability without feeling glued or artificial.",
    badge_idle: "Core Assist Autocatch",
    idle_tip: "Set to 80% for authentic CarX street feel, or 90%–100% if you are learning or prefer effortless tandem transitions.",
    badge_stab: "Gyro Stabilization",
    stab_tip: "0.10–0.14 gives flawless high-speed stability on 99% of Assetto Corsa drift tracks without muting car agility.",
    badge_sk1: "Rack Speed",
    sk1_tip: "5.0–6.0 rad/s simulates realistic wheel mass for street cars; 7.5–9.0 rad/s provides razor-sharp pro drift transitions.",

    // Tuning Reference: SK2
    badge_sk2: "Dynamic Snap Boost",
    sk2_name: "Yaw Counter Boost (SmoothK2)",
    sk2_summary: "Multiplies countersteer speed when the car rotates aggressively (high angular velocity), catching violent snap oversteer.",
    sk2_min_title: "At 0.00 (Fixed Steering Speed):",
    sk2_min_text: "Steering rack moves at constant speed regardless of violent snap oversteer. Requires early manual anticipation.",
    sk2_max_title: "At 4.00 (Instant Snap Saver):",
    sk2_max_text: "Instantly flings front wheels into counter at four times base speed during aggressive inertia kicks, catching almost any entry.",
    sk2_tip: "1.50–2.00 provides the ideal balance between realistic physical feedback and catching sudden aggressive entries.",

    // Tuning Reference: Pred
    badge_pred: "Latency Killer",
    pred_name: "Prediction 0.2s Lookahead Gain",
    pred_summary: "Anticipates vehicle trajectory 200 milliseconds into the future based on lateral Gs and yaw rate to eliminate gamepad input lag.",
    pred_min_title: "At 0.00 (Reactive Only):",
    pred_min_text: "Assist calculates counter purely based on current angles. Can feel slightly lagging on fast, twitchy modern drift cars.",
    pred_max_title: "At 2.00 (Maximum Predictive Bias):",
    pred_max_text: "Aggressive lookahead. Wheels start countersteering milliseconds before your eyes can even register the initiation.",
    pred_tip: "1.00 is mathematically tuned for standard 60-144Hz displays and gamepad thumbstick travel.",

    // Tuning Reference: Gas
    badge_gas: "Throttle Modulation",
    gas_name: "Gas Trigger Curve (RT Gamma)",
    gas_summary: "Shapes the throttle curve on the right trigger (RT). 1.00 is linear; higher values soften initial trigger travel for high-horsepower cars.",
    gas_min_title: "At 0.50 (Aggressive Bite):",
    gas_min_text: "Huge power delivered right at the top of the trigger. Great for low-powered naturally aspirated cars (e.g. AE86).",
    gas_max_title: "At 2.50 (Ultra-Delicate Feathering):",
    gas_max_text: "First 70% of trigger travel delivers gentle power. Crucial for modulating 1000hp turbo monsters without spinning tires uncontrollably.",
    gas_tip: "1.00–1.20 provides the most natural throttle feathering in high-angle drift zones.",

    // Tuning Reference: Brake
    badge_brake: "Left-Foot Braking",
    brake_name: "Brake Sensitivity (LT Gamma)",
    brake_summary: "Shapes the left trigger (LT) brake progression for delicate left-foot braking and mid-drift clipping point adjustments.",
    brake_min_title: "At 0.50 (Hard Bite):",
    brake_min_text: "Full braking pressure is applied with light trigger squeeze. Prone to upsetting car balance mid-drift.",
    brake_max_title: "At 2.50 (Gradual Trail Braking):",
    brake_max_text: "Extremely gradual brake buildup. Allows resting your finger on LT to adjust angle without locking wheels.",
    brake_tip: "1.30 allows you to drag the front brakes mid-drift to tuck the nose into clipping points effortlessly.",

    // Tuning Reference: ABS
    badge_abs: "Smart Brake Bias",
    abs_name: "Drift Brake Anti-Lock Assist (Left-Foot Braking)",
    abs_summary: "Dynamically optimizes brake bias during active drift so pressing the brake pedal pitches the car without killing rear wheelspin.",
    abs_min_title: "Disabled [ ] (Standard AC Brake Physics):",
    abs_min_text: "Pressing LT mid-drift clamps all 4 wheels equally, often locking the rear differential and killing drift momentum.",
    abs_max_title: "Enabled [✔] (Smart Drift Bias Optimizer):",
    abs_max_text: "Prioritizes front brake bite to transfer weight forward and tighten drift line, leaving rear tires spinning freely.",
    abs_tip: "Keep [✔] ON at all times for pro-level left-foot braking techniques on gamepad.",

    // Tuning Reference: Rev
    badge_rev: "Freestyle & Gymkhana",
    rev_name: "Reverse Entry & 360 Spin Recovery (>90° / >140°)",
    rev_summary: "Special physics algorithm that inverts steering lock past 90° so you can initiate backward entries and complete 360° spins.",
    rev_min_title: "Disabled [ ] (90° Strict Clamp):",
    rev_min_text: "Countersteer stops at 90°. Going past 90° will force maximum countersteer and cause an instant spinout.",
    rev_max_title: "Enabled [✔] (Freestyle Angle Inversion):",
    rev_max_text: "Inverts steering logic through 90°–180°, guiding wheels smoothly through full 360° rotations back into forward drift.",
    rev_tip: "Enable [✔] if you do gymkhana, freestyle, or backwards entries into high-speed banked corners!",

    // Tuning Reference: Auto
    badge_auto: "Transmission Control",
    auto_name: "CarX Drift Auto-Gearbox Mode",
    auto_summary: "Drift-optimized automatic gearbox logic that locks gears in peak torque band and eliminates mid-drift shifting.",
    auto_min_title: "Disabled [ ] (Standard AC Automatic):",
    auto_min_text: "Stock game transmission often downshifts or upshifts awkwardly mid-corner when wheelspin spikes, upsetting balance.",
    auto_max_title: "Enabled [✔] (CarX Style RPM Governor):",
    auto_max_text: "Maintains current gear throughout the entire slide, keeping the engine singing at peak torque until you straighten.",
    auto_tip: "A must-have if you drive with automatic shifting! If you shift manually with bumpers, leave it off."
,

    tweaksTitle: "Content Manager & Controller Configuration",
    tweaksIntro: "To give CarX Assist 100% pure control over the steering rack without vanilla Assetto Corsa filters interfering, set the following parameters in Content Manager:",
    tweaksWarning: "⚠️ Crucial Rule: Assetto Corsa's built-in speed sensitivity and steering filters fight against the CarX Assist mathematical countersteer solver! Zero them out below.",
    tweaksAppTabTitle: "Inside the CarX Gamepad App (Controller Tweaks Tab):",
    tweaksAppTabDesc: "When you open the 'CarX Gamepad' app on the right HUD during a driving session, open the 3rd tab: 'Controller Tweaks'. It displays a live real-time input monitor showing your raw analog stick position, deadzone ring, steering gamma curve, and direct sliders for steering deadzone and stick gamma.",

    extraTitle: "Extra Features & Advanced Driving Aids",
    extraIntro: "Advanced modules included directly in CarX Assist to replicate the iconic freestyle features of CarX Drift Racing Online.",
    f_rev_title: "Reverse Entry & 360 Spin Recovery (>90° / >140°)",
    f_rev_desc: "Dynamically flips the countersteer polarity when yaw angle exceeds 90° with full outside stick, or past 140° drift angle. Enables launching huge reverse backward entries and performing seamless 360 spins without wheels catching backwards.",
    f_gear_title: "CarX Drift Auto-Gearbox",
    f_gear_desc: "Intelligent drifting transmission logic: prevents unwanted upshifts while sliding sideways at high RPM, downshifts early on handbrake/left-foot brake flick entries, and automatically blips throttle for rev-matching.",
    f_pedals_title: "Pedal Trigger Curves (RT / LT Gamma)",
    f_pedals_desc: "Independent progressive non-linear trigger sensitivity. 1.00 = linear standard. Recommended 1.30 for gamepad: provides wide precision in the 50-75% throttle range for tandem proximity, and soft progressive left-foot brake bite.",
    f_kb_title: "CarX Keyboard Drift Mode (A/D/W/S)",
    f_kb_desc: "Original progressive virtual stick algorithm with flick acceleration for keyboard players. Allows high-level competitive drifting using keyboard A/D keys for steering, W/S for throttle/brake, and Space for handbrake.",

    overlayTitle: "Gamepad Overlay – Exclusive Addon by Dova",
    overlayBadge: "★ Bundled Inside CarX_Assist.zip ★",
    overlayDesc: "A real-time animated HUD gamepad overlay built specifically for drift drivers, content creators, and streamers in Assetto Corsa. Since no modern responsive gamepad visualizer existed for AC drift, this app was created and included for free!",
    overlayF1Title: "Analog Stick Travel & Deadzone",
    overlayF1Desc: "Real-Time Stick Tracking: Smooth virtual analog thumbstick motion showing exact steering inputs and active deadzone radius.",
    overlayF2Title: "RT / LT Trigger Pressure Bars",
    overlayF2Desc: "Progressive Glow Bars: Dynamic visual pressure bars for RT (throttle) and LT (left-foot braking) with instant response.",
    overlayF3Title: "Active Buttons & Bumpers",
    overlayF3Desc: "Active Button Glow: Instant visual illumination for face buttons (A/B/X/Y), bumpers (LB/RB), D-Pad, and handbrake.",
    overlayF4Title: "Dual Controller Modes (Xbox & PlayStation)",
    overlayF4Desc: "1-Click Layout Switch: Direct toggle on the HUD pill between Xbox layout (ABXY, LB/RB, LT/RT) and PlayStation layout (✕○□△, L1/R1, L2/R2).",
    overlayTip: "💡 How to enable in game: Move mouse to the right edge of the screen, open the Apps tray, click 'Gamepad Overlay', and pin it anywhere on your screen for streaming or learning!",

    guideTitle: "CarX Players' Transition Guide to Assetto Corsa",
    guideWhyTitle: "Why is Assetto Corsa Impossible on Gamepad Without This Script?",
    guideWhyText: "In vanilla Assetto Corsa, your analog stick maps directly to steering rack rotation. Unlike CarX Drift Racing Online, which features a sophisticated built-in countersteer solver, AC requires you to manually spin the wheels 900 degrees in milliseconds — a physical impossibility on a tiny 15mm thumbstick. The CarX Assist script ports the exact mathematical algorithm from CarX SteerVersion 6 directly into Custom Shaders Patch, giving you the natural steering flow of CarX combined with Assetto Corsa's unmatched physics engine.",
    guideRulesTitle: "Core Drifting Rules with CarX Assist:",
    guideRule1: "The stick indicates your INTENTION, not raw wheel angle: To increase drift angle, pull the stick slightly in the direction of the turn. To straighten up, push toward the outside.",
    guideRule2: "Let the assist catch the car (Idle Countersteer): When initiating a high-speed flick or transition, release the analog stick to center for a fraction of a second. The assist will catch the momentum at the optimal tire slip angle without spinning!",
    guideRule3: "Throttle controls your trajectory line: More throttle pushes the car wider towards the outside of the track; lifting off pulls the car tighter into the inside apex.",
    guideRule4: "Left-foot brake for speed adjustments: Keep Drift Brake Anti-Lock assist active so you can tap LT to scrub speed in tandem without washing out the front tires.",

    installTitle: "Installation, Updates & Frequently Asked Questions",
    installStepsTitle: "10-Second Drag & Drop Installation:",
    installStep1: "Open Content Manager.",
    installStep2: "Drag and drop CarX_Assist.zip directly into the Content Manager window.",
    installStep3: "Click the green hamburger / download icon in the top right corner and click 'Install'.",
    installStep4: "Go to: Settings -> Custom Shaders Patch -> GAMEPAD FX: check [x] Active, and select CarX Assist as the script.",
    installStep5: "Done! In game, open CarX Gamepad from the right HUD app shelf.",
    faqTitle: "Frequently Asked Questions (FAQ):",
    faq1Q: "Q: Does this work in online multiplayer servers?",
    faq1A: "A: Yes! 100% compatible with all public and private online drift servers. Custom Shaders Patch Gamepad FX scripts run locally on client input and never trigger server mismatches or checksum kicks.",
    faq2Q: "Q: Does this require any DLL injection or CarX files?",
    faq2A: "A: Zero DLLs! It is written in 100% pure CSP Lua and Python. It is completely safe, zero ban risk, and does not require CarX Drift Racing Online to be installed.",

    toastCopied: "Setup copied to clipboard!",
    toastDownloaded: "Setup .carx.json downloaded successfully!",
    toastImportSuccess: "Setup loaded successfully into generator!",
    toastImportErr: "Error: Invalid setup JSON format!",
    toastGuideCopied: "📋 AC Setup Guide copied to clipboard!",

    tuningSecTitle: "Assetto Corsa Car Setup & Tuning Recommendations",
    tuningSecSub: "Live CarX Telemetry & Dyno Mapping • Units Converted for AC Pitstop Menu",
    badgeCarXSynced: "CarX Setup: Synced",
    btnCopyAcGuide: "Copy AC Setup Guide",
    tuningSecIntro: "Here are the car tuning parameters read directly from CarX Drift Racing Online, mapped and converted into Assetto Corsa's garage setup & pitstop menu units. Apply these values to your car in AC to achieve 1:1 CarX sliding physics and seamless assist synergy.",
    cardTyresTitle: "Tire Pressures (PSI)",
    lblFrontPsi: "Front Tires:",
    lblRearPsi: "Rear Tires:",
    tipTyres: "Lower rear tire pressure (16-19 PSI) delivers authentic CarX forward acceleration grip while sliding. Higher front pressure (22-26 PSI) guarantees razor-sharp countersteer bite.",
    cardAlignmentTitle: "Wheel Alignment & Geometry",
    lblSteerLock: "Max Steering Lock:",
    lblCaster: "Caster Angle:",
    lblCamberFront: "Front Camber:",
    lblCamberRear: "Rear Camber:",
    lblAckermann: "Ackermann Angle:",
    tipAlignment: "High Caster (9°+) generates natural self-aligning torque so the assist effortlessly catches slides. Front camber (-4.5° to -5.5°) keeps the outer tire flat under lock; rear camber near 0° maximizes tire contact patch.",
    cardDrivetrainTitle: "Drivetrain & Differential",
    lblDiffPower: "Power Lock (On Throttle):",
    lblDiffCoast: "Coast Lock (Off Throttle):",
    tipDrivetrain: "Diff Power 90-100% (or welded spool) locks both rear axles instantly under throttle, initiating slides effortlessly without sudden snap-straightening. Diff Coast (60-80%) stabilizes the car during left-foot braking entries.",
    cardAssistTitle: "CarX Assist Synergy",
    lblAssistIdle: "Autocatch (Idle Ratio):",
    lblAssistDamp: "Damping (StabK):",
    lblAssistPred: "Prediction Lookahead:",
    tipAssist: "Assist math is directly calibrated to your car's physical CarX geometry. Modifying steering lock or pressures automatically fine-tunes trajectory lookahead and countersteer response."
  },
  pl: {
    navVersion: "V5.2.0 • Gotowy Offline",
    heroBadge: "Oficjalny Przewodnik Społeczności Assetto Corsa",
    heroTitle1: "CarX Gamepad Drift Assist",
    heroTitle2: "Podręcznik Parametrów & Generator Setupów",
    heroDesc: "Najbardziej zaawansowana asysta fizyki driftu na padzie dla Assetto Corsa. Stworzona dla weteranów CarX i pasjonatów symulacji driftu przechodzących do AC.",
    btnCalc: "⚡ Kalkulator Kątów & Sim 3D",
    btnGen: "🛠️ Generator Setupów & JSON",
    btnTweaks: "🎮 Ustawienia Kontrolera (CM)",
    btnInstall: "📦 Instrukcja Instalacji",

    navCalc: "⚡ Kalkulator Kątów & Symulator",
    navGen: "🛠️ Generator Setupów & 3D",
    navTuning: "🎯 Strojenie Główne (0% vs 100%)",
    navTweaks: "🎮 Konfiguracja Pada (CM)",
    navExtra: "🚀 Funkcje Dodatkowe & Asysty",
    navOverlay: "🕹️ Gamepad Overlay",
    navGuide: "🏁 Przewodnik CarX do AC",
    navInstall: "📦 Instalacja & FAQ",

        footerDesc: "Zaawansowany matematyczny asystent fizyki driftu na gamepadzie dla Assetto Corsa. Przenosi autentyczną fizykę, płynność kontrowania i czucie z CarX Drift Racing bezpośrednio do symulacji AC.",
    footerNavTitle: "Szybka Nawigacja",
    footerCompatTitle: "Kompatybilność i Wymagania",
    footerActionsTitle: "Szybkie Akcje",
    footerActionsDesc: "Pobierz najnowszą paczkę skryptu z automatyczną instalacją drag & drop w Content Managerze.",
    footerBtnDownload: "Pobierz skrypt (.zip)",
    footerBackToTop: "Wróć na górę",
    footerCommunity: "Darmowy projekt społeczności",
    footerDisclaimer: "Assetto Corsa jest zastrzeżonym znakiem towarowym Kunos Simulazioni S.r.l. CarX Drift Racing jest zastrzeżonym znakiem towarowym CarX Technologies, LLC. Ta modyfikacja to niezależny projekt społecznościowy i nie jest powiązana ani wspierana przez Kunos Simulazioni ani CarX Technologies.",
    footerPlatformLbl: "Platforma:",
    footerPlatformVal: "Assetto Corsa PC (Steam)",
    footerModLbl: "Wymagany Mod:",
    footerModVal: "CSP 0.2.3+ (Gamepad FX)",
    footerManagerLbl: "Zalecany:",
    footerManagerVal: "Content Manager",
    footerInputLbl: "Kontrolery:",
    footerInputVal: "Xbox, PlayStation, Steam Deck",
    footerArchLbl: "Silnik skryptu:",
    footerArchVal: "Lokalny skrypt CSP Lua FX",
    visTitle: "Wizualizacja Kąta Kontry w Czasie Rzeczywistym",
    mode3D: "🏎️ Widok Kamery 3D",
    mode2D: "📐 Widok Telemetrii 2D",
    statDriftAngle: "Kąt Ślizgu Auta",
    statSteerAngle: "Kąt Kół (Kontra)",
    statStatus: "Status",
    statusStable: "STABILNY",
    statusSpinRisk: "RYZYKO SPINA!",
    statusUndersteer: "PŁUŻENIE (PRZÓD)",
    legTraj: "Trajektoria Ruchu",
    legNose: "Maska (Przód)",
    legWheels: "Kontra Kół",

    calcTitle: "Kalkulator Paczek Samochodów",
    selectPack: "Wybierz paczkę aut:",
    lblSimSlip: "Symulowany Kąt Poślizgu:",
    lblStick: "Wychylenie Gałki Pada:",
    lblCarLock: "Maksymalny Kąt Skrętu Kół:",
    lblCounterMult: "Siła Kontry Asysty:",
    recBoxTitle: "ZALECANA KONFIGURACJA W GRZE (CARX GAMEPAD):",
    recLock: "Maksymalny Kąt Skrętu:",
    recDamp: "Tłumienie Drgań:",
    recCenter: "Centrowanie Prędkością:",

    gen3DTitle: "Interaktywne Auto 3D & Reakcja na Setup",
    lblGenTestAngle: "Kąt Testowy Driftu (Ustawienie Płynne):",
    diagTitle: "Diagnoza Stabilności Setupu na Żywo",
    diagEngineLbl: "Silnik Fizyki:",
    diagStyleLbl: "Styl Prowadzenia:",
    diagSpinLbl: "Ochrona Przed Obrotem:",
    diagTransLbl: "Przekładki Zakręt w Zakręt:",
    btnCopyJson: "📋 Kopiuj Setup do Schowka",
    btnDlJson: "💾 Pobierz Plik Setupu (.json)",
    btnImportFile: "📥 Wczytaj Setup z Pliku",
    btnPasteClip: "📋 Wklej Setup ze Schowka",
    genHelpStep1: "Uruchom Assetto Corsa na dowolnym torze driftowym z aktywnym CarX Assist.",
    genHelpStep2: "Otwórz aplikację 'CarX Gamepad' na prawym pasku HUD i wejdź w zakładkę 'Setups'.",
    genHelpStep3: "Kliknij 'Imp Clip', aby wkleić ze schowka, lub 'Imp File', aby wczytać plik.",

    genParamsTitle: "Parametry Setupu",
    genPresetsTitle: "Szybkie Presety Driftowe:",
    genLblName: "Nazwa Setupu:",
    genLblLock: "Maksymalny Kąt Skrętu Drift Lock (35° - 75°):",
    genLblKeep: "Blokada Przed Prostowaniem (Inward Keep):",
    genLblIdle: "Siła Autokontry (Idle Countersteer):",
    genLblStabK: "Tłumienie Drgań i Rybkowania (StabK):",
    genLblSmoothK1: "Szybkość Przekładania Kół (SmoothK1):",
    genLblSmoothK2: "Mnożnik Prędkości Kątowej (SmoothK2):",
    genLblPred: "Wzmocnienie Predykcji Trajektorii (0.2s):",
    genLblGasGamma: "Krzywa Spustu Gazu (RT Gamma):",
    genLblBrakeGamma: "Czułość Hamulca Nożnego (LT Gamma):",
    genCbAbs: "Asysta Hamowania Lewą Nogą (Drift ABS)",
    genCbRev: "Asysta Reverse Entry & 360 (>90° / >140°)",
    genCbAuto: "Inteligentny Automat Skrzyni CarX",

    tuningTitle: "Przewodnik Wpływu Parametrów (0% vs 100%)",
    tuningIntro: "Dowiedz się dokładnie, jak każdy suwak matematycznie zmienia zachowanie auta w Assetto Corsa. Porównaj fizyczne skrajności, aby dopasować styl jazdy pod siebie.",
    keep_name: "Blokada Przed Prostowaniem (Inward Keep)",
    keep_summary: "Ogranicza skręt kół do wewnątrz łuku w trakcie poślizgu. Zapobiega nagłemu łapaniu przyczepności i gwałtownemu wyprostowaniu samochodu.",
    keep_min_title: "Przy 0% (Pełna Kontrola Manualna):",
    keep_min_text: "Brak blokady skrętu do wnętrza zakrętu. Kierowca może w dowolnym momencie wyprostować auto gałką. Wymaga bardzo precyzyjnych ruchów.",
    keep_max_title: "Przy 85% (Maksymalna Blokada):",
    keep_max_text: "Mocno blokuje koła przed skrętem do wewnątrz w poślizgu. Auto stabilnie trzyma kąt driftu nawet przy nerwowym ruchu gałką.",

    idle_name: "Siła Autokontry (Idle Countersteer Ratio)",
    idle_summary: "Określa kąt samoczynnej kontry kół po puszczeniu gałki analogowej na środek (pozycja neutralna).",
    idle_min_title: "Przy 50% (Słaba Autokontra):",
    idle_min_text: "Koła kontrują tylko połowę wymaganego kąta po puszczeniu gałki. Auto szybko złapie spina, jeśli natychmiast nie skontrujesz ręcznie.",
    idle_max_title: "Przy 100% (Pełna Autokontra Matematyczna):",
    idle_max_text: "Puszczenie gałki idealnie blokuje koła w osi poślizgu. Sprawia, że agresywne wrzuty i szybkie szykany stają się bajecznie proste.",

    stab_name: "Tłumienie Drgań i Rybkowania (StabK)",
    stab_summary: "Kalkuluje opór tłumienia prędkości kątowej, eliminując drgania kierownicy, rybkowanie i niestabilność nadwozia.",
    stab_min_title: "Przy 0.00 (Czyste, Surowe Sterowanie):",
    stab_min_text: "Zero tłumienia prędkości kątowej. Auto reaguje błyskawicznie, lecz na oponach o wysokiej przyczepności może nerwowo myszkować.",
    stab_max_title: "Przy 0.35 (Mocne Tłumienie):",
    stab_max_text: "Maksymalny opór stabilizacyjny. Całkowicie eliminuje rybkowanie, lecz przekładki wydają się wolniejsze i bardziej ospałe.",

    sk1_name: "Szybkość Przekładania Kół (SmoothK1)",
    sk1_summary: "Bazowa prędkość obrotu maglownicy w radianach na sekundę.",
    sk1_min_title: "Przy 1.5 rad/s (Wolna Maglownica):",
    sk1_min_text: "Bardzo powolny skręt kół. Przydatny do ciężkich aut autostradowych, lecz koła nie nadążą za szybkimi przekładkami w drifcie.",
    sk1_max_title: "Przy 14.0 rad/s (Błyskawiczna Reakcja):",
    sk1_max_text: "Natychmiastowe przekładanie kół z oporu do oporu. Niezbędne dla zawodników lig driftowych i agresywnych tandemów pro.",

    btnOpenTuningGuide: "Otwórz Spis Parametrów",

    btnHeroGen: "Otwórz Generator Setupów & Presety",
    btnHeroTuning: "Przewodnik po Parametrach (Wszystkie 12)",
    genProfileTitle: "Profil Setupu & Akcje",
    genNameHelp: "Wpisz własną nazwę profilu przed zapisem lub skopiowaniem.",

    btnBackToGenerator: "Powrót do Generatora",

    // In-place short slider hints
    descGenLock: "Maksymalny kąt skrętu kół dopasowany do modu auta (np. WDT 48°-53°, VDC 60°-68°).",
    descGenKeep: "Blokuje gwałtowne wyprostowanie auta do wnętrza zakrętu przy ujęciu kontry.",
    descGenIdle: "Siła automatycznej kontry przy puszczonym analogu na środku (jak w CarX).",
    descGenStabK: "Tłumienie drgań i rybkowania kierownicy przy szybkich przekładkach.",
    descGenSmoothK1: "Prędkość obrotu kół z lewej do prawej przy zmianie kierunku driftu.",
    descGenSmoothK2: "Dynamiczne przyspieszenie kontry ratujące przed nagłym obróceniem (spinem).",
    descGenPred: "Predykcja wyprzedzająca ruch o 200 ms niwelująca opóźnienia i spiny.",
    descGenGasGamma: "Krzywa progresji prawego spustu gazu (1.0 = liniowy, >1.0 = precyzyjny dół).",
    descGenBrakeGamma: "Czułość lewego spustu hamulca do stabilizacji kąta lewą nogą w poślizgu.",
    descGenAbs: "Optymalizuje balans hamulców, zacieśniając linię bez dławienia tylnych kół.",
    descGenRev: "Odwraca logikę powyżej 90° dla reverse entry i płynnych obrotów 360°.",
    descGenAuto: "Utrzymuje stały bieg i obroty w poślizgu bez niechcianych redukcji biegu.",

    // Tuning Reference: Lock
    badge_lock: "Geometria Skrętu",
    lock_name: "Maksymalny Kąt Skrętu Kół (35° – 75°)",
    lock_summary: "Określa fizyczny zakres skrętu przednich kół. Kluczowe, by dopasować go do geometrii modu auta.",
    lock_min_title: "Przy 35.0° (Seryjny skręt uliczny):",
    lock_min_text: "Ogranicza skręt do seryjnych wartości. Dobre do lekkich poślizgów, ale łatwo o spinout przy głębszym kącie.",
    lock_max_title: "Przy 75.0° (Ekstremalny lock pro):",
    lock_max_text: "Ogromny zakres skrętu pozwalający na widowiskowe backwardy i jazdę pod potężnym kątem bez spinu.",
    lock_tip: "Auta Street (WDT Street) używają 48°. Auta Pro (WDT Pro, Gravy) 53°–55°. Maszyny VDC / Formula Drift 60°–68°. Dopasuj tę wartość do modu!",

    // Tuning Reference: Keep, Idle, Stab, SK1 Tips
    badge_keep: "Utrzymanie Linii",
    keep_tip: "40%–50% to idealny sweet spot dający charakterystyczny feeling CarX: płynność i stabilność bez poczucia sztuczności.",
    badge_idle: "Autokontra Asystenta",
    idle_tip: "Ustaw 80% dla naturalnego feelingu CarX lub 90%–100%, jeśli dopiero trenujesz lub chcesz bezwysiłkowych płynnych tandemów.",
    badge_stab: "Żyrostabilizacja",
    stab_tip: "0.10–0.14 zapewnia wzorową stabilność przy dużych prędkościach na 99% tras driftowych w AC bez zamulania auta.",
    badge_sk1: "Prędkość Przekładni",
    sk1_tip: "5.0–6.0 rad/s symuluje realistyczną masę kół dla aut street; 7.5–9.0 rad/s zapewnia błyskawiczne przekładki pro.",

    // Tuning Reference: SK2
    badge_sk2: "Wzmocnienie Szarpnięć",
    sk2_name: "Dynamiczne Wzmocnienie Kontry (SmoothK2)",
    sk2_summary: "Mnoży prędkość kontry, gdy tył auta gwałtownie ucieka z dużą prędkością kątową (rotacja yaw).",
    sk2_min_title: "Przy 0.00 (Stała prędkość obrotu):",
    sk2_min_text: "Kierownica kręci się ze stałą prędkością. Wymaga wczesnego wyczucia i ręcznego uprzedzania reakcji.",
    sk2_max_title: "Przy 4.00 (Błyskawiczny ratownik spinu):",
    sk2_max_text: "Błyskawicznie wyrzuca koła w kontrę z czterokrotną prędkością przy nagłym zarzuceniu tyłu.",
    sk2_tip: "1.50–2.00 zapewnia doskonały balans między naturalnym feelingiem a wyłapywaniem agresywnych wejść z ręcznego.",

    // Tuning Reference: Pred
    badge_pred: "Niwelowanie Lagu",
    pred_name: "Predykcja Trajektorii 0.2s (Lookahead Gain)",
    pred_summary: "Przewiduje trajektorię auta o 200 ms do przodu na podstawie przeciążeń i rotacji, niwelując opóźnienia pada.",
    pred_min_title: "Przy 0.00 (Tylko reakcja w czasie rzeczywistym):",
    pred_min_text: "Skrypt reaguje wyłącznie na aktualny stan. Na szybkich autach może sprawiać wrażenie minimalnie spóźnionego.",
    pred_max_title: "Przy 2.00 (Maksymalne wyprzedzenie):",
    pred_max_text: "Agresywne wyprzedzenie. Koła zaczynają kontrować na ułamek sekundy przed tym, jak zauważysz poślizg.",
    pred_tip: "Wartość 1.00 jest optymalnie dopasowana pod monitory 60-144Hz i skok gałek pada.",

    // Tuning Reference: Gas
    badge_gas: "Modulacja Gazu",
    gas_name: "Krzywa Progresji Gazu (RT Gamma)",
    gas_summary: "Kształtuje charakterystykę prawego spustu (RT - gaz). 1.00 to liniowy; wyższe wartości zmiękczają początek.",
    gas_min_title: "Przy 0.50 (Agresywny strzał):",
    gas_min_text: "Duża moc uwalniana na samym początku skoku spustu. Świetne dla słabszych aut wolnossących (np. AE86).",
    gas_max_title: "Przy 2.50 (Super-precyzyjne dozowanie):",
    gas_max_text: "Pierwsze 70% spustu daje delikatną moc. Kluczowe dla opanowania 1000-konnych potworów z potężnym turbo.",
    gas_tip: "1.00–1.20 daje najbardziej naturalne i precyzyjne operowanie gazem w poślizgu.",

    // Tuning Reference: Brake
    badge_brake: "Hamowanie Lewą Nogą",
    brake_name: "Czułość Spustu Hamulca (LT Gamma)",
    brake_summary: "Kształtuje progresję lewego spustu (LT) do precyzyjnego hamowania lewą nogą w drifcie.",
    brake_min_title: "Przy 0.50 (Mocny chwyt):",
    brake_min_text: "Maksymalna siła hamowania już przy lekkim wciśnięciu. Może gwałtownie zaburzać balans w poślizgu.",
    brake_max_title: "Przy 2.50 (Płynna modulacja trail):",
    brake_max_text: "Bardzo płynny przyrost siły. Pozwala swobodnie oprzeć palec na LT i korygować kąt bez blokowania kół.",
    brake_tip: "1.30 pozwala delikatnie podhamowywać przód w drifcie, idealnie dociągając nos do pachołków.",

    // Tuning Reference: ABS
    badge_abs: "Inteligentny Balans",
    abs_name: "Asystent Hamowania Lewą Nogą w Drifcie",
    abs_summary: "Dynamicznie koryguje balans hamulców w drifcie: hamulec nożny dociąża przód auta bez gaszenia poślizgu tylnych kół.",
    abs_min_title: "Wyłączony [ ] (Standardowa fizyka hamulców AC):",
    abs_min_text: "Wciśnięcie hamulca chwyta równo wszystkie 4 koła, często blokując dyferencjał i natychmiast gasząc poślizg.",
    abs_max_title: "Włączony [✔] (Inteligentny balans driftowy):",
    abs_max_text: "Daje priorytet przednim zaciskom, dociążając przednią oś i zacieśniając kąt bez dławienia tylnych opon.",
    abs_tip: "Pozostaw [✔] WŁĄCZONE dla łatwego stosowania techniki lewej nogi na padzie.",

    // Tuning Reference: Rev
    badge_rev: "Freestyle & Gymkhana",
    rev_name: "Obsługa Reverse Entry & Rotacji 360° (>90° / >140°)",
    rev_summary: "Algorytm odwracający logikę kontry powyżej 90°, umożliwiający wejścia tyłem (backward entry) i obroty 360°.",
    rev_min_title: "Wyłączony [ ] (Sztywny limit 90°):",
    rev_min_text: "Asystent zatrzymuje się na 90°. Przekroczenie tego kąta powoduje gwałtowny opór kół i gwarantowany spin.",
    rev_max_title: "Włączony [✔] (Płynna inwersja powyżej 90°):",
    rev_max_text: "Płynnie odwraca skręt w zakresie 90°–180°, pozwalając na backwardy i bezproblemowe dokończenie obrotu 360°.",
    rev_tip: "Włącz [✔], jeśli uwielbiasz gymkhanę, styl freestyle lub widowiskowe wejścia tyłem!",

    // Tuning Reference: Auto
    badge_auto: "Kontrola Skrzyni",
    auto_name: "Tryb Skrzyni Biegów CarX Drift",
    auto_summary: "Algorytm automatycznej skrzyni biegów w stylu CarX: blokuje bieg w optymalnym zakresie obrotów podczas poślizgu.",
    auto_min_title: "Wyłączony [ ] (Standardowy automat AC):",
    auto_min_text: "Standardowa skrzynia gry niepotrzebnie redukuje lub wbija wyższy bieg w połowie zakrętu, psując poślizg.",
    auto_max_title: "Włączony [✔] (Gubernator obrotów CarX):",
    auto_max_text: "Utrzymuje stały bieg przez cały poślizg, zapewniając maksymalny ciąg silnika aż do wyprostowania auta.",
    auto_tip: "Niezastąpione, jeśli grasz na automatycznej skrzyni! Jeśli zmieniasz biegi manualnie na padzie, wyłącz."
,

    tweaksTitle: "Konfiguracja w Content Managerze i na Padzie",
    tweaksIntro: "Aby asysta CarX Assist miała pełną, 100% kontrolę nad kołami bez zakłóceń ze strony filtrów Assetto Corsa, ustaw poniższe wartości w Content Managerze:",
    tweaksWarning: "⚠️ Bardzo ważna zasada: Wbudowane filtry i redukcja prędkościowa AC walczą z matematycznym algorytmem CarX! Wyzeruj je zgodnie z poniższą listą.",
    tweaksAppTabTitle: "W Aplikacji CarX Gamepad w Grze (Zakładka Controller Tweaks):",
    tweaksAppTabDesc: "Gdy włączysz aplikację 'CarX Gamepad' na prawym pasku HUD podczas jazdy, przejdź do 3. zakładki: 'Controller Tweaks'. Znajdziesz tam monitor wejść na żywo pokazujący pozycję gałki, okrąg martwej strefy, krzywą gamma oraz bezpośrednie suwaki martwej strefy i czułości.",

    extraTitle: "Funkcje Dodatkowe & Zaawansowane Asysty",
    extraIntro: "Zaawansowane moduły wbudowane w CarX Assist, przenoszące kultowe rozwiązania z CarX Drift Racing Online.",
    f_rev_title: "Asysta Reverse Entry & 360 Spin Recovery (>90° / >140°)",
    f_rev_desc: "Płynnie odwraca znak kontry przy kącie poślizgu >90° z pełną gałką lub powyżej 140° kąta driftu. Pozwala rzucać głębokie Reverse Entry tyłem oraz kręcić 360-tki bez zacinania kół przodem.",
    f_gear_title: "Inteligentny Automat Skrzyni Biegów CarX",
    f_gear_desc: "Logika driftowa: blokuje wrzucenie wyższego biegu w środku poślizgu przy odcince, szybciej redukuje przed zakrętem przy dohamowaniu i automatycznie podbija międzygaz (rev-match).",
    f_pedals_title: "Krzywe Czułości Pedałów (RT / LT Gamma)",
    f_pedals_desc: "Niezależna progresywna czułość triggerów. 1.00 = liniowa standardowa. Wartość zalecana 1.30 na padzie zapewnia ogromną precyzję przy 50-75% gazu w tandemach oraz miękki początek dohamowań lewą nogą.",
    f_kb_title: "Tryb Klawiatury CarX (A/D/W/S)",
    f_kb_desc: "Oryginalny progresywny algorytm wirtualnej gałki z przyspieszeniem przekładek. Pozwala rywalizować na klawiaturze za pomocą klawiszy A/D (skręt), W/S (pedały) i Spacji (ręczny).",

    overlayTitle: "Gamepad Overlay – Autorski Dodatek od Dovy",
    overlayBadge: "★ W Zestawie w CarX_Assist.zip ★",
    overlayDesc: "Animowana w czasie rzeczywistym nakładka HUD na ekran, stworzona specjalnie dla graczy driftujących na padzie, streamerów i twórców wideo w Assetto Corsa. Ponieważ w grze brakowało nowoczesnego wizualizera kontrolera, dodatek został stworzony i dołączony do paczki za darmo!",
    overlayF1Title: "Ruch Gałki Analogowej & Deadzone",
    overlayF1Desc: "Śledzenie Ruchu w Czasie Rzeczywistym: Płynna wirtualna gałka analogowa pokazująca dokładny skręt i strefę martwą.",
    overlayF2Title: "Paski Nacisku Triggerów RT / LT",
    overlayF2Desc: "Progresywne Paski Nacisku: Dynamiczne paski świetlne dla triggera RT (gazu) i LT (do hamowania lewą nogą).",
    overlayF3Title: "Podświetlenie Przycisków i Bumperów",
    overlayF3Desc: "Świecące Przyciski: Natychmiastowa reakcja i podświetlenie dla przycisków A/B/X/Y, bumperów LB/RB, D-Pada i ręcznego.",
    overlayF4Title: "Podwójny Tryb Kontrolera (Xbox & PlayStation)",
    overlayF4Desc: "Przełącznik Trybu 1-Kliknięciem: Kliknięcie w pigułkę na ekranie natychmiast przełącza między układem Xbox (ABXY, LB/RB) a PlayStation (✕○□△, L1/R1).",
    overlayTip: "💡 Jak włączyć w grze: Przesuń kursor myszy do prawej krawędzi ekranu, otwórz listę aplikacji i kliknij 'Gamepad Overlay'. Przypnij okno w dowolnym miejscu!",

    guideTitle: "Przewodnik Przejścia z CarX do Assetto Corsa",
    guideWhyTitle: "Dlaczego Jazda na Padzie w Assetto Corsa Bez Tego Skryptu Jest Niemożliwa?",
    guideWhyText: "W standardowym Assetto Corsa gałka analogowa steruje bezpośrednio maglownicą. W przeciwieństwie do CarX Drift Racing Online, który posiada wbudowany solver kontry, AC wymaga ręcznego kręcenia kołami o 900 stopni w ułamku sekundy — co na 15-milimetrowej gałce jest fizycznie niemożliwe. Skrypt CarX Assist przenosi matematyczny algorytm CarX SteerVersion 6 wprost do Custom Shaders Patch, łącząc płynność CarXa z bezkonkurencyjną fizyką Assetto Corsa.",
    guideRulesTitle: "Główne Zasady Driftu z CarX Assist:",
    guideRule1: "Gałka wyznacza TWOJĄ INTENCJĘ, a nie sztywny kąt kół: Aby zwiększyć kąt driftu, pociągnij gałkę lekko w stronę zakrętu. Aby wyprostować, pchnij ją na zewnątrz.",
    guideRule2: "Pozwól asyście złapać samochód (Autokontra Idle): Przy gwałtownym flicku lub przekładce puść gałkę na ułamek sekundy do środka. Asysta sama wyłapie poślizg pod optymalnym kątem!",
    guideRule3: "Gaz steruje trajektorią: Więcej gazu wynosi auto na zewnątrz trasy, odpuszczenie gazu zacieśnia linię do wewnętrznej tarki.",
    guideRule4: "Hamulec lewą nogą do korekty prędkości: Włącz asystę Anti-Lock, aby móc delikatnie muskać lewy trigger LT i kontrolować prędkość w tandemie bez blokowania przednich kół.",

    installTitle: "Instalacja, Aktualizacje & Najczęściej Zadawane Pytania",
    installStepsTitle: "Błyskawiczna Instalacja (Drag & Drop):",
    installStep1: "Otwórz program Content Manager.",
    installStep2: "Przeciągnij i upuść plik CarX_Assist.zip bezpośrednio w okno Content Managera.",
    installStep3: "W prawym górnym rogu kliknij zieloną ikonę pobierania i wybierz 'Install'.",
    installStep4: "Przejdź do: Settings -> Custom Shaders Patch -> GAMEPAD FX: zaznacz [x] Active i wybierz CarX Assist.",
    installStep5: "Gotowe! W grze włącz aplikację CarX Gamepad z bocznego paska.",
    faqTitle: "Często Zadawane Pytania (FAQ):",
    faq1Q: "P: Czy skrypt działa na serwerach online multiplayer?",
    faq1A: "O: Tak! 100% kompatybilny ze wszystkimi serwerami online. Skrypty Gamepad FX działają lokalnie u gracza i nigdy nie powodują błędów sumy kontrolnej ani kicka z serwera.",
    faq2Q: "P: Czy asysta wymaga instalacji CarX lub plików DLL?",
    faq2A: "O: Zero plików DLL! Skrypt napisany jest w 100% w czystym Lua i Pythonie. Jest całkowicie bezpieczny i nie wymaga posiadania gry CarX Drift Racing Online.",

    toastCopied: "Setup został skopiowany do schowka!",
    toastDownloaded: "Plik setupu .carx.json został pobrany!",
    toastImportSuccess: "Setup wczytany pomyślnie do generatora!",
    toastImportErr: "Błąd: Nieprawidłowy format pliku JSON setupu!",
    toastGuideCopied: "📋 Ściągawka setupu AC skopiowana do schowka!",

    tuningSecTitle: "Rekomendacje Setupu Auta w Assetto Corsa",
    tuningSecSub: "Telemetria & Dyno z CarX • Jednostki Przeliczone dla Menu Garażu AC",
    badgeCarXSynced: "Setup CarX: Zsynchronizowany",
    btnCopyAcGuide: "Kopiuj Ściągę Setupu AC",
    tuningSecIntro: "Oto parametry auta odczytane bezpośrednio z CarX Drift Racing Online, przeliczone na jednostki i menu mechanika (Pitstop / Setup) w Assetto Corsa. Ustaw te wartości w garażu AC, aby auto prowadziło się w poślizgu identycznie jak w CarX i idealnie współpracowało z asystą.",
    cardTyresTitle: "Ciśnienie w Oponach (PSI)",
    lblFrontPsi: "Przód (Front):",
    lblRearPsi: "Tył (Rear):",
    tipTyres: "Niższe ciśnienie z tyłu (16-19 PSI) daje większy grip na odpychaniu w poślizgu i lepszą kontrolę kąta gazem (dokładnie jak w CarX). Wyższe z przodu (22-26 PSI) zapewnia natychmiastową reakcję na kontrę.",
    cardAlignmentTitle: "Geometria Zawieszenia",
    lblSteerLock: "Kąt Skrętu (Max Lock):",
    lblCaster: "Wyprzedzenie (Caster):",
    lblCamberFront: "Pochylenie Przód (Camber):",
    lblCamberRear: "Pochylenie Tył (Camber):",
    lblAckermann: "Kąt Ackermanna:",
    tipAlignment: "Wysoki Caster (9°+) generuje siłę prostującą (self-aligning torque) i pozwala asyście samoczynnie złapać właściwy kąt (autocatch). Negatyw przodu (-4.5° do -5.5°) daje pełny styk koła w poślizgu, a tył bliski 0° daje trakcję napędową.",
    cardDrivetrainTitle: "Dyferencjał & Spięcie",
    lblDiffPower: "Spięcie Gaz (Power Lock):",
    lblDiffCoast: "Spięcie Odpuszczenie (Coast):",
    tipDrivetrain: "Diff Power 90-100% (lub sztywny spaw) natychmiast blokuje obie półosie przy dodaniu gazu, gwarantując łatwe zarzucenie tyłu bez nagłego prostowania. Diff Coast (60-80%) stabilizuje auto przy odpuszczeniu gazu i dohamowaniach lewą nogą.",
    cardAssistTitle: "Synergia z Asystą CarX",
    lblAssistIdle: "Autocatch (Idle Ratio):",
    lblAssistDamp: "Tłumienie (StabK):",
    lblAssistPred: "Predykcja (Lookahead):",
    tipAssist: "Parametry asysty są automatycznie sprzężone z fizyką Twojego auta w CarX. Zwiększenie kąta skrętu lub zmiana ciśnień automatycznie kalibruje predykcję trajektorii i siłę automatycznej kontry."
  }
};


function updateAcWorkflowLang(lang) {
  const isPl = (lang === 'pl');

  // Garage topbar
  const elBadge = document.getElementById('acBadgeReadout');
  if (elBadge) {
    elBadge.innerHTML = `<span class="pulse-dot"></span> ` + (isPl ? `1:1 Odczyt z Gry` : `1:1 Live Game Readout`);
  }
  const elSub = document.getElementById('acGarageSub');
  if (elSub) {
    elSub.textContent = isPl ?
      `Uniwersalny edytor setupu dla dowolnego auta Assetto Corsa • Ciśnienia co 1 PSI • Asysta driftu CarX` :
      `Universal setup editor for any Assetto Corsa car • 1 PSI pressure step • CarX drift assist synergy`;
  }
  const elBtnUpload = document.getElementById('acBtnUpload');
  if (elBtnUpload) {
    elBtnUpload.innerHTML = isPl ? `📥 Wczytaj plik .ini` : `📥 Load .ini file`;
  }
  const elBtnDownload = document.getElementById('acBtnDownload');
  if (elBtnDownload) {
    elBtnDownload.innerHTML = isPl ? `💾 Pobierz plik .ini` : `💾 Download .ini file`;
  }
  const elBtnSync = document.getElementById('acBtnSync');
  if (elBtnSync) {
    elBtnSync.innerHTML = isPl ? `🔄 Zsynchronizuj z CarX` : `🔄 Sync with CarX`;
  }

  // Workflow Guide box
  const elWfHeader = document.getElementById('acWfHeader');
  if (elWfHeader) {
    elWfHeader.textContent = isPl ?
      `JAK TO DZIAŁA? PRZEPŁYW DANYCH: CARX ➔ STRONA WWW ➔ ASSETTO CORSA` :
      `HOW IT WORKS: DATA FLOW: CARX ➔ WEB PORTAL ➔ ASSETTO CORSA`;
  }
  const elWfBtnCopy = document.getElementById('acWfBtnCopy');
  if (elWfBtnCopy) {
    elWfBtnCopy.innerHTML = isPl ? `📋 Kopiuj ścieżkę do setupów AC` : `📋 Copy AC setups path`;
  }

  const elCard1Title = document.getElementById('acWfCard1Title');
  if (elCard1Title) {
    elCard1Title.innerHTML = isPl ? `<span>1️⃣</span> CO WCZYTAĆ NA STRONIE WWW?` : `<span>1️⃣</span> WHAT TO LOAD ON THE WEBSITE?`;
  }
  const elCard1Body = document.getElementById('acWfCard1Body');
  if (elCard1Body) {
    elCard1Body.innerHTML = isPl ?
      `Kliknij przycisk <strong>„Wczytaj plik”</strong> powyżej:<br>` +
      `• <strong>Z CarX:</strong> Wgraj plik <code style="color: var(--cyan); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">.json</code> lub <code style="color: var(--cyan); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">.csv</code> z folderu <code style="color:#e2e8f0; background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">Kino/CarX_Assist/</code> (statystyki z jazdy lub profil auta). Strona automatycznie odczyta telemetrię i ustawi geometrię!<br>` +
      `• <strong>Z Assetto Corsa:</strong> Wgraj plik <code style="color: var(--orange); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last.ini</code> lub <code style="color: var(--orange); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last_carx.ini</code>, aby podejrzeć i zmodyfikować obecny setup.` :
      `Click the <strong>"Load file"</strong> button above:<br>` +
      `• <strong>From CarX:</strong> Upload a <code style="color: var(--cyan); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">.json</code> or <code style="color: var(--cyan); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">.csv</code> file from <code style="color:#e2e8f0; background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">Kino/CarX_Assist/</code> (session telemetry or car profile). The portal automatically reads telemetry and tunes geometry!<br>` +
      `• <strong>From Assetto Corsa:</strong> Upload <code style="color: var(--orange); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last.ini</code> or <code style="color: var(--orange); background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last_carx.ini</code> to inspect and modify your current setup.`;
  }

  const elCard2Title = document.getElementById('acWfCard2Title');
  if (elCard2Title) {
    elCard2Title.innerHTML = isPl ? `<span>2️⃣</span> EDYCJA I POBRANIE .INI` : `<span>2️⃣</span> TUNE & DOWNLOAD .INI`;
  }
  const elCard2Body = document.getElementById('acWfCard2Body');
  if (elCard2Body) {
    elCard2Body.innerHTML = isPl ?
      `• Dostosuj ciśnienia opon, przełożenia skrzyni i sztywność amortyzatorów (suwaki automatycznie synchronizują symetrię lewej i prawej strony LF/RF i LR/RR).<br>` +
      `• Gdy setup jest gotowy, kliknij pomarańczowy przycisk <strong>„💾 Pobierz plik .ini dla AC”</strong>.<br>` +
      `• Przeglądarka pobierze gotowy plik konfiguracyjny <code style="color:#22c55e; background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last_carx.ini</code>.` :
      `• Adjust tyre pressures, gear ratios, and damper stiffness (sliders automatically synchronize left/right axle symmetry LF/RF & LR/RR).<br>` +
      `• When your setup is tuned, click the orange <strong>"💾 Download .ini file for AC"</strong> button.<br>` +
      `• The browser will generate and download <code style="color:#22c55e; background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last_carx.ini</code>.`;
  }

  const elCard3Title = document.getElementById('acWfCard3Title');
  if (elCard3Title) {
    elCard3Title.innerHTML = isPl ? `<span>3️⃣</span> CO WCZYTAĆ W ASSETTO CORSA?` : `<span>3️⃣</span> WHAT TO LOAD IN ASSETTO CORSA?`;
  }
  const elCard3Body = document.getElementById('acWfCard3Body');
  if (elCard3Body) {
    elCard3Body.innerHTML = isPl ?
      `• <strong>Setup auta:</strong> Przenieś pobrany plik <code style="color:#f59e0b; background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last_carx.ini</code> do folderu:<br>` +
      `<code style="display:inline-block; margin-top:2px; font-size:11px; background:rgba(0,0,0,0.5); padding:2px 6px; border-radius:4px; color:#f8fafc;">Dokumenty\\Assetto Corsa\\setups\\&lt;auto&gt;\\generic\\</code><br>` +
      `W grze w Pitstopie wejdź w <strong>Setup ➔ Load ➔ generic</strong> i wybierz <strong>last_carx</strong>.<br>` +
      `• <strong>Asysta kierowania (Gamepad FX):</strong> W Content Managerze (<em>Settings ➔ Controls ➔ Gamepad FX</em>) upewnij się, że aktywny jest skrypt <strong>CarX Assist</strong>.` :
      `• <strong>Car Setup:</strong> Move the downloaded <code style="color:#f59e0b; background: rgba(0,0,0,0.4); padding: 1px 5px; border-radius: 3px;">last_carx.ini</code> into:<br>` +
      `<code style="display:inline-block; margin-top:2px; font-size:11px; background:rgba(0,0,0,0.5); padding:2px 6px; border-radius:4px; color:#f8fafc;">Documents\\Assetto Corsa\\setups\\&lt;car&gt;\\generic\\</code><br>` +
      `In the in-game Pitstop go to <strong>Setup ➔ Load ➔ generic</strong> and select <strong>last_carx</strong>.<br>` +
      `• <strong>Steering Assist (Gamepad FX):</strong> In Content Manager (<em>Settings ➔ Controls ➔ Gamepad FX</em>) ensure <strong>CarX Assist</strong> script is enabled.`;
  }

  const elCard4Title = document.getElementById('acWfCard4Title');
  if (elCard4Title) {
    elCard4Title.innerHTML = isPl ?
      `<span>🎮</span><span>USTAWIENIA STEROWANIA PADA & SKRYPTU ASSIST.LUA (GDZIE SĄ, GDZIE SIĘ ZAPISUJĄ I JAK WCZYTAĆ?)</span>` :
      `<span>🎮</span><span>GAMEPAD STEERING SETTINGS & ASSIST.LUA SCRIPT (WHERE ARE THEY, WHERE DO THEY SAVE & HOW TO LOAD?)</span>`;
  }
  const elBtnCopyAssist = document.getElementById('acWfBtnCopyAssist');
  if (elBtnCopyAssist) {
    elBtnCopyAssist.innerHTML = isPl ? `📋 Kopiuj ścieżkę do assist.lua` : `📋 Copy assist.lua path`;
  }
  const elCard4Body = document.getElementById('acWfCard4Body');
  if (elCard4Body) {
    elCard4Body.innerHTML = isPl ?
      `<strong>1. Gdzie są ustawienia sterowania na stronie WWW?</strong><br>` +
      `W zakładce u góry: <strong>🛠️ Setup Generator & Presets</strong> masz suwaki skrętu (Kąt skrętu 50°–75°, Autocatch Ratio, Stabilizacja yaw, Płynność kontry, Anti-spin). Możesz tam kliknąć <strong>„💾 Pobierz plik assist.lua”</strong> lub <strong>„📋 Kopiuj kod do schowka”</strong>.<br><br>` +
      `<strong>2. Gdzie wkleić / wczytać do skryptu CarX Assist w grze?</strong><br>` +
      `Plik <code style="color:#c084fc; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">assist.lua</code> oraz <code style="color:#c084fc; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">settings.ini</code> znajdują się w folderze gry:<br>` +
      `<code style="display:inline-block; margin: 3px 0; background:rgba(0,0,0,0.5); padding:2px 8px; border-radius:4px; color:#f8fafc; font-family:var(--font-mono);">assettocorsa\\extension\\lua\\joypad-assist\\carx_assist\\assist.lua</code><br>` +
      `Gdy podmienisz ten plik, gra od razu wystartuje z Twoją nową fizyką sterowania.<br><br>` +
      `<strong>3. Gdzie zapisują się ustawienia z Content Managera i podczas jazdy?</strong><br>` +
      `• <strong>Ustawienia pada (CM):</strong> <em>Settings ➔ Controls ➔ Gamepad</em> zapisują się w <code style="color:#38bdf8; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">Documents\\Assetto Corsa\\cfg\\controls.ini</code>.<br>` +
      `• <strong>Ustawienia skryptu na żywo:</strong> W grze po prawej stronie włącz aplikację <strong>CarXGamepad</strong>. Zmiany suwaków w grze zapisują się automatycznie w <code style="color:#38bdf8; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">Documents\\Assetto Corsa\\cfg\\extension\\joypad-assist\\carx_assist.ini</code>.` :
      `<strong>1. Where are steering settings on the web portal?</strong><br>` +
      `In the top navigation tab: <strong>🛠️ Setup Generator & Presets</strong> you will find all gamepad steering controls (Steering lock 50°–75°, Autocatch Ratio, Yaw stabilization, Countersteer smoothness, Anti-spin). You can click <strong>"💾 Download assist.lua file"</strong> or <strong>"📋 Copy code to clipboard"</strong>.<br><br>` +
      `<strong>2. Where to paste / load into the CarX Assist script in Assetto Corsa?</strong><br>` +
      `<code style="color:#c084fc; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">assist.lua</code> and <code style="color:#c084fc; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">settings.ini</code> reside in the AC directory:<br>` +
      `<code style="display:inline-block; margin: 3px 0; background:rgba(0,0,0,0.5); padding:2px 8px; border-radius:4px; color:#f8fafc; font-family:var(--font-mono);">assettocorsa\\extension\\lua\\joypad-assist\\carx_assist\\assist.lua</code><br>` +
      `Replacing this file applies your custom steering physics immediately in-game.<br><br>` +
      `<strong>3. Where do Content Manager and in-game adjustments save?</strong><br>` +
      `• <strong>Gamepad Settings (CM):</strong> <em>Settings ➔ Controls ➔ Gamepad</em> are saved in <code style="color:#38bdf8; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">Documents\\Assetto Corsa\\cfg\\controls.ini</code>.<br>` +
      `• <strong>Live In-Game Script Settings:</strong> Open the <strong>CarXGamepad</strong> app on the right in-game HUD. Changes made via in-game sliders are saved automatically in <code style="color:#38bdf8; background:rgba(0,0,0,0.4); padding:1px 5px; border-radius:3px;">Documents\\Assetto Corsa\\cfg\\extension\\joypad-assist\\carx_assist.ini</code>.`;
  }
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('carx_assist_lang', lang); } catch (e) {}
  document.getElementById('btnLangEn').classList.toggle('active', lang === 'en');
  document.getElementById('btnLangPl').classList.toggle('active', lang === 'pl');

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  updateStabilityDiagnosis();
  onCalcSliderChange();
  onGenSliderChange();
  updateAcWorkflowLang(lang);
  initAcGarage();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (t) {
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => {
      t.classList.remove('show');
    }, 2800);
  }
}

// --- Presets Data (matching Lua script parameters, NO tyreSmoke) ---
const setupPresets = {
  v2test: {
    name: "CarX Assist (DRO 1:1)",
    lock: 60.0,
    keep: 40,
    idle: 70,
    stabk: 0.20,
    sk1: 3.2,
    sk2: 4.00,
    pred: 0.20,
    rt: 1.00,
    lt: 1.30,
    abs: true,
    rev: true,
    auto: false,
    tuning: {
      frontPressureKPa: 145,
      rearPressureKPa: 117,
      frontLockDeg: 60.0,
      frontCasterDeg: 9.5,
      frontCamberDeg: -5.0,
      rearCamberDeg: -0.8,
      ackermannPercent: 10,
      diffLockPower: 100,
      diffLockCoast: 100
    }
  },
  carx: {
    name: "CarX 1:1 Default",
    lock: 65.0,
    keep: 45,
    idle: 80,
    stabk: 0.10,
    sk1: 5.5,
    sk2: 1.80,
    pred: 1.00,
    rt: 1.00,
    lt: 1.30,
    abs: true,
    rev: true,
    auto: false,
    tuning: {
      frontPressureKPa: 160,
      rearPressureKPa: 130,
      frontLockDeg: 65.0,
      frontCasterDeg: 10.0,
      frontCamberDeg: -5.5,
      rearCamberDeg: -0.5,
      ackermannPercent: 15,
      diffLockPower: 100,
      diffLockCoast: 80
    }
  },
  wdt_street: {
    name: "WDT Street (48°)",
    lock: 48.0,
    keep: 40,
    idle: 75,
    stabk: 0.12,
    sk1: 6.0,
    sk2: 2.00,
    pred: 1.10,
    rt: 1.20,
    lt: 1.30,
    abs: true,
    rev: false,
    auto: false,
    tuning: {
      frontPressureKPa: 160,
      rearPressureKPa: 135,
      frontLockDeg: 48.0,
      frontCasterDeg: 8.0,
      frontCamberDeg: -4.5,
      rearCamberDeg: -1.0,
      ackermannPercent: 18,
      diffLockPower: 100,
      diffLockCoast: 60
    }
  },
  wdt_pro: {
    name: "WDT Pro (53°)",
    lock: 53.0,
    keep: 50,
    idle: 82,
    stabk: 0.10,
    sk1: 6.5,
    sk2: 2.20,
    pred: 1.20,
    rt: 1.25,
    lt: 1.30,
    abs: true,
    rev: true,
    auto: false,
    tuning: {
      frontPressureKPa: 150,
      rearPressureKPa: 115,
      frontLockDeg: 53.0,
      frontCasterDeg: 9.5,
      frontCamberDeg: -5.2,
      rearCamberDeg: -0.6,
      ackermannPercent: 10,
      diffLockPower: 100,
      diffLockCoast: 70
    }
  },
  gravy: {
    name: "Gravy Garage (55°)",
    lock: 55.0,
    keep: 45,
    idle: 85,
    stabk: 0.08,
    sk1: 5.8,
    sk2: 2.00,
    pred: 1.15,
    rt: 1.20,
    lt: 1.30,
    abs: true,
    rev: true,
    auto: false,
    tuning: {
      frontPressureKPa: 145,
      rearPressureKPa: 110,
      frontLockDeg: 55.0,
      frontCasterDeg: 9.0,
      frontCamberDeg: -5.0,
      rearCamberDeg: -0.5,
      ackermannPercent: 12,
      diffLockPower: 100,
      diffLockCoast: 75
    }
  },
  vdc: {
    name: "Formula Drift / VDC (68°)",
    lock: 68.0,
    keep: 55,
    idle: 85,
    stabk: 0.06,
    sk1: 7.5,
    sk2: 2.50,
    pred: 1.35,
    rt: 1.30,
    lt: 1.40,
    abs: true,
    rev: true,
    auto: false,
    tuning: {
      frontPressureKPa: 140,
      rearPressureKPa: 105,
      frontLockDeg: 68.0,
      frontCasterDeg: 10.5,
      frontCamberDeg: -6.0,
      rearCamberDeg: -0.3,
      ackermannPercent: 5,
      diffLockPower: 100,
      diffLockCoast: 80
    }
  },
  spin360: {
    name: "360 Freestyle & Reverse",
    lock: 65.0,
    keep: 60,
    idle: 88,
    stabk: 0.12,
    sk1: 7.0,
    sk2: 2.40,
    pred: 1.30,
    rt: 1.30,
    lt: 1.30,
    abs: true,
    rev: true,
    auto: false,
    tuning: {
      frontPressureKPa: 150,
      rearPressureKPa: 130,
      frontLockDeg: 65.0,
      frontCasterDeg: 10.0,
      frontCamberDeg: -5.0,
      rearCamberDeg: -0.5,
      ackermannPercent: 10,
      diffLockPower: 100,
      diffLockCoast: 50
    }
  }
};

let currentPhysicsModel = 0; // 0 = DRO 1, 1 = DRO 2 Beta, 2 = CarX Street

// --- CarX Car Tuning & Alignment Memory ---
let currentCarTuning = {
  frontPressureKPa: 150,
  rearPressureKPa: 120,
  frontLockDeg: 60.0,
  frontCasterDeg: 9.5,
  frontCamberDeg: -5.0,
  rearCamberDeg: -0.8,
  ackermannPercent: 10,
  diffLockPower: 100,
  diffLockCoast: 70
};

function updateCarTuningRecommendations(tuningData) {
  if (tuningData && typeof tuningData === 'object') {
    if (tuningData.frontPressureKPa !== undefined) currentCarTuning.frontPressureKPa = parseFloat(tuningData.frontPressureKPa);
    if (tuningData.rearPressureKPa !== undefined) currentCarTuning.rearPressureKPa = parseFloat(tuningData.rearPressureKPa);
    if (tuningData.frontLockDeg !== undefined) currentCarTuning.frontLockDeg = parseFloat(tuningData.frontLockDeg);
    if (tuningData.frontCasterDeg !== undefined) currentCarTuning.frontCasterDeg = parseFloat(tuningData.frontCasterDeg);
    if (tuningData.frontCamberDeg !== undefined) currentCarTuning.frontCamberDeg = parseFloat(tuningData.frontCamberDeg);
    if (tuningData.rearCamberDeg !== undefined) currentCarTuning.rearCamberDeg = parseFloat(tuningData.rearCamberDeg);
    if (tuningData.ackermannPercent !== undefined) currentCarTuning.ackermannPercent = parseFloat(tuningData.ackermannPercent);
    if (tuningData.diffLockPower !== undefined) currentCarTuning.diffLockPower = parseFloat(tuningData.diffLockPower);
    if (tuningData.diffLockCoast !== undefined) currentCarTuning.diffLockCoast = parseFloat(tuningData.diffLockCoast);
  }

  const isPl = (currentLang === 'pl');
  const genLockEl = document.getElementById('genLock');
  const genIdleEl = document.getElementById('genIdle');
  const genStabEl = document.getElementById('genStabK');
  const genPredEl = document.getElementById('genPredGain');

  const lockDeg = genLockEl ? parseFloat(genLockEl.value) : (currentCarTuning.frontLockDeg || 60.0);
  const idleRatio = genIdleEl ? parseInt(genIdleEl.value) : 70;
  const stabK = genStabEl ? parseFloat(genStabEl.value) : 0.20;
  const predGain = genPredEl ? parseFloat(genPredEl.value) : 0.20;

  // Conversions for AC Garage Units
  const frontPsi = (currentCarTuning.frontPressureKPa * 0.145038).toFixed(1);
  const rearPsi = (currentCarTuning.rearPressureKPa * 0.145038).toFixed(1);
  const caster = currentCarTuning.frontCasterDeg.toFixed(1);
  const camberF = currentCarTuning.frontCamberDeg.toFixed(1);
  const camberR = currentCarTuning.rearCamberDeg.toFixed(1);
  const ack = Math.round(currentCarTuning.ackermannPercent);
  const pwr = Math.round(currentCarTuning.diffLockPower);
  const cst = Math.round(currentCarTuning.diffLockCoast);

  // Update DOM Elements
  const elFPressRaw = document.getElementById('carxRawPressFront');
  const elFPressRec = document.getElementById('recAcPressFront');
  if (elFPressRaw) elFPressRaw.textContent = `CarX: ${Math.round(currentCarTuning.frontPressureKPa)} kPa`;
  if (elFPressRec) elFPressRec.textContent = `${frontPsi} PSI`;

  const elRPressRaw = document.getElementById('carxRawPressRear');
  const elRPressRec = document.getElementById('recAcPressRear');
  if (elRPressRaw) elRPressRaw.textContent = `CarX: ${Math.round(currentCarTuning.rearPressureKPa)} kPa`;
  if (elRPressRec) elRPressRec.textContent = `${rearPsi} PSI`;

  const elLockRaw = document.getElementById('carxRawLock');
  const elLockRec = document.getElementById('recAcLock');
  if (elLockRaw) elLockRaw.textContent = `CarX: ${lockDeg.toFixed(1)}°`;
  if (elLockRec) elLockRec.textContent = `${lockDeg.toFixed(1)}°`;

  const elCasterRaw = document.getElementById('carxRawCaster');
  const elCasterRec = document.getElementById('recAcCaster');
  if (elCasterRaw) elCasterRaw.textContent = `CarX: ${caster}°`;
  if (elCasterRec) elCasterRec.textContent = `${caster}° (8.5° - 10.0°)`;

  const elCamberFRaw = document.getElementById('carxRawCamberFront');
  const elCamberFRec = document.getElementById('recAcCamberFront');
  if (elCamberFRaw) elCamberFRaw.textContent = `CarX: ${camberF}°`;
  if (elCamberFRec) elCamberFRec.textContent = `${camberF}°`;

  const elCamberRRaw = document.getElementById('carxRawCamberRear');
  const elCamberRRec = document.getElementById('recAcCamberRear');
  if (elCamberRRaw) elCamberRRaw.textContent = `CarX: ${camberR}°`;
  if (elCamberRRec) elCamberRRec.textContent = `${camberR}° (${isPl ? "trakcja" : "traction"})`;

  const elAckRaw = document.getElementById('carxRawAckermann');
  const elAckRec = document.getElementById('recAcAckermann');
  if (elAckRaw) elAckRaw.textContent = `CarX: ${ack}%`;
  if (elAckRec) elAckRec.textContent = ack <= 20 ? `${ack}% (0% - 15%)` : `10% - 15%`;

  const elDiffPRaw = document.getElementById('carxRawDiffPower');
  const elDiffPRec = document.getElementById('recAcDiffPower');
  if (elDiffPRaw) elDiffPRaw.textContent = `CarX: ${pwr}%`;
  if (elDiffPRec) elDiffPRec.textContent = `${pwr}% ${pwr >= 95 ? (isPl ? "(Spaw / Sztywny)" : "(Welded / Spool)") : ""}`;

  const elDiffCRaw = document.getElementById('carxRawDiffCoast');
  const elDiffCRec = document.getElementById('recAcDiffCoast');
  if (elDiffCRaw) elDiffCRaw.textContent = `CarX: ${cst}%`;
  if (elDiffCRec) elDiffCRec.textContent = `${cst}%`;

  // Card 4: Assist Parity Card
  const elAssistIdle = document.getElementById('recAssistIdle');
  if (elAssistIdle) elAssistIdle.textContent = `${idleRatio}%`;

  const elAssistStab = document.getElementById('recAssistStab');
  if (elAssistStab) elAssistStab.textContent = `${stabK.toFixed(2)}`;

  const elAssistPred = document.getElementById('recAssistPred');
  if (elAssistPred) elAssistPred.textContent = `${predGain.toFixed(2)} s`;
}

function copyAcTuningGuide() {
  const isPl = (currentLang === 'pl');
  const frontPsi = (currentCarTuning.frontPressureKPa * 0.145038).toFixed(1);
  const rearPsi = (currentCarTuning.rearPressureKPa * 0.145038).toFixed(1);
  const lock = document.getElementById('genLock').value;
  const idle = document.getElementById('genIdle').value;
  const stab = document.getElementById('genStabK').value;
  const pred = document.getElementById('genPredGain').value;

  const text = isPl ?
`=== REKOMENDACJE SETUPU ASSETTO CORSA (Z TELEMETRII CARX) ===
Profil: ${document.getElementById('genName').value}

1. ZAKŁADKA TYRES (CIŚNIENIE OPON):
   • Przód: ${frontPsi} PSI (CarX: ${Math.round(currentCarTuning.frontPressureKPa)} kPa)
   • Tył: ${rearPsi} PSI (CarX: ${Math.round(currentCarTuning.rearPressureKPa)} kPa)
   -> Wskazówka: Niskie ciśnienie z tyłu daje duży grip na odpychaniu w poślizgu.

2. ZAKŁADKA ALIGNMENT (GEOMETRIA):
   • Kąt skrętu (Max Lock): ${lock}°
   • Caster (Wyprzedzenie): ${currentCarTuning.frontCasterDeg.toFixed(1)}° (Zalecane 8.5° - 10.0°)
   • Camber Przód: ${currentCarTuning.frontCamberDeg.toFixed(1)}°
   • Camber Tył: ${currentCarTuning.rearCamberDeg.toFixed(1)}° (Blisko zera dla trakcji napędowej)
   • Ackermann: ${Math.round(currentCarTuning.ackermannPercent)}% (Zalecane 0% - 15%)

3. ZAKŁADKA DRIVETRAIN (DYFERENCJAŁ):
   • Diff Power (pod gazem): ${Math.round(currentCarTuning.diffLockPower)}% ${currentCarTuning.diffLockPower >= 95 ? '(Spaw / Sztywny)' : ''}
   • Diff Coast (odpuszczenie): ${Math.round(currentCarTuning.diffLockCoast)}%

4. CARX GAMEPAD APP (ASYSTA W ASSETTO):
   • Idle Countersteer Ratio: ${idle}%
   • Drift Damping (StabK): ${stab}
   • Prediction Lookahead: ${pred} s` :
`=== ASSETTO CORSA SETUP GUIDE (FROM CARX TELEMETRY) ===
Profile: ${document.getElementById('genName').value}

1. GARAGE TAB: TYRES
   • Front: ${frontPsi} PSI (CarX: ${Math.round(currentCarTuning.frontPressureKPa)} kPa)
   • Rear: ${rearPsi} PSI (CarX: ${Math.round(currentCarTuning.rearPressureKPa)} kPa)
   -> Tip: Lower rear pressure provides authentic CarX drive grip mid-slide.

2. GARAGE TAB: ALIGNMENT
   • Max Steering Lock: ${lock}°
   • Caster: ${currentCarTuning.frontCasterDeg.toFixed(1)}° (Recommended 8.5° - 10.0°)
   • Front Camber: ${currentCarTuning.frontCamberDeg.toFixed(1)}°
   • Rear Camber: ${currentCarTuning.rearCamberDeg.toFixed(1)}° (Near 0° for forward bite)
   • Ackermann: ${Math.round(currentCarTuning.ackermannPercent)}% (Recommended 0% - 15%)

3. GARAGE TAB: DRIVETRAIN
   • Diff Power: ${Math.round(currentCarTuning.diffLockPower)}% ${currentCarTuning.diffLockPower >= 95 ? '(Spool / Welded)' : ''}
   • Diff Coast: ${Math.round(currentCarTuning.diffLockCoast)}%

4. CARX GAMEPAD APP (IN-GAME ASSIST):
   • Idle Countersteer Ratio: ${idle}%
   • Drift Damping (StabK): ${stab}
   • Prediction Lookahead: ${pred} s`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(translations[currentLang].toastGuideCopied);
    }).catch(() => {
      fallbackCopy(text);
      showToast(translations[currentLang].toastGuideCopied);
    });
  } else {
    fallbackCopy(text);
    showToast(translations[currentLang].toastGuideCopied);
  }
}

function selectPhysicsModel(id, autoPreset = true) {
  currentPhysicsModel = 0;
}

function loadGenPreset(key) {
  const p = setupPresets[key];
  if (!p) return;

  document.querySelectorAll('#tab-gen .preset-pill').forEach(btn => btn.classList.remove('active'));
  if (typeof event !== 'undefined' && event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }

  document.getElementById('genName').value = p.name;
  document.getElementById('genLock').value = p.lock;
  document.getElementById('genKeep').value = p.keep;
  document.getElementById('genIdle').value = p.idle;
  document.getElementById('genStabK').value = p.stabk.toFixed(2);
  document.getElementById('genSmoothK1').value = p.sk1.toFixed(1);
  document.getElementById('genSmoothK2').value = p.sk2.toFixed(2);
  document.getElementById('genPredGain').value = p.pred.toFixed(2);
  document.getElementById('genGasGamma').value = p.rt.toFixed(2);
  document.getElementById('genBrakeGamma').value = p.lt.toFixed(2);
  document.getElementById('genAbs').checked = p.abs;
  document.getElementById('genRev').checked = p.rev;
  document.getElementById('genAuto').checked = p.auto;

  if (p.tuning) {
    updateCarTuningRecommendations(p.tuning);
  }

  onGenSliderChange();
  updateAcWorkflowLang(lang);
  initAcGarage();
}

function onGenSliderChange() {
  const lock = parseFloat(document.getElementById('genLock').value);
  const keep = parseInt(document.getElementById('genKeep').value);
  const idle = parseInt(document.getElementById('genIdle').value);
  const stabk = parseFloat(document.getElementById('genStabK').value);
  const sk1 = parseFloat(document.getElementById('genSmoothK1').value);
  const sk2 = parseFloat(document.getElementById('genSmoothK2').value);
  const pred = parseFloat(document.getElementById('genPredGain').value);
  const gas = parseFloat(document.getElementById('genGasGamma').value);
  const brk = parseFloat(document.getElementById('genBrakeGamma').value);
  const testAngle = parseFloat(document.getElementById('genTestAngle')?.value || -32.0);

  document.getElementById('valGenLock').textContent = lock.toFixed(1) + '°';
  document.getElementById('valGenKeep').textContent = keep + '%';
  document.getElementById('valGenIdle').textContent = idle + '%';
  document.getElementById('valGenStabK').textContent = stabk.toFixed(2);
  document.getElementById('valGenSmoothK1').textContent = sk1.toFixed(1) + ' rad/s';
  document.getElementById('valGenSmoothK2').textContent = sk2.toFixed(2);
  document.getElementById('valGenPredGain').textContent = pred.toFixed(2);
  document.getElementById('valGenGasGamma').textContent = gas.toFixed(2);
  document.getElementById('valGenBrakeGamma').textContent = brk.toFixed(2);
  if (document.getElementById('valGenTestAngle')) {
    document.getElementById('valGenTestAngle').textContent = testAngle.toFixed(1) + '°';
  }

  updateStabilityDiagnosis();
  updateCarTuningRecommendations();
}

function updateStabilityDiagnosis() {
  const isPl = (currentLang === 'pl');
  const lock = parseFloat(document.getElementById('genLock').value);
  const keep = parseInt(document.getElementById('genKeep').value);
  const idle = parseInt(document.getElementById('genIdle').value);
  const stabk = parseFloat(document.getElementById('genStabK').value);
  const sk1 = parseFloat(document.getElementById('genSmoothK1').value);

  // Style diagnosis
  let styleTxt = isPl ? "Zrównoważony Street Drift" : "Balanced Street Drift";
  if (lock >= 60.0 && sk1 >= 6.5) {
    styleTxt = isPl ? "Agresywny Pro Drift / VDC" : "Aggressive Pro Drift / VDC";
  } else if (keep >= 55) {
    styleTxt = isPl ? "Stabilny Freestyle 360 / Bezpieczny" : "Stable 360 Freestyle / Forgiving";
  } else if (lock <= 46.0) {
    styleTxt = isPl ? "Techniczny Touge / Kunos Classic" : "Technical Touge / Kunos Classic";
  }
  document.getElementById('diagStyle').textContent = styleTxt;

  // Spinout protection
  let spinTxt = `${idle}% `;
  if (idle >= 85) {
    spinTxt += isPl ? "(Maksymalna - Asysta sama łapie poślizg)" : "(Maximum - Assist catches every slide)";
  } else if (idle >= 75) {
    spinTxt += isPl ? "(Wysoka - Standard CarX)" : "(High - Standard CarX)";
  } else {
    spinTxt += isPl ? "(Umiarkowana - Wymaga szybkiej ręki)" : "(Moderate - Requires active manual input)";
  }
  document.getElementById('diagSpin').textContent = spinTxt;

  // Transitions
  let transTxt = `${sk1.toFixed(1)} rad/s `;
  if (sk1 >= 7.0 && stabk <= 0.08) {
    transTxt += isPl ? "(Błyskawiczne przekładki z oporu w opór)" : "(Instantaneous snap-transitions)";
  } else if (sk1 >= 5.0) {
    transTxt += isPl ? "(Naturalna, płynna praca kół)" : "(Natural, progressive transitions)";
  } else {
    transTxt += isPl ? "(Dostojne, wolniejsze przejścia)" : "(Heavy, deliberate transitions)";
  }
  document.getElementById('diagTrans').textContent = transTxt;

  // Active Physics Engine
  const diagEng = document.getElementById('diagEngine');
  if (diagEng) {
    diagEng.textContent = isPl ? "Fizyka CarX 1:1 SteerV6 (DRO)" : "CarX 1:1 SteerV6 Physics (DRO)";
  }
}

// --- Setup JSON Schema (100% 1:1 Compatible with CarXGamepad.lua in AC) ---
function getSetupJsonObject() {
  const lock = parseFloat(document.getElementById('genLock').value);
  const keep = parseInt(document.getElementById('genKeep').value);
  const idle = parseInt(document.getElementById('genIdle').value);
  const stabk = parseFloat(document.getElementById('genStabK').value);
  const sk1 = parseFloat(document.getElementById('genSmoothK1').value);
  const sk2 = parseFloat(document.getElementById('genSmoothK2').value);
  const pred = parseFloat(document.getElementById('genPredGain').value);
  const gas = parseFloat(document.getElementById('genGasGamma').value);
  const brk = parseFloat(document.getElementById('genBrakeGamma').value);
  const abs = document.getElementById('genAbs').checked;
  const rev = document.getElementById('genRev').checked;
  const auto = document.getElementById('genAuto').checked;

  return {
    format: "CarXAssistSetup",
    version: "5.3.0",
    author: "Dova",
    name: document.getElementById('genName').value || "Custom CarX Setup",
    physicsModel: currentPhysicsModel,
    carx_physics_model: currentPhysicsModel,
    settings: {
      physicsModel: currentPhysicsModel,
      carx_physics_model: currentPhysicsModel,
      assistEnabled: true,
      autoClutch: true,
      deadzone: 0.06,
      gamma: 1.25,
      inwardKeepRatio: keep / 100.0,
      idleCounterRatio: idle / 100.0,
      baseSlipDeg: 10.5,
      yawPredEnabled: true,
      yawPredGain: pred,
      transferCounterK: 1.00,
      transferTurnInK: 0.70,
      casterDeg: currentCarTuning.frontCasterDeg,
      counterStrength: 1.00,
      stabK: stabk,
      stabW0: 0.50,
      stabW1: 1.50,
      stabRangeDeg: 12.0,
      dynSlipEnabled: true,
      drift4wdEnabled: false,
      smoothK1: sk1,
      smoothK2: sk2,
      slowSpeedKmh: 10.0,
      rumbleGain: 0.35,
      speedSens: 0.00,
      steerSpeed: 1.00,
      steerGamma: 1.00,
      steerFilter: 0.00,
      steerDeadzone: 0.00,
      rumbleEffects: 0.00,
      driftLockDeg: lock,
      brakeAbsAssist: abs,
      brakeGamma: brk,
      revEntryEnabled: rev,
      driftAutoGear: auto,
      gasGamma: gas,
      keyboardMode: false,
      kbSteerRate: 4.00
    },
    carx_car_tuning: {
      frontPressureKPa: currentCarTuning.frontPressureKPa,
      rearPressureKPa: currentCarTuning.rearPressureKPa,
      frontLockDeg: lock,
      frontCasterDeg: currentCarTuning.frontCasterDeg,
      frontCamberDeg: currentCarTuning.frontCamberDeg,
      rearCamberDeg: currentCarTuning.rearCamberDeg,
      ackermannPercent: currentCarTuning.ackermannPercent,
      diffLockPower: currentCarTuning.diffLockPower,
      diffLockCoast: currentCarTuning.diffLockCoast,
      recommendedAC: {
        frontPressurePSI: Math.round(currentCarTuning.frontPressureKPa * 0.145038),
        rearPressurePSI: Math.round(currentCarTuning.rearPressureKPa * 0.145038),
        casterDeg: currentCarTuning.frontCasterDeg,
        frontCamberDeg: currentCarTuning.frontCamberDeg,
        rearCamberDeg: currentCarTuning.rearCamberDeg,
        diffPower: currentCarTuning.diffLockPower,
        diffCoast: currentCarTuning.diffLockCoast
      }
    },
    carx_lock: lock,
    carx_keep: keep,
    carx_idle: idle,
    carx_stab: stabk,
    carx_smooth_k1: sk1,
    carx_smooth_k2: sk2,
    carx_lookahead: pred,
    carx_gas_gamma: gas,
    carx_brake_gamma: brk,
    carx_brake_assist: abs,
    carx_reverse_entry: rev,
    carx_drift_auto_gearbox: auto,
    carx_front_pressure_kpa: currentCarTuning.frontPressureKPa,
    carx_rear_pressure_kpa: currentCarTuning.rearPressureKPa,
    carx_front_caster: currentCarTuning.frontCasterDeg,
    carx_front_camber: currentCarTuning.frontCamberDeg,
    carx_rear_camber: currentCarTuning.rearCamberDeg,
    carx_ackermann: currentCarTuning.ackermannPercent,
    carx_diff_power: currentCarTuning.diffLockPower,
    carx_diff_coast: currentCarTuning.diffLockCoast
  };
}

// --- Export Functions ---
function copySetupJson() {
  const jsonStr = JSON.stringify(getSetupJsonObject(), null, 2);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(jsonStr).then(() => {
      showToast(translations[currentLang].toastCopied);
    }).catch(() => {
      fallbackCopy(jsonStr);
    });
  } else {
    fallbackCopy(jsonStr);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast(translations[currentLang].toastCopied);
}

function downloadSetupJson() {
  const obj = getSetupJsonObject();
  const safeName = (obj.name || "setup").toLowerCase().replace(/[^a-z0-9_-]/g, '_');
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${safeName}.carx.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(translations[currentLang].toastDownloaded);
}

// --- Import Functions (From File & Clipboard) ---
function triggerSetupFileInput() {
  const fi = document.getElementById('setupFileInput');
  if (fi) {
    fi.value = '';
    fi.click();
  }
}

function handleSetupFileUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    processAnyUploadedFile(e.target.result, file.name);
  };
  reader.readAsText(file);
}

function processAnyUploadedFile(rawText, fileName) {
  if (!rawText || !rawText.trim()) {
    showToast(translations[currentLang].toastImportErr);
    return;
  }
  const trimmed = rawText.trim();
  const fName = (fileName || "").toLowerCase();

  // 1. JSON Format (CarX profile, CarX telemetry stats, or script preset)
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    try {
      const obj = JSON.parse(rawText);
      applyImportedSetup(obj);
      return;
    } catch (err) {
      console.error("JSON parse error:", err);
    }
  }

  // 2. Assetto Corsa .ini format
  if (trimmed.includes("[") && trimmed.includes("]") && trimmed.includes("=")) {
    parseAcIniSetup(rawText);
    return;
  }

  // 3. CarX CSV Telemetry format
  if (trimmed.includes("TimeSec") || trimmed.includes("DriftAngleDeg") || fName.endsWith(".csv")) {
    parseCarXCsvStats(trimmed);
    return;
  }

  showToast(translations[currentLang].toastImportErr);
}

function parseCarXCsvStats(csvText) {
  const lines = csvText.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length < 2) {
    showToast("Błąd: plik CSV nie zawiera wystarczających danych!");
    return;
  }
  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const angleIdx = headers.indexOf("driftangledeg");
  const speedIdx = headers.indexOf("speedkmh");
  const ratioIdx = headers.indexOf("ratio");
  const rackIdx = headers.indexOf("steerrackdeg");

  let maxAngle = 0, maxSpeed = 0, sumRatio = 0, countRatio = 0, maxRack = 0;
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",");
    if (parts.length < headers.length) continue;
    if (angleIdx >= 0) {
      const a = Math.abs(parseFloat(parts[angleIdx]) || 0);
      if (a > maxAngle) maxAngle = a;
    }
    if (speedIdx >= 0) {
      const s = parseFloat(parts[speedIdx]) || 0;
      if (s > maxSpeed) maxSpeed = s;
    }
    if (ratioIdx >= 0) {
      const r = Math.abs(parseFloat(parts[ratioIdx]) || 0);
      if (r > 0) { sumRatio += r; countRatio++; }
    }
    if (rackIdx >= 0) {
      const l = Math.abs(parseFloat(parts[rackIdx]) || 0);
      if (l > maxRack) maxRack = l;
    }
  }

  const avgRatio = countRatio > 0 ? (sumRatio / countRatio) : 0.70;
  const recLock = Math.max(50.0, Math.min(75.0, Math.round((maxRack > 40 ? maxRack : 65.0) * 10) / 10));
  const recRatio = Math.max(65, Math.min(88, Math.round(avgRatio * 100)));

  const syntheticObj = {
    projectName: "CarX CSV Telemetria",
    summary: {
      totalRecordingTimeSec: lines.length * 0.033,
      maxDriftAngleDeg: maxAngle,
      maxSpeedKMH: maxSpeed,
      avgCountersteerRatio: avgRatio
    },
    recommendedACSettings: {
      maxDriftLock: recLock,
      idleCountersteerRatio: recRatio,
      driftDamping: 0.20,
      steeringSpeed: 3.20,
      yawCounterBoost: 4.00,
      yawPredGain: 0.20
    }
  };
  applyImportedSetup(syntheticObj);
}

function pasteSetupFromClipboard() {
  if (navigator.clipboard && navigator.clipboard.readText) {
    navigator.clipboard.readText().then(text => {
      if (text && text.trim()) {
        processAnyUploadedFile(text, "clipboard.json");
      } else {
        showToast(translations[currentLang].toastImportErr);
      }
    }).catch(() => {
      manualPastePrompt();
    });
  } else {
    manualPastePrompt();
  }
}

function manualPastePrompt() {
  const isPl = (currentLang === 'pl');
  const txt = prompt(isPl ? "Wklej kod JSON setupu CarX Assist:" : "Paste your CarX Assist setup JSON code:");
  if (txt && txt.trim()) {
    processAnyUploadedFile(txt, "manual_paste.json");
  }
}

function applyImportedSetup(obj) {
  if (!obj || typeof obj !== 'object') {
    showToast(translations[currentLang].toastImportErr);
    return false;
  }
  const s = obj.settings || obj;
  const rec = obj.recommendedACSettings || s.recommendedACSettings || {};

  // Setup / Profile Name
  if (obj.projectName) {
    const pName = obj.projectName + (obj.timestamp ? " (" + obj.timestamp.replace(/:/g, '.') + ")" : "");
    const el = document.getElementById('genName');
    if (el) el.value = pName;
  } else if (obj.name) {
    const el = document.getElementById('genName');
    if (el) el.value = obj.name;
  }

  // 1. Lock angle (carx_lock, driftLockDeg, lock, maxDriftLock)
  const lockVal = s.carx_lock ?? s.driftLockDeg ?? s.lock ?? rec.maxDriftLock;
  if (lockVal !== undefined && lockVal > 0) {
    const el = document.getElementById('genLock');
    if (el) el.value = parseFloat(lockVal);
  }

  // 2. Inward Keep (carx_keep, inwardKeepRatio, keep)
  const keepVal = s.carx_keep ?? s.inwardKeepRatio ?? s.keep ?? rec.inwardKeepRatio;
  if (keepVal !== undefined) {
    const val = keepVal <= 1.0 ? Math.round(keepVal * 100) : Math.round(keepVal);
    const el = document.getElementById('genKeep');
    if (el) el.value = val;
  }

  // 3. Idle Counter (carx_idle, idleCounterRatio, idle, idleCountersteerRatio)
  const idleVal = s.carx_idle ?? s.idleCounterRatio ?? s.idle ?? rec.idleCountersteerRatio ?? rec.idleRatio;
  if (idleVal !== undefined) {
    const val = idleVal <= 1.0 ? Math.round(idleVal * 100) : Math.round(idleVal);
    const el = document.getElementById('genIdle');
    if (el) el.value = val;
  }

  // 4. Stability Damping (carx_stab, stabK, stabk, stab, driftDamping)
  const stabVal = s.carx_stab ?? s.stabK ?? s.stabk ?? s.stab ?? rec.driftDamping;
  if (stabVal !== undefined) {
    const el = document.getElementById('genStabK');
    if (el) el.value = parseFloat(stabVal);
  }

  // 5. Steering Speed SmoothK1 (carx_smooth_k1, smoothK1, sk1, steeringSpeed)
  const sk1Val = s.carx_smooth_k1 ?? s.smoothK1 ?? s.sk1 ?? rec.steeringSpeed;
  if (sk1Val !== undefined) {
    const el = document.getElementById('genSmoothK1');
    if (el) el.value = parseFloat(sk1Val);
  }

  // 6. Yaw Boost SmoothK2 (carx_smooth_k2, smoothK2, sk2, yawCounterBoost)
  const sk2Val = s.carx_smooth_k2 ?? s.smoothK2 ?? s.sk2 ?? rec.yawCounterBoost;
  if (sk2Val !== undefined) {
    const el = document.getElementById('genSmoothK2');
    if (el) el.value = parseFloat(sk2Val);
  }

  // 7. Lookahead / Prediction (carx_lookahead, yawPredGain, pred, yawPredGain)
  const predVal = s.carx_lookahead ?? s.yawPredGain ?? s.pred ?? rec.yawPredGain;
  if (predVal !== undefined) {
    const el = document.getElementById('genPredGain');
    if (el) el.value = parseFloat(predVal);
  }

  // Menu settings if present
  if (obj.carxMenuSettings) {
    if (obj.carxMenuSettings.prediction !== undefined && predVal === undefined) {
      const el = document.getElementById('genPredGain');
      if (el) el.value = Math.max(0.05, Math.min(0.50, parseFloat(obj.carxMenuSettings.prediction) * 0.20)).toFixed(2);
    }
    if (obj.carxMenuSettings.stabilization !== undefined && stabVal === undefined) {
      const el = document.getElementById('genStabK');
      if (el) el.value = Math.max(0.05, Math.min(0.50, parseFloat(obj.carxMenuSettings.stabilization) * 0.10)).toFixed(2);
    }
  }

  // 8. Gas Gamma (carx_gas_gamma, gasGamma, rt)
  const rtVal = s.carx_gas_gamma ?? s.gasGamma ?? s.rt;
  if (rtVal !== undefined) {
    const el = document.getElementById('genGasGamma');
    if (el) el.value = parseFloat(rtVal);
  }

  // 9. Brake Gamma (carx_brake_gamma, brakeGamma, lt)
  const ltVal = s.carx_brake_gamma ?? s.brakeGamma ?? s.lt;
  if (ltVal !== undefined) {
    const el = document.getElementById('genBrakeGamma');
    if (el) el.value = parseFloat(ltVal);
  }

  // 10. ABS (carx_brake_assist, brakeAbsAssist, abs)
  const absVal = s.carx_brake_assist ?? s.brakeAbsAssist ?? s.abs;
  if (absVal !== undefined) {
    const el = document.getElementById('genAbs');
    if (el) el.checked = !!absVal;
  }

  // 11. Reverse Entry (carx_reverse_entry, revEntryEnabled, rev)
  const revVal = s.carx_reverse_entry ?? s.revEntryEnabled ?? s.rev;
  if (revVal !== undefined) {
    const el = document.getElementById('genRev');
    if (el) el.checked = !!revVal;
  }

  // 12. Auto Gearbox (carx_drift_auto_gearbox, driftAutoGear, auto)
  const autoVal = s.carx_drift_auto_gearbox ?? s.driftAutoGear ?? s.auto;
  if (autoVal !== undefined) {
    const el = document.getElementById('genAuto');
    if (el) el.checked = !!autoVal;
  }

  // 13. Physics Model (physicsModel, carx_physics_model, modelId)
  const modelVal = s.physicsModel ?? s.carx_physics_model ?? s.modelId ?? obj.physicsModel;
  if (modelVal !== undefined) {
    selectPhysicsModel(parseInt(modelVal) || 0, false);
  }

  // 14. CarX Car Tuning Parameters (from CarX mod v2.2.0 export or flat keys)
  const tuning = obj.carx_car_tuning || obj.carxTuning || {};
  if (obj.carx_front_pressure_kpa !== undefined) tuning.frontPressureKPa = obj.carx_front_pressure_kpa;
  if (obj.carx_rear_pressure_kpa !== undefined) tuning.rearPressureKPa = obj.carx_rear_pressure_kpa;
  if (obj.carx_front_caster !== undefined) tuning.frontCasterDeg = obj.carx_front_caster;
  if (obj.carx_front_camber !== undefined) tuning.frontCamberDeg = obj.carx_front_camber;
  if (obj.carx_rear_camber !== undefined) tuning.rearCamberDeg = obj.carx_rear_camber;
  if (obj.carx_ackermann !== undefined) tuning.ackermannPercent = obj.carx_ackermann;
  if (obj.carx_diff_power !== undefined) tuning.diffLockPower = obj.carx_diff_power;
  if (obj.carx_diff_coast !== undefined) tuning.diffLockCoast = obj.carx_diff_coast;
  if (lockVal !== undefined) tuning.frontLockDeg = parseFloat(lockVal);

  updateCarTuningRecommendations(tuning);

  // Directly sync CarX Telemetry to Assetto Corsa Pitstop Garage State!
  if (tuning.frontPressureKPa !== undefined) {
    const psiF = Math.round(tuning.frontPressureKPa * 0.145038);
    acSetupState.pressureLF = psiF;
    acSetupState.pressureRF = psiF;
  } else {
    acSetupState.pressureLF = 21;
    acSetupState.pressureRF = 21;
  }
  if (tuning.rearPressureKPa !== undefined) {
    const psiR = Math.round(tuning.rearPressureKPa * 0.145038);
    acSetupState.pressureLR = psiR;
    acSetupState.pressureRR = psiR;
  } else {
    acSetupState.pressureLR = 17;
    acSetupState.pressureRR = 17;
  }
  if (tuning.frontCamberDeg !== undefined) {
    acSetupState.camberLF = parseFloat(tuning.frontCamberDeg);
    acSetupState.camberRF = parseFloat(tuning.frontCamberDeg);
  }
  if (tuning.rearCamberDeg !== undefined) {
    acSetupState.camberLR = parseFloat(tuning.rearCamberDeg);
    acSetupState.camberRR = parseFloat(tuning.rearCamberDeg);
  }
  if (tuning.diffLockPower !== undefined) {
    acSetupState.diffPower = Math.round(tuning.diffLockPower);
  }
  if (tuning.diffLockCoast !== undefined) {
    acSetupState.diffCoast = Math.round(tuning.diffLockCoast);
  }

  // Gears and Final Ratio from CarX
  if (tuning.finalRatio !== undefined || obj.carx_final_ratio !== undefined || obj.finalRatio !== undefined) {
    const fr = parseFloat(tuning.finalRatio ?? obj.carx_final_ratio ?? obj.finalRatio);
    if (!isNaN(fr) && fr > 1.5 && fr < 6.5) {
      acSetupState.finalRatio = parseFloat(fr.toFixed(2));
      const sl = document.getElementById("acSlider_finalRatio");
      if (sl) sl.value = acSetupState.finalRatio;
      const disp = document.getElementById("acVal_finalRatio");
      if (disp) disp.textContent = acSetupState.finalRatio.toFixed(2);
    }
  }

  const importedGears = tuning.gears || obj.carx_gears || obj.gears;
  const importedGearRatios = tuning.gearRatios || obj.carx_gear_ratios || obj.gearRatios;

  if (importedGears && Array.isArray(importedGears) && importedGears.length > 0) {
    importedGears.forEach((spd, i) => {
      if (i < 5) acSetupState.gears[i] = Math.round(spd);
    });
  } else if (importedGearRatios && Array.isArray(importedGearRatios) && importedGearRatios.length > 0) {
    const fr = acSetupState.finalRatio || 3.69;
    importedGearRatios.forEach((gr, i) => {
      if (i < 5 && gr > 0.1) {
        acSetupState.gears[i] = Math.round(870.0 / (gr * fr));
      }
    });
  } else {
    recalculateGearSpeeds();
  }

  // Update Gear speeds in the table and chart
  acSetupState.gears.forEach((spd, i) => {
    const td = document.getElementById(`acSpeedG${i + 1}`);
    if (td) td.textContent = `${spd} km/h`;
  });
  drawAcGearsChart();

  const nameToUse = obj.projectName || obj.name || "carx_setup";
  acSetupState.carName = nameToUse.replace(/[^a-zA-Z0-9_-]/g, "_");
  const titleEl = document.getElementById("acTelemCarTitle");
  if (titleEl) titleEl.textContent = nameToUse.toUpperCase();
  const badgeEl = document.getElementById("acTelemBadge");
  if (badgeEl) badgeEl.textContent = "CarX: " + nameToUse;

  // Remove preset active highlights since it's a custom imported setup
  document.querySelectorAll('#tab-gen .preset-pill').forEach(btn => btn.classList.remove('active'));

  onGenSliderChange();
  initAcGarage();

  if (obj.summary) {
    const sMaxAngle = obj.summary.maxDriftAngleDeg ? `${obj.summary.maxDriftAngleDeg.toFixed(1)}°` : '';
    const sSpeed = obj.summary.maxSpeedKMH ? `${obj.summary.maxSpeedKMH.toFixed(0)} km/h` : '';
    showToast(`📊 Wczytano dane telemetrii CarX! Kąt: ${sMaxAngle}, V-Max: ${sSpeed}, Lock: ${lockVal || 68}°`);
  } else {
    showToast(translations[currentLang].toastImportSuccess);
  }
  return true;
}

// --- Calculator Presets ---
function applyPackPreset(lockVal, name) {
  document.querySelectorAll('#tab-calc .preset-pill').forEach(btn => btn.classList.remove('active'));
  if (typeof event !== 'undefined' && event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }

  document.getElementById('sliderLock').value = lockVal;
  document.getElementById('recLockVal').textContent = lockVal.toFixed(1) + '°';
  onCalcSliderChange();
}

function onCalcSliderChange() {
  if (!document.getElementById("sliderSlip")) return;
  const slip = parseFloat(document.getElementById('sliderSlip').value);
  const stick = parseFloat(document.getElementById('sliderStick').value) / 100.0;
  const lock = parseFloat(document.getElementById('sliderLock').value);
  const mult = parseFloat(document.getElementById('sliderMult').value);

  document.getElementById('valSimSlip').textContent = slip.toFixed(1) + '°';
  document.getElementById('valSimStick').textContent = Math.round(stick * 100) + '%';
  document.getElementById('valCarLock').textContent = lock.toFixed(1) + '°';
  document.getElementById('valCounterMult').textContent = mult.toFixed(2) + 'x';
  document.getElementById('recLockVal').textContent = lock.toFixed(1) + '°';

  // Calculate kinematic countersteer
  const isPl = (currentLang === 'pl');
  const baseCounter = -slip * mult;
  const stickContribution = stick * lock * 0.45;
  const steerDeg = Math.max(-lock, Math.min(lock, baseCounter + stickContribution));

  const dirSlip = slip < 0 ? (isPl ? "(Lewo)" : "(Left)") : (slip > 0 ? (isPl ? "(Prawo)" : "(Right)") : "");
  const dirSteer = steerDeg > 0 ? (isPl ? "(Kontra P)" : "(Counter R)") : (steerDeg < 0 ? (isPl ? "(Kontra L)" : "(Counter L)") : "");

  document.getElementById('statSlipDeg').textContent = Math.abs(slip).toFixed(1) + '° ' + dirSlip;
  document.getElementById('statSteerDeg').textContent = Math.abs(steerDeg).toFixed(1) + '° ' + dirSteer;

  const statEl = document.getElementById('statStability');
  const d = translations[currentLang] || translations.en;
  if (Math.abs(slip) > lock + 8) {
    statEl.textContent = d.statusSpinRisk;
    statEl.className = 'telemetry-val orange';
  } else if (Math.abs(slip) < 8) {
    statEl.textContent = d.statusUndersteer;
    statEl.className = 'telemetry-val';
  } else {
    statEl.textContent = d.statusStable;
    statEl.className = 'telemetry-val green';
  }
}

// --- View Modes (3D vs 2D) ---
let currentViewModeCalc = '3d';
let currentViewModeGen = '3d';

function setViewMode(mode, targetTab) {
  if (targetTab === 'calc') {
    currentViewModeCalc = mode;
    document.getElementById('btnView3D_calc').classList.toggle('active', mode === '3d');
    document.getElementById('btnView2D_calc').classList.toggle('active', mode === '2d');
    document.getElementById('stage3D_calc').style.display = (mode === '3d') ? 'block' : 'none';
    document.getElementById('canvas2D_calc').style.display = (mode === '2d') ? 'block' : 'none';
  } else if (targetTab === 'gen') {
    currentViewModeGen = mode;
    document.getElementById('btnView3D_gen').classList.toggle('active', mode === '3d');
    document.getElementById('btnView2D_gen').classList.toggle('active', mode === '2d');
    document.getElementById('stage3D_gen').style.display = (mode === '3d') ? 'block' : 'none';
    document.getElementById('canvas2D_gen').style.display = (mode === '2d') ? 'block' : 'none';
  }
}

// --- Clean 3D Three.js & 2D Canvas Engine ---

let rendererCalc, sceneCalc, cameraCalc, carGroupCalc, frontLeftCalc, frontRightCalc, roadLinesCalc = [];
let rendererGen, sceneGen, cameraGen, carGroupGen, frontLeftGen, frontRightGen, roadLinesGen = [];

/**
 * Builds a high-fidelity sports drift coupe (Silvia S15 / GT86 / Supra aesthetic)
 * with widebody flared arches, front carbon splitter, intercooler, dual exhaust,
 * high-mount GT wing, 6-spoke concave TE37-style sports wheels with Brembo calipers.
 */
function buildCarModel(accentColor) {
  const group = new THREE.Group();

  const paintColor = 0x111624; // Deep metallic midnight
  const carbonColor = 0x090b10; // Dark matte carbon
  const glassColor = 0x081018; // Tinted automotive glass
  const chromeColor = 0xd8dde8; // Polished metal / aluminum
  const caliperColor = 0xee1832; // Brembo racing red
  const accentHex = accentColor || 0x00d2ff;

  // Materials
  const paintMat = new THREE.MeshStandardMaterial({
    color: paintColor,
    roughness: 0.28,
    metalness: 0.72
  });
  const carbonMat = new THREE.MeshStandardMaterial({
    color: carbonColor,
    roughness: 0.55,
    metalness: 0.35
  });
  const glassMat = new THREE.MeshStandardMaterial({
    color: glassColor,
    roughness: 0.12,
    metalness: 0.88,
    transparent: true,
    opacity: 0.90
  });
  const chromeMat = new THREE.MeshStandardMaterial({
    color: chromeColor,
    roughness: 0.18,
    metalness: 0.95
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: accentHex,
    emissive: accentHex,
    emissiveIntensity: 0.65,
    roughness: 0.3,
    metalness: 0.8
  });
  const headlightMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x99e5ff,
    emissiveIntensity: 2.6
  });
  const taillightMat = new THREE.MeshStandardMaterial({
    color: 0xff002b,
    emissive: 0xff1533,
    emissiveIntensity: 2.8
  });
  const brakeMat = new THREE.MeshStandardMaterial({
    color: caliperColor,
    roughness: 0.35,
    metalness: 0.4
  });
  const rotorMat = new THREE.MeshStandardMaterial({
    color: 0x828896,
    roughness: 0.22,
    metalness: 0.90
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x141518,
    roughness: 0.90
  });
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0x222632,
    roughness: 0.25,
    metalness: 0.85
  });

  // 1. Lower Main Chassis
  const mainChassis = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.34, 3.82), paintMat);
  mainChassis.position.y = 0.36;
  group.add(mainChassis);

  // 2. Aerodynamic Slanted Hood
  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.16, 1.38), paintMat);
  hood.position.set(0, 0.47, -0.92);
  hood.rotation.x = 0.055;
  group.add(hood);

  // 3. Front Bumper with Lower Intake & Intercooler
  const bumperF = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.30, 0.44), paintMat);
  bumperF.position.set(0, 0.32, -1.95);
  group.add(bumperF);

  // Front Carbon Splitter with End Winglets
  const splitter = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.04, 0.58), carbonMat);
  splitter.position.set(0, 0.16, -2.00);
  group.add(splitter);

  const wingletL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.22), carbonMat);
  wingletL.position.set(-0.89, 0.21, -1.98);
  group.add(wingletL);
  const wingletR = wingletL.clone();
  wingletR.position.x = 0.89;
  group.add(wingletR);

  // Front Intercooler inside lower air dam
  const intercooler = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.18, 0.08), chromeMat);
  intercooler.position.set(0, 0.25, -2.02);
  group.add(intercooler);

  // 4. Widebody Overfenders (Front & Rear flared drift arches)
  const fenderFL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.26, 0.95), paintMat);
  fenderFL.position.set(-0.88, 0.40, -1.25);
  group.add(fenderFL);
  const fenderFR = fenderFL.clone();
  fenderFR.position.x = 0.88;
  group.add(fenderFR);

  const fenderRL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.28, 1.05), paintMat);
  fenderRL.position.set(-0.89, 0.42, 1.25);
  group.add(fenderRL);
  const fenderRR = fenderRL.clone();
  fenderRR.position.x = 0.89;
  group.add(fenderRR);

  // Side Skirts
  const skirtL = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.12, 1.85), carbonMat);
  skirtL.position.set(-0.87, 0.21, 0.0);
  group.add(skirtL);
  const skirtR = skirtL.clone();
  skirtR.position.x = 0.87;
  group.add(skirtR);

  // 5. Greenhouse (Cabin, Raked Windshield & Fastback Rear Glass)
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.05, 0.85), glassMat);
  windshield.position.set(0, 0.74, -0.42);
  windshield.rotation.x = 0.58;
  group.add(windshield);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.06, 1.28), paintMat);
  roof.position.set(0, 0.96, 0.22);
  group.add(roof);

  const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(1.30, 0.05, 0.92), glassMat);
  rearGlass.position.set(0, 0.76, 1.05);
  rearGlass.rotation.x = -0.52;
  group.add(rearGlass);

  const glassSideL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.30, 1.30), glassMat);
  glassSideL.position.set(-0.64, 0.76, 0.25);
  group.add(glassSideL);
  const glassSideR = glassSideL.clone();
  glassSideR.position.x = 0.64;
  group.add(glassSideR);

  // Aero Door Mirrors
  const mirrorL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.12), carbonMat);
  mirrorL.position.set(-0.76, 0.68, -0.32);
  group.add(mirrorL);
  const mirrorR = mirrorL.clone();
  mirrorR.position.x = 0.76;
  group.add(mirrorR);

  // 6. Rear Trunk & Bumper with Carbon Diffuser & Dual Exhaust
  const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.16, 0.68), paintMat);
  trunk.position.set(0, 0.52, 1.62);
  group.add(trunk);

  const bumperR = new THREE.Mesh(new THREE.BoxGeometry(1.64, 0.32, 0.42), paintMat);
  bumperR.position.set(0, 0.35, 1.94);
  group.add(bumperR);

  // Rear Diffuser
  const diffuser = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.08, 0.45), carbonMat);
  diffuser.position.set(0, 0.18, 2.02);
  group.add(diffuser);

  // Dual Stainless Drift Exhaust Tips
  const exhaustL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.32, 16), chromeMat);
  exhaustL.rotation.x = Math.PI / 2 + 0.12;
  exhaustL.rotation.y = -0.08;
  exhaustL.position.set(-0.48, 0.20, 2.12);
  group.add(exhaustL);

  const exhaustR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.32, 16), chromeMat);
  exhaustR.rotation.x = Math.PI / 2 + 0.12;
  exhaustR.rotation.y = 0.08;
  exhaustR.position.set(0.48, 0.20, 2.12);
  group.add(exhaustR);

  // 7. High-Mount Carbon GT Drift Wing Spoiler
  const wingDeck = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.04, 0.36), carbonMat);
  wingDeck.position.set(0, 1.08, 1.88);
  wingDeck.rotation.x = 0.05;
  group.add(wingDeck);

  const wingEndL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.22, 0.40), carbonMat);
  wingEndL.position.set(-0.89, 1.08, 1.88);
  group.add(wingEndL);
  const wingEndR = wingEndL.clone();
  wingEndR.position.x = 0.89;
  group.add(wingEndR);

  const mountL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.42, 0.12), chromeMat);
  mountL.position.set(-0.46, 0.86, 1.82);
  mountL.rotation.x = -0.22;
  group.add(mountL);
  const mountR = mountL.clone();
  mountR.position.x = 0.46;
  group.add(mountR);

  // 8. Sleek Projector Headlights
  const headL = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.10, 0.12), headlightMat);
  headL.position.set(-0.62, 0.45, -1.98);
  headL.rotation.y = -0.15;
  group.add(headL);
  const headR = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.10, 0.12), headlightMat);
  headR.position.set(0.62, 0.45, -1.98);
  headR.rotation.y = 0.15;
  group.add(headR);

  // 9. Full-Width Glowing Ruby LED Taillight Bar
  const tailBar = new THREE.Mesh(new THREE.BoxGeometry(1.44, 0.09, 0.08), taillightMat);
  tailBar.position.set(0, 0.48, 2.05);
  group.add(tailBar);

  // 10. Wheels (Concave 6-Spoke TE37 Wheels with Rotors & Brembo Calipers)
  function createDetailedWheel(isFront, isRight) {
    const wGroup = new THREE.Group();

    // Tire
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.29, 24), tireMat);
    tire.rotation.z = Math.PI / 2;
    wGroup.add(tire);

    // Deep Dish Polished Rim Lip
    const rimLip = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.30, 24), chromeMat);
    rimLip.rotation.z = Math.PI / 2;
    wGroup.add(rimLip);

    // Concave Spokes Face
    const spokeGroup = new THREE.Group();
    for (let s = 0; s < 6; s++) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.21, 0.03), accentMat);
      spoke.position.y = 0.10;
      spoke.rotation.z = (s * Math.PI) / 3;
      spokeGroup.add(spoke);
    }
    spokeGroup.position.x = isRight ? 0.12 : -0.12;
    wGroup.add(spokeGroup);

    // Center Hub Cap
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.31, 16), rimMat);
    hub.rotation.z = Math.PI / 2;
    wGroup.add(hub);

    // Ventilated Brake Rotor
    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 20), rotorMat);
    rotor.rotation.z = Math.PI / 2;
    rotor.position.x = isRight ? -0.04 : 0.04;
    wGroup.add(rotor);

    // Brembo Red Brake Caliper
    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.09), brakeMat);
    caliper.position.set(isRight ? -0.04 : 0.04, 0.12, -0.08);
    wGroup.add(caliper);

    return wGroup;
  }

  // Front Left Wheel Pivot
  const flPivot = new THREE.Group();
  flPivot.position.set(-0.94, 0.34, -1.25);
  const flWheel = createDetailedWheel(true, false);
  flPivot.add(flWheel);
  group.add(flPivot);

  // Front Right Wheel Pivot
  const frPivot = new THREE.Group();
  frPivot.position.set(0.94, 0.34, -1.25);
  const frWheel = createDetailedWheel(true, true);
  frPivot.add(frWheel);
  group.add(frPivot);

  // Rear Wheels
  const rlWheel = createDetailedWheel(false, false);
  rlWheel.position.set(-0.95, 0.34, 1.25);
  group.add(rlWheel);

  const rrWheel = createDetailedWheel(false, true);
  rrWheel.position.set(0.95, 0.34, 1.25);
  group.add(rrWheel);

  return {
    car: group,
    flPivot: flPivot,
    frPivot: frPivot,
    wheels: [flWheel, frWheel, rlWheel, rrWheel]
  };
}

/**
 * Builds a realistic drift touge racetrack with procedural asphalt grain,
 * alternating red/white racetrack rumble kerbs, skid marks, trackside rails,
 * headlight beams, and atmospheric lighting.
 */
function buildCleanRoadScene(stageEl) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070913);
  scene.fog = new THREE.FogExp2(0x070913, 0.025);

  const w = stageEl.clientWidth || 600;
  const h = stageEl.clientHeight || 380;
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 120);
  camera.position.set(0, 3.8, 7.2);
  camera.lookAt(0, 0.8, -1.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  stageEl.innerHTML = '';
  stageEl.appendChild(renderer.domElement);

  // Atmospheric Lighting
  const ambientLight = new THREE.AmbientLight(0x24324f, 1.3);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xdce8ff, 1.6);
  keyLight.position.set(6, 14, 8);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x00d2ff, 0.8);
  rimLight.position.set(-8, 6, -10);
  scene.add(rimLight);

  // Procedural Asphalt Grain Texture
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#11141e';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 4000; i++) {
    const nx = Math.random() * 256;
    const ny = Math.random() * 256;
    const g = Math.floor(22 + Math.random() * 28);
    ctx.fillStyle = `rgb(${g},${g+3},${g+8})`;
    ctx.fillRect(nx, ny, 1.5, 1.5);
  }
  const roadTex = new THREE.CanvasTexture(canvas);
  roadTex.wrapS = THREE.RepeatWrapping;
  roadTex.wrapT = THREE.RepeatWrapping;
  roadTex.repeat.set(4, 25);

  // Asphalt Road Surface
  const roadGeo = new THREE.PlaneGeometry(13.6, 140);
  const roadMat = new THREE.MeshStandardMaterial({
    map: roadTex,
    roughness: 0.45,
    metalness: 0.2
  });
  const road = new THREE.Mesh(roadGeo, roadMat);
  road.rotation.x = -Math.PI / 2;
  road.position.z = -20;
  scene.add(road);

  // Authentic Racetrack Red & White Alternating Kerbs (Suzuka / Ebisu style)
  const kerbRedMat = new THREE.MeshStandardMaterial({ color: 0xee1525, roughness: 0.5 });
  const kerbWhiteMat = new THREE.MeshStandardMaterial({ color: 0xf2f4f8, roughness: 0.4 });
  const kerbGeo = new THREE.BoxGeometry(0.65, 0.10, 2.4);

  for (let z = -80; z <= 40; z += 2.4) {
    const isRed = Math.floor((z + 100) / 2.4) % 2 === 0;
    const kMat = isRed ? kerbRedMat : kerbWhiteMat;

    const kerbL = new THREE.Mesh(kerbGeo, kMat);
    kerbL.position.set(-6.8, 0.05, z);
    scene.add(kerbL);

    const kerbR = new THREE.Mesh(kerbGeo, kMat);
    kerbR.position.set(6.8, 0.05, z);
    scene.add(kerbR);
  }

  // Glowing Neon Track Outer Rail
  const railGeo = new THREE.BoxGeometry(0.08, 0.25, 140);
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x00d2ff,
    emissive: 0x00d2ff,
    emissiveIntensity: 0.9
  });
  const railL = new THREE.Mesh(railGeo, railMat);
  railL.position.set(-7.15, 0.14, -20);
  scene.add(railL);
  const railR = railL.clone();
  railR.position.x = 7.15;
  scene.add(railR);

  // Tire Skid Mark Trails (Dark rubber laydown on tarmac)
  const skidMat = new THREE.MeshBasicMaterial({
    color: 0x050609,
    transparent: true,
    opacity: 0.65
  });
  const skidL = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 140), skidMat);
  skidL.rotation.x = -Math.PI / 2;
  skidL.position.set(-1.1, 0.015, -20);
  scene.add(skidL);
  const skidR = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 140), skidMat);
  skidR.rotation.x = -Math.PI / 2;
  skidR.position.set(1.1, 0.015, -20);
  scene.add(skidR);

  // Dashed Centerline Road Stripes
  const roadLines = [];
  const lineGeo = new THREE.PlaneGeometry(0.22, 3.8);
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (let z = -75; z <= 35; z += 7.5) {
    const stripe = new THREE.Mesh(lineGeo, lineMat);
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(0, 0.02, z);
    scene.add(stripe);
    roadLines.push(stripe);
  }

  // Headlight Light Cones onto the Road
  const headBeamL = new THREE.SpotLight(0xcde8ff, 3.5, 26, Math.PI / 6, 0.6, 1.2);
  headBeamL.position.set(-0.62, 0.6, -1.9);
  headBeamL.target.position.set(-0.8, 0, -12);
  scene.add(headBeamL);
  scene.add(headBeamL.target);

  const headBeamR = new THREE.SpotLight(0xcde8ff, 3.5, 26, Math.PI / 6, 0.6, 1.2);
  headBeamR.position.set(0.62, 0.6, -1.9);
  headBeamR.target.position.set(0.8, 0, -12);
  scene.add(headBeamR);
  scene.add(headBeamR.target);

  // Rear Taillight Red Glow onto road
  const tailGlow = new THREE.PointLight(0xff1533, 2.0, 6.0);
  tailGlow.position.set(0, 0.5, 2.4);
  scene.add(tailGlow);

  return { scene, camera, renderer, roadLines, headBeamL, headBeamR, tailGlow };
}


function initVisualizers() {
  // 3D view removed as per Wariant A for a lightweight, distraction-free setup studio
}
function onWindowResize() {
  const resizeViewport = (stageEl, camera, renderer) => {
    if (!stageEl || !camera || !renderer) return;
    const w = stageEl.clientWidth;
    const h = stageEl.clientHeight;
    if (w > 0 && h > 0) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
  };
  resizeViewport(document.getElementById('stage3D_calc'), cameraCalc, rendererCalc);
  resizeViewport(document.getElementById('stage3D_gen'), cameraGen, rendererGen);
}

// 2D Canvas Renderer
function draw2DCar(canvasId, driftDeg, steerDeg, isGen) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // Road lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - 140, 0, 280, canvas.height);

  ctx.strokeStyle = 'rgba(0, 210, 255, 0.4)';
  ctx.beginPath();
  ctx.moveTo(cx - 140, 0); ctx.lineTo(cx - 140, canvas.height);
  ctx.moveTo(cx + 140, 0); ctx.lineTo(cx + 140, canvas.height);
  ctx.stroke();

  // Green trajectory arrow
  ctx.strokeStyle = '#00ff88';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy + 90);
  ctx.lineTo(cx, cy - 90);
  ctx.stroke();

  ctx.fillStyle = '#00ff88';
  ctx.beginPath();
  ctx.moveTo(cx, cy - 105);
  ctx.lineTo(cx - 8, cy - 90);
  ctx.lineTo(cx + 8, cy - 90);
  ctx.fill();

  // Car Body
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((driftDeg * Math.PI) / 180);

  // Shadow & Body
  ctx.fillStyle = '#0c101d';
  ctx.strokeStyle = isGen ? '#ff7b00' : '#00d2ff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(-26, -55, 52, 110, 8);
  ctx.fill();
  ctx.stroke();

  // Front Orange Indicator
  ctx.fillStyle = '#ff7b00';
  ctx.fillRect(-6, -52, 12, 14);

  // Rear Tires
  ctx.fillStyle = '#222836';
  ctx.fillRect(-32, 22, 11, 26);
  ctx.fillRect(21, 22, 11, 26);

  // Front Steered Tires
  const steerRad = (steerDeg * Math.PI) / 180;

  // Front Left
  ctx.save();
  ctx.translate(-26, -30);
  ctx.rotate(steerRad);
  ctx.fillStyle = isGen ? '#ff7b00' : '#00d2ff';
  ctx.fillRect(-6, -13, 11, 26);
  ctx.restore();

  // Front Right
  ctx.save();
  ctx.translate(26, -30);
  ctx.rotate(steerRad);
  ctx.fillStyle = isGen ? '#ff7b00' : '#00d2ff';
  ctx.fillRect(-6, -13, 11, 26);
  ctx.restore();

  ctx.restore();
}

// Animation Loop (Road moves forward, cars stay steady at user-chosen drift angles!)
function animate() {
  requestAnimationFrame(animate);

  // 1. Calculator Tab State
  const calcSlip = parseFloat(document.getElementById('sliderSlip')?.value || -26.5);
  const calcStick = parseFloat(document.getElementById('sliderStick')?.value || -6) / 100.0;
  const calcLock = parseFloat(document.getElementById('sliderLock')?.value || 48.0);
  const calcMult = parseFloat(document.getElementById('sliderMult')?.value || 1.05);

  const calcBaseCounter = -calcSlip * calcMult;
  const calcStickContrib = calcStick * calcLock * 0.45;
  const calcSteerDeg = Math.max(-calcLock, Math.min(calcLock, calcBaseCounter + calcStickContrib));

  // Scroll Road Stripes (Smooth forward motion)
  const speed = 0.55;
  roadLinesCalc.forEach(stripe => {
    stripe.position.z += speed;
    if (stripe.position.z > 35) stripe.position.z = -75;
  });

  if (carGroupCalc) {
    const slipRad = (calcSlip * Math.PI) / 180;
    carGroupCalc.rotation.y = -slipRad;
    carGroupCalc.rotation.z = -(calcSlip * 0.0018); // subtle chassis roll
    carGroupCalc.position.x = Math.sin(slipRad) * 0.45;

    const wheelSteerRad = -(calcSteerDeg * Math.PI) / 180;
    if (frontLeftCalc) {
      frontLeftCalc.rotation.y = wheelSteerRad;
      frontLeftCalc.rotation.z = 0.05;
    }
    if (frontRightCalc) {
      frontRightCalc.rotation.y = wheelSteerRad;
      frontRightCalc.rotation.z = -0.05;
    }
  }
  if (rendererCalc && sceneCalc && cameraCalc && currentViewModeCalc === '3d') {
    rendererCalc.render(sceneCalc, cameraCalc);
  }
  if (currentViewModeCalc === '2d') {
    draw2DCar('canvas2D_calc', calcSlip, calcSteerDeg, false);
  }

  // 2. Generator Tab State
  const genLock = parseFloat(document.getElementById('genLock')?.value || 65.0);
  const genIdle = parseInt(document.getElementById('genIdle')?.value || 80) / 100.0;
  const genTestAngle = parseFloat(document.getElementById('genTestAngle')?.value || -32.0);

  const genSteerDeg = Math.max(-genLock, Math.min(genLock, -genTestAngle * genIdle));

  roadLinesGen.forEach(stripe => {
    stripe.position.z += speed;
    if (stripe.position.z > 35) stripe.position.z = -75;
  });

  if (carGroupGen) {
    const genSlipRad = (genTestAngle * Math.PI) / 180;
    carGroupGen.rotation.y = -genSlipRad;
    carGroupGen.rotation.z = -(genTestAngle * 0.0018); // subtle chassis roll
    carGroupGen.position.x = Math.sin(genSlipRad) * 0.45;

    const genSteerRad = -(genSteerDeg * Math.PI) / 180;
    if (frontLeftGen) {
      frontLeftGen.rotation.y = genSteerRad;
      frontLeftGen.rotation.z = 0.05;
    }
    if (frontRightGen) {
      frontRightGen.rotation.y = genSteerRad;
      frontRightGen.rotation.z = -0.05;
    }
  }
  if (rendererGen && sceneGen && cameraGen && currentViewModeGen === '3d') {
    rendererGen.render(sceneGen, cameraGen);
  }
  if (currentViewModeGen === '2d') {
    draw2DCar('canvas2D_gen', genTestAngle, genSteerDeg, true);
  }
}

// Initialization on load
window.addEventListener('DOMContentLoaded', () => {
  let initL = 'pl';
  try { const s = localStorage.getItem('carx_assist_lang'); if (s) initL = s; } catch(e) {}
  setLang(initL);
  initVisualizers();
  onCalcSliderChange();
  onGenSliderChange();
  updateAcWorkflowLang(lang);
  initAcGarage();
});


// ==========================================================================
// ASSETTO CORSA PITSTOP GARAGE & SETUP ADVISOR (1:1 ACCURATE IN-GAME REPLICA)
// ==========================================================================

const acFinalRatiosTable = [
  2.61, 2.67, 2.75, 2.80, 2.87, 2.92, 3.00, 3.05, 3.09, 3.13,
  3.19, 3.24, 3.30, 3.36, 3.40, 3.46, 3.51, 3.57, 3.61, 3.65,
  3.69, 3.75, 3.79, 3.84, 3.91, 3.97, 4.12, 4.27, 4.34, 4.43,
  4.48, 4.53, 4.60, 4.66, 4.71, 4.75, 4.84, 4.91, 4.99, 5.06,
  5.15, 5.24, 5.32, 5.42, 5.49, 5.57, 5.67, 5.82, 5.91, 6.06
];

function getAcFinalRatioIndex(ratio) {
  let bestIdx = 20; // default 3.69
  let bestDiff = 9999;
  for (let i = 0; i < acFinalRatiosTable.length; i++) {
    const diff = Math.abs(acFinalRatiosTable[i] - ratio);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestIdx = i;
    }
  }
  return bestIdx;
}

const acSetupState = {
  carName: "matsuri_mayhem_nissan_silvia_s14_kouki",
  finalRatio: 3.69,
  gears: [96, 130, 168, 199, 234],
  tyresSet: "Drift Compound",
  pressureLF: 21,
  pressureRF: 21,
  pressureLR: 17,
  pressureRR: 17,
  fuel: 30,
  camberLF: -5.0,
  camberRF: -5.0,
  toeLF: 40,
  toeRF: 40,
  toeLR: 40,
  toeRR: 40,
  camberLR: -0.8,
  camberRR: -0.8,
  dampBumpLF: 26, dampBumpRF: 26,
  dampFastBumpLF: 20, dampFastBumpRF: 20,
  dampReboundLF: 36, dampReboundRF: 36,
  dampFastReboundLF: 32, dampFastReboundRF: 32,
  dampBumpLR: 14, dampBumpRR: 14,
  dampFastBumpLR: 10, dampFastBumpRR: 10,
  dampReboundLR: 32, dampReboundRR: 32,
  dampFastReboundLR: 26, dampFastReboundRR: 26,
  diffPower: 100,
  diffCoast: 100,
  diffPreload: 0,
  brakeBias: 70,
  brakePower: 100,
  arbFront: 12000,
  wheelRateLF: 117, wheelRateRF: 117,
  heightLF: 60, heightRF: 60,
  wheelRateLR: 67, wheelRateRR: 67,
  heightLR: 70, heightRR: 70,
  arbRear: 4000
};

// Parameter specs: [unit, step, min, max, isFloat]
const acParamSpecs = {
  finalRatio: ["", 0.01, 2.50, 5.50, true],
  pressureLF: [" psi", 1, 15, 35, false],
  pressureRF: [" psi", 1, 15, 35, false],
  pressureLR: [" psi", 1, 15, 35, false],
  pressureRR: [" psi", 1, 15, 35, false],
  fuel: [" L", 1, 5, 70, false],
  camberLF: ["°", 0.1, -7.0, 0.0, true],
  camberRF: ["°", 0.1, -7.0, 0.0, true],
  toeLF: ["", 1, 0, 80, false],
  toeRF: ["", 1, 0, 80, false],
  toeLR: ["", 1, 0, 80, false],
  toeRR: ["", 1, 0, 80, false],
  camberLR: ["°", 0.1, -4.0, 1.0, true],
  camberRR: ["°", 0.1, -4.0, 1.0, true],
  dampBumpLF: ["", 1, 5, 45, false],
  dampBumpRF: ["", 1, 5, 45, false],
  dampFastBumpLF: ["", 1, 5, 40, false],
  dampFastBumpRF: ["", 1, 5, 40, false],
  dampReboundLF: ["", 1, 10, 50, false],
  dampReboundRF: ["", 1, 10, 50, false],
  dampFastReboundLF: ["", 1, 10, 45, false],
  dampFastReboundRF: ["", 1, 10, 45, false],
  dampBumpLR: ["", 1, 5, 40, false],
  dampBumpRR: ["", 1, 5, 40, false],
  dampFastBumpLR: ["", 1, 5, 35, false],
  dampFastBumpRR: ["", 1, 5, 35, false],
  dampReboundLR: ["", 1, 10, 45, false],
  dampReboundRR: ["", 1, 10, 45, false],
  dampFastReboundLR: ["", 1, 5, 40, false],
  dampFastReboundRR: ["", 1, 5, 40, false],
  diffPower: ["%", 1, 0, 100, false],
  diffCoast: ["%", 1, 0, 100, false],
  diffPreload: [" Nm", 5, 0, 200, false],
  brakeBias: ["%", 1, 50, 90, false],
  brakePower: ["%", 1, 50, 100, false],
  arbFront: [" N/m", 500, 2000, 25000, false],
  wheelRateLF: [" N/mm", 1, 40, 200, false],
  wheelRateRF: [" N/mm", 1, 40, 200, false],
  heightLF: ["", 1, 20, 100, false],
  heightRF: ["", 1, 20, 100, false],
  wheelRateLR: [" N/mm", 1, 30, 150, false],
  wheelRateRR: [" N/mm", 1, 30, 150, false],
  heightLR: ["", 1, 20, 100, false],
  heightRR: ["", 1, 20, 100, false],
  arbRear: [" N/m", 500, 1000, 15000, false]
};

function switchAcTab(tabName) {
  const tabs = document.querySelectorAll('.ac-sidebar-tab');
  const panes = document.querySelectorAll('.ac-pane');

  tabs.forEach(t => {
    if (t.dataset.actab === tabName) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  panes.forEach(p => {
    if (p.id === `pane-${tabName}`) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  if (tabName === 'gears') {
    setTimeout(drawAcGearsChart, 50);
  }
}

function updateWheelGraphicLabels() {
  const lblLF = document.getElementById('acWheelLbl_LF');
  const lblRF = document.getElementById('acWheelLbl_RF');
  const lblLR = document.getElementById('acWheelLbl_LR');
  const lblRR = document.getElementById('acWheelLbl_RR');
  if (lblLF) lblLF.textContent = `LF: ${Math.round(acSetupState.pressureLF || 21)} psi`;
  if (lblRF) lblRF.textContent = `RF: ${Math.round(acSetupState.pressureRF || 21)} psi`;
  if (lblLR) lblLR.textContent = `LR: ${Math.round(acSetupState.pressureLR || 17)} psi`;
  if (lblRR) lblRR.textContent = `RR: ${Math.round(acSetupState.pressureRR || 17)} psi`;
}

function getAxlePairedParam(paramName) {
  if (paramName.endsWith('LF')) return paramName.slice(0, -2) + 'RF';
  if (paramName.endsWith('RF')) return paramName.slice(0, -2) + 'LF';
  if (paramName.endsWith('LR')) return paramName.slice(0, -2) + 'RR';
  if (paramName.endsWith('RR')) return paramName.slice(0, -2) + 'LR';
  return null;
}

function updateAcUIParam(paramName) {
  const spec = acParamSpecs[paramName];
  if (!spec) return;
  const [unit, step, min, max, isFloat] = spec;
  const val = acSetupState[paramName];

  const slider = document.getElementById(`acSlider_${paramName}`);
  const display = document.getElementById(`acVal_${paramName}`);

  if (slider) slider.value = val;
  if (display) {
    if (isFloat) {
      display.textContent = `${val.toFixed(paramName === 'finalRatio' ? 2 : 1)}${unit}`;
    } else {
      display.textContent = `${Math.round(val)}${unit}`;
    }
  }

  if (paramName.startsWith('pressure')) {
    updateWheelGraphicLabels();
  }
}

function stepAcParam(paramName, dirMultiplier) {
  const spec = acParamSpecs[paramName];
  if (!spec) return;
  const [unit, step, min, max, isFloat] = spec;

  let currentVal = acSetupState[paramName];
  let newVal = currentVal + (step * dirMultiplier);

  if (isFloat) {
    newVal = Math.round(newVal * 100) / 100;
  } else {
    newVal = Math.round(newVal);
  }

  if (newVal < min) newVal = min;
  if (newVal > max) newVal = max;

  acSetupState[paramName] = newVal;
  updateAcUIParam(paramName);

  // Synchronize companion wheel on same axle (LF <-> RF, LR <-> RR)
  const paired = getAxlePairedParam(paramName);
  if (paired && acSetupState[paired] !== undefined) {
    acSetupState[paired] = newVal;
    updateAcUIParam(paired);
  }

  if (paramName === 'finalRatio') {
    recalculateGearSpeeds();
    drawAcGearsChart();
  }
  updateAdvisorDynamicFeedback();
}

// ==========================================================================
// DYNAMIC REAL-TIME ADVISOR FEEDBACK & EXPLANATIONS (BILINGUAL PL / EN)
// ==========================================================================
function updateAdvisorDynamicFeedback() {
  const isPl = (currentLang === 'pl');
  updateWheelGraphicLabels();

  // 1. GEARS ADVISOR
  const fr = acSetupState.finalRatio || 3.69;
  const g1 = acSetupState.gears[0] || 96;
  const g2 = acSetupState.gears[1] || 130;
  const g3 = acSetupState.gears[2] || 168;
  const g4 = acSetupState.gears[3] || 199;
  const g5 = acSetupState.gears[4] || 234;

  const tagGears = document.getElementById('acAdvTag_gears');
  const mapGears = document.getElementById('acAdvMap_gears');
  const textGears = document.getElementById('acAdvText_gears');

  if (tagGears) tagGears.textContent = isPl ? `💡 ASYSTENT DRIFTU: SKRZYNIA BIEGÓW (${fr.toFixed(2)})` : `💡 DRIFT ADVISOR: TRANSMISSION & GEARS (${fr.toFixed(2)})`;
  if (mapGears) mapGears.textContent = isPl ? `CarX Map: ${fr.toFixed(2)} Final Drive • V-Max: ${g5} km/h` : `CarX Map: ${fr.toFixed(2)} Final Drive • Top Speed: ${g5} km/h`;

  if (textGears) {
    let card1Title = '';
    let card1Text = '';
    let card1Class = 'ac-adv-card alert-info';

    if (fr < 3.55) {
      card1Title = isPl ? `⚡ DŁUGIE PRZEŁOŻENIE GŁÓWNE (${fr.toFixed(2)})` : `⚡ LONG FINAL DRIVE (${fr.toFixed(2)})`;
      card1Text = isPl ?
        `Wysoki V-Max (<strong>${g5} km/h</strong>). Auto wolniej wkręca się na obroty przy wyjściu z zakrętu, ale pozwala na bardzo szeroki, płynny drift na długich łukach bez odcinania zapłonu. Wymaga wysokiej mocy silnika na 3. biegu (${g3} km/h).` :
        `High top speed (<strong>${g5} km/h</strong>). Engine revs up gradually, enabling wide, smooth drift arcs without bouncing on the limiter. Demands high horsepower in 3rd gear (${g3} km/h).`;
      card1Class = 'ac-adv-card alert-info';
    } else if (fr <= 3.80) {
      card1Title = isPl ? `⚖️ ZRÓWNOWAŻONY FINAL DRIVE (${fr.toFixed(2)})` : `⚖️ BALANCED FINAL DRIVE (${fr.toFixed(2)})`;
      card1Text = isPl ?
        `Optymalny, zrównoważony zakres przełożenia głównego. Złoty środek między zrywnością na wyjściach a prędkością maksymalną. Zapewnia uniwersalne dopasowanie do większości torów driftowych. V-Max na 5. biegu: <strong>${g5} km/h</strong>.` :
        `Balanced final drive ratio. The sweet spot between acceleration response and top-end speed. Universal compromise across almost all drift venues. Top speed: <strong>${g5} km/h</strong>.`;
      card1Class = 'ac-adv-card alert-info';
    } else {
      card1Title = isPl ? `🚀 KRÓTKIE PRZEŁOŻENIE (${fr.toFixed(2)} - AGRESYWNY CARX STYLE)` : `🚀 SHORT FINAL DRIVE (${fr.toFixed(2)} - AGGRESSIVE CARX STYLE)`;
      card1Text = isPl ?
        `<strong>AUTO DUŻO SZYBCIEJ SIĘ ZBIERA Z DOŁU!</strong> Silnik błyskawicznie wkręca się na obroty, ułatwiając zerwanie przyczepności na 3. biegu (${g3} km/h) nawet przy niższych obrotach. Krótsze biegi (V-Max: <strong>${g5} km/h</strong>) są idealne na techniczne, ciasne tory i nagłe przyspieszenia.` :
        `<strong>CAR ACCELERATES MUCH FASTER OUT OF CORNERS!</strong> Engine climbs the rev band immediately, breaking traction on 3rd gear (${g3} km/h) with ease even at lower RPM. Tighter ratios (Top speed: <strong>${g5} km/h</strong>) shine on technical circuits.`;
      card1Class = 'ac-adv-card alert-grip';
    }

    const card2Title = isPl ? `🏁 BIEGI ROBOCZE W POŚLIZGU` : `🏁 DRIFT WORKHORSE GEARS`;
    const card2Text = isPl ?
      `<strong>2. bieg (${g2} km/h)</strong>: Błyskawiczna inicjacja poślizgu ze sprzęgła (Clutch Kick) i ciasne nawroty.<br><strong>3. bieg (${g3} km/h)</strong>: Główny bieg roboczy do szerokich łuków, dający płynne prowadzenie w tandemach.` :
      `<strong>2nd gear (${g2} km/h)</strong>: Punchy clutch kicks and tight hairpin transitions.<br><strong>3rd gear (${g3} km/h)</strong>: Primary drift workhorse for broad sweepers and tandem precision.`;

    const card3Title = isPl ? `📊 STOPNIOWANIE I V-MAX` : `📊 GEAR SPEED SPREAD`;
    const card3Text = isPl ?
      `1. bieg: <strong>${g1} km/h</strong> • 2. bieg: <strong>${g2} km/h</strong> • 3. bieg: <strong>${g3} km/h</strong> • 4. bieg: <strong>${g4} km/h</strong> • 5. bieg: <strong>${g5} km/h</strong>.<br>4. bieg (${g4} km/h) umożliwia agresywne, szybkie wejścia (High-Speed Inits).` :
      `1st: <strong>${g1} km/h</strong> • 2nd: <strong>${g2} km/h</strong> • 3rd: <strong>${g3} km/h</strong> • 4th: <strong>${g4} km/h</strong> • 5th: <strong>${g5} km/h</strong>.<br>4th gear (${g4} km/h) enables high-speed drift initiations.`;

    textGears.innerHTML = `
      <div class="ac-adv-grid">
        <div class="${card1Class}">
          <div class="ac-adv-card-title">${card1Title}</div>
          <div>${card1Text}</div>
        </div>
        <div class="ac-adv-card alert-info">
          <div class="ac-adv-card-title">${card2Title}</div>
          <div>${card2Text}</div>
        </div>
        <div class="ac-adv-card">
          <div class="ac-adv-card-title">${card3Title}</div>
          <div>${card3Text}</div>
        </div>
      </div>
    `;
  }

  // 2. TYRES ADVISOR
  const fPsi = Math.round(acSetupState.pressureLF || 21);
  const rPsi = Math.round(acSetupState.pressureLR || 17);
  const tagTyres = document.getElementById('acAdvTag_tyres');
  const mapTyres = document.getElementById('acAdvMap_tyres');
  const textTyres = document.getElementById('acAdvText_tyres');

  if (tagTyres) tagTyres.textContent = isPl ? `💡 ASYSTENT DRIFTU: CIŚNIENIA OPON (${fPsi} / ${rPsi} PSI)` : `💡 DRIFT ADVISOR: TYRE PRESSURES (${fPsi} / ${rPsi} PSI)`;
  if (mapTyres) mapTyres.textContent = isPl ? `CarX Map: Przód ${fPsi} psi • Tył ${rPsi} psi` : `CarX Map: Front ${fPsi} psi • Rear ${rPsi} psi`;

  if (textTyres) {
    let rTitle = '';
    let rDesc = '';
    let rClass = 'ac-adv-card alert-info';

    if (rPsi <= 19) {
      rClass = 'ac-adv-card alert-grip';
      rTitle = isPl ? `🔥 TYŁ: ${rPsi} PSI &rarr; DUŻO KLEJU (Maksymalna trakcja!)` : `🔥 REAR: ${rPsi} PSI &rarr; MAXIMUM GRIP (High traction!)`;
      rDesc = isPl ?
        `Opona miękko ugina się i całą powierzchnią klei do asfaltu. Auto <strong>potężnie napędza się do przodu</strong> w poślizgu, ułatwia agresywne gonienie w tandemach i generuje ogromne chmury dymu. Wymaga mocnego wciśnięcia gazu, by nie przymulić silnika w głębokim kącie.` :
        `Tire deflects creating a huge footprint. The car <strong>drives forward aggressively</strong> in drift, excels at chasing in tandems and pours thick smoke. Demands high throttle commitment to keep revs up.`;
    } else if (rPsi <= 25) {
      rClass = 'ac-adv-card alert-info';
      rTitle = isPl ? `⚖️ TYŁ: ${rPsi} PSI &rarr; ZRÓWNOWAŻONY POŚLIZG (Średnia trakcja)` : `⚖️ REAR: ${rPsi} PSI &rarr; BALANCED TRACTION (Medium grip)`;
      rDesc = isPl ?
        `Zrównoważona charakterystyka poślizgu. Łatwa inicjacja driftu, płynne przekładki i umiarkowane zużycie opon. Idealny kompromis dla aut o mocy 350–450 KM.` :
        `Balanced slip characteristics. Effortless initiation, predictable transitions, and moderate tire wear. Optimal compromise for 350–450 HP vehicles.`;
    } else {
      rClass = 'ac-adv-card alert-slip';
      rTitle = isPl ? `💨 TYŁ: ${rPsi} PSI &rarr; MAŁO KLEJU (Łatwy poślizg & mały opór)` : `💨 REAR: ${rPsi} PSI &rarr; LOW GRIP (Easy slip & less forward drive)`;
      rDesc = isPl ?
        `Twarda opona i mniejsza powierzchnia styku. Auto <strong>błyskawicznie gubi trakcję</strong> i bardzo lekko zamiata tyłem nawet przy małej mocy, ale ma mniejszą prędkość napędzania w łuku i wolniej ucieka do przodu.` :
        `Stiff tire with reduced footprint. The car <strong>breaks traction instantly</strong> and slides effortlessly even on modest horsepower, but produces less forward drive and slower corner speeds.`;
    }

    let fTitle = '';
    let fDesc = '';
    let fClass = 'ac-adv-card alert-info';
    if (fPsi <= 24) {
      fTitle = isPl ? `🎯 PRZÓD: ${fPsi} PSI &rarr; PRECYZJA & STABILNOŚĆ` : `🎯 FRONT: ${fPsi} PSI &rarr; PRECISION & STABILITY`;
      fDesc = isPl ?
        `Optymalna sztywność barku opony. Przednie koła natychmiast reagują na kontrę asysty driftu i precyzyjnie trzymają zadany tor jazdy bez podwijania bieżnika.` :
        `Optimal tire sidewall stiffness. Front wheels bite instantly on countersteer and carve precise drift lines without tucking.`;
      fClass = 'ac-adv-card alert-info';
    } else {
      fTitle = isPl ? `⚡ PRZÓD: ${fPsi} PSI &rarr; TWARDY PRZÓD (Agresywna reakcja)` : `⚡ FRONT: ${fPsi} PSI &rarr; STIFF FRONT (Sharp response)`;
      fDesc = isPl ?
        `Twarda przednia opona zmniejsza opory toczenia, dając bardzo szybką reakcję na kierownicy, lecz przy zbyt małym dociążeniu może sprzyjać podsterowności.` :
        `Stiff front tires minimize rolling resistance for rapid steering turn-in, but can introduce mild push on slippery surfaces.`;
      fClass = 'ac-adv-card alert-warn';
    }

    const deltaTitle = isPl ? `📐 ROZKŁAD CIŚNIEŃ (DELTA ${Math.abs(fPsi - rPsi)} PSI)` : `📐 PRESSURE SPLIT (DELTA ${Math.abs(fPsi - rPsi)} PSI)`;
    const deltaDesc = isPl ?
      `Różnica <strong>${fPsi - rPsi} PSI</strong> między przodem a tyłem to klasyczna konfiguracja profesjonalnego driftu: wyższy przód daje stabilne kierowanie, a niższy tył generuje napęd pchający auto wzdłuż łuku.` :
      `A split of <strong>${fPsi - rPsi} PSI</strong> between front and rear is the gold standard in pro drifting: stiffer front guides the chassis while lower rear generates forward propulsion.`;

    textTyres.innerHTML = `
      <div class="ac-adv-grid">
        <div class="${rClass}">
          <div class="ac-adv-card-title">${rTitle}</div>
          <div>${rDesc}</div>
        </div>
        <div class="${fClass}">
          <div class="ac-adv-card-title">${fTitle}</div>
          <div>${fDesc}</div>
        </div>
        <div class="ac-adv-card">
          <div class="ac-adv-card-title">${deltaTitle}</div>
          <div>${deltaDesc}</div>
        </div>
      </div>
    `;
  }

  // 3. FUEL ADVISOR
  const fuelL = Math.round(acSetupState.fuel || 12);
  const fuelKg = Math.round(fuelL * 0.74);
  const tagFuel = document.getElementById('acAdvTag_fuel');
  const mapFuel = document.getElementById('acAdvMap_fuel');
  const textFuel = document.getElementById('acAdvText_fuel');

  if (tagFuel) tagFuel.textContent = isPl ? `💡 ASYSTENT DRIFTU: PALIWO (${fuelL} L / ${fuelKg} KG)` : `💡 DRIFT ADVISOR: FUEL LOAD (${fuelL} L / ${fuelKg} KG)`;
  if (mapFuel) mapFuel.textContent = isPl ? `CarX Map: ${fuelL} L (Balans masy tylnej osi)` : `CarX Map: ${fuelL} L (Rear ballast & balance)`;

  if (textFuel) {
    const fCard1Title = isPl ? `⛽ ZBIORNIK PALIWA: ${fuelL} L (~${fuelKg} KG)` : `⛽ FUEL LOAD: ${fuelL} L (~${fuelKg} KG)`;
    const fCard1Desc = isPl ?
      `Zbiornik paliwa znajduje się w bagażniku nad tylną osią pojazdu. Każde ${fuelL} litrów bezpośrednio modyfikuje rozkład mas między osiami oraz dociążenie tylnych kół napędowych.` :
      `The fuel tank is positioned directly over the rear axle. Every liter modifies chassis mass balance and vertical load over the driving wheels.`;

    const fCard2Title = fuelL <= 20 ?
      (isPl ? `🪶 LEKKI TYŁ (${fuelL} L &rarr; Zwinne przekładki)` : `🪶 LIGHT REAR (${fuelL} L &rarr; Agile flick transitions)`) :
      (isPl ? `🧱 DOCIĄŻONY TYŁ (${fuelL} L &rarr; Większy docisk)` : `🧱 BALLASTED REAR (${fuelL} L &rarr; Higher rear bite)`);
    const fCard2Desc = fuelL <= 20 ?
      (isPl ?
        `Niska masa tylnej osi minimalizuje bezwładność wahadłową. Samochód błyskawicznie reaguje na transfer masy (flick), pozwalając na agresywne, ostre zmiany kierunku w szykanach.` :
        `Low rear mass minimizes pendulum inertia. The chassis snaps across transitions rapidly, providing sharp agility in chicanes.`) :
      (isPl ?
        `Większy stan paliwa zwiększa docisk tylnych kół (lepsza trakcja w zakręcie), jednak rosnący moment bezwładności wymaga płynniejszych, bardziej kontrolowanych ruchów kierownicą.` :
        `Higher fuel ballast pushes the rear tires into pavement for sustained grip, but the inertia demands smoother, calculated countersteer control.`);
    const fCard2Class = fuelL <= 20 ? 'ac-adv-card alert-grip' : 'ac-adv-card alert-slip';

    textFuel.innerHTML = `
      <div class="ac-adv-grid">
        <div class="ac-adv-card alert-info">
          <div class="ac-adv-card-title">${fCard1Title}</div>
          <div>${fCard1Desc}</div>
        </div>
        <div class="${fCard2Class}">
          <div class="ac-adv-card-title">${fCard2Title}</div>
          <div>${fCard2Desc}</div>
        </div>
      </div>
    `;
  }

  // 4. ALIGNMENT ADVISOR (SEPARATED FRONT & REAR WITH DYNAMIC TOE & CAMBER)
  const cF = (acSetupState.camberLF || -5.0).toFixed(1);
  const cR = (acSetupState.camberLR || -0.9).toFixed(1);
  const tLF = Math.round(acSetupState.toeLF !== undefined ? acSetupState.toeLF : 40);
  const tRF = Math.round(acSetupState.toeRF !== undefined ? acSetupState.toeRF : 40);
  const tLR = Math.round(acSetupState.toeLR !== undefined ? acSetupState.toeLR : 40);
  const tRR = Math.round(acSetupState.toeRR !== undefined ? acSetupState.toeRR : 40);
  const avgToeF = Math.round((tLF + tRF) / 2);
  const avgToeR = Math.round((tLR + tRR) / 2);

  const tagAlign = document.getElementById('acAdvTag_alignment');
  const mapAlign = document.getElementById('acAdvMap_alignment');
  const textAlign = document.getElementById('acAdvText_alignment');

  if (tagAlign) tagAlign.textContent = isPl ? `💡 ASYSTENT DRIFTU: GEOMETRIA PRZÓD & TYŁ (TOE: ${avgToeF}/${avgToeR})` : `💡 DRIFT ADVISOR: ALIGNMENT FRONT & REAR (TOE: ${avgToeF}/${avgToeR})`;
  if (mapAlign) mapAlign.textContent = isPl ? `CarX Map: Camber F:${cF}°/R:${cR}° • Toe F:${avgToeF}/R:${avgToeR}` : `CarX Map: Camber F:${cF}°/R:${cR}° • Toe F:${avgToeF}/R:${avgToeR}`;

  if (textAlign) {
    // Front Toe evaluation
    let frontToeDesc = '';
    let frontClass = 'ac-adv-card alert-info';
    if (avgToeF < 38) {
      frontClass = 'ac-adv-card alert-grip';
      frontToeDesc = isPl ?
        `⚡ <strong>Toe Out (${avgToeF} &rarr; Rozbieżność)</strong>: Przednie koła rozchylone na zewnątrz. <strong>Błyskawiczna reakcja na kontrę</strong> i agresywne wejście w poślizg. Koło prowadzące natychmiast wgryza się w zakręt.` :
        `⚡ <strong>Toe Out (${avgToeF})</strong>: Front wheels pointed outward. <strong>Instant countersteer response</strong> and aggressive turn-in bite into drift.`;
    } else if (avgToeF <= 42) {
      frontClass = 'ac-adv-card alert-info';
      frontToeDesc = isPl ?
        `⚖️ <strong>Toe Neutral (${avgToeF} • 0.00°)</strong>: Koła równoległe. Zerowy opór toczenia, stabilne prowadzenie na prostej i płynna, przewidywalna praca kierownicą.` :
        `⚖️ <strong>Toe Neutral (${avgToeF} • 0.00°)</strong>: Parallel wheels. Zero rolling resistance, stable straight-line tracking, and progressive steering response.`;
    } else {
      frontClass = 'ac-adv-card alert-slip';
      frontToeDesc = isPl ?
        `🛡️ <strong>Toe In (${avgToeF} &rarr; Zbieżność)</strong>: Koła zbieżne do środka. Spokojniejszy przód kosztem leniwszego wejścia w poślizg (wymaga mocniejszego flicku).` :
        `🛡️ <strong>Toe In (${avgToeF})</strong>: Wheels pointed inward. Calmer front end with slightly dulled turn-in sharpness.`;
    }

    // Rear Toe evaluation
    let rearToeDesc = '';
    let rearClass = 'ac-adv-card alert-info';
    if (avgToeR > 42) {
      rearClass = 'ac-adv-card alert-grip';
      rearToeDesc = isPl ?
        `🔥 <strong>Toe In (${avgToeR} &rarr; Zbieżność tyłu - MAKSYMALNA TRAKCJA & BRAK SPINA!)</strong>: Koła tylne ściągają do środka. Tył stabilnie napędza auto w długim poślizgu, dając potężne odepchnięcie do przodu bez ryzyka obrotu.` :
        `🔥 <strong>Toe In (${avgToeR} &rarr; Rear Toe In - MAXIMUM FORWARD DRIVE & ANTI-SPIN!)</strong>: Stabilizes the rear under power, driving the car forward along the drift line without snapping into a spin.`;
    } else if (avgToeR >= 38) {
      rearClass = 'ac-adv-card alert-info';
      rearToeDesc = isPl ?
        `⚖️ <strong>Toe Neutral (${avgToeR} • 0.00°)</strong>: Czysty poślizg z zerowym oporem toczenia tylnych kół. Wymaga wyczucia gazu, by nie odkleić tyłu zbyt gwałtownie.` :
        `⚖️ <strong>Toe Neutral (${avgToeR} • 0.00°)</strong>: Clean, friction-free slip angle. Demands smooth throttle modulation.`;
    } else {
      rearClass = 'ac-adv-card alert-warn';
      rearToeDesc = isPl ?
        `⚠️ <strong>Toe Out (${avgToeR} &rarr; Rozbieżność tyłu - BARDZO NERWOWY TYŁ!)</strong>: Rozbieżny tył powoduje silną nadsterowność i tendencję do spina przy każdej próbie wyprostowania auta!` :
        `⚠️ <strong>Toe Out (${avgToeR} &rarr; Rear Toe Out - ERRATIC SNAP OVERSTEER!)</strong>: Makes the rear violently loose with extreme tendency to spin out upon straightening!`;
    }

    const aCard1Title = isPl ? `📐 PRZÓD: CAMBER ${cF}° • TOE ${avgToeF}` : `📐 FRONT: CAMBER ${cF}° • TOE ${avgToeF}`;
    const aCard1Desc = isPl ?
      `Duży negatyw z przodu (<strong>${cF}°</strong>) w połączeniu z Casterem (9°–10°) sprawia, że koło zewnętrzne w pełnym skręcie leży <strong>w 100% płasko na asfalcie</strong>.<br>${frontToeDesc}` :
      `Front negative camber (<strong>${cF}°</strong>) combined with high caster (9°–10°) keeps the outside tire <strong>100% flat on asphalt</strong> at full lock.<br>${frontToeDesc}`;

    const aCard2Title = isPl ? `🏎️ TYŁ: CAMBER ${cR}° • TOE ${avgToeR}` : `🏎️ REAR: CAMBER ${cR}° • TOE ${avgToeR}`;
    const aCard2Desc = isPl ?
      `Bliski zera negatyw z tyłu (<strong>${cR}°</strong>): Podczas przysiadu auta w drifcie (squat) opona klei <strong>całą szerokością bieżnika</strong>.<br>${rearToeDesc}` :
      `Near-zero rear camber (<strong>${cR}°</strong>): When the car squats in drift, 100% of the rear tire width contacts the pavement.<br>${rearToeDesc}`;

    const aCard3Title = isPl ? `⚖️ BALANS GEOMETRII PRZÓD VS TYŁ` : `⚖️ ALIGNMENT BALANCE FRONT VS REAR`;
    const aCard3Desc = isPl ?
      `Rozbieżny i pochylony przód (${cF}° / Toe ${avgToeF}) gwarantuje natychmiastowy grip kontry, podczas gdy zbieżny i płaski tył (${cR}° / Toe ${avgToeR}) generuje prędkość w tandemach.` :
      `Aggressive front camber and toe-out ensure relentless countersteer bite, while flat rear camber and toe-in push massive forward momentum in tandems.`;

    textAlign.innerHTML = `
      <div class="ac-adv-grid">
        <div class="${frontClass}">
          <div class="ac-adv-card-title">${aCard1Title}</div>
          <div>${aCard1Desc}</div>
        </div>
        <div class="${rearClass}">
          <div class="ac-adv-card-title">${aCard2Title}</div>
          <div>${aCard2Desc}</div>
        </div>
        <div class="ac-adv-card">
          <div class="ac-adv-card-title">${aCard3Title}</div>
          <div>${aCard3Desc}</div>
        </div>
      </div>
    `;
  }

  // 5. DAMPERS ADVISOR (SEPARATED FRONT & REAR WITH DETAILED REBOUND & FAST-BUMP)
  const bF = Math.round(acSetupState.dampBumpLF || 26);
  const rF = Math.round(acSetupState.dampReboundLF || 36);
  const fbF = Math.round(acSetupState.dampFastBumpLF || 20);
  const frF = Math.round(acSetupState.dampFastReboundLF || 32);
  const bR = Math.round(acSetupState.dampBumpLR || 14);
  const rR = Math.round(acSetupState.dampReboundLR || 32);
  const fbR = Math.round(acSetupState.dampFastBumpLR || 10);
  const frR = Math.round(acSetupState.dampFastReboundLR || 26);

  const tagDamp = document.getElementById('acAdvTag_dampers');
  const mapDamp = document.getElementById('acAdvMap_dampers');
  const textDamp = document.getElementById('acAdvText_dampers');

  if (tagDamp) tagDamp.textContent = isPl ? `💡 ASYSTENT DRIFTU: AMORTYZATORY PRZÓD & TYŁ` : `💡 DRIFT ADVISOR: DAMPERS FRONT & REAR`;
  if (mapDamp) mapDamp.textContent = isPl ? `CarX Map: Przód B:${bF}/R:${rF} • Tył B:${bR}/R:${rR}` : `CarX Map: Front B:${bF}/R:${rF} • Rear B:${bR}/R:${rR}`;

  if (textDamp) {
    // Front Rebound & Bump evaluation
    const frontRebDesc = rF >= 34 ?
      (isPl ?
        `⚡ <strong>Rebound Przód (${rF} - TWARDE ODBICIE)</strong>: Przód wolno wstaje z ugięcia po hamowaniu lub flicku. Utrzymuje dociążone koła skrętne przez całą fazę wejścia w łuk, dając bezpośrednie trzymanie linii poślizgu bez podbijania dziobu.` :
        `⚡ <strong>Front Rebound (${rF} - STIFF EXTENSION)</strong>: Front extends slowly after braking or flick turn-in, pinning steering grip to the asphalt and preventing floaty pitch.`) :
      (isPl ?
        `🌊 <strong>Rebound Przód (${rF} - MIĘKKIE ODBICIE)</strong>: Przód szybko się prostuje, co ułatwia łagodne przekładki, lecz może powodować kołysanie nadwozia.` :
        `🌊 <strong>Front Rebound (${rF} - SOFT EXTENSION)</strong>: Front rebounds quickly, easing low-speed flicks but risking chassis oscillation.`);

    // Rear Rebound & Bump evaluation
    let rearCardClass = 'ac-adv-card alert-info';
    let rearRebDesc = '';
    if (rR >= 30) {
      rearCardClass = 'ac-adv-card alert-grip';
      rearRebDesc = isPl ?
        `🛡️ <strong>Rebound Tył (${rR} - ANTY-SNAP / KONTROLA PRZEKŁADEK!)</strong>: Twarde odbicie tyłu powstrzymuje gwałtowne wystrzelenie zawieszenia do góry przy odpuszczeniu gazu i sprzęgła (Clutch Kick). <strong>Całkowicie eliminuje snap oversteer</strong> (nagłe, niekontrolowane wyrzucenie tyłu w drugą stronę).` :
        `🛡️ <strong>Rear Rebound (${rR} - ANTI-SNAP / TRANSITION CONTROL!)</strong>: Stiff rebound stops the rear suspension from violently unloading upon lift-off or clutch-kicking, completely eliminating snap oversteer.`;
    } else {
      rearCardClass = 'ac-adv-card alert-slip';
      rearRebDesc = isPl ?
        `⚠️ <strong>Rebound Tył (${rR} - SZYBKIE ODBICIE)</strong>: Tył szybko wraca do góry po odciążeniu, co może prowokować nerwowe myszkowanie tyłu przy wyjściu z zakrętu.` :
        `⚠️ <strong>Rear Rebound (${rR} - FAST REBOUND)</strong>: Rear decompresses rapidly, which can cause erratic fishtailing during sudden weight transfers.`;
    }

    const dCard1Title = isPl ? `🔩 PRZÓD: BUMP ${bF} • REBOUND ${rF} • FAST ${fbF}/${frF}` : `🔩 FRONT: BUMP ${bF} • REBOUND ${rF} • FAST ${fbF}/${frF}`;
    const dCard1Desc = isPl ?
      `<strong>Bump (${bF})</strong>: Twarde ściskanie stabilizuje dziób przy ostrym dohamowaniu.<br>${frontRebDesc}<br><strong>Fast Bump (${fbF}) / Rebound (${frF})</strong>: Błyskawicznie pochłania tarki i krawężniki (kerbs).` :
      `<strong>Bump (${bF})</strong>: Damps dive during aggressive braking.<br>${frontRebDesc}<br><strong>Fast Bump (${fbF}) / Rebound (${frF})</strong>: Absorbs high-speed kerb and rumble strip impacts.`;

    const dCard2Title = isPl ? `🏎️ TYŁ: BUMP ${bR} • REBOUND ${rR} • FAST ${fbR}/${frR}` : `🏎️ REAR: BUMP ${bR} • REBOUND ${rR} • FAST ${fbR}/${frR}`;
    const dCard2Desc = isPl ?
      `<strong>Bump (${bR})</strong>: Miękki tył pozwala na głęboki przysiad (squat) i dociążenie napędzanych kół pod gazem.<br>${rearRebDesc}<br><strong>Fast Bump (${fbR}) / Rebound (${frR})</strong>: Utrzymuje ciągły kontakt kół z asfaltem na wybojach toru.` :
      `<strong>Bump (${bR})</strong>: Compliant bump damping allows suspension squat to plant the drive wheels.<br>${rearRebDesc}<br><strong>Fast Bump (${fbR}) / Rebound (${frR})</strong>: Keeps drive wheels planted over track undulations.`;

    const dCard3Title = isPl ? `💡 BALANS TŁUMIENIA PRZÓD VS TYŁ` : `💡 FRONT VS REAR DAMPING RATIO`;
    const dCard3Desc = isPl ?
      `Proporcja twardszego przodu (${bF}/${rF}) i miększego tyłu (${bR}/${rR}) to fundament driftingu w CarX i Assetto Corsa: stabilny, precyzyjny przód i klejący, niewzruszony tył.` :
      `Maintaining a stiffer front (${bF}/${rF}) and compliant rear (${bR}/${rR}) mirrors real-world drift dynamics: razor-sharp front authority and predictable rear forward traction.`;

    textDamp.innerHTML = `
      <div class="ac-adv-grid">
        <div class="ac-adv-card alert-info">
          <div class="ac-adv-card-title">${dCard1Title}</div>
          <div>${dCard1Desc}</div>
        </div>
        <div class="${rearCardClass}">
          <div class="ac-adv-card-title">${dCard2Title}</div>
          <div>${dCard2Desc}</div>
        </div>
        <div class="ac-adv-card">
          <div class="ac-adv-card-title">${dCard3Title}</div>
          <div>${dCard3Desc}</div>
        </div>
      </div>
    `;
  }

  // 6. DRIVETRAIN ADVISOR
  const dp = Math.round(acSetupState.diffPower || 100);
  const dc = Math.round(acSetupState.diffCoast || 100);
  const preload = Math.round(acSetupState.diffPreload || 0);
  const tagDiff = document.getElementById('acAdvTag_drivetrain');
  const mapDiff = document.getElementById('acAdvMap_drivetrain');
  const textDiff = document.getElementById('acAdvText_drivetrain');

  if (tagDiff) tagDiff.textContent = isPl ? `💡 ASYSTENT DRIFTU: DYFERENCJAŁ (${dp}% / ${dc}% / ${preload} NM)` : `💡 DRIFT ADVISOR: DIFFERENTIAL (${dp}% / ${dc}% / ${preload} NM)`;
  if (mapDiff) mapDiff.textContent = isPl ? `CarX Map: Power ${dp}% • Coast ${dc}% • Preload ${preload} Nm` : `CarX Map: Power ${dp}% • Coast ${dc}% • Preload ${preload} Nm`;

  if (textDiff) {
    const dtCard1Title = isPl ? `⚡ POWER LOCK: ${dp}% (SPIĘCIE POD GAZEM)` : `⚡ POWER LOCK: ${dp}% (ACCELERATION LOCK)`;
    const dtCard1Desc = isPl ?
      `Pełne zblokowanie obu tylnych kół przy dodaniu gazu. Obie półosie kręcą się z identyczną prędkością obrotową, dając natychmiastowe zerwanie przyczepności i wykluczając efekt buksowania jednego koła.` :
      `100% full lock on throttle forces both drive wheels to rotate synchronously, guaranteeing immediate breakaway without single-wheel spin.`;

    const dtCard2Title = isPl ? `🔄 COAST LOCK: ${dc}% (ODPUSZCZENIE GAZU & PRZEKŁADKI)` : `🔄 COAST LOCK: ${dc}% (LIFT-OFF & TRANSITIONS)`;
    const dtCard2Desc = isPl ?
      `Blokada dyferencjału na odpuszczonym gazie (Coast) stabilizuje auto podczas przekładek (transitions) i dohamowań silnikiem, eliminując nerwowe myszkowanie tyłu.` :
      `Off-throttle lock stabilizes chassis composure through high-angle transitions and engine braking, mitigating erratic fishtailing.`;

    const dtCard3Title = isPl ? `⚙️ DIFF PRELOAD: ${preload} NM (WSTĘPNE SPIĘCIE)` : `⚙️ DIFF PRELOAD: ${preload} NM (INITIAL PRELOAD)`;
    const dtCard3Desc = preload <= 20 ?
      (isPl ?
        `Niski preload (<strong>${preload} Nm</strong>): Ułatwia manewrowanie przy minimalnych prędkościach oraz zapewnia płynniejsze, progresywne zazębianie dyferencjału po wciśnięciu gazu.` :
        `Low preload (<strong>${preload} Nm</strong>): Facilitates low-speed manoeuvring and delivers progressive diff engagement upon throttle application.`) :
      (isPl ?
        `Wysoki preload (<strong>${preload} Nm</strong>): Sprężyny wstępnie spinają tarczki dyferencjału. Daje bezkompromisową, natychmiastową reakcję napędu na każdą korektę gazu w poślizgu.` :
        `High preload (<strong>${preload} Nm</strong>): Differential clutches are pre-tensioned, ensuring immediate torque distribution across rear wheels at all times.`);
    const dtCard3Class = preload <= 20 ? 'ac-adv-card alert-info' : 'ac-adv-card alert-grip';

    textDiff.innerHTML = `
      <div class="ac-adv-grid">
        <div class="ac-adv-card alert-grip">
          <div class="ac-adv-card-title">${dtCard1Title}</div>
          <div>${dtCard1Desc}</div>
        </div>
        <div class="ac-adv-card alert-info">
          <div class="ac-adv-card-title">${dtCard2Title}</div>
          <div>${dtCard2Desc}</div>
        </div>
        <div class="${dtCard3Class}">
          <div class="ac-adv-card-title">${dtCard3Title}</div>
          <div>${dtCard3Desc}</div>
        </div>
      </div>
    `;
  }

  // 7. GENERIC / BRAKES ADVISOR
  const bb = Math.round(acSetupState.brakeBias || 70);
  const bp = Math.round(acSetupState.brakePower || 100);
  const tagGen = document.getElementById('acAdvTag_generic');
  const mapGen = document.getElementById('acAdvMap_generic');
  const textGen = document.getElementById('acAdvText_generic');

  if (tagGen) tagGen.textContent = isPl ? `💡 ASYSTENT DRIFTU: HAMULCE (${bb}% / ${bp}%)` : `💡 DRIFT ADVISOR: BRAKES (${bb}% / ${bp}%)`;
  if (mapGen) mapGen.textContent = isPl ? `CarX Map: Bias ${bb}% Przód • Siła ${bp}%` : `CarX Map: Bias ${bb}% Front • Power ${bp}%`;

  if (textGen) {
    const bCard1Title = isPl ? `🛑 BALANS HAMULCÓW: ${bb}% PRZÓD` : `🛑 BRAKE BIAS: ${bb}% FRONT`;
    const bCard1Desc = isPl ?
      `Mocne przesunięcie siły na przód (${bb}%) pozwala na technikę <strong>Left-Foot Braking</strong> (hamowanie lewą nogą w poślizgu) – dociąża przód i zacieśnia linię driftu bez dławienia tylnych kół napędowych.` :
      `Front bias (${bb}%) enables pro <strong>Left-Foot Braking</strong> mid-drift to tuck the nose towards apex clipping points without bogging down rear wheelspin.`;

    const bCard2Title = isPl ? `⚡ SIŁA HAMOWANIA: ${bp}%` : `⚡ BRAKE FORCE: ${bp}%`;
    const bCard2Desc = isPl ?
      `Pełna siła 100% gwarantuje natychmiastowe zblokowanie przednich kół i gwałtowny transfer masy przy inicjacji poślizgu flickem (Scandinavian Flick).` :
      `100% force ensures crisp front lockup for violent weight transfer when executing Scandinavian flicks into drift.`;

    textGen.innerHTML = `
      <div class="ac-adv-grid">
        <div class="ac-adv-card alert-info">
          <div class="ac-adv-card-title">${bCard1Title}</div>
          <div>${bCard1Desc}</div>
        </div>
        <div class="ac-adv-card alert-grip">
          <div class="ac-adv-card-title">${bCard2Title}</div>
          <div>${bCard2Desc}</div>
        </div>
      </div>
    `;
  }

  // 8. SUSPENSION ADVISOR (SEPARATED FRONT & REAR WITH DETAILED ARB, SPRINGS & RAKE)
  const arbF = Math.round(acSetupState.arbFront || 12000);
  const arbR = Math.round(acSetupState.arbRear || 4000);
  const wrLF = Math.round(acSetupState.wheelRateLF || 117);
  const wrLR = Math.round(acSetupState.wheelRateLR || 67);
  const hF = Math.round(acSetupState.heightLF || 60);
  const hR = Math.round(acSetupState.heightLR || 70);
  const rake = hR - hF;

  const tagSusp = document.getElementById('acAdvTag_suspension');
  const mapSusp = document.getElementById('acAdvMap_suspension');
  const textSusp = document.getElementById('acAdvText_suspension');

  if (tagSusp) tagSusp.textContent = isPl ? `💡 ASYSTENT DRIFTU: ZAWIESZENIE PRZÓD & TYŁ` : `💡 DRIFT ADVISOR: SUSPENSION FRONT & REAR`;
  if (mapSusp) mapSusp.textContent = isPl ? `CarX Map: ARB F:${arbF}/R:${arbR} • Sprężyny F:${wrLF}/R:${wrLR} • Rake:${rake}mm` : `CarX Map: ARB F:${arbF}/R:${arbR} • Springs F:${wrLF}/R:${wrLR} • Rake:${rake}mm`;

  if (textSusp) {
    // Front evaluation
    const frontArbDesc = arbF >= 10000 ?
      (isPl ?
        `🛡️ <strong>ARB Przód (${arbF} N/m - SZTYWNY)</strong>: Całkowicie niweluje przechył poprzeczny budy, dając natychmiastowe, ostre reagowanie przednich kół na ruchy kierownicą.` :
        `🛡️ <strong>Front ARB (${arbF} N/m - STIFF)</strong>: Completely suppresses body roll, delivering razor-sharp front steering response.`) :
      (isPl ?
        `🌊 <strong>ARB Przód (${arbF} N/m - MIĘKKI)</strong>: Większy przechył boczny dziobu, łagodniejsza reakcja na wejście w skręt.` :
        `🌊 <strong>Front ARB (${arbF} N/m - SOFT)</strong>: Gentle front bite with more compliant roll.`);

    // Rear evaluation
    let rearSuspClass = 'ac-adv-card alert-info';
    let rearArbDesc = '';
    if (arbR <= 5000) {
      rearSuspClass = 'ac-adv-card alert-grip';
      rearArbDesc = isPl ?
        `🔥 <strong>ARB Tył (${arbR} N/m - MIĘKKI &rarr; MAKSYMALNY KLEJ I TRAKCJA!)</strong>: Miękki stabilizator pozwala kołom tylnym niezależnie wybierać nierówności, dając maksymalną przyczepność boczną i potężne napędzanie w poślizgu.` :
        `🔥 <strong>Rear ARB (${arbR} N/m - SOFT &rarr; MAXIMUM GRIP & DRIVE!)</strong>: Soft rear bar permits independent wheel travel over kerbs, generating colossal lateral traction in drift.`;
    } else {
      rearSuspClass = 'ac-adv-card alert-slip';
      rearArbDesc = isPl ?
        `💨 <strong>ARB Tył (${arbR} N/m - SZTYWNY &rarr; ŁATWY POŚLIZG)</strong>: Tył łatwiej traci przyczepność przy mniejszej mocy, lecz ma mniejszą prędkość napędzania w łuku.` :
        `💨 <strong>Rear ARB (${arbR} N/m - STIFF &rarr; LOW GRIP)</strong>: Easier to break traction on lower horsepower, but yields slower corner exit velocity.`;
    }

    const sCard1Title = isPl ? `🛡️ PRZÓD: ARB ${arbF} N/m • SPRĘŻYNY ${wrLF} N/mm` : `🛡️ FRONT: ARB ${arbF} N/m • SPRINGS ${wrLF} N/mm`;
    const sCard1Desc = isPl ?
      `${frontArbDesc}<br><strong>Sprężyny (${wrLF} N/mm)</strong>: Sztywne przednie sprężyny utrzymują stałą geometrię pod dużym kątem skrętu.<br><strong>Prześwit (${hF} mm)</strong>: Obniżony środek ciężkości przedniej osi.` :
      `${frontArbDesc}<br><strong>Springs (${wrLF} N/mm)</strong>: Stiff front springs lock geometry under severe lateral load.<br><strong>Ride Height (${hF} mm)</strong>: Low front center of gravity.`;

    const sCard2Title = isPl ? `🏎️ TYŁ: ARB ${arbR} N/m • SPRĘŻYNY ${wrLR} N/mm` : `🏎️ REAR: ARB ${arbR} N/m • SPRINGS ${wrLR} N/mm`;
    const sCard2Desc = isPl ?
      `${rearArbDesc}<br><strong>Sprężyny (${wrLR} N/mm)</strong>: Miększe sprężyny tyłu wspomagają głęboki przysiad (squat), dając potężną trakcję pod pełnym gazem.<br><strong>Prześwit (${hR} mm)</strong>: Optymalna przestrzeń na skok tylnego zawieszenia.` :
      `${rearArbDesc}<br><strong>Springs (${wrLR} N/mm)</strong>: Compliant rear springs encourage squat to drive the car forward.<br><strong>Ride Height (${hR} mm)</strong>: Generous stroke travel for traction.`;

    const sCard3Title = isPl ? `📐 RAKE & BALANS PRZEŚWITU (${rake >= 0 ? '+' : ''}${rake} mm)` : `📐 RAKE & CHASSIS PITCH (${rake >= 0 ? '+' : ''}${rake} mm)`;
    const sCard3Desc = isPl ?
      `Pochylenie wzdłużne Rake wynosi <strong>${rake >= 0 ? '+' : ''}${rake} mm</strong> (Przód ${hF} mm / Tył ${hR} mm). Uniesiony tył dociąża przednią oś przy wejściu w poślizg, polepszając rotację i ułatwiając wejście w głęboki kąt driftu.` :
      `Forward chassis rake measures <strong>${rake >= 0 ? '+' : ''}${rake} mm</strong> (Front ${hF} mm / Rear ${hR} mm). Loading front tires on turn-in accelerates chassis rotation into deep drift angles.`;

    textSusp.innerHTML = `
      <div class="ac-adv-grid">
        <div class="ac-adv-card alert-info">
          <div class="ac-adv-card-title">${sCard1Title}</div>
          <div>${sCard1Desc}</div>
        </div>
        <div class="${rearSuspClass}">
          <div class="ac-adv-card-title">${sCard2Title}</div>
          <div>${sCard2Desc}</div>
        </div>
        <div class="ac-adv-card">
          <div class="ac-adv-card-title">${sCard3Title}</div>
          <div>${sCard3Desc}</div>
        </div>
      </div>
    `;
  }
}

function onAcSliderInput(paramName, valStr) {
  const spec = acParamSpecs[paramName];
  if (!spec) return;
  const [unit, step, min, max, isFloat] = spec;

  let val = isFloat ? parseFloat(valStr) : parseInt(valStr, 10);
  if (isNaN(val)) return;

  acSetupState[paramName] = val;
  const display = document.getElementById(`acVal_${paramName}`);
  if (display) {
    if (isFloat) {
      display.textContent = `${val.toFixed(paramName === 'finalRatio' ? 2 : 1)}${unit}`;
    } else {
      display.textContent = `${Math.round(val)}${unit}`;
    }
  }

  // Synchronize companion wheel on same axle (LF <-> RF, LR <-> RR)
  const paired = getAxlePairedParam(paramName);
  if (paired && acSetupState[paired] !== undefined) {
    acSetupState[paired] = val;
    updateAcUIParam(paired);
  }

  if (paramName.startsWith('pressure')) {
    updateWheelGraphicLabels();
  }

  if (paramName === 'finalRatio') {
    recalculateGearSpeeds();
    drawAcGearsChart();
  }
  updateAdvisorDynamicFeedback();
}

function recalculateGearSpeeds() {
  const baseFinal = 3.69;
  const ratio = baseFinal / (acSetupState.finalRatio || baseFinal);
  // Real S14 / Pro Drift 5-speed transmission base speeds at Final Drive 3.69:
  const baseSpeeds = [96, 130, 168, 199, 234];

  baseSpeeds.forEach((spd, idx) => {
    const newSpd = Math.round(spd * ratio);
    acSetupState.gears[idx] = newSpd;
    const td = document.getElementById(`acSpeedG${idx + 1}`);
    if (td) td.textContent = `${newSpd} km/h`;
  });
}

function drawAcGearsChart() {
  const canvas = document.getElementById('acGearsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // Background Grid
  ctx.fillStyle = '#060a12';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;

  // Horizontal RPM lines
  const rpmLines = [
    { rpm: 2000, y: h - 30 - (2000 / 7500) * (h - 50), lbl: "2k" },
    { rpm: 4000, y: h - 30 - (4000 / 7500) * (h - 50), lbl: "4k" },
    { rpm: 6000, y: h - 30 - (6000 / 7500) * (h - 50), lbl: "6k" },
    { rpm: 7200, y: h - 30 - (7200 / 7500) * (h - 50), lbl: "7.2k" }
  ];

  ctx.font = '10px Consolas, monospace';
  ctx.fillStyle = '#64748b';

  rpmLines.forEach(l => {
    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.moveTo(35, l.y);
    ctx.lineTo(w - 15, l.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillText(l.lbl, 8, l.y + 4);
  });

  // Vertical Speed lines
  const speeds = [50, 100, 150, 200];
  speeds.forEach(s => {
    const x = 35 + (s / 240) * (w - 55);
    ctx.beginPath();
    ctx.setLineDash([3, 3]);
    ctx.moveTo(x, 15);
    ctx.lineTo(x, h - 25);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillText(`${s}`, x - 8, h - 10);
  });

  // Gear Slopes (Authentic red lines from AC screenshot 1)
  const redlineY = rpmLines[3].y;
  const bottomY = h - 30;
  const originX = 35;

  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2.5;

  let prevTopX = originX;
  acSetupState.gears.forEach((topSpeed, i) => {
    const topX = 35 + (topSpeed / 240) * (w - 55);
    let startX = originX;
    let startY = bottomY;

    if (i > 0) {
      // In AC graph, next gear picks up from around 4.5k - 5k RPM
      startX = prevTopX;
      startY = h - 30 - (5000 / 7500) * (h - 50);

      // Draw dashed shift drop
      ctx.beginPath();
      ctx.setLineDash([2, 2]);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
      ctx.moveTo(prevTopX, redlineY);
      ctx.lineTo(prevTopX, startY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.strokeStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(topX, redlineY);
    ctx.stroke();

    // Gear label
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px Segoe UI, sans-serif';
    ctx.fillText(`G${i + 1}`, (startX + topX) / 2 - 8, (startY + redlineY) / 2 - 8);

    prevTopX = topX;
  });
}

function loadDefaultDriftSetup() {
  const photoDefaults = {
    finalRatio: 3.69,
    gears: [96, 130, 168, 199, 234],
    pressureLF: 21,
    pressureRF: 21,
    pressureLR: 17,
    pressureRR: 17,
    fuel: 12,
    camberLF: -5.0,
    camberRF: -5.0,
    toeLF: 40,
    toeRF: 40,
    toeLR: 40,
    toeRR: 40,
    camberLR: -0.9,
    camberRR: -0.9,
    dampBumpLF: 26, dampBumpRF: 26,
    dampFastBumpLF: 20, dampFastBumpRF: 20,
    dampReboundLF: 36, dampReboundRF: 36,
    dampFastReboundLF: 32, dampFastReboundRF: 32,
    dampBumpLR: 14, dampBumpRR: 14,
    dampFastBumpLR: 10, dampFastBumpRR: 10,
    dampReboundLR: 32, dampReboundRR: 32,
    dampFastReboundLR: 26, dampFastReboundRR: 26,
    diffPower: 100,
    diffCoast: 100,
    diffPreload: 0,
    brakeBias: 70,
    brakePower: 100,
    arbFront: 12000,
    wheelRateLF: 117, wheelRateRF: 117,
    heightLF: 60, heightRF: 60,
    wheelRateLR: 67, wheelRateRR: 67,
    heightLR: 70, heightRR: 70,
    arbRear: 4000
  };

  Object.assign(acSetupState, photoDefaults);
  Object.keys(acParamSpecs).forEach(updateAcUIParam);
  recalculateGearSpeeds();
  drawAcGearsChart();
  showToast("🚗 Załadowano bazowy profesjonalny setup driftowy!");
}
const resetToDefaultDriftSetup = loadDefaultDriftSetup;

function syncFromCarXAssist() {
  const genLock = parseFloat(document.getElementById('genLock')?.value || 65);
  const genKeep = parseInt(document.getElementById('genKeep')?.value || 45);
  const genIdle = parseInt(document.getElementById('genIdle')?.value || 80);

  // Map CarX Assist to AC Setup
  acSetupState.pressureLF = 21;
  acSetupState.pressureRF = 21;
  acSetupState.pressureLR = 17;
  acSetupState.pressureRR = 17;

  // Steering lock influences front camber
  acSetupState.camberLF = -(Math.min(6.0, 4.5 + (genLock - 50) * 0.05));
  acSetupState.camberRF = acSetupState.camberLF;

  // Inward keep influences ARB and Toe
  acSetupState.arbFront = Math.round(10000 + (genKeep * 50) / 500) * 500;
  acSetupState.brakeBias = 70;
  acSetupState.diffPower = 100;
  acSetupState.diffCoast = 100;

  Object.keys(acParamSpecs).forEach(updateAcUIParam);
  showToast("🔄 Zsynchronizowano parametry z asystą CarX!");
}

function copyIniPathToClipboard() {
  const path = "Documents\\Assetto Corsa\\setups\\";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(path).then(() => {
      showToast("📋 Skopiowano ścieżkę do folderu setupów: " + path);
    }).catch(() => {
      showToast("Ścieżka do setupów: Documents\\Assetto Corsa\\setups\\");
    });
  } else {
    showToast("Ścieżka do setupów: Documents\\Assetto Corsa\\setups\\");
  }
}

function triggerAcIniUpload() {
  const fileInput = document.getElementById('acIniFileInput');
  if (fileInput) fileInput.click();
}

function handleAcIniUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    processAnyUploadedFile(e.target.result, file.name);
  };
  reader.readAsText(file);
}

function parseAcIniSetup(iniText) {
  const lines = iniText.split(/\r?\n/);
  let currentSec = "";
  const iniMap = {};

  lines.forEach(line => {
    line = line.trim();
    if (line.startsWith("[") && line.endsWith("]")) {
      currentSec = line.substring(1, line.length - 1).toUpperCase();
    } else if (line.includes("=") && currentSec) {
      const parts = line.split("=");
      const key = parts[0].trim().toUpperCase();
      const val = parts[1].trim();
      if (key === "VALUE" || key === "MODEL") {
        iniMap[currentSec] = val;
      }
    }
  });

  // Map Car Model
  if (iniMap["CAR"]) {
    const carModel = iniMap["CAR"];
    acSetupState.carName = carModel;
    const titleEl = document.getElementById("acTelemCarTitle");
    if (titleEl) {
      titleEl.textContent = carModel.toUpperCase().replace(/_/g, " ");
    }
    const badgeEl = document.getElementById("acTelemBadge");
    if (badgeEl) {
      badgeEl.textContent = "Auto: " + carModel.replace(/_/g, " ");
    }
  }

  // Map INI to acSetupState
  if (iniMap["ARB_FRONT"]) acSetupState.arbFront = parseInt(iniMap["ARB_FRONT"], 10);
  if (iniMap["ARB_REAR"]) acSetupState.arbRear = parseInt(iniMap["ARB_REAR"], 10);
  if (iniMap["BRAKE_POWER_MULT"]) acSetupState.brakePower = parseInt(iniMap["BRAKE_POWER_MULT"], 10);
  if (iniMap["FRONT_BIAS"]) acSetupState.brakeBias = parseInt(iniMap["FRONT_BIAS"], 10);
  if (iniMap["DIFF_POWER"]) acSetupState.diffPower = parseInt(iniMap["DIFF_POWER"], 10);
  if (iniMap["DIFF_COAST"]) acSetupState.diffCoast = parseInt(iniMap["DIFF_COAST"], 10);
  if (iniMap["DIFF_PRELOAD"]) acSetupState.diffPreload = parseInt(iniMap["DIFF_PRELOAD"], 10);
  if (iniMap["FUEL"]) acSetupState.fuel = parseInt(iniMap["FUEL"], 10);

  // Camber in AC INI is often *10
  if (iniMap["CAMBER_LF"]) {
    let v = parseFloat(iniMap["CAMBER_LF"]);
    acSetupState.camberLF = v < -10 ? v / 10.0 : v;
  }
  if (iniMap["CAMBER_RF"]) {
    let v = parseFloat(iniMap["CAMBER_RF"]);
    acSetupState.camberRF = v < -10 ? v / 10.0 : v;
  }
  if (iniMap["CAMBER_LR"]) {
    let v = parseFloat(iniMap["CAMBER_LR"]);
    acSetupState.camberLR = v < -10 ? v / 10.0 : v;
  }
  if (iniMap["CAMBER_RR"]) {
    let v = parseFloat(iniMap["CAMBER_RR"]);
    acSetupState.camberRR = v < -10 ? v / 10.0 : v;
  }

  // Pressures in AC INI: 1:1 direct PSI match with Assetto Corsa
  if (iniMap["PRESSURE_LF"]) acSetupState.pressureLF = parseInt(iniMap["PRESSURE_LF"], 10);
  if (iniMap["PRESSURE_RF"]) acSetupState.pressureRF = parseInt(iniMap["PRESSURE_RF"], 10);
  if (iniMap["PRESSURE_LR"]) acSetupState.pressureLR = parseInt(iniMap["PRESSURE_LR"], 10);
  if (iniMap["PRESSURE_RR"]) acSetupState.pressureRR = parseInt(iniMap["PRESSURE_RR"], 10);

  // Springs & Heights
  if (iniMap["SPRING_RATE_LF"]) acSetupState.wheelRateLF = parseInt(iniMap["SPRING_RATE_LF"], 10);
  if (iniMap["SPRING_RATE_RF"]) acSetupState.wheelRateRF = parseInt(iniMap["SPRING_RATE_RF"], 10);
  if (iniMap["SPRING_RATE_LR"]) acSetupState.wheelRateLR = parseInt(iniMap["SPRING_RATE_LR"], 10);
  if (iniMap["SPRING_RATE_RR"]) acSetupState.wheelRateRR = parseInt(iniMap["SPRING_RATE_RR"], 10);
  if (iniMap["ROD_LENGTH_LF"]) acSetupState.heightLF = parseInt(iniMap["ROD_LENGTH_LF"], 10);
  if (iniMap["ROD_LENGTH_RF"]) acSetupState.heightRF = parseInt(iniMap["ROD_LENGTH_RF"], 10);
  if (iniMap["ROD_LENGTH_LR"]) acSetupState.heightLR = parseInt(iniMap["ROD_LENGTH_LR"], 10);
  if (iniMap["ROD_LENGTH_RR"]) acSetupState.heightRR = parseInt(iniMap["ROD_LENGTH_RR"], 10);

  // Dampers
  if (iniMap["DAMP_BUMP_LF"]) acSetupState.dampBumpLF = parseInt(iniMap["DAMP_BUMP_LF"], 10);
  if (iniMap["DAMP_BUMP_RF"]) acSetupState.dampBumpRF = parseInt(iniMap["DAMP_BUMP_RF"], 10);
  if (iniMap["DAMP_BUMP_LR"]) acSetupState.dampBumpLR = parseInt(iniMap["DAMP_BUMP_LR"], 10);
  if (iniMap["DAMP_BUMP_RR"]) acSetupState.dampBumpRR = parseInt(iniMap["DAMP_BUMP_RR"], 10);

  if (iniMap["DAMP_FAST_BUMP_LF"]) acSetupState.dampFastBumpLF = parseInt(iniMap["DAMP_FAST_BUMP_LF"], 10);
  if (iniMap["DAMP_FAST_BUMP_RF"]) acSetupState.dampFastBumpRF = parseInt(iniMap["DAMP_FAST_BUMP_RF"], 10);
  if (iniMap["DAMP_FAST_BUMP_LR"]) acSetupState.dampFastBumpLR = parseInt(iniMap["DAMP_FAST_BUMP_LR"], 10);
  if (iniMap["DAMP_FAST_BUMP_RR"]) acSetupState.dampFastBumpRR = parseInt(iniMap["DAMP_FAST_BUMP_RR"], 10);

  if (iniMap["DAMP_REBOUND_LF"]) acSetupState.dampReboundLF = parseInt(iniMap["DAMP_REBOUND_LF"], 10);
  if (iniMap["DAMP_REBOUND_RF"]) acSetupState.dampReboundRF = parseInt(iniMap["DAMP_REBOUND_RF"], 10);
  if (iniMap["DAMP_REBOUND_LR"]) acSetupState.dampReboundLR = parseInt(iniMap["DAMP_REBOUND_LR"], 10);
  if (iniMap["DAMP_REBOUND_RR"]) acSetupState.dampReboundRR = parseInt(iniMap["DAMP_REBOUND_RR"], 10);

  if (iniMap["DAMP_FAST_REBOUND_LF"]) acSetupState.dampFastReboundLF = parseInt(iniMap["DAMP_FAST_REBOUND_LF"], 10);
  if (iniMap["DAMP_FAST_REBOUND_RF"]) acSetupState.dampFastReboundRF = parseInt(iniMap["DAMP_FAST_REBOUND_RF"], 10);
  if (iniMap["DAMP_FAST_REBOUND_LR"]) acSetupState.dampFastReboundLR = parseInt(iniMap["DAMP_FAST_REBOUND_LR"], 10);
  if (iniMap["DAMP_FAST_REBOUND_RR"]) acSetupState.dampFastReboundRR = parseInt(iniMap["DAMP_FAST_REBOUND_RR"], 10);

  // Toe
  if (iniMap["TOE_OUT_LF"]) acSetupState.toeLF = parseInt(iniMap["TOE_OUT_LF"], 10);
  if (iniMap["TOE_OUT_RF"]) acSetupState.toeRF = parseInt(iniMap["TOE_OUT_RF"], 10);
  if (iniMap["TOE_OUT_LR"]) acSetupState.toeLR = parseInt(iniMap["TOE_OUT_LR"], 10);
  if (iniMap["TOE_OUT_RR"]) acSetupState.toeRR = parseInt(iniMap["TOE_OUT_RR"], 10);

  // Tyres compound index
  if (iniMap["TYRES"]) {
    const tIdx = parseInt(iniMap["TYRES"], 10);
    acSetupState.tyresSet = `Compound #${tIdx}`;
    const tEl = document.getElementById("acTyresSetName");
    if (tEl) tEl.textContent = `Compound #${tIdx} (Zestaw opon)`;
  }

  // Final Ratio: maps integer step index (20 -> 3.69, 24 -> 3.91) or direct float
  if (iniMap["FINAL_RATIO"]) {
    const rawVal = parseFloat(iniMap["FINAL_RATIO"]);
    if (rawVal > 1.0 && rawVal < 7.0 && !Number.isInteger(rawVal)) {
      acSetupState.finalRatio = parseFloat(rawVal.toFixed(2));
    } else {
      const idx = Math.round(rawVal);
      if (idx >= 0 && idx < acFinalRatiosTable.length) {
        acSetupState.finalRatio = acFinalRatiosTable[idx];
      } else {
        acSetupState.finalRatio = 3.69;
      }
    }
    const sl = document.getElementById("acSlider_finalRatio");
    if (sl) sl.value = acSetupState.finalRatio;
    const disp = document.getElementById("acVal_finalRatio");
    if (disp) disp.textContent = acSetupState.finalRatio.toFixed(2);
  }

  // Gears
  const iniGears = [iniMap["GEAR_1"], iniMap["GEAR_2"], iniMap["GEAR_3"], iniMap["GEAR_4"], iniMap["GEAR_5"]];
  let hasIniGears = false;
  iniGears.forEach((gVal, idx) => {
    if (gVal !== undefined) {
      hasIniGears = true;
      const gRatio = parseFloat(gVal);
      if (gRatio > 0.4 && gRatio < 5.0) {
        acSetupState.gears[idx] = Math.round(870.0 / (gRatio * acSetupState.finalRatio));
      }
    }
  });

  if (!hasIniGears) {
    recalculateGearSpeeds();
  }

  acSetupState.gears.forEach((spd, i) => {
    const td = document.getElementById(`acSpeedG${i + 1}`);
    if (td) td.textContent = `${spd} km/h`;
  });
  drawAcGearsChart();

  Object.keys(acParamSpecs).forEach(updateAcUIParam);
  updateAdvisorDynamicFeedback();
  showToast("📥 Wczytano i zaktualizowano setup z pliku last.ini!");
}

function downloadAcIniFile() {
  const iniContent = `[ARB_FRONT]
VALUE=${acSetupState.arbFront}

[ARB_REAR]
VALUE=${acSetupState.arbRear}

[BRAKE_POWER_MULT]
VALUE=${acSetupState.brakePower}

[CAMBER_LF]
VALUE=${Math.round(acSetupState.camberLF * 10)}

[CAMBER_LR]
VALUE=${Math.round(acSetupState.camberLR * 10)}

[CAMBER_RF]
VALUE=${Math.round(acSetupState.camberRF * 10)}

[CAMBER_RR]
VALUE=${Math.round(acSetupState.camberRR * 10)}

[CAR]
MODEL=${acSetupState.carName || "drift_car"}

[DAMP_BUMP_LF]
VALUE=${acSetupState.dampBumpLF}

[DAMP_BUMP_LR]
VALUE=${acSetupState.dampBumpLR}

[DAMP_BUMP_RF]
VALUE=${acSetupState.dampBumpRF}

[DAMP_BUMP_RR]
VALUE=${acSetupState.dampBumpRR}

[DAMP_FAST_BUMP_LF]
VALUE=${acSetupState.dampFastBumpLF}

[DAMP_FAST_BUMP_LR]
VALUE=${acSetupState.dampFastBumpLR}

[DAMP_FAST_BUMP_RF]
VALUE=${acSetupState.dampFastBumpRF}

[DAMP_FAST_BUMP_RR]
VALUE=${acSetupState.dampFastBumpRR}

[DAMP_FAST_REBOUND_LF]
VALUE=${acSetupState.dampFastReboundLF}

[DAMP_FAST_REBOUND_LR]
VALUE=${acSetupState.dampFastReboundLR}

[DAMP_FAST_REBOUND_RF]
VALUE=${acSetupState.dampFastReboundRF}

[DAMP_FAST_REBOUND_RR]
VALUE=${acSetupState.dampFastReboundRR}

[DAMP_REBOUND_LF]
VALUE=${acSetupState.dampReboundLF}

[DAMP_REBOUND_LR]
VALUE=${acSetupState.dampReboundLR}

[DAMP_REBOUND_RF]
VALUE=${acSetupState.dampReboundRF}

[DAMP_REBOUND_RR]
VALUE=${acSetupState.dampReboundRR}

[DIFF_COAST]
VALUE=${acSetupState.diffCoast}

[DIFF_POWER]
VALUE=${acSetupState.diffPower}

[DIFF_PRELOAD]
VALUE=${acSetupState.diffPreload}

[FINAL_RATIO]
VALUE=${getAcFinalRatioIndex(acSetupState.finalRatio || 3.69)}

[FRONT_BIAS]
VALUE=${acSetupState.brakeBias}

[FUEL]
VALUE=${acSetupState.fuel}

[PRESSURE_LF]
VALUE=${Math.round(acSetupState.pressureLF)}

[PRESSURE_LR]
VALUE=${Math.round(acSetupState.pressureLR)}

[PRESSURE_RF]
VALUE=${Math.round(acSetupState.pressureRF)}

[PRESSURE_RR]
VALUE=${Math.round(acSetupState.pressureRR)}

[ROD_LENGTH_LF]
VALUE=${acSetupState.heightLF}

[ROD_LENGTH_LR]
VALUE=${acSetupState.heightLR}

[ROD_LENGTH_RF]
VALUE=${acSetupState.heightRF}

[ROD_LENGTH_RR]
VALUE=${acSetupState.heightRR}

[SPRING_RATE_LF]
VALUE=${acSetupState.wheelRateLF}

[SPRING_RATE_LR]
VALUE=${acSetupState.wheelRateLR}

[SPRING_RATE_RF]
VALUE=${acSetupState.wheelRateRF}

[SPRING_RATE_RR]
VALUE=${acSetupState.wheelRateRR}

[TOE_OUT_LF]
VALUE=${acSetupState.toeLF}

[TOE_OUT_LR]
VALUE=${acSetupState.toeLR}

[TOE_OUT_RF]
VALUE=${acSetupState.toeRF}

[TOE_OUT_RR]
VALUE=${acSetupState.toeRR}

[TYRES]
VALUE=0
`;

  const blob = new Blob([iniContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'last.ini';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("💾 Pobrano plik last.ini do Assetto Corsa!");
}

function initAcGarage() {
  Object.keys(acParamSpecs).forEach(updateAcUIParam);
  recalculateGearSpeeds();
  updateAdvisorDynamicFeedback();
  updateAcWorkflowLang(currentLang);
  setTimeout(drawAcGearsChart, 100);
}
