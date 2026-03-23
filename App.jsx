import { useState, useEffect, useRef } from "react";

// ========== APP LANGUAGES ==========
const appLangs=[{code:"hi",name:"हिन्दी",flag:"🇮🇳"},{code:"en",name:"English",flag:"🇬🇧"},{code:"es",name:"Español",flag:"🇪🇸"},{code:"fr",name:"Français",flag:"🇫🇷"},{code:"de",name:"Deutsch",flag:"🇩🇪"},{code:"pt",name:"Português",flag:"🇧🇷"},{code:"ru",name:"Русский",flag:"🇷🇺"},{code:"zh",name:"中文",flag:"🇨🇳"},{code:"ja",name:"日本語",flag:"🇯🇵"},{code:"ko",name:"한국어",flag:"🇰🇷"},{code:"ar",name:"العربية",flag:"🇸🇦"},{code:"tr",name:"Türkçe",flag:"🇹🇷"},{code:"it",name:"Italiano",flag:"🇮🇹"},{code:"nl",name:"Nederlands",flag:"🇳🇱"},{code:"pl",name:"Polski",flag:"🇵🇱"},{code:"th",name:"ไทย",flag:"🇹🇭"},{code:"vi",name:"Tiếng Việt",flag:"🇻🇳"},{code:"id",name:"Bahasa Indonesia",flag:"🇮🇩"},{code:"sv",name:"Svenska",flag:"🇸🇪"},{code:"uk",name:"Українська",flag:"🇺🇦"}];

// ========== TRANSLATIONS ==========
const TR={
hi:{nav1:"Kaise Kaam Karta Hai",nav2:"Khaasiyat",nav3:"Kimat",nav4:"Live Baat",navCta:"Shuru Karo",badge:"AI Awaaz Dubbing — Chalu Hai",h1:"Kisi Bhi Video Ko",h2:"Wahi Awaaz Mein",h3:"Badlo",desc:"Video daalo, bhasha chuno, bas! AI awaaz nakal karke dub de dega.",cta:"Abhi Chalao 🚀",demo:"▶ Demo",sV:"Video Dub",sL:"Bhashaayein",sA:"Sahi",howL:"Tarika",howT:"4 Kadam ✨",s1t:"Video Daalo",s1d:"Koi bhi video",s2t:"Awaaz Pakdo",s2d:"AI samajh lega",s3t:"Bhasha Chuno",s3d:"Koi bhi bhasha",s4t:"Wahi Awaaz",s4d:"Nakal karke taiyaar!",appT:"🎬 Video Daalo",appP:"⚡ Kaam Ho Raha...",appD:"🎉 Taiyaar!",upT:"Kheench ke laao ya click karo",upF:"MP4,MKV,AVI — 500MB",rem:"Hatao ✕",srcL:"📹 Video Bhasha",srcA:"🔍 Apne Aap",dubL:"🔊 Dub Bhasha?",dubS:"Dhoondho...",dubC:"bhashaayein!",capL:"💬 Caption?",capS:"Dhoondho...",capH:"Zyaada chuno!",clr:"Hatao",noR:"Nahi mila",stL:"🎯 Hindi Style?",oV:"Awaaz Nakal",oS:"Likhawat",oL:"Honth",trB:"🚀 Badlo!",trW:"Pehle Video",pD:"Done",pA:"Chal raha...",pW:"Ruko",pPc:"ho gaya",dbing:"dub ho raha",dbed:"dub hua!",capR:"Captions:",resP:"Taiyaar",dlB:"⬇ Utaaro",nwB:"🔄 Naya",fL:"Khaasiyat",fT:"Sab Ek Jagah 🔥",f1t:"Awaaz Nakal",f1d:"Hoo-ba-hoo copy",f2t:"Jhatpat",f2d:"2-3 min mein",f3t:"Honth Match",f3d:"Sahi se hilte",f4t:"Sab Format",f4d:"MP4,MKV,AVI",f5t:"Likhawat",f5d:"Auto subtitle",f6t:"Safe",f6d:"100% safe",rL:"Raay",rT:"Log Bolte Hai 💬",r1:"Hindi videos English mein viral!",r2:"5 bhasha — 10 guna views!",r3:"Gaon gaon tak padhai!",ctaT:"Taiyaar? 🚀",ctaD:"Pehli video muft!",ctaB:"Shuru Karo!",foot:"❤️ se banaya",setT:"⚙️ Settings",setLang:"🌐 Bhasha",setTh:"🎨 Theme",setWall:"🖼️ Background",setClose:"Band ✕",dark:"Dark",light:"Light",
  priceT:"Kimat 💎",free:"Muft",pro:"Pro",ent:"Business",mo:"/mahina",freePr:"₹0",proPr:"₹499",entPr:"₹1999",freeF:["5 video/mahina","LuxTTS (Open Source)","2 bhasha caption","Watermark"],proF:["50 video/mahina","ElevenLabs + LuxTTS","Sab bhasha caption","No watermark","Hindi styles","Priority support"],entF:["Unlimited video","Sab premium features","API access","Custom voice training","Dedicated support","White label"],freeCta:"Muft Shuru Karo",proCta:"Pro Lelo",entCta:"Contact Karo",popular:"Sabse Popular",
  liveT:"🎙️ Live Baat-Cheet",liveD:"Do log apni apni bhasha mein baat karo — AI real-time translate karega!",liveStart:"Call Shuru Karo 📞",liveYou:"Tum",liveOther:"Saamne Wala",liveListen:"Sun raha hai...",liveSpeaking:"Bol raha hai...",liveReady:"Bolne ke liye button dabao",liveTip:"Dono apni bhasha mein bolo — AI dusri bhasha mein translate karke sunaayega!",
  luxT:"🧪 LuxTTS Lab",luxD:"Open source voice cloning — FREE mein test karo!",luxInput:"Text likho jo bolna hai...",luxGen:"Awaaz Banao 🔊",luxClone:"Voice Clone Karo 🎙️",luxSpeed:"150x Speed",luxQuality:"48kHz Audio",luxFree:"100% Muft",luxSize:"1GB VRAM",
  linkT:"📎 Video Link Paste Karo",linkPh:"YouTube, Instagram, Facebook ya Twitter link paste karo...",linkFetch:"🔗 Video Lao!",linkFetching:"⏳ Video aa raha hai...",linkDone:"✅ Video mil gaya!",linkErr:"❌ Link galat hai, dobara check karo",uploadMode:"📁 File Upload",linkMode:"🔗 Link Paste",
  consentTitle:"⚖️ Copyright Confirmation",consent1:"Ye meri video hai ya mujhe dubbing ki permission hai",consent2:"Main samajhta hoon ki bina permission kisi ki video dub karna galat hai",consentAgree:"Main agree karta hoon",
  watermark:"Powered by VoxDub™",
  legalT:"⚖️ Legal & Copyright",legalD:"VoxDub copyright ka poora dhyan rakhta hai. Hum kisi ki bhi video bina permission dub karne ki ijazat nahi dete.",dmcaT:"🛡️ DMCA Takedown",dmcaD:"Agar aapki video bina permission dub ki gayi hai toh hum turant hata denge.",dmcaEmail:"legal@voxdub.com",dmcaSteps:["Apni video ka link bhejo","Proof do ki ye aapki video hai","24-48 ghante mein hata denge"],termsT:"📋 Terms of Service",privacyT:"🔒 Privacy Policy",
},
en:{nav1:"How It Works",nav2:"Features",nav3:"Pricing",nav4:"Live Talk",navCta:"Start Free",badge:"AI Voice Dubbing — Live",h1:"Translate Any Video",h2:"Same Voice",h3:"Any Language",desc:"Upload, pick language, done! AI clones voice perfectly.",cta:"Try Free! 🚀",demo:"▶ Demo",sV:"Dubbed",sL:"Languages",sA:"Accuracy",howL:"Process",howT:"4 Steps ✨",s1t:"Upload",s1d:"Any video",s2t:"Detect",s2d:"AI understands",s3t:"Pick",s3d:"Any language",s4t:"Same Voice",s4d:"Original voice!",appT:"🎬 Upload",appP:"⚡ Processing...",appD:"🎉 Ready!",upT:"Drag or click",upF:"MP4,MKV,AVI — 500MB",rem:"Remove ✕",srcL:"📹 Source",srcA:"🔍 Auto",dubL:"🔊 Dub To?",dubS:"Search...",dubC:"languages!",capL:"💬 Captions?",capS:"Search...",capH:"Pick multiple!",clr:"Clear",noR:"Not found",stL:"🎯 Hindi Style?",oV:"Voice Clone",oS:"Subtitles",oL:"Lip Sync",trB:"🚀 Translate!",trW:"Upload First",pD:"Done",pA:"Working...",pW:"Wait",pPc:"complete",dbing:"dubbing...",dbed:"dubbed!",capR:"Captions:",resP:"Preview",dlB:"⬇ Download",nwB:"🔄 New",fL:"Features",fT:"All In One 🔥",f1t:"Voice Clone",f1d:"Perfect copy",f2t:"Fast",f2d:"2-3 min",f3t:"Lip Sync",f3d:"Perfect match",f4t:"All Formats",f4d:"Any format",f5t:"Subtitles",f5d:"Auto generated",f6t:"Private",f6d:"100% secure",rL:"Reviews",rT:"What They Say 💬",r1:"Hindi videos viral in English!",r2:"5 languages — 10x views!",r3:"Edu videos everywhere!",ctaT:"Ready? 🚀",ctaD:"First video free!",ctaB:"Start Free!",foot:"Made with ❤️",setT:"⚙️ Settings",setLang:"🌐 Language",setTh:"🎨 Theme",setWall:"🖼️ Background",setClose:"Close ✕",dark:"Dark",light:"Light",
  priceT:"Pricing 💎",free:"Free",pro:"Pro",ent:"Business",mo:"/month",freePr:"$0",proPr:"$9",entPr:"$29",freeF:["5 videos/month","LuxTTS (Open Source)","2 caption languages","Watermark"],proF:["50 videos/month","ElevenLabs + LuxTTS","All caption languages","No watermark","Hindi styles","Priority support"],entF:["Unlimited videos","All premium features","API access","Custom voice training","Dedicated support","White label"],freeCta:"Start Free",proCta:"Go Pro",entCta:"Contact Us",popular:"Most Popular",
  liveT:"🎙️ Live Translation",liveD:"Two people talk in their own language — AI translates in real-time!",liveStart:"Start Call 📞",liveYou:"You",liveOther:"Other Person",liveListen:"Listening...",liveSpeaking:"Speaking...",liveReady:"Press button to speak",liveTip:"Both speak your own language — AI translates to the other's language!",
  luxT:"🧪 LuxTTS Lab",luxD:"Open source voice cloning — test for FREE!",luxInput:"Type text to speak...",luxGen:"Generate Voice 🔊",luxClone:"Clone Voice 🎙️",luxSpeed:"150x Speed",luxQuality:"48kHz Audio",luxFree:"100% Free",luxSize:"1GB VRAM",
  linkT:"📎 Paste Video Link",linkPh:"Paste YouTube, Instagram, Facebook or Twitter link...",linkFetch:"🔗 Fetch Video!",linkFetching:"⏳ Fetching video...",linkDone:"✅ Video found!",linkErr:"❌ Invalid link, please check",uploadMode:"📁 File Upload",linkMode:"🔗 Paste Link",
  consentTitle:"⚖️ Copyright Confirmation",consent1:"This is my video or I have permission to dub it",consent2:"I understand dubbing without permission is not allowed",consentAgree:"I Agree",
  watermark:"Powered by VoxDub™",
  legalT:"⚖️ Legal & Copyright",legalD:"VoxDub respects copyright. We don't allow dubbing without owner's permission.",dmcaT:"🛡️ DMCA Takedown",dmcaD:"If your video was dubbed without permission, we'll remove it immediately.",dmcaEmail:"legal@voxdub.com",dmcaSteps:["Send us the video link","Provide proof of ownership","We'll remove within 24-48 hours"],termsT:"📋 Terms of Service",privacyT:"🔒 Privacy Policy",
}};
const gt=c=>TR[c]||TR.en;

