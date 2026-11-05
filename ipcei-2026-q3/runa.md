# Runa · Vienas kilovatstundas ceļš

IPCEI-CIS · HVAC AI platforma · 2026. g. 3. ceturksnis · Zinātniskā padome

Tūre: `index.html`. Taustiņš N parāda piezīmes ekrānā, `#12` adreses beigās atver 12. soli. Šis fails tiek ģenerēts no tūres, tāpēc teksts sakrīt ar piezīmēm ekrānā.

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

Labdien. Šis ir IPCEI-CIS projekts par mākoņa un EDGE skaitļošanas infrastruktūru. Mūsu daļa ir HVAC AI platforma, kas savieno iekārtas ēkā ar ES mākoni.  
Slaidu par platformu nebūs, rādīšu pašu platformu. Lai būtu vieglāk sekot, sekosim vienai kilovatstundai.  
Sāksim ar ēku un to, ko platforma rāda ikdienā. Tad ieskatīsimies ēkas iekšienē un redzēsim, kā siltums no zemes nonāk līdz telpai. Beigās parādīšu, kā mākslīgais intelekts palīdz elektrību pirkt lētāk un kā tas parādās rēķinā.

## 1. Ēka

**#2 · Mūsu objekts: VATP ēka**  
_Uz ekrāna:_ Katrs punktiņš ir reāla iekārta. Abi siltumsūkņi šobrīd strādā: 18 kW elektrības → 96,5 kW siltuma.

Šī ir mūsu ēka 3D skatā. Katrs punktiņš ir reāla iekārta, kas sūta datus uz platformu.  
3D skats pagaidām ir eksperiments. Mēģinām saprast, ko un kā rādīt ikdienas lietotājiem un ko cilvēkiem, kas ēku apmeklē. Konferencēs redzējām, ka dažos tirgos uzņēmumi šādus 3D modeļus izvēlas labprāt, tāpēc pamēģinājām arī mēs.  
Augšā redzams, ka abi siltumsūkņi šobrīd strādā: patērē 18 kilovatus elektrības un dod gandrīz 97 kilovatus siltuma.

**#3 · Viens klikšķis, un iekārta ir redzama dzīvajā**  
_Uz ekrāna:_ Uzspiežot uz iekārtas, redzam, kā tā strādā tieši tagad: galvenais siltumsūknis no 6 kW elektrības dod 30,9 kW siltuma.

Šis skats ir domāts, lai jebkurš saprastu, kas ēkā notiek, arī bez tehniskām zināšanām.  
Uzspiežam uz galvenā siltumsūkņa.  
Pirms skatāmies skaitļus, pajautājiet zālei: ja iekārta patērē 6 kilovatus elektrības, cik siltuma tā dod? (Pagaidiet atbildi.)  
Gandrīz 31 kilovatu, piecas reizes vairāk. Un tas ir tagad, nevis vakar vai pagājušajā mēnesī.  
Tāpat varam uzspiest uz ventilācijas, skaitītāja vai jebkuras citas iekārtas un uzreiz redzēt, vai tā strādā normāli.  
Kā no 6 sanāk 31, pastāstīšu nedaudz vēlāk. Dati nāk tieši no iekārtas kontrollera, un tas ir mūsu sistēmas EDGE līmenis.

## 2. Pārskats

**#4 · Sākumlapa, ko katrs pielāgo sev**  
_Uz ekrāna:_ Šo lietotājs redz katru rītu. Katrs pats izvēlas, ko šeit rādīt: patēriņu, izmaksas, cenu vai brīdinājumus.

3D skats labi parāda ēku. Ikdienā lietotājs atver šo, platformas sākumlapu.  
Katrs lietotājs pats izvēlas, kuras kartītes un ieskatus šeit redz. Ēkas pārvaldniekam svarīgākas ir izmaksas un brīdinājumi, tehniķim iekārtu stāvoklis.  
Augšā ir šodienas patēriņš, cik tas maksāja un kā tas salīdzinās ar vakardienu. Blakus ir elektrības cena šobrīd un laiks ārā.

