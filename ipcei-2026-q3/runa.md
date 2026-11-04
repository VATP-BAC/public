# Runa · Vienas kilovatstundas ceļš

IPCEI-CIS · HVAC AI platforma · 2026. g. 3. ceturksnis · Zinātniskā padome

Tūre: `index.html` (N — piezīmes ekrānā, `#12` — pāriet uz soli 12). Šis fails tiek ģenerēts no tūres, tāpēc teksts sakrīt ar piezīmēm ekrānā.

## Viena doma, kas jāatceras

**IPCEI-CIS: no iekārtas malā līdz ES mākonim. Mūsu ēka siltumu ņem no zemes, un MI izlemj, kad pirkt elektrību, kas to “pārsūknē” — tāpēc siltums ir piecas reizes efektīvāks un lētāks.**

## Siltumsūknis — vienkāršiem vārdiem (sagatavei)

- **Ledusskapis otrādi.** Ledusskapis paņem siltumu no pārtikas un izmet virtuvē (tāpēc tā aizmugure ir silta). Siltumsūknis paņem siltumu no zemes un ielaiž ēkā.
- **Zeme ir bezmaksas siltuma krātuve.** ~100 m dziļumā zeme visu gadu ir ap 8 °C — gan ziemā, gan vasarā.
- **Elektrība tikai “sūknē”.** Mēs nemaksājam par siltumu, tikai par tā pārnešanu. Tāpēc 1 daļa elektrības + 4 daļas zemes siltuma = 5 daļas siltuma ēkai.
- **COP** = cik siltuma dabūjam no vienas elektrības kWh. Elektriskais sildītājs: 1. Gāzes katls: ~0,9. Mūsu siltumsūkņi: 5,5 (izmērīts 6. okt – 3. nov).
- **Ceļš ēkā:** urbumi → siltumsūknis → karstā tvertne (“baterija”) → radiatori, grīdas apkure, ventilācija; atsevišķi — karstā ūdens tvertne.
- **Ko mēs mērām katrā solī:** 11 elektrības skaitītāji (katrai iekārtai), siltumsūkņu iekšējie siltuma skaitītāji, Siemens vārsti ventilācijai, temperatūras katrā caurulē.

## Skaitļi, kas jāzina no galvas

| Ko | Skaitlis | Avots |
|---|---|---|
| Siltumsūkņu efektivitāte | COP 5,50 | Enerģija, 6. okt – 3. nov |
| Saražotais siltums | 11 207 kWh | turpat |
| Ēkas elektrība | 6 287 kWh, €907 (−21 % kWh, +10 % €) | turpat |
| Siltuma cena | €33.6/MWh pret pilsētas €75 (−55 %) | turpat |
| CO₂ | 21 g/kWh pret gāzes 213 g | turpat |
| Karstais ūdens pēc cenas | −13 % vidēji 7 dienās | Nord Pool LV 28. okt – 3. nov |
| Ventilācijas pārtēriņš | €21.40 no €94.81 (PN1, 29 d) | MI brīdinājums |
| Shēma (ierakstīts 4. nov) | zeme 42 kW + elektrība 13 kW → 60 kW siltuma | Shēma, dzīvajā |
| Testi | ≈3 700 automātisku testu, līmeņi A–E strādā | GitHub main, 4. nov |

**#1 · Titulslaids**

Šis ir IPCEI-CIS projekts — mākoņa un malas skaitļošanas infrastruktūra. Mūsu daļa: HVAC AI platforma, kas savieno iekārtas ēkā ar ES mākoni. Šodien neparādīšu slaidus par platformu — parādīšu pašu platformu. Sekosim vienai kilovatstundai: no brīža, kad to nopērkam biržā, līdz brīdim, kad tā silda telpu un parādās rēķinā. Un pa ceļam parādīšu, kur MI to padara lētāku.

## 1. Ēka

**#2 · Šeit viss sākas — mūsu objekts**  
_Uz ekrāna:_ VATP ēka 3D. Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi strādā: 18 kW elektrības → 96,5 kW siltuma.

Šeit viss sākas — šis ir mūsu objekts. Katrs punktiņš ir reāla iekārta, kas sūta datus uz platformu. 3D skats ir eksperiments: mēģinām dažādus veidus, kā un ko rādīt — gan ikdienas lietotājiem, gan cilvēkiem, kas apmeklē ēku. Konferencēs redzējām, ka vismaz dažos tirgos uzņēmumi tieši šādus 3D modeļus izvēlas, tāpēc izmēģinājām arī mēs.

