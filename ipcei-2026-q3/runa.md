# Runa · Vienas kilovatstundas ceļš

IPCEI-CIS · HVAC AI platforma · 2026. g. 3. ceturksnis · Zinātniskā padome

Tūre: `index.html`. Taustiņš P atver piezīmes atsevišķā logā (`notes.html`), kas mainās līdzi slaidiem un ar bultiņām pārslēdz slaidus. Uz pašiem slaidiem piezīmju nav. `#12` adreses beigās atver 12. soli. Šis fails tiek ģenerēts no tūres, tāpēc teksts sakrīt ar piezīmju logu.

## Galvenā doma

Mūsu ēka siltumu ņem no zemes, un MI izlemj, kad pirkt elektrību. Tāpēc siltums ir piecas reizes efektīvāks un lētāks. Viss strādā vienā sistēmā no EDGE iekārtām ēkā līdz ES mākonim.

## Kā strādā mūsu sistēma (sagatavei)

- Zeme visu gadu ir ap 8 °C silta. Pie VATP ir 18 urbumi.
- Ziemā auksto ūdeni izlaižam caur urbumiem, tas atgriežas siltāks, un to uzsildīt ir daudz vieglāk. Vasarā ēkas lieko siltumu aizvedam zemē, un tā ēku atvēsinām.
- Elektrību tērējam tikai uzsildīšanai, pašu siltumu dod zeme. Tāpēc 1 daļa elektrības un 4 daļas zemes siltuma kopā dod 5 daļas siltuma.
- COP nozīmē, cik siltuma dabūjam no vienas elektrības kWh. Elektriskais sildītājs: 1. Gāzes katls: ap 0,9. Mūsu sistēma: 5,5 (izmērīts šajā apkures sezonā).
- Ceļš ēkā: urbumi, siltumsūkņi, karstā tvertne (krāj siltumu kā baterija), tad radiatori, grīdas apkure un ventilācija. Karstajam ūdenim ir sava tvertne.
- Ventilācija siltumu neražo. Siltais ūdens plūst caur ventilācijas sildītāju (līdzīgu auto radiatoram), ventilators pūš cauri svaigu gaisu, un telpās ieplūst silts gaiss.
- Ko mērām: 11 elektrības skaitītāji (katrai iekārtai savs), siltumsūkņu siltuma skaitītāji, Siemens vārsti ventilācijai, temperatūras katrā caurulē.

## Skaitļi, kas jāzina

| Ko | Skaitlis | Avots |
|---|---|---|
| Siltumsūkņu efektivitāte | COP 5,50 | Enerģija, apkures sezona |
| Saražotais siltums | 11 207 kWh | turpat |
| Ēkas elektrība | 6 287 kWh, €907 (−21 % kWh, +10 % €) | turpat |
| Siltuma cena | €33.6/MWh, pilsētas €75 (−55 %) | turpat |
| CO₂ | 21 g/kWh, gāzes katlam 213 g | turpat |
| Karstais ūdens pēc cenas | vidēji −13 % | 7 dienu reālās Nord Pool LV cenas |
| Ventilācijas pārtēriņš | €21.40 no €94.81 (PN1, 29 dienas) | MI brīdinājums |
| Shēma | zeme 42 kW + elektrība 13 kW → 60 kW siltuma | Shēma, dzīvajā |
| Testi | 3 231 vienību, 449 integrācijas, 57 pārlūka scenāriji | GitHub main |

**#1 · Titulslaids**

• IPCEI-CIS: mākoņa un EDGE infrastruktūra  
• Mūsu daļa: HVAC AI platforma, iekārtas ēkā ↔ ES mākonis  
• Slaidu nebūs, rādīšu pašu platformu  
• Sekosim vienai kWh: ēka → iekšiene → MI un rēķins

## 1. Ēka

**#2 · Mūsu objekts: VATP ēka**  
_Uz ekrāna:_ Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi šobrīd strādā: 18 kW elektrības → 96,5 kW siltuma.

• Mūsu ēka 3D, katrs punktiņš = reāla iekārta  
• 3D ir eksperiments: ko rādīt lietotājiem un apmeklētājiem  
• Konferencēs redzējām, ka dažos tirgos to izvēlas  
• Abi siltumsūkņi strādā: 18 kW elektrības → ~97 kW siltuma