// DUB LANGUAGES
const langs=[{code:"hi",name:"Hindi",flag:"🇮🇳"},{code:"en",name:"English",flag:"🇬🇧"},{code:"es",name:"Spanish",flag:"🇪🇸"},{code:"fr",name:"French",flag:"🇫🇷"},{code:"de",name:"German",flag:"🇩🇪"},{code:"it",name:"Italian",flag:"🇮🇹"},{code:"pt",name:"Portuguese",flag:"🇧🇷"},{code:"ru",name:"Russian",flag:"🇷🇺"},{code:"zh",name:"Chinese",flag:"🇨🇳"},{code:"ja",name:"Japanese",flag:"🇯🇵"},{code:"ko",name:"Korean",flag:"🇰🇷"},{code:"ar",name:"Arabic",flag:"🇸🇦"},{code:"tr",name:"Turkish",flag:"🇹🇷"},{code:"th",name:"Thai",flag:"🇹🇭"},{code:"vi",name:"Vietnamese",flag:"🇻🇳"},{code:"id",name:"Indonesian",flag:"🇮🇩"},{code:"gu",name:"Gujarati",flag:"🇮🇳"},{code:"mr",name:"Marathi",flag:"🇮🇳"},{code:"bn",name:"Bengali",flag:"🇮🇳"},{code:"ta",name:"Tamil",flag:"🇮🇳"},{code:"te",name:"Telugu",flag:"🇮🇳"},{code:"pa",name:"Punjabi",flag:"🇮🇳"},{code:"ur",name:"Urdu",flag:"🇵🇰"},{code:"sw",name:"Swahili",flag:"🇰🇪"},{code:"af",name:"Afrikaans",flag:"🇿🇦"},{code:"nl",name:"Dutch",flag:"🇳🇱"},{code:"sv",name:"Swedish",flag:"🇸🇪"},{code:"pl",name:"Polish",flag:"🇵🇱"}];

const hindiStyles=[{id:"desi",name:"🗣️ Desi",desc:"Seedhi baat",ex:"Bhai sun, aise nahi hoga.",color:"#ff891a"},{id:"formal",name:"📚 Shudh",desc:"Kitaabi",ex:"Kripya dhyan dein.",color:"#818cf8"},{id:"hinglish",name:"🔀 Hinglish",desc:"Mix",ex:"Bro, pehle think kar.",color:"#22d3ee"},{id:"tapori",name:"😎 Tapori",desc:"Mumbaiya",ex:"Ae bidu, chalega nai.",color:"#f472b6"}];
const styleLangs=["hi","gu","pa","mr","bn","ta","te"];
const wallpapers=[{id:"none",name:"Default",bg:""},{id:"g1",name:"🌅 Sunset",bg:"linear-gradient(135deg,#1a0a2e,#2d1b4e,#1a0a2e)"},{id:"g2",name:"🌊 Ocean",bg:"linear-gradient(135deg,#0a1628,#0d2137,#0a1628)"},{id:"g3",name:"🌿 Forest",bg:"linear-gradient(135deg,#0a1a0a,#132613,#0a1a0a)"},{id:"g4",name:"🔥 Lava",bg:"linear-gradient(135deg,#1a0a0a,#2d1010,#1a0a0a)"},{id:"g5",name:"💜 Purple",bg:"linear-gradient(135deg,#0f0a1a,#1a1030,#0f0a1a)"},{id:"g6",name:"🌌 Galaxy",bg:"linear-gradient(135deg,#050510,#0a0a20,#100520)"}];

// STAR LOGO COMPONENT
const StarLogo = ({size=48}) => (
  <div style={{position:"relative",width:size,height:size}}>
    <div style={{position:"absolute",inset:0,borderRadius:size*.25,background:"linear-gradient(135deg,#0a1a3a,#0d2557,#1a3a6a)",overflow:"hidden",boxShadow:"0 4px 20px #0a1a3a80"}}>
      {Array.from({length:20}).map((_,i)=><div key={i} style={{position:"absolute",width:Math.random()*3+1,height:Math.random()*3+1,borderRadius:"50%",background:"white",opacity:Math.random()*.8+.2,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animation:`twinkle ${Math.random()*3+2}s ease infinite ${Math.random()*2}s`}} />)}
    </div>
    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:size*.45,fontWeight:900,color:"white",fontFamily:"'DM Sans',sans-serif",textShadow:"0 2px 10px #ff4d2060",zIndex:2}}>V</div>
    <div style={{position:"absolute",bottom:size*.1,left:"50%",transform:"translateX(-50%)",width:size*.5,height:size*.25,opacity:.15,zIndex:1}}>
      <svg viewBox="0 0 50 25" width="100%" height="100%"><path d="M25 2 C25 2 22 8 22 12 L22 15 L15 15 L15 22 L35 22 L35 15 L28 15 L28 12 C28 8 25 2 25 2Z" fill="white"/><ellipse cx="25" cy="3" rx="4" ry="4" fill="white"/></svg>
    </div>
  </div>
);

