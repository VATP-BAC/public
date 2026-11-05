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

1. Projekts ir par mākoņa un EDGE skaitļošanas infrastruktūru.
2. Mūsu daļa ir HVAC AI platforma, kas savieno iekārtas ēkā ar ES mākoni.
3. Slaidu nebūs, rādīšu pašu platformu.
4. Sekosim vienai kilovatstundai: no ēkas līdz rēķinam.

> **Pāreja:** Sāksim ar pašu ēku.


## 1. Ēka

**#2 · Mūsu objekts: VATP ēka**  
_Uz ekrāna:_ Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi šobrīd strādā: 18 kW elektrības → 96,5 kW siltuma.

1. Šī ir mūsu ēka 3D skatā. Katrs punktiņš ir reāla iekārta.
2. 3D skats ir eksperiments. Pētām, ko rādīt lietotājiem un apmeklētājiem.
3. Konferencēs redzējām, ka dažos tirgos uzņēmumi to izvēlas.
4. Abi siltumsūkņi strādā: patērē 18 kW elektrības un dod gandrīz 97 kW siltuma.

> **Pāreja:** Bet 3D nav tikai skaists attēls. Uzspiedīsim uz vienas iekārtas un paskatīsimies, ko tā dara tieši tagad.


**#3 · Viens klikšķis, un iekārta ir redzama dzīvajā**  
_Uz ekrāna:_ Uzspiežot uz iekārtas, redzam, kā tā strādā tieši tagad: galvenais siltumsūknis no 6 kW elektrības dod 30,9 kW siltuma.

1. Skats ir domāts, lai ēku saprastu arī bez tehniskām zināšanām.
2. Uzspiežam uz galvenā siltumsūkņa.
3. Pajautā zālei: ja iekārta patērē 6 kW elektrības, cik siltuma tā dod? Pagaidi atbildi.
4. Gandrīz 31 kW, piecas reizes vairāk. Un tas ir tieši tagad.
5. Tāpat var uzspiest uz jebkuras citas iekārtas.
6. Kā tas iespējams, pastāstīšu vēlāk. Dati nāk tieši no iekārtas, tas ir EDGE līmenis.

> **Pāreja:** 3D labi parāda ēku. Bet ko lietotājs atver katru dienu?


## 2. Pārskats

**#4 · Sākumlapa, ko katrs pielāgo sev**  
_Uz ekrāna:_ Šo lietotājs redz katru rītu. Katrs pats izvēlas, ko šeit rādīt: patēriņu, izmaksas, cenu vai brīdinājumus.

1. Ikdienā lietotājs atver sākumlapu.
2. Katrs pats izvēlas, kādas kartītes un ieskatus redz.
3. Pārvaldniekam svarīgas izmaksas un brīdinājumi, tehniķim iekārtas.
4. Augšā šodienas patēriņš, izmaksas un salīdzinājums ar vakardienu. Blakus cena un laiks ārā.

> **Pāreja:** Kādus ieskatus šeit var redzēt? Piemēram, prognozi.


**#5 · Prognoze nākamajām stundām**  
_Uz ekrāna:_ Viens no ieskatiem, ko pētām: MI prognozē ēkas patēriņu. Zaļās joslas ir lētās stundas, sārtās dārgās.

1. Vēl pētām, kādus ieskatus šeit vērts rādīt. Šis ir viens piemērs.
2. MI prognozē, cik enerģijas ēkai vajadzēs nākamajās stundās.
3. Līnija ir izmērītais patēriņš, raustītā līnija ir prognoze.
4. Zaļās joslas ir lētās stundas, sārtās dārgās. No tā vēlāk izlemjam, kad tērēt.

> **Pāreja:** Prognoze ir viens ieskats. Otrs: ko šodien vajag zināt.


**#6 · Kas jāzina šodien**  
_Uz ekrāna:_ Svarīgākais dažās ziņās: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī un MI ieteikums ventilācijai.

1. Nav jāpēta grafiki. Svarīgākais ir dažās īsās ziņās.
2. Šodien ir neapskatīti brīdinājumi, 39 % enerģijas aizgāja naktī, un ir ieteikums ventilācijai.

> **Pāreja:** No kurienes šīs ziņas rodas? Lai to saprastu, vispirms: kā ēka iegūst siltumu.



_Ja jautā, no kurienes ziņas_