**#5 · Prognoze nākamajām stundām**  
_Uz ekrāna:_ Viens no ieskatiem, ko pētām: MI prognozē ēkas patēriņu. Zaļās joslas ir lētās stundas, sārtās dārgās.

Mēs joprojām pētām, kādus ieskatus šeit ir vērts rādīt. Šis ir viens piemērs.  
MI prognozē, cik enerģijas ēkai vajadzēs nākamajās stundās. Līnija ir izmērītais patēriņš, raustītā līnija ir prognoze.  
Zaļās joslas ir lētās stundas, sārtās dārgās. No prognozes un cenas vēlāk izriet lēmums, kad tērēt.

**#6 · Kas jāzina šodien**  
_Uz ekrāna:_ Svarīgākais dažās ziņās: neapskatīti brīdinājumi, 39 % enerģijas patērēts naktī un MI ieteikums ventilācijai.

Pārvaldniekam nav jāpēta grafiki. Platforma pati apkopo svarīgāko dažās īsās ziņās.  
Šodien ir neapskatīti brīdinājumi. 39 procenti enerģijas aizgāja naktī, kad ēkā neviena nav. Un ir ieteikums ventilāciju darbināt lētākajās stundās.  
Bet no kurienes šīs ziņas rodas? Lai to saprastu, vispirms ieskatīsimies, kā ēka strādā.  
  
(Sagatavei, ja jautā.) Ziņas nāk no trim avotiem:  
• Brīdinājumi: platforma pati pārbauda iekārtas un sensorus, piemēram, kļūdu kodus un sensorus bez datiem.  
• Vienkārši noteikumi, ko var pārbaudīt grafikā: vai naktī (no 22 līdz 6) iztērēti vairāk nekā 35 % enerģijas, vai bāzes slodze mainījusies vairāk par 10 %, vai kāda sistēma augusi vairāk par 15 %, vai dārgākajā stundu ceturtdaļā iztērēti vairāk nekā 35 % enerģijas.  
• MI modeļi. Rāda tikai to, kam vajag uzmanību, ne vairāk par četrām ziņām.  
  
Kā strādā mūsu modeļi, vienkāršā valodā. Visi ir klasiskā statistika vai fizika ar 2 līdz 5 parametriem, neironu tīklu nav.  
• Patēriņa prognoze (lineārā regresija). Platforma skatās, cik ēka patērēja pie dažādām āra temperatūrām, un novelk taisni caur šiem punktiem: jo aukstāks, jo vairāk. Tad ieliek rītdienas laika prognozi un nolasa, cik vajadzēs.  
• Telpu modelis (fizikas modelis). Telpa atdziest, ja ārā ir aukstāks. No datiem modelis uzzina divus skaitļus: cik ātri šī telpa zaudē siltumu un cik siltuma tai pienāk no cilvēkiem un iekārtām. Ar tiem var paredzēt, kāda temperatūra būs pēc dažām stundām.  
• Ventilācijas patēriņš (regresija). Modelis iemācās, cik elektrības ventilācijai vajadzētu, zinot ventilatoru jaudu, siltuma atgūšanu, elektrisko sildītāju un āra temperatūru. Ja iekārta tērē vairāk, nekā vajadzētu, visticamāk aizsērējis filtrs vai nolietojies motors.  
• Siltuma atgūšana (formula, nevis apmācīts modelis). Ventilācija izpūš no telpām siltu gaisu un iesūc aukstu āra gaisu. Siltuma atgūšanas ritenis paņem siltumu no izplūstošā gaisa un atdod to ienākošajam. Efektivitāte ir, par cik ienākošais gaiss sasilst, salīdzinot ar to, cik to vispār varētu sasildīt. Piemērs: ārā 0 °C, telpā 20 °C, pēc riteņa ienākošais gaiss ir 10 °C, tātad 50 %. Platforma salīdzina pēdējo stundu vidējo ar ilgtermiņa vidējo. Ja efektivitāte lēnām krītas, ritenis, visticamāk, ir netīrs vai iesprūdis.  
• Dārgās stundas (aritmētika). Katrai dienai rēķinām, cik samaksājām un cik maksātu tās pašas kilovatstundas, ja tās iztērētu dienas lētākajās stundās. Starpība ir lielākais iespējamais ietaupījums.  
• Karstā ūdens grafiks (pārlase). Platforma izmēģina visus iespējamos sildīšanas laikus nākamajai diennaktij un izvēlas lētāko, ievērojot, cik bieži ūdens jāuzsilda.  
Katru apmācīto modeli pārbaudām uz vēsturiskiem datiem. Ja tas nav precīzāks par pieņēmumu “rīt būs kā šodien”, to neizmantojam.

