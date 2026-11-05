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

1. IPCEI-CIS: mākonis un EDGE skaitļošana.
2. Mūsu daļa ir HVAC AI platforma.
3. Sekosim vienai kilovatstundai.

> **Pāreja:** Sāksim ar mūsu ēku.


## 1. Ēka

**#2 · Mūsu objekts: VATP ēka**  
_Uz ekrāna:_ Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi šobrīd strādā: 18 kW elektrības → 96,5 kW siltuma.

1. Mūsu ēka 3D skatā.
2. Katrs punktiņš ir reāla iekārta.
3. 3D pagaidām ir eksperiments.

> **Pāreja:** Varam paskatīties, ko katra iekārta dara tieši tagad.


**#3 · Viens klikšķis, un iekārta ir redzama dzīvajā**  
_Uz ekrāna:_ Uzspiežot uz iekārtas, redzam, kā tā strādā tieši tagad: galvenais siltumsūknis no 6 kW elektrības dod 30,9 kW siltuma.

1. Uzspiežam uz galvenā siltumsūkņa.
2. No 6 kW elektrības tas dod 31 kW siltuma.
3. Dati nāk tieši no iekārtas, tas ir EDGE.

> **Pāreja:** 3D modelis dod ēkas kopskatu, bet jāiet dziļāk. Tam ir sākumlapa.


## 2. Pārskats

**#4 · Sākumlapa, ko katrs pielāgo sev**  
_Uz ekrāna:_ Šo lietotājs redz katru rītu. Katrs pats izvēlas, ko šeit rādīt: patēriņu, izmaksas, cenu vai brīdinājumus.

1. Šī ir sākumlapa, to lietotājs atver katru dienu.
2. Katrs pats izvēlas, ko šeit redz.
3. Šodienas patēriņš, izmaksas, cena un laiks.

> **Pāreja:** Viens no ieskatiem šeit ir ēkas patēriņa prognoze.


**#5 · Prognoze nākamajām stundām**  
_Uz ekrāna:_ Viens no ieskatiem, ko pētām: MI prognozē ēkas patēriņu. Zaļās joslas ir lētās stundas, sārtās dārgās.

1. MI prognozē, cik enerģijas ēkai vajadzēs nākamajās stundās.
2. Zaļās stundas ir lētas, sārtās dārgas.
3. Vēl pētām, kādus ieskatus šeit rādīt.

> **Pāreja:** Blakus prognozei platforma apkopo, kas šodien jāzina.


**#6 · Kas jāzina šodien**  
_Uz ekrāna:_ Svarīgākais dažās ziņās: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī un MI ieteikums ventilācijai.

1. Svarīgākais dažās īsās ziņās.
2. Neapskatīti brīdinājumi, 39 % enerģijas naktī, ieteikums ventilācijai.

> **Pāreja:** Lai saprastu, no kurienes šīs ziņas, vispirms: kā ēka iegūst siltumu.



_Ja jautā, no kurienes ziņas_

1. Brīdinājumi par iekārtām un sensoriem.
2. Vienkārši noteikumi, piemēram, vai naktī iztērēts vairāk par 35 %.
3. MI modeļu ieteikumi.


_Ja jautā par modeļiem (2 līdz 5 parametri, neironu tīklu nav)_

1. Patēriņa prognoze: taisne starp āra temperatūru un patēriņu.
2. Telpu modelis: cik ātri telpa atdziest.
3. Ventilācija: cik tai vajadzētu tērēt. Vairāk nozīmē filtru vai motoru.
4. Siltuma atgūšana: formula. Ja efektivitāte krītas, ritenis ir netīrs.
5. Dārgās stundas: cik maksātu tās pašas kWh lētākajās stundās.
6. Karstais ūdens: izmēģina visus grafikus, ņem lētāko.
7. Modelis jāpārspēj "rīt būs kā šodien", citādi to neizmantojam.

## 3. Iekārtas

**#7 · Siltums no zemes (skaidrojums)**

1. Lielāko daļu siltuma mums dod zeme.
2. 18 urbumi un divi siltumsūkņi.
3. Vasarā siltumu aizvedam atpakaļ zemē.
4. No vienas daļas elektrības dabūjam piecas daļas siltuma.

> **Pāreja:** Tagad to pašu mūsu ēkas dzīvajā shēmā.


**#8 · Siltummezgls dzīvajā**  
_Uz ekrāna:_ Visa sistēma vienā shēmā: urbumi, divi siltumsūkņi, tvertnes, radiatori un ventilācija.

1. Visa sistēma vienā dzīvā shēmā.
2. Sarkanais ir silts, zilais auksts.

> **Pāreja:** Sāksim no zemes.