**#3 · Viens klikšķis, un iekārta ir redzama dzīvajā**  
_Uz ekrāna:_ Uzspiežot uz iekārtas, redzam, kā tā strādā tieši tagad: galvenais siltumsūknis no 6 kW elektrības dod 30,9 kW siltuma.

• Skats, lai saprastu ēku bez tehniskām zināšanām  
• Klikšķis uz galvenā siltumsūkņa  
• JAUTĀJUMS zālei: 6 kW elektrības, cik siltuma? (pagaidi)  
• ~31 kW, 5× vairāk, tieši tagad  
• Var uzspiest uz jebkuras iekārtas  
• Kā tas iespējams, vēlāk · dati no kontrollera = EDGE

## 2. Pārskats

**#4 · Sākumlapa, ko katrs pielāgo sev**  
_Uz ekrāna:_ Šo lietotājs redz katru rītu. Katrs pats izvēlas, ko šeit rādīt: patēriņu, izmaksas, cenu vai brīdinājumus.

• Ikdienā lietotājs atver sākumlapu  
• Katrs pats izvēlas kartītes un ieskatus  
• Pārvaldniekam izmaksas un brīdinājumi, tehniķim iekārtas  
• Šodienas kWh, €, salīdzinājums ar vakardienu, cena, laiks

**#5 · Prognoze nākamajām stundām**  
_Uz ekrāna:_ Viens no ieskatiem, ko pētām: MI prognozē ēkas patēriņu. Zaļās joslas ir lētās stundas, sārtās dārgās.

• Pētām, kādus ieskatus vērts rādīt, šis ir viens piemērs  
• MI prognozē patēriņu nākamajās stundās  
• Līnija = izmērīts, raustītā = prognoze  
• Zaļās joslas lētas, sārtās dārgas → vēlāk lēmums, kad tērēt

**#6 · Kas jāzina šodien**  
_Uz ekrāna:_ Svarīgākais dažās ziņās: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī un MI ieteikums ventilācijai.

• Nav jāpēta grafiki, svarīgākais dažās ziņās  
• Neapskatīti brīdinājumi · 39 % naktī · ventilācija uz lētām stundām  
• PĀREJA: no kurienes šīs ziņas? Ieskatīsimies, kā ēka strādā  
  
Ja jautā, no kurienes ziņas:  
• Brīdinājumi: kļūdu kodi, sensori bez datiem  
• Noteikumi: nakts > 35 %, bāzes slodze ±10 %, sistēma +15 %, dārgās stundas > 35 %  
• MI modeļi · ne vairāk par 4 ziņām  
  
Ja jautā, kā strādā modeļi (2 līdz 5 parametri, bez neironu tīkliem):  
• Patēriņa prognoze, lineārā regresija: taisne caur "āra temperatūra pret patēriņu" + rītdienas laika prognoze  
• Telpu modelis, fizika: 2 skaitļi telpai (cik ātri atdziest, cik siltuma pienāk) → temperatūra pēc dažām stundām  
• Ventilācijas patēriņš, regresija: cik vajadzētu pēc ventilatoriem, atgūšanas, sildītāja, laika; vairāk = filtrs vai motors  
• Siltuma atgūšana, formula: ritenis nodod siltumu no izplūstošā gaisa ienākošajam; 0 °C ārā, 20 °C iekšā, 10 °C pēc riteņa = 50 %; krītas = netīrs vai iesprūdis  
• Dārgās stundas, aritmētika: samaksātais pret tām pašām kWh lētākajās stundās  
• Karstā ūdens grafiks: izmēģina visus variantus, ņem lētāko  
• Katrs modelis jāpārspēj "rīt būs kā šodien", citādi neizmantojam

## 3. Iekārtas

**#7 · Siltums no zemes (skaidrojums)**

• Kā ēka iegūst siltumu  
• 18 urbumi, zeme dziļumā ~8 °C visu gadu  
• Šķidrums aiziet auksts, atgriežas siltāks  
• 2 siltumsūkņi uzsilda līdz vajadzīgajam → elektrības maz  
• "Pārstrādājam zemes siltumu"  
• Vasarā otrādi: lieko siltumu uz zemi  
• 1 daļa elektrības → 5 daļas siltuma · sildītājs 1 · gāze ~0,9 · mēs 5,5