## 3. Iekārtas

**#7 · Siltums no zemes (skaidrojums)**

Tātad, kā mūsu ēka iegūst siltumu.  
Pie ēkas izurbām 18 dziļus urbumus. Zeme dziļumā visu gadu ir ap astoņiem grādiem silta. Pa urbumiem riņķo šķidrums: auksts aiziet lejā un atgriežas siltāks.  
Šo jau iesildīto šķidrumu divi siltumsūkņi uzsilda līdz vajadzīgajai temperatūrai. Tā kā daļu darba jau izdarīja zeme, elektrības vajag maz. Var teikt, ka mēs pārstrādājam zemes siltumu.  
Vasarā viss notiek otrādi: ēkas lieko siltumu aizvedam zemē, un tā ēku atvēsinām.  
No vienas daļas elektrības iegūstam piecas daļas siltuma. Elektriskais sildītājs dod vienu pret vienu, gāzes katls pat nedaudz mazāk. Mūsu sistēma šajā apkures sezonā deva piecarpus.

**#8 · Siltummezgls dzīvajā**  
_Uz ekrāna:_ Visa sistēma vienā shēmā: urbumi, divi siltumsūkņi, tvertnes, radiatori un ventilācija.

Tagad tas pats mūsu ēkā. Shēma ir dzīva, plūsmas kustas pa caurulēm. Sarkanā krāsa ir silts, zilā auksts.  
Iesim pa soļiem no zemes līdz telpām.

**#9 · 1. Siltums no 18 urbumiem**  
_Uz ekrāna:_ Ziemā šķidrums urbumos uzņem zemes siltumu, vasarā ēkas siltumu aizvedam zemē. Šobrīd zeme dod 42 kW.

Pirmais solis ir zeme. Pie VATP ir 18 dziļi urbumi, pa kuriem riņķo šķidrums. Ziemā tas urbumos sasilst un nes siltumu uz siltumsūkņiem.  
Šobrīd zeme mums dod 42 kilovatus, un par tiem mēs nemaksājam. To mēra siltuma skaitītājs uz urbumu loka: caur urbumiem plūst ap 7 kubikmetri šķidruma stundā, un tas sasilst par 4 līdz 5 grādiem.  
Vasarā ir otrādi: ēkas lieko siltumu aizvedam uz zemi, un tas mūs atvēsina. Zeme mums kalpo kā liela siltuma krātuve visam gadam.

**#10 · 2. Siltumsūkņi uzsilda**  
_Uz ekrāna:_ Šķidrums no zemes ir tikai ap 5 °C, ar to telpu nesasildīt. Ar 13 kW elektrības siltumsūkņi to uzsilda līdz 38 °C, un kopā sanāk 60 kW siltuma.

Otrais solis. Kāpēc nepietiek ar 42 kilovatiem no zemes?  
Siltuma ir daudz, bet tas ir pārāk vēss. Šķidrums no zemes nāk ar dažiem grādiem, ap pieci. Siltums pats plūst tikai no siltāka uz vēsāku, tāpēc ar piecu grādu ūdeni divdesmit grādu telpu nesasildīt. Radiatoriem vajag ūdeni ap 35 grādiem, karstajam ūdenim vēl karstāku.  
Siltumsūknis ar elektrību šo siltumu paceļ augstākā temperatūrā, līdzīgi kā sūknis paceļ ūdeni kalnā. Tam vajag 13 kilovatus elektrības.  
Kopā sanāk 60 kilovati siltuma. Lielāko daļu dod zeme, elektrība tikai paceļ temperatūru, un tāpēc sistēma ir tik efektīva.