**#9 · 1. Siltums no 18 urbumiem**  
_Uz ekrāna:_ Ziemā šķidrums urbumos uzņem zemes siltumu, vasarā ēkas siltumu aizvedam zemē. Šobrīd zeme dod 42 kW.

1. Šķidrums 18 urbumos sasilst.
2. Zeme šobrīd dod 42 kW, un par tiem nemaksājam.
3. To mēra siltuma skaitītājs.

> **Pāreja:** Bet ar 42 kW no zemes vēl nepietiek. Kāpēc?


**#10 · 2. Siltumsūkņi uzsilda**  
_Uz ekrāna:_ Šķidrums no zemes ir tikai ap 5 °C, ar to telpu nesasildīt. Ar 13 kW elektrības siltumsūkņi to uzsilda līdz 38 °C, un kopā sanāk 60 kW siltuma.

1. Zemes siltums ir tikai ap 5 °C, pārāk vēss.
2. Siltumsūkņi to uzsilda līdz 38 °C.
3. Tam vajag 13 kW elektrības, kopā sanāk 60 kW.

> **Pāreja:** Uzsildītais ūdens nonāk tvertnē.


**#11 · 3. Tvertne un radiatori**  
_Uz ekrāna:_ Lielā tvertne krāj siltumu kā baterija. Radiatori šobrīd atdod telpām 19,9 kW siltuma, grīdas apkure vēl 1,6 kW.

1. Tvertne krāj siltumu kā baterija.
2. Radiatori telpām šobrīd dod 19,9 kW.
3. To mēra Siemens siltuma skaitītājs.

> **Pāreja:** No tās pašas tvertnes silda arī gaisu.


**#12 · 4. Siltais gaiss**  
_Uz ekrāna:_ Siltais ūdens plūst arī caur ventilācijas sildītāju. Tas strādā kā auto salona apsilde: ventilators pūš gaisu caur karstu radiatoru, un telpās ieplūst silts gaiss.

1. Ventilācija silda gaisu ar silto ūdeni.
2. Tas strādā kā auto salona apsilde.
3. Siemens vārsts mēra, cik siltuma aiziet: 21 kW.

> **Pāreja:** Pēdējais solis ir karstais ūdens.


**#13 · 5. Karstais ūdens**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, platforma izlemj pēc elektrības cenas.

1. Karstajam ūdenim ir sava tvertne.
2. Kad to sildīt, MI izlemj pēc elektrības cenas.

> **Pāreja:** To visu varam vadīt, jo katru soli mērām.


**#14 · Mēs mērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 stundās 301 kWh elektrības: apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

1. 11 elektrības skaitītāji, katrai iekārtai savs.
2. Siltumu mēra skaitītāji un vārsti.
3. Zinām, kur aiziet katra kilovatstunda.

> **Pāreja:** Ko tas rāda par visu sezonu? Atveram enerģijas sadaļu.


## 4. Enerģija

**#15 · Tagad sīkāk par enerģiju**  
_Uz ekrāna:_ Apkures sezonā patērējām par 21 % mazāk nekā mēnesi iepriekš, bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

1. Šeit ir visa apkures sezona.
2. Patērējām par 21 % mazāk.
3. Samaksājām par 10 % vairāk, jo elektrība dārgāka.

> **Pāreja:** Cik efektīvi strādāja siltumsūkņi?


**#16 · Kurš atceras, ko nozīmē COP?**  
_Uz ekrāna:_ Visā periodā COP bija 5,50: no katras elektrības kWh ieguvām piecarpus kWh siltuma. Dzesēšana bija oktobra sākumā, tagad tā ir apstājusies.

1. Pajautā zālei, kas ir COP.
2. Sezonā COP bija 5,5.
3. Dzesēšana bija oktobra sākumā, tagad tikai apkure.

> **Pāreja:** Ar siltumu skaidrs. Bet kur aizgāja elektrība?


**#17 · Kur aiziet elektrība**  
_Uz ekrāna:_ Redzam, kur aiziet katra kilovatstunda, pa sistēmām un pa iekārtām. Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi.

1. Elektrība pa sistēmām un iekārtām.
2. Ventilācija iztērēja vairāk nekā siltumsūkņi.

> **Pāreja:** To pašu redzam arī pa stundām.


**#18 · Patēriņš pa stundām**  
_Uz ekrāna:_ Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri. Ventilācija patērē daudz visu laiku.

1. Patēriņš un cena katrai stundai.
2. Redzams, kad pārslēdzāmies uz apkuri.
3. Ventilācija visu laiku ir augstu.

> **Pāreja:** Cik mums maksā siltums?


**#19 · Par 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh, pilsētas €75/MWh. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

1. Mūsu siltums maksā 34 eiro par megavatstundu, pilsētas 75.
2. Tas ir par 55 % lētāk.
3. Ja elektrība ļoti dārga, ņemam pilsētas siltumu.

