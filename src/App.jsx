import React, { useState, useRef, useMemo, useEffect } from 'react';
import { 
  Mic, Square, Activity, ShieldCheck, Volume2, 
  Sparkles, MessageSquare, ShieldAlert, Info, 
  CheckCircle, ChevronRight, ChevronLeft, Waves, 
  Lock, AlertCircle, Zap, RefreshCcw, PlayCircle,
  Hand, Wind, Ear, Heart, Users, AudioLines, Star, Shield, 
  Mic2, VolumeX, Cpu, Check, ListChecks, Headphones, Database,
  Sliders, Volume1, Play, LayoutGrid, Wand2, TableProperties,
  BarChart3, Gauge, Type, Target, PowerOff, UserCheck
} from 'lucide-react';

// IMPORTAMOS LOS ESTILOS SEPARADOS DESDE TU NUEVO ARCHIVO
import { ESTILOS } from './styles';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const SONAR_PRESETS_DATABASE = {
  "Custom": [
    { p: 1, g: 0.0, f: 31, q: 0.707 }, { p: 2, g: 0.0, f: 62, q: 0.707 }, { p: 3, g: 0.0, f: 125, q: 0.707 }, { p: 4, g: 0.0, f: 250, q: 0.707 }, { p: 5, g: 0.0, f: 500, q: 0.707 },
    { p: 6, g: 0.0, f: 1000, q: 0.707 }, { p: 7, g: 0.0, f: 2000, q: 0.707 }, { p: 8, g: 0.0, f: 4000, q: 0.707 }, { p: 9, g: 0.0, f: 8000, q: 0.707 }, { p: 10, g: 0.0, f: 16000, q: 0.707 }
  ],
  "Alias - Boom Arm": [
    { p: 1, g: 0.0, f: 35, q: 0.707 }, { p: 2, g: 1.0, f: 125, q: 0.707 }, { p: 3, g: -1.0, f: 500, q: 0.707 }, { p: 4, g: -2.0, f: 1500, q: 0.707 }, { p: 5, g: -1.0, f: 400, q: 0.707 },
    { p: 6, g: 2.0, f: 8000, q: 1.000 }, { p: 7, g: -4.0, f: 11000, q: 0.707 }
  ],
  "Alias - Desk Stand": [
    { p: 1, g: 0.0, f: 40, q: 0.707 }, { p: 2, g: 4.0, f: 125, q: 0.707 }, { p: 3, g: 2.0, f: 200, q: 0.707 }, { p: 4, g: -1.0, f: 1000, q: 0.707 }, { p: 5, g: -0.5, f: 2000, q: 1.000 },
    { p: 6, g: 0.5, f: 6000, q: 0.707 }
  ],
  "Alias Pro - Boom Arm": [
    { p: 1, g: 0.0, f: 35, q: 0.707 }, { p: 2, g: -2.0, f: 500, q: 0.707 }, { p: 3, g: -2.0, f: 1500, q: 0.707 }, { p: 4, g: 2.0, f: 8000, q: 0.707 }, { p: 5, g: -4.0, f: 11000, q: 0.707 }
  ],
  "Alias Pro - Desk Stand": [
    { p: 1, g: 0.0, f: 40, q: 0.707 }, { p: 2, g: 3.0, f: 125, q: 0.707 }, { p: 3, g: 2.0, f: 200, q: 0.707 }, { p: 4, g: -1.0, f: 500, q: 0.707 }, { p: 5, g: -1.0, f: 1000, q: 0.707 },
    { p: 6, g: -0.5, f: 2000, q: 1.000 }, { p: 7, g: 1.0, f: 4000, q: 0.707 }, { p: 8, g: 0.5, f: 6000, q: 0.707 }
  ],
  "Balanced": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: 0.0, f: 62, q: 0.707 }, { p: 3, g: 0.0, f: 125, q: 0.707 }, { p: 4, g: -3.0, f: 250, q: 0.707 }, { p: 5, g: -2.0, f: 500, q: 0.707 },
    { p: 6, g: 0.0, f: 1000, q: 0.707 }, { p: 7, g: 2.0, f: 2000, q: 0.707 }, { p: 8, g: 3.0, f: 4000, q: 0.707 }, { p: 9, g: 1.0, f: 8000, q: 0.707 }, { p: 10, g: 0.0, f: 16000, q: 0.707 }
  ],
  "Broadcast High Pitch": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: -12.0, f: 62, q: 0.707 }, { p: 3, g: -3.0, f: 125, q: 0.707 }, { p: 4, g: 6.0, f: 250, q: 0.707 }, { p: 5, g: 3.0, f: 500, q: 0.707 },
    { p: 6, g: -2.5, f: 1000, q: 0.707 }, { p: 7, g: 0.0, f: 2000, q: 0.707 }, { p: 8, g: 3.0, f: 4000, q: 0.707 }, { p: 9, g: 4.0, f: 8000, q: 0.707 }, { p: 10, g: 4.0, f: 16000, q: 0.707 }
  ],
  "Broadcast Low Pitch": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: 2.0, f: 62, q: 0.707 }, { p: 3, g: 5.0, f: 125, q: 0.707 }, { p: 4, g: 2.0, f: 250, q: 0.707 }, { p: 5, g: -3.0, f: 500, q: 0.707 },
    { p: 6, g: -2.0, f: 1000, q: 0.707 }, { p: 7, g: 0.0, f: 2000, q: 0.707 }, { p: 8, g: 3.0, f: 4000, q: 0.707 }, { p: 9, g: 4.0, f: 8000, q: 0.707 }, { p: 10, g: 4.0, f: 16000, q: 0.707 }
  ],
  "Clarity High Pitch": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: -12.0, f: 62, q: 0.707 }, { p: 3, g: -4.0, f: 125, q: 0.707 }, { p: 4, g: -4.0, f: 250, q: 0.707 }, { p: 5, g: 0.0, f: 500, q: 0.707 },
    { p: 6, g: 3.0, f: 1000, q: 0.707 }, { p: 7, g: 3.0, f: 2000, q: 0.707 }, { p: 8, g: 4.0, f: 4000, q: 0.707 }, { p: 9, g: 4.0, f: 8000, q: 0.707 }, { p: 10, g: 4.0, f: 16000, q: 0.707 }
  ],
  "Clarity Low Pitch": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: -3.0, f: 62, q: 0.707 }, { p: 3, g: -2.5, f: 125, q: 0.707 }, { p: 4, g: 0.0, f: 250, q: 0.707 }, { p: 5, g: 0.0, f: 500, q: 0.707 },
    { p: 6, g: 0.0, f: 1000, q: 0.707 }, { p: 7, g: 3.0, f: 2000, q: 0.707 }, { p: 8, g: 4.0, f: 4000, q: 0.707 }, { p: 9, g: 4.0, f: 8000, q: 0.707 }, { p: 10, g: 4.0, f: 16000, q: 0.707 }
  ],
  "Deep Voice": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: 4.0, f: 62, q: 0.707 }, { p: 3, g: 4.0, f: 125, q: 0.707 }, { p: 4, g: 3.0, f: 250, q: 0.707 }, { p: 5, g: 0.0, f: 500, q: 0.707 },
    { p: 6, g: -3.0, f: 1000, q: 0.707 }, { p: 7, g: -1.0, f: 2000, q: 0.707 }, { p: 8, g: 0.0, f: 4000, q: 0.707 }, { p: 9, g: 0.0, f: 8000, q: 0.707 }, { p: 10, g: 0.0, f: 16000, q: 0.707 }
  ],
  "Flat": [
    { p: 1, g: 0.0, f: 31, q: 0.707 }, { p: 2, g: 0.0, f: 62, q: 0.707 }, { p: 3, g: 0.0, f: 125, q: 0.707 }, { p: 4, g: 0.0, f: 250, q: 0.707 }, { p: 5, g: 0.0, f: 500, q: 0.707 },
    { p: 6, g: 0.0, f: 1000, q: 0.707 }, { p: 7, g: 0.0, f: 2000, q: 0.707 }, { p: 8, g: 0.0, f: 4000, q: 0.707 }, { p: 9, g: 0.0, f: 8000, q: 0.707 }, { p: 10, g: 0.0, f: 16000, q: 0.707 }
  ],
  "Less Nasal": [
    { p: 1, g: -12.0, f: 31, q: 0.707 }, { p: 2, g: 0.0, f: 62, q: 0.707 }, { p: 3, g: 0.0, f: 125, q: 0.707 }, { p: 4, g: 0.0, f: 250, q: 0.707 }, { p: 5, g: -2.0, f: 500, q: 0.707 },
    { p: 6, g: -4.0, f: 1000, q: 0.707 }, { p: 7, g: -2.0, f: 2000, q: 0.707 }, { p: 8, g: -2.0, f: 4000, q: 0.707 }, { p: 9, g: 4.0, f: 8000, q: 0.707 }, { p: 10, g: 0.0, f: 16000, q: 0.707 }
  ],
  "Walkie Talkie": [
    { p: 1, g: -12.0, f: 100, q: 0.707 }, { p: 2, g: -12.0, f: 250, q: 0.707 }, { p: 3, g: -12.0, f: 125, q: 0.707 }, { p: 4, g: -12.0, f: 250, q: 0.707 }, { p: 5, g: 5.0, f: 500, q: 0.707 },
    { p: 6, g: 6.0, f: 1000, q: 0.707 }, { p: 7, g: 6.0, f: 2000, q: 0.707 }, { p: 8, g: 5.0, f: 4000, q: 0.707 }, { p: 9, g: -12.0, f: 8000, q: 0.707 }, { p: 10, g: -12.0, f: 16000, q: 0.707 }
  ],
  "VOOVMEETING": [
    { p: 1, g: -12.0, f: 80, q: 0.707 }, { p: 2, g: -5.0, f: 150, q: 0.707 }, { p: 3, g: 0.0, f: 300, q: 0.707 }, { p: 4, g: 2.0, f: 1000, q: 0.707 }, { p: 5, g: 3.0, f: 2000, q: 0.707 },
    { p: 6, g: 4.5, f: 3500, q: 0.707 }, { p: 7, g: 5.0, f: 5000, q: 0.707 }, { p: 8, g: 3.0, f: 8000, q: 0.707 }, { p: 9, g: 2.0, f: 12000, q: 0.707 }, { p: 10, g: 1.0, f: 16000, q: 0.707 }
  ]
};

