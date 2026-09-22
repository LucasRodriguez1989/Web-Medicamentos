const productos = [
  // {
  //   nombre: "QG5 x 10comp ",
  //   precio: 5000,
  //   imagen: "imagenes/QG5.jpeg",
  //   categoria: "Tabletas",
  // },
  {
    nombre: "Actron 400 (10u)",
    precio: 3800,
    imagen: "Actron400.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Actron 600 (10u)",
    precio: 8800,
    imagen: "imagenes/Actron600.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Actron Mujer (10u)",
    precio: 4300,
    imagen: "imagenes/Actronmujer.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Actron Migra (10u)",
    precio: 5000,
    imagen: "imagenes/actronmigra.webp",
    categoria: "Tabletas",
  },
  {
    nombre: "Anaflex Plus (10u)",
    precio: 4500,
    imagen: "imagenes/anaflex.plus.webp",
    categoria: "Tabletas",
  },
  {
    nombre: "Bio-grip plus",
    precio: 4700,
    imagen: "imagenes/biogrip.jpeg",
    categoria: "Tabletas",
  },
  {
    nombre: "Paracetamol 500",
    precio: 1000,
    imagen: "imagenes/rolfita.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuprofeno 600 Caps.Blanda (10u)",
    precio: 4200,
    imagen: "imagenes/fabogesic.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuprofeno 600",
    precio: 1200,
    imagen: "imagenes/ibuprofeno600.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuprofeno 400",
    precio: 1000,
    imagen: "imagenes/ibuprofeno400mg.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibupirac 600 (10u)",
    precio: 7100,
    imagen: "imagenes/ibupirac600.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibupirac 400 (10u)",
    precio: 2200,
    imagen: "imagenes/ibupirac400.png.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuevanol R.A (10 u) ",
    precio: 3000,
    imagen: "imagenes/IBUEVANOLRA.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuevanol Forte (10 u) ",
    precio: 3800,
    imagen: "imagenes/IBUEVANOLFORTE.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuevanol Plus (10 u) ",
    precio: 3000,
    imagen: "imagenes/IBUEVANOLPLUS.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuevanol Max (10U)",
    precio: 4200,
    imagen: "imagenes/IBUEVANOLMAX.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ibuevanol 600 ultra",
    precio: 4000,
    imagen: "imagenes/ibu600ultra.jpeg",
    categoria: "Tabletas",
  },
  {
    nombre: "Aspirineta (14 u) ",
    precio: 1300,
    imagen: "imagenes/aspirineta.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Bayaspirina (10 u) ",
    precio: 2400,
    imagen: "imagenes/bayaspirina.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Cafiaspirina (10 u)",
    precio: 2800,
    imagen: "imagenes/cafiaspirina.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Aspirina 100mg (14 u)",
    precio: 900,
    imagen: "imagenes/nuevapina.jpeg",
    categoria: "Tabletas",
  },
  {
    nombre: "Amoxicilina (8 u) ",
    precio: 1800,
    imagen: "imagenes/fabamoxamoxicilina500.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Amoxicilina A. Clavulanico ",
    precio: 7200,
    imagen: "imagenes/fabamoxduo.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Cefalexina (10 u)",
    precio: 2600,
    imagen: "imagenes/cefalexina.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Ciprofoxacina 500 (inf. urinaria)",
    precio: 3800,
    imagen: "imagenes/ciprofoxacina500.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Azitromicina 500 (3u)",
    precio: 3000,
    imagen: "imagenes/azitromicina.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Claritromicina 500 (8u)",
    precio: 7200,
    imagen: "imagenes/claritromicina.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Omeprazol 20mg (14 u)",
    precio: 1200,
    imagen: "imagenes/omeprazol.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Pastilla efervescente Catarro Y flema 600mg x10u Tukol",
    precio: 13700,
    imagen: "imagenes/PastillaCatarro.jpeg",
    categoria: "Tabletas",
  },
  {
    nombre: "Antiinflamatorio y calmante (Artrosis|migraña) ",
    precio: 6200,
    imagen: "imagenes/anti-inflamatorio.jpeg",
    categoria: "Tabletas",
  },

  {
    nombre: "Mylanta (8 u) ",
    precio: 4500,
    imagen: "imagenes/mylanta.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Rennie (6 u) ",
    precio: 2800,
    imagen: "imagenes/rennie.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Buscapina Duo (10 u)",
    precio: 8700,
    imagen: "imagenes/buscapinaduo.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Buscapina Compuesta (10u) ",
    precio: 10200,
    imagen: "imagenes/buscapinacompuesta.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Buscapina Perlas (10 u) ",
    precio: 6400,
    imagen: "imagenes/buscapinaperlas.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Sertal (10 u) ",
    precio: 8800,
    imagen: "imagenes/sertal.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Sertal Perlas (10 u)",
    precio: 6100,
    imagen: "imagenes/sertalperlas.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Refrianex (10 u) ",
    precio: 4600,
    imagen: "imagenes/refrianex.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Qura Plus (10 u)",
    precio: 5000,
    imagen: "imagenes/quraplus.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Next Plus (10 u) ",
    precio: 3900,
    imagen: "imagenes/nextplus.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Next gripe Caps.Blanda (10u)",
    precio: 4400,
    imagen: "imagenes/nextcapbland.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Loratadina (10 u)",
    precio: 1000,
    imagen: "imagenes/loratadina.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Loperamida",
    precio: 1000,
    imagen: "imagenes/loperamida.png",
    categoria: "Tabletas",
  },
  // {
  //   nombre: "rosuvastatina 10mg (30 u) ",
  //   precio: 6000,
  //   imagen: "imagenes/rosuvastatina10mg.jpeg",
  //   categoria: "Tabletas",
  // },
  {
    nombre: "rosuvastatina 20mg (10 u) ",
    precio: 6200,
    imagen: "imagenes/rosuvastatina20mg.jpeg",
    categoria: "Tabletas",
  },
  {
    nombre: "LOSARTAN 50MG x 10u",
    precio: 2000,
    imagen: "imagenes/losartan50Mg.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Mejoral para niños (10 u) ",
    precio: 3400,
    imagen: "imagenes/mejoralninos2.webp",
    categoria: "Tabletas",
  },
  {
    nombre: "Novalgina (10 u) ",
    precio: 7400,
    imagen: "imagenes/novalgina.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Migral 500 (10 u) ",
    precio: 5300,
    imagen: "imagenes/migral500.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Dorixina (10 u)",
    precio: 2900,
    imagen: "imagenes/dorixina.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Ketorolac 20mg (10 u) ",
    precio: 900,
    imagen: "imagenes/keterolac20mg.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Ketorolac Sublingual (10 u)",
    precio: 1000,
    imagen: "imagenes/keterolacsublingual.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Diclofenac 75mg (15 u) ",
    precio: 1150,
    imagen: "imagenes/diclofenac.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Diclofenac con B 12 ",
    precio: 3700,
    imagen: "imagenes/diclolabsa.jpg",
    categoria: "Tabletas",
  },
  {
    nombre: "Diclofenac potasico (10 u)",
    precio: 1300,
    imagen: "imagenes/diclofenacpotasico.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Diclofenac con Pidrinol (10 u) ",
    precio: 1300,
    imagen: "imagenes/diclofenacpridinol.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Diclofenac 100mg ",
    precio: 1600,
    imagen: "imagenes/diclofenac100mg.png",
    categoria: "Tabletas",
  },
  // {
  //   nombre: "Tafirol ARTRO (diclo potasico y paracetamol) (10 u) ",
  //   precio: 12000,
  //   imagen: "imagenes/tafirolartro.jpeg",
  //   categoria: "Tabletas",
  // },
  {
    nombre: "Tafirol Fem (10 u) ",
    precio: 4400,
    imagen: "imagenes/tafirolFem.jpeg",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirol 500 (10 u) ",
    precio: 2200,
    imagen: "imagenes/tafirol.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirol Forte 650mg (10 u)",
    precio: 2500,
    imagen: "imagenes/tafirolforte.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirol 1gr (8 u) ",
    precio: 2400,
    imagen: "imagenes/tafirol1g.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirol Plus (8 u)",
    precio: 3000,
    imagen: "imagenes/tafirul.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirolito (10 u)",
    precio: 5800,
    imagen: "imagenes/tafirolito.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirol Migral (10 u)",
    precio: 5400,
    imagen: "imagenes/tafirolmigra.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Tafirol DUO (10)",
    precio: 4500,
    imagen: "imagenes/tafirolduo.png",
    categoria: "Tabletas",
  },
  // {
  //   nombre: "Tafirol resaca x 8u",
  //   precio: 4500,
  //   imagen: "imagenes/tafirolresaca.png",
  //   categoria: "Tabletas",
  // },
  {
    nombre: "Resaquit (4 u) ",
    precio: 2500,
    imagen: "imagenes/resaquit.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Caramelo antibiótico (9u)",
    precio: 3600,
    imagen: "imagenes/bucoangin.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Pantoprazol tableta",
    precio: 3800,
    imagen: "imagenes/pantoprazol.png",
    categoria: "Tabletas",
  },
  {
    nombre: "Fluconazol 150mg",
    precio: 2000,
    imagen: "imagenes/fluconazol.jpg",
    categoria: "Tabletas",
  },

  {
    nombre: "Paracetamol Gotas Pediatrico",
    precio: 3700,
    imagen: "imagenes/paracetamolgotas.png",
    categoria: "Jarabes",
  },
  {
    nombre: "Hepatalgina Gotas",
    precio: 8700,
    imagen: "imagenes/hepatalgina.jpg",
    categoria: "Jarabes",
  },
  {
    nombre: "Difenhidramina ( anti alérgico pediátrico) ",
    precio: 2900,
    imagen: "imagenes/difenhidramina.jpeg",
    categoria: "Jarabes",
  },
  {
    nombre: "Jarabe para parásitos pediátrico ",
    precio: 3000,
    imagen: "imagenes/Jarabeparaparásitospediátrico.jpeg",
    categoria: "Jarabes",
  },

  {
    nombre: "Antialergico nasal gotas(sinusitis)",
    precio: 4000,
    imagen: "imagenes/antialergicogotas.jpg",
    categoria: "Jarabes",
  },
  {
    nombre: "Valmafilo Spray(aftas faringitis) 30ml",
    precio: 9200,
    imagen: "imagenes/spray-aftas-faringitis.jpeg",
    categoria: "Jarabes",
  },
  {
    nombre: "Klonamicin CONJUNTIVITIS (tobramicina 0.3mg)",
    precio: 4700,
    imagen: "imagenes/klonamicin.jpeg",
    categoria: "Jarabes",
  },
  {
    nombre: "Gotas lubrica ojos",
    precio: 5000,
    imagen: "imagenes/gotaslubricaojos.jpeg",
    categoria: "Jarabes",
  },
  {
    nombre: "Gotas oido",
    precio: 5000,
    imagen: "imagenes/gotasoido.jpeg",
    categoria: "Jarabes",
  },

  {
    nombre: "Ibuprofeno Jarabe Niño 4% ",
    precio: 3700,
    imagen: "imagenes/ibuprofenojarabe.png",
    categoria: "Jarabes",
  }, 
  {
    nombre: "Ibuprofeno Jarabe 2%",
    precio: 3200,
    imagen: "imagenes/ibuprofeno2.jpeg",
    categoria: "Jarabes",
  },
  {
    nombre: "Metoc 0.5mg (Tipo Reliveran) ",
    precio: 1700,
    imagen: "imagenes/metoc0.5.jpg",
    categoria: "Jarabes",
  },
  {
    nombre: "Jarabe Tos Adulto(Tos y catarro fuerte)",
    precio: 4700,
    imagen: "imagenes/jarabetosadulto.jpeg",
    categoria: "Jarabes",
  },

  {
    nombre: "Jarabe Tos Adulto",
    precio: 2700,
    imagen: "imagenes/jarabeadulto.png",
    categoria: "Jarabes",
  },
  {
    nombre: "Jarabe Tos niño",
    precio: 2700,
    imagen: "imagenes/jarabetosnino.png",
    categoria: "Jarabes",
  },
  {
    nombre: "Amoxicilina niño/adulto",
    precio: 5600,
    imagen: "imagenes/amoxicilina500.png.jpg",
    categoria: "Jarabes",
  },
  {
    nombre: "Dipirona peditrica 120ml",
    precio: 5400,
    imagen: "imagenes/dipironajarabe.png",
    categoria: "Jarabes",
  },
  {
    nombre: "Betametasona gotas 60mg",
    precio: 1700,
    imagen: "imagenes/gotasbetametasona.jpg",
    categoria: "Jarabes",
  },
  {
    nombre: "Muelitas gel pediatrico",
    precio: 13200,
    imagen: "imagenes/muelita.jpg",
    categoria: "Jarabes",
  },
  {
    nombre: "Muelitas Adulto ",
    precio: 12200,
    imagen: "imagenes/muelitaaminobenzoato.jpg",
    categoria: "Jarabes",
  },

  {
    nombre: "Bayaspirina -C- Caliente",
    precio: 1900,
    imagen: "imagenes/bayaspirinacaliente.png",
    categoria: "Sobres",
  },

  {
    nombre: "Bayaspirina -C- Fria ",
    precio: 1500,
    imagen: "imagenes/bayaspirinalimon.png",
    categoria: "Sobres",
  },
  {
    nombre: "Te Vent 3",
    precio: 1500,
    imagen: "imagenes/tevent3.png",
    categoria: "Sobres",
  },
  {
    nombre: "Te Vick ",
    precio: 3000,
    imagen: "imagenes/tevickforte.png",
    categoria: "Sobres",
  },
  {
    nombre: "Next T-Forte",
    precio: 2400,
    imagen: "imagenes/next.t.forte.jpg",
    categoria: "Sobres",
  },

  {
    nombre: "Uvasal x2u",
    precio: 1200,
    imagen: "imagenes/uvasal.png",
    categoria: "Sobres",
  },
  {
    nombre: "Uvasal Naranja x2u",
    precio: 1200,
    imagen: "imagenes/uvasalnaranja.png",
    categoria: "Sobres",
  },
  {
    nombre: "Alikal x 1",
    precio: 1050,
    imagen: "imagenes/alikalx1.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Alikal Naranja x1",
    precio: 1050,
    imagen: "imagenes/alikalnaranjax1.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Alikal Limon x1 ",
    precio: 1050,
    imagen: "imagenes/alikallimonx1.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Alikal CAJA x30 U",
    precio: 25700,
    imagen: "imagenes/caja-alikal.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Alikal Limon CAJA x30 U ",
    precio: 25700,
    imagen: "imagenes/caja-alikal-limon.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Alikal Naranja CAJA x30 U ",
    precio: 25700,
    imagen: "imagenes/caja-alikal-naranja.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Uvasal CAJA x30 U ",
    precio: 15200,
    imagen: "imagenes/caja-uvasal.jpg",
    categoria: "Sobres",
  },
  {
    nombre: "Venda elástica autoadherente 10cm x4.5mt",
    precio: 3700,
    imagen: "imagenes/bandaelastica.jpg",
    categoria: "Otros",
  },

  {
    nombre: "Chicle Laxante (6 u)",
    precio: 5800,
    imagen: "imagenes/chiclelaxante.png",
    categoria: "Otros",
  },
  {
    nombre: "Pastilla Azul  (2u)",
    precio: 1700,
    imagen: "imagenes/pastillaazul.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Pastilla Carbón (10 u)",
    precio: 1300,
    imagen: "imagenes/pastillacarbon.png",
    categoria: "Otros",
  },
  {
    nombre: "Curitas SYRITA",
    precio: 1300,
    imagen: "imagenes/curitaseconomicas.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Test embarazo",
    precio: 1400,
    imagen: "imagenes/testembarazo.png",
    categoria: "Otros",
  },
  {
    nombre: "Pastilla dia despues x1",
    precio: 3100,
    imagen: "imagenes/norgestrelmax.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Anticonceptivas - Norgestrel Plus",
    precio: 8000,
    imagen: "imagenes/norgestrelplus.png",
    categoria: "Otros",
  },
  {
    nombre: "Preservativo M caja x 3u",
    precio: 3000,
    imagen: "imagenes/preservativosm.png",
    categoria: "Otros",
  },
  {
    nombre: "Frasco analisis",
    precio: 950,
    imagen: "imagenes/frascoanalisis.png",
    categoria: "Otros",
  },
  {
    nombre: "Termometro digital",
    precio: 4900,
    imagen: "imagenes/termometro.png",
    categoria: "Otros",
  },
  {
    nombre: "Off aerosol x170cc",
    precio: 5200,
    imagen: "imagenes/offaerosol.jpg",
    categoria: "Otros",
  },
  // {
  //   nombre: "Off crema x60gr",
  //   precio: 2800,
  //   imagen: "imagenes/offcrema.jpg",
  //   categoria: "Otros",
  // },
  {
    nombre: "-No stock- Lomecan Ovulos x3 ",
    precio: 0,
    imagen: "imagenes/ovulolomecan.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Ovulos x6u",
    precio: 17200,
    imagen: "imagenes/ovulosx6.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Agua oxigenada 10°",
    precio: 1300,
    imagen: "imagenes/aguaoxigenada.png",
    categoria: "Otros",
  },
  
  {
    nombre: "Pegamento La Gotita 2ml",
    precio: 2000,
    imagen: "imagenes/lagotita.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Alcohol 500cc",
    precio: 2800,
    imagen: "imagenes/purocohol.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "ALCOHOL BORICADO 60CC",
    precio: 1800,
    imagen: "imagenes/alcoholboricado.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Alcohol en gel x250cc",
    precio: 2400,
    imagen: "imagenes/alcoholgel.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Gel neutro 4k ",
    precio: 10700,
    imagen: "imagenes/gelneutro.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Solucion fisiologica",
    precio: 1300,
    imagen: "imagenes/solucionfisiologica.png",
    categoria: "Otros",
  },
  {
    nombre: "Iodopovidona (pervinox) 60ml",
    precio: 4000,
    imagen: "imagenes/pervinox.png",
    categoria: "Otros",
  },
  {
    nombre: "Merthiolate",
    precio: 3300,
    imagen: "imagenes/merthiolate.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Bicarbonato",
    precio: 800,
    imagen: "imagenes/bicarbonato.png",
    categoria: "Otros",
  },
  {
    nombre: "Azufre",
    precio: 1700,
    imagen: "imagenes/azufre.png",
    categoria: "Otros",
  },
  {
    nombre: "Peine familiar x12u ",
    precio: 5200,
    imagen: "imagenes/peinex12.jpeg",
    categoria: "Otros",
  },
   {
    nombre: "Mamadera RANDOM",
    precio: 2200,
    imagen: "imagenes/mamadera.jpeg",
    categoria: "Otros",
  },
   {
    nombre: "Chupetes n°3  x6u ",
    precio: 6700,
    imagen: "imagenes/chupetes.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Jeringas Descartables",
    precio: 450,
    imagen: "imagenes/jeringa.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Agujas Canasta",
    precio: 700,
    imagen: "imagenes/agujaCanasta.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Pañuelo descartable",
    precio: 1900,
    imagen: "imagenes/panuelos.png",
    categoria: "Otros",
  },
  {
    nombre: "Toallas húmedas x100u",
    precio: 1900,
    imagen: "imagenes/belabin.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Toalla doncella C/A. Sin. Perf.",
    precio: 1090,
    imagen: "imagenes/doncellaCA.jpeg",
    categoria: "Otros",
  },
   {
    nombre: "Protector diario DONCELLA",
    precio: 1300,
    imagen: "imagenes/doncellaDIARIO.jpeg",
    categoria: "Otros",
  },
    {
    nombre: "Toalla tanga DONCELLA. C/A.",
    precio: 1350,
    imagen: "imagenes/doncellatanga.jpeg",
    categoria: "Otros",
  },  
  {
    nombre: "Tampon OB (Siempre libre).Medio",
    precio: 3700,
    imagen: "imagenes/tamponSLM.jpeg",
    categoria: "Otros",
  },
   {
    nombre: "Tampon OB (Siempre libre).Super",
    precio: 3700,
    imagen: "imagenes/tamponSLM.jpeg",
    categoria: "Otros",
  },
   {
    nombre: "Tetinas Mumy's cristal x 10 u",
    precio: 3200,
    imagen: "imagenes/tetinacristal.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Encendedor trans.Fuegolandia",
    precio: 460,
    imagen: "imagenes/encendedor.jpeg",
    categoria: "Otros",
  },


  {
    nombre: "Gasa x 10u",
    precio: 3800,
    imagen: "imagenes/gasax10.png",
    categoria: "Otros",
  },
  {
    nombre: "Hisopos x75u",
    precio: 2200,
    imagen: "imagenes/hisopo.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Barbijo KN95 triple capa x10u",
    precio: 2700,
    imagen: "imagenes/barbijo.jpeg",
    categoria: "Otros",
  },

  {
    nombre: "Quitaesmalte DOREE 65ml",
    precio: 1600,
    imagen: "imagenes/quitaesmalte.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Algodón caress x75gr",
    precio: 1000,
    imagen: "imagenes/algodon.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Cordones blanco 80cm (x12-pares)",
    precio: 3200,
    imagen: "imagenes/cordonesblanco.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Cordones negro 80cm (x12-pares)",
    precio: 3200,
    imagen: "imagenes/cordonesnegro.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Colita de pelo Negras- tubo x12",
    precio: 2400,
    imagen: "imagenes/Colitasnegrastubo.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Colita de pelo Blancas- tubo x12",
    precio: 2400,
    imagen: "imagenes/ColitasblancasTubo.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Hilo cocer negro x12u",
    precio: 3000,
    imagen: "imagenes/HiloCoserNegro.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Hilo cocer colores x12u",
    precio: 3000,
    imagen: "imagenes/HiloCoser12u.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Hilo cocer blanco x12u",
    precio: 3000,
    imagen: "imagenes/HilocoserBlanco.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Pinza depilar negra x12 u ",
    precio: 12700,
    imagen: "imagenes/PinzaDepilar.jpeg",
    categoria: "Otros",
  },
  {
    nombre: "Alicate grande",
    precio: 1400,
    imagen: "imagenes/cortaunia.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Invisibles x12u",
    precio: 600,
    imagen: "imagenes/clipinvisible.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Peine de piojos",
    precio: 1800,
    imagen: "imagenes/peinepiojo.jpeg",
    categoria: "Otros",
  },

  {
    nombre: "Manteca de cacao x 1",
    precio: 1200,
    imagen: "imagenes/mantecadecacao.png",
    categoria: "Otros",
  },
  {
    nombre: "-No Stock- Ovulos fangan x 10 ",
    precio: 0,
    imagen: "imagenes/ovuloscolpo.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Crema Platsul 30gr",
    precio: 7700,
    imagen: "imagenes/platsul.jpeg",
    categoria: "Cremas",
  },
  {
    nombre: "Crema Miklogen (betametazona) 20g",
    precio: 6500,
    imagen: "imagenes/miklogen.jpeg",
    categoria: "Cremas",
  },
  {
    nombre: "Crema rectal (hemorroide)",
    precio: 7400,
    imagen: "imagenes/cremarectal.jpg",
    categoria: "Cremas",
  },
  {
    nombre: "Crema para afecciones vaginales(Menopausia)",
    precio: 28200,
    imagen: "imagenes/crema-menopausia.jpeg",
    categoria: "Cremas",
  },
  {
    nombre: "Crema para hérpes facial y labial (Aciclovir 5,0%)",
    precio: 6700,
    imagen: "imagenes/cremaherpesa.jpeg",
    categoria: "Cremas",
  },
  {
    nombre: "Crema Diclofenac",
    precio: 4200,
    imagen: "imagenes/klonafenacgel.png",
    categoria: "Cremas",
  },
  // {
  //   nombre: "Crema LAFEDRYL  X 120ml(tipo caladryl)",
  //   precio: 8000,
  //   imagen: "imagenes/lafredyl.jpg",
  //   categoria: "Cremas",
  // },
  {
    nombre: "Vick vapoRub 12g",
    precio: 6800,
    imagen: "imagenes/vickvapo.png",
    categoria: "Cremas",
  },
  {
    nombre: "Cinta Hipoalergenica x1",
    precio: 1100,
    imagen: "imagenes/cintahipoalergenica.png",
    categoria: "Otros",
  },

  {
    nombre: "Salbutamol gotas (para nebulizar)",
    precio: 1400,
    imagen: "imagenes/salbutamolgotas.jpg",
    categoria: "Otros",
  },
  {
    nombre: "Salbutamol 100mcg 250 dosis",
    precio: 12200,
    imagen: "imagenes/salbutamol.png",
    categoria: "Otros",
  },
];

