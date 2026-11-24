# VATP lietotāja saskarnes dizaina virzieni — slaidu teksti

Visi teksti no `presentation.html` (latviešu versija), 9 slaidi. Zem katra slaida ir runātāja piezīmes (taustiņš **N** prezentācijā).

---

## 1. VATP lietotāja saskarnes dizaina virzieni · Komandas apspriede · IPCEI-CIS HVAC AI pilotprojekts

### Kādu dizaina virzienu izvēlēsimies VATP sistēmai?

Četri dizaina virzieni. Vieni un tie paši dati. Viens kopīgs lēmums.

Esam sagatavojuši četrus interaktīvus prototipus, kuros izmantoti vieni un tie paši dati un četri galvenie sistēmas ekrāni. Šodien salīdzināsim pieejas, apspriedīsim to priekšrocības un trūkumus un vienosimies, kuru virzienu attīstīt tālāk.

- **A — Control Room** — Operatīvā vadība
- **B — Nordic Calm** — Vienkāršība un skaidrība
- **C — Spatial** — Telpiskais skatījums
- **D — Refined** — Esošās sistēmas pilnveide

Prototipi veidoti HTML formātā, izmantojot demonstrācijas datus. Tie nav savienoti ar reālo sistēmu. · 24.11.2026.

**Runātāja piezīmes**
- Šodienas galvenais mērķis ir izvēlēties vienu dizaina virzienu, uz kura pamata turpināsim sistēmas izstrādi.
- Šie ir konceptuāli prototipi, nevis gatavi produkti. Tāpēc šobrīd nepievēršam pārāk lielu uzmanību atsevišķiem skaitļiem vai nelielām nepilnībām.
- Svarīgākais ir saprast, cik ērta un saprotama ir katra pieeja un kā tā atbilst mūsu lietotāju vajadzībām.
- Pēc sanāksmes visi prototipi būs pieejami arī individuālai apskatei un izmēģināšanai.

---

## 2. Kā vērtēsim dizaina virzienus?

### Svarīgākais nav tikai vizuālais izskats

Izvērtējot katru prototipu, pievērsīsim uzmanību trim jautājumiem.

**01. Kam šī sistēma ir paredzēta?**
Vai galvenie lietotāji ir operatori un tehniķi, kuri ikdienā uzrauga iekārtu darbību, vai vadītāji un ēku pārvaldnieki, kuriem svarīgāks ir kopējais rezultāts?

**02. Kādai informācijai jābūt pirmajā vietā?**
- **A:** iekārtu aktuālais darbības stāvoklis
- **B:** datu nozīme un galvenie secinājumi
- **C:** ēku un iekārtu atrašanās vieta
- **D:** pazīstama, bet uzlabota lietošanas pieredze

**03. Cik sarežģīta būs ieviešana un uzturēšana?**
Jāvērtē ne tikai sākotnējais izstrādes apjoms, bet arī tas, cik viegli risinājumu būs papildināt, pievienojot jaunas ēkas, iekārtas un funkcionalitāti.

**Aicinājums:** vērtējot katru virzienu, domāsim par tā praktisko pielietojumu, ne tikai vizuālo iespaidu. Noslēgumā balsosim.

**Runātāja piezīmes**
- Aicinu katru dalībnieku jau prezentācijas laikā novērtēt katru virzienu skalā no 1 līdz 5.
- Tas palīdzēs salīdzināt visus četrus variantus un nepieņemt lēmumu tikai pēc pēdējā redzētā prototipa.
- Galvenais jautājums: kurš risinājums vislabāk atbilst mūsu sistēmas mērķiem un lietotāju ikdienas vajadzībām?

---

## 3. Kas visiem prototipiem ir kopīgs?

### Vienāds saturs, atšķirīga lietošanas pieredze

Lai salīdzinājums būtu objektīvs, visiem četriem prototipiem ir vienāds pamats.