**#8 · Siltummezgls dzīvajā**  
_Uz ekrāna:_ Visa sistēma vienā shēmā: urbumi, divi siltumsūkņi, tvertnes, radiatori un ventilācija.

• Tas pats mūsu ēkā, shēma dzīva  
• Sarkans silts, zils auksts  
• Iesim no zemes līdz telpām

**#9 · 1. Siltums no 18 urbumiem**  
_Uz ekrāna:_ Ziemā šķidrums urbumos uzņem zemes siltumu, vasarā ēkas siltumu aizvedam zemē. Šobrīd zeme dod 42 kW.

• 18 dziļi urbumi, šķidrums tajos sasilst  
• Zeme dod 42 kW, par tiem nemaksājam  
• Mēra siltuma skaitītājs: ~7 m³/h, +4 līdz 5 °C  
• Vasarā otrādi, zeme = siltuma krātuve visam gadam

**#10 · 2. Siltumsūkņi uzsilda**  
_Uz ekrāna:_ Šķidrums no zemes ir tikai ap 5 °C, ar to telpu nesasildīt. Ar 13 kW elektrības siltumsūkņi to uzsilda līdz 38 °C, un kopā sanāk 60 kW siltuma.

• Kāpēc nepietiek ar 42 kW?  
• Siltuma daudz, bet ~5 °C, pārāk vēss  
• Siltums plūst tikai no siltāka uz vēsāku  
• Radiatoriem vajag ~35 °C, karstajam ūdenim vairāk  
• Siltumsūknis "paceļ" siltumu kā sūknis ūdeni kalnā: 13 kW elektrības  
• Kopā 60 kW, lielāko daļu dod zeme

**#11 · 3. Tvertne un radiatori**  
_Uz ekrāna:_ Lielā tvertne krāj siltumu kā baterija. Radiatori šobrīd atdod telpām 19,9 kW siltuma, grīdas apkure vēl 1,6 kW.

• Tvertne krāj siltumu kā baterija  
• Radiatori telpām tagad dod 19,9 kW  
• Mēra Siemens ultraskaņas skaitītājs, nolasām caur M-Bus  
• Ienāk 33 °C, iziet 29 °C  
• Grīdas apkure vēl 1,6 kW, savs skaitītājs

**#12 · 4. Siltais gaiss**  
_Uz ekrāna:_ Siltais ūdens plūst arī caur ventilācijas sildītāju. Tas strādā kā auto salona apsilde: ventilators pūš gaisu caur karstu radiatoru, un telpās ieplūst silts gaiss.

• Silto ūdeni izmanto arī ventilācija  
• Kā auto salona apsilde: karsts ūdens caur radiatoru, ventilators pūš  
• Iekārtā tas pats, tikai lielāks: āra gaiss ienāk silts  
• Siemens vārsts mēra: tagad 21 kW

**#13 · 5. Karstais ūdens**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, platforma izlemj pēc elektrības cenas.

• Karstajam ūdenim sava tvertne  
• Šeit MI sāka strādāt pirmais  
• Pats izvēlas lētās stundas sildīšanai

**#14 · Mēs mērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 stundās 301 kWh elektrības: apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

• Energoefektivitāte = viss jāizmēra  
• 11 elektrības skaitītāji, katrai iekārtai savs  
• Siltumu mēra siltumsūkņi, vārsti un siltuma skaitītāji  
• Zinām, kur aiziet katra kWh

## 4. Enerģija

**#15 · Tagad sīkāk par enerģiju**  
_Uz ekrāna:_ Apkures sezonā patērējām par 21 % mazāk nekā mēnesi iepriekš, bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

• Tagad sīkāk par enerģiju, visa apkures sezona  
• −21 % kWh pret mēnesi iepriekš  
• +10 % rēķins, elektrība dārgāka  
• Ar taupīšanu nepietiek, svarīgi, KAD pērkam → to dara MI