// Categorías definidas manualmente
const categorias = ["Tabletas", "Jarabes", "Sobres", "Cremas", "Otros"];
const telefono = "5493364378090";

// Función para crear el catálogo de productos
function crearProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = ""; // Limpiamos el contenedor antes de cargar

  const categorias = ["Tabletas", "Sobres", "Jarabes", "Cremas", "Otros"];
  const colores = {
    Tabletas: "text-purple-700",
    Sobres: "text-green-700",
    Jarabes: "text-red-700",
    Cremas: "text-blue-700",
    Otros: "text-yellow-700",
  };

  categorias.forEach((categoria) => {
    const productosFiltrados = productos.filter(
      (p) => p.categoria === categoria,
    );
    if (productosFiltrados.length > 0) {
      const seccion = document.createElement("div");
      seccion.id = categoria.toLowerCase(); // id para ancla

      const titulo = document.createElement("h2");
      titulo.className = `text-3xl font-bold text-center ${colores[categoria]} mt-10 mb-6`;
      titulo.textContent = categoria;
      seccion.appendChild(titulo);

      const grid = document.createElement("div");
      grid.className = "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6";

      productosFiltrados.forEach((p) => {
        const indexReal = productos.indexOf(p);
        const card = crearCardProducto(p, indexReal);
        grid.appendChild(card);
      });

      seccion.appendChild(grid);
      contenedor.appendChild(seccion);
    }
  });
}

