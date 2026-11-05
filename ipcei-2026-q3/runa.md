# Runa · Vienas kilovatstundas ceļš

IPCEI-CIS · HVAC AI platforma · 2026. g. 3. ceturksnis · Zinātniskā padome

Tūre: `index.html`. Taustiņš P atver piezīmes atsevišķā logā (`notes.html`), kas mainās līdzi slaidiem un ar bultiņām pārslēdz slaidus. Uz pašiem slaidiem piezīmju nav. `#12` adreses beigās atver 12. soli. Šis fails tiek ģenerēts no tūres, tāpēc teksts sakrīt ar piezīmju logu.

## Galvenā doma

Mūsu ēka siltumu ņem no zemes, un MI izlemj, kad pirkt elektrību. Tāpēc siltums ir piecas reizes efektīvāks un lētāks. Viss strādā vienā sistēmā no EDGE iekārtām ēkā līdz ES mākonim.

## Kā strādā mūsu sistēma (sagatavei)

- Zeme visu gadu ir ap 8 °C silta. Pie VATP ir 18 urbumi.
- Ziemā auksto ūdeni izlaižam caur urbumiem, tas atgriežas siltāks, un to uzsildīt ir daudz vieglāk. Vasarā ēkas lieko siltumu aizvedam zemē, un tā ēku atvēsinām.
- Elektrību tērējam tikai uzsildīšanai, pašu siltumu dod zeme. Tāpēc 1 daļa elektrības un 4 daļas zemes siltuma kopā dod 5 daļas siltuma.
- COP nozīmē, cik siltuma dabūjam no vienas elektrības kWh. Elektriskais sildītājs: 1. Gāzes katls: ap 0,9. Mūsu sistēma: 5,5 (izmērīts pēdējā mēnesī).
- Ceļš ēkā: urbumi, siltumsūkņi, karstā tvertne (krāj siltumu kā baterija), tad radiatori, grīdas apkure un ventilācija. Karstajam ūdenim ir sava tvertne.
- Ventilācija siltumu neražo. Siltais ūdens plūst caur ventilācijas sildītāju (līdzīgu auto radiatoram), ventilators pūš cauri svaigu gaisu, un telpās ieplūst silts gaiss.
- Ko mērām: 11 elektrības skaitītāji (katrai iekārtai savs), siltumsūkņu siltuma skaitītāji, Siemens vārsti ventilācijai, temperatūras katrā caurulē.

## Skaitļi, kas jāzina

| Ko | Skaitlis | Avots |
|---|---|---|
| Siltumsūkņu efektivitāte | COP 5,50 | Enerģija, pēdējais mēnesis |
| Saražotais siltums | 11 207 kWh | turpat |
| Ēkas elektrība | 6 287 kWh, €907 (−21 % kWh, +10 % €) | turpat |
| Siltuma cena | €33.6/MWh, pilsētas €75 (−55 %) | turpat |
| CO₂ | 21 g/kWh, gāzes katlam 213 g | turpat |
| Karstais ūdens pēc cenas | vidēji −13 % | 7 dienu reālās Nord Pool LV cenas |
| Ventilācijas pārtēriņš | €21.40 no €94.81 (PN1, 29 dienas) | MI brīdinājums |
| Shēma | zeme 42 kW + elektrība 13 kW → 60 kW siltuma | Shēma, dzīvajā |
| Testi | 3 231 vienību, 449 integrācijas, 57 pārlūka scenāriji | GitHub main |

**#1 · Titulslaids**

1. Labdien. Šis ir IPCEI-CIS projekts par mākoni un EDGE skaitļošanu.
2. Mūsu daļa ir HVAC AI platforma mūsu ēkai.
3. Stāstīšu caur vienas kilovatstundas ceļu.

> **Pāreja:** Sāksim ar ēku, kur tas viss notiek.


## 1. Ēka

**#2 · Mūsu objekts: VATP ēka**  
_Uz ekrāna:_ Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi šobrīd strādā: 18 kW elektrības → 96,5 kW siltuma.

1. Šī ir mūsu ēka 3D skatā. Katrs punktiņš ir reāla iekārta.
2. 3D pagaidām ir eksperiments: pētām, ko rādīt lietotājiem un viesiem.
3. Augšā redzams, ka abi siltumsūkņi šobrīd strādā.

> **Pāreja:** Uzspiežot uz iekārtas, redzam, ko tā dara tieši tagad.


**#3 · Viens klikšķis, un iekārta ir redzama dzīvajā**  
_Uz ekrāna:_ Uzspiežot uz iekārtas, redzam, kā tā strādā tieši tagad: galvenais siltumsūknis no 6 kW elektrības dod 30,9 kW siltuma.