const BANDS = [
  { name: "SUB BASS", range: [20, 60] }, { name: "BASS", range: [60, 250] }, { name: "LOW MIDS", range: [250, 500] },
  { name: "MID RANGE", range: [500, 2000] }, { name: "UPPER MIDS", range: [2000, 4000] }, { name: "HIGHS", range: [4000, 20000] }
];

const POINT_COLORS = ['#a855f7', '#6366f1', '#ec4899', '#ef4444', '#f97316', '#eab308', '#84cc16', '#06b6d4', '#3b82f6', '#2563eb'];

const SonarFidelityGraph = ({ points, activePoint, onPointHover }) => {
  const width = 1000, height = 320, minFreq = 20, maxFreq = 20000, maxGain = 12;
  const fToX = (f) => (Math.log10(Math.max(f, minFreq)) - Math.log10(minFreq)) / (Math.log10(maxFreq) - Math.log10(minFreq)) * width;
  const gToY = (g) => (height / 2) - (g / maxGain) * (height / 2.5);

  const curvePath = useMemo(() => {
    if (!points || points.length === 0) return "";
    let path = `M 0 ${gToY(0)}`;
    for (let i = 0; i <= 400; i++) {
      const x = (i / 400) * width;
      const f = Math.pow(10, Math.log10(minFreq) + (i / 400) * (Math.log10(maxFreq) - Math.log10(minFreq)));
      let totalGain = 0;
      points.forEach(p => {
        totalGain += p.g * Math.exp(-Math.pow(Math.abs(Math.log10(f) - Math.log10(p.f)) / (0.12 / p.q), 2));
      });
      path += ` L ${x} ${gToY(totalGain)}`;
    }
    return path;
  }, [points]);

  return (
    <div className={ESTILOS.graph.wrapper}>
      <div className={ESTILOS.graph.header}>
        {BANDS.map((band, i) => (
          <div key={i} className={ESTILOS.graph.bandBox}>
            <span className={ESTILOS.graph.bandLabel}>{band.name}</span>
          </div>
        ))}
      </div>
      <div className={ESTILOS.graph.svgWrapper}>
        <svg viewBox={`0 -20 ${width} ${height + 60}`} className="w-full h-auto overflow-visible select-none">
          {[12, 6, 0, -6, -12].map(g => (
            <React.Fragment key={g}>
              <line x1="0" y1={gToY(g)} x2={width} y2={gToY(g)} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <text x="-15" y={gToY(g)} fill="#4a4b59" fontSize="11" textAnchor="end" dominantBaseline="middle" fontWeight="600">{g}dB</text>
            </React.Fragment>
          ))}
          {[20, 100, 500, 1000, 5000, 10000, 20000].map(f => (
            <text key={f} x={fToX(f)} y={height + 30} fill="#4a4b59" fontSize="11" textAnchor="middle" fontWeight="600">{f >= 1000 ? `${f/1000}k` : f}Hz</text>
          ))}
          <path d={curvePath} fill="none" stroke="#1ae1af" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(26,225,175,0.3)]" />
          {points?.map((p, idx) => {
            const x = fToX(p.f), y = gToY(p.g);
            return (
              <g key={idx} onMouseEnter={() => onPointHover(idx)} onMouseLeave={() => onPointHover(null)} className="cursor-pointer">
                <circle cx={x} cy={y} r={activePoint === idx ? "10" : "7"} fill={POINT_COLORS[idx % POINT_COLORS.length]} stroke="#0d0f14" strokeWidth="2" />
                <text x={x} y={y} fill="white" fontSize="8" fontWeight="900" textAnchor="middle" dominantBaseline="middle" pointerEvents="none">{idx + 1}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

const App = () => {
  const [step, setStep] = useState('setup');
  const [apiError, setApiError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [currentPara, setCurrentPara] = useState(0);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [base64Audio, setBase64Audio] = useState(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [graphView, setGraphView] = useState('official');
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioContextRef = useRef(null);
  const volBarRef = useRef(null);
  const mimeTypeRef = useRef('audio/webm');

  const script = [
    { title: "FASE 1: CUERPO VOCAL", text: "Bajo el brillo de la luna, el bosque bramaba con un murmullo profundo.", instruction: "Capturando armónicos graves para el tono natural." },
    { title: "FASE 2: DICCIÓN (ATAQUES)", text: "Tres tristes tigres tragaban trigo en un trigal. En un trigal, tres tristes tigres tragaban trigo.", instruction: "Analizando la precisión de consonantes oclusivas." },
    { title: "FASE 3: SIBILANCIA (S/SH)", text: "Sesenta sombras silenciosas se deslizan sobre el suelo sin cesar.", instruction: "Calibrando el control de agudos y seseos." },
    { title: "FASE 4: CLARIDAD CRISTALINA", text: "La exuberante vegetación de la isla ofrecía una vista magnífica y extraordinaria.", instruction: "Detectando frecuencias turbias en medios." },
    { title: "FASE 5: DINÁMICA HUMANA", text: "(Susurro) Empiezo muy bajo... (Normal) subo el tono gradualmente... (Fuerte) ¡Y TERMINO CON ENERGÍA!", instruction: "Midiendo consistencia (Compresión OFF)." },
    { title: "FASE 6: AISLAMIENTO", text: "(Quédate en silencio absoluto 3 segundos mientras tecleas o haces ruido).", instruction: "Midiendo ruido para Noise Gate AUTO." },
    { title: "FASE 7: CONTEXTO EJECUTIVO", text: "En nuestra reunión de hoy, revisaremos los objetivos estratégicos para el próximo trimestre.", instruction: "Validación final de dicción y fluidez profesional." }
  ];

  const initMic = async () => {
    try { await navigator.mediaDevices.getUserMedia({ audio: true }); setStep('instructions'); } 
    catch (err) { alert("Acceso al micrófono denegado."); }
  };

  const startRecording = async () => {
    setApiError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      const analyser = audioContextRef.current.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const updateVisualizer = () => {
        analyser.getByteFrequencyData(dataArray);
        const currentMax = Math.max(...dataArray);
        if (volBarRef.current) volBarRef.current.style.height = `${(currentMax / 255) * 100}%`;
        if (isRecording) requestAnimationFrame(updateVisualizer);
      };
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = e => audioChunksRef.current.push(e.data);
      mediaRecorderRef.current.onstop = () => {
        const reader = new FileReader();
        const rawMime = mediaRecorderRef.current.mimeType || 'audio/webm';
        const cleanMime = rawMime.split(';')[0] || 'audio/webm';
        mimeTypeRef.current = cleanMime;
        reader.readAsDataURL(new Blob(audioChunksRef.current, { type: cleanMime }));
        reader.onloadend = () => setBase64Audio(reader.result.split(',')[1]);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      updateVisualizer();
    } catch (err) { console.error(err); }
  };

  const stopAndAnalyze = () => { if (mediaRecorderRef.current && isRecording) { mediaRecorderRef.current.stop(); setIsRecording(false); } };

  // =====================================================================
  // LA MAGIA ARREGLADA: NUNCA MÁS ERRORES 503, 404 O PAYLOAD NOT DEFINED
  // =====================================================================
const runAnalysis = async () => {
    if (!base64Audio) return;
    setLoading(true);
    setStep('analysis');
    setApiError(null);

    const systemPrompt = `Eres un ingeniero senior de audio de SteelSeries. Analiza este test de 7 fases. RESTRICCIONES TÉCNICAS: 1. COMPRESIÓN: Apagada (OFF). 2. NOISE GATE: Encendida en modo AUTOMÁTICO. 3. DATOS REALES CARGADOS: ${JSON.stringify(SONAR_PRESETS_DATABASE)} FILOSOFÍA DE AISLAMIENTO REAL (MÍNIMO 50%): - El aislamiento EFECTIVO en coworking empieza al 50%. - RANGO DE RECOMENDACIÓN: 50% a 85% máximo. IMPORTANTE SOBRE CUSTOMPOINTS: 'customPoints' debe ser el mismo array de ecualización del 'suggestedPreset' elegido (basado en los 14 perfiles), pero con los valores de ganancia ('g') modificados sutilmente por la IA para perfeccionar esta voz específica. JSON FORMAT: { "suggestedPreset": "Nombre oficial exacto", "customPoints": [{"p": 1, "g": 2.0, "f": 125, "q": 0.707}, ...], "scores": {"diction": 80, "fluidity": 75, "clarity": 70}, "suggestedClearCast": 50, "customClearCast": 65, "pureIaClearCast": 75, "smartVolume": "Medium", "sonarAdvice": "...", "personalTip": "..." }`;
    
    // 1. EL PAYLOAD SE MANTIENE INTACTO
    const payload = {
      contents: [{ role: "user", parts: [
        { text: "Realiza la auditoría vocal." },
        { inlineData: { mimeType: mimeTypeRef.current, data: base64Audio } }
      ]}],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: { responseMimeType: "application/json" }
    };

    // 2. MODELOS CON SOPORTE DE AUDIO (inlineData)
    // gemini-2.0-flash está DEPRECATED — usamos 2.5-flash y 2.5-flash-lite
    const models = ["gemini-2.5-flash", "gemini-2.5-flash-lite"];
    let success = false;
    let parsedData = null;

    for (const modelName of models) {
      if (success) break;

      // CRÍTICO: Audio inlineData SOLO funciona en /v1beta/ (no en /v1/)
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

      try {
        console.log(`Conectando con ${modelName} en v1beta...`);
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          const errText = await res.text();
          console.warn(`${modelName} falló (Error ${res.status}): ${errText}. Intentando el siguiente...`);
          continue; 
        }

        const data = await res.json();
        
        if (data.candidates && data.candidates[0].content.parts[0].text) {
          const textResponse = data.candidates[0].content.parts[0].text;
          const cleanJson = textResponse.replace(/```json|```/g, "").trim();
          parsedData = JSON.parse(cleanJson);
          success = true;
        }
      } catch (err) {
        console.error(`Error de red con ${modelName}:`, err);
      }
    }

    // 4. MANEJO DE RESULTADOS
    if (success && parsedData) {
      setAnalysis(parsedData);
      setStep('results');
    } else {
      // Si todo falla, mostramos el error detallado
      setApiError("Error al conectar con la API de Gemini. Verifica que tu API Key sea válida y tenga permisos. Si el error persiste, intenta en unos minutos.");
      setStep('recording');
    }
    
    setLoading(false);
  };

  const restart = () => { setBase64Audio(null); setAnalysis(null); setStep('setup'); setCurrentPara(0); };

  const currentPoints = useMemo(() => {
    if (!analysis) return [];
    if (graphView === 'pure-ia') return SONAR_PRESETS_DATABASE["Flat"] || SONAR_PRESETS_DATABASE["Custom"];
    return graphView === 'official' 
      ? (SONAR_PRESETS_DATABASE[String(analysis.suggestedPreset)] || SONAR_PRESETS_DATABASE["Custom"]) 
      : (analysis.customPoints || []);
  }, [analysis, graphView]);

  const currentClearCast = useMemo(() => {
    if (!analysis) return 0;
    if (graphView === 'official') return analysis.suggestedClearCast;
    if (graphView === 'tailor-made') return analysis.customClearCast;
    return analysis.pureIaClearCast;
  }, [analysis, graphView]);

  return (
    <div className={ESTILOS.layout.app}>
      
      <header className={ESTILOS.layout.header}>
        <div className="flex items-center gap-6">
          <div className={ESTILOS.icon.logo}>
            <AudioLines className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className={ESTILOS.text.logoTitle}>SONAR</h1>
            <span className={ESTILOS.text.logoSub}>Entrenador Pro</span>
          </div>
        </div>
        {isRecording && (
          <div className={ESTILOS.alerts.live}>
            <div className={ESTILOS.alerts.liveDot} />
            <span className={ESTILOS.alerts.liveText}>Live</span>
          </div>
        )}
      </header>

      <main className={ESTILOS.layout.main}>
        
        {step === 'setup' && (
          <div className={ESTILOS.layout.stepCenter}>
            <h2 className={ESTILOS.text.titleHuge}>Voz Maestra</h2>
            <p className={ESTILOS.text.subtitleDesc}>Auditoría con IA para optimización de dicción y aislamiento de ruido.</p>
            <div className="pt-6 flex justify-center w-full">
              <button onClick={initMic} className={ESTILOS.buttons.calibrate}>
                Calibrar
              </button>
            </div>
          </div>
        )}

        {step === 'instructions' && (
          <div className={ESTILOS.layout.stepWide}>
            <div className="text-center space-y-4">
              <h2 className={ESTILOS.text.titleLarge}>Protocolo</h2>
              <p className={ESTILOS.text.subtitleSmall}>Preparando entorno de estudio.</p>
            </div>
            <div className={ESTILOS.layout.grid3}>
              {[
                { icon: <ShieldCheck className="w-10 h-10"/>, title: "Aislamiento", desc: "Mínimo 50% IA." },
                { icon: <Activity className="w-10 h-10"/>, title: "Fluidez", desc: "Sin compresión." },
                { icon: <UserCheck className="w-10 h-10"/>, title: "Fidelidad", desc: "Modo natural." }
              ].map((item, i) => (
                <div key={i} className={ESTILOS.cards.base}>
                  <div className={ESTILOS.icon.indigo}>{item.icon}</div>
                  <h4 className={ESTILOS.text.cardTitle}>{item.title}</h4>
                  <p className={ESTILOS.text.cardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button onClick={() => setStep('pre_test')} className={ESTILOS.buttons.white}>
                Confirmar <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {step === 'pre_test' && (
          <div className={ESTILOS.layout.stepWide}>
            <div className="text-center space-y-4">
              <h2 className={ESTILOS.text.titleLarge}>Ajuste Físico</h2>
              <p className={ESTILOS.text.subtitleSmall}>Reglas de oro para asegurar la captura perfecta.</p>
            </div>
            <div className={ESTILOS.layout.grid3}>
              <div className={ESTILOS.cards.base}>
                <div className={ESTILOS.icon.indigo}><Mic2 className="w-10 h-10"/></div>
                <h4 className={ESTILOS.text.cardTitle}>Distancia Ideal</h4>
                <p className={ESTILOS.text.cardDesc}>Mantén ~15 cm de separación (un puño) entre tu boca y el micrófono.</p>
              </div>
              <div className={ESTILOS.cards.base}>
                <div className={ESTILOS.icon.amber}><Hand className="w-10 h-10"/></div>
                <h4 className={ESTILOS.text.cardTitle}>Cero Contacto</h4>
                <p className={ESTILOS.text.cardDesc}>Evita golpear la mesa, el brazo articulado o tocar el micrófono.</p>
              </div>
              <div className={ESTILOS.cards.base}>
                <div className={ESTILOS.icon.emerald}><Volume2 className="w-10 h-10"/></div>
                <h4 className={ESTILOS.text.cardTitle}>Proyección</h4>
                <p className={ESTILOS.text.cardDesc}>Habla con naturalidad, utilizando el volumen de una reunión real.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={() => setStep('recording')} className={ESTILOS.buttons.white}>
                Entendido <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {step === 'recording' && (
          <div className={ESTILOS.layout.stepFull}>
            {apiError && (
              <div className={ESTILOS.alerts.error}>
                <AlertCircle className="w-6 h-6" />
                {apiError}
              </div>
            )}
            <div className={ESTILOS.glass.panel}>
              <div className={ESTILOS.layout.phases}>
                {script.map((_, i) => (
                  <div key={i} className={i === currentPara ? ESTILOS.phases.active : ESTILOS.phases.inactive} />
                ))}
              </div>
              <div className="space-y-8">
                <span className={ESTILOS.badges.outline}>{script[currentPara].title}</span>
                <p className={ESTILOS.text.reading}>"{script[currentPara].text}"</p>
                <div className={ESTILOS.text.instruction}><Zap className="w-5 h-5 text-indigo-500" /> {script[currentPara].instruction}</div>
              </div>
              <div className="mt-16 flex justify-center">
                {!isRecording
                  ? <button onClick={startRecording} className={ESTILOS.buttons.primary}>
                      Iniciar Test
                    </button>
                  : <div className={ESTILOS.layout.controls}>
                      <button onClick={() => setCurrentPara(p => Math.max(0, p - 1))} disabled={currentPara === 0} className={ESTILOS.buttons.iconBack}>
                        <ChevronLeft className="w-8 h-8 text-white" />
                      </button>
                      {currentPara < script.length - 1
                        ? <button onClick={() => setCurrentPara(p => p + 1)} className={ESTILOS.buttons.whiteNext}>
                            Siguiente Fase
                          </button>
                        : <button onClick={stopAndAnalyze} className={ESTILOS.buttons.danger}>
                            Terminar
                          </button>
                      }
                    </div>
                }
              </div>
            </div>
            {base64Audio && !isRecording && (
              <div className="flex justify-center">
                <button onClick={runAnalysis} className={ESTILOS.buttons.process}>
                  Procesar Perfil <Sparkles className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        )}

        {step === 'analysis' && (
          <div className={ESTILOS.layout.loading}>
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className={ESTILOS.loading.ring} />
              <Activity className="w-16 h-16 text-indigo-500 animate-pulse relative z-10" />
            </div>
            <h2 className={ESTILOS.text.loading}>
              Analizando...
            </h2>
          </div>
        )}

        {step === 'results' && analysis && (
          <div className={ESTILOS.layout.results}>
            <div className={ESTILOS.layout.grid3}>
              {[
                { label: "Dicción", val: analysis.scores.diction, icon: <Type className="w-8 h-8"/>, color: "text-emerald-400", bg: "bg-emerald-400", shadow: "shadow-emerald-500/50" },
                { label: "Fluidez", val: analysis.scores.fluidity, icon: <Activity className="w-8 h-8"/>, color: "text-indigo-400", bg: "bg-indigo-400", shadow: "shadow-indigo-500/50" },
                { label: "Claridad", val: analysis.scores.clarity, icon: <Sparkles className="w-8 h-8"/>, color: "text-sky-400", bg: "bg-sky-400", shadow: "shadow-sky-500/50" }
              ].map((m, i) => (
                <div key={i} className={ESTILOS.metrics.box}>
                  <div className={`${m.color} ${ESTILOS.metrics.iconBox}`}>{m.icon}</div>
                  <span className={ESTILOS.metrics.label}>{m.label}</span>
                  <div className={ESTILOS.metrics.value}>{m.val}%</div>
                  <div className={ESTILOS.metrics.barTrack}>
                    <div 
                      className={`${ESTILOS.metrics.barFill} ${m.bg} ${m.shadow}`} 
                      style={{width: `calc(${m.val || 0}% - 8px)`}}>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={ESTILOS.glass.panelGraph}>
              <div className={ESTILOS.layout.graphControls}>
                <div className="text-center w-full px-2">
                  <div className={ESTILOS.badges.success}><CheckCircle className="w-4 h-4" /> Optimizado</div>
                  <h2 className={ESTILOS.text.graphTitle}>
                    {graphView === 'pure-ia' ? "Voz Natural" : String(analysis.suggestedPreset)}
                  </h2>
                </div>
                
                <div className="flex justify-center w-full mt-4 mb-8">
                  <div className={ESTILOS.tabs.container}>
                    {[{ id: 'official', icon: <Database />, label: 'Preset' }, { id: 'tailor-made', icon: <Wand2 />, label: 'Ajuste' }, { id: 'pure-ia', icon: <UserCheck />, label: 'Voz Natural' }].map(tab => (
                      <button 
                        key={tab.id} 
                        onClick={() => setGraphView(tab.id)} 
                        className={graphView === tab.id ? ESTILOS.tabs.active : ESTILOS.tabs.inactive}
                      >
                        {tab.icon} <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <SonarFidelityGraph points={currentPoints} activePoint={hoveredPoint} onPointHover={setHoveredPoint} />

              <div className={ESTILOS.layout.eqGrid}>
                {currentPoints.map((p, i) => (
                  <div key={i} className={`${ESTILOS.eq.box} ${graphView === 'pure-ia' ? ESTILOS.eq.boxDimmed : ESTILOS.eq.boxActive}`}>
                    <div className={ESTILOS.eq.header}>
                      <span className={ESTILOS.eq.pointLabel}>P{i+1}</span>
                      <span className={ESTILOS.eq.qLabel}>Q{p.q}</span>
                    </div>
                    <div className={ESTILOS.eq.dbValue}>
                      {p.g > 0 ? `+${p.g.toFixed(1)}` : p.g.toFixed(1)}
                      <span className={ESTILOS.eq.dbUnit}>dB</span>
                    </div>
                    <div className={ESTILOS.eq.hzValue}>
                      {p.f >= 1000 ? (p.f/1000).toFixed(1)+'kHz' : p.f+'Hz'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={ESTILOS.layout.grid2}>
              <div className={ESTILOS.glass.panelFeedback}>
                <h4 className={ESTILOS.text.panelHeader}><MessageSquare className="w-7 h-7"/> Feedback</h4>
                <p className={ESTILOS.text.feedback}>"{analysis.sonarAdvice}"</p>
                <div className={ESTILOS.layout.detail}>
                  <p className={ESTILOS.text.detailLabel}><Heart className="w-5 h-5 text-indigo-500" /> Detalle:</p>
                  <p className={ESTILOS.text.detailBox}>"{analysis.personalTip}"</p>
                </div>
              </div>

              <div className={ESTILOS.glass.panelModulos}>
                <div className={ESTILOS.layout.moduloRow}>
                  <h4 className={ESTILOS.text.moduloTitle}>Módulos AI Activos</h4>
                  <div className={ESTILOS.layout.moduloBadges}>
                    <div className={ESTILOS.badges.off}>Comp: OFF</div>
                    <div className={ESTILOS.badges.on}>Gate: AUTO</div>
                  </div>
                </div>
                
                <div className={ESTILOS.layout.power}>
                  <div className={ESTILOS.layout.powerHeader}>
                    <div className="flex flex-col">
                      <span className={ESTILOS.text.powerLabel}>ClearCast AI</span>
                      <span className={ESTILOS.text.powerValue}>{currentClearCast}%</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={ESTILOS.text.rangeLabel}>Rango Sugerido</span>
                      <span className={ESTILOS.text.rangeValue}>
                        {graphView === 'pure-ia' ? "45% - 80%" : "50% - 85%"}
                      </span>
                    </div>
                  </div>
                  <div className={ESTILOS.metrics.powerTrack}>
                    <div className={ESTILOS.metrics.powerFill} style={{width: `calc(${currentClearCast || 0}% - 8px)`}}></div>
                  </div>
                  <p className={ESTILOS.text.powerDesc}>
                    {graphView === 'pure-ia' ? "45% mín fondo / 80% máx armonía" : "Supresión quirúrgica recomendada"}
                  </p>
                </div>

                <div className="flex justify-center mt-8">
                  <button onClick={restart} className={ESTILOS.buttons.restart}>
                    Reiniciar Calibración
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className={ESTILOS.layout.footer}>
        <span className={ESTILOS.text.footerText}>SteelSeries Engine • 2026 Edition</span>
      </footer>
    </div>
  );
};

export default App;