**#11 · 3. Tvertne un radiatori**  
_Uz ekrāna:_ Lielā tvertne krāj siltumu kā baterija. Radiatori šobrīd atdod telpām 19,9 kW siltuma, grīdas apkure vēl 1,6 kW.

Trešais solis. Siltums nonāk lielā tvertnē, kas to krāj kā baterija. No tvertnes silts ūdens aiziet uz radiatoriem un grīdas apkuri.  
19,9 kilovati ir siltums, ko radiatori telpām atdod tieši tagad. To mēra Siemens ultraskaņas siltuma skaitītājs uz radiatoru loka, un platforma to nolasa caur M-Bus. Ūdens radiatoros ienāk ar 33 grādiem un atpakaļ aiziet ar 29.  
Grīdas apkure šobrīd dod vēl 1,6 kilovatus. Tai ir savs siltuma skaitītājs.

**#12 · 4. Siltais gaiss**  
_Uz ekrāna:_ Siltais ūdens plūst arī caur ventilācijas sildītāju. Tas strādā kā auto salona apsilde: ventilators pūš gaisu caur karstu radiatoru, un telpās ieplūst silts gaiss.

Ceturtais solis. Silto ūdeni izmanto arī ventilācija.  
Tas strādā tāpat kā apsilde automašīnā. Karsts ūdens plūst caur nelielu radiatoru, ventilators pūš caur to gaisu, un salonā ieplūst silts gaiss.  
Ventilācijas iekārtā ir tieši tas pats, tikai lielāks: ūdens no tvertnes plūst caur sildītāju, ventilators caur to pūš svaigo āra gaisu, un telpās gaiss ieplūst jau silts.  
Siemens vārsts mēra, cik siltuma tā aiziet. Šobrīd tie ir 21 kilovats.

**#13 · 5. Karstais ūdens**  
_Uz ekrāna:_ Atsevišķa tvertne, šobrīd 51 °C. Kad to sildīt, platforma izlemj pēc elektrības cenas.

Piektais solis ir karstais ūdens krānos. Tam ir sava tvertne.  
Šeit MI sāka strādāt pirmais: platforma pati izvēlas, kurās stundās ūdeni sildīt, lai elektrība būtu lētāka.

**#14 · Mēs mērām katru soli**  
_Uz ekrāna:_ Pēdējās 24 stundās 301 kWh elektrības: apkurei 53 %, ventilācijai 40 %, karstajam ūdenim 5 %.

Lai varētu runāt par energoefektivitāti, viss ir jāizmēra.  
Elektrību mēra 11 skaitītāji, katrai iekārtai savs. Siltumu mēra siltumsūkņi un vārsti. Tā platforma zina, kur aizgāja katra kilovatstunda.

## 4. Enerģija

**#15 · Tagad sīkāk par enerģiju**  
_Uz ekrāna:_ Apkures sezonā patērējām par 21 % mazāk nekā mēnesi iepriekš, bet samaksājām par 10 % vairāk, jo elektrība kļuva dārgāka.

Tagad iedziļināsimies enerģijā. Šī ir enerģijas sadaļa, un šeit redzams viss apkures sezonas periods.  
Patērējām par piekto daļu mazāk nekā mēnesi iepriekš, bet samaksājām vairāk, jo elektrība kļuva dārgāka.  
Ar taupīšanu vien nepietiek. Svarīgi ir arī tas, kurās stundās elektrību pērkam, un ar to nodarbojas MI.

**#16 · Kurš atceras, ko nozīmē COP?**  
_Uz ekrāna:_ Visā periodā COP bija 5,50: no katras elektrības kWh ieguvām piecarpus kWh siltuma. Dzesēšana bija oktobra sākumā, tagad tā ir apstājusies.

