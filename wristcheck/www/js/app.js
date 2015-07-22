// Ionic Starter App
//var airlines = [{"fs":"LCI","iata":"LF","icao":"LCI","name":"Lao Central Airlines ","active":true},{"fs":"TGU","iata":"5U","icao":"TGU","name":"TAG","active":true},{"fs":"BT","iata":"BT","icao":"BTI","name":"Air Baltic","active":true},{"fs":"9J","iata":"9J","icao":"DAN","name":"Dana Airlines","active":true},{"fs":"2O","iata":"2O","icao":"RNE","name":"Island Air Service","active":true},{"fs":"NPT","icao":"NPT","name":"Atlantic Airlines","active":true},{"fs":"C8","iata":"C8","icao":"ICV","name":"Cargolux Italia","active":true},{"fs":"FK","iata":"FK","icao":"WTA","name":"Africa West","active":true},{"fs":"8K","iata":"8K","icao":"EVS","name":"EVAS Air Charters","active":true},{"fs":"W8","iata":"W8","icao":"CJT","name":"Cargojet","active":true},{"fs":"JBW","iata":"3J","icao":"JBW","name":"Jubba Airways (Kenya)","active":true},{"fs":"TNU","iata":"M8","icao":"TNU","name":"TransNusa","active":true},{"fs":"HCC","iata":"HC","icao":"HCC","name":"Holidays Czech Airlines","active":true},{"fs":"APJ","iata":"MM","icao":"APJ","name":"Peach Aviation","active":true},{"fs":"TUY","iata":"L4","icao":"TUY","name":"LTA","active":true},{"fs":"LAE","iata":"L7","icao":"LAE","name":"LANCO","active":true},{"fs":"L5*","iata":"L5","icao":"LTR","name":"Lufttransport","active":true},{"fs":"QA","iata":"QA","icao":"CIM","name":"Cimber","active":true},{"fs":"KBZ","iata":"K7","icao":"KBZ","name":"Air KBZ","active":true},{"fs":"L2","iata":"L2","icao":"LYC","name":"Lynden Air Cargo","active":true},{"fs":"MPK","iata":"I6","icao":"MPK","name":"Air Indus","active":true},{"fs":"CAO","icao":"CAO","name":"Air China Cargo ","active":true},{"fs":"BEK","iata":"Z9","icao":"BEK","name":"Bek Air","active":true},{"fs":"IAE","iata":"IO","icao":"IAE","name":"IrAero","active":true},{"fs":"GL*","iata":"GL","name":"Airglow Aviation Services","active":true},{"fs":"ATN","iata":"8C","icao":"ATN","name":"ATI","active":true},{"fs":"GU","iata":"GU","icao":"GUG","name":"Aviateca Guatemala","active":true},{"fs":"GHY","icao":"GHY","name":"German Sky Airlines ","active":true},{"fs":"SS","iata":"SS","icao":"CRL","name":"Corsair","active":true},{"fs":"XK","iata":"XK","icao":"CCM","name":"Air Corsica","active":true},{"fs":"W9*","iata":"W9","icao":"JAB","name":"Air Bagan","active":true},{"fs":"Z8*","iata":"Z8","icao":"AZN","name":"Amaszonas","active":true},{"fs":"D2","iata":"D2","icao":"SSF","name":"Severstal Aircompany","active":true},{"fs":"SNC","iata":"2Q","icao":"SNC","name":"Air Cargo Carriers","active":true},{"fs":"PST","iata":"7P","icao":"PST","name":"Air Panama","active":true},{"fs":"VV","iata":"VV","icao":"AEW","name":"Aerosvit Airlines","active":true},{"fs":"UJ","iata":"UJ","icao":"LMU","name":"AlMasria","active":true},{"fs":"9U","iata":"9U","icao":"MLD","name":"Air Moldova","active":true},{"fs":"NF","iata":"NF","icao":"AVN","name":"Air Vanuatu","phoneNumber":"678 238 48","active":true},{"fs":"NJS","iata":"NC","icao":"NJS","name":"Cobham Aviation","active":true}];
var airlines = ['A. Lange & Sohne ', 'a.b.art ', 'Accurate', 'Addex ', 'Adi ', 'Aero Watch', 'Aesir ', 'Airain ', 'AirNautic', 'AK Geneve ', 'Akribos XXIV ', 'Akteo - Akteo ', 'Alain LE mondial', 'Alain Silberstein ', 'Alba', 'Alessandro Baldieri ', 'Alexander Phillip Watch ', 'Alexander Shorokhoff ', 'Alexandre Christie ', 'AleXora ', 'Alfex ', 'Almanus ', 'Alpha Time ', 'Alpener ', 'Alpina ', 'Altanus ', 'Alviero Martini 1a Classe ', 'A.Mantei ', 'Amaswiss ', 'AND ', 'Andre Belfort ', 'Andre Fleury', 'Andre Le Marquand', 'Andreas Strehler ', 'Andrew Vorontsov ', 'Android ', 'Andy Warhol ', 'Angular Momentum ', 'Anne Klein ', 'Anonimo ', 'Antima ', 'Antoine Martin ', 'Antoine Preziuso ', 'Appella', 'Apus ', 'Aquadive Forum', 'Aqua Master ', 'Aquanautic', 'Aquastar', 'Arabians ', 'Arbutus - New York ', 'Archimede ', 'Arcadia ', 'Arctos ', 'Aristo ', 'Arlanch ', 'Armand Nicolet ', 'Armani', 'Armida ', 'Armin Strom ', 'Armour Lite ', 'Artauro ', 'Artego ', 'Arthur Oskar Stampfli ', 'Askania Uhren ', 'Aspen Jewelry & Watches ', 'Asprey London ', 'Astboerg ', 'Ateliers de Monaco ', 'Atlantic ', 'Audemars-Piquet ', 'Auguste Reymond ', 'Auricoste ', 'Automatic ', 'Autran & Viala ', 'Avalanche ', 'Avianne & Co ', 'Avier ', 'Avocet Vertech', 'Axcent of Scandinavia ', 'Azad ', 'Azimuth ', 'Aeronautec ', 'Backes and Strauss ', 'Badollet ', 'Bagger & Gehring ', 'Ball Watch - Ball Watch ', 'Balmer ', 'Bandit ', 'Banneker ', 'Barthelay ', 'Barrington Griffiths ', 'Bassel ', 'Bathys Hawaii ', 'Baudry Time ', 'Baume & Mercier', 'Bausele ', 'Bavarian Crono - Bavarian Crono ', 'BCBG ', 'Beaudry ', 'Bedat & Co.', 'Bellagio bel Tempo ', 'Bell & Ross - Bell & Ross ', 'Benarus ', 'Bering ', 'Bernex ', 'Berney Blondeau ', 'Bernhard H. Mayer ', 'Bernhardt Watch Company ', 'Bernouille ', 'Berrer und Soehne ', 'Berthet ', 'Bertolucci', 'Bertucci ', 'Bethge ', 'Betsey Johnson ', 'Bexei ', 'Bianci ', 'Birks ', 'B. Junge & Soehne ', 'Blancier', 'BlancheFontaine SA ', 'Blancpain ', 'Bleitz ', 'Blu ', 'Boegli ', 'Bohlin ', 'Bombardier ', 'BorgeauD ', 'Borgward ', 'Boschett ', 'Bosie ', 'Botta Design ', 'Boucheron ', 'Bozeman Watch Co ', 'Braun', 'Breguet', 'Breil', 'Breitling', 'Bremont ', 'Brera ', 'Brior ', 'B.R.M. ', 'Brosway ', 'Bruno Soehnle ', 'Bruvik ', 'Buchner & Bovalier ', 'Buler ', 'Bvlgari ', 'Bulloc ', 'Bulova ', 'Bultaco ', 'Bunz ', 'Burlington Watch Co. ', 'Cabestan ', 'Cacheux ', 'Calcio Swiss', 'Caliber ', 'Calvaneo 1583 ', 'Campanola', 'Candino ', 'Cardinal', 'Cardini', 'Carl F. Bucherer ', 'Carlo Ferrara ', 'Cartier', 'Casio ', 'Caslon Montres', 'Cat ', 'Catamaran', 'Catena ', 'Cavenago ', 'Cecil Purnell ', 'Cedric Johner ', 'Century ', 'Ceres ', 'Certina ', 'CH-Pihl ', 'Charles Conrad', 'Charles David ', 'Charles Hubert Paris', 'Charles Oudin ', 'Charmex ', 'Charriol ', 'Chase-Durer ', 'Chaumet', 'Chevignon ', 'Chiffres Gregson ', 'Choisi ', 'Chopard', 'Chotovelli & Figli', 'Chris Benz ', 'Christi Oneil ', 'Christiaan v.d. Klaauw ', 'Christian Bernard ', 'Christian Dior', 'Christian Jacques ', 'Christian Klings ', 'Christina London ', 'Christine Genesis ', 'Christophe Claret ', 'Christopher Ward ', 'Chromachron', 'Chronograph Suisse ', 'Chronoseum ', 'Chronosport', 'Chronoswiss', 'Chronotech ', 'Churpfaelzische UhrenManufactur ', 'Cimier ', 'Citizen ', 'Claude Meylan ', 'Claude Valentini ', 'Clerc ', 'Click-Clock', 'Clock Box ', 'Close Enough', 'Clyda', 'Coinwatch', 'Colomer & Sons ', 'Concord ', 'Confrerie Horlogere ', 'Consul of Switzerland ', 'COOL ', 'Copha ', 'Cornelius & Cie ', 'Corum', 'Corvus ', 'Costro ', 'Cover ', 'Crepas ', 'Croce ', 'Crossover ', 'Croton', 'Crush Watch ', 'CTK - The Chinese Timekeeper ', 'Cubus ', 'Cuervo y Sobrinos ', 'Curtis & Co ', 'Cvstos ', 'Cyclos ', 'Cyma ', 'Cyril Ratel ', 'Cyrus Geneve ', 'Czas ', 'D.Atlantis ', 'D.Factory ', 'd.freemont', 'Daewoo ', 'DAguet ', 'Damasko ', 'Daniel Mink ', 'Daniel Roth ', 'Dark Rush ', 'Davegoeslove ', 'David Yurman ', 'Davidoff ', 'Davis', 'Davosa ', 'D. Dornblueth und Sohn ', 'Debaufre ', 'De Beers ', 'De Bethune ', 'De Boulay & Korn ', 'Decima Mas ', 'Deep Blue ', 'De Grisogono', 'DeLaCour ', 'Delaloye ', 'Delance', 'Delbana ', 'Delma ', 'Demos ', 'De Motu ', 'Dent ', 'Devon Works ', 'DeWitt ', 'Dexter Sinister ', 'Diafuego ', 'DiBur ', 'Diesel', 'Dietrich ', 'Dievas ', 'Dior', 'Dirk Dornblueth ', 'Division-Furtive', 'd.m.h - Dingemans Mechanische Horloges ', 'Dodane 1857 ', 'Dolphin ', 'Donald W. Corson ', 'Doxa ', 'Dreyfuss & Co ', 'Drops ', 'Dubey & Schaldenbrand ', 'DuBois & Fils ', 'Duc Decreon De Saint Pierre ', 'Duc Oger ', 'Dufeau ', 'Dugena ', 'Dunhill', 'Durabo ', 'Dussert ', 'Duward ', 'DWatch ', 'DWISS ', 'Dyrberg/Kern ', '88 Rue du Rhone ', 'Ebel ', 'Eberhard & Co ', 'Ed Hardy ', 'Edmond ', 'Edouard Lauzieres ', 'Edox ', 'Egon Hummel ', 'Elini ', 'Elite ', 'Ellicott ', 'Emas ', 'Emile Pequignet ', 'Emboss Time ', 'Empire ', 'Enicar ', 'Enila ', 'Ennebi ', 'Enzo Mechana ', 'EOS ', 'EPMartin ', 'Epos ', 'Equipe ', 'Erhard Junghans ', 'Eric Tabarly ', 'Erieff and Sons ', 'Erken ', 'Ernst Benz ', 'Erwin Sattler ', 'Esprit Timewear', 'ESQ ', 'Essex ', 'Eterna ', 'Eva Leube ', 'Everlast ', 'Eviga ', 'Evilard ', 'Exotic', 'Extatico ', 'Eyki Eyki ', 'Ezteem ', 'Fashion Time ', 'Favre Leuba ', 'Feldo ', 'Festina', 'Fiber ', 'Fila ', 'Finis Swimsense ', 'Fitzroy ', 'Fiyta ', 'Flik Flak ', 'Folli Follie ', 'Forget ', 'Formex ', 'Fortis ', 'Forum ', 'Fossil', 'Foxtime Instruments ', 'F.P. Journe ', 'Franc Vila ', 'Franck Muller , Franck Muller ', 'Francois Rotier ', 'Franco Giuntini ', 'Frank Heydrich ', 'Frankstone ', 'Frederic Jouvenot ', 'Frederique Constant', 'Freestyle ', 'Freiderick Stein ', 'Fromanteel ', 'FUBU', 'Full Carbon ', 'Fuller ', 'GaGà Milano ', 'Gallet ', 'Garde ', 'GB Milano ', 'Gebson ', 'Geiger ', 'Genaldi ', 'Genesis ', 'Geneva', 'Genie ', 'Georg J Von Burg ', 'Gerald Genta', 'Gergé ', 'Germano & Walter ', 'Gevril', 'Giantto ', 'Ginault ', 'Gino Franco', 'Gio Monaco ', 'Giorgio Armani', 'Giovine ', 'Girard-Perregaux ', 'Giuliano Mazzuoli ', 'Glam Rock ', 'Glashuette Original ', 'Glycine ', 'Godier ', 'Golana ', 'Golay Spierer ', 'Graff ', 'Graham ', 'Greenland ', 'Greiner ', 'Grenacher ', 'Gresso ', 'Greubel Forsey ', 'Grimoldi ', 'Gronefeld ', 'Grovana ', 'Grus ', 'GSD ', 'Guepard ', 'Guillermin Mollet ', 'G-Shock ', 'GSX ', 'Gucci', 'Guepard ', 'Guess', 'Guinand ', 'Gul', 'Gustafsson & Sjögren', 'Guy Ellia', 'Habring2 ', 'Hacher ', 'Hadleigh ', 'Hager ', 'Hajime Asaoka ', 'Halbard Rioga ', 'Halda Watch Co ', 'Haldi ', 'Haldimann ', 'Halios ', 'Hamilton', 'Hana ', 'Hanhart ', 'Hanowa ', 'Harry Winston', 'Harwood ', 'Haurex ', 'Hautlence ', 'HD3 Complication ', 'Hebe Watch ', 'Hebdomas ', 'Hedelius ', 'Heinrich Geisen ', 'Helix ', 'Helson Watch Co. ', 'Hemess ', 'Hentschel ', 'Herc ', 'Heritage ', 'Herve Stephane Vincent ', 'Hexa ', 'HighStreet ', 'Hislon ', 'HMP ', 'HMT ', 'Holdermann und Sohn ', 'Horae ', 'HoroSwiss ', 'HTO Watches ', 'HourPower ', 'Hublot ', 'Huet Brothers ', 'Huguenin ', 'Hysek ', 'IceLinkWatch ', 'Icetek ', 'Ideatempo ', 'idio:synchro ', 'Iguzzini ', 'Ikepod ', 'Ike watch ', 'IMO ', 'Inex of Scandinavia', 'Insignum ', 'Instruments & Mesures du Temps ', 'Intima', 'Invicta ', 'I.T.A. ', 'Itay Noy ', 'iTime ', 'i-toc ', 'IWC ', 'IWI ', 'IWI ', 'iXXXi ', 'Jacob & Co', 'Jacob Jensen', 'Jacques Etoile ', 'Jacques Lemans ', 'Jaeger-LeCoultre ', 'Jaermann & Stuebi ', 'Jaques Richal ', 'JB-Gioacchino ', 'JB Viot ', 'Jean dEve ', 'Jean Dunand ', 'Jean Mairet & Gillman ', 'Jean Marcel', 'Jean-Marc Garel ', 'Jean Perret ', 'Jean-Pierre Lepine ', 'JeanRichard ', 'Jeep ', 'Jens ', 'Jet Set ', 'Jetzer et Fils ', 'Jiusko ', 'Jochen Benzinger ', 'John Isaac ', 'Joerg Schauer ', 'Jonas Brothers ', 'Jordi ', 'Jorg Gray ', 'Jos ', 'Joseph & Thomas Windmills ', 'Jovial ', 'Jowissa ', 'J.Springs', 'JS Watch co. ', 'Jubilar ', 'Juicy Couture ', 'Jules Juergensen', 'Junghans ', 'Junkers ', 'Justex ', 'Juvenia', 'Kadloo ', 'Kahn ', 'Kappa ', 'Kari Voutilainen ', 'Karl Falk ', 'Kazimon ', 'Kees Engelbarts ', 'Kenneth Cole ', 'Kennett ', 'Kentex ', 'KERA ', 'Kiber ', 'Kienzle ', 'Kipling ', 'Kiu Tai Yu', 'Klaus Kobec', 'Kobold Watch Company ', 'Kolber ', 'Konstantin Chaykin ', 'KoonySun', 'Korloff Paris ', 'Korsbek Watch Company ', 'KPM Watch Company ', 'Kraftworxs ', 'Kremke Watch Co. ', 'Krieger', 'Kronsegler ', 'Krug-Baumen', 'Kudoke Uhren ', 'KULTUhR ', 'Kyboe ', 'LDuchen ', 'L.Leroy', 'Lacher ', 'Laco ', 'Ladoire ', 'Lafuma ', 'Laks', 'Lamborghini', 'Lambretta ', 'La Mer ', 'Lancaster ', 'Lang & Heyne ', 'Latitude ', 'Leandri ', 'Le Chateau ', 'Leinfelder ', 'Leonard ', 'Leschot ', 'Lessant ', 'Le Tandy ', 'Leumas ', 'Le Vian ', 'Light Time ', 'Limes - Limes ', 'Lindburgh & Benson ', 'Linde Werdelin ', 'Links of London ', 'Lip ', 'Lissignol ', 'Lito ', 'Liverani ', 'Lobor', 'Locman ', 'Longines ', 'Longio ', 'Lorenz', 'Lotterman und Soehne ', 'Lotus ', 'Louann ', 'Louis Bolle ', 'Louis Chevrolet ', 'Louis Erard', 'Louis Moinet ', 'Louis Pion ', 'Lowin Cologne ', 'Ludek Seryn ', 'Lucien Piccard ', 'Ludovic Ballouard ', 'Luminox', 'LUM-TEC ', 'LunaTik ', 'Luning ', 'Lutolf Philip ', 'Magellan ', 'Magalex ', 'Magrette ', 'Maitres du Temps ', 'Manufacture Contemporaine du Temps ', 'Manufacture Royal ', 'Maranello ', 'MAR ', 'Marathon ', 'Marc Jenni ', 'Marc & Sons ', 'Marc ', 'Marcello C. ', 'Marco Brogsitter ', 'Marco Polo World Time Watches ', 'Marlen ', 'Marli ', 'Martin Braun', 'Marvin ', 'MAT ', 'Mathey-Tissot ', 'Matthias Fuchs ', 'Mauboussin ', 'Maurice Lacroix ', 'Maurice de Mauriac ', 'Max Rene', 'Maxima', 'Maximilian ', 'MB&F ', 'MB Watches ', 'McGonigle ', 'MCT ', 'M C Uhren ', 'M.E.C. ', 'Meccaniche Veloci ', 'Mechanische Zeitinstrumente ', 'Meer ', 'Meister ', 'Meistersinger ', 'Mellerio dits Meller ', 'Memorigin ', 'Memphis Belle ', 'Mercure ', 'Mermod Freres ', 'Metal.ch ', 'M.G.C. ', 'Mica ', 'Michael Bittel ', 'Michel Herbelin , Michel Herbelin ', 'Michel Jordi ', 'Michele Watches', 'MicheSun Pilots Watches', 'Mido ', 'MIH ', 'Military European Company ', 'Milus ', 'MK II ', 'M & M ', 'Minister ', 'Mistura ', 'MomoDesign ', 'Mondaine ', 'Mondia ', 'Mont dOr ', 'Montana Watch Company ', 'Montano ', 'Montega ', 'Montrek ', 'Montres de Luxe ', 'Moog ', 'MoonWatch ', 'Morpheus ', 'Movado ', 'Mr Jones Watches ', 'MSC Uhren ', 'MTM ', 'Muehle Glashuette ', 'Murex ', 'NakedWatch ', 'Nautica', 'NauticFish ', 'Navitec ', 'Navy Seals ', 'Nekta ', 'Neolog ', 'Newton & Sons ', 'NFW ', 'NICE ', 'Nicolas Delaloye ', 'Niessing ', 'Nike', 'Nikuru ', 'Nite ', 'Nivrel ', 'Nixon', 'N.O.A. ', 'Nobel', 'Nomos ', 'Nooka ', 'Noon ', 'Normal Timepieces ', 'North Eagles ', 'Nots ', 'Nubeo ', 'Obaku ', 'Obris Morgan ', 'Ocean7 Watch Co ', 'Oceanaut ', 'Oceanus ', 'ochs und junior ', 'O.D.M. ', 'Oakley ', 'ODES ', 'Officina ', 'Officina del Tempo ', 'Offshore Limited ', 'OFFSHORE Professional Classic Chronographs Ltd. ', 'Ogival ', 'Olaf Heichert ', 'Old Florence', 'Olivier Streli ', 'Ollech & Wajs ', 'Omega ', 'OnMotion ', 'Oozoo ', 'Optima ', 'Orient - Orient ', 'Origo ', 'Oris ', 'Orsa ', 'Otium ', 'Otto Berger ', 'Otto Schlund ', 'Ovel ', 'Oxette ', 'Panerai', 'Pansar ', 'Pantar ', 'Parmigiani Fleurier ', 'Parrera ', 'Pasnew ', 'Pasquale Bruni ', 'Patek Philippe ', 'Patton ', 'Paul Gerber ', 'Paul Picot ', 'Paul Versan ', 'PCT Horlogerie ', 'Pedro Izquierdo ', 'Pedum ', 'Pellikaan t i m i n g ', 'Pequignet Pequignet ', 'Pere de Temps ', 'PerpetuaL', 'Perrelet ', 'Perseo ', 'Peter Tanisman ', 'Philip Stein ', 'Philip Watch ', 'Philippe Dufour ', 'Philippe Pechard', 'Philippe Rosen ', 'Phosphor ', 'Pierce 1883 ', 'Pierre DeRoche ', 'Pierre Junod ', 'Pierre Kunz ', 'Pierre Lannier ', 'Pilo & Co ', 'Piquot Meridien ', 'Pita ', 'Plazeon ', 'Polanti ', 'Polar ', 'Poljot International ', 'Polo mark ', 'PopTime ', 'Porsche Design', 'Poseidon ', 'Potens ', 'Praesto', 'Prano ', 'Precimax', 'Premiers ', 'Premium Watches Pforzheim ', 'Prestige de Geneve ', 'Prim | Prim ', 'Primo ', 'Prisma ', 'Prometheus ', 'Pronto ', 'Pryngeps ', 'P Swiss ', 'Pulsar ', 'PZero ', 'QRVE ', 'Quadtec | Quadtec ', 'Quantum', 'Quantuz ', 'Quemex ', 'Quinting ', 'Racer ', 'Radiant ', 'Rado ', 'Raidillon ', 'Raid Watch ', 'Raimundo Davalos ', 'Rainer Brand ', 'Rainer Nienaber ', 'Ralf Tech ', 'Ralph Klein ', 'Ram ', 'Raymond Weil ', 'Reactor ', 'Rebellion ', 'Reconvilier ', 'Red8 ', 'Red Monkey ', 'RedSea ', 'Reedsco ', 'Regalle', 'Regnier Paris ', 'Remy Cruz ', 'Renato ', 'Resco ', 'Ressence ', 'Revelation ', 'Revue Thommen ', 'Rheinmeister ', 'RG512 ', 'R G M ', 'RHL ', 'Richard Mille ', 'Riedenschild ', 'Rinovati ', 'Rip Curl ', 'Ritmo Mvndo ', 'R.O.1 ', 'Roamer ', 'Robert -e ', 'Robert Lighton ', 'Roberto Bianci ', 'Rochas ', 'Rockwell ', 'Rodania ', 'Rodenstein ', 'Rodolphe ', 'Roger Cornet ', 'Roger Dubuis ', 'Roger W. Smith Ltd. ', 'Rolex ', 'Romago ', 'Romain Gauthier ', 'Romain Jerome ', 'Romanson ', 'Roots ', 'Rosendahl ', 'Rossini ', 'Rotary ', 'Roven Dino ', 'RPM ', 'R.S.W. ', 'Rudge ', 'Rudis Sylva ', 'Rufus Gerard ', 'R.X.W ', 'Saint Honore ', 'Salvatore Ferragamo ', 'Sarcar ', 'Saro Gem , Saro Gem ', 'Sarpaneva ', 'Saskia maaike Bouvier ', 'SAS Watch Co ', 'SAWC ', 'Scalfaro ', 'Schaefer ', 'Schauble & Soehne ', 'Schaumburg Watch ', 'Schmeltzer 1881 ', 'Schneider Manufaktur ', 'Schofield ', 'Schuhren ', 'Scorva Scorva ', 'Sea-God ', 'SeaSurfer ', 'Sector Sector ', 'Seculus ', 'Sedona Watch Works ', 'Seiko ', 'Sekonda ', 'Serket Watch Company ', 'Setima ', 'Shellman ', 'SideWatch ', 'Sinn – Sinn ', 'SISU ', 'Sjoo Sandstrom ', 'Skagen ', 'Skav ', 'Skywatch ', 'Smash ', 'Snyper ', 'Solsuno', 'Sonbol ', 'Sonic Watches ', 'Sordi ', 'Sothis ', 'Sottomarino Italia ', 'Soyuz Soyuz ', 'Spazio24 ', 'Speake-Marin ', 'Speidel ', 'Sprinto ', 'Squale ', 'Stadlin ', 'S.T.A.M.P.S. ', 'Stauer ', 'Steenman ', 'Stefan Johansson ', 'St. Gallen ', 'St. Moritz', 'St. Petersburg Collection Watches ', 'Starck-Design', 'Steel Cake ', 'Steffen ', 'Steinhart ', 'Steinway & Sons ', 'Steph ', 'Stolas ', 'Storm of London ', 'Stowa ', 'Street ', 'Strom ', 'Sub Chrono ', 'S.U.F. ', 'Sultana ', 'Suunto - Suunto ', 'Svend Andersen ', 'Swatch ', 'Swinford', 'Swiss Cheese Watch ', 'Swiss Eagle ', 'Swiss Military ', 'Swiss Precimax ', 'Swiza ', 'Tabbah ', 'Tack & Gybe ', 'TAG Heuer ', 'TamTime ', 'TB Buti ', 'Techné ', 'TechnoMarine ', 'Technos ', 'Tellus ', 'Tempest Watches ', 'Temption ', 'Tempvs Compvtare ', 'Terranaut ', 'Thiel Ruhla ', 'Thoma Design ', 'Thomas Gref ', 'Thomas Ninchritz ', 'Thomas Prescher ', 'Tiburon ', 'Ticino ', 'Tiffany & Co.', 'Time by Design', 'Time Force', 'Time-It ', 'Timekeeper ', 'Timex ', 'Titanium Cargo ', 'Tinelli ', 'Tiq ', 'Tiret ', 'Tissot ', 'Titan', 'Titoni ', 'Tommy Bahama ', 'Tool Watch ', 'Torgoen ', 'Tourby ', 'Towson Watch Company ', 'Toy Watch ', 'Traser ', 'Trevion ', 'Trintec ', 'Trixie ', 'Trofish ', 'Tsovet ', 'Tudor', 'Tutima ', 'TX ', 'TWC ', 'U-Boat ', 'UHR ', 'Uhr-Kraft ', 'Ulysse Nardin ', 'UniformWares ', 'Union Glashuette ', 'UNIQ ', 'Universal Geneve', 'Urbach ', 'Urban Jurgensen', 'Urban Picasso ', 'Uri Uri ', 'Urwerk ', 'Utinam ', 'UTS ', 'Vacheron Constantin', 'Vabene ', 'Vagary ', 'Valbray ', 'Valentino ', 'Valgine ', 'Valima ', 'Vanadium ', 'Vanceur ', 'Van dHall ', 'Van Der Bauwede ', 'Van der Gang ', 'Vangarde ', 'Van Speyk ', 'Van Ree ', 'Vendoux ', 'Ventura ', 'Verdastro ', 'Vergo Avius ', 'Versace', 'Vianney Halter ', 'Vicenterra ', 'Victorinox Swiss Army ', 'Vidus ', 'Vigoria Miletto ', 'Vincent Berard ', 'Vincent Calabrese ', 'Vincent Paris ', 'Violet', 'Visage', 'Vittorium ', 'Vixa ', 'Vizio ', 'Vogard ', 'VOID ', 'Voila ', 'Volker Vyskocil ', 'Volmax ', 'Volna ', 'Voltime ', 'Voutilainen ', 'Vulcain ', 'Wakmann ', 'Waldan International ', 'Waltham ', 'W.Bagus ', 'Web @nywhere', 'Weiss Watch Company ', 'Welder ', 'Wempe ', 'Wendler ', 'Wenger ', 'West End Watch Co ', 'Westar ', 'WeWood ', 'Wiegand ', 'Wintex ', 'Wittnauer ', 'Worldchronos ', 'WM of Switzerland ', 'Wyler Geneve ', 'Wyler Vetta ', 'Xantia ', 'Xemex ', 'XEN ', 'Xetum ', 'Xezo ', 'Xicorr ', 'XTress ', 'Yantar ', 'Yema ', 'Yonger & Bresson ', 'Yves Bertelin ', 'Zandidoust ', 'Zannetti ', 'Zeitfluegel ', 'Zeitwinkel ', 'Zenith', 'Zeno - Zeno ', 'Zenton', 'ZentRa ', 'ZIIIRO ', 'Zinex Uhrenfabrik ', 'Zeppelin ', 'Zitura', 'Zodiac', 'Zoobee ', 'Zzero '];
console.log(airlines)
airlines = airlines.sort(function(a, b) {

  var airlineA = a.toLowerCase();
  var airlineB = b.toLowerCase();

  if(airlineA > airlineB) return 1;
  if(airlineA < airlineB) return -1;
  return 0;
});