**Vienādi dati un galvenie ekrāni**
Visos virzienos pieejami četri ekrāni: pieteikšanās, pārskata panelis, enerģijas dati un brīdinājumi. Mainās informācijas izkārtojums un mijiedarbība ar sistēmu.

**Enerģijas plūsmas vizualizācija**
Visos prototipos saglabāta enerģijas sadalījuma vizualizācija — no enerģijas avotiem līdz patēriņam. Katrā dizaina virzienā tā pielāgota kopējam stilam.

**Nozares terminoloģija un mērvienības**
Siltumsūkņi, ģeotermālie urbumi, gaisa apstrādes iekārtas (AHU), karstā ūdens sagatavošana u. c. Mērvienības: kWh, kW, €/MWh, COP, °C un ppm.

**Pielāgošanās mobilajām ierīcēm**
Visi prototipi pielāgoti arī šaurākiem ekrāniem, sākot no 375 px platuma. Tomēr lietošanas ērtums katrā virzienā atšķiras.

**Gaišais un tumšais režīms**
Kur tas atbilst dizaina koncepcijai, pieejami abi režīmi. Control Room veidots tikai tumšajā režīmā.

**Dažādi sistēmas darbības stāvokļi**
Visos prototipos var apskatīt datu ielādi, tukšu skatu, kļūdas paziņojumu un situāciju, kad nav savienojuma ar sistēmu.

**Runātāja piezīmes**
- Tā kā visos prototipos izmantoti vienādi dati, varam koncentrēties tieši uz dizainu un lietošanas pieredzi.
- Ja kāda vērtība šķiet neprecīza, jāatceras, ka tie ir demonstrācijas dati.
- Pieteikšanās ekrāns iekļauts, lai parādītu kopējo vizuālo pieeju. Autentifikācijas risinājumu šodien neizvērtējam.
- Svarīgi apskatīt arī kļūdu un bezsaistes stāvokļus — lietotājam sistēmai jābūt saprotamai arī tad, kad kaut kas nedarbojas.

---

## 4. A · Control Room

*Operatīvai iekārtu uzraudzībai un vadībai*

**Viss svarīgākais vienā ekrānā.** Tumšs, informācijas ziņā blīvs vadības panelis operatoriem un tehniķiem: aktuālā informācija par iekārtu darbību un iespēja ātri reaģēt uz izmaiņām.

*[Interaktīvs prototips: a-control-room/dashboard.html]*

**Priekšrocības**
- **Ātra piekļuve informācijai.** Vienā ekrānā redzami galvenie iekārtu darbības rādītāji un aktuālie brīdinājumi.
- **Efektīva ikdienas lietošana.** Komandu izvēlne (⌘K) un īsinājumtaustiņi (J/K, A, M, R) ļauj ātri strādāt arī ar lielu brīdinājumu un iekārtu skaitu.
- **Piemērots pastāvīgai uzraudzībai.** Labi izmantojams vadības telpās un uz lieliem monitoriem.

**Trūkumi**
- Lielais informācijas apjoms var būt grūti uztverams vadītājiem un lietotājiem, kuri sistēmu atver tikai reizēm.
- Tumšais, blīvais izkārtojums ir mazāk piemērots mobilajām ierīcēm.
- Pielāgojami paneļi un lietotāju individuālo izkārtojumu saglabāšana palielina uzturēšanas sarežģītību.

**Kad izvēlēties?** Ja galvenie lietotāji ir operatori un tehniķi, kuri ikdienā nepārtraukti uzrauga un pārvalda iekārtu darbību.

Paredzamais izstrādes apjoms: **●●○ — Vidējs**

