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

1. IPCEI-CIS: mākoņa un EDGE infrastruktūra
2. Mūsu daļa: HVAC AI platforma, iekārtas ēkā ↔ ES mākonis
3. Slaidu nebūs, rādīšu pašu platformu
4. Sekosim vienai kWh: ēka → iekšiene → MI un rēķins

## 1. Ēka

**#2 · Mūsu objekts: VATP ēka**  
_Uz ekrāna:_ Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi šobrīd strādā: 18 kW elektrības → 96,5 kW siltuma.

1. Mūsu ēka 3D, katrs punktiņš = reāla iekārta
2. 3D ir eksperiments: ko rādīt lietotājiem un apmeklētājiem
3. Konferencēs redzējām, ka dažos tirgos to izvēlas
4. Abi siltumsūkņi strādā: 18 kW elektrības → ~97 kW siltuma

**#3 · Viens klikšķis, un iekārta ir redzama dzīvajā**  
_Uz ekrāna:_ Uzspiežot uz iekārtas, redzam, kā tā strādā tieši tagad: galvenais siltumsūknis no 6 kW elektrības dod 30,9 kW siltuma.

1. Skats, lai saprastu ēku bez tehniskām zināšanām
2. Klikšķis uz galvenā siltumsūkņa
3. JAUTĀJUMS zālei: 6 kW elektrības, cik siltuma? (pagaidi)
4. ~31 kW, 5× vairāk, tieši tagad
5. Var uzspiest uz jebkuras iekārtas
6. Kā tas iespējams, vēlāk · dati no kontrollera = EDGE

## 2. Pārskats

**#4 · Sākumlapa, ko katrs pielāgo sev**  
_Uz ekrāna:_ Šo lietotājs redz katru rītu. Katrs pats izvēlas, ko šeit rādīt: patēriņu, izmaksas, cenu vai brīdinājumus.

1. Ikdienā lietotājs atver sākumlapu
2. Katrs pats izvēlas kartītes un ieskatus
3. Pārvaldniekam izmaksas un brīdinājumi, tehniķim iekārtas
4. Šodienas kWh, €, salīdzinājums ar vakardienu, cena, laiks

**#5 · Prognoze nākamajām stundām**  
_Uz ekrāna:_ Viens no ieskatiem, ko pētām: MI prognozē ēkas patēriņu. Zaļās joslas ir lētās stundas, sārtās dārgās.

1. Pētām, kādus ieskatus vērts rādīt, šis ir viens piemērs
2. MI prognozē patēriņu nākamajās stundās
3. Līnija = izmērīts, raustītā = prognoze
4. Zaļās joslas lētas, sārtās dārgas → vēlāk lēmums, kad tērēt

**#6 · Kas jāzina šodien**  
_Uz ekrāna:_ Svarīgākais dažās ziņās: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī un MI ieteikums ventilācijai.

1. Nav jāpēta grafiki, svarīgākais dažās ziņās
2. Neapskatīti brīdinājumi · 39 % naktī · ventilācija uz lētām stundām
3. PĀREJA: no kurienes šīs ziņas? Ieskatīsimies, kā ēka strādā


_Ja jautā, no kurienes ziņas:_

1. Brīdinājumi: kļūdu kodi, sensori bez datiem
2. Noteikumi: nakts > 35 %, bāzes slodze ±10 %, sistēma +15 %, dārgās stundas > 35 %
3. MI modeļi · ne vairāk par 4 ziņām


_Ja jautā, kā strādā modeļi (2 līdz 5 parametri, bez neironu tīkliem):_

1. Patēriņa prognoze, lineārā regresija: taisne caur "āra temperatūra pret patēriņu" + rītdienas laika prognoze
2. Telpu modelis, fizika: 2 skaitļi telpai (cik ātri atdziest, cik siltuma pienāk) → temperatūra pēc dažām stundām
3. Ventilācijas patēriņš, regresija: cik vajadzētu pēc ventilatoriem, atgūšanas, sildītāja, laika; vairāk = filtrs vai motors
4. Siltuma atgūšana, formula: ritenis nodod siltumu no izplūstošā gaisa ienākošajam; 0 °C ārā, 20 °C iekšā, 10 °C pēc riteņa = 50 %; krītas = netīrs vai iesprūdis
5. Dārgās stundas, aritmētika: samaksātais pret tām pašām kWh lētākajās stundās
6. Karstā ūdens grafiks: izmēģina visus variantus, ņem lētāko
7. Katrs modelis jāpārspēj "rīt būs kā šodien", citādi neizmantojam