1. Brīdinājumi par iekārtu kļūdām un sensoriem bez datiem.
2. Vienkārši noteikumi: vai naktī iztērēts vairāk par 35 %, vai bāzes slodze mainījusies par 10 %, vai kāda sistēma augusi par 15 %, vai dārgajās stundās iztērēts vairāk par 35 %.
3. MI modeļu ieteikumi. Ne vairāk par četrām ziņām.


_Ja jautā, kā strādā modeļi (2 līdz 5 parametri, neironu tīklu nav)_

1. Patēriņa prognoze ir lineārā regresija. Velkam taisni caur punktiem "āra temperatūra un patēriņš", tad ieliekam rītdienas laika prognozi.
2. Telpu modelis ir fizikas modelis. Katrai telpai divi skaitļi: cik ātri tā atdziest un cik siltuma tai pienāk. Tā var paredzēt temperatūru dažas stundas uz priekšu.
3. Ventilācijas patēriņš ir regresija. Modelis zina, cik iekārtai vajadzētu tērēt. Ja tērē vairāk, visticamāk filtrs vai motors.
4. Siltuma atgūšana ir formula, nevis apmācīts modelis. Ritenis nodod siltumu no izplūstošā gaisa ienākošajam. Piemērs: ārā 0 °C, iekšā 20 °C, pēc riteņa 10 °C, tātad 50 %. Ja efektivitāte krītas, ritenis ir netīrs vai iesprūdis.
5. Dārgās stundas ir vienkārša aritmētika: cik samaksājām un cik maksātu tās pašas kilovatstundas lētākajās stundās.
6. Karstā ūdens grafiks izmēģina visus variantus un izvēlas lētāko.
7. Katram modelim jābūt precīzākam par pieņēmumu "rīt būs kā šodien", citādi to neizmantojam.

## 3. Iekārtas

**#7 · Siltums no zemes (skaidrojums)**

1. Kā ēka iegūst siltumu?
2. Pie ēkas ir 18 urbumi. Zeme dziļumā visu gadu ir ap 8 °C.
3. Šķidrums aiziet lejā auksts un atgriežas siltāks.
4. Divi siltumsūkņi to uzsilda līdz vajadzīgajai temperatūrai, tāpēc elektrības vajag maz.
5. Var teikt, ka mēs pārstrādājam zemes siltumu.
6. Vasarā ir otrādi: lieko siltumu aizvedam zemē.
7. No vienas daļas elektrības iegūstam piecas daļas siltuma. Elektriskais sildītājs dod vienu, gāzes katls mazliet mazāk, mūsu sistēma 5,5.

> **Pāreja:** Tagad to pašu mūsu ēkas dzīvajā shēmā.


**#8 · Siltummezgls dzīvajā**  
_Uz ekrāna:_ Visa sistēma vienā shēmā: urbumi, divi siltumsūkņi, tvertnes, radiatori un ventilācija.

1. Tas pats mūsu ēkā. Shēma ir dzīva.
2. Sarkanais ir silts, zilais auksts.
3. Iesim no zemes līdz telpām.

> **Pāreja:** Sāksim no apakšas, no zemes.


**#9 · 1. Siltums no 18 urbumiem**  
_Uz ekrāna:_ Ziemā šķidrums urbumos uzņem zemes siltumu, vasarā ēkas siltumu aizvedam zemē. Šobrīd zeme dod 42 kW.

1. 18 dziļi urbumi, šķidrums tajos sasilst.
2. Zeme šobrīd dod 42 kW, un par tiem mēs nemaksājam.
3. To mēra siltuma skaitītājs: plūst ap 7 kubikmetri stundā, šķidrums sasilst par 4 līdz 5 grādiem.
4. Vasarā ir otrādi. Zeme mums ir siltuma krātuve visam gadam.

> **Pāreja:** Bet 42 kW no zemes vēl nav gatavs siltums. Kāpēc?


**#10 · 2. Siltumsūkņi uzsilda**  
_Uz ekrāna:_ Šķidrums no zemes ir tikai ap 5 °C, ar to telpu nesasildīt. Ar 13 kW elektrības siltumsūkņi to uzsilda līdz 38 °C, un kopā sanāk 60 kW siltuma.

1. Kāpēc nepietiek ar 42 kW?
2. Siltuma ir daudz, bet tas ir tikai ap 5 °C, pārāk vēss.
3. Siltums pats plūst tikai no siltāka uz vēsāku.
4. Radiatoriem vajag ap 35 °C, karstajam ūdenim vēl vairāk.
5. Siltumsūknis siltumu paceļ augstāk, kā sūknis paceļ ūdeni kalnā. Tam vajag 13 kW elektrības.
6. Kopā sanāk 60 kW, un lielāko daļu dod zeme.