**#16 · Kurš atceras, ko nozīmē COP?**  
_Uz ekrāna:_ Visā periodā COP bija 5,50: no katras elektrības kWh ieguvām piecarpus kWh siltuma. Dzesēšana bija oktobra sākumā, tagad tā ir apstājusies.

• JAUTĀJUMS zālei: kas ir COP? (pagaidi)  
• Cik siltuma no 1 kWh elektrības  
• Sezonā 5,5 · 11 207 kWh siltuma  
• Dzesēšana: oktobra sākumā vēl bija, tagad plakana, strādā tikai apkure

**#17 · Kur aiziet elektrība**  
_Uz ekrāna:_ Redzam, kur aiziet katra kilovatstunda, pa sistēmām un pa iekārtām. Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi.

• Kur aiziet elektrība: ēka → sistēmas → katra iekārta  
• Ventilācija iztērēja vairāk nekā abi siltumsūkņi  
• Pārsteigums → tāpēc MI sāk ar ventilāciju

**#18 · Patēriņš pa stundām**  
_Uz ekrāna:_ Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri. Ventilācija patērē daudz visu laiku.

• Patēriņš pa stundām, katrai stundai sava cena  
• Redzams pārslēgums no dzesēšanas uz apkuri  
• Ventilācija visu laiku augstu, lielākā patērētāja

**#19 · Par 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh, pilsētas €75/MWh. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

• Mūsu siltums €34/MWh, pilsētas €75 → −55 %  
• Ja elektrība ļoti dārga, pārslēdzamies uz pilsētas siltumu  
• Divi avoti, izmantojam lētāko

**#20 · Desmit reizes mazāk CO₂ nekā gāzei**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g. Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais.

• Mūsu siltums 21 g CO₂/kWh, gāze 213 g → 10× mazāk  
• Ventspils pilsētas siltums līdzīgā līmenī, pret to ieguvums ir cena  
• CO₂ rēķinām automātiski, to prasīs ES ziņošana

**#21 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Excel enerģijas atskaite par jebkuru mēnesi.

• Mēneša atskaite ar vienu pogu  
• Excel grāmatvedībai

## 5. MI

**#22 · Ko MI ņem vērā**

• MI plānotājs katru stundu skatās visu kopā  
• Ēkā ražotne → ar kritiskām iekārtām ļoti uzmanīgi  
• Karsto ūdeni MI vada pats  
• Apkurei un dzesēšanai: kopš nesen indekss, kad izdevīgāk; nākamais solis ar to vadīt siltumsūkņus  
• Ventilācijai: ieteikums pārcelt darba stundas  
  
Ko ņem vērā:  
• Nord Pool cena katrai rītdienas stundai  
• Laika prognoze 48 h + izmērītā āra temperatūra  
• Siltumsūkņu COP un EER katru stundu  
• Slodzes prognoze  
• Komforts: temperatūra, CO₂, mitrums, karstais ūdens ik 3 līdz 8 h  
• Iekārtas: tvertnes, kompresora starti, kļūdas  
• Pilsētas siltuma tarifs  
  
Ja jautā par modeļiem (bez dziļās mācīšanās, viena ēka, daži mēneši datu):  
• Slodzes prognoze: lineārā regresija pret āra temperatūru  
• Telpu modeļi: fizikas modelis (ARX), ridge regresija  
• Ventilācijas enerģija: ridge regresija  
• Siltuma atgūšana: fizikas formula + novirzes detektors (EWMA)  
• Karstā ūdens grafiks: pārlase, vienmēr labākais variants  
• Pārbaude uz vēstures: jāpārspēj "rīt būs kā šodien"

**#23 · Karstais ūdens pēc elektrības cenas**

• Īstais algoritms, īstas biržas cenas  
• JAUTĀJUMS zālei: kurās stundās jūs sildītu ūdeni? (pagaidi)  
• 30. oktobris: 5 stundas, −21 % pret vienmērīgu sildīšanu  
• Nedēļā vidēji −13 %  
• Apakšā: stundas, kad siltumsūknis lētāks par pilsētas siltumu

**#24 · Brīdinājumi: iekārtu kļūdas un MI atradumi**  
_Uz ekrāna:_ Siltumsūkņu kļūdu kodi, gaiss vārstos, sensori bez datiem un MI ieteikumi. Viss vienuviet, sagrupēts pa telpām.