Pajautājiet zālei, vai kāds atceras, ko nozīmē COP. (Pagaidiet atbildi.)  
Tas ir, cik siltuma dabūjam no vienas elektrības kilovatstundas. Visā periodā mūsu siltumsūkņiem tas bija 5,5, kopā 11 tūkstoši kilovatstundu siltuma.  
Blakus redzama dzesēšana. Oktobra sākumā ēku vēl dzesējām, bet tagad līkne ir plakana: dzesēšana ir apstājusies, un strādā tikai apkure.

**#17 · Kur aiziet elektrība**  
_Uz ekrāna:_ Redzam, kur aiziet katra kilovatstunda, pa sistēmām un pa iekārtām. Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi.

Platforma parāda, kur aiziet elektrība: no ēkas uz sistēmām un tālāk uz katru iekārtu.  
Šajā periodā ventilācija iztērēja vairāk elektrības nekā abi siltumsūkņi kopā. Daudziem tas ir pārsteigums, un tāpēc MI ar ventilāciju sāk.

**#18 · Patēriņš pa stundām**  
_Uz ekrāna:_ Redzams, kad ēka pārslēdzās no dzesēšanas uz apkuri. Ventilācija patērē daudz visu laiku.

Šeit ir patēriņš pa stundām, katrai stundai sava biržas cena.  
Labi redzams brīdis, kad ēka pārslēdzās no dzesēšanas uz apkuri.  
Ventilācija visu laiku ir augstu. Tā ir lielākā patērētāja, un ietaupījumu MI meklē vispirms tur.

**#19 · Par 55 % lētāk nekā pilsētas siltums**  
_Uz ekrāna:_ Mūsu siltums maksāja €33.6/MWh, pilsētas €75/MWh. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu.

Mūsu siltuma megavatstunda maksāja 34 eiro, pilsētas siltums maksā 75.  
Turklāt mēs neesam atkarīgi tikai no elektrības cenas. Ja elektrība kļūst ļoti dārga, varam pārslēgties uz pilsētas siltumu. Mums ir divi avoti, un izmantojam lētāko.

**#20 · Desmit reizes mazāk CO₂ nekā gāzei**  
_Uz ekrāna:_ Mūsu siltums: 21 g CO₂/kWh. Gāzes katls: 213 g. Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais.

Katrai kilovatstundai ir arī oglekļa pēda. Tā kā lielāko daļu siltuma dod zeme, mūsu siltumam tie ir tikai 21 grams CO₂ uz kilovatstundu. Gāzes katlam būtu 213, desmit reizes vairāk.  
Ventspils pilsētas siltums ir līdzīgā līmenī kā mūsējais, tāpēc pret to mūsu ieguvums ir cena.  
Platforma CO₂ rēķina automātiski, un to prasīs arī ES ziņošana.

**#21 · Atskaite ar vienu klikšķi**  
_Uz ekrāna:_ Excel enerģijas atskaite par jebkuru mēnesi.

Mēneša beigās pietiek ar vienu pogu, un grāmatvedībai ir gatava atskaite.

## 5. MI

**#22 · Ko MI ņem vērā**