> **Pāreja:** Kur siltums aiziet tālāk? Uz tvertni un radiatoriem.


**#11 · 3. Tvertne un radiatori**  
_Uz ekrāna:_ Lielā tvertne krāj siltumu kā baterija. Radiatori šobrīd atdod telpām 19,9 kW siltuma, grīdas apkure vēl 1,6 kW.

1. Tvertne krāj siltumu kā baterija.
2. Radiatori telpām šobrīd atdod 19,9 kW.
3. To mēra Siemens ultraskaņas skaitītājs, un platforma to nolasa caur M-Bus.
4. Ūdens ienāk ar 33 grādiem un aiziet ar 29.
5. Grīdas apkure dod vēl 1,6 kW, tai ir savs skaitītājs.

> **Pāreja:** No tās pašas tvertnes siltums aiziet arī uz ventilāciju.


**#12 · 4. Siltais gaiss**  
_Uz ekrāna:_ Siltais ūdens plūst arī caur ventilācijas sildītāju. Tas strādā kā auto salona apsilde: ventilators pūš gaisu caur karstu radiatoru, un telpās ieplūst silts gaiss.

1. Silto ūdeni izmanto arī ventilācija.
2. Tas strādā kā apsilde automašīnā: karsts ūdens plūst caur radiatoru, ventilators pūš gaisu.
3. Ventilācijas iekārtā ir tas pats, tikai lielāks. Āra gaiss telpās ienāk jau silts.
4. Siemens vārsts mēra, cik siltuma aiziet. Šobrīd 21 kW.

> **Pāreja:** Un pēdējais: karstais ūdens krānos.


**#13 · 5. Karstais ūdens**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, platforma izlemj pēc elektrības cenas.

1. Karstajam ūdenim ir sava tvertne.
2. Šeit MI sāka strādāt pirmais.
3. Platforma pati izvēlas lētās stundas, kad sildīt.

> **Pāreja:** Lai to visu varētu vadīt, katrs solis jāizmēra.


**#14 · Mēs mērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 stundās 301 kWh elektrības: apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

1. Lai runātu par energoefektivitāti, viss jāizmēra.
2. 11 elektrības skaitītāji, katrai iekārtai savs.
3. Siltumu mēra siltumsūkņi, vārsti un siltuma skaitītāji.
4. Tā zinām, kur aiziet katra kilovatstunda.

> **Pāreja:** Ko mērījumi saka par visu sezonu? Atveram enerģijas sadaļu.


## 4. Enerģija

**#15 · Tagad sīkāk par enerģiju**  
_Uz ekrāna:_ Apkures sezonā patērējām par 21 % mazāk nekā mēnesi iepriekš, bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

1. Tagad sīkāk par enerģiju visā apkures sezonā.
2. Patērējām par 21 % mazāk nekā mēnesi iepriekš.
3. Bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.
4. Ar taupīšanu vien nepietiek. Svarīgi ir, kad pērkam, un to dara MI.

> **Pāreja:** Cik efektīvi siltumsūkņi strādāja visā sezonā?


**#16 · Kurš atceras, ko nozīmē COP?**  
_Uz ekrāna:_ Visā periodā COP bija 5,50: no katras elektrības kWh ieguvām piecarpus kWh siltuma. Dzesēšana bija oktobra sākumā, tagad tā ir apstājusies.

1. Pajautā zālei: kas ir COP? Pagaidi atbildi.
2. Tas ir, cik siltuma dabūjam no vienas kilovatstundas elektrības.
3. Sezonā tas bija 5,5, kopā 11 207 kWh siltuma.
4. Dzesēšana oktobra sākumā vēl bija, tagad līkne ir plakana. Strādā tikai apkure.

> **Pāreja:** Zinām, cik siltuma saražojām. Bet kur aizgāja elektrība?


**#17 · Kur aiziet elektrība**  
_Uz ekrāna:_ Redzam, kur aiziet katra kilovatstunda, pa sistēmām un pa iekārtām. Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi.

1. Redzam, kur aiziet elektrība: pa sistēmām un pa iekārtām.
2. Ventilācija iztērēja vairāk nekā abi siltumsūkņi kopā.
3. Tas daudzus pārsteidz, un tāpēc MI sāk ar ventilāciju.

> **Pāreja:** Kā tas izskatās pa stundām?


**#18 · Patēriņš pa stundām**  
_Uz ekrāna:_ Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri. Ventilācija patērē daudz visu laiku.