## 3. Iekārtas

**#7 · Siltums no zemes (skaidrojums)**

1. Kā ēka iegūst siltumu
2. 18 urbumi, zeme dziļumā ~8 °C visu gadu
3. Šķidrums aiziet auksts, atgriežas siltāks
4. 2 siltumsūkņi uzsilda līdz vajadzīgajam → elektrības maz
5. "Pārstrādājam zemes siltumu"
6. Vasarā otrādi: lieko siltumu uz zemi
7. 1 daļa elektrības → 5 daļas siltuma · sildītājs 1 · gāze ~0,9 · mēs 5,5

**#8 · Siltummezgls dzīvajā**  
_Uz ekrāna:_ Visa sistēma vienā shēmā: urbumi, divi siltumsūkņi, tvertnes, radiatori un ventilācija.

1. Tas pats mūsu ēkā, shēma dzīva
2. Sarkans silts, zils auksts
3. Iesim no zemes līdz telpām

**#9 · 1. Siltums no 18 urbumiem**  
_Uz ekrāna:_ Ziemā šķidrums urbumos uzņem zemes siltumu, vasarā ēkas siltumu aizvedam zemē. Šobrīd zeme dod 42 kW.

1. 18 dziļi urbumi, šķidrums tajos sasilst
2. Zeme dod 42 kW, par tiem nemaksājam
3. Mēra siltuma skaitītājs: ~7 m³/h, +4 līdz 5 °C
4. Vasarā otrādi, zeme = siltuma krātuve visam gadam

**#10 · 2. Siltumsūkņi uzsilda**  
_Uz ekrāna:_ Šķidrums no zemes ir tikai ap 5 °C, ar to telpu nesasildīt. Ar 13 kW elektrības siltumsūkņi to uzsilda līdz 38 °C, un kopā sanāk 60 kW siltuma.

1. Kāpēc nepietiek ar 42 kW?
2. Siltuma daudz, bet ~5 °C, pārāk vēss
3. Siltums plūst tikai no siltāka uz vēsāku
4. Radiatoriem vajag ~35 °C, karstajam ūdenim vairāk
5. Siltumsūknis "paceļ" siltumu kā sūknis ūdeni kalnā: 13 kW elektrības
6. Kopā 60 kW, lielāko daļu dod zeme

**#11 · 3. Tvertne un radiatori**  
_Uz ekrāna:_ Lielā tvertne krāj siltumu kā baterija. Radiatori šobrīd atdod telpām 19,9 kW siltuma, grīdas apkure vēl 1,6 kW.

1. Tvertne krāj siltumu kā baterija
2. Radiatori telpām tagad dod 19,9 kW
3. Mēra Siemens ultraskaņas skaitītājs, nolasām caur M-Bus
4. Ienāk 33 °C, iziet 29 °C
5. Grīdas apkure vēl 1,6 kW, savs skaitītājs

**#12 · 4. Siltais gaiss**  
_Uz ekrāna:_ Siltais ūdens plūst arī caur ventilācijas sildītāju. Tas strādā kā auto salona apsilde: ventilators pūš gaisu caur karstu radiatoru, un telpās ieplūst silts gaiss.

1. Silto ūdeni izmanto arī ventilācija
2. Kā auto salona apsilde: karsts ūdens caur radiatoru, ventilators pūš
3. Iekārtā tas pats, tikai lielāks: āra gaiss ienāk silts
4. Siemens vārsts mēra: tagad 21 kW

**#13 · 5. Karstais ūdens**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, platforma izlemj pēc elektrības cenas.

1. Karstajam ūdenim sava tvertne
2. Šeit MI sāka strādāt pirmais
3. Pats izvēlas lētās stundas sildīšanai

**#14 · Mēs mērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 stundās 301 kWh elektrības: apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

1. Energoefektivitāte = viss jāizmēra
2. 11 elektrības skaitītāji, katrai iekārtai savs
3. Siltumu mēra siltumsūkņi, vārsti un siltuma skaitītāji
4. Zinām, kur aiziet katra kWh

