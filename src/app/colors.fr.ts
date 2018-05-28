import { ColorInfo } from './colors';

const tmp = [
    [
      'havane',
      '#948147'
    ],
    [
      'azalee',
      '#E90A79'
    ],
    [
      'atoll',
      '#F8AF7E'
    ],
    [
      'anemone',
      '#AB1498'
    ],
    [
      'apricot',
      '#EB8F07'
    ],
    [
      'aluminium',
      '#7D847B'
    ],
    [
      'argile',
      '#A82257'
    ],
    [
      'albatre',
      '#F2F2F2'
    ],
    [
      'anthracite',
      '#390000'
    ],
    [
      'ambre',
      '#91714A'
    ],
    [
      'acier',
      '#BFBFBF'
    ],
    [
      'agate',
      '#00406F'
    ],
    [
      'anis',
      '#EBF293'
    ],
    [
      'absinthe',
      '#CFF894'
    ],
    [
      'amarante',
      '#9E1870'
    ],
    [
      'alezan',
      '#E29E4B'
    ],
    [
      'ardoise',
      '#2C2E58'
    ],
    [
      'armagnac',
      '#882C17'
    ],
    [
      'blue indigo sombre',
      '#2D33AC'
    ],
    [
      'ivoire',
      '#FFF0B3'
    ],
    [
      'iris',
      '#5725CD'
    ],
    [
      'vanille',
      '#C9BA9E'
    ],
    [
      'violace grise',
      '#A787A6'
    ],
    [
      'violet',
      '#6501A0'
    ],
    [
      'whisky',
      '#ECC651'
    ],
    [
      'hirondelle',
      '#726B61'
    ],
    [
      'varech',
      '#80770D'
    ],
    [
      'violine',
      '#840084'
    ],
    [
      'vigogne',
      '#BF7939'
    ],
    [
      'vert',
      '#71CC44'
    ],
    [
      'verr acide',
      '#9AD539'
    ],
    [
      'vert anglais',
      '#6A7B06'
    ],
    [
      'vert ecossais',
      '#4A8745'
    ],
    [
      'vert safari',
      '#9B9F53'
    ],
    [
      'vert chartreuse',
      '#B9C525'
    ],
    [
      'vert amande',
      '#74915B'
    ],
    [
      'vert veronese',
      '#CEB66F'
    ],
    [
      'vert clair',
      '#BFD028'
    ],
    [
      'vert cypres',
      '#096438'
    ],
    [
      'vert jaune',
      '#E1E465'
    ],
    [
      'vert scarabee',
      '#1F8C8F'
    ],
    [
      'vert tisane',
      '#C4D053'
    ],
    [
      'vert-de-gris',
      '#446C63'
    ],
    [
      'vert noir',
      '#244800'
    ],
    [
      'vert pabge',
      '#73762C'
    ],
    [
      'vert celadon',
      '#B4CC75'
    ],
    [
      'vert d\'eau',
      '#A6D9AB'
    ],
    [
      'vert nil',
      '#D1E4A0'
    ],
    [
      'vert pastille',
      '#74A98A'
    ],
    [
      'vert paon',
      '#00917B'
    ],
    [
      'vert buis',
      '#005E0C'
    ],
    [
      'vert bouteille',
      '#315A1B'
    ],
    [
      'vert bronze',
      '#645924'
    ],
    [
      'vert pomme',
      '#99D650'
    ],
    [
      'vert mousse',
      '#4F8C37'
    ],
    [
      'vert fonce',
      '#CF7366'
    ],
    [
      'vert prairie',
      '#91C43C'
    ],
    [
      'vert pois chiche',
      '#258B60'
    ],
    [
      'vermillon',
      '#EF2E3D'
    ],
    [
      'vert laitue',
      '#567517'
    ],
    [
      'vert roseau',
      '#B9CE64'
    ],
    [
      'outremer',
      '#32017A'
    ],
    [
      'ecarlate',
      '#EB0153'
    ],
    [
      'eglantine',
      '#EF36A5'
    ],
    [
      'epinard',
      '#4B5029'
    ],
    [
      'vert loden',
      '#567517'
    ],
    [
      'ecaille',
      '#6F493C'
    ],
    [
      'ecume',
      '#F2F589'
    ],
    [
      'e\'cru',
      '#FFD0A1'
    ],
    [
      'email',
      '#FEF5B6'
    ],
    [
      'emeraude',
      '#24A279'
    ],
    [
      'herbe',
      '#619139'
    ],
    [
      'ocre',
      '#9A751D'
    ],
    [
      'autrichien',
      '#696201'
    ],
    [
      'olive',
      '#64791A'
    ],
    [
      'aubergine',
      '#550953'
    ],
    [
      'aubergine violacee',
      '#5B096C'
    ],
    [
      'orange',
      '#FE812E'
    ],
    [
      'orange roussi',
      '#E27227'
    ],
    [
      'kaki',
      '#897D12'
    ],
    [
      'cactus',
      '#587955'
    ],
    [
      'cachou',
      '#624F51'
    ],
    [
      'cachemire',
      '#D0BA95'
    ],
    [
      'gazon',
      '#7B8E2F'
    ],
    [
      'canari',
      '#F7C92D'
    ],
    [
      'cannelle',
      '#8D5B36'
    ],
    [
      'capucine',
      '#D95C4F'
    ],
    [
      'cafe',
      '#705038'
    ],
    [
      'cafe au lait',
      '#B7AA89'
    ],
    [
      'caramel',
      '#B4713F'
    ],
    [
      'garance',
      '#C40093'
    ],
    [
      'carmin',
      '#8A0056'
    ],
    [
      'cardinal',
      '#000000'
    ],
    [
      'cuivre',
      '#BC5A45'
    ],
    [
      'cuisse de nymph',
      '#C0AF98'
    ],
    [
      'goumier',
      '#990045'
    ],
    [
      'cramoisi',
      '#84004F'
    ],
    [
      'graphite',
      '#181818'
    ],
    [
      'curry',
      '#B5A3D0'
    ],
    [
      'gris acier',
      '#999999'
    ],
    [
      'gris orage',
      '#C5B9B8'
    ],
    [
      'clan',
      '#057E70'
    ],
    [
      'gris clair',
      '#A9A29A'
    ],
    [
      'gris ciel',
      '#D5D2BF'
    ],
    [
      'gris terreux',
      '#7B705E'
    ],
    [
      'gris argile',
      '#7186A6'
    ],
    [
      'gris gres',
      '#BBB9A6'
    ],
    [
      'gris cendre',
      '#664F44'
    ],
    [
      'glycine',
      '#D084C5'
    ],
    [
      'gris fer',
      '#75746C'
    ],
    [
      'gris fonce',
      '#5F5B58'
    ],
    [
      'gris plomb',
      '#A7A9A8'
    ],
    [
      'clou de girofle',
      '#715940'
    ],
    [
      'gris blue',
      '#B9BABF'
    ],
    [
      'crevette',
      '#FE8594'
    ],
    [
      'gris flanelle',
      '#68686A'
    ],
    [
      'gris moyen',
      '#AAAA9F'
    ],
    [
      'gris poussiere',
      '#B3AA97'
    ],
    [
      'gris perle',
      '#B6B3A5'
    ],
    [
      'grenat',
      '#8B015B'
    ],
    [
      'grege',
      '#BBB1A4'
    ],
    [
      'coq de roche',
      '#E3003F'
    ],
    [
      'sapin',
      '#077A58'
    ],
    [
      'coquelicot',
      '#DF0250'
    ],
    [
      'sahara',
      '#C8B82B'
    ],
    [
      'groseille',
      '#DD0085'
    ],
    [
      'corail',
      '#FF4D67'
    ],
    [
      'cremeux',
      '#EAD0A2'
    ],
    [
      'cognac',
      '#A44506'
    ],
    [
      'sable',
      '#CAB69D'
    ],
    [
      'sable mouille',
      '#B6A087'
    ],
    [
      'chere',
      '#C0AF98'
    ],
    [
      'jacinthe',
      '#EE82C2'
    ],
    [
      'geranium',
      '#F3236C'
    ],
    [
      'ciment',
      '#8C8E8A'
    ],
    [
      'sanglier',
      '#483131'
    ],
    [
      'citronelle',
      '#9DA651'
    ],
    [
      'salade',
      '#B5E366'
    ],
    [
      'cyclamen',
      '#DA01AE'
    ],
    [
      'chatain',
      '#856A3F'
    ],
    [
      'chatoyant',
      '#B6B4D3'
    ],
    [
      'gentiane',
      '#5A58B6'
    ],
    [
      'chaudron',
      '#46463C'
    ],
    [
      'charbonneux',
      '#0A0A0A'
    ],
    [
      'chocolat',
      '#7B4400'
    ],
    [
      'chamois',
      '#C59927'
    ],
    [
      'genet',
      '#FFD309'
    ],
    [
      'chameau',
      '#AF8C58'
    ],
    [
      'champagne',
      '#B5A795'
    ],
    [
      'jaune',
      '#FAE701'
    ],
    [
      'jaune acide',
      '#FEF810'
    ],
    [
      'jaune de naples',
      '#E2C13D'
    ],
    [
      'jaune briand',
      '#CDBC94'
    ],
    [
      'jaune jonquille',
      '#FEEE2E'
    ],
    [
      'jaune pale',
      '#FDF48E'
    ],
    [
      'jaune citron',
      '#EEF753'
    ],
    [
      'jaune paille',
      '#FBFE87'
    ],
    [
      'jaune safran',
      '#CCAF26'
    ],
    [
      'jaune narcisse',
      '#FDF188'
    ],
    [
      'jaune mimosa',
      '#F5F814'
    ],
    [
      'jaune moutarde',
      '#DAC50A'
    ],
    [
      'sepia',
      '#836301'
    ],
    [
      'tete-de-negre',
      '#6A410F'
    ],
    [
      'seigle',
      '#835F01'
    ],
    [
      'tete de chene prulee',
      '#8F5F54'
    ],
    [
      'cerise',
      '#BC0163'
    ],
    [
      'tilleul',
      '#C9E86C'
    ],
    [
      'souris',
      '#918D80'
    ],
    [
      'tabac',
      '#6C4F00'
    ],
    [
      'tuile',
      '#B0665E'
    ],
    [
      'tulipe',
      '#A94E75'
    ],
    [
      'terre donbull',
      '#996142'
    ],
    [
      'nacre',
      '#D3D8C2'
    ],
    [
      'terre de sienne naturelle',
      '#AB7D65'
    ],
    [
      'tons de chasse',
      '#A57E1B'
    ],
    [
      'terre cuite',
      '#B8783F'
    ],
    [
      'terre de sienne brulee',
      '#623826'
    ],
    [
      'tomette',
      '#AF3501'
    ],
    [
      'tulipe noire',
      '#512754'
    ],
    [
      'tomate',
      '#FB5959'
    ],
    [
      'narcisse',
      '#F7FE72'
    ],
    [
      'nymphea',
      '#FEFA5A'
    ],
    [
      'noir',
      '#000000'
    ],
    [
      'palme',
      '#9EA914'
    ],
    [
      'noisette',
      '#B37026'
    ],
    [
      'para',
      '#527351'
    ],
    [
      'nefle',
      '#65363A'
    ],
    [
      'noix du bresil',
      '#604D00'
    ],
    [
      'nigelle',
      '#46A0D7'
    ],
    [
      'noix',
      '#875FC1'
    ],
    [
      'palme',
      '#794AC6'
    ],
    [
      'pin',
      '#006A68'
    ],
    [
      'pigeon',
      '#868379'
    ],
    [
      'piment',
      '#C60059'
    ],
    [
      'pamplemousse',
      '#FCEE3F'
    ],
    [
      'bistre',
      '#5E3A00'
    ],
    [
      'pain brule',
      '#A64F1A'
    ],
    [
      'pistache',
      '#BAC53A'
    ],
    [
      'pensee',
      '#5A01B5'
    ],
    [
      'biscuit',
      '#D38245'
    ],
    [
      'billard',
      '#02623E'
    ],
    [
      'buisson',
      '#67664E'
    ],
    [
      'fauve',
      '#D6A458'
    ],
    [
      'fuchsia blue',
      '#BD00BD'
    ],
    [
      'ficelle',
      '#D3CEB0'
    ],
    [
      'fenouil',
      '#AEB3A2'
    ],
    [
      'feu',
      '#EE432B'
    ],
    [
      'poussin',
      '#FDE301'
    ],
    [
      'puce',
      '#6A1A2E'
    ],
    [
      'bougainvillee',
      '#D07896'
    ],
    [
      'fuchsia rose',
      '#C400AB'
    ],
    [
      'flamant rose',
      '#F3ABA0'
    ],
    [
      'blanc casse',
      '#FFFEFD'
    ],
    [
      'brun rouge',
      '#750F3A'
    ],
    [
      'brun van dyck',
      '#76565F'
    ],
    [
      'framboise',
      '#DF0287'
    ],
    [
      'brun',
      '#8F5836'
    ],
    [
      'brun fonce',
      '#422B1E'
    ],
    [
      'praline',
      '#995100'
    ],
    [
      'blanc neige',
      '#FFFFFF'
    ],
    [
      'brique',
      '#AF6241'
    ],
    [
      'bruyere',
      '#C08FBD'
    ],
    [
      'bourgeon',
      '#ABBE7E'
    ],
    [
      'blue adriatique',
      '#000099'
    ],
    [
      'bourgogne',
      '#80006C'
    ],
    [
      'blue azur',
      '#74B4C9'
    ],
    [
      'prune',
      '#791367'
    ],
    [
      'blue acide',
      '#0A77B1'
    ],
    [
      'brugnon',
      '#BC105E'
    ],
    [
      'pourpre',
      '#8B0181'
    ],
    [
      'blue armee de l\'air',
      '#000051'
    ],
    [
      'blue anglais',
      '#22039E'
    ],
    [
      'blue opalin',
      '#819CA7'
    ],
    [
      'blue grise',
      '#7C9CCD'
    ],
    [
      'blue vert dense',
      '#018989'
    ],
    [
      'blue canard',
      '#037B85'
    ],
    [
      'blue violet',
      '#52007D'
    ],
    [
      'blue hortensia',
      '#7572FE'
    ],
    [
      'indigo',
      '#043C78'
    ],
    [
      'blue indigo sombre',
      '#0C2B96'
    ],
    [
      'blue orient',
      '#3191B0'
    ],
    [
      'blue clair',
      '#85BEBA'
    ],
    [
      'blue gauloise',
      '#82AFD0'
    ],
    [
      'blue dur',
      '#0000AE'
    ],
    [
      'blue pale',
      '#91EEE0'
    ],
    [
      'blue turquoise',
      '#28799B'
    ],
    [
      'blue nuit',
      '#00376F'
    ],
    [
      'blue gitane',
      '#0F52B7'
    ],
    [
      'blue nattier',
      '#488995'
    ],
    [
      'blue ciel',
      '#02C4B5'
    ],
    [
      'blue de chine',
      '#004080'
    ],
    [
      'blue paon',
      '#420265'
    ],
    [
      'blue faience',
      '#81A4C4'
    ],
    [
      'blue petrole',
      '#1D9BB1'
    ],
    [
      'blue mediterranee',
      '#0046AE'
    ],
    [
      'blue brouillard',
      '#9AAAAF'
    ],
    [
      'blue myosotis',
      '#283D82'
    ],
    [
      'blue bleuet',
      '#01529A'
    ],
    [
      'blue marine',
      '#283D82'
    ],
    [
      'blue fume',
      '#859AB1'
    ],
    [
      'blue porcelaine',
      '#88C6D2'
    ],
    [
      'blue lavande',
      '#AA99D0'
    ],
    [
      'blue roi',
      '#5260AD'
    ],
    [
      'blond',
      '#FFD955'
    ],
    [
      'beige froid',
      '#BEBC94'
    ],
    [
      'bouleau',
      '#979468'
    ],
    [
      'beige grise',
      '#9B8160'
    ],
    [
      'braise',
      '#BF4040'
    ],
    [
      'beige',
      '#CCA775'
    ],
    [
      'blue royal',
      '#564BB6'
    ],
    [
      'bronze',
      '#82724D'
    ],
    [
      'beige rose',
      '#E3A577'
    ],
    [
      'peche',
      '#F1DBC7'
    ],
    [
      'poiver vert',
      '#7D8053'
    ],
    [
      'bois de rose',
      '#B3849B'
    ],
    [
      'berlingot',
      '#F8AE34'
    ],
    [
      'bois',
      '#8A6D4F'
    ],
    [
      'pervenche',
      '#3868A3'
    ],
    [
      'bordeaux fonce',
      '#680663'
    ],
    [
      'petunia',
      '#FB00AF'
    ],
    [
      'bordeaux clair',
      '#7C0364'
    ],
    [
      'bois fruitier',
      '#CC7D5B'
    ],
    [
      'mais',
      '#E8C431'
    ],
    [
      'marron',
      '#844500'
    ],
    [
      'marron chaud',
      '#895043'
    ],
    [
      'marocan',
      '#612F14'
    ],
    [
      'marron glaces',
      '#BFA68A'
    ],
    [
      'mastic',
      '#A9A59A'
    ],
    [
      'marron assourdi',
      '#785200'
    ],
    [
      'macadam',
      '#3E423C'
    ],
    [
      'marron acajou',
      '#6A2C26'
    ],
    [
      'mandarine',
      '#FF5959'
    ],
    [
      'menthe',
      '#00A265'
    ],
    [
      'mouette',
      '#C0BEA9'
    ],
    [
      'lapis-lazuli',
      '#006297'
    ],
    [
      'myosotis',
      '#5B7B8E'
    ],
    [
      'laque',
      '#820551'
    ],
    [
      'mure',
      '#40005B'
    ],
    [
      'mauve',
      '#D8C9D7'
    ],
    [
      'miel',
      '#FBC50B'
    ],
    [
      'merisier',
      '#BB6605'
    ],
    [
      'lan',
      '#C4A577'
    ],
    [
      'liege',
      '#A07149'
    ],
    [
      'lie-de-vin',
      '#89013F'
    ],
    [
      'rouge',
      '#F00042'
    ],
    [
      'liseron',
      '#E482C2'
    ],
    [
      'rouille',
      '#D55C53'
    ],
    [
      'lichen',
      '#9FBB97'
    ],
    [
      'roux',
      '#DD8C2B'
    ],
    [
      'lierre',
      '#1E6F5A'
    ],
    [
      'lilas',
      '#CDA7FC'
    ],
    [
      'rouge ardent',
      '#F00066'
    ],
    [
      'rouge vif',
      '#F00078'
    ],
    [
      'rouge dan guru tail',
      '#BC5F3A'
    ],
    [
      'reseda',
      '#CCE193'
    ],
    [
      'rouge terni',
      '#BE5678'
    ],
    [
      'renoncule',
      '#E7C523'
    ],
    [
      'rouge sang',
      '#B0003E'
    ],
    [
      'rouge rubis',
      '#BF0060'
    ],
    [
      'rouge orange',
      '#FF522D'
    ],
    [
      'rouge de fair',
      '#9B5033'
    ],
    [
      'royal air force',
      '#415976'
    ],
    [
      'rose',
      '#DF9FAB'
    ],
    [
      'rose corail',
      '#AC4A6A'
    ],
    [
      'rose the',
      '#F4C6A6'
    ],
    [
      'rose hortensia',
      '#F374DA'
    ],
    [
      'rose tendre',
      '#FAB1D8'
    ],
    [
      'rose ibis',
      '#E46D94'
    ],
    [
      'rose saumon',
      '#F8AFA5'
    ],
    [
      'rose indien',
      '#F36186'
    ],
    [
      'rose shocking',
      '#FF1A81'
    ],
    [
      'rose dragee',
      '#EED0DF'
    ],
    [
      'rose pale',
      '#DE87AA'
    ],
    [
      'rose poudre',
      '#F1C2CD'
    ],
    [
      'rose buvard',
      '#D8A5AD'
    ],
    [
      'rose peche',
      '#DF669F'
    ],
    [
      'laurier',
      '#1B6358'
    ]
  ];

const colorFr = tmp.map((c) => {
    return new ColorInfo(c[0].toUpperCase(), '', c[1]);
});


export default colorFr;