1. Uzspiežam uz galvenā siltumsūkņa.
2. No šejienes kopumā redzam, ko dara katra iekārta.
3. Piemēram, no 6 kW elektrības tas dod 31 kW siltuma.
4. Dati nāk tieši no iekārtas, tas ir EDGE līmenis.

> **Pāreja:** 3D dod ēkas kopskatu, bet ikdienā jāiet dziļāk. Tam ir sākumlapa.


## 2. Pārskats

**#4 · Sākumlapa, ko katrs pielāgo sev**  
_Uz ekrāna:_ Šo lietotājs redz katru rītu. Katrs pats izvēlas, ko šeit rādīt: patēriņu, izmaksas, cenu vai brīdinājumus.

1. Ikdienā lietotājs atver sākumlapu.
2. Katra loma grib redzēt ko citu: pārvaldnieks izmaksas, tehniķis iekārtas.
3. Tāpēc katrs pats izvēlas, kādus ieskatus šeit redz.

> **Pāreja:** Viens no ieskatiem ir ēkas patēriņa prognoze.


**#5 · Prognoze nākamajām stundām**  
_Uz ekrāna:_ Viens no ieskatiem, ko pētām: MI prognozē ēkas patēriņu. Zaļās joslas ir lētās stundas, sārtās dārgās.

1. MI prognozē, cik enerģijas ēkai vajadzēs nākamajās stundās.
2. Zaļās stundas ir lētas, sārtās dārgas.
3. Vēl pētām, kādi ieskati ir aktuāli un parāda vērtību, piemēram, cik varam ietaupīt.

> **Pāreja:** Otrs ieskats: kas šodien jāzina.


**#6 · Kas jāzina šodien**  
_Uz ekrāna:_ Svarīgākais dažās ziņās: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī un MI ieteikums ventilācijai.

1. Platforma pati apkopo svarīgāko dažās ziņās.
2. Šodien: neapskatīti brīdinājumi, 39 % enerģijas naktī, ieteikums ventilācijai.

> **Pāreja:** Lai saprastu, no kurienes šīs ziņas, vispirms jāsaprot, kā ēka iegūst siltumu.



_Ja jautā, no kurienes ziņas_

1. Brīdinājumi par iekārtām un sensoriem.
2. Vienkārši noteikumi, piemēram, vai naktī iztērēts vairāk par 35 %.
3. MI modeļu ieteikumi. Par modeļiem vairāk MI daļā.

## 3. Iekārtas

**#7 · Siltums no zemes (skaidrojums)**

1. Jūs jau esat dzirdējuši, ka vasarā izracām 18 urbumus.
2. Tie vajadzīgi siltumsūkņiem. Siltumsūknis siltumu no zemes dzīlēm pārvērš siltumā, ko kolēģi sajūt ofisa krēslos.
3. No vienas daļas elektrības dabūjam piecas daļas siltuma. Četras dod zeme.
4. Vasarā otrādi: ēkas lieko siltumu aizvedam zemē.

> **Pāreja:** Kā tas notiek mūsu ēkā, rāda siltuma pārneses shēma.


**#8 · Siltummezgls dzīvajā**  
_Uz ekrāna:_ Visa sistēma vienā shēmā: urbumi, divi siltumsūkņi, tvertnes, radiatori un ventilācija.

1. Vēl viena lieta, ko būvējam un rādām: siltuma pārneses shēma.
2. Tā parāda, kā enerģija no zemes kļūst par siltumu, kas ieplūst mūsu telpās.
3. Shēma ir dzīva: sarkanais ir silts, zilais auksts.

> **Pāreja:** Iesim pa soļiem, sākot no zemes.


**#9 · 1. Siltums no 18 urbumiem**  
_Uz ekrāna:_ Ziemā šķidrums urbumos uzņem zemes siltumu, vasarā ēkas siltumu aizvedam zemē. Šobrīd zeme dod 42 kW.

1. Pirmais solis: šķidrums 18 urbumos sasilst no zemes.
2. Zeme šobrīd dod 42 kW, un par tiem nemaksājam.
3. Vasarā otrādi: ēkas siltumu aizvedam zemē, un tā ēku dzesējam.

> **Pāreja:** Bet ar zemes siltumu vien ēku nesasildīt. Kāpēc?


**#10 · 2. Siltumsūkņi uzsilda**  
_Uz ekrāna:_ Šķidrums no zemes ir tikai ap 5 °C, ar to telpu nesasildīt. Ar 13 kW elektrības siltumsūkņi to uzsilda līdz 38 °C, un kopā sanāk 60 kW siltuma.