MI plānotājs katru stundu ņem vērā visus rādītājus kopā.  
Ēkā strādā ražotne, tāpēc ar kritiskām iekārtām esam ļoti uzmanīgi. Ko MI dara šodien:  
• Karsto ūdeni MI vada pats: izvēlas lētākās stundas un pats ieslēdz sildīšanu.  
• Apkurei un dzesēšanai MI kopš nesen katru stundu aprēķina indeksu, cik izdevīgi ir sildīt vai dzesēt tieši tagad. Nākamais solis ir ar šo indeksu vadīt siltumsūkņus.  
• Ventilācijai MI iesaka darba stundas pārcelt uz lētāko laiku.  
Ko tas ņem vērā:  
• elektrības cenu katrai rītdienas stundai no Nord Pool;  
• laika prognozi 48 stundām uz priekšu: āra temperatūru, sauli, mākoņus un vēju, kā arī ēkā izmērīto āra temperatūru;  
• siltumsūkņu efektivitāti (COP un EER), ko mērām katru stundu;  
• prognozi, cik enerģijas ēkai vajadzēs;  
• komforta robežas: telpu temperatūru, CO₂, mitrumu un to, ka karstais ūdens jāuzsilda ik 3 līdz 8 stundām;  
• iekārtu stāvokli: tvertņu temperatūras, kompresora startus un kļūdas;  
• pilsētas siltuma tarifu salīdzinājumam.  
Ja jautā par modeļiem: dziļo mācīšanos neizmantojam. Tai vajag tūkstošiem vai miljoniem parametru un ļoti daudz datu, bet mums ir viena ēka un daži mēneši datu. Mūsu modeļiem ir 2 līdz 5 parametri.  
• Slodzes prognoze: lineārā regresija pret āra temperatūru.  
• Telpu modeļi: fizikas modelis katrai telpai, kas zina, cik ātri tā atdziest.  
• Ventilācijas enerģija: regresija pret ventilatoru jaudu, siltuma atgūšanu un āra temperatūru.  
• Siltuma atgūšanas efektivitāte: fizikas formula, un sekojam, vai tā nekrītas.  
• Karstā ūdens grafiks: pārbaudām visus iespējamos variantus, tāpēc tas vienmēr ir labākais.  
Katru modeli pārbaudām uz vēsturiskiem datiem. Ja tas nav precīzāks par vienkāršu pieņēmumu “rīt būs kā šodien”, mēs to neizmantojam.

**#23 · Karstais ūdens pēc elektrības cenas**

Šis ir īstais algoritms, kas strādā mūsu ēkā, ar īstām biržas cenām.  
Pirms rādāt, pajautājiet zālei: kurās stundās jūs sildītu ūdeni? (Pagaidiet.)  
Šī ir 30. oktobra diena. Platforma izvēlējās šīs piecas stundas, un tas ir par 21 % lētāk nekā sildot vienmērīgi visu dienu. Nedēļā vidēji tie ir 13 %.  
Apakšējā joslā redzamas stundas, kurās siltumsūkņa siltums ir lētāks par pilsētas siltumu.

**#24 · Brīdinājumi: iekārtu kļūdas un MI atradumi**  
_Uz ekrāna:_ Siltumsūkņu kļūdu kodi, gaiss vārstos, sensori bez datiem un MI ieteikumi. Viss vienuviet, sagrupēts pa telpām.

Viss, ko platforma atrod, nonāk vienā vietā, sagrupēts pa telpām. Šie ir reāli šīs nedēļas brīdinājumi, piemēram, siltumsūkņa kļūdu kodi un gaiss hidraulikā.  
Tos atrod platforma pati. Ko tā meklē:  
• Iekārtu kļūdas un sensorus, kas vairs nesūta datus.  
• Neparastu patēriņu, piemēram, ka 39 procenti enerģijas aiziet naktī, kad ēka ir tukša.  
• Siltuma atgūšanu ventilācijā. Ja tās efektivitāte lēnām krītas, visticamāk ritenis ir netīrs vai iesprūdis.  
• Ventilācijas patēriņu. Modelis zina, cik iekārtai būtu jāpatērē šādā laikā un režīmā, un redz, ja tā tērē vairāk.  
• Dārgās stundas. Tūlīt parādīšu vienu piemēru.

**#25 · Dārgās stundas ventilācijā**  
_Uz ekrāna:_ PN1 strādāja par 29 % dārgāk nekā lētākajās stundās: no €94.81 varēja ietaupīt €21.40.

Šis ir viens MI atradums tuvāk. MI salīdzina, cik ventilācija iztērēja, ar to, cik būtu iztērējusi, ja strādātu lētākajās stundās.  
PN1 29 dienās iztērēja 95 eiro, un 21 no tiem varēja palikt kabatā. MI iesaka pārcelt darba laiku.

**#26 · Secinājumi vienkāršā valodā**  
_Uz ekrāna:_ “Apkure sākās šajā periodā”, “bāzes slodze samazinājās par 11 %”. Platforma tos uzraksta pati.