1. Patēriņš pa stundām, katrai stundai sava cena.
2. Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri.
3. Ventilācija visu laiku ir augstu, tā ir lielākā patērētāja.

> **Pāreja:** Cik mums maksā siltums, salīdzinot ar pilsētas siltumu?


**#19 · Par 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh, pilsētas €75/MWh. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

1. Mūsu siltums maksāja 34 eiro par megavatstundu, pilsētas siltums 75. Tas ir par 55 % lētāk.
2. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.
3. Mums ir divi avoti, un izmantojam lētāko.

> **Pāreja:** Ne tikai cena, arī CO₂.


**#20 · Desmit reizes mazāk CO₂ nekā gāzei**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g. Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais.

1. Mūsu siltumam 21 grams CO₂ uz kilovatstundu, gāzes katlam 213. Desmit reizes mazāk.
2. Ventspils pilsētas siltums ir līdzīgā līmenī, tāpēc pret to mūsu ieguvums ir cena.
3. Platforma CO₂ rēķina pati, un to prasīs ES ziņošana.

> **Pāreja:** Un to visu var dabūt vienā atskaitē.


**#21 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Excel enerģijas atskaite par jebkuru mēnesi.

1. Mēneša atskaite ar vienu pogu.
2. Excel fails grāmatvedībai.

> **Pāreja:** Līdz šim redzējām, kas notiek. Tagad: kā MI izlemj, ko darīt.


## 5. MI

**#22 · Ko MI ņem vērā**

1. MI plānotājs katru stundu skatās visus rādītājus kopā.
2. Ēkā strādā ražotne, tāpēc ar kritiskām iekārtām esam ļoti uzmanīgi.
3. Karsto ūdeni MI vada pats.
4. Apkurei un dzesēšanai MI kopš nesen aprēķina indeksu, kad sildīt vai dzesēt izdevīgāk. Nākamais solis ir ar to vadīt siltumsūkņus.
5. Ventilācijai MI iesaka pārcelt darba stundas.

> **Pāreja:** Kā tas izskatās vienā dienā ar īstām cenām?



_Ko MI ņem vērā_

1. Nord Pool cenu katrai rītdienas stundai.
2. Laika prognozi 48 stundām un ēkā izmērīto āra temperatūru.
3. Siltumsūkņu efektivitāti katru stundu.
4. Prognozi, cik enerģijas vajadzēs.
5. Komfortu: temperatūru, CO₂, mitrumu un to, ka karstais ūdens jāuzsilda ik 3 līdz 8 stundām.
6. Iekārtu stāvokli: tvertnes, kompresora startus un kļūdas.
7. Pilsētas siltuma tarifu.


_Ja jautā par modeļiem (dziļo mācīšanos neizmantojam, jo ir viena ēka un daži mēneši datu)_

1. Slodzes prognoze: lineārā regresija pret āra temperatūru.
2. Telpu modeļi: fizikas modelis (ARX) ar ridge regresiju.
3. Ventilācijas enerģija: ridge regresija.
4. Siltuma atgūšana: fizikas formula un novirzes detektors (EWMA).
5. Karstā ūdens grafiks: pārbauda visus variantus, tāpēc vienmēr labākais.
6. Katru modeli pārbaudām uz vēstures datiem. Tam jābūt precīzākam par "rīt būs kā šodien".

**#23 · Karstais ūdens pēc elektrības cenas**

1. Šis ir īstais algoritms ar īstām biržas cenām.
2. Pajautā zālei: kurās stundās jūs sildītu ūdeni? Pagaidi atbildi.
3. 30. oktobrī platforma izvēlējās piecas stundas, un tas bija par 21 % lētāk nekā sildot vienmērīgi.
4. Nedēļā vidēji tie ir 13 %.
5. Apakšā redzams, kurās stundās siltumsūknis ir lētāks par pilsētas siltumu.

> **Pāreja:** MI ne tikai plāno, tas arī meklē problēmas.


**#24 · Brīdinājumi: iekārtu kļūdas un MI atradumi**  
_Uz ekrāna:_ Siltumsūkņu kļūdu kodi, gaiss vārstos, sensori bez datiem un MI ieteikumi. Viss vienuviet, sagrupēts pa telpām.

1. Viss, ko platforma atrod, ir vienuviet, sagrupēts pa telpām.
2. Tie ir reāli šīs nedēļas brīdinājumi, piemēram, kļūdu kodi un gaiss hidraulikā.

> **Pāreja:** Viens no MI atradumiem tuvāk.



_Ko platforma meklē pati_