**Runātāja piezīmes**
- Demonstrācijā vispirms norādām uz augšējo kustīgo informācijas joslu ar aktuālajiem rādītājiem — slodzi, enerģijas cenām, temperatūru u. c.
- Pēc tam noklikšķinām prototipā un atveram komandu izvēlni ar ⌘K. Aizveram ar Esc.
- Pēc tam pārejam uz brīdinājumu sadaļu un parādām pārvietošanos ar J/K un darbību izpildi ar A.
- Šī virziena galvenā ideja ir radīt vadības centra sajūtu — informācija nepārtraukti tiek aktualizēta un ir uzreiz pieejama.
- Diskusijas jautājums: vai mūsu ēku pārvaldnieki šo sistēmu vēlētos izmantot katru dienu, vai arī tā ir vairāk piemērota tehniskajam personālam?

---

## 5. B · Nordic Calm

*Vadītājiem, finansētājiem un ēku pārvaldniekiem*

**Mazāk datu. Vairāk skaidrības.** Gaišs, pārskatāms dizains, kas vispirms palīdz saprast galvenos secinājumus un tikai pēc tam piedāvā iedziļināties skaitļos.

*[Interaktīvs prototips: b-nordic-calm/dashboard.html]*

**Priekšrocības**
- **Viegli uztverama informācija.** Grafika vietā sistēma paskaidro: „Enerģijas patēriņš ir par 8 % mazāks nekā pagājušajā otrdienā.”
- **Ērts mobilajās ierīcēs.** Galvenā informācija ir viegli atrodama.
- **Piemērots pārskatiem un atskaitēm.** Atbilst vadības, finansētāju un IPCEI pārskatu vajadzībām.
- **Pārdomāti brīdinājumi.** Grupēti pēc nepieciešamās rīcības, lai lietotāji koncentrētos uz svarīgāko.

**Trūkumi**
- Automātiski veidotiem secinājumiem vajag kvalitatīvus datus un precīzus formulēšanas noteikumus latviešu un angļu valodā.
- Operatoriem var pietrūkt detalizētas informācijas bez papildu darbībām.
- Brīvāks izkārtojums nozīmē, ka vienlaikus redzams mazāk datu.

**Kad izvēlēties?** Ja svarīgākais ir skaidrs priekšstats par rezultātiem vadītājiem, finansētājiem un ēku pārvaldniekiem.

Paredzamais izstrādes apjoms: **●●○ — Vidējs**

**Runātāja piezīmes**
- Demonstrācijā sākam ar sākuma ekrāna kopsavilkumu: sistēma īsā tekstā pasaka, kāda šobrīd ir situācija.
- Pēc tam atveram enerģijas sadaļu, lēnām ritinām un apskatām piecu sadaļu pārskatu, tostarp ieteikumus tā noslēgumā.
- Noslēgumā atveram brīdinājumus: tie sadalīti pēc tā, vai jārīkojas, situācija jānovēro vai problēma jau ir atrisināta.
- Vizuāli šis ir salīdzinoši vienkāršs risinājums, taču galvenais izaicinājums ir automātiski veidoto secinājumu precizitāte.
- Nepietiek ar skaistu tekstu — tam vienmēr jāatbilst faktiskajiem datiem.
- Diskusijas jautājums: kuriem mūsu sistēmas lietotājiem šāds ikdienas kopsavilkums būtu visnoderīgākais?

---

## 6. C · Spatial

*Ēku kompleksu uzraudzībai un vizuālām demonstrācijām*

**Redzēt ne tikai kas notiek, bet arī kur.** Galvenais navigācijas elements ir ēku kompleksa interaktīvā karte, kas ļauj ātri atrast ēkas vai zonas, kurām vajag uzmanību.

*[Interaktīvs prototips: c-spatial/dashboard.html]*

**Priekšrocības**
- **Vizuāli saprotama atrašanās vieta.** Uzreiz redzams, kurā ēkā vai zonā ir novirzes vai brīdinājumi.
- **Iespaidīga demonstrācijas pieredze.** Projekta prezentācijām, viesu vizītēm un IPCEI rezultātu demonstrēšanai.
- **Ērta datu apskate laikā.** Laika slīdnis parāda, kā dienas gaitā mainās rādītāji.

