# 🌟 Glosträning - Ebbe & Tove

En modern och färgglad glostränings-app med Firebase-synkning för att träna svenska och engelska ord.

## ✨ Funktioner

- 📚 **Träna glosor** i två riktningar (Svenska → Engelska eller Engelska → Svenska)
- 💡 **Ledtrådar** för svårare ord
- 📊 **Framstegsspårning** med detaljerad statistik per vecka
- 👥 **Flera användare** (Ebbe & Tove)
- 🔄 **Firebase-synkning** mellan alla enheter
- 📱 **PWA-stöd** - installera som app på mobil/platta
- 🎨 **Färgglatt gränssnitt** med animationer
- ⚡ **Real-time uppdateringar** via Firebase Realtime Database

## 🚀 Installation

### För webbanvändning:
1. Ladda upp filerna till en webbserver
2. Öppna `index.html` i en webbläsare
3. Appen är redo att använda!

### För installation som app på Samsung-platta:
1. Öppna appen i Chrome/Samsung Internet
2. Tryck på menyknappen (⋮)
3. Välj "Lägg till på startskärmen" eller "Installera app"
4. Appen är nu installerad och fungerar även offline!

## 🔧 Firebase-konfiguration

Appen använder Firebase Realtime Database för att synka data mellan enheter. Konfigurationen finns redan i `index.html` och är redo att användas.

### Datastruktur i Firebase:
```
patrikapps-cd169/
├── vocabulary/
│   ├── ebbe/
│   │   └── [{week, swedish, english, clue}, ...]
│   └── tove/
│       └── [{week, swedish, english, clue}, ...]
└── results/
    ├── ebbe/
    │   └── [{date, time, week, score, maxScore, percentage, direction}, ...]
    └── tove/
        └── [{date, time, week, score, maxScore, percentage, direction}, ...]
```

## 📁 Filer

- `index.html` - Huvudfil med all funktionalitet
- `manifest.json` - PWA-manifest för app-installation
- `sw.js` - Service Worker för offline-funktionalitet
- `icon-192.png` - App-ikon (192x192px)
- `icon-512.png` - App-ikon (512x512px)

## 🎯 Användning

### För elever (Ebbe/Tove):
1. Välj ditt namn på startsidan
2. Välj vilken vecka du vill träna
3. Välj träningsriktning (Svenska → Engelska eller tvärtom)
4. Svara på frågorna!
5. Se dina framsteg i "Framsteg"-fliken

### För admin:
1. Klicka på "Admin"
2. Välj användare
3. Fyll i vecka, svenska ord, engelska ord och valfri ledtråd
4. Klicka "Lägg till glosor"
5. Hantera befintliga glosor (ta bort om det behövs)

## 🎨 Design

- **Färgpalett**: Röd (#FF6B6B), Gul (#FFE66D), Turkos (#4ECDC4)
- **Animationer**: Gradient-shift, scale-in, shake, slide-down
- **Responsiv**: Fungerar på alla skärmstorlekar
- **Teman**: Ljust och färgglatt för att göra lärandet roligt!

## 🔄 Synkning

- **Real-time**: Ändringar synkas automatiskt mellan alla enheter
- **Offline-stöd**: Service Worker cachar filer för offline-användning
- **Auto-save**: All data sparas automatiskt till Firebase

## 🛠️ Teknologi

- **Frontend**: Vanilla JavaScript (ES6+)
- **Backend**: Firebase Realtime Database
- **PWA**: Manifest + Service Worker
- **Styling**: Pure CSS med gradients och animationer

## 📱 PWA-funktioner

- Installationsbar som app
- Fungerar offline
- Egna ikoner på hemskärmen
- Fullskärmsläge
- Snabb laddning tack vare caching

## 🎓 Pedagogiska funktioner

- **Adaptiv träning**: Slumpmässig ordning varje gång
- **Visuell feedback**: Tydliga rätt/fel-meddelanden
- **Ledtrådar**: Hjälp för svårare ord
- **Statistik**: Spåra framsteg över tid
- **Båda riktningar**: Träna både igenkänning och produktion

## 📊 Framstegsspårning

För varje vecka visas:
- Antal försök
- Genomsnittlig poäng
- Bästa resultat
- Senaste resultat
- Komplett historik med datum och tid

## 🔐 Säkerhet

- Firebase Security Rules bör konfigureras för produktion
- Nuvarande konfiguration är öppen för utveckling
- Rekommenderas att lägga till autentisering för skarp miljö

## 🤝 Bidrag

Detta är en personlig app för Ebbe och Tove, men förslag och förbättringar är välkomna!

## 📝 Licens

Privat användning för familjen.

---

**Skapad med ❤️ av Pappa Patrik**