// ========== MAIN COMPONENT ==========
export default function VoxDubApp() {
  const [intro,setIntro]=useState(true);
  const [iP,setIP]=useState(0);
  const [appLang,setAppLang]=useState("hi");
  const [theme,setTheme]=useState("dark");
  const [wall,setWall]=useState("none");
  const [showSet,setShowSet]=useState(false);
  const [tab,setTab]=useState("dub"); // dub | live | luxtts
  const [selFile,setSelFile]=useState(null);
  const [srcLang,setSrcLang]=useState("auto");
  const [tgtLang,setTgtLang]=useState("hi");
  const [capLangs,setCapLangs]=useState(["hi"]);
  const [hStyle,setHStyle]=useState("desi");
  const [drag,setDrag]=useState(false);
  const [proc,setProc]=useState(false);
  const [prog,setProg]=useState(0);
  const [cStep,setCStep]=useState(0);
  const [result,setResult]=useState(false);
  const [aT,setAT]=useState(0);
  const [sY,setSY]=useState(0);
  const [aS,setAS]=useState("");
  const [cS,setCS]=useState("");
  const [showAD,setShowAD]=useState(false);
  const [showCD,setShowCD]=useState(false);
  const [mob,setMob]=useState(false);
  // Live states
  const [liveLang1,setLiveLang1]=useState("hi");
  const [liveLang2,setLiveLang2]=useState("en");
  const [liveActive,setLiveActive]=useState(false);
  const [liveSpeaker,setLiveSpeaker]=useState(0);
  const [liveMessages,setLiveMessages]=useState([]);
  // LuxTTS states
  const [luxText,setLuxText]=useState("");
  const [luxGen,setLuxGen]=useState(false);
  const [luxDone,setLuxDone]=useState(false);
  const [luxVoice,setLuxVoice]=useState("default");
  // Link paste states
  const [upMode,setUpMode]=useState("file"); // file | link
  const [videoUrl,setVideoUrl]=useState("");
  const [linkStatus,setLinkStatus]=useState(""); // "" | fetching | done | error
  const [linkPlatform,setLinkPlatform]=useState("");
  // Legal states
  const [consent,setConsent]=useState(false);
  const [showLegal,setShowLegal]=useState(false);
  // API result states
  const [resultData,setResultData]=useState(null);
  const [luxAudioUrl,setLuxAudioUrl]=useState("");

  const fRef=useRef(null);const adRef=useRef(null);const cdRef=useRef(null);
  const t=gt(appLang);
  const isL=theme==="light";
  const wp=wallpapers.find(w=>w.id===wall);
  const bg=isL?"#f5f3f0":(wp?.bg||"#06060a");
  const fg=isL?"#1a1a1a":"#e8e6e3";
  const fg2=isL?"#666":"#ffffff60";
  const fg3=isL?"#999":"#ffffff35";
  const cardBg=isL?"#ffffff":"#ffffff08";
  const cardBd=isL?"#e8e4e0":"#ffffff10";
  const inBg=isL?"#f0ede8":"#ffffff08";
  const inBd=isL?"#d8d4d0":"#ffffff15";

  useEffect(()=>{const ts=[setTimeout(()=>setIP(1),300),setTimeout(()=>setIP(2),1200),setTimeout(()=>setIP(3),2200),setTimeout(()=>setIP(4),3000),setTimeout(()=>setIntro(false),3800)];return()=>ts.forEach(clearTimeout);},[]);
  useEffect(()=>{const iv=setInterval(()=>setAT(p=>(p+1)%3),4000);return()=>clearInterval(iv);},[]);
  useEffect(()=>{const h=()=>setSY(window.scrollY);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  useEffect(()=>{const h=e=>{if(adRef.current&&!adRef.current.contains(e.target))setShowAD(false);if(cdRef.current&&!cdRef.current.contains(e.target))setShowCD(false);};document.addEventListener("mousedown",h);return()=>document.removeEventListener("mousedown",h);},[]);

  const togCap=c=>setCapLangs(p=>p.includes(c)?p.filter(x=>x!==c):[...p,c]);
  const fA=langs.filter(l=>l.name.toLowerCase().includes(aS.toLowerCase()));
  const fC=langs.filter(l=>l.name.toLowerCase().includes(cS.toLowerCase()));
  const reset=()=>{setSelFile(null);setProc(false);setProg(0);setResult(false);setCStep(0);setVideoUrl("");setLinkStatus("");setConsent(false);setResultData(null);};

  // ===== BACKEND API URL =====
  // Railway pe deploy karne ke baad ye URL badalna hai
  // Jaise: https://voxdub-backend.up.railway.app
  const API = "https://voxdub-backend.up.railway.app";

  // Detect platform from URL
  const detectPlatform=(url)=>{
    if(url.includes("youtube.com")||url.includes("youtu.be")) return "youtube";
    if(url.includes("instagram.com")) return "instagram";
    if(url.includes("facebook.com")||url.includes("fb.watch")) return "facebook";
    if(url.includes("twitter.com")||url.includes("x.com")) return "twitter";
    return "";
  };
  const platformInfo={youtube:{icon:"▶",name:"YouTube",color:"#ff0000"},instagram:{icon:"📸",name:"Instagram",color:"#e1306c"},facebook:{icon:"👤",name:"Facebook",color:"#1877f2"},twitter:{icon:"𝕏",name:"Twitter/X",color:"#1da1f2"}};

  // ===== REAL API: Fetch video from link =====
  const fetchVideoFromLink=async()=>{
    if(!videoUrl) return;
    const plat=detectPlatform(videoUrl);
    if(!plat){setLinkStatus("error");return;}
    setLinkPlatform(plat);setLinkStatus("fetching");
    try {
      const res = await fetch(`${API}/api/fetch-url`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ url: videoUrl })
      });
      const data = await res.json();
      if(data.success) {
        setLinkStatus("done");
        setSelFile({name: data.file_id, size: (data.file_size_mb||10)*1024*1024, fromLink: true, fileId: data.file_id});
      } else {
        setLinkStatus("error");
      }
    } catch(err) {
      console.error("Fetch error:", err);
      setLinkStatus("error");
    }
  };

  // ===== REAL API: Upload file =====
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("video", file);
    try {
      const res = await fetch(`${API}/api/upload`, {method: "POST", body: formData});
      const data = await res.json();
      return data.success ? data.file_id : null;
    } catch(err) {
      console.error("Upload error:", err);
      return null;
    }
  };

  // ===== REAL API: Start dubbing =====
  const go = async () => {
    if(!selFile || !consent) return;
    setProc(true); setProg(0); setCStep(0); setResult(false); setResultData(null);

    try {
      // Step 1: Upload (agar file upload hai, link nahi)
      setCStep(0); setProg(10);
      let fileId = selFile.fileId || null;
      if(!fileId && selFile instanceof File) {
        fileId = await uploadFile(selFile);
        if(!fileId) { setProc(false); alert("Upload fail ho gaya!"); return; }
      }
      setProg(25);

      // Step 2-4: Dub karo
      setCStep(1); setProg(35);
      const res = await fetch(`${API}/api/dub`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          file_id: fileId,
          target_lang: tgtLang,
          source_lang: srcLang,
          engine: "luxtts",
          style: hStyle,
          captions: capLangs
        })
      });
      
      setCStep(2); setProg(60);
      const data = await res.json();
      setCStep(3); setProg(90);

      if(data.success) {
        setProg(100);
        setTimeout(() => {
          setProc(false);
          setResult(true);
          setResultData(data);
        }, 500);
      } else {
        setProc(false);
        alert("Error: " + (data.error || "Kuch gadbad ho gayi"));
      }
    } catch(err) {
      console.error("Dub error:", err);
      setProc(false);
      // Fallback: Demo mode (jab backend connect nahi hai)
      let p=0;const iv=setInterval(()=>{p+=Math.random()*4+1;if(p>=100){p=100;clearInterval(iv);setTimeout(()=>{setProc(false);setResult(true);setResultData({demo:true,message:"Demo mode — Backend connect karo!"});},500);}setProg(p);setCStep(Math.min(3,Math.floor(p/25)));},120);
    }
  };
  
  // ===== REAL API: Live translation =====
  const addLiveMsg = async (speaker) => {
    const myLang = speaker===1 ? liveLang1 : liveLang2;
    const otherLang = speaker===1 ? liveLang2 : liveLang1;
    const demoMsgs1=["Bhai kya haal hai?","Mujhe ye project bahut pasand aaya","Kal milte hai office mein","AI bahut kamaal ki cheez hai"];
    const demoMsgs2=["I'm doing great, thanks!","This project looks amazing","Sure, see you tomorrow","AI is truly incredible"];
    const msg = speaker===1 ? demoMsgs1[Math.floor(Math.random()*4)] : demoMsgs2[Math.floor(Math.random()*4)];
    
    setLiveSpeaker(speaker);
    let translated = msg;
    try {
      const res = await fetch(`${API}/api/translate-text`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text: msg, source: myLang, target: otherLang })
      });
      const data = await res.json();
      translated = data.translated || msg;
    } catch(err) {
      // Fallback translations
      translated = speaker===1 ? "(Translation: How are you?)" : "(Anuvad: Main accha hoon!)";
    }
    
    setLiveMessages(p=>[...p.slice(-6),{speaker,msg,translated:`(${translated})`,time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}]);
    setTimeout(()=>setLiveSpeaker(0),2000);
  };

  // ===== REAL API: LuxTTS generate =====
  const luxGenerate = async () => {
    if(!luxText) return;
    setLuxGen(true); setLuxDone(false);
    try {
      const res = await fetch(`${API}/api/luxtts`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text: luxText, voice: luxVoice })
      });
      const data = await res.json();
      setLuxGen(false);
      if(data.success) {
        setLuxDone(true);
        setLuxAudioUrl(`${API}/api/download/${data.audio_file}`);
      } else {
        setLuxDone(true); // Show demo result
        setLuxAudioUrl("");
      }
    } catch(err) {
      setLuxGen(false); setLuxDone(true); setLuxAudioUrl("");
    }
  };

  // Download dubbed video
  const downloadResult = () => {
    if(resultData?.output_video) {
      window.open(`${API}/api/download/${resultData.output_video}`, '_blank');
    }
  };

  const steps=[{icon:"🎬",ti:t.s1t,de:t.s1d},{icon:"🎙️",ti:t.s2t,de:t.s2d},{icon:"🌍",ti:t.s3t,de:t.s3d},{icon:"🔊",ti:t.s4t,de:t.s4d}];
  const feats=[{icon:"🎭",ti:t.f1t,de:t.f1d},{icon:"⚡",ti:t.f2t,de:t.f2d},{icon:"🎯",ti:t.f3t,de:t.f3d},{icon:"📱",ti:t.f4t,de:t.f4d},{icon:"💬",ti:t.f5t,de:t.f5d},{icon:"🔐",ti:t.f6t,de:t.f6d}];
  const revs=[{n:"Rahul S.",r:"YouTuber",tx:t.r1,av:"RS"},{n:"Priya M.",r:"Creator",tx:t.r2,av:"PM"},{n:"Ahmed K.",r:"Teacher",tx:t.r3,av:"AK"}];

  // ===== INTRO =====
  if(intro) return (
    <div style={{position:"fixed",inset:0,zIndex:9999,background:"linear-gradient(135deg,#020810,#0a1a3a,#020810)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",overflow:"hidden"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700;900&display=swap');
@keyframes introSpin{0%{transform:perspective(800px) rotateY(0) rotateX(0) scale(0.5)}30%{transform:perspective(800px) rotateY(180deg) rotateX(10deg) scale(1.1)}60%{transform:perspective(800px) rotateY(360deg) rotateX(-5deg) scale(1)}100%{transform:perspective(800px) rotateY(360deg) rotateX(0) scale(1)}}
@keyframes introGlow{0%,100%{box-shadow:0 0 30px #1a4a8a60,0 0 60px #0a2a5a40}50%{box-shadow:0 0 60px #1a6aba80,0 0 120px #0a3a7a60}}
@keyframes introWave{0%{transform:scale(0);opacity:.4}100%{transform:scale(5);opacity:0}}
@keyframes introUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes introOut{from{opacity:1}to{opacity:0}}
@keyframes introParticle{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--dx),var(--dy)) scale(0);opacity:0}}
@keyframes twinkle{0%,100%{opacity:.2}50%{opacity:1}}`}</style>
      {/* Stars background */}
      {Array.from({length:50}).map((_,i)=><div key={`s${i}`} style={{position:"absolute",width:Math.random()*3+1,height:Math.random()*3+1,borderRadius:"50%",background:"white",opacity:Math.random()*.6+.1,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animation:`twinkle ${Math.random()*4+2}s ease infinite ${Math.random()*3}s`}} />)}
      {iP>=1&&[0,1,2].map(i=><div key={i} style={{position:"absolute",width:80,height:80,borderRadius:"50%",border:"2px solid #1a4a8a40",animation:`introWave 2.5s ease-out ${i*.5}s infinite`}} />)}
      {iP>=2&&Array.from({length:16}).map((_,i)=>{const a=(i/16)*Math.PI*2;return <div key={`p${i}`} style={{position:"absolute",width:5,height:5,borderRadius:"50%",background:`hsl(${200+i*10},80%,${60+i*2}%)`,"--dx":`${Math.cos(a)*180}px`,"--dy":`${Math.sin(a)*180}px`,animation:`introParticle 1.8s ease-out ${i*.06}s forwards`}} />})}
      <div style={{marginBottom:30,animation:iP>=4?"introOut .8s ease forwards":undefined}}>
        <div style={{position:"relative",width:iP>=1?150:0,height:iP>=1?150:0,transition:"all .6s cubic-bezier(.34,1.56,.64,1)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:"100%",height:"100%",borderRadius:36,background:"linear-gradient(135deg,#0a1a3a,#0d2557,#1a3a6a)",display:"flex",alignItems:"center",justifyContent:"center",animation:iP>=1?"introSpin 2s cubic-bezier(.25,.46,.45,.94), introGlow 2s ease infinite":"none",overflow:"hidden",position:"relative"}}>
            {Array.from({length:30}).map((_,i)=><div key={i} style={{position:"absolute",width:Math.random()*4+1,height:Math.random()*4+1,borderRadius:"50%",background:"white",opacity:Math.random()*.8+.2,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animation:`twinkle ${Math.random()*3+1}s ease infinite`}} />)}
            <span style={{position:"relative",zIndex:2,fontSize:70,fontWeight:900,color:"white",fontFamily:"'DM Sans',sans-serif",textShadow:"0 0 30px #ffffff40"}}>V</span>
          </div>
        </div>
      </div>
      <div style={{animation:iP>=2?(iP>=4?"introOut .8s ease forwards":"introUp .8s ease both"):undefined,opacity:iP>=2?1:0,textAlign:"center"}}>
        <h1 style={{fontFamily:"'DM Sans',sans-serif",fontSize:"clamp(34px,7vw,56px)",fontWeight:900,letterSpacing:"-2px",color:"white"}}>Vox<span style={{color:"#4a9eff"}}>Dub</span></h1>
        {iP>=3&&<p style={{color:"#ffffff50",fontSize:15,marginTop:8,animation:"introUp .6s ease both"}}>{t.badge}</p>}
      </div>
      {iP>=2&&<div style={{width:"clamp(200px,50vw,300px)",height:4,background:"#ffffff15",borderRadius:10,marginTop:40,overflow:"hidden",animation:iP>=4?"introOut .8s ease forwards":"introUp .5s ease both"}}><div style={{height:"100%",borderRadius:10,background:"linear-gradient(90deg,#1a4a8a,#4a9eff,#1a4a8a)",width:iP>=3?"100%":"40%",transition:"width 1s ease"}} /></div>}
    </div>
  );

  // ===== MAIN =====
  return (
    <div style={{fontFamily:"'DM Sans',sans-serif",background:bg,color:fg,minHeight:"100vh",overflowX:"hidden",transition:"background .4s,color .4s"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:wght@400;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pulse{0%,100%{box-shadow:0 0 20px #ff4d2030}50%{box-shadow:0 0 50px #ff4d2060}}
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes gShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes twinkle{0%,100%{opacity:.2}50%{opacity:1}}
@keyframes logoFloat{0%,100%{transform:translateY(0) rotate(0)}25%{transform:translateY(-3px) rotate(-1deg)}75%{transform:translateY(2px) rotate(1deg)}}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
@keyframes pulseRing{0%{transform:scale(1);opacity:.6}100%{transform:scale(2);opacity:0}}
@keyframes bounce3d{0%,100%{transform:translateY(0) rotateX(0)}50%{transform:translateY(-8px) rotateX(5deg)}}
@keyframes cardFloat{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-6px) rotate(.5deg)}}
@keyframes waveform{0%,100%{height:4px}50%{height:20px}}
.btn-p{background:linear-gradient(135deg,#ff4d20,#ff6b35,#ff891a);background-size:200% 200%;animation:gShift 3s ease infinite;border:none;color:white;padding:12px 28px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s;font-family:'DM Sans'}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 12px 40px #ff4d2050}
.btn-p:disabled{opacity:.5;cursor:not-allowed;transform:none}
.btn-b{background:linear-gradient(135deg,#1a4a8a,#2a6aba);border:none;color:white;padding:12px 28px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s;font-family:'DM Sans'}
.btn-b:hover{transform:translateY(-2px);box-shadow:0 12px 40px #1a4a8a50}
@media(max-width:768px){.nav-d{display:none!important}.ham{display:flex!important}.steps-g{grid-template-columns:repeat(2,1fr)!important}.feat-g{grid-template-columns:1fr!important}.price-g{grid-template-columns:1fr!important}.stats-r{gap:20px!important}}
@media(max-width:480px){.steps-g{grid-template-columns:1fr!important}.stats-r{flex-direction:column!important}.hero-btns{flex-direction:column!important;align-items:stretch!important}.tab-row{flex-direction:column!important}}`}</style>

      {/* SETTINGS PANEL */}
      {showSet&&<><div onClick={()=>setShowSet(false)} style={{position:"fixed",inset:0,background:"#00000070",backdropFilter:"blur(4px)",zIndex:500}} />
      <div style={{position:"fixed",top:0,right:0,bottom:0,width:"min(380px,88vw)",background:isL?"#fff":"#0c0c14",zIndex:501,animation:"slideIn .4s cubic-bezier(.22,1,.36,1)",borderLeft:`1px solid ${cardBd}`,overflowY:"auto"}}>
        <div style={{padding:"20px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${cardBd}`}}><h3 style={{fontSize:18,fontWeight:800}}>{t.setT}</h3><button onClick={()=>setShowSet(false)} style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:10,padding:"6px 14px",color:fg2,cursor:"pointer",fontSize:12,fontFamily:"'DM Sans'",fontWeight:600}}>{t.setClose}</button></div>
        <div style={{padding:20}}>
          <div style={{fontSize:11,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:12}}>{t.setTh}</div>
          <div style={{display:"flex",gap:10,marginBottom:24}}>{["dark","light"].map(th=><div key={th} onClick={()=>setTheme(th)} style={{flex:1,padding:"14px",borderRadius:14,cursor:"pointer",background:theme===th?"#ff4d2015":inBg,border:`2px solid ${theme===th?"#ff4d2060":inBd}`,textAlign:"center"}}><div style={{fontSize:26,marginBottom:4}}>{th==="dark"?"🌙":"☀️"}</div><div style={{fontSize:12,fontWeight:700,color:theme===th?"#ff891a":fg2}}>{th==="dark"?t.dark:t.light}</div></div>)}</div>
          {!isL&&<><div style={{fontSize:11,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:12}}>{t.setWall}</div><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:24}}>{wallpapers.map(w=><div key={w.id} onClick={()=>setWall(w.id)} style={{padding:"10px 6px",borderRadius:10,cursor:"pointer",background:w.bg||"#0a0a10",border:`2px solid ${wall===w.id?"#ff4d2060":"#ffffff10"}`,textAlign:"center",minHeight:50,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:11,fontWeight:600,color:wall===w.id?"#ff891a":"#ffffff50"}}>{w.name}</span></div>)}</div></>}
          <div style={{fontSize:11,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:12}}>{t.setLang}</div>
          <div style={{display:"flex",flexDirection:"column",gap:3}}>{appLangs.map(l=><div key={l.code} onClick={()=>setAppLang(l.code)} style={{padding:"10px 14px",borderRadius:12,cursor:"pointer",display:"flex",alignItems:"center",gap:10,fontSize:13,background:appLang===l.code?"#ff4d2018":"transparent",color:appLang===l.code?"#ff891a":fg2,fontWeight:appLang===l.code?700:400}}><span style={{fontSize:18}}>{l.flag}</span><span style={{flex:1}}>{l.name}</span>{appLang===l.code&&<span style={{color:"#ff891a"}}>✓</span>}</div>)}</div>
        </div>
      </div></>}

      {/* MOBILE MENU */}
      {mob&&<div style={{position:"fixed",inset:0,background:isL?"#f5f3f0f8":"#06060af8",zIndex:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20}}><button onClick={()=>setMob(false)} style={{position:"absolute",top:16,right:16,background:"none",border:"none",color:fg2,fontSize:24,cursor:"pointer"}}>✕</button>{[["#how",t.nav1],["#features",t.nav2],["#pricing",t.nav3],["#live",t.nav4]].map(([h,l])=><a key={h} href={h} onClick={()=>setMob(false)} style={{color:fg2,fontSize:17,fontWeight:600,textDecoration:"none"}}>{l}</a>)}<button onClick={()=>{setMob(false);setShowSet(true)}} style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:12,padding:"10px 24px",color:fg2,fontSize:14,cursor:"pointer",fontFamily:"'DM Sans'"}}>⚙️</button><button className="btn-p">{t.navCta}</button></div>}

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"10px clamp(12px,4vw,40px)",background:sY>50?(isL?"#f5f3f0f0":"#06060af0"):"transparent",backdropFilter:sY>50?"blur(20px)":"none",borderBottom:sY>50?`1px solid ${cardBd}`:"none",transition:"all .3s",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,animation:"logoFloat 4s ease infinite"}}><StarLogo size={38} /><span style={{fontWeight:800,fontSize:17,letterSpacing:"-.5px"}}>Vox<span style={{color:"#4a9eff"}}>Dub</span></span></div>
        <div className="nav-d" style={{display:"flex",gap:18,alignItems:"center"}}>{[["#how",t.nav1],["#features",t.nav2],["#pricing",t.nav3],["#live",t.nav4]].map(([h,l])=><a key={h} href={h} style={{color:fg2,textDecoration:"none",fontSize:12,fontWeight:500}}>{l}</a>)}<button onClick={()=>setShowSet(true)} style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:8,padding:"6px 10px",color:fg2,cursor:"pointer",fontSize:14}}>⚙️</button><button className="btn-p" style={{padding:"8px 18px",fontSize:11}}>{t.navCta}</button></div>
        <div className="ham" style={{display:"none",flexDirection:"column",gap:4,cursor:"pointer",padding:8}} onClick={()=>setMob(true)}><span style={{width:20,height:2,background:fg2,borderRadius:2}}/><span style={{width:20,height:2,background:fg2,borderRadius:2}}/><span style={{width:20,height:2,background:fg2,borderRadius:2}}/></div>
      </nav>

      {/* HERO */}
      <section style={{paddingTop:120,paddingBottom:50,textAlign:"center",position:"relative",background:isL?"":"radial-gradient(ellipse 80% 50% at 50% -10%,#1a3a6a20 0%,transparent 60%)"}}>
        <div style={{position:"relative",zIndex:1,maxWidth:800,margin:"0 auto",padding:"0 clamp(12px,4vw,24px)"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"#1a4a8a18",border:"1px solid #1a4a8a30",borderRadius:50,padding:"6px 16px",marginBottom:20,fontSize:11,color:"#4a9eff",fontWeight:600}}><span style={{width:7,height:7,borderRadius:"50%",background:"#22c55e",animation:"pulse 2s infinite"}} />{t.badge}</div>
          <h1 style={{fontSize:"clamp(26px,6vw,52px)",fontWeight:900,lineHeight:1.1,letterSpacing:"-2px",marginBottom:16,animation:"fadeUp .8s ease"}}>{t.h1}<br /><span style={{background:"linear-gradient(135deg,#1a4a8a,#4a9eff,#8ac4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{t.h2}</span><br />{t.h3}</h1>
          <p style={{fontSize:15,color:fg2,maxWidth:480,margin:"0 auto 24px",lineHeight:1.7}}>{t.desc}</p>
          <div className="hero-btns" style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button className="btn-b" style={{fontSize:14,padding:"12px 30px"}} onClick={()=>document.getElementById('app')?.scrollIntoView({behavior:'smooth'})}>{t.cta}</button><button style={{background:"transparent",border:`1px solid ${cardBd}`,color:fg2,padding:"12px 22px",borderRadius:12,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'"}}>{t.demo}</button></div>
          <div className="stats-r" style={{display:"flex",justifyContent:"center",gap:50,marginTop:44,flexWrap:"wrap"}}>{[["50K+",t.sV],[`${langs.length}+`,t.sL],["99%",t.sA]].map(([n,l],i)=><div key={i} style={{textAlign:"center"}}><div style={{fontFamily:"'Space Mono'",fontSize:"clamp(24px,4vw,32px)",fontWeight:700,background:"linear-gradient(135deg,#1a4a8a,#4a9eff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{n}</div><div style={{fontSize:10,color:fg3,marginTop:2,fontWeight:500,textTransform:"uppercase"}}>{l}</div></div>)}</div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" style={{padding:"50px clamp(12px,4vw,24px)",maxWidth:1000,margin:"0 auto"}}><div style={{textAlign:"center",marginBottom:40}}><span style={{fontSize:10,fontWeight:700,color:"#4a9eff",letterSpacing:3,textTransform:"uppercase"}}>{t.howL}</span><h2 style={{fontSize:"clamp(22px,5vw,32px)",fontWeight:800,marginTop:8}}>{t.howT}</h2></div>
        <div className="steps-g" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>{steps.map((s,i)=><div key={i} style={{textAlign:"center",padding:"24px 12px",borderRadius:18,background:cardBg,border:`1px solid ${cardBd}`,position:"relative",animation:"cardFloat 4s ease infinite",animationDelay:`${i*.3}s`}}><div style={{fontSize:34,marginBottom:10,animation:"bounce3d 3s ease infinite",animationDelay:`${i*.4}s`}}>{s.icon}</div><div style={{position:"absolute",top:8,right:10,fontFamily:"'Space Mono'",fontSize:38,fontWeight:700,color:isL?"#00000006":"#ffffff06"}}>0{i+1}</div><h3 style={{fontSize:14,fontWeight:700,marginBottom:4}}>{s.ti}</h3><p style={{fontSize:10,color:fg2,lineHeight:1.4}}>{s.de}</p></div>)}</div>
      </section>

      {/* APP SECTION WITH TABS */}
      <section id="app" style={{padding:"40px clamp(10px,3vw,24px) 50px",maxWidth:720,margin:"0 auto"}}>
        {/* Tab Selector */}
        <div className="tab-row" style={{display:"flex",gap:8,marginBottom:20,justifyContent:"center",flexWrap:"wrap"}}>
          {[["dub","🎬 Video Dub"],["live","🎙️ Live"],["luxtts","🧪 LuxTTS"]].map(([id,label])=><button key={id} onClick={()=>setTab(id)} style={{padding:"10px 22px",borderRadius:14,border:`2px solid ${tab===id?"#4a9eff60":cardBd}`,background:tab===id?(isL?"#e8f0ff":"#1a4a8a20"):cardBg,color:tab===id?"#4a9eff":fg2,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans'",transition:"all .3s"}}>{label}</button>)}
        </div>

        {/* DUB TAB */}
        {tab==="dub"&&<div style={{background:cardBg,border:`1px solid ${cardBd}`,borderRadius:20,padding:"clamp(18px,4vw,32px)",backdropFilter:"blur(20px)"}}>
          <h2 style={{fontSize:"clamp(16px,4vw,22px)",fontWeight:800,textAlign:"center",marginBottom:20}}>{result?t.appD:proc?t.appP:t.appT}</h2>
          {!proc&&!result&&<>
            {/* Upload/Link Mode Toggle */}
            <div style={{display:"flex",gap:6,marginBottom:14}}>{[["file",t.uploadMode],["link",t.linkMode]].map(([id,lb])=><button key={id} onClick={()=>{setUpMode(id);setLinkStatus("")}} style={{flex:1,padding:"9px",borderRadius:10,border:`2px solid ${upMode===id?"#4a9eff50":cardBd}`,background:upMode===id?(isL?"#e8f0ff":"#1a4a8a15"):cardBg,color:upMode===id?"#4a9eff":fg2,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans'"}}>{lb}</button>)}</div>

            {/* FILE UPLOAD */}
            {upMode==="file"&&<div style={{border:`2px dashed ${drag?"#4a9eff80":inBd}`,borderRadius:18,padding:"30px 14px",textAlign:"center",cursor:"pointer",background:selFile?(isL?"#e8fce8":"#22c55e08"):(drag?"#1a4a8a08":"transparent"),borderStyle:selFile?"solid":"dashed"}} onDragOver={e=>{e.preventDefault();setDrag(true)}} onDragLeave={()=>setDrag(false)} onDrop={e=>{e.preventDefault();setDrag(false);const f=e.dataTransfer?.files?.[0];if(f?.type?.startsWith("video/"))setSelFile(f)}} onClick={()=>fRef.current?.click()}>
              <input ref={fRef} type="file" accept="video/*" style={{display:"none"}} onChange={e=>{if(e.target.files?.[0])setSelFile(e.target.files[0])}} />
              {selFile?<div><div style={{fontSize:38}}>✅</div><div style={{fontSize:13,fontWeight:600,color:"#22c55e",wordBreak:"break-all",marginTop:6}}>{selFile.name}</div><button onClick={e=>{e.stopPropagation();reset()}} style={{marginTop:10,background:inBg,border:"none",color:fg2,padding:"5px 14px",borderRadius:8,cursor:"pointer",fontSize:11,fontFamily:"'DM Sans'"}}>{t.rem}</button></div>:<div><div style={{fontSize:42,marginBottom:10,animation:"bounce3d 3s ease infinite"}}>📁</div><div style={{fontSize:13,fontWeight:600,color:fg2}}>{t.upT}</div><div style={{fontSize:10,color:fg3,marginTop:4}}>{t.upF}</div></div>}
            </div>}

            {/* LINK PASTE */}
            {upMode==="link"&&<div style={{border:`2px solid ${linkStatus==="done"?"#22c55e60":linkStatus==="error"?"#ff4d4d60":inBd}`,borderRadius:18,padding:"24px 16px",background:linkStatus==="done"?(isL?"#e8fce8":"#22c55e08"):cardBg}}>
              <div style={{fontSize:11,fontWeight:700,color:fg3,marginBottom:10,textTransform:"uppercase"}}>{t.linkT}</div>
              {/* Platform icons */}
              <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:14}}>{Object.entries(platformInfo).map(([id,p])=><div key={id} style={{width:40,height:40,borderRadius:12,background:linkPlatform===id?`${p.color}20`:inBg,border:`1.5px solid ${linkPlatform===id?p.color+"60":inBd}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"default",transition:"all .3s"}} title={p.name}>{p.icon}</div>)}</div>
              {/* URL Input */}
              <div style={{position:"relative"}}><span style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:14}}>🔗</span><input style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:12,padding:"12px 14px 12px 36px",color:fg,fontSize:12,width:"100%",fontFamily:"'DM Sans'",outline:"none"}} placeholder={t.linkPh} value={videoUrl} onChange={e=>{setVideoUrl(e.target.value);setLinkPlatform(detectPlatform(e.target.value));setLinkStatus("")}} /></div>
              {/* Status */}
              {linkStatus==="error"&&<div style={{color:"#ff4d4d",fontSize:11,marginTop:8,fontWeight:600}}>{t.linkErr}</div>}
              {linkStatus==="done"&&<div style={{color:"#22c55e",fontSize:11,marginTop:8,fontWeight:600}}>{t.linkDone}</div>}
              {/* Fetch button */}
              <button onClick={fetchVideoFromLink} disabled={!videoUrl||linkStatus==="fetching"} style={{width:"100%",marginTop:12,padding:11,borderRadius:12,background:linkStatus==="fetching"?"#1a4a8a30":"linear-gradient(135deg,#1a4a8a,#2a6aba)",border:"none",color:"white",fontSize:13,fontWeight:700,cursor:videoUrl?"pointer":"not-allowed",fontFamily:"'DM Sans'",opacity:videoUrl?1:.5}}>{linkStatus==="fetching"?t.linkFetching:t.linkFetch}</button>
              {/* Supported platforms */}
              <div style={{display:"flex",gap:6,justifyContent:"center",marginTop:10,flexWrap:"wrap"}}>{Object.entries(platformInfo).map(([id,p])=><span key={id} style={{fontSize:9,color:fg3,background:inBg,padding:"3px 8px",borderRadius:6}}>{p.icon} {p.name}</span>)}</div>
            </div>}
            <div style={{marginTop:16}}><label style={{fontSize:10,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:4,display:"block"}}>{t.srcL}</label><select style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:12,padding:"10px 14px",color:fg,fontSize:13,width:"100%",appearance:"none",fontFamily:"'DM Sans'",outline:"none"}} value={srcLang} onChange={e=>setSrcLang(e.target.value)}><option value="auto">{t.srcA}</option>{langs.map(l=><option key={l.code} value={l.code}>{l.flag} {l.name}</option>)}</select></div>
            <div style={{marginTop:14}} ref={adRef}><label style={{fontSize:10,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:4,display:"block"}}>{t.dubL}</label><div style={{position:"relative"}}><div style={{position:"relative"}}><span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:13}}>🔍</span><input style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:12,padding:"10px 12px 10px 32px",color:fg,fontSize:12,width:"100%",fontFamily:"'DM Sans'",outline:"none"}} placeholder={t.dubS} value={showAD?aS:""} onFocus={()=>{setShowAD(true);setAS("")}} onChange={e=>setAS(e.target.value)} />{!showAD&&<div onClick={()=>setShowAD(true)} style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 12px 0 32px",cursor:"pointer",fontSize:12,color:"#4a9eff",fontWeight:600}}>{langs.find(l=>l.code===tgtLang)?.flag} {langs.find(l=>l.code===tgtLang)?.name}</div>}</div>{showAD&&<div style={{position:"absolute",top:"100%",left:0,right:0,maxHeight:180,overflowY:"auto",background:isL?"#fff":"#14141e",border:`1px solid ${inBd}`,borderRadius:12,marginTop:4,zIndex:50,boxShadow:"0 16px 50px #00000060"}}>{fA.length===0?<div style={{padding:10,textAlign:"center",color:fg3,fontSize:11}}>{t.noR}</div>:fA.map(l=><div key={l.code} style={{padding:"8px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,fontSize:12,borderBottom:`1px solid ${isL?"#f0f0f0":"#ffffff06"}`,background:tgtLang===l.code?"#1a4a8a18":"transparent",color:tgtLang===l.code?"#4a9eff":fg}} onClick={()=>{setTgtLang(l.code);setShowAD(false);setAS("")}}><span style={{fontSize:15}}>{l.flag}</span>{l.name}{tgtLang===l.code&&<span style={{marginLeft:"auto"}}>✓</span>}</div>)}</div>}</div></div>
            <div style={{marginTop:14}} ref={cdRef}><label style={{fontSize:10,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:4,display:"block"}}>{t.capL}</label>{capLangs.length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:6}}>{capLangs.map(c=>{const l=langs.find(x=>x.code===c);return l?<span key={c} style={{display:"inline-flex",alignItems:"center",gap:3,background:"#1a4a8a15",border:"1px solid #1a4a8a30",borderRadius:6,padding:"3px 8px",fontSize:10,color:"#4a9eff",fontWeight:600}}>{l.flag} {l.name} <button onClick={()=>togCap(c)} style={{background:"none",border:"none",color:"#4a9eff80",cursor:"pointer",fontSize:11,padding:0}}>✕</button></span>:null})}</div>}<div style={{position:"relative"}}><div style={{position:"relative"}}><span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:13}}>🔍</span><input style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:12,padding:"10px 12px 10px 32px",color:fg,fontSize:12,width:"100%",fontFamily:"'DM Sans'",outline:"none"}} placeholder={t.capS} value={cS} onFocus={()=>setShowCD(true)} onChange={e=>{setCS(e.target.value);setShowCD(true)}} /></div>{showCD&&<div style={{position:"absolute",top:"100%",left:0,right:0,maxHeight:180,overflowY:"auto",background:isL?"#fff":"#14141e",border:`1px solid ${inBd}`,borderRadius:12,marginTop:4,zIndex:50,boxShadow:"0 16px 50px #00000060"}}>{fC.map(l=><div key={l.code} style={{padding:"8px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,fontSize:12,borderBottom:`1px solid ${isL?"#f0f0f0":"#ffffff06"}`,background:capLangs.includes(l.code)?"#1a4a8a18":"transparent",color:capLangs.includes(l.code)?"#4a9eff":fg}} onClick={()=>{togCap(l.code);setCS("")}}><div style={{width:14,height:14,borderRadius:3,background:capLangs.includes(l.code)?"#1a4a8a":"transparent",border:capLangs.includes(l.code)?"none":`2px solid ${inBd}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"white"}}>{capLangs.includes(l.code)?"✓":""}</div><span style={{fontSize:15}}>{l.flag}</span>{l.name}</div>)}</div>}</div></div>
            {styleLangs.includes(tgtLang)&&<div style={{marginTop:14}}><label style={{fontSize:10,fontWeight:700,color:fg3,letterSpacing:1,textTransform:"uppercase",marginBottom:8,display:"block"}}>{t.stL}</label><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>{hindiStyles.map(s=><div key={s.id} onClick={()=>setHStyle(s.id)} style={{padding:"10px",borderRadius:10,cursor:"pointer",background:hStyle===s.id?`${s.color}12`:inBg,border:`1.5px solid ${hStyle===s.id?`${s.color}60`:inBd}`,position:"relative"}}>{hStyle===s.id&&<div style={{position:"absolute",top:5,right:6,width:14,height:14,borderRadius:4,background:s.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"white"}}>✓</div>}<div style={{fontSize:12,fontWeight:700,color:hStyle===s.id?s.color:fg2}}>{s.name}</div><div style={{fontSize:9,color:fg3}}>{s.desc}</div></div>)}</div></div>}
            <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>{[[t.oV,true],[t.oS,true],[t.oL,false]].map(([lb,on],i)=><label key={i} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:8,background:on?"#1a4a8a12":inBg,border:`1px solid ${on?"#1a4a8a40":inBd}`,cursor:"pointer",fontSize:11,fontWeight:500,color:on?"#4a9eff":fg2}}><div style={{width:13,height:13,borderRadius:3,background:on?"#1a4a8a":"transparent",border:on?"none":`2px solid ${inBd}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:"white"}}>{on?"✓":""}</div>{lb}</label>)}</div>

            {/* COPYRIGHT CONSENT */}
            <div style={{marginTop:16,padding:"14px 16px",borderRadius:14,background:isL?"#fff8f0":"#ff891a08",border:`1px solid ${isL?"#ffe0c0":"#ff891a20"}`}}>
              <div style={{fontSize:12,fontWeight:800,color:"#ff891a",marginBottom:10}}>{t.consentTitle}</div>
              <label onClick={()=>setConsent(!consent)} style={{display:"flex",alignItems:"flex-start",gap:10,cursor:"pointer",fontSize:11,color:fg2,lineHeight:1.5}}>
                <div style={{width:18,height:18,borderRadius:5,flexShrink:0,marginTop:1,background:consent?"#22c55e":"transparent",border:consent?"none":`2px solid ${inBd}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white",transition:"all .2s"}}>{consent?"✓":""}</div>
                <div>
                  <div style={{marginBottom:4}}>✅ {t.consent1}</div>
                  <div>⚠️ {t.consent2}</div>
                </div>
              </label>
            </div>

            <button className="btn-b" disabled={!selFile||!consent} onClick={go} style={{width:"100%",marginTop:14,padding:13,fontSize:14,opacity:(!selFile||!consent)?.5:1}}>{!selFile?t.trW:!consent?t.consentAgree+" ↑":t.trB}</button>
          </>}
          {proc&&<div><div style={{width:"100%",height:6,background:isL?"#e0ddd8":"#ffffff10",borderRadius:10,overflow:"hidden",marginBottom:16}}><div style={{height:"100%",borderRadius:10,background:"linear-gradient(90deg,#1a4a8a,#4a9eff,#1a4a8a)",backgroundSize:"200% 100%",animation:"shimmer 2s linear infinite",width:`${prog}%`,transition:"width .3s"}} /></div><div style={{textAlign:"center",fontSize:12,color:fg2,marginBottom:16}}>{Math.round(prog)}% {t.pPc}</div><div style={{display:"flex",flexDirection:"column",gap:4}}>{steps.map((s,i)=><div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"7px 12px",borderRadius:8,fontSize:12,background:i===cStep?"#1a4a8a15":"transparent",color:i<cStep?"#22c55e":i===cStep?"#4a9eff":fg3}}><span style={{fontSize:14,width:20}}>{i<cStep?"✅":i===cStep?"⏳":"⬜"}</span><span style={{fontWeight:600,fontSize:11}}>{s.ti}</span><span style={{fontSize:9,marginLeft:"auto",opacity:.6}}>{i<cStep?t.pD:i===cStep?t.pA:t.pW}</span></div>)}</div></div>}
          {result&&<div style={{textAlign:"center"}}>{resultData?.demo&&<div style={{padding:"10px 14px",borderRadius:10,background:"#ff891a15",border:"1px solid #ff891a30",marginBottom:14,fontSize:11,color:"#ff891a",fontWeight:600}}>⚠️ Demo Mode — Backend connect karo for real dubbing!</div>}{resultData?.steps&&<div style={{marginBottom:14}}>{resultData.steps.map((s,i)=><div key={i} style={{fontSize:10,color:"#22c55e",marginBottom:2}}>✅ Step {s.step}: {s.name} — {s.status}</div>)}</div>}<div style={{width:"100%",height:"clamp(160px,30vw,250px)",borderRadius:16,background:isL?"linear-gradient(135deg,#e8f0ff,#d0e0f0)":"linear-gradient(135deg,#0a1a3a,#0d2557)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18,border:`1px solid ${cardBd}`,position:"relative",overflow:"hidden"}}><div><div style={{fontSize:48,animation:"bounce3d 2s ease infinite"}}>🎬</div><div style={{fontSize:12,color:fg2,marginTop:4}}>{t.resP}</div><div style={{marginTop:8,width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,#1a4a8a,#4a9eff)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",cursor:"pointer",fontSize:16,color:"white"}}>▶</div></div><div style={{position:"absolute",bottom:10,right:14,background:"#00000050",backdropFilter:"blur(4px)",padding:"4px 10px",borderRadius:8,fontSize:9,color:"#ffffff90",fontWeight:700,letterSpacing:".5px"}}>{t.watermark}</div></div><div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}><button onClick={downloadResult} className="btn-b" style={{padding:"10px 22px",fontSize:12}}>{t.dlB}</button><button onClick={reset} style={{background:inBg,border:`1px solid ${inBd}`,color:fg2,padding:"10px 18px",borderRadius:12,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'"}}>{t.nwB}</button></div><div style={{marginTop:12,fontSize:9,color:fg3}}>{t.watermark} • Free plan includes watermark</div></div>}
        </div>}

        {/* LIVE TAB */}
        {tab==="live"&&<div style={{background:cardBg,border:`1px solid ${cardBd}`,borderRadius:20,padding:"clamp(18px,4vw,32px)"}}>
          <h2 style={{fontSize:20,fontWeight:800,textAlign:"center",marginBottom:8}}>{t.liveT}</h2>
          <p style={{textAlign:"center",color:fg2,fontSize:12,marginBottom:20}}>{t.liveD}</p>
          {/* Language pickers */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 40px 1fr",gap:8,alignItems:"center",marginBottom:20}}>
            <div><div style={{fontSize:10,fontWeight:700,color:fg3,marginBottom:4,textTransform:"uppercase"}}>{t.liveYou}</div><select style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:10,padding:"10px",color:fg,fontSize:12,width:"100%",fontFamily:"'DM Sans'",outline:"none",appearance:"none"}} value={liveLang1} onChange={e=>setLiveLang1(e.target.value)}>{langs.map(l=><option key={l.code} value={l.code}>{l.flag} {l.name}</option>)}</select></div>
            <div style={{textAlign:"center",fontSize:20,color:"#4a9eff"}}>⇄</div>
            <div><div style={{fontSize:10,fontWeight:700,color:fg3,marginBottom:4,textTransform:"uppercase"}}>{t.liveOther}</div><select style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:10,padding:"10px",color:fg,fontSize:12,width:"100%",fontFamily:"'DM Sans'",outline:"none",appearance:"none"}} value={liveLang2} onChange={e=>setLiveLang2(e.target.value)}>{langs.map(l=><option key={l.code} value={l.code}>{l.flag} {l.name}</option>)}</select></div>
          </div>
          {/* Chat area */}
          <div style={{background:isL?"#f8f6f3":"#0a0a14",borderRadius:16,padding:16,minHeight:200,marginBottom:16,border:`1px solid ${cardBd}`}}>
            {liveMessages.length===0&&<div style={{textAlign:"center",color:fg3,fontSize:12,padding:"60px 0"}}>{t.liveReady}<br /><span style={{fontSize:10,marginTop:8,display:"block"}}>{t.liveTip}</span></div>}
            {liveMessages.map((m,i)=><div key={i} style={{display:"flex",justifyContent:m.speaker===1?"flex-end":"flex-start",marginBottom:10}}>
              <div style={{maxWidth:"75%",padding:"10px 14px",borderRadius:14,background:m.speaker===1?"linear-gradient(135deg,#1a4a8a,#2a6aba)":"linear-gradient(135deg,#2a2a3a,#3a3a4a)",color:"white"}}>
                <div style={{fontSize:12,fontWeight:600}}>{m.msg}</div>
                <div style={{fontSize:10,opacity:.6,marginTop:4,fontStyle:"italic"}}>{m.translated}</div>
                <div style={{fontSize:9,opacity:.4,marginTop:2}}>{m.time}</div>
              </div>
            </div>)}
            {liveSpeaker>0&&<div style={{display:"flex",justifyContent:liveSpeaker===1?"flex-end":"flex-start"}}><div style={{display:"flex",gap:3,padding:"8px 14px",borderRadius:14,background:isL?"#e0ddd8":"#ffffff10"}}>{[0,1,2,3,4].map(i=><div key={i} style={{width:3,borderRadius:2,background:"#4a9eff",animation:`waveform .6s ease infinite ${i*.1}s`}} />)}</div></div>}
          </div>
          {/* Speak buttons */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <button onClick={()=>addLiveMsg(1)} className="btn-b" style={{padding:12,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>🎤 {langs.find(l=>l.code===liveLang1)?.flag} {t.liveYou}</button>
            <button onClick={()=>addLiveMsg(2)} style={{padding:12,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,background:"linear-gradient(135deg,#2a2a4a,#3a3a5a)",border:"none",color:"white",borderRadius:12,cursor:"pointer",fontWeight:700,fontFamily:"'DM Sans'"}}>🎤 {langs.find(l=>l.code===liveLang2)?.flag} {t.liveOther}</button>
          </div>
        </div>}

        {/* LUXTTS TAB */}
        {tab==="luxtts"&&<div style={{background:cardBg,border:`1px solid ${cardBd}`,borderRadius:20,padding:"clamp(18px,4vw,32px)"}}>
          <h2 style={{fontSize:20,fontWeight:800,textAlign:"center",marginBottom:6}}>{t.luxT}</h2>
          <p style={{textAlign:"center",color:fg2,fontSize:12,marginBottom:20}}>{t.luxD}</p>
          {/* Stats badges */}
          <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginBottom:20}}>
            {[["⚡",t.luxSpeed],["🎵",t.luxQuality],["🆓",t.luxFree],["💾",t.luxSize]].map(([icon,label],i)=><div key={i} style={{display:"flex",alignItems:"center",gap:5,padding:"6px 12px",borderRadius:10,background:"#22c55e12",border:"1px solid #22c55e30",fontSize:11,fontWeight:600,color:"#22c55e"}}>{icon} {label}</div>)}
          </div>
          {/* Voice selector */}
          <div style={{marginBottom:14}}><label style={{fontSize:10,fontWeight:700,color:fg3,textTransform:"uppercase",marginBottom:4,display:"block"}}>🎭 Voice</label><div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{[["default","🧑 Default"],["female","👩 Female"],["deep","🎤 Deep"],["child","👶 Child"]].map(([id,name])=><button key={id} onClick={()=>setLuxVoice(id)} style={{padding:"8px 14px",borderRadius:10,border:`1.5px solid ${luxVoice===id?"#22c55e60":inBd}`,background:luxVoice===id?"#22c55e12":inBg,color:luxVoice===id?"#22c55e":fg2,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'"}}>{name}</button>)}</div></div>
          {/* Text input */}
          <textarea value={luxText} onChange={e=>setLuxText(e.target.value)} placeholder={t.luxInput} style={{width:"100%",minHeight:80,background:inBg,border:`1px solid ${inBd}`,borderRadius:14,padding:14,color:fg,fontSize:13,fontFamily:"'DM Sans'",outline:"none",resize:"vertical"}} />
          {/* Generate */}
          <div style={{display:"flex",gap:8,marginTop:14}}>
            <button onClick={luxGenerate} disabled={!luxText||luxGen} style={{flex:1,padding:12,borderRadius:12,background:luxGen?"#22c55e30":"linear-gradient(135deg,#22c55e,#16a34a)",border:"none",color:"white",fontSize:13,fontWeight:700,cursor:luxText?"pointer":"not-allowed",fontFamily:"'DM Sans'",opacity:luxText?1:.5}}>{luxGen?"⏳ Generating...":t.luxGen}</button>
            <button style={{padding:"12px 18px",borderRadius:12,background:inBg,border:`1px solid ${inBd}`,color:fg2,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans'"}}>{t.luxClone}</button>
          </div>
          {/* Result */}
          {luxDone&&<div style={{marginTop:16,padding:16,borderRadius:14,background:"#22c55e08",border:"1px solid #22c55e30"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><span style={{fontSize:16}}>✅</span><span style={{fontSize:13,fontWeight:700,color:"#22c55e"}}>Audio Generated!</span></div>
            {luxAudioUrl?<audio controls src={luxAudioUrl} style={{width:"100%",borderRadius:10,marginBottom:8}} />:<div style={{display:"flex",alignItems:"center",gap:8,background:isL?"#f0ede8":"#ffffff08",borderRadius:10,padding:"10px 14px"}}><div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#22c55e,#16a34a)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:16,color:"white"}}>▶</div><div style={{flex:1,height:4,background:isL?"#d8d4d0":"#ffffff15",borderRadius:10,overflow:"hidden"}}><div style={{width:"60%",height:"100%",background:"#22c55e",borderRadius:10}} /></div><span style={{fontSize:10,color:fg3}}>Demo Mode</span></div>}
          </div>}
          {/* Open source badge */}
          <div style={{marginTop:16,padding:12,borderRadius:12,background:isL?"#f8f6f3":"#ffffff04",border:`1px solid ${cardBd}`,textAlign:"center"}}>
            <div style={{fontSize:11,color:fg3}}>Powered by</div>
            <div style={{fontSize:15,fontWeight:800,marginTop:2}}>🔬 LuxTTS <span style={{fontSize:10,fontWeight:600,color:"#22c55e",background:"#22c55e15",padding:"2px 8px",borderRadius:6}}>Open Source</span></div>
            <div style={{fontSize:10,color:fg3,marginTop:4}}>Apache 2.0 License • GitHub: ysharma3501/LuxTTS</div>
          </div>
        </div>}
      </section>

      {/* PRICING */}
      <section id="pricing" style={{padding:"50px clamp(12px,4vw,24px)",maxWidth:1000,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:40}}><span style={{fontSize:10,fontWeight:700,color:"#4a9eff",letterSpacing:3,textTransform:"uppercase"}}>{t.nav3}</span><h2 style={{fontSize:"clamp(22px,5vw,32px)",fontWeight:800,marginTop:8}}>{t.priceT}</h2></div>
        <div className="price-g" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,alignItems:"start"}}>
          {[{name:t.free,price:t.freePr,features:t.freeF,cta:t.freeCta,color:"#4a9eff",pop:false},
            {name:t.pro,price:t.proPr,features:t.proF,cta:t.proCta,color:"#ff891a",pop:true},
            {name:t.ent,price:t.entPr,features:t.entF,cta:t.entCta,color:"#a855f7",pop:false}
          ].map((plan,i)=><div key={i} style={{padding:24,borderRadius:20,background:cardBg,border:`2px solid ${plan.pop?plan.color+"60":cardBd}`,position:"relative",animation:"cardFloat 4s ease infinite",animationDelay:`${i*.4}s`,transform:plan.pop?"scale(1.03)":"none"}}>
            {plan.pop&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:`linear-gradient(135deg,${plan.color},#ff6b35)`,color:"white",padding:"4px 16px",borderRadius:20,fontSize:10,fontWeight:700}}>{t.popular}</div>}
            <div style={{textAlign:"center",marginBottom:16}}>
              <div style={{fontSize:14,fontWeight:700,color:plan.color,marginBottom:4}}>{plan.name}</div>
              <div style={{fontSize:32,fontWeight:900}}>{plan.price}<span style={{fontSize:12,fontWeight:500,color:fg3}}>{t.mo}</span></div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>{plan.features.map((f,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:8,fontSize:12,color:fg2}}><span style={{color:plan.color,fontSize:14}}>✓</span>{f}</div>)}</div>
            <button style={{width:"100%",padding:12,borderRadius:12,border:plan.pop?"none":`2px solid ${plan.color}40`,background:plan.pop?`linear-gradient(135deg,${plan.color},#ff6b35)`:"transparent",color:plan.pop?"white":plan.color,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans'"}}>{plan.cta}</button>
          </div>)}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{padding:"40px clamp(12px,4vw,24px) 50px",maxWidth:1000,margin:"0 auto"}}><div style={{textAlign:"center",marginBottom:36}}><span style={{fontSize:10,fontWeight:700,color:"#4a9eff",letterSpacing:3,textTransform:"uppercase"}}>{t.fL}</span><h2 style={{fontSize:"clamp(22px,5vw,32px)",fontWeight:800,marginTop:8}}>{t.fT}</h2></div><div className="feat-g" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:12}}>{feats.map((f,i)=><div key={i} style={{padding:20,borderRadius:16,background:cardBg,border:`1px solid ${cardBd}`,animation:"cardFloat 4s ease infinite",animationDelay:`${i*.2}s`}}><div style={{fontSize:28,marginBottom:8,animation:"bounce3d 3s ease infinite",animationDelay:`${i*.3}s`}}>{f.icon}</div><h3 style={{fontSize:14,fontWeight:700,marginBottom:3}}>{f.ti}</h3><p style={{fontSize:11,color:fg2,lineHeight:1.5}}>{f.de}</p></div>)}</div></section>

      {/* REVIEWS */}
      <section style={{padding:"40px clamp(12px,4vw,24px) 50px",maxWidth:800,margin:"0 auto"}}><div style={{textAlign:"center",marginBottom:30}}><span style={{fontSize:10,fontWeight:700,color:"#4a9eff",letterSpacing:3,textTransform:"uppercase"}}>{t.rL}</span><h2 style={{fontSize:"clamp(22px,5vw,32px)",fontWeight:800,marginTop:8}}>{t.rT}</h2></div><div style={{display:"flex",flexDirection:"column",gap:10}}>{revs.map((rv,i)=><div key={i} style={{padding:20,borderRadius:16,background:cardBg,border:`1px solid ${cardBd}`,opacity:i===aT?1:.4,transform:i===aT?"scale(1)":"scale(.97)",transition:"all .5s"}}><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><div style={{width:34,height:34,borderRadius:9,background:"linear-gradient(135deg,#1a4a8a40,#4a9eff30)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:11,color:"#4a9eff"}}>{rv.av}</div><div><div style={{fontWeight:700,fontSize:12}}>{rv.n}</div><div style={{fontSize:10,color:fg3}}>{rv.r}</div></div><div style={{marginLeft:"auto",color:"#ff891a",fontSize:11}}>★★★★★</div></div><p style={{fontSize:12,color:fg2,lineHeight:1.5,fontStyle:"italic"}}>"{rv.tx}"</p></div>)}</div></section>

      {/* CTA */}
      <section style={{padding:"50px clamp(12px,4vw,24px)",textAlign:"center",background:isL?"":"radial-gradient(ellipse 80% 50% at 50% 100%,#1a4a8a15 0%,transparent 60%)"}}><h2 style={{fontSize:"clamp(26px,5vw,36px)",fontWeight:900,letterSpacing:"-1px",marginBottom:10}}>{t.ctaT}</h2><p style={{fontSize:14,color:fg2,maxWidth:440,margin:"0 auto 20px"}}>{t.ctaD}</p><button className="btn-b" style={{fontSize:15,padding:"13px 38px"}}>{t.ctaB}</button></section>

      {/* LEGAL / DMCA SECTION */}
      {showLegal&&<div style={{position:"fixed",inset:0,zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",background:"#00000070",backdropFilter:"blur(4px)"}} onClick={()=>setShowLegal(false)}>
        <div onClick={e=>e.stopPropagation()} style={{background:isL?"#fff":"#0c0c14",borderRadius:20,padding:"28px 24px",maxWidth:500,width:"90%",maxHeight:"80vh",overflowY:"auto",border:`1px solid ${cardBd}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}><h2 style={{fontSize:20,fontWeight:800}}>{t.legalT}</h2><button onClick={()=>setShowLegal(false)} style={{background:inBg,border:`1px solid ${inBd}`,borderRadius:8,padding:"5px 12px",color:fg2,cursor:"pointer",fontSize:11,fontFamily:"'DM Sans'"}}>✕</button></div>
          
          {/* Copyright Policy */}
          <div style={{padding:16,borderRadius:14,background:inBg,border:`1px solid ${inBd}`,marginBottom:14}}>
            <div style={{fontSize:14,fontWeight:700,marginBottom:8}}>📜 Copyright Policy</div>
            <p style={{fontSize:12,color:fg2,lineHeight:1.6}}>{t.legalD}</p>
            <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:6}}>
              {["Users must own or have permission for videos they dub","VoxDub adds 'Powered by VoxDub' watermark on free plan","We don't store videos longer than 24 hours","Commercial use requires Pro or Business plan"].map((rule,i)=><div key={i} style={{display:"flex",gap:6,fontSize:11,color:fg2}}><span style={{color:"#4a9eff"}}>•</span>{rule}</div>)}
            </div>
          </div>

          {/* DMCA Takedown */}
          <div style={{padding:16,borderRadius:14,background:"#ff4d4d08",border:"1px solid #ff4d4d20",marginBottom:14}}>
            <div style={{fontSize:14,fontWeight:700,marginBottom:8,color:"#ff4d4d"}}>{t.dmcaT}</div>
            <p style={{fontSize:12,color:fg2,lineHeight:1.6,marginBottom:10}}>{t.dmcaD}</p>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {(t.dmcaSteps||[]).map((step,i)=><div key={i} style={{display:"flex",gap:8,alignItems:"center",fontSize:12,color:fg2}}>
                <div style={{width:22,height:22,borderRadius:"50%",background:"#ff4d4d15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:"#ff4d4d",flexShrink:0}}>{i+1}</div>
                {step}
              </div>)}
            </div>
            <div style={{marginTop:12,padding:"10px 14px",borderRadius:10,background:inBg,border:`1px solid ${inBd}`,fontSize:12}}>
              📧 Email: <span style={{color:"#4a9eff",fontWeight:700}}>{t.dmcaEmail}</span>
            </div>
          </div>

          {/* Powered by notice */}
          <div style={{padding:14,borderRadius:14,background:"#22c55e08",border:"1px solid #22c55e20",textAlign:"center"}}>
            <div style={{fontSize:11,color:fg3,marginBottom:4}}>All dubbed videos include</div>
            <div style={{fontSize:16,fontWeight:800,color:"#22c55e"}}>{t.watermark}</div>
            <div style={{fontSize:10,color:fg3,marginTop:4}}>Pro & Business plans can remove watermark</div>
          </div>
        </div>
      </div>}

      {/* FOOTER */}
      <footer style={{padding:"28px clamp(12px,4vw,24px) 18px",borderTop:`1px solid ${cardBd}`,textAlign:"center",color:fg3,fontSize:10}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:10}}><StarLogo size={22} /><span style={{fontWeight:800,fontSize:12,color:fg3}}>VoxDub</span></div>
        {/* Legal links */}
        <div style={{display:"flex",gap:16,justifyContent:"center",marginBottom:10,flexWrap:"wrap"}}>
          <button onClick={()=>setShowLegal(true)} style={{background:"none",border:"none",color:"#4a9eff",cursor:"pointer",fontSize:10,fontWeight:600,fontFamily:"'DM Sans'"}}>⚖️ {t.legalT}</button>
          <button onClick={()=>setShowLegal(true)} style={{background:"none",border:"none",color:"#ff4d4d",cursor:"pointer",fontSize:10,fontWeight:600,fontFamily:"'DM Sans'"}}>🛡️ {t.dmcaT}</button>
          <span style={{color:fg3}}>📋 Terms</span>
          <span style={{color:fg3}}>🔒 Privacy</span>
        </div>
        <p>© 2026 VoxDub. {t.foot}</p>
        <div style={{marginTop:6,fontSize:9,color:fg3,opacity:.6}}>Powered by LuxTTS (Apache 2.0) • Whisper (MIT) • Google Translate</div>
      </footer>
    </div>
  );
}