**Trūkumi**
- **Lielākais izstrādes un uzturēšanas apjoms.** Katrai jaunai ēkai vai objektam jāizveido un jāuztur telpiskais modelis.
- Precīzām vērtībām un detalizētiem datiem vajag papildu darbības.
- Sarežģītāka piekļūstamība un iespējami veiktspējas ierobežojumi, pieaugot objektu skaitam.

**Kad izvēlēties?** Ja vizuāla demonstrēšana ir tikpat svarīga kā sistēmas ikdienas uzraudzība.

Paredzamais izstrādes apjoms: **●●● — Augsts**

**Runātāja piezīmes**
- Demonstrācijā izvēlamies konkrētu ēku, mainām laika slīdņa pozīciju un pēc tam pārslēdzam vizualizācijas režīmu uz komforta rādītājiem (Comfort).
- Mūsu sistēmā jau ir izstrādes stadijā esošs objekta 3D skats. Tātad daļa no šī virziena tehniskajiem pamatiem jau ir pieejama.
- Tomēr pilnvērtīga telpiska navigācija visā sistēmā prasītu papildu darbu.
- Diskusijas jautājums: vai telpiskajai vizualizācijai jākļūst par sistēmas galveno saskarni, vai arī tā būtu vērtīgāka kā atsevišķs 3D un demonstrācijas skats?

---

## 7. D · Refined

*Esošajiem sistēmas lietotājiem*

**Pazīstama sistēma. Labāka pieredze.** Saglabā pašreizējās sistēmas struktūru un pamatprincipus, uzlabojot vizuālo noformējumu, pārskatāmību un lietošanas ērtumu.

*[Interaktīvs prototips: d-refined/dashboard.html]*

**Priekšrocības**
- **Mazāks ieviešanas risks.** Sistēma nav jāapgūst no jauna, uzlabojumus var ieviest pakāpeniski.
- **Saglabāta esošā funkcionalitāte.** Ierastā navigācija un pazīstamie elementi, tostarp enerģijas plūsmas vizualizācija.
- **Vienotāks dizains.** Saskaņotas kartītes, skaidrāka datu attēlošana un tumšais režīms.
- **Elastīga vizuālā identitāte.** Krāsas un fontus var pielāgot bez izmaiņām struktūrā.

**Trūkumi**
- Esošās navigācijas un lietošanas pieredzes problēmas netiek pilnībā atrisinātas.
- Mazāk palīdz interpretēt datus nekā Nordic Calm, un operatīvā vadība ir vājāka nekā Control Room.
- Risks, ka uzlabojumus uztvers tikai kā vizuālas pārmaiņas.

**Kad izvēlēties?** Ja pašreizējā struktūra kopumā atbilst lietotāju vajadzībām un prioritāte ir ātri ieviest redzamus uzlabojumus.

Paredzamais izstrādes apjoms: **●○○ — Zems**

**Runātāja piezīmes**
- Demonstrācijā izmantojam augšējā joslā esošo dizaina iestatījumu pogu, lai parādītu četrus krāsu un fontu variantus.
- Pēc tam atveram enerģijas sadaļu: informācija sadalīta cilnēs — pārskats, enerģijas sadalījums, izmaksas, CO₂ emisijas un patēriņa likumsakarības.
- Noslēgumā atveram brīdinājumus: tie veidoti līdzīgi e-pasta iesūtnei — kreisajā pusē saraksts, labajā detalizēta informācija par izvēlēto brīdinājumu.
- Lielāko daļu uzlabojumu iespējams īstenot ar kopīgiem lietotāja saskarnes komponentiem un CSS mainīgajiem.
- Tas ļautu dizainu atjaunināt pakāpeniski, netraucējot pārējiem izstrādes darbiem.
- Diskusijas jautājums: vai mums šobrīd nepieciešama pilnīgi jauna pieeja, vai arī lielāku ieguvumu dotu esošās sistēmas mērķtiecīga pilnveide?

---

## 8. Četru virzienu salīdzinājums

