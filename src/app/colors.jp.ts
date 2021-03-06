import { ColorInfo } from './colors';

const tmp = [
    [
      '桜色',
      'さくらいろ',
      '#FEF4F4'
    ],
    [
      '薄桜',
      'うすざくら',
      '#FDEFFB'
    ],
    [
      '桜鼠',
      'さくらねず',
      '#E9DFEA'
    ],
    [
      '鴇鼠',
      'ときねず',
      '#E4D2D3'
    ],
    [
      '虹色',
      'にじいろ',
      '#F6BFB5'
    ],
    [
      '珊瑚色',
      'さんごいろ',
      '#F5B1BB'
    ],
    [
      '一斤染',
      'いっこんぞめ',
      '#F5B1B4'
    ],
    [
      '宍色',
      'ししいろ',
      '#EFAB93'
    ],
    [
      '紅梅色',
      'こうばいいろ',
      '#F2A0A1'
    ],
    [
      '薄紅',
      'うすべに',
      '#F0908D'
    ],
    [
      '甚三紅',
      'じんざもみ',
      '#EE827C'
    ],
    [
      '桃色',
      'ももいろ',
      '#F09199'
    ],
    [
      '鴇色',
      'ときいろ',
      '#F4B3C2'
    ],
    [
      '撫子色',
      'なでしこいろ',
      '#EEBBCB'
    ],
    [
      '灰梅',
      'はいうめ',
      '#E8D3C7'
    ],
    [
      '灰桜',
      'はいざくら',
      '#E8D3D1'
    ],
    [
      '淡紅藤',
      'あわべにふじ',
      '#E6CDE3'
    ],
    [
      '石竹色',
      'せきちくいろ',
      '#E5ABBE'
    ],
    [
      '薄紅梅',
      'うすこうばい',
      '#E597B2'
    ],
    [
      '桃花色',
      'ももはないろ',
      '#E198B4'
    ],
    [
      '朱華',
      'はねず',
      '#EBA0A2'
    ],
    [
      '水柿',
      'みずがき',
      '#E4AB9B'
    ],
    [
      'ときがら茶',
      'ときがらちゃ',
      '#E09E87'
    ],
    [
      '退紅',
      'あらぞめ',
      '#D69090'
    ],
    [
      '薄柿',
      'うすがき',
      '#D4ACAD'
    ],
    [
      '長春色',
      'ちょうしゅんいろ',
      '#C97586'
    ],
    [
      '梅鼠',
      'うめねず',
      '#C099A0'
    ],
    [
      '鴇浅葱',
      'ときあさぎ',
      '#B88884'
    ],
    [
      '梅染',
      'うめぞめ',
      '#B48A76'
    ],
    [
      '蘇芳香',
      'すおうこう',
      '#A86965'
    ],
    [
      '浅蘇芳',
      'あさすおう',
      '#A25768'
    ],
    [
      '真朱',
      'まそお',
      '#EC6D71'
    ],
    [
      '赤紫',
      'あかむらさき',
      '#EB6EA5'
    ],
    [
      '躑躅色',
      'つつじいろ',
      '#E95295'
    ],
    [
      '牡丹色',
      'ぼたんいろ',
      '#E7609E'
    ],
    [
      '今様色',
      'いまよういろ',
      '#D0576B'
    ],
    [
      '中紅',
      'なかべに',
      '#C85179'
    ],
    [
      '薔薇色',
      'ばらいろ',
      '#E9546B'
    ],
    [
      '韓紅',
      'からくれない',
      '#E95464'
    ],
    [
      '銀朱',
      'ぎんしゅ',
      '#C85554'
    ],
    [
      '赤紅',
      'あかべに',
      '#C53D43'
    ],
    [
      '紅緋',
      'べにひ',
      '#E83929'
    ],
    [
      '赤',
      'あか',
      '#E60033'
    ],
    [
      '猩々緋',
      'しょうじょうひ',
      '#E2041B'
    ],
    [
      '紅',
      'くれない',
      '#D7003A'
    ],
    [
      '深緋',
      'こきひ',
      '#C9171E'
    ],
    [
      '緋色',
      'ひいろ',
      '#D3381C'
    ],
    [
      '赤丹',
      'あかに',
      '#CE5242'
    ],
    [
      '紅赤',
      'べにあか',
      '#D9333F'
    ],
    [
      '臙脂',
      'えんじ',
      '#B94047'
    ],
    [
      '朱 緋',
      'あけ',
      '#BA2636'
    ],
    [
      '茜色',
      'あかねいろ',
      '#B7282E'
    ],
    [
      '紅海老茶',
      'べにえびちゃ',
      '#A73836'
    ],
    [
      '蘇芳',
      'すおう',
      '#9E3D3F'
    ],
    [
      '真紅',
      'しんく',
      '#A22041'
    ],
    [
      '濃紅',
      'こいくれない',
      '#A22041'
    ],
    [
      '苺色',
      'いちごいろ',
      '#A23A52'
    ],
    [
      '象牙色',
      'ぞうげいろ',
      '#F8F4E6'
    ],
    [
      '練色',
      'ねりいろ',
      '#EDE4CD'
    ],
    [
      '灰白色',
      'かいはくしょく',
      '#E9E4D4'
    ],
    [
      '蒸栗色',
      'むしぐりいろ',
      '#EBE1A9'
    ],
    [
      '女郎花',
      'おみなえし',
      '#F2F2B0'
    ],
    [
      '枯草色',
      'かれくさいろ',
      '#E4DC8A'
    ],
    [
      '淡黄',
      'たんこう',
      '#F8E58C'
    ],
    [
      '白茶',
      'しらちゃ',
      '#DDBB99'
    ],
    [
      '赤白橡',
      'あかしろつるばみ',
      '#D7A98C'
    ],
    [
      '洗柿',
      'あらいがき',
      '#F2C9AC'
    ],
    [
      '鳥の子色',
      'とりのこいろ',
      '#FFF1CF'
    ],
    [
      '蜂蜜色',
      'はちみついろ',
      '#FDDEA5'
    ],
    [
      '肌色',
      'はだいろ',
      '#FCE2C4'
    ],
    [
      '薄卵色',
      'うすたまごいろ',
      '#FDE8D0'
    ],
    [
      '雄黄',
      'ゆうおう',
      '#F9C89B'
    ],
    [
      '洒落柿',
      'しゃれがき',
      '#F7BD8F'
    ],
    [
      '赤香',
      'あかこう',
      '#F6B894'
    ],
    [
      '砥粉色',
      'とのこいろ',
      '#F4DDA5'
    ],
    [
      '肉色',
      'にくいろ',
      '#F1BF99'
    ],
    [
      '人色',
      'ひといろ',
      '#F1BF99'
    ],
    [
      '丁子色',
      'ちょうじいろ',
      '#EFCD9A'
    ],
    [
      '香色',
      'こういろ',
      '#EFCD9A'
    ],
    [
      '薄香',
      'うすこう',
      '#F0CFA0'
    ],
    [
      '浅黄',
      'うすき',
      '#EDD3A1'
    ],
    [
      '枯色',
      'かれいろ',
      '#E0C38C'
    ],
    [
      '淡香',
      'うすこう',
      '#F3BF88'
    ],
    [
      '杏色',
      'あんずいろ',
      '#F7B977'
    ],
    [
      '東雲色',
      'しののめいろ',
      '#F19072'
    ],
    [
      '曙色',
      'あけぼのいろ',
      '#F19072'
    ],
    [
      '珊瑚朱色',
      'さんごしゅいろ',
      '#EE836F'
    ],
    [
      '深支子',
      'こきくちなし',
      '#EB9B6F'
    ],
    [
      '浅緋',
      'うすきひ',
      '#DF7163'
    ],
    [
      '真赭',
      'まそほ',
      '#D57C6B'
    ],
    [
      '洗朱',
      'あらいしゅ',
      '#D0826C'
    ],
    [
      '遠州茶',
      'えんしゅうちゃ',
      '#CA8269'
    ],
    [
      '紅樺色',
      'べにかばいろ',
      '#BB5548'
    ],
    [
      '赭',
      'そほ',
      '#AB6953'
    ],
    [
      '蘇飛',
      'そひ',
      '#CE7B51'
    ],
    [
      '小豆色',
      'あずきいろ',
      '#96514E'
    ],
    [
      '枯茶',
      'からちゃ',
      '#8D6445'
    ],
    [
      '飴色',
      'あめいろ',
      '#DEB064'
    ],
    [
      '駱駝色',
      'らくだいろ',
      '#BF7945'
    ],
    [
      '土色',
      'つちいろ',
      '#BC7634'
    ],
    [
      '黄唐茶',
      'きがらちゃ',
      '#B98C44'
    ],
    [
      '桑染',
      'くわぞめ',
      '#B79B5B'
    ],
    [
      '櫨色',
      'はじいろ',
      '#B77B57'
    ],
    [
      '黄橡',
      'きつるばみ',
      '#B68D4C'
    ],
    [
      '丁字染',
      'ちょうじぞめ',
      '#AD7D4C'
    ],
    [
      '香染',
      'こうぞめ',
      '#AD7D4C'
    ],
    [
      '枇杷茶',
      'びわちゃ',
      '#AE7C4F'
    ],
    [
      '芝翫茶',
      'しかんちゃ',
      '#AD7E4E'
    ],
    [
      '焦香',
      'こがれこう',
      '#AE7C58'
    ],
    [
      '胡桃色',
      'くるみいろ',
      '#A86F4C'
    ],
    [
      '渋紙色',
      'しぶかみいろ',
      '#946243'
    ],
    [
      '朽葉色',
      'くちばいろ',
      '#917347'
    ],
    [
      '桑茶',
      'くわちゃ',
      '#956F29'
    ],
    [
      '路考茶',
      'ろこうちゃ',
      '#8C7042'
    ],
    [
      '国防色',
      'こくぼうしょく',
      '#7B6C3E'
    ],
    [
      '伽羅色',
      'きゃらいろ',
      '#D8A373'
    ],
    [
      '江戸茶',
      'えどちゃ',
      '#CD8C5C'
    ],
    [
      '樺色',
      'かばいろ',
      '#CD5E3C'
    ],
    [
      '紅鬱金',
      'べにうこん',
      '#CB8347'
    ],
    [
      '土器色',
      'かわらけいろ',
      '#C37854'
    ],
    [
      '狐色',
      'きつねいろ',
      '#C38743'
    ],
    [
      '黄土色',
      'おうどいろ',
      '#C39143'
    ],
    [
      '琥珀色',
      'こはくいろ',
      '#BF783A'
    ],
    [
      '赤茶',
      'あかちゃ',
      '#BB5535'
    ],
    [
      '代赭',
      'たいしゃ',
      '#BB5520'
    ],
    [
      '煉瓦色',
      'れんがいろ',
      '#B55233'
    ],
    [
      '雀茶',
      'すずめちゃ',
      '#AA4F37'
    ],
    [
      '団十郎茶',
      'だんじゅうろうちゃ',
      '#9F563A'
    ],
    [
      '柿渋色',
      'かきしぶいろ',
      '#9F563A'
    ],
    [
      '紅鳶',
      'べにとび',
      '#9A493F'
    ],
    [
      '灰茶',
      'はいちゃ',
      '#98623C'
    ],
    [
      '茶色',
      'ちゃいろ',
      '#965042'
    ],
    [
      '檜皮色',
      'ひわだいろ',
      '#965036'
    ],
    [
      '鳶色',
      'とびいろ',
      '#95483F'
    ],
    [
      '柿茶',
      'かきちゃ',
      '#954E2A'
    ],
    [
      '弁柄色',
      'べんがらいろ',
      '#8F2E14'
    ],
    [
      '赤錆色',
      'あかさびいろ',
      '#8A3319'
    ],
    [
      '褐色',
      'かっしょく',
      '#8A3B00'
    ],
    [
      '栗梅',
      'くりうめ',
      '#852E19'
    ],
    [
      '紅檜皮',
      'べにひはだ',
      '#7B4741'
    ],
    [
      '海老茶',
      'えびちゃ',
      '#773C30'
    ],
    [
      '唐茶',
      'からちゃ',
      '#783C1D'
    ],
    [
      '栗色',
      'くりいろ',
      '#762F07'
    ],
    [
      '赤銅色',
      'しゃくどういろ',
      '#752100'
    ],
    [
      '錆色',
      'さびいろ',
      '#6C3524'
    ],
    [
      '赤褐色',
      'せっかっしょく',
      '#683F36'
    ],
    [
      '茶褐色',
      'ちゃかっしょく',
      '#664032'
    ],
    [
      '栗皮茶',
      'くりかわちゃ',
      '#6D3C32'
    ],
    [
      '黒茶',
      'くろちゃ',
      '#583822'
    ],
    [
      '葡萄茶',
      'えびちゃ',
      '#6C2C2F'
    ],
    [
      '葡萄色',
      'えびいろ',
      '#640125'
    ],
    [
      '萱草色',
      'かんぞういろ',
      '#F8B862'
    ],
    [
      '柑子色',
      'こうじいろ',
      '#F6AD49'
    ],
    [
      '金茶',
      'きんちゃ',
      '#F39800'
    ],
    [
      '蜜柑色',
      'みかんいろ',
      '#F08300'
    ],
    [
      '鉛丹色',
      'えんたんいろ',
      '#EC6D51'
    ],
    [
      '黄丹',
      'おうに',
      '#EE7948'
    ],
    [
      '柿色',
      'かきいろ',
      '#ED6D3D'
    ],
    [
      '黄赤',
      'きあか',
      '#EC6800'
    ],
    [
      '人参色',
      'にんじんいろ',
      '#EC6800'
    ],
    [
      '橙色',
      'だいだいいろ',
      '#EE7800'
    ],
    [
      '照柿',
      'てりがき',
      '#EB6238'
    ],
    [
      '赤橙',
      'あかだいだい',
      '#EA5506'
    ],
    [
      '金赤',
      'きんあか',
      '#EA5506'
    ],
    [
      '朱色',
      'しゅいろ',
      '#EB6101'
    ],
    [
      '小麦色',
      'こむぎいろ',
      '#E49E61'
    ],
    [
      '丹色',
      'にいろ',
      '#E45E32'
    ],
    [
      '黄茶',
      'きちゃ',
      '#E17B34'
    ],
    [
      '肉桂色',
      'にっけいいろ',
      '#DD7A56'
    ],
    [
      '赤朽葉色',
      'あかくちばいろ',
      '#DB8449'
    ],
    [
      '黄櫨染',
      'こうろぜん',
      '#D66A35'
    ],
    [
      '蒲公英色',
      'たんぽぽいろ',
      '#FFD900'
    ],
    [
      '黄色',
      'きいろ',
      '#FFD911'
    ],
    [
      '中黄',
      'ちゅうき',
      '#FFEA00'
    ],
    [
      '菜の花色',
      'なのはないろ',
      '#FFEC47'
    ],
    [
      '黄檗色',
      'きはだいろ',
      '#FEF263'
    ],
    [
      '卵色',
      'たまごいろ',
      '#FCD575'
    ],
    [
      '花葉色',
      'はなばいろ',
      '#FBD26B'
    ],
    [
      '刈安色',
      'かりやすいろ',
      '#F5E56B'
    ],
    [
      '玉蜀黍色',
      'とうもろこしいろ',
      '#EEC362'
    ],
    [
      '金糸雀色',
      'かなりあいろ',
      '#EBD842'
    ],
    [
      '黄支子色',
      'きくちなしいろ',
      '#FFDB4F'
    ],
    [
      '支子色',
      'くちなしいろ',
      '#FBCA4D'
    ],
    [
      '向日葵色',
      'ひまわりいろ',
      '#FCC800'
    ],
    [
      '山吹色',
      'やまぶきいろ',
      '#F8B500'
    ],
    [
      '鬱金色',
      'うこんいろ',
      '#FABF14'
    ],
    [
      '藤黄',
      'とうおう',
      '#F7C114'
    ],
    [
      '金色',
      'こんじき',
      '#E6B422'
    ],
    [
      '黄金',
      'こがね',
      '#E6B400'
    ],
    [
      '櫨染',
      'はじぞめ',
      '#D9A624'
    ],
    [
      '黄朽葉色',
      'きくちばいろ',
      '#D3A24F'
    ],
    [
      '山吹茶',
      'やまぶきちゃ',
      '#C89931'
    ],
    [
      '芥子色',
      'からしいろ',
      '#D0AF47'
    ],
    [
      '豆がら茶',
      'まめがらちゃ',
      '#8B9683'
    ],
    [
      '麹塵',
      'きくじん',
      '#6E7955'
    ],
    [
      '山鳩色',
      'やまばといろ',
      '#767C6B'
    ],
    [
      '利休鼠',
      'りきゅうねずみ',
      '#888E7E'
    ],
    [
      '海松茶',
      'みるちゃ',
      '#5A544B'
    ],
    [
      '藍海松茶',
      'あいみるちゃ',
      '#56564B'
    ],
    [
      '藍媚茶',
      'あいこびちゃ',
      '#555647'
    ],
    [
      '千歳茶',
      'せんさいちゃ',
      '#494A41'
    ],
    [
      '岩井茶',
      'いわいちゃ',
      '#6B6F59'
    ],
    [
      '仙斎茶',
      'せんさいちゃ',
      '#474B42'
    ],
    [
      '黒緑',
      'くろみどり',
      '#333631'
    ],
    [
      '柳煤竹',
      'やなぎすすたけ',
      '#5B6356'
    ],
    [
      '樺茶色',
      'かばちゃいろ',
      '#726250'
    ],
    [
      '空五倍子色',
      'うつぶしいろ',
      '#9D896C'
    ],
    [
      '生壁色',
      'なまかべいろ',
      '#94846A'
    ],
    [
      '肥後煤竹',
      'ひごすすたけ',
      '#897858'
    ],
    [
      '媚茶',
      'こびちゃ',
      '#716246'
    ],
    [
      '白橡',
      'しろつるばみ',
      '#CBB994'
    ],
    [
      '亜麻色',
      'あまいろ',
      '#D6C6AF'
    ],
    [
      '榛色',
      'はしばみいろ',
      '#BFA46F'
    ],
    [
      '灰汁色',
      'あくいろ',
      '#9E9478'
    ],
    [
      '利休茶',
      'りきゅうちゃ',
      '#A59564'
    ],
    [
      '鶯茶',
      'うぐいすちゃ',
      '#715C1F'
    ],
    [
      '木蘭色',
      'もくらんじき',
      '#C7B370'
    ],
    [
      '砂色',
      'すないろ',
      '#DCD3B2'
    ],
    [
      '油色',
      'あぶらいろ',
      '#A19361'
    ],
    [
      '利休色',
      'りきゅういろ',
      '#8F8667'
    ],
    [
      '梅幸茶',
      'ばいこうちゃ',
      '#887938'
    ],
    [
      '璃寛茶',
      'りかんちゃ',
      '#6A5D21'
    ],
    [
      '黄海松茶',
      'きみるちゃ',
      '#918754'
    ],
    [
      '菜種油色',
      'なたねゆいろ',
      '#A69425'
    ],
    [
      '青朽葉',
      'あおくちば',
      '#ADA250'
    ],
    [
      '根岸色',
      'ねぎしいろ',
      '#938B4B'
    ],
    [
      '鶸茶',
      'ひわちゃ',
      '#8C8861'
    ],
    [
      '柳茶',
      'やなぎちゃ',
      '#A1A46D'
    ],
    [
      '海松色',
      'みるいろ',
      '#726D40'
    ],
    [
      '鶯色',
      'うぐいすいろ',
      '#928C36'
    ],
    [
      '緑黄色',
      'りょくおうしょく',
      '#DCCB18'
    ],
    [
      '鶸色',
      'ひわいろ',
      '#D7CF3A'
    ],
    [
      '抹茶色',
      'まっちゃいろ',
      '#C5C56A'
    ],
    [
      '若草色',
      'わかくさいろ',
      '#C3D825'
    ],
    [
      '黄緑',
      'きみどり',
      '#B8D200'
    ],
    [
      '若芽色',
      'わかめいろ',
      '#E0EBAF'
    ],
    [
      '若菜色',
      'わかないろ',
      '#D8E698'
    ],
    [
      '若苗色',
      'わかなえいろ',
      '#C7DC68'
    ],
    [
      '青丹',
      'あおに',
      '#99AB4E'
    ],
    [
      '草色',
      'くさいろ',
      '#7B8D42'
    ],
    [
      '苔色',
      'こけいろ',
      '#69821B'
    ],
    [
      '萌黄',
      'もえぎ',
      '#AACF53'
    ],
    [
      '苗色',
      'なえいろ',
      '#B0CA71'
    ],
    [
      '若葉色',
      'わかばいろ',
      '#B9D08B'
    ],
    [
      '松葉色',
      'まつばいろ',
      '#839B5C'
    ],
    [
      '夏虫色',
      'なつむしいろ',
      '#CEE4AE'
    ],
    [
      '鶸萌黄',
      'ひわもえぎ',
      '#82AE46'
    ],
    [
      '柳色',
      'やなぎいろ',
      '#A8C97F'
    ],
    [
      '青白橡',
      'あおしろつるばみ',
      '#9BA88D'
    ],
    [
      '柳鼠',
      'やなぎねず',
      '#C8D5BB'
    ],
    [
      '裏葉柳',
      'うらはやなぎ',
      '#C1D8AC'
    ],
    [
      '山葵色',
      'わさびいろ',
      '#A8BF93'
    ],
    [
      '老竹色',
      'おいたけいろ',
      '#769164'
    ],
    [
      '白緑',
      'びゃくろく',
      '#D6E9CA'
    ],
    [
      '淡萌黄',
      'うすもえぎ',
      '#93CA76'
    ],
    [
      '柳染',
      'やなぎぞめ',
      '#93B881'
    ],
    [
      '薄萌葱',
      'うすもえぎ',
      '#BADCAD'
    ],
    [
      '深川鼠',
      'ふかがわねずみ',
      '#97A791'
    ],
    [
      '若緑',
      'わかみどり',
      '#98D98E'
    ],
    [
      '浅緑',
      'あさみどり',
      '#88CB7F'
    ],
    [
      '薄緑',
      'うすみどり',
      '#69B076'
    ],
    [
      '青鈍',
      'あおにび',
      '#6B7B6E'
    ],
    [
      '青磁鼠',
      'せいじねず',
      '#BED2C3'
    ],
    [
      '薄青',
      'うすあお',
      '#93B69C'
    ],
    [
      '錆青磁',
      'さびせいじ',
      '#A6C8B2'
    ],
    [
      '緑青色',
      'りょくしょういろ',
      '#47885E'
    ],
    [
      '千歳緑',
      'ちとせみどり',
      '#316745'
    ],
    [
      '若竹色',
      'わかたけいろ',
      '#68BE8D'
    ],
    [
      '緑',
      'みどり',
      '#3EB370'
    ],
    [
      '常磐色',
      'ときわいろ',
      '#007B43'
    ],
    [
      '千草鼠',
      'ちぐさねず',
      '#BED3CA'
    ],
    [
      '千草色',
      'ちぐさいろ',
      '#92B5A9'
    ],
    [
      '青磁色',
      'せいじいろ',
      '#7EBEA5'
    ],
    [
      '青竹色',
      'あおたけいろ',
      '#7EBEAB'
    ],
    [
      '常磐緑',
      'ときわみどり',
      '#028760'
    ],
    [
      '木賊色',
      'とくさいろ',
      '#3B7960'
    ],
    [
      '天鵞絨',
      'びろうど',
      '#2F5D50'
    ],
    [
      '虫襖',
      'むしあお',
      '#3A5B52'
    ],
    [
      '革色',
      'かわいろ',
      '#475950'
    ],
    [
      '深緑',
      'ふかみどり',
      '#00552E'
    ],
    [
      '鉄色',
      'てついろ',
      '#005243'
    ],
    [
      '平和色',
      'へいわいろ',
      '#203700'
    ],
    [
      '萌葱色',
      'もえぎいろ',
      '#006E50'
    ],
    [
      '花緑青',
      'はなろくしょう',
      '#00A380'
    ],
    [
      '翡翠色',
      'ひすいいろ',
      '#38B484'
    ],
    [
      '青緑',
      'あおみどり',
      '#00A498'
    ],
    [
      '水浅葱',
      'みずあさぎ',
      '#80ABA0'
    ],
    [
      '錆浅葱',
      'さびあさぎ',
      '#5C929A'
    ],
    [
      '青碧',
      'せいへき',
      '#478384'
    ],
    [
      '御召茶',
      'おめしちゃ',
      '#43676B'
    ],
    [
      '湊鼠',
      'みなとねずみ',
      '#80989B'
    ],
    [
      '高麗納戸',
      'こうらいなんど',
      '#2C4F54'
    ],
    [
      '百入茶',
      'ももしおちゃ',
      '#1F3134'
    ],
    [
      '錆鼠',
      'さびねず',
      '#47585C'
    ],
    [
      '錆鉄御納戸',
      'さびてつおなんど',
      '#485859'
    ],
    [
      '藍鼠',
      'あいねず',
      '#6C848D'
    ],
    [
      '錆御納戸',
      'さびおなんど',
      '#53727D'
    ],
    [
      '舛花色',
      'ますはないろ',
      '#5B7E91'
    ],
    [
      '熨斗目花色',
      'のしめはないろ',
      '#426579'
    ],
    [
      '御召御納戸',
      'おめしおなんど',
      '#4C6473'
    ],
    [
      '鉄御納戸',
      'てつおなんど',
      '#455765'
    ],
    [
      '紺鼠',
      'こんねず',
      '#44617B'
    ],
    [
      '藍鉄',
      'あいてつ',
      '#393F4C'
    ],
    [
      '青褐',
      'あおかち',
      '#393E4F'
    ],
    [
      '褐返',
      'かちかえし',
      '#203744'
    ],
    [
      '褐色',
      'かちいろ',
      '#4D4C61'
    ],
    [
      '月白',
      'げっぱく',
      '#EAF4FC'
    ],
    [
      '白菫色',
      'しろすみれいろ',
      '#EAEDF7'
    ],
    [
      '白花色',
      'しらはないろ',
      '#E8ECEF'
    ],
    [
      '藍白',
      'あいじろ',
      '#EBF6F7'
    ],
    [
      '白藍',
      'しらあい',
      '#C1E4E9'
    ],
    [
      '水色',
      'みずいろ',
      '#BCE2E8'
    ],
    [
      '瓶覗',
      'かめのぞき',
      '#A2D7DD'
    ],
    [
      '秘色色',
      'ひそくいろ',
      '#ABCED8'
    ],
    [
      '空色',
      'そらいろ',
      '#A0D8EF'
    ],
    [
      '勿忘草色',
      'わすれなぐさいろ',
      '#89C3EB'
    ],
    [
      '青藤色',
      'あおふじいろ',
      '#84A2D4'
    ],
    [
      '白群',
      'びゃくぐん',
      '#83CCD2'
    ],
    [
      '浅縹',
      'あさはなだ',
      '#84B9CB'
    ],
    [
      '薄花色',
      'うすはないろ',
      '#698AAB'
    ],
    [
      '納戸色',
      'なんどいろ',
      '#008899'
    ],
    [
      '浅葱色',
      'あさぎいろ',
      '#00A3AF'
    ],
    [
      '花浅葱',
      'はなあさぎ',
      '#2A83A2'
    ],
    [
      '新橋色',
      'しんばしいろ',
      '#59B9C6'
    ],
    [
      '天色',
      'あまいろ',
      '#2CA9E1'
    ],
    [
      '露草色',
      'つゆくさいろ',
      '#38A1DB'
    ],
    [
      '青',
      'あお',
      '#0095D9'
    ],
    [
      '薄藍',
      'うすあい',
      '#0094C8'
    ],
    [
      '縹色',
      'はなだいろ',
      '#2792C3'
    ],
    [
      '紺碧',
      'こんぺき',
      '#007BBB'
    ],
    [
      '薄群青',
      'うすぐんじょう',
      '#5383C3'
    ],
    [
      '薄花桜',
      'うすはなざくら',
      '#5A79BA'
    ],
    [
      '群青色',
      'ぐんじょういろ',
      '#4C6CB3'
    ],
    [
      '杜若色',
      'かきつばたいろ',
      '#3E62AD'
    ],
    [
      '瑠璃色',
      'るりいろ',
      '#1E50A2'
    ],
    [
      '薄縹',
      'うすはなだ',
      '#507EA4'
    ],
    [
      '瑠璃紺',
      'るりこん',
      '#19448E'
    ],
    [
      '紺瑠璃',
      'こんるり',
      '#164A84'
    ],
    [
      '藍色',
      'あいいろ',
      '#165E83'
    ],
    [
      '青藍',
      'せいらん',
      '#274A78'
    ],
    [
      '深縹',
      'こきはなだ',
      '#2A4073'
    ],
    [
      '紺色',
      'こんいろ',
      '#223A70'
    ],
    [
      '紺青',
      'こんじょう',
      '#192F60'
    ],
    [
      '留紺',
      'とめこん',
      '#1C305C'
    ],
    [
      '濃藍',
      'こいあい',
      '#0F2350'
    ],
    [
      '鉄紺',
      'てつこん',
      '#17184B'
    ],
    [
      '漆黒',
      'しっこく',
      '#0D0015'
    ],
    [
      '淡藤色',
      'あわふじいろ',
      '#BBC8E6'
    ],
    [
      '藤色',
      'ふじいろ',
      '#BBBCDE'
    ],
    [
      '紅掛空色',
      'べにかけそらいろ',
      '#8491C3'
    ],
    [
      '紅碧',
      'べにみどり',
      '#8491C3'
    ],
    [
      '紺桔梗',
      'こんききょう',
      '#4D5AAF'
    ],
    [
      '花色',
      'はないろ',
      '#4D5AAF'
    ],
    [
      '紺藍',
      'こんあい',
      '#4A488E'
    ],
    [
      '紅桔梗',
      'べにききょう',
      '#4D4398'
    ],
    [
      '桔梗色',
      'ききょういろ',
      '#5654A2'
    ],
    [
      '藤納戸',
      'ふじなんど',
      '#706CAA'
    ],
    [
      '紅掛花色',
      'べにかけはないろ',
      '#68699B'
    ],
    [
      '紫苑色',
      'しおんいろ',
      '#867BA9'
    ],
    [
      '白藤色',
      'しらふじいろ',
      '#DBD0E6'
    ],
    [
      '藤紫',
      'ふじむらさき',
      '#A59ACA'
    ],
    [
      '菫色',
      'すみれいろ',
      '#7058A3'
    ],
    [
      '青紫',
      'あおむらさき',
      '#674598'
    ],
    [
      '菖蒲色',
      'しょうぶいろ',
      '#674196'
    ],
    [
      '竜胆色',
      'りんどういろ',
      '#9079AD'
    ],
    [
      '江戸紫',
      'えどむらさき',
      '#745399'
    ],
    [
      '本紫',
      'ほんむらさき',
      '#65318E'
    ],
    [
      '葡萄色',
      'ぶどういろ',
      '#522F60'
    ],
    [
      '深紫',
      'ふかむらさき',
      '#493759'
    ],
    [
      '紫黒',
      'しこく',
      '#2E2930'
    ],
    [
      '紫紺',
      'しこん',
      '#460E44'
    ],
    [
      '桑の実色',
      'くわのみいろ',
      '#55295B'
    ],
    [
      '暗紅色',
      'あんこうしょく',
      '#74325C'
    ],
    [
      '紫',
      'むらさき',
      '#884898'
    ],
    [
      '楝色',
      'おうちいろ',
      '#9985BB'
    ],
    [
      '薄葡萄',
      'うすぶどう',
      '#C0A2C7'
    ],
    [
      '古代紫',
      'こだいむらさき',
      '#895B8B'
    ],
    [
      '茄子紺',
      'なすこん',
      '#824883'
    ],
    [
      '二藍',
      'ふたあい',
      '#915C84'
    ],
    [
      '京紫',
      'きょうむらさき',
      '#9D5B80'
    ],
    [
      '蒲葡',
      'えびぞめ',
      '#7A4170'
    ],
    [
      '若紫',
      'わかむらさき',
      '#BC64A2'
    ],
    [
      '紅紫',
      'べにむらさき',
      '#B44C97'
    ],
    [
      '梅紫',
      'うめむらさき',
      '#AA4C8F'
    ],
    [
      '菖蒲色',
      'あやめいろ',
      '#CC7EB1'
    ],
    [
      '紅藤色',
      'べにふじいろ',
      '#CCA6BF'
    ],
    [
      '浅紫',
      'あさむらさき',
      '#C4A3BF'
    ],
    [
      '紫水晶',
      'むらさきすいしょう',
      '#E7E7EB'
    ],
    [
      '薄梅鼠',
      'うすうめねず',
      '#DCD6D9'
    ],
    [
      '暁鼠',
      'あかつきねず',
      '#D3CFD9'
    ],
    [
      '牡丹鼠',
      'ぼたんねず',
      '#D3CCD6'
    ],
    [
      '霞色',
      'かすみいろ',
      '#C8C2C6'
    ],
    [
      '藤鼠',
      'ふじねず',
      '#A6A5C4'
    ],
    [
      '半色',
      'はしたいろ',
      '#A69ABD'
    ],
    [
      '薄色',
      'うすいろ',
      '#A89DAC'
    ],
    [
      '薄鼠',
      'うすねず',
      '#9790A4'
    ],
    [
      '鳩羽鼠',
      'はとばねずみ',
      '#9E8B8E'
    ],
    [
      '鳩羽色',
      'はとばいろ',
      '#95859C'
    ],
    [
      '桔梗鼠',
      'ききょうねず',
      '#95949A'
    ],
    [
      '紫鼠',
      'むらさきねず',
      '#71686C'
    ],
    [
      '葡萄鼠',
      'ぶどうねずみ',
      '#705B67'
    ],
    [
      '濃色',
      'こきいろ',
      '#634950'
    ],
    [
      '紫鳶',
      'むらさきとび',
      '#5F414B'
    ],
    [
      '濃鼠',
      'こいねず',
      '#4F455C'
    ],
    [
      '藤煤竹',
      'ふじすすたけ',
      '#5A5359'
    ],
    [
      '滅紫',
      'けしむらさき',
      '#594255'
    ],
    [
      '紅消鼠',
      'べにけしねずみ',
      '#524748'
    ],
    [
      '似せ紫',
      'にせむらさき',
      '#513743'
    ],
    [
      '灰黄緑',
      'はいきみどり',
      '#E6EAE3'
    ],
    [
      '蕎麦切色',
      'そばきりいろ',
      '#D4DCD6'
    ],
    [
      '薄雲鼠',
      'うすくもねず',
      '#D4DCDA'
    ],
    [
      '枯野色',
      'かれのいろ',
      '#D3CBC6'
    ],
    [
      '潤色',
      'うるみいろ',
      '#C8C2BE'
    ],
    [
      '利休白茶',
      'りきゅうしろちゃ',
      '#B3ADA0'
    ],
    [
      '茶鼠',
      'ちゃねずみ',
      '#A99E93'
    ],
    [
      '胡桃染',
      'くるみぞめ',
      '#A58F86'
    ],
    [
      '江戸鼠',
      'えどねず',
      '#928178'
    ],
    [
      '煤色',
      'すすいろ',
      '#887F7A'
    ],
    [
      '丁子茶',
      'ちょうじちゃ',
      '#B4866B'
    ],
    [
      '柴染',
      'ふしぞめ',
      '#B28C6E'
    ],
    [
      '宗伝唐茶',
      'そうでんからちゃ',
      '#A16D5D'
    ],
    [
      '砺茶',
      'とのちゃ',
      '#9F6F55'
    ],
    [
      '煎茶色',
      'せんちゃいろ',
      '#8C6450'
    ],
    [
      '銀煤竹',
      'ぎんすすだけ',
      '#856859'
    ],
    [
      '黄枯茶',
      'きがらちゃ',
      '#765C47'
    ],
    [
      '煤竹色',
      'すすたけいろ',
      '#6F514C'
    ],
    [
      '焦茶',
      'こげちゃ',
      '#6F4B3E'
    ],
    [
      '黒橡',
      'くろつるばみ',
      '#544A47'
    ],
    [
      '憲法色',
      'けんぽういろ',
      '#543F32'
    ],
    [
      '涅色',
      'くりいろ',
      '#554738'
    ],
    [
      '檳榔子染',
      'びんろうじぞめ',
      '#433D3C'
    ],
    [
      '黒鳶',
      'くろとび',
      '#432F2F'
    ],
    [
      '赤墨',
      'あかすみ',
      '#3F312B'
    ],
    [
      '黒紅',
      'くろべに',
      '#302833'
    ],
    [
      '白',
      'しろ',
      '#FFFFFF'
    ],
    [
      '胡粉色',
      'ごふんいろ',
      '#FFFFFC'
    ],
    [
      '卯の花色',
      'うのはないろ',
      '#F7FCFE'
    ],
    [
      '白磁',
      'はくじ',
      '#F8FBF8'
    ],
    [
      '生成り色',
      'きなりいろ',
      '#FBFAF5'
    ],
    [
      '乳白色',
      'にゅうはくしょく',
      '#F3F3F3'
    ],
    [
      '白練',
      'しろねり',
      '#F3F3F2'
    ],
    [
      '素色',
      'そしょく',
      '#EAE5E3'
    ],
    [
      '白梅鼠',
      'しらうめねず',
      '#E5E4E6'
    ],
    [
      '白鼠',
      'しろねず',
      '#DCDDDD'
    ],
    [
      '絹鼠',
      'きぬねず',
      '#DDDCD6'
    ],
    [
      '灰青',
      'はいあお',
      '#C0C6C9'
    ],
    [
      '銀鼠',
      'ぎんねず',
      '#AFAFB0'
    ],
    [
      '薄鈍',
      'うすにび',
      '#ADADAD'
    ],
    [
      '薄墨色',
      'うすずみいろ',
      '#A3A3A2'
    ],
    [
      '錫色',
      'すずいろ',
      '#9EA1A3'
    ],
    [
      '素鼠',
      'すねずみ',
      '#9FA0A0'
    ],
    [
      '鼠色',
      'ねずみいろ',
      '#949495'
    ],
    [
      '源氏鼠',
      'げんじねず',
      '#888084'
    ],
    [
      '灰色',
      'はいいろ',
      '#7D7D7D'
    ],
    [
      '鉛色',
      'なまりいろ',
      '#7B7C7D'
    ],
    [
      '鈍色',
      'にびいろ',
      '#727171'
    ],
    [
      '墨',
      'すみ',
      '#595857'
    ],
    [
      '丼鼠',
      'どぶねずみ',
      '#595455'
    ],
    [
      '消炭色',
      'けしずみいろ',
      '#524E4D'
    ],
    [
      '藍墨茶',
      'あいすみちゃ',
      '#474A4D'
    ],
    [
      '羊羹色',
      'ようかんいろ',
      '#383C3C'
    ],
    [
      '蝋色',
      'ろういろ',
      '#2B2B2B'
    ],
    [
      '黒',
      'くろ',
      '#2B2B2B'
    ],
    [
      '烏羽色',
      'からすばいろ',
      '#180614'
    ],
    [
      '鉄黒',
      'てつぐろ',
      '#281A14'
    ],
    [
      '濡羽色',
      'ぬればいろ',
      '#000B00'
    ],
    [
      '黒壇',
      'こくたん',
      '#250D00'
    ],
    [
      '憲法黒茶',
      'けんぽうくろちゃ',
      '#241A08'
    ],
    [
      '暗黒色',
      'あんこくしょく',
      '#16160E'
    ],
    [
      '武将色',
      'ぶしょういろ',
      '#000000'
    ]
  ];

const colorJp = tmp.map((c) => {
  return new ColorInfo(c[0], c[1], c[2]);
});


export default colorJp;
