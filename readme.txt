-   A készítő neve: Gáll Eszter Eliza

-   A működő weboldal URL címe: https://esztergall.github.io/weboldal2025/index.html

-   A weboldal témájának rövid, 2 mondatos leírása:
Magyarország kultúrája és gasztronómiája a weboldal témája. A magyar szokásokkal, ételekkel, zenével és egyéb kulturális dolgokkal kapcsolatban szerepelnek benne rövid ismertetők és kérdőívek.

-   A saját JavaScript kód helyének és működésének leírása:
A "java.js" tartalmazza a kódot. Az órai anyagok alapján készítettem.
3 funkció van benne, egy kalkulátor, egy interaktív fotóalbum és a formhoz szükséges validálás és kiértékelés.

Az 1. egy kalkulátor, ami azt számolja ki hogy "mennyi a napi ajánlott gyulai kolbász mennyiség". Ez arra utal, hogyha az egész napi fehérjebevitelt gyuli kolbászokból szeretnénk megoldani, hány rúd lenne szükséges hozzá. 
Az etelek.html oldalon (Népi ételek menüpont) meg van adva egy input mező és egy onclick eseménnyel rendelkező gomb, ezek segítségével lehet felvinni a testömeg adatot.
Ekkor meghívódik a javaScript a function calc() nevű függvénye, ahol a w változóba eltárolódik a testömeg. Ezután a program megvizsgálja egy if függvénnyel hogy szám-e és 0-nál kisebb-e a megadott érték, és ha valamelyik igaz a kettő közül, egy hibaüzenettel tér vissza a program, jelezve hogy hibás értéket adott meg a felhasználó. Amennyiben jó értéket adott meg, kiszámolódik hogy mennyi a napi ajánlott fehérjebevitele a testtömegéhez képest egy átlag embernek(testtömeg* 0.8), majd ezt elosszuk annyi gramm fehérjével, amennyi egy rúd gyulai kolbászban van. Így kijön hogy hány rúd gyulai kolbász kell a napi fehérjebevitel fedezéséhez, ha máshonnan nem visz be a szerevezetébe fehérjét valaki. Ezt a program felül jeleníti meg, az "alert" segítségével.

A 2. egy interaktív fotógalléria, ami a nep.html oldalon (Kultúra menüpont) található, és a táncos képekből áll. 
Először a weboldalon kiválasztja az összes "tanc" id-jú képet, és ezeket az "images"-ben tárolja. Az "images" egy konstansként deklarált változó, ami egy NodeList típusú elemlistát tartalmaz. Ezután aprogram végigmegy a listán, és mindegyikhez hozzárendel egy egérre reagáló eseményt. Az első esemény miatt(mouseenter) ha az egér rámegy a képekre, a képek mérete 1.5-szörösre nő. A második esemény(mouseleave) miatt viszont ha elmozdul az adott képről az egér a kép visszazsugorodik eredeti méretére.

A 3. a form, ami a Kvíz oldalon található.
A from egy tipikus kvíz, ahol számolja a program a jó és rossz válaszokat, és a végén egy MessageBox-ban megjeleníti felül a kitöltő pontjait. 
Az első két mezőhöz nincs javaScript rendelve, azok csak azért vannak hogy mégtöbbféle beviteli mező legyen a kérdőívben. Ezek csak adatokat kéérnek el a felhaszánlótól de nem tárolják el őket.
Az utána következő mezőkhöz már végig van javaScript kód, és mindegyik validálva is van, mivel ezek már a pontszerzős kérdőív részei. Próbáltam minél többféle elemet berakni az órán tanultakból. Mindegyiknél egy if függvénnyel vizsgálom hogy jó választ adott-e a kitöltő, és minden jó válasznál eggyel növelem a pontjait, amit a score változóban tárolok. Van egy kérdés, a "Mi a kedvenc magyar történelmi eseményed és miért?", aminél az van beállítva, hogy minden válasz jónak számítson. Tehát ha nem üres a válaszrész itt a kitöltő automatikusan kap egy pontot.A többinél vagy listaszerűen vannak megadva a jó válaszok, vagy egyetlen válasz van jónak beállítva. Mindegyik résznél if függvénnyel vizsgálja meg a program, hogy jó-e a válasz. A javaSrcipt legvégén be van állítva, hogyha nincs kitöltve minden mező (az email-cím és a születési dátumon kívül), leálljon a program és ne mutassa meg a pontokat, így rávéve a felhasználót, hogy minden mezőt töltsön ki. A felhasználó ekkor hibaüzenetet is kap. Amennyiben az összes mezőbe(kivéve az email-címet és a születési dátumot) írt valamit a felhasználó, "alert" segítségével megjelenik felül hogy hány pontot szerzett összesen a kvíz kitöltésekor.


-   A használt egyedi fonttípus és annak helye:
Normál betűkhöz: IBM_Plex_Sans -> IBMPlexSans-VariableFont_wdth,wght.ttf
Ez a font mappán belül található, és a css-ben van beállítva.

Félkövérekhez: Roboto_Slab -> RobotoSlab-VariableFont_wght.ttf
Ez is a font mappán belül található, és a css-ben van beállítva.

-   Minden felhasznált külső forrás (kódrészlet, segítség) pontos megjelölése:
A tartalomhoz:
Google képek
https://premierhotelmiskolc.com/culture-of-hungary-customs-traditions-and-beliefs/
https://szabadpecs.hu/2023/10/a-magyar-kultura-egyik-meghatarozo-resze-a-hazai-gasztronomia/
https://hu.wikipedia.org/wiki/Magyar_n%C3%A9pt%C3%A1nc
https://hu.wikipedia.org/wiki/Magyar_n%C3%A9pzene
https://hu.wikipedia.org/wiki/N%C3%A9pszok%C3%A1sok
https://biotechusa.hu/blog/eletmod/mennyi-feherjere-van-szukseged-es-milyen-formaban/
https://www.dine4fit.hu/elelmiszerek/gyulai-kolbasz-250-g

A betűtípushoz:
https://fonts.google.com/selection

A kódhoz az órai anyagokból merítettem segítséget:
https://balintmatyus.github.io/it_arch_webfejlesztes/contents/week10/10-js-forms.html