1. Zemes šķidrums ir tikai ap 5 °C, bet telpā gribam 21 °C.
2. Siltums plūst tikai no siltāka uz vēsāku, tāpēc ūdenim radiatoros jābūt krietni siltākam par telpu.
3. Siltumsūkņi ar 13 kW elektrības to uzsilda līdz 38 °C. Kopā 60 kW siltuma.

> **Pāreja:** Siltumu ne vienmēr vajag tieši tad, kad to saražojam. Tāpēc to krājam tvertnē.


**#11 · 3. Tvertne un radiatori**  
_Uz ekrāna:_ Lielā tvertne krāj siltumu kā baterija. Radiatori šobrīd atdod telpām 19,9 kW siltuma, grīdas apkure vēl 1,6 kW.

1. Tvertne ir kā baterija: siltumsūkņi to uzpilda, ēka ņem, kad vajag.
2. Tā siltumsūkņiem nav jāieslēdzas un jāizslēdzas ik pēc brīža.
3. No tvertnes radiatori telpām šobrīd dod 19,9 kW. To mēra Siemens skaitītājs.

> **Pāreja:** No tās pašas tvertnes siltumu ņem arī ventilācija.


**#12 · 4. Siltais gaiss**  
_Uz ekrāna:_ Siltais ūdens plūst arī caur ventilācijas sildītāju. Tas strādā kā auto salona apsilde: ventilators pūš gaisu caur karstu radiatoru, un telpās ieplūst silts gaiss.

1. Ventilācija telpās ievada svaigu āra gaisu, un ziemā tas jāsilda.
2. Vispirms gaiss iesilst siltuma atgūšanas ritenī no izplūstošā gaisa.
3. Tad tas iet caur sildītāju ar silto ūdeni no tvertnes. Tieši kā auto salona apsilde: karsts ūdens radiatorā, ventilators pūš gaisu cauri.
4. Siemens vārsts regulē ūdens plūsmu un mēra, cik siltuma iepūšam telpās: šobrīd 21 kW.

> **Pāreja:** Bez apkures un ventilācijas siltums vajadzīgs arī karstajam ūdenim.


**#13 · 5. Karstais ūdens**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, platforma izlemj pēc elektrības cenas.

1. Karstajam ūdenim ir sava tvertne.
2. Šeit MI sāka strādāt pirmais: tas izvēlas, kad sildīt, pēc elektrības cenas.

> **Pāreja:** Lai zinātu, vai viss strādā efektīvi, katru soli mērām.


**#14 · Mēs mērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 stundās 301 kWh elektrības: apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

1. 11 elektrības skaitītāji, katrai iekārtai savs.
2. Siltumu mēra skaitītāji un vārsti.
3. Zinām, kur aiziet katra kilovatstunda.

> **Pāreja:** Ko mērījumi rāda par pēdējo mēnesi? Atveram enerģijas sadaļu.


## 4. Enerģija

**#15 · Tagad sīkāk par enerģiju**  
_Uz ekrāna:_ Pēdējā mēnesī patērējām par 21 % mazāk nekā mēnesi pirms tam, bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

1. Šeit salīdzinām pēdējo mēnesi ar mēnesi pirms tam.
2. Patērējām par 21 % mazāk.
3. Bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

> **Pāreja:** Mums, protams, interesē, cik efektīvi strādāja siltumsūkņi.


**#16 · Siltumsūkņu efektivitāte: COP 5,5**  
_Uz ekrāna:_ Visā periodā COP bija 5,50: no katras elektrības kWh ieguvām piecarpus kWh siltuma. Dzesēšana bija oktobra sākumā, tagad tā ir apstājusies.

1. COP rāda, cik siltuma dabūjam no vienas kilovatstundas elektrības.
2. Mums tas bija 5,5: no vienas kWh elektrības piecarpus kWh siltuma.
3. Dzesēšana bija oktobra sākumā, tagad strādā tikai apkure.

> **Pāreja:** Ar siltumu skaidrs. Bet kur aizgāja elektrība?


**#17 · Kur aiziet elektrība**  
_Uz ekrāna:_ Redzam, kur aiziet katra kilovatstunda, pa sistēmām un pa iekārtām. Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi.

1. Redzam elektrību pa sistēmām un pa iekārtām.
2. Ventilācija iztērēja vairāk nekā abi siltumsūkņi kopā.
3. Tāpēc MI sāk ar ventilāciju.

> **Pāreja:** To pašu varam redzēt pa stundām.


**#18 · Patēriņš pa stundām**  
_Uz ekrāna:_ Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri. Ventilācija patērē daudz visu laiku.