**#3 · Kur kilovatstunda kļūst par siltumu**  
_Uz ekrāna:_ Galvenais siltumsūknis: 6 kW elektrības → 30,9 kW siltuma. Kā no 6 var dabūt 31? Pie tā atgriezīsimies.

Mūsu kilovatstunda ceļo tieši šurp — uz siltumsūkni uz jumta. Uzspiežot redzam, ko tas dara šobrīd: ieņem 6 kilovatus elektrības un atdod gandrīz 31 kilovatu siltuma. No zemes šķidrums ienāk ar 6 grādiem, atpakaļ aiziet ar nulli — to siltumu siltumsūknis paņēma. Tas izklausās pēc maģijas — un vēlāk parādīšu, kā tas strādā. Šie dati nāk tieši no siltumsūkņa kontrollera — tā ir malas daļa mūsu IPCEI-CIS sistēmā.

## 2. Pārskats

**#4 · Ikdienā — galvenais panelis**  
_Uz ekrāna:_ Pārvaldnieks katru rītu atver šo: cik šodien patērējām, cik tas maksāja un kas mainījies kopš vakardienas.

3D ir skaists, bet ikdienā pārvaldnieks atver šo — galveno paneli. Vienā skatā: cik kilovatstundu šodien patērējām, cik tas maksāja, kā tas salīdzinās ar vakardienu, kāda ir elektrības cena un laiks ārā.

**#5 · MI zina, kas būs rīt**  
_Uz ekrāna:_ Līnija — ēkas patēriņš; raustītā — MI prognoze. Pelēkās joslas — lētās stundas, sārtās — dārgās.

Te pirmo reizi parādās MI. Tas prognozē, cik enerģijas ēkai vajadzēs nākamajās stundās, un fonā redzam, kuras stundas būs lētas un kuras dārgas. Prognoze plus cena — no tā MI vēlāk izlemj, kad tērēt.

**#6 · MI pasaka, kas jāzina šodien**  
_Uz ekrāna:_ Trīs ziņas vienkāršā valodā: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī, un ieteikums ventilācijai.

Pārvaldniekam nav jārok grafikos — MI pats saliek svarīgāko trīs teikumos. Šodien: ir neapskatīti brīdinājumi; 39 procenti enerģijas aizgāja naktī, kad ēka ir tukša; un ieteikums ventilāciju darbināt lētākajās stundās. Tālāk paskatīsimies, no kurienes tas viss nāk — ēkas iekšienē.

## 3. Iekārtas

**#7 · Kā strādā siltumsūknis (skaidrojums)**

Pirms ejam iekšā — kā vispār strādā siltumsūknis? Iedomājieties ledusskapi. Tas izsūknē siltumu no pārtikas un izmet virtuvē — tāpēc ledusskapja aizmugure ir silta. Siltumsūknis dara to pašu, tikai otrādi: izsūknē siltumu no zemes un ielaiž ēkā. Zeme siltumu dod par brīvu — mēs maksājam tikai par “sūknēšanu”. Tāpēc no vienas elektrības daļas iznāk piecas siltuma daļas. Elektriskais sildītājs dod vienu pret vienu, gāzes katls pat mazāk. Mūsu siltumsūkņi — piecarpus, un tas ir izmērīts.

**#8 · Tagad — mūsu ēkā, dzīvajā**  
_Uz ekrāna:_ Siltums ceļo no kreisās uz labo: zeme → siltumsūkņi → tvertne → telpas un gaiss.

Tagad tas pats mūsu ēkā, dzīvajā. Šī shēma kustas — plūsmas iet pa caurulēm, sarkans ir silts, zils auksts. Izsekosim siltumam soli pa solim.

**#9 · 1. Paņemam siltumu no zemes**  
_Uz ekrāna:_ Zem ēkas ir dziļi urbumi. Šķidrums tajos ieiet auksts, iznāk siltāks. Šobrīd zeme dod 42 kW — par brīvu.

Pirmais solis: zeme. Zem ēkas ir urbumi, pa tiem riņķo šķidrums. Dziļumā zeme visu gadu ir ap 8 grādiem, tāpēc šķidrums atgriežas siltāks. Šobrīd zeme mums dod 42 kilovatus — un par tiem nemaksājam neko.

**#10 · 2. Siltumsūknis to “sasilda”**  
_Uz ekrāna:_ 42 kW no zemes + 13 kW elektrības → 60 kW siltuma. Gandrīz ¾ siltuma nāk no zemes.