> **Pāreja:** Ne tikai cena, arī CO₂.


**#20 · Desmit reizes mazāk CO₂ nekā gāzei**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g. Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais.

1. Mūsu siltumam 21 grams CO₂, gāzei 213.
2. Ventspils siltums ir līdzīgā līmenī.
3. CO₂ platforma rēķina pati.

> **Pāreja:** To visu var dabūt vienā atskaitē.


**#21 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Excel enerģijas atskaite par jebkuru mēnesi.

1. Mēneša atskaite ar vienu klikšķi.
2. Excel fails grāmatvedībai.

> **Pāreja:** Līdz šim redzējām, kas notiek. Tagad: ko izlemj MI.


## 5. MI

**#22 · Ko MI ņem vērā**

1. MI plānotājs katru stundu skatās visu kopā.
2. Ēkā strādā ražotne, tāpēc esam uzmanīgi.
3. Karsto ūdeni MI vada pats.
4. Apkurei un dzesēšanai jauns indekss: kad izdevīgāk.

> **Pāreja:** Kā tas izskatās vienā dienā?



_Ko MI ņem vērā_

1. Elektrības cenu katrai rītdienas stundai.
2. Laika prognozi un izmērīto āra temperatūru.
3. Siltumsūkņu efektivitāti.
4. Patēriņa prognozi.
5. Komfortu: temperatūru, CO₂, mitrumu, karsto ūdeni.
6. Iekārtu stāvokli.
7. Pilsētas siltuma tarifu.


_Ja jautā par modeļiem (dziļās mācīšanās nav: viena ēka, daži mēneši datu)_

1. Patēriņa prognoze: lineārā regresija.
2. Telpu modeļi: fizikas modelis ar ridge regresiju.
3. Ventilācija: ridge regresija.
4. Siltuma atgūšana: formula un novirzes detektors.
5. Karstais ūdens: pārlase, vienmēr labākais grafiks.

**#23 · Karstais ūdens pēc elektrības cenas**

1. 30. oktobris, īstas biržas cenas.
2. Pajautā zālei: kad jūs sildītu ūdeni?
3. MI izvēlējās piecas stundas, 21 % lētāk.

> **Pāreja:** MI ne tikai plāno, tas arī meklē problēmas.


**#24 · Brīdinājumi: iekārtu kļūdas un MI atradumi**  
_Uz ekrāna:_ Siltumsūkņu kļūdu kodi, gaiss vārstos, sensori bez datiem un MI ieteikumi. Viss vienuviet, sagrupēts pa telpām.

1. Visi brīdinājumi vienuviet, pa telpām.
2. Iekārtu kļūdas un MI atradumi.

> **Pāreja:** Viens MI atradums tuvāk.



_Ko platforma meklē pati_

1. Iekārtu kļūdas un sensorus bez datiem.
2. Lielu patēriņu naktī.
3. Siltuma atgūšanu, kas krītas.
4. Ventilāciju, kas tērē par daudz.

**#25 · Dārgās stundas ventilācijā**  
_Uz ekrāna:_ PN1 strādāja par 29 % dārgāk nekā lētākajās stundās: no €94.81 varēja ietaupīt €21.40.

1. PN1 strādāja dārgajās stundās.
2. No 95 eiro varēja ietaupīt 21.
3. MI iesaka pārcelt darba laiku.

> **Pāreja:** Atradumus platforma apraksta arī vārdos.


**#26 · Secinājumi vienkāršā valodā**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %”. Platforma tos uzraksta pati.

1. Secinājumus platforma uzraksta pati.
2. No datiem, bez cilvēka.

> **Pāreja:** Nākamais solis: jautāt platformai pašam.


**#27 · MI asistents**

1. MI asistents, pie tā strādājam.
2. Jautā vienkārši, atbild no ēkas datiem.
3. Valodas modelis ir ES mākonī.

> **Pāreja:** Kur tas viss darbojas?


## 6. Kontrole

**#28 · Serveris ēkā (DATI Group)**

1. EDGE un mākonis kā viena sistēma.
2. Serveris ēkā, kopā ar DATI Group.
3. ES mākonī rezerves kopijas un valodas modelis.
4. Siemens Industrial Edge: atvērts diskusijai.

> **Pāreja:** Kā zinām, ka tas strādā?



_Ja jautā par Siemens_

1. Piedāvāja būvēt uz Industrial Edge.
2. Mums neder: slēgta platforma un licences.
3. Izvēlējāmies atvērtu vārteju.
4. Dalībniekiem ar Siemens rūpnīcām var derēt.

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
2. Zinājām, kur tā ir, cik maksā un kā lētāk.
3. Jautājumi.

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