1. Patēriņš un cena katrai stundai.
2. Redzams brīdis, kad pārslēdzāmies no dzesēšanas uz apkuri.
3. Ventilācija visu laiku ir augstu.

> **Pāreja:** Cik mums tad maksā siltums?


**#19 · Par 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh, pilsētas €75/MWh. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

1. Mūsu siltums maksā 34 eiro par megavatstundu, pilsētas siltums 75.
2. Tas ir par 55 % lētāk.
3. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

> **Pāreja:** Ne tikai cena, arī CO₂.


**#20 · Desmit reizes mazāk CO₂ nekā gāzei**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g.

1. Mūsu siltumam 21 grams CO₂ uz kWh, gāzes katlam 213.
2. Tas ir desmit reizes mazāk, jo lielāko daļu siltuma dod zeme.
3. CO₂ platforma rēķina pati, to prasīs ES ziņošana.

> **Pāreja:** To visu var dabūt vienā atskaitē.


**#21 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Excel enerģijas atskaite par jebkuru mēnesi.

1. Mēneša atskaite ar vienu klikšķi, Excel grāmatvedībai.

> **Pāreja:** Tātad datu mums ir daudz. Daļu lēmumu esam uzticējuši ML modeļiem.


## 5. MI

**#22 · Ko MI ņem vērā**

1. MI plānotājs katru stundu skatās visus šos datus kopā.
2. Ēkā strādā ražotne, tāpēc ar kritiskām iekārtām esam uzmanīgi.
3. Karsto ūdeni MI jau vada pats.
4. Apkurei un dzesēšanai MI aprēķina, kad sildīt vai dzesēt izdevīgāk.

> **Pāreja:** Kā tas izskatās vienā dienā ar karsto ūdeni?



_Ko MI ņem vērā_

1. Elektrības cenu katrai rītdienas stundai.
2. Laika prognozi un izmērīto āra temperatūru.
3. Siltumsūkņu efektivitāti.
4. Patēriņa prognozi.
5. Komfortu: temperatūru, CO₂, mitrumu, karsto ūdeni.
6. Iekārtu stāvokli.
7. Pilsētas siltuma tarifu.


_Ja jautā par modeļiem (2 līdz 5 parametri, neironu tīklu nav: viena ēka, daži mēneši datu)_

1. Patēriņa prognoze, lineārā regresija: taisne starp āra temperatūru un patēriņu.
2. Telpu modelis, fizika (ARX): cik ātri telpa atdziest un cik siltuma pienāk.
3. Ventilācija, ridge regresija: cik tai vajadzētu tērēt. Vairāk nozīmē filtru vai motoru.
4. Siltuma atgūšana, formula: ja efektivitāte krītas, ritenis ir netīrs vai iesprūdis.
5. Karstais ūdens: izmēģina visus grafikus, ņem lētāko.
6. Modelim jāpārspēj "rīt būs kā šodien", citādi to neizmantojam.

**#23 · Karstais ūdens pēc elektrības cenas**

1. 30. oktobris, īstas biržas cenas.
2. Pajautā zālei: kurās stundās jūs sildītu ūdeni?
3. MI izvēlējās piecas stundas, 21 % lētāk nekā sildot vienmērīgi.
4. Mums palīdz, ka ražotne strādā visu diennakti: siltums vajadzīgs vienmēr, tāpēc nav jāuzsilda iepriekš.

> **Pāreja:** Bez plānošanas MI arī meklē problēmas.


**#24 · Brīdinājumi: iekārtu kļūdas un MI atradumi**  
_Uz ekrāna:_ Siltumsūkņu kļūdu kodi, gaiss vārstos, sensori bez datiem un MI ieteikumi. Viss vienuviet, sagrupēts pa telpām.

1. Viss, ko platforma atrod, ir vienuviet, pa telpām.
2. Iekārtu kļūdas un MI atradumi.

> **Pāreja:** Viens MI atradums tuvāk.



_Ko platforma meklē pati_

1. Iekārtu kļūdas un sensorus bez datiem.
2. Lielu patēriņu naktī.
3. Siltuma atgūšanu, kas krītas.
4. Ventilāciju, kas tērē par daudz.

**#25 · Dārgās stundas ventilācijā**  
_Uz ekrāna:_ PN1 strādāja par 29 % dārgāk nekā lētākajās stundās: no €94.81 varēja ietaupīt €21.40.

1. PN1 ventilācija strādāja dārgajās stundās.
2. No 95 eiro varēja ietaupīt 21.
3. MI iesaka pārcelt darba laiku.