• Viss, ko platforma atrod, vienuviet, pa telpām  
• Reāli šīs nedēļas brīdinājumi: kļūdu kodi, gaiss hidraulikā  
  
Ko platforma meklē pati:  
• Iekārtu kļūdas, sensori bez datiem  
• Neparasts patēriņš: 39 % naktī tukšā ēkā  
• Siltuma atgūšana krītas → ritenis netīrs vai iesprūdis  
• Ventilācija tērē vairāk, nekā modelis sagaida  
• Dārgās stundas → nākamais slaids

**#25 · Dārgās stundas ventilācijā**  
_Uz ekrāna:_ PN1 strādāja par 29 % dārgāk nekā lētākajās stundās: no €94.81 varēja ietaupīt €21.40.

• Viens MI atradums tuvāk  
• Salīdzina iztērēto ar to pašu lētākajās stundās  
• PN1: 29 dienās €95, no tiem €21 varēja ietaupīt  
• Ieteikums: pārcelt darba laiku

**#26 · Secinājumi vienkāršā valodā**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %”. Platforma tos uzraksta pati.

• Secinājumus platforma uzraksta pati  
• Neviens tos neraksta ar roku, tie rodas no datiem

**#27 · MI asistents**

• Pie tā strādājam: MI asistents  
• Jautā vienkārši: kāpēc ventilācija šomēnes dārgāka?  
• Atbild no ēkas datiem, rāda avotus  
• Piemērs ar šī mēneša reāliem skaitļiem  
• Valodas modelis ES mākonī = IPCEI-CIS mākoņa daļa

## 6. Kontrole

**#28 · Serveris ēkā (DATI Group)**

• IPCEI-CIS: EDGE + mākonis kā viena sistēma  
• EDGE: Climatix ×2, Luxtronik ×2, Siemens vārsti, 11 Shelly  
• Vārteja → serveris ēkā (kopā ar DATI Group)  
• Uz servera platforma, datubāze, MI → lēmumi ēkā  
• ES mākonis: rezerves kopijas, valodas modelis, cenas, laika prognoze  
• Kopija katru nakti, bloķēta; katru mēnesi atjaunošanas tests  
  
Siemens (atvērts diskusijai):  
• Viņu IPCEI-CIS projekts: Industrial Edge ierīču komplekts  
• Piedāvāja būvēt uz Industrial Edge  
• Mums neder: slēgta platforma, licences, dārgāka aparatūra, mums dažādi ražotāji  
• Izvēlējāmies atvērtu vārteju uz parastas aparatūras  
• Dalībniekiem ar Siemens rūpnīcām var derēt, gatavi apspriest

**#29 · Testēšana (TestDevLab)**

• Kā zinām, ka strādā?  
• TestDevLab IPCEI testēšanas stratēģija: 6 līmeņi, 7 testu grupas  
• Pielāgojām HVAC platformai, ieviešam līmeni pa līmenim  
• 3 200+ testi katrai funkcijai atsevišķi  
• ~450 testi ar īstu datubāzi  
• 57 pārlūka scenāriji kā īsts lietotājs, 7 lomu tiesības  
• Testi pie katras izmaiņas uz servera ēkā  
• Ēkā nonāk tikai pēc testiem un cilvēka apstiprinājuma

## 7. Tālāk

**#30 · Kas tālāk**

• MI asistents visiem lietotājiem  
• Nākamās ēkas  
• Digitālais dvīnis: izmēģināt izmaiņas pirms īstās ēkas

**#31 · Paldies**

• kWh nonākusi galā  
• Katrā pieturā zinājām: kur tā ir, cik maksā, kā nopirkt lētāk  
• Jautājumi

## Sagatave jautājumiem

