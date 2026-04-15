export const ESTILOS = {
  // 1. ESTRUCTURA Y FONDOS
  layout: {
    app: "min-h-screen bg-[#02040a] text-slate-200 font-sans selection:bg-indigo-500/30 flex flex-col items-center overflow-x-hidden",
    header: "w-full max-w-[90rem] px-8 py-14 flex items-center justify-between border-b border-white/5 shrink-0",
    main: "flex-grow w-full max-w-6xl flex flex-col items-center justify-center px-6 py-12",
    footer: "w-full max-w-[90rem] px-8 py-10 border-t border-white/5 shrink-0 opacity-40 text-center",
    
    // Contenedores de Vistas
    stepCenter: "text-center space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 w-full flex flex-col items-center",
    stepWide: "max-w-5xl space-y-16 animate-in fade-in duration-700 w-full",
    stepFull: "w-full space-y-10 animate-in fade-in duration-500",
    loading: "flex flex-col items-center justify-center space-y-16 text-center w-full min-h-[50vh]",
    results: "w-full space-y-16 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000",
    
    // Grids Internos
    grid3: "grid grid-cols-1 md:grid-cols-3 gap-8",
    grid2: "grid grid-cols-1 lg:grid-cols-2 gap-10",
    eqGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mt-16",
    phases: "flex justify-center gap-3 mb-12",
    controls: "flex flex-wrap gap-6 justify-center items-center",
    graphControls: "flex flex-col items-center justify-center gap-8 mb-12 w-full",
    detail: "mt-8 pt-8 border-t border-white/5",
    moduloRow: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6",
    moduloBadges: "flex flex-wrap gap-4",
    power: "space-y-8 flex-grow flex flex-col justify-center",
    powerHeader: "flex flex-wrap justify-between items-end gap-4"
  },

  // 2. TEXTOS Y TIPOGRAFÍA
  text: {
    logoTitle: "text-4xl md:text-5xl font-black tracking-tight text-white uppercase italic leading-none mb-2",
    logoSub: "text-slate-500 font-bold text-xs tracking-[0.3em] uppercase",
    titleHuge: "text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none",
    titleLarge: "text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none",
    subtitleDesc: "text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed",
    subtitleSmall: "text-slate-400 text-lg",
    cardTitle: "font-black text-base md:text-lg text-white uppercase tracking-wider",
    cardDesc: "text-sm text-slate-300 font-medium leading-relaxed",
    reading: "text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white italic drop-shadow-2xl px-4",
    instruction: "flex items-center justify-center gap-3 text-sm font-bold text-slate-500 italic pt-2",
    loading: "text-4xl md:text-5xl font-black text-white italic uppercase tracking-[0.4em] animate-pulse leading-none drop-shadow-2xl",
    graphTitle: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-white leading-tight break-words max-w-full",
    panelHeader: "text-xs font-black text-indigo-400 uppercase tracking-[0.3em] flex items-center gap-4 italic leading-none",
    feedback: "text-xl md:text-2xl text-white font-medium leading-relaxed italic opacity-95 flex-grow overflow-y-auto max-h-[300px] pr-2",
    detailLabel: "text-xs text-slate-500 uppercase font-black tracking-widest mb-4 italic flex items-center gap-3 leading-none",
    detailBox: "text-sm text-slate-300 font-bold bg-black/40 p-8 rounded-[2rem] border border-white/5 italic leading-relaxed shadow-inner",
    moduloTitle: "text-xs font-black text-slate-500 uppercase tracking-widest italic",
    powerLabel: "text-xs font-black text-indigo-400 uppercase tracking-widest italic mb-2 leading-none",
    powerValue: "text-7xl md:text-8xl font-black text-white tracking-tighter leading-none",
    rangeLabel: "text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1",
    rangeValue: "text-sm font-bold text-emerald-400 italic",
    powerDesc: "text-xs text-slate-400 font-bold text-center uppercase tracking-widest italic pt-2",
    footerText: "text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 leading-none"
  },

// 3. BOTONES INTERACTIVOS (ESTILO WIDE: ALARGADOS HACIA LOS LADOS)
  buttons: {
   calibrate: "mt-10 inline-flex items-center justify-center px-32 py-5 min-h-[64px] min-w-[320px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base font-bold tracking-widest uppercase rounded-2xl shadow-2xl hover:scale-[1.03] transition-all duration-300",
    white: "inline-flex items-center justify-center px-24 py-5 min-h-[60px] min-w-[280px] bg-white text-black font-bold rounded-2xl gap-3 hover:bg-slate-100 transition-all uppercase tracking-wider text-sm shadow-xl hover:scale-[1.02] duration-300",
    
    primary: "inline-flex items-center justify-center px-40 py-5 min-h-[64px] min-w-[380px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all text-base tracking-widest uppercase italic hover:scale-[1.03] duration-300",
    
    iconBack: "p-5 min-h-[62px] min-w-[70px] flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 disabled:opacity-10 hover:bg-white/10 transition-all hover:scale-[1.02] duration-300",
    
    whiteNext: "inline-flex items-center justify-center px-32 py-5 min-h-[62px] min-w-[320px] bg-white text-indigo-600 font-bold rounded-2xl text-base tracking-widest uppercase shadow-xl hover:bg-slate-50 hover:scale-[1.02] duration-300 border border-indigo-100",
    
    danger: "inline-flex items-center justify-center px-32 py-5 min-h-[62px] min-w-[320px] bg-red-600/90 text-white font-bold rounded-2xl text-base tracking-widest uppercase shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:bg-red-500 hover:scale-[1.02] transition-all duration-300",
    
    // CORRECCIÓN: mt-10 para separar PROCESAR PERFIL de INICIAR TEST.
    // rounded-[2rem] para diferenciarlo aún más y gap-4 para separar icono de texto.
    process: "mt-10 inline-flex items-center justify-center px-44 py-6 min-h-[74px] min-w-[420px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-black rounded-2xl shadow-[0_0_50px_rgba(79,70,229,0.4)] text-xl tracking-widest uppercase hover:scale-[1.03] transition-all duration-300 gap-4 italic",
    
    restart: "inline-flex items-center justify-center px-24 py-5 min-h-[60px] min-w-[280px] bg-transparent text-slate-400 font-bold rounded-2xl border border-slate-800 uppercase tracking-widest text-sm transition-all italic mt-10 hover:bg-white/5 hover:text-white hover:scale-[1.02] duration-300"
  },

  // 4. ICONOS Y COLORES RÁPIDOS
  icon: {
    logo: "p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/20",
    indigo: "text-indigo-400",
    amber: "text-amber-400",
    emerald: "text-emerald-400",
  },

  // 5. CAJAS Y EFECTOS GLASSMORPHISM
  cards: {
    base: "p-10 md:p-12 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-6 text-center flex flex-col items-center",
  },
  glass: {
    panel: "w-full bg-[#0b0e14]/60 border border-white/5 rounded-[4rem] px-10 pt-16 pb-24 md:px-20 md:pt-20 md:pb-32 text-center relative shadow-2xl overflow-hidden backdrop-blur-2xl",
    panelGraph: "bg-[#0b0e14]/60 rounded-[4rem] border border-white/5 shadow-2xl p-8 md:p-12 lg:p-16 backdrop-blur-3xl w-full",
    panelFeedback: "bg-[#0b0e14]/60 p-12 md:p-16 rounded-[4rem] border border-white/5 flex flex-col gap-8 shadow-2xl backdrop-blur-3xl min-h-[400px]",
    panelModulos: "bg-[#0b0e14]/60 p-12 md:p-16 rounded-[4rem] border border-white/5 flex flex-col gap-8 shadow-2xl backdrop-blur-3xl min-h-[400px] justify-between",
  },

  // 6. MÉTRICAS Y BARRAS
  metrics: {
    box: "bg-white/5 p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center gap-5 relative overflow-hidden",
    iconBox: "bg-black/40 p-5 rounded-[1.5rem] relative z-10",
    label: "text-xs font-black text-slate-400 uppercase tracking-widest leading-none relative z-10",
    value: "text-7xl font-black italic text-white leading-none mb-2 relative z-10",
    barTrack: "w-full bg-slate-800/80 h-6 rounded-full overflow-hidden mt-2 border border-white/5 p-1 shadow-inner relative z-10",
    barFill: "absolute top-1 left-1 bottom-1 rounded-full transition-all duration-[2000ms] ease-out shadow-[0_0_15px]",
    powerTrack: "w-full bg-slate-800/80 h-6 rounded-full border border-white/5 p-1 overflow-hidden shadow-inner relative",
    powerFill: "absolute top-1 left-1 bottom-1 bg-indigo-600 rounded-full transition-all duration-[2000ms] shadow-[0_0_20px_rgba(79,70,229,0.5)]"
  },

  // 7. PUNTOS DE ECUALIZACIÓN
  eq: {
    box: "p-8 md:p-10 rounded-[2.5rem] border transition-all flex flex-col justify-center items-center text-center",
    boxActive: "bg-white/[0.03] border-white/10 hover:border-white/20",
    boxDimmed: "opacity-20",
    header: "flex justify-between items-center w-full mb-6",
    pointLabel: "text-base font-black text-slate-500 uppercase leading-none",
    qLabel: "text-xs font-black text-indigo-400 italic bg-indigo-500/10 px-3 py-1.5 rounded-lg leading-none",
    dbValue: "text-5xl md:text-6xl font-black text-white italic leading-none mb-4",
    dbUnit: "text-base not-italic ml-1.5 opacity-50 text-slate-500 font-bold",
    hzValue: "text-sm md:text-base font-black text-slate-400 uppercase tracking-widest italic leading-none mt-2"
  },

  // 8. ETIQUETAS Y BADGES
  badges: {
    outline: "inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] italic leading-none",
    success: "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 text-emerald-400 text-sm font-black uppercase tracking-[0.2em] italic mb-8 shadow-lg backdrop-blur-md",
    off: "px-5 py-2.5 bg-white/5 rounded-xl text-xs font-black text-slate-300 uppercase italic border border-white/5",
    on: "px-5 py-2.5 bg-emerald-500/10 rounded-xl text-xs font-black text-emerald-400 uppercase italic border border-emerald-500/20"
  },
  phases: {
    active: "h-1.5 w-10 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] rounded-full transition-all duration-700",
    inactive: "h-1.5 w-3 bg-white/10 rounded-full transition-all duration-700"
  },
  alerts: {
    error: "flex items-center justify-center gap-3 p-5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-[2rem] text-sm font-bold animate-in fade-in slide-in-from-top-4 shadow-xl",
    live: "flex items-center gap-3 bg-red-500/10 px-5 py-2.5 rounded-full border border-red-500/20 animate-pulse",
    liveDot: "w-2.5 h-2.5 bg-red-500 rounded-full",
    liveText: "text-xs font-bold text-red-500 uppercase tracking-widest italic leading-none"
  },

 tabs: {
    // p-1.5 es el "muro" que separa el botón del borde gris. 
    container: "bg-[#0a0d14] p-1.5 rounded-full border border-zinc-800 shadow-2xl grid grid-cols-3 gap-1 mx-auto mt-8 mb-10 max-w-[500px] w-full",
    
    // rounded-full OBLIGA a que el botón sea una píldora. whitespace-nowrap evita que el ícono y texto se desalineen.
    base: "w-full py-3.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap",
    
    // Le volvemos a inyectar rounded-full al activo por si Tailwind lo pierde en el renderizado
    active: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)]",
    
    // Y también al inactivo
    inactive: "text-zinc-500 hover:text-white hover:bg-white/5 rounded-full"
  },

  // 10. GRÁFICO SVG
  graph: {
    wrapper: "relative w-full bg-[#0d0f14]/60 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl overflow-hidden font-sans mb-8 mt-4",
    header: "flex border-b border-white/5 bg-white/5",
    bandBox: "flex-1 text-center py-3 border-r border-white/5 last:border-0",
    bandLabel: "text-[10px] font-bold text-slate-500 tracking-widest uppercase",
    svgWrapper: "p-8 relative"
  },
  
  // 11. SPINNER DE CARGA
  loading: {
    ring: "absolute inset-0 border-[10px] border-white/5 border-t-indigo-500 rounded-full animate-spin"
  }
};