### Katram virzienam ir savas stiprās puses

| Kritērijs | A — Control Room | B — Nordic Calm | C — Spatial | D — Refined |
|---|---|---|---|---|
| Galvenā auditorija | Operatori un tehniķi | Vadītāji, finansētāji | Demonstrācijas, ēku kompleksi | Esošie lietotāji |
| Galvenais uzsvars | Aktuālie darbības dati | Secinājumi un skaidrība | Atrašanās vieta | Pazīstama lietošanas pieredze |
| Informācijas daudzums ekrānā | Liels | Neliels | Vidējs | Vidējs |
| Lietošana telefonā | Mazāk ērta | Ļoti ērta | Ērta | Ērta |
| Izstrādes apjoms | ●●○ | ●●○ | ●●● | ●○○ |
| Pārmaiņas lietotājiem | Būtiskas | Būtiskas | Ļoti būtiskas | Nelielas |
| Galvenais risks | Pārlieku sarežģīts nespeciālistiem | Nepietiekama detalizācija operatoriem | Augstas izmaksas un sarežģīta paplašināšana | Nepietiekami būtiski uzlabojumi |

**Runātāja piezīmes**
- Neviens no četriem virzieniem nav labākais pilnīgi visos aspektos.
- Control Room piedāvā ātrumu un detalizāciju, Nordic Calm — skaidrību, Spatial — telpisku pārskatāmību, bet Refined — mazāku ieviešanas risku.
- Mums jāizvēlas nevis vizuāli iespaidīgākais variants, bet tas, kura priekšrocības un kompromisi vislabāk atbilst mūsu projekta vajadzībām.

---

## 9. Kopīgais lēmums

### Kuru virzienu attīstīsim tālāk?

Pirms balsojuma vienosimies par trim būtiskiem jautājumiem.

1. **Kas ir mūsu galvenais lietotājs?** Vai sistēmu visbiežāk izmantos operatori un tehniskais personāls vai vadītāji un ēku pārvaldnieki?
2. **Ko lietotājam jāredz vispirms?** Iekārtu aktuālo stāvokli, galvenos secinājumus vai informāciju par konkrētām ēkām un zonām?
3. **Cik lielas pārmaiņas esam gatavi ieviest?** Vai pietiek ar esošās sistēmas pilnveidi, vai arī vēlamies būtiski mainīt tās lietošanas pieredzi?

*[Balsojuma kartītes: katram virzienam dzīvs pārskata paneļa sīktēls (klikšķis atver prototipu jaunā cilnē) un balsu skaitītājs ar − / + pogām]*

- **A — Control Room** — Operatīvā vadība
- **B — Nordic Calm** — Vienkāršība un skaidrība
- **C — Spatial** — Telpiskais skatījums
- **D — Refined** — Esošās sistēmas pilnveide

**Balsojuma norise:** saskaitām katram virzienam atdotās balsis un reģistrējam rezultātus. Balsu skaits tiek saglabāts tikai šajā pārlūkā.

**Nākamais solis:** fiksējam izvēlēto virzienu un vienojamies par pirmā izstrādes posma prioritātēm.

**Runātāja piezīmes**
- Pirms balsošanas īsi pārrunājam trīs jautājumus, lai lēmums būtu balstīts uz kopīgu izpratni par sistēmas mērķiem.
- Pēc tam aicinu katru izvēlēties, viņaprāt, piemērotāko variantu.
- Ja balsis sadalās galvenokārt starp diviem virzieniem, vēlreiz pārrunājam to priekšrocības un trūkumus un rīkojam atkārtotu balsojumu starp abiem.
- Pēc lēmuma pieņemšanas fiksējam izvēli, galvenos argumentus un nākamos izstrādes uzdevumus.
- Svarīgākais rezultāts nav tikai izvēlēts dizains, bet kopīga izpratne par to, kādu sistēmu vēlamies izveidot un kam tā ikdienā kalpos.
