const newsData = 
[
    {
        "testata": "ANSA",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "ExxonMobil invia missione tecnica per il ritorno in Venezuela.",
        "priorita": "Media",
        "id_gruppo": 1,
        "link": "https://www.ansa.it/sito/notizie/mondo/americalatina/2026/03/03/exxonmobil-invia-missione-tecnica-per-il-ritorno-in-venezuela_6db918e5-9e00-4983-9b7e-59d95743c86c.html",
        "orario": "20:12"
    },
    {
        "testata": "ANSA",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Consolato Usa a Dubai in fiamme dopo presunto attacco drone iraniano.",
        "priorita": "Altissima",
        "id_gruppo": 2,
        "link": "https://www.ansa.it/sito/notizie/mondo/nordamerica/2026/03/03/cnn-a-fuoco-consolato-usa-a-dubai-colpito-da-sospetto-drone-iraniano_a37e7460-b7c6-4e64-8b2a-8a136150dcff.html",
        "orario": "20:03"
    },
    {
        "testata": "ANSA",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Consolato Usa a Dubai in fiamme dopo presunto attacco drone iraniano.",
        "priorita": "Altissima",
        "id_gruppo": 2,
        "link": "https://www.ansa.it/sito/notizie/mondo/mediooriente/2026/03/03/cnn-a-fuoco-consolato-usa-a-dubai-colpito-da-sospetto-drone-iraniano_0075a842-8c41-44e7-af59-9dcc339e96ea.html",
        "orario": "20:03"
    },
    {
        "testata": "AGI",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Consolato Usa a Dubai colpito da presunto drone iraniano il 3 marzo.",
        "priorita": "Altissima",
        "id_gruppo": 2,
        "link": "https://www.agi.it/estero/news/2026-03-03/consolato-usa-dubai-colpito-da-drone-35921342/",
        "orario": "20:41"
    },
    {
        "testata": "AGI",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Consolato Usa a Dubai in fiamme per drone. Macron invia portaerei.",
        "priorita": "Altissima",
        "id_gruppo": 2,
        "link": "https://www.agi.it/estero/news/2026-03-03/guerra-iran-aggiornamenti-35906104/",
        "orario": "20:35"
    },
    {
        "testata": "AGI",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Trump e Germania in sintonia: Teheran pronta ad attaccare Israele.",
        "priorita": "Alta",
        "id_gruppo": 3,
        "link": "https://www.agi.it/estero/video/2026-03-03/podcast-americana-roma-rita-lofano-la-scommessa-di-trump-35919549/",
        "orario": "18:22"
    },
    {
        "testata": "Adnkronos",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Insegnante rientrata da Dubai: notte dura con allerte per studenti.",
        "priorita": "Media",
        "id_gruppo": 4,
        "link": "https://www.adnkronos.com/cronaca/iran-insegnante-rientrata-dubai-studenti_5RaRfiPb7VzKp9bLg0Cwru",
        "orario": "20:49"
    },
    {
        "testata": "Adnkronos",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Trump: Iran finisce missili. Teheran: abbiamo super armi.",
        "priorita": "Media",
        "id_gruppo": 5,
        "link": "https://www.adnkronos.com/internazionale/esteri/usa-iran-armi-trump-missili_5TMn7KEkH837nIRAQTsZMK",
        "orario": "20:38"
    },
    {
        "testata": "Adnkronos",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Studentessa rientrata da Dubai: eravamo al sicuro, paura poca.",
        "priorita": "Media",
        "id_gruppo": 4,
        "link": "https://www.adnkronos.com/cronaca/malpensa-studentessa-rientrata-da-dubai_N4Gcrviqm8p2LMzkwqa2A",
        "orario": "20:25"
    },
    {
        "testata": "BBC News",
        "nazione": "uk",
        "lingua_originale": "en",
        "testo_it": "Prezzi gas/oil in aumento per timori escalation conflitto Medio Oriente.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.bbc.com/news/articles/cr5lz0vgy52o?at_medium=RSS&at_campaign=rss",
        "orario": "17:48"
    },
    {
        "testata": "BBC News",
        "nazione": "uk",
        "lingua_originale": "en",
        "testo_it": "Trump minaccia stop commercio con Spagna per basi militari Iran.",
        "priorita": "Alta",
        "id_gruppo": 7,
        "link": "https://www.bbc.com/news/articles/c8r1mzd8vygo?at_medium=RSS&at_campaign=rss",
        "orario": "19:48"
    },
    {
        "testata": "BBC News",
        "nazione": "uk",
        "lingua_originale": "en",
        "testo_it": "Hezbollah trascina il Libano in guerra per sostenere l'Iran.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.bbc.com/news/articles/c4gq3ykg7pvo?at_medium=RSS&at_campaign=rss",
        "orario": "15:42"
    },
    {
        "testata": "Deutsche Welle",
        "nazione": "de",
        "lingua_originale": "en",
        "testo_it": "Padre dello sparatore della Georgia condannato per omicidio.",
        "priorita": "Bassa",
        "id_gruppo": 8,
        "link": "https://www.dw.com/en/father-of-accused-georgia-school-shooter-convicted-of-murder/a-76205814?maca=en-rss-en-world-4025-rdf",
        "orario": "N/D"
    },
    {
        "testata": "Deutsche Welle",
        "nazione": "de",
        "lingua_originale": "en",
        "testo_it": "Capacità nucleare francese offre benefici agli alleati europei.",
        "priorita": "Bassa",
        "id_gruppo": 9,
        "link": "https://www.dw.com/en/france-s-nuclear-capability-offers-fringe-benefits-to-allies/a-76201845?maca=en-rss-en-world-4025-rdf",
        "orario": "N/D"
    },
    {
        "testata": "Deutsche Welle",
        "nazione": "de",
        "lingua_originale": "en",
        "testo_it": "Trump, Teheran e l'ombra delle operazioni USA di cambio regime.",
        "priorita": "Media",
        "id_gruppo": 6,
        "link": "https://www.dw.com/en/trump-tehran-and-the-long-shadow-of-washington-s-checkered-history-of-regime-change-operations/a-76200309?maca=en-rss-en-world-4025-rdf",
        "orario": "N/D"
    },
    {
        "testata": "France 24",
        "nazione": "fr",
        "lingua_originale": "en",
        "testo_it": "Paesi del Golfo temono 'amaro tradimento' per risposta iraniana.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.france24.com/en/a-feeling-of-bitter-betrayal-gulf-states-fears-grow-over-iran-war-fallout",
        "orario": "20:22"
    },
    {
        "testata": "France 24",
        "nazione": "fr",
        "lingua_originale": "en",
        "testo_it": "Guerra USA-Iran divide conservatori e elettori MAGA.",
        "priorita": "Media",
        "id_gruppo": 6,
        "link": "https://www.france24.com/en/us-war-on-iran-divides-american-conservatives-maga-voters",
        "orario": "20:00"
    },
    {
        "testata": "France 24",
        "nazione": "fr",
        "lingua_originale": "en",
        "testo_it": "Colpito edificio a Teheran per eleggere nuovo leader supremo Iran.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.france24.com/en/israel-us-strikes-hit-building-of-body-to-elect-new-iran-supreme-leader",
        "orario": "19:49"
    },
    {
        "testata": "The New York Times",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Trump: attacchi hanno ucciso successori designati in Iran.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.nytimes.com/live/2026/03/03/world/iran-war-israel-lebanon-trump",
        "orario": "20:58"
    },
    {
        "testata": "The New York Times",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Israele sfrutta guerra Iran per schiacciare Hezbollah e rimodellare M.O.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.nytimes.com/2026/03/03/world/middleeast/israel-iran-hezbollah.html",
        "orario": "11:03"
    },
    {
        "testata": "The New York Times",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "USA cercano militanti in Nigeria, esercito accusato di inerzia.",
        "priorita": "Bassa",
        "id_gruppo": 10,
        "link": "https://www.nytimes.com/2026/03/03/world/africa/nigeria-security-forces-us-intervention.html",
        "orario": "05:01"
    },
    {
        "testata": "The Guardian",
        "nazione": "uk",
        "lingua_originale": "en",
        "testo_it": "Sud Sudan rischia guerra civile per escalation violenze al confine.",
        "priorita": "Media",
        "id_gruppo": 11,
        "link": "https://www.theguardian.com/world/2026/mar/03/south-sudan-risks-return-civil-war-violence-escalates",
        "orario": "15:49"
    },
    {
        "testata": "The Guardian",
        "nazione": "uk",
        "lingua_originale": "en",
        "testo_it": "Sud globale condanna guerra USA-Israele contro l'Iran.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.theguardian.com/world/2026/mar/03/global-south-condemns-us-israeli-war-with-iran",
        "orario": "13:11"
    },
    {
        "testata": "The Guardian",
        "nazione": "uk",
        "lingua_originale": "en",
        "testo_it": "Ghana: 55 cittadini uccisi in Ucraina dopo essere stati 'adescati'.",
        "priorita": "Media",
        "id_gruppo": 12,
        "link": "https://www.theguardian.com/world/2026/feb/27/ghana-men-killed-fight-russia-ukraine",
        "orario": "16:42"
    },
    {
        "testata": "Le Monde",
        "nazione": "fr",
        "lingua_originale": "fr",
        "testo_it": "Macron invia portaerei Charles de Gaulle nel Mediterraneo.",
        "priorita": "Alta",
        "id_gruppo": 13,
        "link": "https://www.lemonde.fr/international/live/2026/03/03/en-direct-iran-donald-trump-affirme-que-la-republique-islamique-allait-attaquer-en-premier-et-ajoute-que-tout-a-ete-detruit-dans-le-pays_6668663_3210.html",
        "orario": "17:21"
    },
    {
        "testata": "Le Monde",
        "nazione": "fr",
        "lingua_originale": "fr",
        "testo_it": "Base navale francese ad Abu Dhabi danneggiata da droni iraniani.",
        "priorita": "Alta",
        "id_gruppo": 2,
        "link": "https://www.lemonde.fr/international/article/2026/03/03/l-accueil-des-navires-dans-la-base-navale-francaise-d-abou-dhabi-perturbe-apres-une-frappe-de-drones_6669404_3210.html",
        "orario": "17:46"
    },
    {
        "testata": "Le Monde",
        "nazione": "fr",
        "lingua_originale": "fr",
        "testo_it": "Consumatori fanno scorta di carburante, rischio aumento prezzi.",
        "priorita": "Media",
        "id_gruppo": 14,
        "link": "https://www.lemonde.fr/economie/article/2026/03/03/carburants-les-consommateurs-prennent-les-devants-au-risque-d-alimenter-la-hausse-des-prix_6669418_3234.html",
        "orario": "19:29"
    },
    {
        "testata": "Libération",
        "nazione": "fr",
        "lingua_originale": "fr",
        "testo_it": "Stretto di Ormuz al centro shock energetico globale per guerra Golfo.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.liberation.fr/international/golfe-en-guerre-le-detroit-dormuz-au-coeur-dun-choc-energetique-mondial-20260303_WXLNBSRGAZB2LPDZVQR4CPKNOA/",
        "orario": "19:51"
    },
    {
        "testata": "Libération",
        "nazione": "fr",
        "lingua_originale": "fr",
        "testo_it": "Macron: vigilante ma non allarmante sul Medio Oriente.",
        "priorita": "Media",
        "id_gruppo": 13,
        "link": "https://www.liberation.fr/politique/conflit-au-moyen-orient-dans-son-allocution-emmanuel-macron-se-veut-vigilant-mais-pas-alarmant-20260303_6PG6PK2K3ZB7TAF4A3NLSY74DI/",
        "orario": "20:18"
    },
    {
        "testata": "Libération",
        "nazione": "fr",
        "lingua_originale": "fr",
        "testo_it": "Governo vuole evitare corsa alle pompe per aumento prezzi benzina.",
        "priorita": "Media",
        "id_gruppo": 14,
        "link": "https://www.liberation.fr/economie/prix-de-lessence-le-gouvernement-veut-eviter-un-coup-de-pompe-pour-les-francais-20260303_DQLGXNONBFAMBA2V2TDOULSOAM/",
        "orario": "16:14"
    },
    {
        "testata": "Al Jazeera",
        "nazione": "qa",
        "lingua_originale": "en",
        "testo_it": "Primarie USA si aprono all'ombra della guerra con l'Iran.",
        "priorita": "Media",
        "id_gruppo": 6,
        "link": "https://www.aljazeera.com/news/2026/3/3/us-midterm-primary-season-kicks-off-in-shadow-of-iran-war?traffic_source=rss",
        "orario": "20:30"
    },
    {
        "testata": "Al Jazeera",
        "nazione": "qa",
        "lingua_originale": "en",
        "testo_it": "Trump: USA assicureranno navi nel Golfo da attacchi iraniani.",
        "priorita": "Alta",
        "id_gruppo": 15,
        "link": "https://www.aljazeera.com/news/2026/3/3/us-will-provide-insurance-for-ships-in-gulf-amid-iranian-attacks-trump?traffic_source=rss",
        "orario": "20:22"
    },
    {
        "testata": "Al Jazeera",
        "nazione": "qa",
        "lingua_originale": "en",
        "testo_it": "UK e Francia inviano navi e difesa aerea a Cipro dopo attacco drone.",
        "priorita": "Alta",
        "id_gruppo": 16,
        "link": "https://www.aljazeera.com/news/2026/3/3/uk-sending-warship-helicopters-to-cyprus-after-drone-attack?traffic_source=rss",
        "orario": "20:19"
    },
    {
        "testata": "South China Morning Post",
        "nazione": "hk",
        "lingua_originale": "en",
        "testo_it": "Trump minaccia di tagliare commercio con Spagna per Iran.",
        "priorita": "Alta",
        "id_gruppo": 7,
        "link": "https://www.scmp.com/news/us/diplomacy/article/3345327/trump-says-hell-cut-trade-spain-over-iran-war-stance?utm_source=rss_feed",
        "orario": "20:25"
    },
    {
        "testata": "South China Morning Post",
        "nazione": "hk",
        "lingua_originale": "en",
        "testo_it": "USA e Cina si incontreranno a metà marzo prima del summit Trump-Xi.",
        "priorita": "Bassa",
        "id_gruppo": 17,
        "link": "https://www.scmp.com/news/china/diplomacy/article/3345326/us-and-china-trade-chiefs-meet-mid-march-trump-xi-summit?utm_source=rss_feed",
        "orario": "18:35"
    },
    {
        "testata": "South China Morning Post",
        "nazione": "hk",
        "lingua_originale": "en",
        "testo_it": "Cina esorta Israele a porre fine alla guerra in Iran.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://www.scmp.com/news/china/diplomacy/article/3345325/china-urges-israel-end-war-iran-regional-tensions-escalate?utm_source=rss_feed",
        "orario": "18:08"
    },
    {
        "testata": "Times of India",
        "nazione": "in",
        "lingua_originale": "en",
        "testo_it": "Iran attacca base USA in Bahrain; Israele bombarda Beirut.",
        "priorita": "Altissima",
        "id_gruppo": 18,
        "link": "https://timesofindia.indiatimes.com/world/middle-east/us-israel-iran-war-news-live-udates-conflict-attack-middle-east-state-dubai-qatar-airways-of-emergency-explosions-tehran-gulf-countries-netanyahu-trump-us-ali-khamenei/liveblog/128959227.cms",
        "orario": "04:56"
    },
    {
        "testata": "Times of India",
        "nazione": "in",
        "lingua_originale": "en",
        "testo_it": "Amministrati Trump criticati per helpline americani bloccati in M.O.",
        "priorita": "Media",
        "id_gruppo": 6,
        "link": "https://timesofindia.indiatimes.com/world/us/4-days-without-a-plan-trump-admin-slammed-as-it-issues-helpline-numbers-for-americans-stranded-in-middle-east/articleshow/128990370.cms",
        "orario": "20:31"
    },
    {
        "testata": "Times of India",
        "nazione": "in",
        "lingua_originale": "en",
        "testo_it": "Genitori di Savitha Shan uccisa ad Austin esprimono dolore.",
        "priorita": "Bassa",
        "id_gruppo": 19,
        "link": "https://timesofindia.indiatimes.com/world/us/hearts-broken-beyond-words-indian-origin-savitha-shans-parents-breaks-silence-after-daughter-killed-in-austin-shooting/articleshow/128989489.cms",
        "orario": "19:49"
    },
    {
        "testata": "The Hill",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Trump: scorteremo petroliere. Merz alla Casa Bianca.",
        "priorita": "Alta",
        "id_gruppo": 3,
        "link": "https://thehill.com/homenews/administration/5763269-live-updates-trump-iran-primary-elections/",
        "orario": "20:36"
    },
    {
        "testata": "The Hill",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Jeffries respinge fondi DHS repubblicani, non legati a Iran.",
        "priorita": "Bassa",
        "id_gruppo": 6,
        "link": "https://thehill.com/homenews/house/5765397-jeffries-republicans-dhs-funding-iran/",
        "orario": "20:32"
    },
    {
        "testata": "The Hill",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Repubblicano: amministrazione Trump dà definizioni multiple missione Iran.",
        "priorita": "Media",
        "id_gruppo": 6,
        "link": "https://thehill.com/homenews/house/5765223-warren-davidson-trump-iran/",
        "orario": "20:32"
    },
    {
        "testata": "Politico",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Legami con Israele penalizzano Democratici nelle primarie post-Gaza.",
        "priorita": "Media",
        "id_gruppo": 20,
        "link": "https://www.politico.com/news/2026/03/03/ties-to-israel-plague-democrats-in-top-primaries-post-gaza-00807240",
        "orario": "13:00"
    },
    {
        "testata": "Politico",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "MAGA ama Ken Paxton. Può arrivare al Senato?",
        "priorita": "Bassa",
        "id_gruppo": 21,
        "link": "https://www.politico.com/news/2026/03/03/paxton-cornyn-texas-senate-maga-00808211",
        "orario": "10:45"
    },
    {
        "testata": "Politico",
        "nazione": "us",
        "lingua_originale": "en",
        "testo_it": "Democratici centristi pianificavano il 2028, poi è successo l'Iran.",
        "priorita": "Media",
        "id_gruppo": 6,
        "link": "https://www.politico.com/news/2026/03/02/third-way-centrist-democrats-iran-foreign-policy-00808202",
        "orario": "02:25"
    },
    {
        "testata": "Il Manifesto",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Bilancio umanitario in Iran drammatico dopo 3 giorni di operazione.",
        "priorita": "Alta",
        "id_gruppo": 6,
        "link": "https://ilmanifesto.it/teheran-campo-di-battaglia",
        "orario": "23:08"
    },
    {
        "testata": "Il Manifesto",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Mascha Schilinski esplora memoria e percezione in Sound of Falling.",
        "priorita": "Bassa",
        "id_gruppo": 22,
        "link": "https://ilmanifesto.it/fra-la-memoria-del-corpo-e-un-nuovo-sguardo-di-se",
        "orario": "23:08"
    },
    {
        "testata": "Il Manifesto",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Archetipi della cronaca nera: il corpo e la polis nell'informazione.",
        "priorita": "Bassa",
        "id_gruppo": 23,
        "link": "https://ilmanifesto.it/gli-archetipi-della-cronaca-nera",
        "orario": "23:07"
    },
    {
        "testata": "Il Sole 24 Ore",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Funerale dorato di El Mencho, il re del Fentanyl.",
        "priorita": "Bassa",
        "id_gruppo": 24,
        "link": "https://www.ilsole24ore.com/art/il-funerale-dorato-el-mencho-re-fentanyl-AIoWbwkB",
        "orario": "20:16"
    },
    {
        "testata": "Il Sole 24 Ore",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Macron annuncia dispiegamento portaerei Charles de Gaulle in Mediterraneo.",
        "priorita": "Alta",
        "id_gruppo": 13,
        "link": "https://www.ilsole24ore.com/art/macron-portaerei-charles-de-gaulle-rotta-il-mediterraneo-AIQV5qkB",
        "orario": "19:46"
    },
    {
        "testata": "Il Sole 24 Ore",
        "nazione": "it",
        "lingua_originale": "it",
        "testo_it": "Paesi Golfo a corto missili intercettori; studio sistemi anti-drone Ucraina.",
        "priorita": "Media",
        "id_gruppo": 25,
        "link": "https://www.ilsole24ore.com/art/i-paesi-golfo-rischiano-esaurire-scorte-missili-intercettori-studio-sistemi-anti-drone-sviluppati-dall-ucraina-AI4C18jB",
        "orario": "17:35"
    }
];