## 4. Enerģija

**#15 · Tagad sīkāk par enerģiju**  
_Uz ekrāna:_ Apkures sezonā patērējām par 21 % mazāk nekā mēnesi iepriekš, bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

1. Tagad sīkāk par enerģiju, visa apkures sezona
2. −21 % kWh pret mēnesi iepriekš
3. +10 % rēķins, elektrība dārgāka
4. Ar taupīšanu nepietiek, svarīgi, KAD pērkam → to dara MI

**#16 · Kurš atceras, ko nozīmē COP?**  
_Uz ekrāna:_ Visā periodā COP bija 5,50: no katras elektrības kWh ieguvām piecarpus kWh siltuma. Dzesēšana bija oktobra sākumā, tagad tā ir apstājusies.

1. JAUTĀJUMS zālei: kas ir COP? (pagaidi)
2. Cik siltuma no 1 kWh elektrības
3. Sezonā 5,5 · 11 207 kWh siltuma
4. Dzesēšana: oktobra sākumā vēl bija, tagad plakana, strādā tikai apkure

**#17 · Kur aiziet elektrība**  
_Uz ekrāna:_ Redzam, kur aiziet katra kilovatstunda, pa sistēmām un pa iekārtām. Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi.

1. Kur aiziet elektrība: ēka → sistēmas → katra iekārta
2. Ventilācija iztērēja vairāk nekā abi siltumsūkņi
3. Pārsteigums → tāpēc MI sāk ar ventilāciju

**#18 · Patēriņš pa stundām**  
_Uz ekrāna:_ Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri. Ventilācija patērē daudz visu laiku.

1. Patēriņš pa stundām, katrai stundai sava cena
2. Redzams pārslēgums no dzesēšanas uz apkuri
3. Ventilācija visu laiku augstu, lielākā patērētāja

**#19 · Par 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh, pilsētas €75/MWh. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

1. Mūsu siltums €34/MWh, pilsētas €75 → −55 %
2. Ja elektrība ļoti dārga, pārslēdzamies uz pilsētas siltumu
3. Divi avoti, izmantojam lētāko

**#20 · Desmit reizes mazāk CO₂ nekā gāzei**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g. Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais.

1. Mūsu siltums 21 g CO₂/kWh, gāze 213 g → 10× mazāk
2. Ventspils pilsētas siltums līdzīgā līmenī, pret to ieguvums ir cena
3. CO₂ rēķinām automātiski, to prasīs ES ziņošana

**#21 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Excel enerģijas atskaite par jebkuru mēnesi.

1. Mēneša atskaite ar vienu pogu
2. Excel grāmatvedībai

## 5. MI

**#22 · Ko MI ņem vērā**

1. MI plānotājs katru stundu skatās visu kopā
2. Ēkā ražotne → ar kritiskām iekārtām ļoti uzmanīgi
3. Karsto ūdeni MI vada pats
4. Apkurei un dzesēšanai: kopš nesen indekss, kad izdevīgāk; nākamais solis ar to vadīt siltumsūkņus
5. Ventilācijai: ieteikums pārcelt darba stundas


_Ko ņem vērā:_

1. Nord Pool cena katrai rītdienas stundai
2. Laika prognoze 48 h + izmērītā āra temperatūra
3. Siltumsūkņu COP un EER katru stundu
4. Slodzes prognoze
5. Komforts: temperatūra, CO₂, mitrums, karstais ūdens ik 3 līdz 8 h
6. Iekārtas: tvertnes, kompresora starti, kļūdas
7. Pilsētas siltuma tarifs


_Ja jautā par modeļiem (bez dziļās mācīšanās, viena ēka, daži mēneši datu):_

1. Slodzes prognoze: lineārā regresija pret āra temperatūru
2. Telpu modeļi: fizikas modelis (ARX), ridge regresija
3. Ventilācijas enerģija: ridge regresija
4. Siltuma atgūšana: fizikas formula + novirzes detektors (EWMA)
5. Karstā ūdens grafiks: pārlase, vienmēr labākais variants
6. Pārbaude uz vēstures: jāpārspēj "rīt būs kā šodien"

**#23 · Karstais ūdens pēc elektrības cenas**