> **Pāreja:** Atradumus platforma apraksta arī vārdos.


**#26 · Secinājumi vienkāršā valodā**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %”. Platforma tos uzraksta pati.

1. Secinājumus platforma uzraksta pati, no datiem.

> **Pāreja:** Nākamais solis: jautāt platformai pašam.


**#27 · MI asistents**

1. Pie tā strādājam: MI asistents.
2. Var vienkārši pajautāt, un tas atbild no ēkas datiem.
3. Valodas modelis ir ES mākonī.

> **Pāreja:** Kur tas viss darbojas?


## 6. Kontrole

**#28 · Serveris ēkā (DATI Group)**

1. EDGE un mākonis kā viena sistēma.
2. Serveris ēkā, kopā ar DATI Group. Lēmumi notiek ēkā.
3. ES mākonī rezerves kopijas un valodas modelis.
4. Siemens Industrial Edge: atvērts diskusijai.

> **Pāreja:** Kā zinām, ka tas strādā?



_Ja jautā par Siemens_

1. Siemens IPCEI-CIS projektā izveidoja Industrial Edge ierīču komplektu.
2. Tas noder ražotājiem, kas grib savas iekārtas savienot ar Siemens ekosistēmu, piemēram, Industrial Edge lietotnēm un tirgu.
3. Mums ēkā ir dažādu ražotāju iekārtas, tāpēc izvēlējāmies atvērtu vārteju.
4. Dalībniekiem, kas būvē iekārtas, tas var būt vērtīgi.

**#29 · Testēšana (TestDevLab)**

1. TestDevLab testēšanas stratēģija, to jau ieviešam.
2. Vairāk nekā 3200 testu, 450 ar datubāzi, 57 pārlūkā.
3. Ēkā nonāk tikai pēc testiem un apstiprinājuma.

> **Pāreja:** Ko darīsim tālāk?


## 7. Tālāk

**#30 · Kas tālāk**

1. MI asistents visiem lietotājiem.
2. Nākamās ēkas.
3. Digitālais dvīnis.

> **Pāreja:** Noslēgumā.


**#31 · Paldies**

1. Kilovatstunda ir nonākusi galā.
2. Zinājām, kur tā ir, cik maksā un kā to nopirkt lētāk.
3. Jautājumi.

## Sagatave jautājumiem

- **Ko tieši MI vada?** Karsto ūdeni MI vada pats: izvēlas lētākās stundas un pats ieslēdz sildīšanu. Apkurei un dzesēšanai MI kopš nesen aprēķina indeksu, kad sildīt vai dzesēt izdevīgāk; nākamais solis ir ar to vadīt siltumsūkņus. Ēkā strādā ražotne, tāpēc ar kritiskām iekārtām esam ļoti uzmanīgi. Ventilācijai MI iesaka darba laiku.
- **Zeme dod 42 kW, bet siltumsūkņi 60 kW. Kur pārējais?** Siltums ir zemes siltums plus elektrība: 42 + 13 ≈ 55. Atlikums ir skaitītāju precizitāte un nobīde laikā starp tiem.
- **Kas notiek, ja elektrība kļūst ļoti dārga?** Varam pārslēgties uz pilsētas siltumu. Ir divi avoti, un izmantojam lētāko.
- **Cik droša ir automātiskā vadība?** Katrai komandai ir robežas (piemēram, CO₂ mērķi var mainīt tikai no 400 līdz 2000), iekārta apstiprina izpildi, un, ja kaut kas nav skaidrs, sistēma izvēlas izslēgt.
- **Kur ir IPCEI-CIS daļa?** EDGE: iekārtu kontrolleri (Climatix ×2, Luxtronik ×2, Siemens vārsti, 11 Shelly), vārteja un serveris ēkā, ko izveidojām kopā ar DATI Group. Mākonis ES: rezerves kopijas (Scaleway, Varšava, bloķētas 7 dienas), asistenta valodas modelis (Scaleway, Parīze), Nord Pool cenas un laika prognozes.
- **Kāpēc ne Siemens Industrial Edge?** Siemens IPCEI-CIS projektā izveidoja Industrial Edge ierīču komplektu. Tas noder ražotājiem, kas grib savas iekārtas savienot ar Siemens Industrial Edge ekosistēmu, piemēram, tās lietotnēm un tirgu. Pati vide ir slēgta Siemens platforma ar licencēm. Mūsu ēkā ir dažādu ražotāju iekārtas, tāpēc izvēlējāmies atvērtu vārteju bez piesaistes vienam ražotājam. Esam gatavi to apspriest ar dalībniekiem, kam tas der.
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