Otrais solis: zemes siltums ir vēss — tikai daži grādi. Siltumsūknis to saspiež un sasilda līdz temperatūrai, ar ko var sildīt ēku. Tam vajag elektrību — 13 kilovatus. Rezultātā 60 kilovati siltuma. Tā ir mūsu energoefektivitāte: lielāko daļu siltuma dod zeme, elektrība tikai palīdz.

**#11 · 3. Siltums nonāk telpās**  
_Uz ekrāna:_ Lielā tvertne strādā kā siltuma baterija. No tās silts ūdens iet uz radiatoriem — šobrīd 19,9 kW.

Trešais solis: siltums nonāk lielā tvertnē — tā ir kā baterija, kas krāj siltumu. No tās silts ūdens aiziet uz radiatoriem un grīdas apkuri. Šie skaitļi ir tieši šī brīža jauda.

**#12 · 4. …un svaigajā gaisā**  
_Uz ekrāna:_ Ārā ir 7 °C. Ventilācija svaigo gaisu uzsilda līdz 27 °C — tam šobrīd aiziet 21 kW.

Ceturtais solis: daļa siltuma aiziet ventilācijā. Ārā ir septiņi grādi, un svaigais gaiss jāuzsilda, pirms tas ieplūst telpās. Siemens vārsts precīzi mēra, cik siltuma tam aiziet.

**#13 · 5. Un karstais ūdens krānā**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, izlemj platforma — pēc elektrības cenas.

Un karstais ūdens krānos. Šī tvertne ir MI pirmais darba lauks: platforma pati izvēlas, kurās stundās to sildīt, lai elektrība būtu vislētākā.

**#14 · Un mēs izmērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 h: 301 kWh elektrības — apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

Lai varētu teikt “energoefektīvi”, tas ir jāizmēra. Elektrību mēra 11 skaitītāji uz katras iekārtas, siltumu — siltumsūkņu un vārstu skaitītāji. Tāpēc platforma zina, kur aizgāja katra kilovatstunda.

**#15 · Mēra arī pašu iekārtu**  
_Uz ekrāna:_ Katrs siltumsūkņa rādījums nāk tieši no iekārtas: temperatūras, starti, darba stundas, kļūdu kodi.

Un ne tikai enerģiju — katra iekārta dod desmitiem rādījumu, visi atjaunoti pirms minūtes. Tā ir izejviela visiem MI modeļiem.

## 4. Komforts

**#16 · Kilovatstunda ir telpā**  
_Uz ekrāna:_ Visas otrā stāva telpas šobrīd ir zaļajā komforta zonā — siltums ir tur, kur vajag.

Mūsu kilovatstunda beidzot ir telpā. Stāva plānā redzam, kā jūtas katra telpa — šobrīd visas zaļajā zonā. Tieši tam to visu darām.

## 5. Enerģija

**#17 · Patērējām par 21 % mazāk…**  
_Uz ekrāna:_ …bet rēķins pieauga par 10 %: elektrība kļuva dārgāka. Tāpēc tikpat svarīgi ir, KAD mēs to pērkam.

Rēķins par apkures sezonu kopš 6. oktobra. Patērējām par piekto daļu mazāk nekā mēnesi iepriekš — bet samaksājām vairāk, jo elektrība kļuva dārgāka. Ar taupīšanu vien nepietiek; jāpērk lētajās stundās. Tieši tur strādā MI.

**#18 · 11 207 kWh siltuma**  
_Uz ekrāna:_ Siltumsūkņi visā periodā strādāja ar COP 5,50: no katras elektrības kWh — piecarpus kWh siltuma.

Otrā rinda — ko saražojām: 11 tūkstoši kilovatstundu siltuma telpām un vēl karstais ūdens. Vidējā efektivitāte visā periodā — 5,5. Tas nav kataloga skaitlis, tas ir izmērīts.

**#19 · Kur aizgāja katrs eiro**  
_Uz ekrāna:_ No ēkas uz sistēmu un uz katru iekārtu: ventilācija 49 %, apkure 41 %.

Šī diagramma parāda, kur aizgāja nauda. Pārsteigums — ventilācija patērē vairāk nekā apkure. Tāpēc MI vispirms skatās uz ventilāciju.

**#20 · Katra stunda — sava cena**  
_Uz ekrāna:_ Patēriņš pa stundām, reizināts ar Nord Pool cenu tajā pašā stundā.

Elektrība katru stundu maksā citādi — melnā līnija ir biržas cena. Redzat, cik tā lēkā. Kad patērējam, ir tikpat svarīgi kā cik daudz.

**#21 · 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh. Pilsētas apkure — €75/MWh.

Vai siltumsūkņi atmaksājas? Mūsu siltuma megavatstunda maksāja 34 eiro, pilsētas — 75. Izmērīts, nevis aprēķināts no kataloga.