1. Īstais algoritms, īstas biržas cenas
2. JAUTĀJUMS zālei: kurās stundās jūs sildītu ūdeni? (pagaidi)
3. 30. oktobris: 5 stundas, −21 % pret vienmērīgu sildīšanu
4. Nedēļā vidēji −13 %
5. Apakšā: stundas, kad siltumsūknis lētāks par pilsētas siltumu

**#24 · Brīdinājumi: iekārtu kļūdas un MI atradumi**  
_Uz ekrāna:_ Siltumsūkņu kļūdu kodi, gaiss vārstos, sensori bez datiem un MI ieteikumi. Viss vienuviet, sagrupēts pa telpām.

1. Viss, ko platforma atrod, vienuviet, pa telpām
2. Reāli šīs nedēļas brīdinājumi: kļūdu kodi, gaiss hidraulikā


_Ko platforma meklē pati:_

1. Iekārtu kļūdas, sensori bez datiem
2. Neparasts patēriņš: 39 % naktī tukšā ēkā
3. Siltuma atgūšana krītas → ritenis netīrs vai iesprūdis
4. Ventilācija tērē vairāk, nekā modelis sagaida
5. Dārgās stundas → nākamais slaids

**#25 · Dārgās stundas ventilācijā**  
_Uz ekrāna:_ PN1 strādāja par 29 % dārgāk nekā lētākajās stundās: no €94.81 varēja ietaupīt €21.40.

1. Viens MI atradums tuvāk
2. Salīdzina iztērēto ar to pašu lētākajās stundās
3. PN1: 29 dienās €95, no tiem €21 varēja ietaupīt
4. Ieteikums: pārcelt darba laiku

**#26 · Secinājumi vienkāršā valodā**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %”. Platforma tos uzraksta pati.

1. Secinājumus platforma uzraksta pati
2. Neviens tos neraksta ar roku, tie rodas no datiem

**#27 · MI asistents**

1. Pie tā strādājam: MI asistents
2. Jautā vienkārši: kāpēc ventilācija šomēnes dārgāka?
3. Atbild no ēkas datiem, rāda avotus
4. Piemērs ar šī mēneša reāliem skaitļiem
5. Valodas modelis ES mākonī = IPCEI-CIS mākoņa daļa

## 6. Kontrole

**#28 · Serveris ēkā (DATI Group)**

1. IPCEI-CIS: EDGE + mākonis kā viena sistēma
2. EDGE: Climatix ×2, Luxtronik ×2, Siemens vārsti, 11 Shelly
3. Vārteja → serveris ēkā (kopā ar DATI Group)
4. Uz servera platforma, datubāze, MI → lēmumi ēkā
5. ES mākonis: rezerves kopijas, valodas modelis, cenas, laika prognoze
6. Kopija katru nakti, bloķēta; katru mēnesi atjaunošanas tests


_Siemens (atvērts diskusijai):_

1. Viņu IPCEI-CIS projekts: Industrial Edge ierīču komplekts
2. Piedāvāja būvēt uz Industrial Edge
3. Mums neder: slēgta platforma, licences, dārgāka aparatūra, mums dažādi ražotāji
4. Izvēlējāmies atvērtu vārteju uz parastas aparatūras
5. Dalībniekiem ar Siemens rūpnīcām var derēt, gatavi apspriest

**#29 · Testēšana (TestDevLab)**

1. Kā zinām, ka strādā?
2. TestDevLab IPCEI testēšanas stratēģija: 6 līmeņi, 7 testu grupas
3. Pielāgojām HVAC platformai, ieviešam līmeni pa līmenim
4. 3 200+ testi katrai funkcijai atsevišķi
5. ~450 testi ar īstu datubāzi
6. 57 pārlūka scenāriji kā īsts lietotājs, 7 lomu tiesības
7. Testi pie katras izmaiņas uz servera ēkā
8. Ēkā nonāk tikai pēc testiem un cilvēka apstiprinājuma

## 7. Tālāk

**#30 · Kas tālāk**

1. MI asistents visiem lietotājiem
2. Nākamās ēkas
3. Digitālais dvīnis: izmēģināt izmaiņas pirms īstās ēkas

**#31 · Paldies**

1. kWh nonākusi galā
2. Katrā pieturā zinājām: kur tā ir, cik maksā, kā nopirkt lētāk
3. Jautājumi

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