Platforma pati uzraksta secinājumus vienkāršā valodā. Šos teikumus neviens nerakstīja, tie ir izveidoti automātiski no datiem.

**#27 · MI asistents**

Pie šī jau strādājam: MI asistents.  
Var vienkārši pajautāt, piemēram, kāpēc ventilācija šomēnes maksāja vairāk, un tas atbild no ēkas datiem un parāda avotus. Šis piemērs ir ar šī mēneša reāliem skaitļiem.  
Valodas modelis darbojas ES mākonī, un tā ir mūsu IPCEI-CIS mākoņa daļa.

## 6. Kontrole

**#28 · Serveris ēkā (DATI Group)**

Tagad par IPCEI-CIS daļu: EDGE un mākonis kā viena sistēma.  
EDGE līmenī ir iekārtu kontrolleri: divi Siemens Climatix ventilācijai, divi Luxtronik siltumsūkņiem, Siemens enerģijas vārsti un 11 Shelly skaitītāji. Ar tiem runā vārteja, un tālāk dati nonāk serverī tepat ēkā.  
Serveri izveidojām kopā ar DATI Group. Uz tā strādā platforma, datubāze un MI, tāpēc lēmumi tiek pieņemti ēkā.  
Mākonī, ES datu centros, glabājas rezerves kopijas un strādā asistenta valodas modelis. No turienes nāk arī elektrības cenas un laika prognozes.  
Rezerves kopiju taisām katru nakti, un ārpus ēkas glabātā kopija ir bloķēta, lai to nevarētu izdzēst. Katru mēnesi pārbaudām, ka no kopijas tiešām var atjaunot visu sistēmu.  
EDGE daļu apspriedām arī ar Siemens. Viņu IPCEI-CIS projektā izveidots Industrial Edge ierīču komplekts, ar kuru arī citu ražotāju iekārtas var darbināt Siemens Industrial Edge vidi. Siemens mums piedāvāja būvēt uz šīs platformas.  
Mūsu ēkai tas neder. Pati vide un tās pārvaldība ir slēgta Siemens platforma ar licencēm, un aparatūra ir dārgāka. Mums ēkā ir dažādu ražotāju iekārtas, tāpēc izvēlējāmies atvērtu vārteju uz parastas aparatūras.  
Tiem projekta dalībniekiem, kuru rūpnīcās jau ir Siemens iekārtas, Industrial Edge var būt labs ceļš.

**#29 · Testēšana (TestDevLab)**

Kā zinām, ka tas strādā? TestDevLab izstrādāja IPCEI testēšanas stratēģiju ar sešiem līmeņiem, no atsevišķām funkcijām līdz pieņemšanai reālā ēkā, un septiņām testu grupām. Mēs to pielāgojām HVAC platformai.  
• Vairāk nekā 3200 testu pārbauda katru funkciju atsevišķi.  
• Ap 450 testu pārbauda kodu kopā ar īstu datubāzi.  
• 57 scenāriji pārlūkā darbojas kā īsts lietotājs: pieslēdzas, atver enerģijas paneļus un iekārtas, pārbauda visu septiņu lomu tiesības.  
TestDevLab stratēģiju jau ieviešam, līmeni pa līmenim.  
Testi palaižas automātiski pie katras koda izmaiņas uz tā paša servera ēkā. Labojums nonāk ēkā tikai tad, kad visi testi ir izturēti un cilvēks to ir apstiprinājis.

## 7. Tālāk

**#30 · Kas tālāk**

Ko darīsim tālāk. MI asistentu dosim visiem lietotājiem, platformu pieslēgsim nākamajām ēkām un būvēsim digitālo dvīni, kurā izmaiņas var izmēģināt, pirms tās veic īstajā ēkā.

**#31 · Paldies**

Paldies. Mūsu kilovatstunda ir nonākusi galā. Katrā pieturā platforma zināja, kur tā ir, cik tā maksā un kā to nopirkt lētāk.  
Labprāt atbildēšu uz jautājumiem.

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