// Función para crear la tarjeta visual de cada producto
function crearCardProducto(p, i) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `  
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="font-semibold text-center">${p.nombre}</div>
      <div class="text-green-700 font-bold mb-2">$${p.precio}</div>
      <div class="flex items-center justify-center space-x-2 mt-2">
        <button onclick="cambiarCantidad(${i}, -1)" class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">-</button>
        <span id="cant${i}" class="text-lg font-bold w-8 text-center">0</span>
        <button onclick="cambiarCantidad(${i}, 1)" class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">+</button>
      </div>
    `;

  return card;
}

// Array para llevar control de las cantidades
const cantidades = new Array(productos.length).fill(0);

// Cambia la cantidad de un producto
function cambiarCantidad(index, cambio) {
  cantidades[index] += cambio;
  if (cantidades[index] < 0) cantidades[index] = 0;

  document.getElementById(`cant${index}`).textContent = cantidades[index];
  actualizarTotal();
}

// Actualiza el total del pedido
function actualizarTotal() {
  let total = 0;
  productos.forEach((p, i) => {
    total += cantidades[i] * p.precio;
  });

  document.getElementById("total").textContent = total.toLocaleString("es-AR");
  actualizarResumen();
}

// Genera el resumen del pedido en pantalla
function actualizarResumen() {
  let resumen = "";
  productos.forEach((p, i) => {
    if (cantidades[i] > 0) {
      resumen += `<div>${cantidades[i]} x ${p.nombre} - $${(
        cantidades[i] * p.precio
      ).toLocaleString("es-AR")}</div>`;
    }
  });

  if (resumen === "") {
    resumen =
      "<div class='text-gray-500'>No hay productos seleccionados.</div>";
  }

  document.getElementById("resumen-pedido").innerHTML = resumen;
}

