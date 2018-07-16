# Fejlesztői leírás

## Technológia
* Javascript
* HTML
* CSS

## A játéktér leírása
* A játéktér egy DIV ami magába foglalja a többi DIVet amelyek display:inline beállításúak.
* A méretezést egy függvénnyel oldjuk meg, amely lefut egyszer az oldal megnyitásakor, majd akkor is, ha átméretezik az oldalt.
* A négyzetek szélességét százalékosan adjuk meg.
* Egy legördülő menüben lehet kiválasztani a játéktér szélességét.
* A "tile" osztályhoz rendeljük az egyes csempéket.
* Az eledel "tile" osztálya "food".
* A kígyó csempe osztálya "snake".
* Az üres csempe osztálya "empty".

## A kígyó mozgása
* Az "új játék" gomb hatására a kígyó középen megjelenik.
* Azonnal indul a kígyó jobbra.
* Lépésenkénti ellenőrzés: A csempe osztályát vizsgáljuk. Ha snake az osztály legyen vége a játéknak. Ha food, akkor nő egyet a kígyó. Ha nincs olyan csempe, ahova lépni akar a fej, vége a játéknak.
* Irányítás: keydown eseményre változtatjuk az irányt. 
* Óraütésre mindig elvégezzük az összes ellenőrzést egy metódusban.
* A kígyó testét egy tömbben tároljuk és lépés esetén minden tömb elem az előző helyébe "lép".

## Pontok és eledel
* A points változóban tároljuk az aktuális pontokat.
* Egy eledel egy pontot ér.
* Random jelenik meg egyszerre egy eledel.
* Ellenőrizni kell, hogy ne a kígyó testére essen az eledel pozíciciója.
* Ha a kígyó feje rálép az eledelre, akkor növejük a pontokat és átállítjuk az oaztályokat.
* Az eledel elfogyaszása után újat generálunk.
