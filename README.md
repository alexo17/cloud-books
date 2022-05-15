# Documentație proiect Cloud Computing

## Introducere

Bună ziua, numele meu este Alexandru Oprea și sunt student în cadrul programului de masterat SIMPRE. În cele ce urmează voi descrie funcționalitățile proiectului la materia Cloud Computing. Aplicația se poate regăsi pe [https://pacific-spire-64096.herokuapp.com/](https://pacific-spire-64096.herokuapp.com/). 

## Descriere problemă

În ultimul timp, când cauți o carte pe Internet primele rezultate de care te vei lovi sunt de cele mai multe ori reclame. De asemenea, când cauți o anumită carte poate ai vrea să faci rost de aceasta într-o ediție în limba ta natală și dorești să știi care ar fi numele ei în acest caz, fără să ai pași suplimentari precum deschiderea unui nou tab doar pentru a folosi Google Translate. Proiectul de față a fost realizat în ideea de a soluționa aceste două probleme.

## Descriere API

Acest proiect utilizează un RESTful API ce folosește la rândul său metode HTTP precum:
- GET - metoda pentru a regăsi o resursă;
- POST - pentru a crea o resursă.

Proiectul se folosește de API-urile Google Books și LibreTranslate.
Prin intermediul Google Books API se poate realiza o aplicație ce efectuează căutări pentru a prelua informații despre vizibilitate și disponibilitatea cărților electronice. Realizarea de cereri către acest API necesită o autentificare prin intermediul unei chei ce va fi trimisă ca parametru atunci când se face un ***GET*** pe o rută. Ruta folosită în cadrul acestui proiect este `https://www.googleapis.com/books/v1/volumes?q=&key=`, unde ***q*** este parametrul asociat termenului căutat, iar ***key*** reprezintă cheia API pentru autentificarea cu succes.
LibreTranslate este un API Open-Source folosit pentru traducerea de text. Acest API nu necesită autentificare, iar obținerea textului tradus se face printr-un ***POST*** la `https://libretranslate.de/translate` cu următorii parametri:
- q - textul pe care dorim să-l traducem;
- source - limba sursă al textului;
- target - limba în care textul va fi tradus.

## Flux de date

La pornirea aplicației, utilizatorul este întâmpinat de o bară de căutare și de un dropdown cu câteva limbi suportate de API-ul de traducere.
![image](https://user-images.githubusercontent.com/72127941/168464792-65a3e184-d01f-4bcb-b891-db37f4ce8820.png)  
Introducerea textului în câmpul de căutare și apăsarea butonului ***Search*** va determina lansarea unei metode ***GET*** către Google Books API (a doua imagine de jos), metodă ce va întoarce cărțile filtrate după titlul căutat.
![image](https://user-images.githubusercontent.com/72127941/168465040-7fdfde5a-2267-45c1-b9ec-c2953d8306f2.png)
![image](https://user-images.githubusercontent.com/72127941/168465129-2596f000-1b74-40bd-9a02-83009fa06ff7.png)  
Pentru a traduce titlul cărții găsite se va folosi dropdown-ul pentru a selecta limba dorită și se va apăsa pe ***Translate***.  
![image](https://user-images.githubusercontent.com/72127941/168465253-633b68c9-2aec-49bc-b2e9-a124ed20b18b.png)  
Obținerea titlului tradus se face printr-o metodă ***POST*** (următoarea imagine) cu textul original către API-ul de la LibreTranslate.
![image](https://user-images.githubusercontent.com/72127941/168465607-2865ee2b-36fb-4acb-b020-900e75459d32.png)
![image](https://user-images.githubusercontent.com/72127941/168465662-48bfe6c7-464f-4ae0-a754-e2ea1b208e15.png)