**#22 · ~10× mazāk CO₂ nekā gāzes katlam**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g. Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais.

Katrai kilovatstundai ir oglekļa pēda. Tā kā lielāko daļu siltuma dod zeme, mūsu siltumam ir tikai 21 grams CO₂ uz kilovatstundu. Gāzes katlam būtu 213 — desmit reizes vairāk. Godīgi jāsaka: Ventspils pilsētas siltums ir līdzīgā līmenī — mūsu priekšrocība ir cena, ne CO₂. Platforma to rēķina automātiski, un tieši to prasīs ES ziņošana.

**#23 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Gatava Excel enerģijas atskaite par jebkuru mēnesi.

Un mēneša beigās — viena poga, un grāmatvedībai ir gatava atskaite.

## 6. MI

**#24 · Ko MI ņem vērā**

MI plānotājs katru stundu skatās uz visu reizē. Ievadē: elektrības cena katrai stundai rītdienai no Nord Pool; laika prognoze 48 stundām — āra temperatūra, saule, mākoņi, vējš — un ēkā izmērītā āra temperatūra; siltumsūkņu efektivitāte, ko mērām katru stundu; MI prognoze, cik enerģijas ēkai vajadzēs; komforta robežas — telpu temperatūra, CO₂, mitrums, un ka karstais ūdens jāuzsilda ik 3 līdz 8 stundām; iekārtu stāvoklis — tvertņu temperatūras, kompresora starti, kļūdas; un pilsētas siltuma tarifs salīdzinājumam. Izvadē: karsto ūdeni sildām lētajās stundās; apkurē ēku un tvertni uzsildām, kamēr elektrība lēta; dzesēšanā atdzesējam iepriekš; ventilācijas darba stundas pārceļam uz lētāko laiku.

**#25 · Vadība pēc elektrības cenas (interaktīvs)**

Šis ir īstais algoritms, kas strādā mūsu ēkā, uz īstām biržas cenām. Pirms rādu — kurās stundās jūs sildītu ūdeni? … Platforma izvēlas šīs piecas stundas, un tas ir vidēji 13 % lētāk. Uzklikšķiniet uz citas dienas — plāns mainās. Apakšā: stundas, kad siltumsūkņa siltums ir lētāks par pilsētas.

**#26 · Plāno. Vada. Mēra.**

Un tas strādā pats. Katru dienu platforma saplāno, pati ieslēdz un izslēdz karstā ūdens sistēmu, un katru dienu izmēra ietaupījumu eiro. Kopš 8. septembra — 24 stundas diennaktī, bez cilvēka.

**#27 · MI pamana dārgas stundas**  
_Uz ekrāna:_ PN1 strādāja 29 % virs lētāko stundu optimuma: €21.40 no €94.81 bija ietaupāmi.

To pašu MI dara ar ventilāciju: salīdzina, cik iztērējām, ar to, cik būtu iztērējuši lētākajās stundās, un iesaka pārcelt darba laiku.

**#28 · Platforma pati paskaidro**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %” — bez neviena iestatījuma.

Un platforma pati raksta secinājumus vienkāršā valodā. Šie teikumi ir uzrakstīti automātiski, no datiem.

**#29 · MI asistents**

Nākamais solis, ko jau būvējam: MI asistents. Jūs vienkārši pajautājat — “kāpēc ventilācija šomēnes maksāja vairāk?” — un tas atbild no ēkas datiem, ar avotiem. Šeit piemērs uz šī mēneša reālajiem skaitļiem. Valodas modelis darbojas ES mākonī — tā ir mūsu IPCEI-CIS mākoņa daļa — un izmaksām ir griesti: eiro dienā visai ēkai.

**#30 · Ko mums dod MI**

Tātad, ko MI mums dod jau šodien: karstais ūdens par 13 % lētāk, automātiski. Ventilācijā atrasti 21 eiro mēnesī, ko tērējām dārgajās stundās. Kļūdas iekārtās atrod pati, pirms kāds pamana. Un prognoze 48 stundas uz priekšu, uz kā balstās viss pārējais.

## 7. Kontrole

**#31 · Kad kaut kas noiet greizi**  
_Uz ekrāna:_ Siltumsūkņa kļūdu kodi, gaiss vārstos, novecojuši sensori — viss vienā iesūtnē, grupēts pa telpām.

Ne viss vienmēr strādā. Šeit reāli brīdinājumi no šīs nedēļas — siltumsūkņa kļūdas kodi un gaiss hidraulikā. Platforma tos atrada pati un pastāstīja, kur tie ir.