- **Ko tieši MI vada?** Karsto ūdeni MI vada pats: izvēlas lētākās stundas un pats ieslēdz sildīšanu. Apkurei un dzesēšanai MI kopš nesen aprēķina indeksu, kad sildīt vai dzesēt izdevīgāk; nākamais solis ir ar to vadīt siltumsūkņus. Ēkā strādā ražotne, tāpēc ar kritiskām iekārtām esam ļoti uzmanīgi. Ventilācijai MI iesaka darba laiku.
- **Zeme dod 42 kW, bet siltumsūkņi 60 kW. Kur pārējais?** Siltums ir zemes siltums plus elektrība: 42 + 13 ≈ 55. Atlikums ir skaitītāju precizitāte un nobīde laikā starp tiem.
- **Vai CO₂ ir labāks nekā pilsētas siltumam?** Nē, līdzīgs, jo arī Ventspils pilsētas siltums ir ar zemu oglekļa pēdu. Mūsu priekšrocība ir cena (−55 %) un tas, ka to izmērām. Salīdzinot ar gāzes apkuri, CO₂ ir ap 10 reizēm mazāk.
- **Kas notiek, ja elektrība kļūst ļoti dārga?** Varam pārslēgties uz pilsētas siltumu. Ir divi avoti, un izmantojam lētāko.
- **Cik droša ir automātiskā vadība?** Katrai komandai ir robežas (piemēram, CO₂ mērķi var mainīt tikai no 400 līdz 2000), iekārta apstiprina izpildi, un, ja kaut kas nav skaidrs, sistēma izvēlas izslēgt.
- **Kur ir IPCEI-CIS daļa?** EDGE: iekārtu kontrolleri (Climatix ×2, Luxtronik ×2, Siemens vārsti, 11 Shelly), vārteja un serveris ēkā, ko izveidojām kopā ar DATI Group. Mākonis ES: rezerves kopijas (Scaleway, Varšava, bloķētas 7 dienas), asistenta valodas modelis (Scaleway, Parīze), Nord Pool cenas un laika prognozes.
- **Kāpēc ne Siemens Industrial Edge?** Siemens IPCEI-CIS projektā izveidoja Industrial Edge ierīču komplektu (IEDK, atvērts kods), ar ko arī citu ražotāju iekārtas var darbināt Siemens Industrial Edge vidi. Pati vide un tās pārvaldība paliek slēgta Siemens platforma ar licencēm, un Siemens aparatūra ir dārgāka. Mums ēkā ir Siemens, Luxtronik un Shelly iekārtas, tāpēc izvēlējāmies atvērtu Node-RED vārteju uz parastas aparatūras, bez piesaistes vienam ražotājam. Dalībniekiem, kuru rūpnīcās jau ir Siemens iekārtas, tas var būt labs ceļš.
- **Vai 3D ir dzīvs?** Jā, rādījumi ir reāli. Pats 3D skats ir eksperiments, kā ēku rādīt lietotājiem un apmeklētājiem.
- **Vai MI asistents jau strādā?** Prototips ir gatavs: valodas modelis ES mākonī. Slaidā ir piemērs ar šī mēneša reāliem datiem. Nākamais solis ir to dot lietotājiem.
- **Ko dara TestDevLab?** Viņi izstrādāja IPCEI testēšanas stratēģiju ar līmeņiem A līdz F un septiņām testu grupām. Mēs to pielāgojām HVAC platformai. Stratēģiju jau ieviešam, līmeni pa līmenim.
- **Kādi ML modeļi tie ir, dziļā mācīšanās?** Nē. Klasiskā statistika un fizika, ko var izskaidrot:
  - slodzes prognoze: lineārā regresija pret āra temperatūru;
  - telpu modeļi: fizikas modelis (ARX), ko pielāgo ar ridge regresiju;
  - ventilācijas enerģija: ridge regresija pret ventilatoru jaudu, siltuma atgūšanu, elektrisko sildītāju un āra temperatūru;
  - siltuma atgūšanas efektivitāte: fizikas formula un novirzes detektors (EWMA);
  - karstā ūdens grafiks un dārgo stundu analīze: optimizācija, kas pārbauda visus variantus.

  Katram modelim jābūt precīzākam par pieņēmumu “rīt būs kā šodien”, citādi to neizmantojam. Dziļā mācīšanās ir tikai asistenta valodas modelī.
- **Kāpēc ne neironu tīkli?** Dziļajai mācībai vajag tūkstošiem vai miljoniem parametru un ļoti daudz datu. Mūsu modeļiem ir 2 līdz 5 parametri, jo datu ir maz (viena ēka, daži mēneši). Turklāt katrs lēmums par iekārtām jāspēj izskaidrot.