console.log(airlines);
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionicLazyLoad','ion-affix','ngCordova','ion-autocomplete'])

.directive('fakeStatusbar', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="fake-statusbar"><div class="pull-left">Carrier</div><div class="time">3:30 PM</div><div class="pull-right">50%</div></div>'
  }
})

.directive('headerShrink', function($document) {
  var fadeAmt;

  var reset = function(){
       
  }
  var shrink = function(header, content, amt, max) {
    amt = Math.min(40, amt);
    fadeAmt = 1 - amt / 44;
    ionic.requestAnimationFrame(function() {
      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
      for(var i = 0, j = header.children.length; i < j; i++) {
        //header.children[i].style.opacity = fadeAmt;
      }
    });
  };
   var shrinkFooter = function(header, content, amt, max) {
    amt = Math.min(44, amt);
    fadeAmt = 1 - amt / 44;
    ionic.requestAnimationFrame(function() {
      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, ' + amt + 'px, 0)';
      for(var i = 0, j = header.children.length; i < j; i++) {
        //header.children[i].style.opacity = fadeAmt;
      }
    });
  };

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var starty = orgStarty = $scope.$eval($attr.headerShrink) || 40;
      var shrinkAmt;
      
      var header = $document[0].body.querySelector('.bar-header');
      var footer = $document[0].body.querySelector('.tab-nav');
      var headerHeight = header.offsetHeight;
      $scope.$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
              
          

        });
      $element.bind('scroll', function(e) { 
          shrinkAmt = headerHeight - (headerHeight - (e.detail.scrollTop - starty));

          if (shrinkAmt >= headerHeight){
            //header is totaly hidden - start moving startY downward so that when scrolling up the header starts showing
            starty = (e.detail.scrollTop - headerHeight);
            shrinkAmt = headerHeight;
          } else if (shrinkAmt < 0){
            //header is totaly displayed - start moving startY upwards so that when scrolling down the header starts shrinking
            starty = Math.max(orgStarty, e.detail.scrollTop);
            shrinkAmt = 0;
          } 
          
          shrink(header, $element[0], shrinkAmt, headerHeight); //do the shrinking   
          //shrinkFooter(footer, $element[0], shrinkAmt, headerHeight); //do the shrinking   

      });
    }
  }
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    window.StatusBar.overlaysWebView(false);


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {


      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.hide()

      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$ionicConfigProvider.views.swipeBackEnabled(true);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/sign-up.html',
      controller: 'SignInCtrl'
    })

  


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    .state('tab.dashbybrand', {
    url: '/dash/:brand',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  





    
      .state('tab.chat-detail', {
      url: '/dash/:image',
      views: {
        'tab-dash': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

        .state('tab.pick-brand', {
    url: '/brandPick',
    views: {
      'tab-dash': {
        templateUrl: 'templates/brandPopover.html',
        controller: 'MyCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

});