1. Iekārtu kļūdas un sensorus bez datiem.
2. Neparastu patēriņu, piemēram, 39 % naktī, kad ēka ir tukša.
3. Siltuma atgūšanu: ja efektivitāte krītas, ritenis ir netīrs vai iesprūdis.
4. Ventilāciju, kas tērē vairāk, nekā modelis sagaida.
5. Dārgās stundas, piemērs nākamajā slaidā.

**#25 · Dārgās stundas ventilācijā**  
_Uz ekrāna:_ PN1 strādāja par 29 % dārgāk nekā lētākajās stundās: no €94.81 varēja ietaupīt €21.40.

1. Viens MI atradums tuvāk.
2. MI salīdzina iztērēto ar to, cik tas pats maksātu lētākajās stundās.
3. PN1 29 dienās iztērēja 95 eiro, no tiem 21 varēja ietaupīt.
4. MI iesaka pārcelt darba laiku.

> **Pāreja:** Atradumus platforma arī pati apraksta vārdos.


**#26 · Secinājumi vienkāršā valodā**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %”. Platforma tos uzraksta pati.

1. Secinājumus platforma uzraksta pati.
2. Neviens tos neraksta ar roku, tie rodas no datiem.

> **Pāreja:** Nākamais solis: pajautāt platformai pašam.


**#27 · MI asistents**

1. Pie tā jau strādājam: MI asistents.
2. Var pajautāt vienkārši, piemēram, kāpēc ventilācija šomēnes maksāja vairāk.
3. Tas atbild no ēkas datiem un parāda avotus.
4. Piemērs ir ar šī mēneša reāliem skaitļiem.
5. Valodas modelis darbojas ES mākonī, tā ir mūsu IPCEI-CIS mākoņa daļa.

> **Pāreja:** Kur tas viss darbojas? EDGE un mākonis.


## 6. Kontrole

**#28 · Serveris ēkā (DATI Group)**

1. IPCEI-CIS daļa: EDGE un mākonis kā viena sistēma.
2. EDGE līmenī ir kontrolleri: divi Climatix, divi Luxtronik, Siemens vārsti un 11 Shelly.
3. Vārteja nodod datus serverim ēkā, ko izveidojām kopā ar DATI Group.
4. Uz servera strādā platforma, datubāze un MI, tāpēc lēmumi tiek pieņemti ēkā.
5. ES mākonī ir rezerves kopijas, valodas modelis, cenas un laika prognoze.
6. Kopiju taisām katru nakti, tā ir bloķēta. Katru mēnesi pārbaudām atjaunošanu.

> **Pāreja:** Kā zinām, ka tas viss strādā pareizi?



_Siemens (atvērts diskusijai)_

1. Viņu IPCEI-CIS projektā izveidots Industrial Edge ierīču komplekts.
2. Siemens piedāvāja būvēt uz Industrial Edge.
3. Mums tas neder: slēgta platforma, licences, dārgāka aparatūra, un mums ir dažādi ražotāji.
4. Izvēlējāmies atvērtu vārteju uz parastas aparatūras.
5. Dalībniekiem ar Siemens rūpnīcām tas var derēt, un esam gatavi to apspriest.

**#29 · Testēšana (TestDevLab)**

1. Kā zinām, ka tas strādā?
2. TestDevLab izstrādāja IPCEI testēšanas stratēģiju: seši līmeņi un septiņas testu grupas.
3. Pielāgojām to HVAC platformai un ieviešam līmeni pa līmenim.
4. Vairāk nekā 3200 testu pārbauda katru funkciju atsevišķi.
5. Ap 450 testu pārbauda kodu kopā ar īstu datubāzi.
6. 57 scenāriji pārlūkā darbojas kā īsts lietotājs un pārbauda septiņu lomu tiesības.
7. Testi palaižas pie katras izmaiņas uz servera ēkā.
8. Ēkā izmaiņas nonāk tikai pēc testiem un cilvēka apstiprinājuma.

> **Pāreja:** Ko darīsim tālāk?


## 7. Tālāk

**#30 · Kas tālāk**

1. MI asistentu dosim visiem lietotājiem.
2. Pieslēgsim nākamās ēkas.
3. Būvēsim digitālo dvīni, kurā izmaiņas var izmēģināt pirms īstās ēkas.

> **Pāreja:** Noslēgumā.


**#31 · Paldies**

1. Mūsu kilovatstunda ir nonākusi galā.
2. Katrā pieturā zinājām, kur tā ir, cik tā maksā un kā to nopirkt lētāk.
3. Labprāt atbildēšu uz jautājumiem.

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