**#32 · Autonoms — drošās robežās**  
_Uz ekrāna:_ Platforma vada pati, bet katrai komandai ir robežas, ārpus kurām tā neiziet.

Platforma strādā autonomi, bet nekad ārpus drošām robežām. Piemēram, CO₂ mērķi var mainīt tikai starp 400 un 2000.

**#33 · Serveris ēkā (DATI Group)**

Šī ir IPCEI-CIS būtība: mala un mākonis kā viena sistēma. Malā — iekārtu kontrolleri: divi Siemens Climatix ventilācijai, divi Luxtronik siltumsūkņiem, Siemens enerģijas vārsti un 11 Shelly skaitītāji. Tos visus apkalpo vārteja un serveris tepat ēkā, ko izveidojām kopā ar DATI Group — tur strādā platforma, datubāze un MI, tāpēc lēmumi notiek ēkā. Mākonī, ES datu centros — rezerves kopijas, valodas modelis asistentam, elektrības cenas un laika prognozes. Kopš 16. oktobra dati un vadība glabājas ēkā, rezerves kopija — ES. Katru nakti kopija, viena ārpus ēkas, bloķēta, lai to nevar izdzēst. Un katru mēnesi pārbaudām, ka no kopijas tiešām var atjaunot visu sistēmu — pirmais tests izturēts.

**#34 · Testēšana (TestDevLab)**

Kā mēs zinām, ka tas strādā? TestDevLab izstrādāja IPCEI testēšanas stratēģiju ar sešiem līmeņiem — no maziem koda testiem līdz pieņemšanai ēkā. Mēs to pielāgojām HVAC platformai. Pirmie pieci līmeņi jau strādā: ap 3 700 automātisku testu uz katru koda izmaiņu, uz tā paša servera. Pēdējais līmenis — pilota pieņemšana — 2027. gada maijā.

## 8. Tālāk

**#35 · Kas tālāk**

Tālāk: MI asistents visiem lietotājiem, siltuma mērītāji katram kontūram un digitālais dvīnis, kurā izmēģināt izmaiņas pirms īstās ēkas.

**#36 · Paldies**

Paldies. Mūsu kilovatstunda ir nonākusi galā — un katrā pieturā platforma zināja, kur tā ir, cik tā maksā un kā to nopirkt lētāk.

## Sagatave jautājumiem

- **“Ko tieši MI vada?”** Karsto ūdeni, apkuri un dzesēšanu pēc elektrības cenas un pārējiem rādītājiem (sk. #24 piezīmes); ventilācijai — darba stundas uz lētāko laiku.
- **“Zeme 42 kW, bet siltumsūkņi dod 60 kW — kur pārējais?”** Siltums = zemes siltums + elektrība (42 + 13 ≈ 55); atlikums ir mērījumu precizitāte un laika nobīde starp skaitītājiem.
- **“Vai CO₂ ir labāks nekā pilsētas siltumam?”** Nē, līdzīgs — Ventspils pilsētas siltums arī ir zema oglekļa. Mūsu priekšrocība ir cena (−55 %) un tas, ka mēs to izmērām. Pret gāzes apkuri — ~10× mazāk.
- **“Cik droša ir autonomā vadība?”** Katrai komandai ir robežas (piem., CO₂ mērķis tikai 400–2000), iekārta apstiprina izpildi, un jebkuras nenoteiktības gadījumā sistēma izvēlas “izslēgts”.
- **“Kur ir IPCEI-CIS daļa?”** Mala: iekārtu kontrolleri (Climatix ×2, Luxtronik ×2, Siemens vārsti, 11 Shelly), vārteja un serveris ēkā (kopā ar DATI Group). Mākonis (ES): rezerves kopijas (Scaleway, Varšava, bloķētas 7 dienas), valodas modelis asistentam (Scaleway, Parīze), Nord Pool cenas, laika prognozes.
- **“Vai 3D ir dzīvs?”** Jā, rādījumi ir reāli; pats 3D skats ir eksperiments, kā ēku rādīt lietotājiem un apmeklētājiem.
- **“Vai MI asistents jau strādā?”** Prototips ir izstrādāts (ES mitināts modelis, izmaksu griesti €1 dienā); slaidā ir piemērs uz šī mēneša reāliem datiem. Ieviešana lietotājiem — nākamais solis.
- **“Ko dara TestDevLab?”** Viņi izstrādāja IPCEI testēšanas stratēģiju ar līmeņiem A–F; mēs to pielāgojām HVAC platformai. Līmeņi A–E jau strādā, F — pilota pieņemšana 2027. g. maijā.
