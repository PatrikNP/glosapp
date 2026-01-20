# 📱 Installationsguide för Samsung-platta

## Steg 1: Ladda upp till webbserver
1. Ladda upp alla filer till din webbserver:
   - index.html
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png

## Steg 2: Öppna på Samsung-plattan
1. Öppna **Samsung Internet** eller **Chrome** på plattan
2. Navigera till webbadressen där du lagt filerna (t.ex. https://dinserver.se/glostraning/)

## Steg 3: Installera som app
1. Tryck på **menyknappen** (⋮) i webbläsaren
2. Välj **"Lägg till på startskärmen"** eller **"Installera app"**
3. Bekräfta installationen
4. Ikonen dyker nu upp på hemskärmen!

## Steg 4: Använd appen
1. Tryck på ikonen på hemskärmen
2. Appen öppnas i fullskärmsläge utan webbläsarens gränssnitt
3. Allt synkas automatiskt via Firebase mellan alla enheter!

## ✅ Verifiering att det fungerar:
- [ ] Ikonen syns på hemskärmen
- [ ] Appen öppnas i fullskärm
- [ ] Du kan lägga till glosor i Admin
- [ ] Glosor synkas mellan enheter (testa på mobil + platta)
- [ ] Progress sparas mellan sessioner

## 🔧 Felsökning:

### "Lägg till på startskärmen" syns inte:
- Kontrollera att manifest.json laddas korrekt
- Öppna i Chrome istället för Samsung Internet
- Försäkra dig om att du använder HTTPS (krävs för PWA)

### Appen fungerar inte offline:
- Vänta några sekunder efter första laddningen
- Service Worker behöver tid att cacha filer
- Testa genom att stänga av WiFi och ladda om

### Data synkar inte:
- Kontrollera internetanslutning
- Öppna browser-konsolen och leta efter Firebase-fel
- Verifiera att Firebase Database URL är korrekt

## 🎯 Tips:
- Första gången appen laddas kan det ta någon sekund att hämta data från Firebase
- "Synkar med Firebase..." visas när data laddas/sparas
- All data sparas automatiskt - inget "spara"-knapptryck behövs!
- Appen fungerar offline efter första laddningen (men synkar vid nästa online-tillfälle)

## 📞 Support:
Om något inte fungerar, kontakta Pappa Patrik! 😊