// Enviar pedido por WhatsApp
function enviarPedido() {
  let mensaje = "Hola, quiero hacer un pedido:%0A";
  let hayProductos = false;

  productos.forEach((p, i) => {
    if (cantidades[i] > 0) {
      mensaje += `${cantidades[i]} x ${p.nombre} - $${(
        cantidades[i] * p.precio
      ).toLocaleString("es-AR")}%0A`;
      hayProductos = true;
    }
  });

  if (!hayProductos) {
    alert("No has seleccionado ningún producto.");
    return;
  }

  const total = document.getElementById("total").textContent;
  mensaje += `%0ATotal: $${total}`;
  window.open(`https://wa.me/${telefono}?text=${mensaje}`, "_blank");
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  crearProductos();
});
// Calcula el total del pedido y genera el resumen
function calcularTotal() {
  let total = 0;
  let resumen = "";

  productos.forEach((p, i) => {
    const span = document.getElementById(`cant${i}`);
    if (!span) return;
    const cantidad = parseInt(span.textContent) || 0;
    if (cantidad > 0) {
      total += cantidad * p.precio;
      resumen += `
          <div class="flex justify-between mb-2">
            <span>${cantidad} x ${p.nombre}</span>
            <span>$${cantidad * p.precio}</span>
          </div>`;
    }
  });

  document.getElementById("total").textContent = total;

  const resumenPedido = document.getElementById("resumen-pedido");
  if (resumen !== "") {
    resumenPedido.innerHTML = `
        <h3 class="text-xl font-bold mb-2 text-gray-700">Resumen de tu pedido:</h3>
        ${resumen}
        <div class="flex justify-between border-t pt-2 mt-2 font-bold">
          <span>Total:</span>
          <span>$${total}</span>
        </div>`;
  } else {
    resumenPedido.innerHTML = "";
  }
}

