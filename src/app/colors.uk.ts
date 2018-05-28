import { ColorInfo } from './colors';

const tmp = [
    [
      'Baby Pink',
      '#FFC6D6'
    ],
    [
      'Shell Pink',
      '#FFBDB3'
    ],
    [
      'Fresh Pink',
      '#F2D5CC'
    ],
    [
      'Pastel Pink',
      '#FC9DB8'
    ],
    [
      'Rose Pink',
      '#F55064'
    ],
    [
      'Pink',
      '#DFAEB1'
    ],
    [
      'French Rose',
      '#EF8184'
    ],
    [
      'Peach Blossam',
      '#D5C1CE'
    ],
    [
      'Lotus',
      '#CF8878'
    ],
    [
      'Tea Rose',
      '#D8B197'
    ],
    [
      'Salmon Pink',
      '#FF9C8C'
    ],
    [
      'Aurora',
      '#FFCEC6'
    ],
    [
      'Vinous',
      '#B1988F'
    ],
    [
      'Cosmos',
      '#F39AAB'
    ],
    [
      'Corinthian Pink',
      '#C49793'
    ],
    [
      'Cherry Pink',
      '#F05187'
    ],
    [
      'Fuchsia Pink',
      '#FC9DB8'
    ],
    [
      'Daphne Pink',
      '#A26168'
    ],
    [
      'Carnation',
      '#D37A83'
    ],
    [
      'Shrimp Pink',
      '#DC7563'
    ],
    [
      'Coral Pink',
      '#FF9888'
    ],
    [
      'Rose Pompadour',
      '#A66061'
    ],
    [
      'Empire Rose',
      '#F08687'
    ],
    [
      'Flamingo',
      '#EF8865'
    ],
    [
      'Etruscan Rose',
      '#B0755C'
    ],
    [
      'ashes of rose',
      '#B86D77'
    ],
    [
      'rose red',
      '#E31262'
    ],
    [
      'camellia',
      '#E85466'
    ],
    [
      'geranium',
      '#E22838'
    ],
    [
      'cherry',
      '#D00026'
    ],
    [
      'signal red',
      '#E0002A'
    ],
    [
      'signal red',
      '#E60032'
    ],
    [
      'carmine',
      '#E10041'
    ],
    [
      'turkey red',
      '#B21D33'
    ],
    [
      'poppy red',
      '#CE382B'
    ],
    [
      'cardinal',
      '#891E34'
    ],
    [
      'crimson rake',
      '#AA0044'
    ],
    [
      'Pomegranate',
      '#CF498F'
    ],
    [
      'cinnabar',
      '#ED2F1F'
    ],
    [
      'Cent Patrick cross',
      '#FF0000'
    ],
    [
      'tomato red',
      '#C13321'
    ],
    [
      'ruby',
      '#AE003A'
    ],
    [
      'english red',
      '#D47467'
    ],
    [
      'oxide red',
      '#7F3330'
    ],
    [
      'Oxblood Red',
      '#7B2B47'
    ],
    [
      'Bole',
      '#9B5033'
    ],
    [
      'burgundy',
      '#3C1117'
    ],
    [
      'mahogany',
      '#4B1016'
    ],
    [
      'Flea',
      '#6A1A2E'
    ],
    [
      'opal peach',
      '#F0BCB7'
    ],
    [
      'flesh',
      '#FFC8AB'
    ],
    [
      'apricot',
      '#F79469'
    ],
    [
      'sunset',
      '#D4A56F'
    ],
    [
      'sunburn',
      '#AF7C54'
    ],
    [
      'fire red',
      '#E23724'
    ],
    [
      'carrot orange',
      '#E97117'
    ],
    [
      'tangerine',
      '#DD562E'
    ],
    [
      'orange',
      '#FD680D'
    ],
    [
      'maize',
      '#EBAC85'
    ],
    [
      'chrome orange',
      '#FE6D0D'
    ],
    [
      'amber',
      '#BC753B'
    ],
    [
      'morocco red',
      '#86002C'
    ],
    [
      'caramel',
      '#D47643'
    ],
    [
      'tan',
      '#DE772C'
    ],
    [
      'topaz',
      '#C47C50'
    ],
    [
      'moon light',
      '#FCD8B1'
    ],
    [
      'beige',
      '#E3B797'
    ],
    [
      'flax',
      '#EBC6A9'
    ],
    [
      'blond',
      '#E0B188'
    ],
    [
      'cafe au lait',
      '#C88659'
    ],
    [
      'biscuit',
      '#FFB989'
    ],
    [
      'parchment',
      '#C0AB8A'
    ],
    [
      'champagne',
      '#E7BF7C'
    ],
    [
      'camel',
      '#B57A59'
    ],
    [
      'grege',
      '#9E756C'
    ],
    [
      'fawn',
      '#AD775A'
    ],
    [
      'chamois',
      '#F7C2C2'
    ],
    [
      'burnt sienna',
      '#B75237'
    ],
    [
      'brick red',
      '#9C302A'
    ],
    [
      'brown',
      '#5C3418'
    ],
    [
      'raw sienna',
      '#86410B'
    ],
    [
      'raw umber',
      '#854E38'
    ],
    [
      'Caffee',
      '#604A2B'
    ],
    [
      'maroon',
      '#56001D'
    ],
    [
      'maroon',
      '#670026'
    ],
    [
      'liver',
      '#8B6165'
    ],
    [
      'henna',
      '#9A1912'
    ],
    [
      'russet',
      '#AD5F47'
    ],
    [
      'chestnut brown',
      '#68412F'
    ],
    [
      'Brunette',
      '#87745C'
    ],
    [
      'chocolate',
      '#3E1F0F'
    ],
    [
      'sepia',
      '#402923'
    ],
    [
      'vandike brown',
      '#7F5139'
    ],
    [
      'ivory',
      '#F1E1CE'
    ],
    [
      'vanilla',
      '#E1C79A'
    ],
    [
      'leghorn',
      '#E7C59C'
    ],
    [
      'cream',
      '#FFF4DC'
    ],
    [
      'straw',
      '#F2DB9C'
    ],
    [
      'massicot',
      '#FCCDA2'
    ],
    [
      'sulphar yellow',
      '#FFD93C'
    ],
    [
      'dyres broom',
      '#C5BE82'
    ],
    [
      'mimosa',
      '#FFCD25'
    ],
    [
      'naples yellow',
      '#FFBC7B'
    ],
    [
      'honey yellow',
      '#B68954'
    ],
    [
      'gamboge',
      '#E2B55B'
    ],
    [
      'Orpiment',
      '#D9B453'
    ],
    [
      'weld',
      '#C1BC55'
    ],
    [
      'indian yellow',
      '#FF9700'
    ],
    [
      'daffodil yellow',
      '#EDAA5A'
    ],
    [
      'saffran yellow',
      '#FFAF00'
    ],
    [
      'chrome yellow',
      '#F4C600'
    ],
    [
      'yolk yellow',
      '#F3B927'
    ],
    [
      'canary',
      '#FFD718'
    ],
    [
      'banana',
      '#F5D300'
    ],
    [
      'lemon yellow',
      '#FEC300'
    ],
    [
      'mustard',
      '#E3AB0D'
    ],
    [
      'mustard',
      '#CC7F0F'
    ],
    [
      'chartreuse yellow',
      '#EADE5D'
    ],
    [
      'union jug',
      '#F0E889'
    ],
    [
      'gold',
      '#A37E00'
    ],
    [
      'grecian bronze',
      '#FA9685'
    ],
    [
      'olive',
      '#584C0F'
    ],
    [
      'lime green',
      '#CFD10C'
    ],
    [
      'sea foam green',
      '#BDCE96'
    ],
    [
      'bistachio Green',
      '#ABC789'
    ],
    [
      'night green',
      '#45AA31'
    ],
    [
      'night green',
      '#4E9432'
    ],
    [
      'eggshell green',
      '#87AC9E'
    ],
    [
      'grass green',
      '#96BE7B'
    ],
    [
      'glaucas',
      '#B6BEA2'
    ],
    [
      'apple green',
      '#97BE1C'
    ],
    [
      'gay green',
      '#5C700A'
    ],
    [
      'pea green',
      '#93B17D'
    ],
    [
      'spring green',
      '#B4CB5E'
    ],
    [
      'willow green',
      '#95875A'
    ],
    [
      'Caudy Green',
      '#718451'
    ],
    [
      'moth green',
      '#7B7C46'
    ],
    [
      'lincoln green',
      '#615C41'
    ],
    [
      'olive green',
      '#3B3F10'
    ],
    [
      'flower drew',
      '#5C7449'
    ],
    [
      'schweinfurt',
      '#00AE42'
    ],
    [
      'mint',
      '#006252'
    ],
    [
      'chrome green',
      '#00885F'
    ],
    [
      'malachite green',
      '#347655'
    ],
    [
      'verdigris',
      '#5BA080'
    ],
    [
      'mistletoe',
      '#576A3E'
    ],
    [
      'hunter green',
      '#0E291B'
    ],
    [
      'bottle green',
      '#0B2F31'
    ],
    [
      'myrtle green',
      '#273931'
    ],
    [
      'horizon blue',
      '#B0E2F6'
    ],
    [
      'nile blue',
      '#418C8C'
    ],
    [
      'baby blue',
      '#CBECF6'
    ],
    [
      'cambridge blue',
      '#54B6BE'
    ],
    [
      'sky blue',
      '#8BAFDB'
    ],
    [
      'celestial blue',
      '#496F8E'
    ],
    [
      'zenith blue',
      '#999DB9'
    ],
    [
      'Venet',
      '#02977D'
    ],
    [
      'aqua marine',
      '#327585'
    ],
    [
      'turquoise',
      '#0097A2'
    ],
    [
      'porcelain blue',
      '#5E94A5'
    ],
    [
      'forget me not',
      '#66B7D8'
    ],
    [
      'powder blue',
      '#E6F6FC'
    ],
    [
      'Peacock',
      '#00586D'
    ],
    [
      'egyptian blue',
      '#006785'
    ],
    [
      'vice',
      '#427596'
    ],
    [
      'pompadour pink',
      '#FD90A5'
    ],
    [
      'wedgewood blue',
      '#505B8C'
    ],
    [
      'bluette',
      '#5782A1'
    ],
    [
      'hydrangea blue',
      '#325E9A'
    ],
    [
      'cyan blue',
      '#5DBBB8'
    ],
    [
      'cobalt blue',
      '#1581C5'
    ],
    [
      'smalt',
      '#3A4789'
    ],
    [
      'sapphire blue',
      '#004D6A'
    ],
    [
      'ultramarine',
      '#2D3289'
    ],
    [
      'prussian blue',
      '#392C87'
    ],
    [
      'union jack',
      '#385086'
    ],
    [
      'royal blue',
      '#004E8A'
    ],
    [
      'garter blue',
      '#00538D'
    ],
    [
      'delft blue',
      '#002D64'
    ],
    [
      'marine blue',
      '#1847AA'
    ],
    [
      'navy blue',
      '#001D3A'
    ],
    [
      'midnight blue',
      '#1A1F47'
    ],
    [
      'midnight blue',
      '#1A2D4F'
    ],
    [
      'midnight blue',
      '#0B004E'
    ],
    [
      'lavender',
      '#AB85B2'
    ],
    [
      'wisteria',
      '#7B639C'
    ],
    [
      'lilac',
      '#D191B4'
    ],
    [
      'mallow',
      '#C6639E'
    ],
    [
      'mallow',
      '#AB5677'
    ],
    [
      'thistle',
      '#822759'
    ],
    [
      'mineral violet',
      '#926A90'
    ],
    [
      'cobalt violet',
      '#A269A8'
    ],
    [
      'purple',
      '#4C045A'
    ],
    [
      'amethyst',
      '#634669'
    ],
    [
      'Amaranth Purple',
      '#993945'
    ],
    [
      'magenta',
      '#DE0067'
    ],
    [
      'pansy',
      '#35178C'
    ],
    [
      'fuchsia',
      '#AE006D'
    ],
    [
      'aconite violet',
      '#661065'
    ],
    [
      'mulberry',
      '#4A273B'
    ],
    [
      'heliotrope',
      '#75106D'
    ],
    [
      'plum purple',
      '#361A33'
    ],
    [
      'raspberry',
      '#8A004F'
    ],
    [
      'raisins',
      '#491830'
    ],
    [
      'wine',
      '#6B0032'
    ],
    [
      'White',
      '#FFFFFF'
    ],
    [
      'alabaster',
      '#FCDFD4'
    ],
    [
      'milk white',
      '#FDFAED'
    ],
    [
      'pale white lily',
      '#FDF6DB'
    ],
    [
      'silver',
      '#B5B9BC'
    ],
    [
      'sand',
      '#A69278'
    ],
    [
      'ash grey',
      '#C2B799'
    ],
    [
      'Smoke Grey',
      '#83857A'
    ],
    [
      'pearl green',
      '#C2CEBA'
    ],
    [
      'mouse grey',
      '#777777'
    ],
    [
      'dove gray',
      '#987C84'
    ],
    [
      'mist',
      '#AF9090'
    ],
    [
      'graphite',
      '#000000'
    ],
    [
      'goose gray',
      '#323934'
    ],
    [
      'Black',
      '#000000'
    ],
    [
      'england',
      '#FF2A2A'
    ],
    [
      'scotland',
      '#212178'
    ],
    [
      'wales',
      '#800000'
    ],
    [
      'northern Ireland',
      '#165016'
    ],
    [
      'channel Islands',
      '#0066FF'
    ],
    [
      'isle of man',
      '#D45500'
    ],
    [
      'london',
      '#000080'
    ],
    [
      'south east',
      '#44AA00'
    ],
    [
      'west country',
      '#2AD4FF'
    ],
    [
      'east anglia',
      '#D4AA00'
    ],
    [
      'east midlands',
      '#3B5781'
    ],
    [
      'west midlands',
      '#921FAF'
    ],
    [
      'yorkshire',
      '#FFEEAA'
    ],
    [
      'north west',
      '#C10000'
    ],
    [
      'north east',
      '#C87137'
    ],
    [
      'borders',
      '#D4AA00'
    ],
    [
      'south west',
      '#55D400'
    ],
    [
      'central belt',
      '#0000D4'
    ],
    [
      'highlands',
      '#B380FF'
    ],
    [
      'north east scotland',
      '#FF0000'
    ],
    [
      'hebrides',
      '#87AADE'
    ],
    [
      'orkney islands',
      '#D5D5FF'
    ],
    [
      'shetland islands',
      '#AFE9DD'
    ],
    [
      'north wales',
      '#8DD35F'
    ],
    [
      'mid wales',
      '#A0892C'
    ],
    [
      'south wales',
      '#D40000'
    ],
    [
      'county antrim',
      '#00AA00'
    ],
    [
      'county armagh',
      '#87DE87'
    ],
    [
      'county londonderry',
      '#447821'
    ],
    [
      'county down',
      '#5FD35F'
    ],
    [
      'county fermanagh',
      '#AADE87'
    ],
    [
      'county tyrone',
      '#71C837'
    ],
    [
      'oxfordshire',
      '#447821'
    ],
    [
      'buckinghamshire',
      '#5AA02C'
    ],
    [
      'berkshire',
      '#8DD35F'
    ],
    [
      'hampshire',
      '#225500'
    ],
    [
      'surrey',
      '#008000'
    ],
    [
      'west Sussex',
      '#AADE87'
    ],
    [
      'east Sussex',
      '#CCFFAA'
    ],
    [
      'kent',
      '#44AA00'
    ],
    [
      'isle of wight',
      '#B3FF80'
    ],
    [
      'gloucestershire',
      '#87CDDE'
    ],
    [
      'cornwall',
      '#2AD4FF'
    ],
    [
      'wiltshire',
      '#AAEEFF'
    ],
    [
      'somerset',
      '#80E5FF'
    ],
    [
      'dorset',
      '#216778'
    ],
    [
      'devon',
      '#0088AA'
    ],
    [
      'isles of scilly',
      '#162D50'
    ],
    [
      'hertfordshire',
      '#554400'
    ],
    [
      'essex',
      '#D3BC5F'
    ],
    [
      'bedfordshire',
      '#786721'
    ],
    [
      'cambridgeshire',
      '#A0892C'
    ],
    [
      'suffolk',
      '#E9DDAF'
    ],
    [
      'norfolk',
      '#D4AA00'
    ],
    [
      'northamptonshire',
      '#0044AA'
    ],
    [
      'leicestershire',
      '#214478'
    ],
    [
      'derbyshire',
      '#162D50'
    ],
    [
      'nottinghamshire',
      '#000080'
    ],
    [
      'lincolnshire',
      '#5599FF'
    ],
    [
      'rutland',
      '#2C5AA0'
    ],
    [
      'herefordshire',
      '#DD55FF'
    ],
    [
      'worcestershire',
      '#CD87DE'
    ],
    [
      'warwickshire',
      '#8D5FD3'
    ],
    [
      'west Midlands County',
      '#660080'
    ],
    [
      'shropshire',
      '#C837AB'
    ],
    [
      'staffordshire',
      '#800066'
    ],
    [
      'north yorkshire',
      '#FFEEAA'
    ],
    [
      'east yorkshire',
      '#D3BC5F'
    ],
    [
      'south yorkshire',
      '#E9DDAF'
    ],
    [
      'west yorkshire',
      '#FFDD55'
    ],
    [
      'cheshire',
      '#FF5555'
    ],
    [
      'merseyside',
      '#50162D'
    ],
    [
      'greater manchester',
      '#AA0000'
    ],
    [
      'lancashire',
      '#D40000'
    ],
    [
      'cumbria',
      '#FF8080'
    ],
    [
      'cleveland',
      '#784421'
    ],
    [
      'county durham',
      '#D45500'
    ],
    [
      'tyne and wear',
      '#803300'
    ],
    [
      'northumberland',
      '#C87137'
    ],
    [
      'ayrshire',
      '#338000'
    ],
    [
      'clydesdale',
      '#00D400'
    ],
    [
      'dumfries and galloway',
      '#55D400'
    ],
    [
      'isle of arran',
      '#AAFFAA'
    ],
    [
      'clydeside',
      '#0000AA'
    ],
    [
      'the lothians',
      '#2C2CA0'
    ],
    [
      'stirlingshire',
      '#0000D4'
    ],
    [
      'clackmannanshire',
      '#5F5FD3'
    ],
    [
      'argyll and bute',
      '#7F2AFF'
    ],
    [
      'highland',
      '#B380FF'
    ],
    [
      'moray',
      '#E9AFAF'
    ],
    [
      'aberdeenshire',
      '#D35F5F'
    ],
    [
      'angus',
      '#FF5555'
    ],
    [
      'perth and kinross',
      '#FFAAAA'
    ],
    [
      'fife',
      '#FF0000'
    ],
    [
      'inner hebrides',
      '#3771C8'
    ],
    [
      'outer hebrides',
      '#AFC6E9'
    ],
    [
      'anglesey',
      '#87DEAA'
    ],
    [
      'gwynedd',
      '#8DD35F'
    ],
    [
      'conwy',
      '#44AA00'
    ],
    [
      'denbighshire',
      '#71C837'
    ],
    [
      'flintshire',
      '#008000'
    ],
    [
      'wrexham',
      '#005522'
    ],
    [
      'ceredigion',
      '#DECD87'
    ],
    [
      'powys',
      '#A0892C'
    ],
    [
      'pembrokeshire',
      '#FFAAAA'
    ],
    [
      'carmarthenshire',
      '#FF5555'
    ],
    [
      'glamorgan',
      '#D40000'
    ],
    [
      'monmouthshire',
      '#D35F5F'
    ]
  ];

const colorUk = tmp.map((c) => {
    return new ColorInfo(c[0].toUpperCase(), '', c[1]);
});


export default colorUk;