// Arma el mensaje para WhatsApp y lo abre
function enviarPedido() {
  let mensaje = "Hola, quiero hacer un pedido:%0A";
  let hayPedido = false;

  productos.forEach((p, i) => {
    const span = document.getElementById(`cant${i}`);
    if (!span) return;
    const cantidad = parseInt(span.textContent) || 0;
    if (cantidad > 0) {
      mensaje += `- ${p.nombre}: ${cantidad} x $${p.precio} = $${
        cantidad * p.precio
      }%0A`;
      hayPedido = true;
    }
  });

  if (!hayPedido) {
    alert("No seleccionaste ningún producto.");
    return;
  }

  const total = document.getElementById("total").textContent;
  mensaje += `%0A*Total: $${total}*`;

  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}
document.getElementById("buscador").addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  productos.forEach((p, i) => {
    const card = document.getElementById(`cant${i}`)?.closest(".card");
    if (card) {
      if (p.nombre.toLowerCase().includes(texto)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
});
function crearBotonesFiltro() {
  const contenedorFiltros = document.getElementById("filtros");
  contenedorFiltros.innerHTML = "";

  categorias.forEach((cat) => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className =
      "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition";
    btn.onclick = () => scrollToCategoria(cat);
    contenedorFiltros.appendChild(btn);
  });
}

function scrollToCategoria(categoria) {
  const seccion = document.getElementById(categoria.toLowerCase());
  if (seccion) {
    seccion.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
crearBotonesFiltro();

// Carga inicial
crearProductos();
