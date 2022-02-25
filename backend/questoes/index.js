class Pergunta {
  constructor(enunciado, alt_certa, alt_2, alt_3, alt_4, nivel, lang, autor) {
    this.enunciado = enunciado;
    this.alt_certa = alt_certa;
    this.alt_2 = alt_2;
    this.alt_3 = alt_3;
    this.alt_4 = alt_4;
    this.nivel = nivel;
    this.lang = lang;
    this.autor = autor;
  }
}

function setPt(perguntas) {
  perguntas.push(
    new Pergunta(
      'Nas siderúrgicas é feita a produção de ferro por meio do mineral hematita (Fe2O3), que passa por reações de oxirredução em altos-fornos. O ferro é bastante usado em nosso cotidiano, principalmente na produção de ligas metálicas, tais como o aço comum e o aço inoxidável. As ligações químicas que mantêm os átomos de ferro que são produzidos nas siderúrgicas são do tipo:',
      'Metálica.',
      'Iônica.',
      'Covalente.',
      'Dipolo-dipolo.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Quando se entra em uma sauna com corrente de ouro no pescoço, tem-se, pouco tempo depois, uma sensação de acentuado aquecimento nessa região do corpo. O fenômeno ocorre como consequência da:',
      'Transferência de calor do metal para a pele.',
      'Temperatura mais elevada da pele.',
      'Ligação metálica da corrente de ouro.',
      'Transferência de elétrons da pele para o metal.',
      'Transferência de calor da pele para o metal.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFC-CE) Nenhuma teoria convencional de ligação química é capaz de justificar as propriedades dos compostos metálicos. Investigações indicam que os sólidos metálicos são compostos de um arranjo regular de íons positivos, no qual os elétrons das ligações estão apenas parcialmente localizados. Isto significa dizer que se tem um arranjo de íons metálicos distribuídos em um “mar” de elétrons móveis. Com base nessas informações, é correto afirmar que os metais, geralmente:',
      'possuem elevadas condutividades elétrica e térmica.',
      'são solúveis em solventes apolares e possuem baixas condutividades térmica e elétrica.',
      'são insolúveis em água e possuem baixa condutividade elétrica.',
      'conduzem com facilidade a corrente elétrica e são solúveis em água.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A preocupação com o efeito estufa tem sido cada vez mais notada. Em alguns dias do verão de 2009, a temperatura na cidade de São Paulo chegou a atingir 34 ºC. O valor dessa temperatura em escala Kelvin é:',
      '307,15',
      '239,15',
      '273,15',
      '– 307,15',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Lorde Kelvin verificou experimentalmente que, quando um gás é resfriado de 0 ºC para -1 ºC, por exemplo, ele perde uma fração de sua pressão igual a 1/273,15. Raciocinou então que na temperatura de -273,15 ºC a pressão do gás se tornaria nula, ou seja, a energia cinética das partículas do gás seria igual a zero. Kelvin denominou a temperatura de -273,15 ºC de zero absoluto. Identifique a alternativa em que a conversão de unidades é incorreta:',
      '26,85 K é igual a 300 ºC.',
      '-100 ºC é igual a 173,15 K.',
      '500 k é igual a 226,85 ºC.',
      '300 k é igual a 26,85 ºC.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A razão pela qual existe um número tão elevado de compostos de carbono é:',
      'Os átomos de carbono podem unir-se formando cadeias.',
      'O átomo de carbono tem uma valência variável.',
      'O carbono reage vigorosamente com muitos elementos.',
      'Os átomos de carbono formam ligações iônicas facilmente.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Fuvest-SP) Os átomos, na molécula de um hidrocarboneto, são ligados entre si por:',
      'Ligações covalentes.',
      'Pontes de hidrogênio.',
      'Ligações iônicas.',
      'Ligações metálicas.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Qual das alternativas abaixo apresenta somente substâncias compostas:',
      'CO2, H2O, C6H12O6.',
      'N2, O3, H2O.',
      'CO, He, NH3.',
      'H2O, I2, Cl2.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFMG) Com relação ao número de fases, os sistemas podem ser classificados como homogêneos ou heterogêneos. As alternativas correlacionam adequadamente o sistema e sua classificação, exceto em:',
      'Leite/homogêneo',
      'Água de coco/heterogêneo',
      'Laranjada/ heterogêneo',
      'Água do mar filtrada/homogêneo',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Ufac) Com relação às substâncias O2, H2, H2O, Pb, CO2, O3, CaO, S8, podemos afirmar que:',
      'As substâncias O2, H2, Pb, O3 e S8 são simples.',
      'Somente CO2, CaO, S8 são substâncias compostas.',
      'Somente O2, H2 e O3 são substâncias simples.',
      'Todas as substâncias são simples.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Quando um átomo do elemento bismuto-212 (83Bi212) sofre decaimento radioativo, pode haver a formação de um átomo de polônio-212 (84Po212) ou de tálio-208 (81Tl208). Qual das alternativas abaixo indica corretamente as partículas emitidas durante esses dois possíveis decaimentos?',
      'beta e alfa.',
      'alfa e beta.',
      'gama e alfa.',
      'alfa e gama.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Unificado-RJ) 6C14 é um isótopo radiativo β-emissor, presente na atmosfera e em todos os seres vivos. A equação que representa corretamente a emissão desse radionuclídeo é:',
      '6C14 → -1β0 + 7N14',
      '6C14 + -1β0 → 5β14',
      '6C14 → -1β-1 + 7N15',
      '7N14 → 6C14 + 1β0',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFSCar-SP) Uma das aplicações nobres da energia nuclear é a síntese de radioisótopos que são aplicados na medicina, no diagnóstico e tratamento de doenças. O Brasil é um país que se destaca na pesquisa e fabricação de radioisótopos. O fósforo-32 é utilizado na medicina nuclear para tratamento de problemas vasculares. No decaimento deste radioisótopo, é formado enxofre-32, ocorrendo emissão de:',
      'partículas beta.',
      'partículas alfa.',
      'raios gama.',
      'nêutrons.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(FCM-Mg) As proteínas, formadas pela união de aminoácidos, são componentes químicos fundamentais na fisiologia e na estrutura celular dos organismos. Qual das seguintes afirmações sobre as proteínas está CORRETA?',
      'A informação requerida para o enovelamento correto de uma proteína está contida na sequência específica de aminoácidos ao longo da cadeia polipeptídica.',
      'A estabilidade da estrutura quaternária nas proteínas acontece, principalmente, devido às ligações covalentes entre as suas subunidades.',
      'A formação de uma ponte dissulfeto em uma proteína requer que os dois resíduos de cisteína participantes sejam adjacentes um ao outro na sequência primária da proteína.',
      'A anemia falciforme, causada por deficiências nutricionais, é atribuída ao rompimento das hemácias, em função da desnaturação da molécula proteica de hemoglobina, em decorrência do aumento da temperatura corporal.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A mioglobina é uma proteína que apresenta uma estrutura terciária. Trata-se de uma proteína cuja principal função é transportar o gás oxigênio até os músculos, sendo ainda a molécula responsável pela coloração vermelha de um músculo qualquer. Sobre a estrutura terciária de um mioglobina, podemos afirmar que:',
      'Na formação da estrutura terciária, temos a presença de ponte dissulfeto entre as unidades de aminoácidos.',
      'A estrutura terciária é formada principalmente por interações de hidrogênio.',
      'Na formação da estrutura terciária, existe a formação de grupos prostéticos interligados por átomos de ferro.',
      'A estrutura terciária possui aminoácidos ligados de forma sequencial.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'No ano de 2032, comemoraremos a descoberta do nêutron, partícula localizada no interior do núcleo do átomo cuja principal função é estabilizá-lo por meio da diminuição da força de repulsão entre os elétrons. Entre os cientistas citados a seguir, qual deles foi o descobridor do nêutrons?',
      'J. Chadwick',
      'E. Rutherford',
      'J.J. Thomson',
      'R. A. Millikan',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(IME-RJ) Os trabalhos de Joseph John Thomson e Ernest Rutherford resultaram em importantes contribuições na história da evolução dos modelos atômicos e no estudo de fenômenos relacionados à matéria. Das alternativas abaixo, aquela que apresenta corretamente o autor e uma de suas contribuições é:',
      'Thomson – A partir de experimentos com raios catódicos, comprovou a existência de partículas subatômicas.',
      'Rutherford – Pela primeira vez, constatou a natureza elétrica da matéria.',
      'Thomson – Constatou a indivisibilidade do átomo.',
      'Rutherford – Reconheceu a existência das partículas nucleares sem carga elétrica, denominadas nêutrons.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFTM-MG)Fogos de artifício utilizam sais de diferentes íons metálicos misturados com um material explosivo. Quando incendiados, emitem diferentes colorações. Por exemplo: sais de sódio emitem cor amarela, de bário, cor verde, e de cobre, cor azul. Essas cores são produzidas quando os elétrons excitados dos íons metálicos retornam para níveis de menor energia. O modelo atômico mais adequado para explicar esse fenômeno é o modelo de:',
      'Rutherford-Bohr.',
      'Rutherford.',
      'Thomson.',
      'Dalton.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Foram dissolvidas nove moléculas-grama de certo ácido HX em quantidade suficiente de água, mas apenas seis moléculas-grama do ácido utilizado ionizaram-se. Qual é o valor aproximado do grau de ionização desse ácido?',
      '67 %',
      '57 %',
      '47 %',
      '70 %',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(FCB Araras SP- Adaptada) Após a ionização de um ácido em água, observou-se que o número de moléculas ionizadas era o triplo do número de moléculas não ionizadas. Com base nessa observação, a porcentagem de ionização do referido ácido era:',
      '75%',
      '70%',
      '80%',
      '40%',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'No ânodo de uma célula de eletrólise sempre ocorre:',
      'Corrosão química',
      'Formação de um líquido',
      'Formação de um polo negativo',
      'Formação de gás',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(PUC-RJ) A eletrólise é um fenômeno que pode ser definido como sendo reação de:',
      'oxirredução',
      'dupla-troca',
      'deslocamento',
      'volatização catódica e anódica',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Cesgranrio) Um dos métodos de obtenção de sódio metálico é a eletrólise ígnea de cloreto de sódio. Nesse processo, com a fusão do sal, os íons:',
      'Na+ ganham elétrons e transformam-se em Na°.',
      'Na+ são atraídos para o ânodo e nele perdem elétrons.',
      'Cℓ- ganham prótons e liberam-se como gás cloro.',
      'Cℓ- cedem elétrons aos íons Na+, neutralizando as cargas elétricas.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Uerj) Em 1815, o médico inglês William Proust formulou a hipótese de que as massas atômicas de todos os elementos químicos corresponderiam a um múltiplo inteiro da massa atômica do hidrogênio. Já está comprovado, porém, que o cloro possui apenas dois isótopos e que sua massa atômica é fracionária. Os isótopos do cloro, de massas atômicas 35 e 37, estão presentes na natureza, respectivamente, nas porcentagens de:',
      '75% e 25%',
      '65% e 35%',
      '55% e 45%',
      '85% e 15%',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFPE) As massas atômicas são essenciais para os cálculos da Química. Se uma nova escala de massas atômicas médias fosse definida, baseada na suposição da massa de um átomo de carbono-12 (12C) ser exatamente 1 u, qual seria a massa atômica média do neônio? (Massa atômica média do neônio na escala atual = 20,18 u)',
      '20,18/12 u',
      '20,18 u',
      '20,18x12 u',
      '12/20,18 u',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A massa molecular do composto C12H22O11 é igual a: Dados: H=1; O=16; C=12.',
      '342 u',
      '324 u',
      '432 u',
      '243 u',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Marque a alternativa que apresenta o nome do cientista que propôs uma tabela periódica organizando os 61 elementos químicos conhecidos na época, em ordem crescente de massa atômica, e colocou-os em colunas verticais (denominadas oitavas). Cada uma dessas colunas verticais possuía sete elementos, observando-se que os elementos químicos presentes em uma mesma linha horizontal, de oitavas diferentes, apresentavam propriedades químicas semelhantes?',
      'Newlands',
      'Mendeleev',
      'Dobereiner',
      'Chancourtois',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Durante seus trabalhos com os elementos químicos, o cientista tinha o hábito de anotar as propriedades de cada um deles em fichas. Em um dado momento, no ano de 1869, ele resolveu colocar essas fichas em ordem crescente de massa atômica. Logo após organizar os elementos em ordem crescente de massa atômica, o cientista manteve o padrão, mas posicionou os elementos em colunas horizontais e verticais, respeitando as características e semelhanças dos elementos. Quem era esse cientista?',
      'Mendeleev',
      'Newlands',
      'Dobereiner',
      'Chancourtois',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(ITA-SP) Na elaboração das primeiras classificações periódicas, um dos critérios mais importantes para agrupar elementos numa mesma coluna foi observar:',
      'mesma(s) valência(s) na combinação com elementos de referência.',
      'mesma estrutura cristalina dos próprios elementos.',
      'número atômico crescente.',
      'número de massa crescente.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Uece) Dmitri Mendeleeev, químico russo (1834–1907), fez prognósticos corretos para a tabela periódica, mas não soube explicar por que ocorriam algumas inversões na ordem dos elementos. Henry Moseley (1887–1915), morto em combate durante a Primeira Guerra Mundial, contribuiu de maneira efetiva para esclarecer as dúvidas de Mendeleev ao descobrir experimentalmente:',
      'o número atômico dos elementos da tabela periódica.',
      'a primeira lei de recorrência dos elementos químicos.',
      'os gases nobres hélio e neônio.',
      'o germânio, batizado por Mendeleeev de eka-silício.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UEPI) O sangue do diabo é um líquido vermelho que logo se descora ao ser aspergido sobre um tecido branco. Para prepará-lo, adiciona-se NH4OH em água, contendo algumas gotas de fenolftaleína. A cor desaparece porque:',
      'O NH3 logo evapora.',
      'A fenolftaleína reage rapidamente com o NH4OH.',
      'O tecido branco reage com a solução formando ácido amoníaco.',
      ' A solução é assim denominada devida à sua alta viscosidade.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Uma reação química fez a temperatura de 10 g de água contidos em um calorímetro variar de 30ºC para 100ºC. Sabendo que o calor específico da água é igual a 1,0 cal g-1 ºC-1, quantas calorias foram fornecidas por essa reação?',
      '700 cal.',
      '1000 cal.',
      '1300 cal.',
      '300 cal.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Qual a variação da temperatura sofrida por 200 g de água que receberam 2 kJ de calor?',
      '2,39 ºC',
      '4,78 ºC',
      '0,01 ºC',
      '95,7 ºC',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A análise de um determinado afluente (rio) mostrou que a quantidade de íons hidrônios (H+) presentes era igual a 10–6 mol.L–1. Sabendo que é normal encontrar as águas de rios e lagos com pH variando entre 4 e 9, determine o valor do pH da água analisada.',
      '6',
      '8',
      '11',
      '13',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UNIFICADO-RJ) Após uma aula, um professor lava as mãos com água e sabão, separando, com isto, todo o giz de suas mãos. Tal processo de separação dos componentes da mistura é denominado: (Dado: Giz é basicamente formado por CaSO4):',
      'levigação.',
      'destilação.',
      'flotação.',
      'dissolução',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'No caso da extração do ouro, uma forma de diminuir a poluição provocada pela utilização do mercúrio nesse processo é separá-lo da areia e cascalho por meio da força da água. Essa forma de extração do ouro é um método de separação de misturas chamado de:',
      'levigação.',
      'destilação.',
      'flotação.',
      'dissolução',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Quando uma pessoa adquire certa quantidade de feijão na feira livre, é comum que ela chegue em casa e faça uma análise visual do produto para verificar se ele possui grãos ruins ou a presença de algumas pedras, que são separadas normalmente com as mãos. Qual das alternativas abaixo possui o nome do método de separação descrito?',
      'Catação',
      'Levigação',
      'Flotação',
      'Centrifugação',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(PUC-PR) A flotação é um dos métodos de beneficiamento do carvão mineral. Isso é possível porque a fração rica em matéria carbonosa e a fração rica em cinza apresentam diferentes:',
      'densidades;',
      'pontos de ebulição;',
      'pontos de fusão;',
      'estados físicos;',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Faap-SP) A sacarose é uma substância química proveniente da cana-de-açúcar ou da beterraba e serve como “adoçante”. A sacarose é:',
      'Carboidrato',
      'Lipídio',
      'Proteína',
      'Ácido graxo',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Durante a reação de combustão de hidrocarbonetos, há liberação de grandes quantidades de energia, principalmente sob a forma de calor. A queima, neste caso, é responsável pela formação de alguns subprodutos, quais são eles?',
      'gás carbônico e água',
      'gás oxigênio e fuligem',
      'gás carbônico e sulfetos',
      'gás ozônio e água',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Grande parte da energia que consumimos em nossos afazeres diários advém da queima de materiais denominados combustíveis. Escolha dentre as alternativas, aquela que fornece os combustíveis obtidos a partir da destilação do petróleo:',
      'gasolina e gás de cozinha',
      'álcool etílico e gasolina',
      'madeira e carvão',
      'carvão e etanol',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Unievangélica-GO) Considera-se um sistema homogêneo ou heterogêneo qualquer porção do universo que seja submetida a uma observação, sendo que a mesma pode ser uma substância pura ou uma mistura. São exemplos de sistemas homogêneos e heterogêneos, respectivamente,',
      'água destilada e água com óleo de soja.',
      'água destilada com gelo e água potável com sal.',
      'água com gelo e água barrenta.',
      'água potável e água com álcool etílico.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A Química é uma ciência que estuda as transformações e a composição de toda matéria. O termo matéria pode ser substituído por corpo ou objeto de acordo com a situação que estivermos analisando. Se estamos estudando a composição de uma porção limitada (um pedaço ou uma parte) da matéria, por exemplo, estamos estudando um corpo. Já se estivermos estudando a composição de uma porção da matéria que possui uma utilização (uso) específica para o homem, estaremos estudando um objeto. Dentro dessa perspectiva, marque a alternativa que apresenta, respectivamente, exemplos de matéria, corpo e objeto:',
      'ar, vento, ar comprimido',
      'vento, ar, ar comprimido',
      'ar comprimido, vento e ar',
      'ar comprimido, ar e vento.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Sabe-se que energia é a medida da capacidade de realizar um trabalho e que ela pode ser de diversos tipos diferentes, dependendo do trabalho que foi realizado. Assim sendo, marque a alternativa na qual o tipo de energia não corresponde ao trabalho realizado:',
      'Energia cinética: quando um corpo está em repouso.',
      'Energia mecânica: capacidade de colocar um corpo em movimento.',
      'Energia potencial: uma pedra sobre uma mesa.',
      'Energia química: formação de uma ligação química.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Qual das situações a seguir favorece a combustão do carbono presente no carvão, aumentando a velocidade dessa reação?',
      'Usar como comburente oxigênio puro.',
      'Abaixar a temperatura da vizinhança.',
      'O comburente ser o ar atmosférico.',
      'Usar um pedaço de carvão bem grande.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFRN) Certo fabricante de leite em pó desnatado, quando fornece as características nutricionais do produto, indica que cada 200 mL de leite, preparado segundo suas instruções, corresponde a 72 kcal. Com base nessa informação e nos conhecimentos sobre termoquímica, pode-se concluir:',
      'Cada 100 mL de leite consumido libera 36 kcal.',
      'A absorção do leite, pelo organismo, é uma reação endotérmica.',
      'O organismo consome 72 kcal para digerir 200 mL de leite.',
      'Em cada 200 mL de leite, 72 mL são de energia.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Tendo aprendido sobre quando um átomo se torna instável, indique qual dos elementos abaixo pode ser considerado radioativo.',
      '86Rn',
      '76Os',
      '19K',
      '24Cr',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Um isótopo radioativo sofre decaimento quando?',
      'o núcleo atômico é carregado de um número muito grande de prótons (partículas positivas), que ocupam grande parte do pequeno espaço disponível.',
      'nda.',
      'o núcleo atômico apresenta uma quantidade muito pequena de prótons e nêutrons.',
      'Quando o núcleo atômico apresenta uma grande quantidade de elétrons.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Mackenzie-SP). Necessitou-se retirar o conteúdo do tanque de combustível de um carro. Para isso, fez-se sucção com um pedaço de mangueira introduzido no tanque, deixando-se escorrer o líquido para o recipiente colocado no chão. Esse processo é chamado de:',
      'sifonação',
      'filtração',
      'decantação',
      'destilação',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFRRJ) Considerando a afirmativa: “Cloreto de potássio é solúvel em água, sendo a solução resultante imiscível em tetracloreto de carbono”; podemos separar as fases líquidas:',
      'apenas por decantação.',
      'apenas por destilação e filtração.',
      'apenas por centrifugação.',
      'apenas por filtração e centrifugação.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Sabe-se que o petróleo é formado pela mistura de diversas substâncias químicas diferentes, as quais são separadas umas das outras por meio do(a):',
      'Destilação fracionada',
      'Decantação',
      'Destilação simples',
      'Filtração a vácuo',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Asces-PE) Um erlenmeyer contém um sistema heterogêneo bifásico formado por água, acetona e tetracloreto de carbono. Sabendo que acetona e água são miscíveis entre si, que o tetracloreto de carbono é imiscível em água e em acetona, e que a acetona é um líquido mais volátil que a água, assinale os métodos mais adequados para separar esses três líquidos.',
      'Decantação e destilação fracionada.',
      'Filtração e destilação fracionada.',
      'Decantação e fusão fracionada.',
      'Centrifugação e decantação.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Qual é o nome do funil utilizado na filtração a vácuo?',
      'Buchner',
      'Almofariz',
      'Baqueta',
      'Pistilo',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFAL) Dos seguintes sistemas:\n\nI. água + gasolina\n\nII. vapor d’água + oxigênio\n\nIII. carvão + vinagre\n\nIV. água potável + partículas sólidas\n\nAqueles formados por componentes separáveis por filtração são apenas:',
      'III e IV.',
      'II e IV.',
      'II e III.',
      'I e III.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Sobre o modelos atômicos e os elétrons, julgue os itens a seguir.\n\nI. Os elétrons estão em constante movimento ao redor do núcleo, com velocidade e posição bem definidas.\n\nII. O núcleo é uma região formada por uma massa positiva, na qual os elétrons estão incrustrados.\n\nIII. Quando os elétrons são excitados, sempre pulam de uma camada mais externa para outra mais interna.\n\nIV. Os átomos sempre apresentam os prótons e os elétrons possuindo a mesma massa.\n\nV. Os elétrons foram descobertas por meio de um experimento utilizando os raios catódicos.\n\nPodemos afirmar que são incorretos os itens:',
      'II, III e IV.',
      'III e IV, apenas.',
      'II e IV, apenas.',
      'I, II, IV e V.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Os átomos apresentam a capacidade de se ligar, através da transferência ou do compartilhamento de elétrons presentes em suas camadas de valência. Seguindo a teoria do octeto, para um átomo ficar estável, ele precisa ter oito ou dois elétrons na sua camada de valência (camada eletrônica mais externa). Essa transferência pode acontecer por meio das chamadas ligações iônicas e covalentes, resultando na formação de compostos estáveis. Assim, a partir desse conhecimento, quando um átomo estabelece uma ligação química, ele a faz para atingir a estabilidade como a de um:',
      'gás nobre',
      'metal alcalino',
      'metal alcalinoterroso',
      'calcogênio',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(ITA-SP) Sobre a temperatura de ebulição de um líquido, são feitas as seguintes afirmações:\n\nI. Aumenta com o aumento da força da ligação química intramolecular.\n\nII. Aumenta com o aumento da força da ligação química intermolecular.\n\nIII. Aumenta com o aumento da pressão exercida sobre o líquido.\n\nIV. Aumenta com o aumento da quantidade de sólido dissolvido.\n\nEstão corretas:',
      'Apenas II, III e IV.',
      'Apenas III e IV.',
      'Apenas I e IV.',
      'Todas.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Um aluno de Ensino Médio vai até o açougue, a pedido de seus pais, comprar 5 kg de carne para um churrasco em sua casa. Além da carne, ele compra 8 litros de refrigerante para oferecer aos convidados. Qual das alternativas a seguir possui os valores da quantidade de carne e de refrigerante, respectivamente, nas unidades tonelada (t) e mililitro (mL)?',
      '0,005 t e 8000 mL',
      '5000 t e 8000 mL',
      '0,005 t e 0,008 mL',
      '0,005 t e 0,8 mL',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Durante uma viagem, um motorista necessitou verificar a pressão e a temperatura dos pneus do veículo. Constatou que a pressão era de 0,4 atm, enquanto a temperatura era de 75 oC. Determine os valores de pressão e temperatura em KPa e Fahrenheit, respectivamente.',
      '40,53 KPa e 167oF',
      '53, 40 KPa e 716 oF',
      '0,453 KPa e 617oF',
      '54,03 KPa e 167oF',
      3,
      'Matheus'
    )
  );

  return perguntas;
}

function setEn(perguntas) {
  perguntas.push(
    new Pergunta(
      'In steel mills, iron is produced from the mineral hematite (Fe2O3), which undergoes oxireduction reactions in blast furnaces. Iron is used a lot in our daily life, especially in the production of metallic alloys, such as common steel and stainless steel. The chemical bonds that hold together the iron atoms that are produced in steel mills are of the type:',
      'Metallic.',
      'Ionic.',
      'Covalent.',
      'Dipole-dipole.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      "(UFC-CE) No conventional chemical bonding theory is able to account for the properties of metal compounds. Investigations indicate that metallic solids are composed of a regular arrangement of positive ions, in which the bond electrons are only partially located. This means that you have an arrangement of metal ions distributed in a 'sea' of mobile electrons. Based on this information, it is correct to state that metals generally:",
      'have high electrical and thermal conductivities.',
      'are soluble in apolar solvents and have low thermal and electrical conductivities.',
      'are insoluble in water and have low electrical conductivity.',
      'easily conduct electric current and are soluble in water.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'The concern with the greenhouse effect has been increasingly noted. On some days in the summer of 2009, the temperature in the city of São Paulo reached 34 ºC. The value of this temperature in Kelvin scale is:',
      '307.15',
      '239.15',
      '273.15',
      '- 307.15',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Lord Kelvin verified experimentally that when a gas is cooled from 0 ºC to -1 ºC, for example, it loses a fraction of its pressure equal to 1/273.15. He then reasoned that at -273.15 ºC the pressure of the gas would become zero, that is, the kinetic energy of the particles of the gas would be equal to zero. Kelvin called the temperature -273.15 ºC absolute neutral. Identify the alternative in which the conversion of units is incorrect:',
      '26.85 K is equal to 300 ºC.',
      '-100 ºC is equal to 173.15 K.',
      '500 k is equal to 226.85 ºC.',
      '300 k is equal to 26.85 ºC.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'The reason there are such a large number of carbon compounds is:',
      'Carbon atoms can join together to form chains.',
      'The carbon atom has a variable valence.',
      'Carbon reacts vigorously with many elements.',
      'Carbon atoms form ionic bonds easily.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Fuvest-SP) The atoms, in the molecule of a hydrocarbon, are linked together by:',
      'Covalent bonds.',
      'Hydrogen bridges.',
      'Ionic bonds.',
      'Metal bonds.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Which of the alternatives below presents only compound substances:',
      'CO2, H2O, C6H12O6.',
      'N2, O3, H2O.',
      'CO, He, NH3.',
      'H2O, I2, Cl2.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFMG) About the number of phases, systems can be classified as homogeneous or heterogeneous. The alternatives adequately correlate the system and its classification, except in:',
      'Milk/homogeneous',
      'Coconut water/heterogeneous',
      'Orangeade/heterogeneous',
      'Filtered seawater/homogeneous',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Ufac) In relation) to the substances O2, H2, H2O, Pb, CO2, O3, CaO, S8, we can affirm that:',
      'The substances O2, H2, Pb, O3 and S8 are simple.',
      'Only CO2, CaO, S8 are compound substances.',
      'Only O2, H2 and O3 are simple substances.',
      'All substances are simple.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'When an atom of the element bismuth-212 (83Bi212) undergoes radioactive decay, an atom of polonium-212 (84Po212) or thallium-208 (81Tl208) may be formed. Which of the alternatives below correctly indicates the particles emitted during these two possible decays?',
      'beta and alpha.',
      'alpha and beta.',
      'gamma and alpha.',
      'alpha and gamma.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Unified-RJ) 6C14 is a β-emitting radiative isotope, present in the atmosphere and in all living things. The equation that correctly represents the emission of this radionuclide is:',
      '6C14 → -1β0 + 7N14',
      '6C14 + -1β0 → 5β14',
      '6C14 → -1β-1 + 7N15',
      '7N14 → 6C14 + 1β0',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFSCar-SP) One of the noble applications of nuclear energy is the synthesis of radioisotopes that are applied in medicine, in the diagnosis and treatment of diseases. Brazil is a country that stands out in the research and manufacture of radioisotopes. Phosphorus-32 is used in nuclear medicine to treat vascular problems. In the decay of this radioisotope, sulfur-32 is formed, with emission of:',
      'beta particles.',
      'alpha particles.',
      'gamma rays.',
      'neutrons.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(FCM-Mg) Proteins, formed by the union of amino acids, are fundamental chemical components in the physiology and cellular structure of organisms. Which of the following statements about proteins is CORRECT?',
      'The information required for the correct linkage of a protein is contained in the specific amino acid sequence along the polypeptide chain.',
      'The stability of the quaternary structure in proteins happens mainly due to covalent bonds between their subunits. ',
      'The formation of a disulfide bridge in a protein requires that the two participating cysteine residues are adjacent to each other in the primary sequence of the protein.',
      'Sickle cell anemia, caused by nutritional deficiencies, is attributed to the breakdown of RBCs as a result of the denaturation of the hemoglobin protein molecule due to increased body temperature.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Myoglobin is a protein that has a tertiary structure. It is a protein whose main function is to transport oxygen gas to the muscles, and it is also the molecule responsible for the red coloration of any muscle. About the tertiary structure of a myoglobin, we can state that:',
      'In the formation of the tertiary structure, we have the presence of disulfide bridge between the amino acid units.',
      'The tertiary structure is formed mainly by hydrogen interactions.',
      'In the formation of the tertiary structure, there is the formation of prosthetic groups linked by iron atoms.',
      'The tertiary structure has amino acids linked in a sequential way.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'In the year 2032, we will celebrate the discovery of the neutron, a particle located inside the nucleus of the atom whose main function is to stabilize it by reducing the repulsion force between the electrons. Among the following scientists, which one was the discoverer of the neutron?',
      'J. Chadwick',
      'E. Rutherford',
      'J.J. Thomson',
      'R. A. Millikan',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(IME-RJ) The work of Joseph John Thomson and Ernest Rutherford resulted in important contributions to the history of the evolution of atomic models and the study of phenomena related to matter. Among the alternatives below, the one that correctly presents the author and one of his contributions is:',
      'Thomson - Based on experiments with cathode rays, he proved the existence of subatomic particles.',
      'Rutherford - For the first time, he verified the electric nature of matter.',
      'Thomson - He verified the indivisibility of the atom.',
      'Rutherford - He recognized the existence of nuclear particles with no electric charge, called neutrons.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFTM-MG) Fireworks use salts of different metal ions mixed with an explosive material. When ignited, they emit different colors. For example: sodium salts emit a yellow color, barium salts a green color, and copper salts a blue color. These colors are produced when the excited electrons in the metal ions return to lower energy levels. The atomic model best suited to explain this phenomenon is the model of:',
      'Rutherford-Bohr.',
      'Rutherford.',
      'Thomson.',
      'Dalton.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Nine mole-grams of a certain acid HX were dissolved in a sufficient amount of water, but only six mole-grams of the acid used ionized. What is the approximate value of the degree of ionization of this acid?',
      '67 %',
      '57 %',
      '47 %',
      '70 %',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(FCB Araras SP- Adapted) After ionization of an acid in water, it was observed that the number of ionized molecules was three times the number of non-ionized molecules. Based on this observation, the percentage of ionization of the said acid was:',
      '75%',
      '70%',
      '80%',
      '40%',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'At the anode of an electrolysis cell always occurs:',
      'Chemical corrosion',
      'Formation of a liquid',
      'Formation of a negative pole',
      'Gas formation',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(PUC-RJ) Electrolysis is a phenomenon that can be defined as being a reaction of:',
      'oxireduction',
      'double-exchange',
      'displacement',
      'cathodic and anodic volatilization',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Cesgranrio) One of the methods to obtain metallic sodium is the igneous electrolysis of sodium chloride. In this process, with the fusion of the salt, the ions:',
      'Na+ gain electrons and become Na°.',
      'Na+ are attracted to the anode and lose electrons there.',
      'Cℓ- gain protons and are released as chlorine gas.',
      'Cℓ- give up electrons to Na+ ions, neutralizing the electric charges.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Uerj) In 1815, the English physician William Proust formulated the hypothesis that the atomic masses of all chemical elements would correspond to an integer multiple of the atomic mass of hydrogen. It has been proven, however, that chlorine has only two isotopes and that its atomic mass is fractional. The isotopes of chlorine, of atomic masses 35 and 37, are present in nature, respectively, in the percentages of:',
      '75% and 25%',
      '65% and 35%',
      '55% and 45%',
      '85% and 15%',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFPE) Atomic masses are essential for calculations in chemistry. If a new scale of average atomic masses were defined, based on the assumption that the mass of a carbon-12 (12C) atom is exactly 1 u, what would the average atomic mass of neon be? (Average atomic mass of neon on the current scale = 20.18 u)',
      '20.18/12 u',
      '20.18 u',
      '20.18x12 u',
      '12/20.18 u',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'The molecular mass of compound C12H22O11 is equal to: Data: H=1; O=16; C=12.',
      '342 u',
      '324 u',
      '432 u',
      '243 u',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Check the alternative that presents the name of the scientist who proposed a periodic table organizing the 61 chemical elements known at that time, in increasing order of atomic mass, and placed them in vertical columns (called octaves). Each of these vertical columns had seven elements, observing that the chemical elements present in the same horizontal line, from different octaves, had similar chemical properties?',
      'Newlands',
      'Mendeleev',
      'Dobereiner',
      'Chancourtois',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'During his work with the chemical elements, the scientist was in the habit of writing down the properties of each element on cards. At a certain moment, in the year 1869, he decided to put these cards in increasing order of atomic mass. Soon after organizing the elements in increasing order of atomic mass, the scientist kept the pattern, but placed the elements in horizontal and vertical columns, respecting the characteristics and similarities of the elements. Who was this scientist?',
      'Mendeleev',
      'Newlands',
      'Dobereiner',
      'Chancourtois',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(ITA-SP) In the elaboration of the first periodic classifications, one of the most important criteria for grouping elements in the same column was to observe:',
      'same valence(s) in combination with reference elements.',
      'same crystal structure of the elements themselves.',
      'increasing atomic number.',
      'increasing mass number.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      "(Uece) Dmitri Mendeleeev, Russian chemist (1834-1907), made correct predictions for the periodic table, but could not explain why some inversions occurred in the order of the elements. Henry Moseley (1887-1915), killed in combat during World War I, effectively contributed to clarify Mendeleev's doubts by experimentally discovering:",
      'the atomic number of the elements of the periodic table.',
      'the first law of recurrence of the chemical elements.',
      'the noble gases helium and neon.',
      'germanium, named by Mendeleeev as eka-silicon.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      "(UEPI) Devil's blood is a red liquid that soon discolors when sprinkled on a white cloth. To prepare it, NH4OH is added to water, containing a few drops of phenolphthalein. The color disappears because:",
      'The NH3 soon evaporates.',
      'The phenolphthalein reacts rapidly with the NH4OH.',
      'The white cloth reacts with the solution forming ammonia acid.',
      ' The solution is so named because of its high viscosity.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A chemical reaction caused the temperature of 10 g of water contained in a calorimeter to change from 30°C to 100°C. Knowing that the specific heat of water is equal to 1.0 cal g-1 ºC-1, how many calories were provided by this reaction?',
      '700 cal.',
      '1000 cal.',
      '1300 cal.',
      '300 cal.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'What is the change in temperature experienced by 200 g of water that received 2 kJ of heat?',
      '2.39 °C',
      '4.78 °C',
      '0.01 °C',
      '95.7 °C',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'The analysis of a given tributary (river) showed that the amount of hydronium ions (H+) present was equal to 10-6 mol.L-1. Knowing that it is normal to find the waters of rivers and lakes with pH ranging between 4 and 9, determine the pH value of the analyzed water.',
      '6',
      '8',
      '11',
      '13',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UNIFIED-RJ) After a class, a teacher washes his hands with soap and water, thus separating all the chalk from his hands. This process of separating the components of the mixture is called: (Given: Chalk is basically formed by CaSO4):',
      'levigation.',
      'distillation.',
      'flotation.',
      'dissolution',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'In the case of gold extraction, one way to decrease the pollution caused by using mercury in this process is to separate it from sand and gravel using the force of water. This way of extracting gold is a mixture separation method called:',
      'levigation.',
      'distillation.',
      'flotation.',
      'dissolution',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'When a person buys a certain amount of beans at the open market, it is common for him to get home and make a visual analysis of the product to check if it has bad beans or the presence of some stones, which are usually separated by hand. Which of the alternatives below has the name of the described separation method?',
      'Picking',
      'Levigation',
      'Flotation',
      'Centrifugation',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(PUC-PR) Flotation is one of the methods of beneficiation of coal. This is possible because the fraction rich in carbonaceous matter and the fraction rich in ash have different:',
      'densities;',
      'boiling points;',
      'melting points;',
      'physical states;',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Faap-SP) Sucrose is a chemical substance that comes from sugar cane or sugar beets and serves as a "sweetener". Sucrose is:',
      'Carbohydrate',
      'Lipid',
      'Protein',
      'Fatty acid',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'During the combustion reaction of hydrocarbons, large amounts of energy are released, mainly in the form of heat. The burning, in this case, is responsible for the formation of some by-products, what are they?',
      'carbon dioxide gas and water',
      'oxygen gas and soot',
      'carbon dioxide gas and sulfides',
      'ozone gas and water',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Much of the energy we consume in our daily lives comes from burning materials called fuels. Choose among the alternatives, the one that provides the fuels obtained from oil distillation:',
      'gasoline and cooking gas',
      'ethyl alcohol and gasoline',
      'wood and coal',
      'coal and ethanol',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Unievangélica-GO) A homogeneous or heterogeneous system is considered any portion of the universe that is subject to observation, and it can be a pure substance or a mixture. Examples of homogeneous and heterogeneous systems are, respectively,',
      'distilled water and water with soybean oil.',
      'distilled water with ice and drinking water with salt.',
      'water with ice and muddy water.',
      'drinking water and water with ethyl alcohol.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Chemistry is a science that studies the transformations and the composition of all matter. The term matter can be replaced by body or object according to the situation we are analyzing. If we are studying the composition of a limited portion (a piece or a part) of matter, for example, we are studying a body. If we are studying the composition of a portion of matter that has a specific use for man, we are studying an object. Within this perspective, mark the alternative that presents, respectively, examples of matter, body and object:',
      'air, wind, compressed air',
      'wind, air, compressed air',
      'compressed air, wind and air',
      'compressed air, air and wind.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'It is known that energy is the measure of the ability to do work and that it can be of several different types, depending on the work that has been done. Therefore, mark the alternative in which the type of energy does not correspond to the work done:',
      'Kinetic energy: when a body is at rest.',
      'Mechanical energy: ability to set a body in motion.',
      'Potential energy: a stone on a table.',
      'Chemical energy: formation of a chemical bond.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Which of the following favors the combustion of carbon present in coal, increasing the speed of this reaction?',
      'Use pure oxygen as the oxidizer.',
      'Lower the temperature in the vicinity.',
      'The oxidizer is atmospheric air.',
      'Use a very large piece of coal.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFRN) A manufacturer of powdered skim milk, when providing the nutritional characteristics of the product, indicates that each 200 mL of milk, prepared according to their instructions, corresponds to 72 kcal. Based on this information and knowledge about thermochemistry, one can conclude:',
      'Each 100 mL of milk consumed releases 36 kcal.',
      'The absorption of milk, by the body, is an endothermic reaction.',
      'The body consumes 72 kcal to digest 200 mL of milk.',
      'In each 200 mL of milk, 72 mL are energy.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Having learned about when an atom becomes unstable, indicate which of the elements below can be considered radioactive.',
      '86Rn',
      '76Os',
      '19K',
      '24Cr',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'A radioactive isotope decays when?',
      'the atomic nucleus is charged with a very large number of protons (positive particles), which occupy much of the small space available.',
      'nda.',
      'the atomic nucleus has a very small amount of protons and neutrons.',
      'When the atomic nucleus has a large amount of electrons.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Mackenzie-SP). It was necessary to remove the contents of the fuel tank of a car. For this, suction was performed with a piece of hose inserted in the tank, allowing the liquid to drain into a container placed on the ground. This process is called:',
      'siphoning',
      'filtration',
      'decantation',
      'distillation',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFRRJ) Considering the statement: "Potassium chloride is soluble in water, and the resulting solution is immiscible in carbon tetrachloride"; we can separate the liquid phases:',
      'only by decantation.',
      'only by distillation and filtration.',
      'only by centrifugation.',
      'only by filtration and centrifugation.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'It is known that petroleum is formed by the mixture of several different chemical substances, which are separated from each other by means of:',
      'Fractional distillation',
      'Decantation',
      'Simple distillation',
      'Vacuum filtration',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Asces-PE) A conical flask contains a two-phase heterogeneous system consisting of water, acetone and carbon tetrachloride. Knowing that acetone and water are miscible with each other, that carbon tetrachloride is immiscible in water and acetone, and that acetone is a more volatile liquid than water, mark the most appropriate methods to separate these three liquids.',
      'Decantation and fractional distillation.',
      'Filtration and fractional distillation.',
      'Decantation and fractional fusion.',
      'Centrifugation and decantation.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'What is the name of the funnel used in vacuum filtration?',
      'Buchner',
      'Mortar',
      'Shaft',
      'Pistillus',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFAL) Of the following systems:\nI. water + gasolineII. water vapor + oxygenIII. charcoal + vinegarIV. drinking water + solid particlesThe ones formed by components separable by filtration are only:',
      'III and IV.',
      'II and IV.',
      'II and III.',
      'I and III.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'About the atomic models and electrons, please examine the following items.\nI. Electrons are in constant motion around the nucleus, with well-defined speed and position. The nucleus is a region formed by a positive mass, in which the electrons are embedded. When electrons are excited, they always jump from an outermost layer to an innermost one.\nIV. Atoms always have protons and electrons having the same mass.\nV. Electrons were discovered through an experiment using cathode rays.\nWe can state that the following items are incorrect:',
      'II, III and IV.',
      'III and IV only.',
      'II and IV only.',
      'I, II, IV and V.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Atoms have the ability to bond by transferring or sharing electrons in their valence layers. Following the octet theory, for an atom to be stable it must have eight or two electrons in its valence layer (outermost electronic layer). This transfer can happen by means of the so-called ionic and covalent bonds, resulting in the formation of stable compounds. So, from this knowledge, when an atom makes a chemical bond, it does so in order to achieve stability such as that of a:',
      'noble gas',
      'alkali metal',
      'alkaline-earth metal',
      'chalcogen',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(ITA-SP) About the boiling temperature of a liquid, the following statements are made:\nI. It increases with increasing intramolecular chemical bond strength. It increases with an increase in the strength of the intermolecular chemical bond. Increases with the increase in pressure exerted on the liquid.\nIV. It increases with the increase of the amount of solid dissolved.\nThe following are correct:',
      'Only II, III and IV',
      'Only III and IV',
      'Only I and IV',
      'All',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      "A high school student goes to the butcher's, at his parents' request, to buy 5 kg of meat for a barbecue at his house. In addition to the meat, he buys 8 liters of soda to offer to the guests. Which of the following has the values of the amount of meat and soda, respectively, in the units ton (t) and milliliter (mL)?",
      '0.005 t and 8000 mL',
      '5000 t and 8000 mL',
      '0.005 t and 0.008 mL',
      '0.005 t and 0.8 mL',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      "During a trip, a driver needed to check the pressure and temperature of the vehicle's tires. He found that the pressure was 0.4 atm, while the temperature was 75 oC. Determine the values of pressure and temperature in KPa and Fahrenheit, respectively.",
      '40.53 KPa and 167oF',
      '53, 40 KPa and 716 oF',
      '0.453 KPa and 617oF',
      '54.03 KPa and 167oF',
      3,
      'Matheus'
    )
  );

  return perguntas;
}

function setEs(perguntas) {
  perguntas.push(
    new Pergunta(
      'En las acerías, el hierro se produce a través del mineral hematita (Fe2O3), que sufre reacciones de oxireducción en los altos hornos. El hierro se utiliza ampliamente en nuestra vida cotidiana, especialmente en la producción de aleaciones metálicas, como el acero común y el acero inoxidable. Los enlaces químicos que mantienen los átomos de hierro que se producen en las acerías son del tipo:',
      'Metálico',
      'Iónico',
      'Covalente',
      'Dipolo-dipolo',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Cuando entras en una sauna con una cadena de oro alrededor del cuello, pronto sentirás una fuerte sensación de calor en esa zona del cuerpo. El fenómeno se produce como consecuencia de:',
      'Transferencia de calor del metal a la piel',
      'Mayor temperatura de la piel',
      'Unión metálica de la cadena de oro',
      'Transferencia de electrones de la piel al metal',
      'Transferencia de calor de la piel al metal',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      "(UFC-CE) Ninguna teoría convencional del enlace químico es capaz de justificar las propiedades de los compuestos metálicos. Las investigaciones indican que los sólidos metálicos se componen de una disposición regular de iones positivos, en la que los electrones de los enlaces se encuentran sólo parcialmente. Esto significa decir que se tiene una disposición de iones metálicos distribuidos en un 'mar' de electrones móviles. A partir de esta información, es correcto afirmar que los metales, generalmente:",
      'tienen altas conductividades eléctricas y térmicas',
      'son solubles en disolventes apolares y tienen bajas conductividades térmicas y eléctricas',
      'son insolubles en agua y tienen baja conductividad eléctrica',
      'conducen fácilmente la corriente eléctrica y son solubles en agua',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'La preocupación por el efecto invernadero se ha hecho notar cada vez más. En algunos días del verano de 2009, la temperatura en la ciudad de São Paulo alcanzó los 34 ºC. El valor de esta temperatura en escala Kelvin es:',
      '307,15',
      '239,15',
      '273,15',
      '- 307,15',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Lord Kelvin comprobó experimentalmente que, cuando un gas se enfría de 0 ºC a -1 ºC, por ejemplo, pierde una fracción de su presión igual a 1/273,15. Entonces razonó que a una temperatura de -273,15 ºC la presión del gas sería cero, es decir, la energía cinética de las partículas del gas sería igual a cero. Kelvin denominó cero absoluto a la temperatura de -273,15 ºC. Identifica la alternativa en la que la conversión de unidades es incorrecta:',
      '26,85 K es igual a 300 ºC',
      '-100 ºC es igual a 173,15 K',
      '500 k es igual a 226,85 ºC',
      '300 k es igual a 26,85 ºC.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'La razón por la que hay un número tan grande de compuestos de carbono es:',
      'Los átomos de carbono pueden unirse para formar cadenas',
      'El átomo de carbono tiene una valencia variable',
      'El carbono reacciona vigorosamente con muchos elementos',
      'Los átomos de carbono forman enlaces iónicos fácilmente',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Fuvest-SP) Los átomos, en la molécula de un hidrocarburo, están unidos por:',
      'Enlaces covalentes.',
      'Puentes de hidrógeno.',
      'Enlaces iónicos.',
      'Enlaces metálicos.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '¿Cuál de las siguientes alternativas presenta sólo sustancias compuestas:',
      'CO2, H2O, C6H12O6.',
      'N2, O3, H2O.',
      'CO, He, NH3.',
      'H2O, I2, Cl2.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFMG) En cuanto al número de fases, los sistemas pueden clasificarse como homogéneos o heterogéneos. Las alternativas correlacionan adecuadamente el sistema y su clasificación, excepto en:',
      'Leche/homogénea',
      'Agua de coco/heterogénea',
      'Naranjada/heterogénea',
      'Agua de mar filtrada/homogénea',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Ufac) Respecto a las sustancias O2, H2, H2O, Pb, CO2, O3, CaO, S8, podemos afirmar que:',
      'Las sustancias O2, H2, Pb, O3 y S8 son simples.',
      'Sólo CO2, CaO, S8 son sustancias compuestas.',
      'Sólo O2, H2 y O3 son sustancias simples.',
      'Todas las sustancias son simples.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Cuando un átomo del elemento bismuto-212 (83Bi212) sufre una desintegración radiactiva, puede producirse la formación de un átomo de polonio-212 (84Po212) o de talio-208 (81Tl208). ¿Cuál de las alternativas siguientes indica correctamente las partículas emitidas durante estas dos posibles desintegraciones?',
      'beta y alfa',
      'alfa y beta',
      'gamma y alfa',
      'alfa y gamma',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Unificado-RJ) El 6C14 es un isótopo emisor de β, presente en la atmósfera y en todos los seres vivos. La ecuación que representa correctamente la emisión de este radionúclido es:',
      '6C14 → -1β0 + 7N14',
      '6C14 + -1β0 → 5β14',
      '6C14 → -1β-1 + 7N15',
      '7N14 → 6C14 + 1β0',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFSCar-SP) Una de las aplicaciones nobles de la energía nuclear es la síntesis de radioisótopos que se aplican en medicina, en el diagnóstico y tratamiento de enfermedades. Brasil es un país que destaca en la investigación y fabricación de radioisótopos. El fósforo-32 se utiliza en medicina nuclear para tratar problemas vasculares. En la desintegración de este radioisótopo se forma azufre-32, produciéndose la emisión de:',
      'partículas beta',
      'partículas alfa',
      'rayos gamma',
      'neutrones',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(FCM-Mg) Las proteínas, formadas por la unión de aminoácidos, son componentes químicos fundamentales en la fisiología y la estructura celular de los organismos. ¿Cuál de las siguientes afirmaciones sobre las proteínas es CORRECTA?',
      'La información necesaria para la correcta unión de una proteína está contenida en la secuencia específica de aminoácidos a lo largo de la cadena polipeptídica',
      'La estabilidad de la estructura cuaternaria en las proteínas ocurre principalmente debido a los enlaces covalentes entre sus subunidades. ',
      'La formación de un puente disulfuro en una proteína requiere que los dos residuos de cisteína participantes sean adyacentes entre sí en la secuencia primaria de la proteína',
      'La anemia falciforme, causada por deficiencias nutricionales, se atribuye a la alteración de los glóbulos rojos debido a la desnaturalización de la molécula de proteína de hemoglobina como resultado del aumento de la temperatura corporal',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'La mioglobina es una proteína que presenta una estructura terciaria. Es una proteína cuya función principal es transportar el gas oxígeno a los músculos, siendo aún la molécula responsable de la coloración roja de cualquier músculo. Sobre la estructura terciaria de una mioglobina, podemos afirmar que:',
      'En la formación de la estructura terciaria, tenemos la presencia de puente disulfuro entre las unidades de aminoácidos.',
      'La estructura terciaria se forma principalmente por interacciones de hidrógeno.',
      'En la formación de la estructura terciaria, hay la formación de grupos prostéticos unidos por átomos de hierro.',
      'La estructura terciaria tiene aminoácidos unidos de forma secuencial.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'En el año 2032, celebraremos el descubrimiento del neutrón, una partícula situada en el interior del núcleo del átomo cuya función principal es estabilizarlo disminuyendo la fuerza de repulsión entre los electrones. Entre los científicos mencionados a continuación, ¿cuál de ellos fue el descubridor del neutrón?',
      'J. Chadwick',
      'E. Rutherford',
      'J.J. Thomson',
      'R. A. Millikan',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(IME-RJ) Los trabajos de Joseph John Thomson y Ernest Rutherford dieron lugar a importantes contribuciones en la historia de la evolución de los modelos atómicos y en el estudio de los fenómenos relacionados con la materia. Entre las alternativas de abajo, la que presenta correctamente al autor y una de sus contribuciones es:',
      'Thomson - A partir de experimentos con rayos catódicos, demostró la existencia de partículas subatómicas.',
      'Rutherford - Por primera vez, verificó la naturaleza eléctrica de la materia.',
      'Thomson - Verificó la indivisibilidad del átomo.',
      'Rutherford - Reconoció la existencia de partículas nucleares sin carga eléctrica, llamadas neutrones.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFTM-MG)Los fuegos artificiales utilizan sales de diferentes iones metálicos mezclados con un material explosivo. Cuando se encienden, emiten diferentes colores. Por ejemplo: las sales de sodio emiten color amarillo, las de bario, color verde, y las de cobre, color azul. Estos colores se producen cuando los electrones excitados de los iones metálicos vuelven a niveles de energía más bajos. El modelo atómico más adecuado para explicar este fenómeno es el modelo de:',
      'Rutherford-Bohr.',
      'Rutherford.',
      'Thomson.',
      'Dalton.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Se han disuelto nueve mologramos de un determinado ácido HX en una cantidad suficiente de agua, pero sólo se han ionizado seis mologramos del ácido utilizado. ¿Cuál es el valor aproximado del grado de ionización de este ácido?',
      '67 %',
      '57 %',
      '47 %',
      '70 %',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(FCB Araras SP- Adaptado) Después de la ionización de un ácido en el agua, se observó que el número de moléculas ionizadas era tres veces el número de moléculas no ionizadas. A partir de esta observación, el porcentaje de ionización de dicho ácido fue:',
      '75%',
      '70%',
      '80%',
      '40%',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'En el ánodo de una célula de electrólisis siempre se produce:',
      'Corrosión química',
      'Formación de un líquido',
      'Formación de un polo negativo',
      'Formación de gas',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(PUC-RJ) La electrólisis es un fenómeno que puede definirse como reacción de:',
      'oxireducción',
      'doble intercambio',
      'desplazamiento',
      'volatilización catódica y anódica',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Cesgranrio) Uno de los métodos para obtener sodio metálico es la electrólisis ígnea del cloruro de sodio. En este proceso, con la fusión de la sal, los iones:',
      'Na+ ganan electrones y se convierten en Na°.',
      'Na+ son atraídos hacia el ánodo y pierden allí electrones.',
      'Cℓ- ganan protones y se liberan como gas cloro.',
      'Cℓ- ceden electrones a los iones Na+, neutralizando las cargas eléctricas.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Uerj) En 1815, el médico inglés William Proust formuló la hipótesis de que las masas atómicas de todos los elementos químicos corresponderían a un múltiplo entero de la masa atómica del hidrógeno. Sin embargo, se ha demostrado que el cloro sólo tiene dos isótopos y que su masa atómica es fraccionaria. Los isótopos del cloro, con masas atómicas de 35 y 37, están presentes en la naturaleza, respectivamente, en los siguientes porcentajes:',
      '75% y 25%',
      '65% y 35%',
      '55% y 45%',
      '85% y 15%',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFPE) Las masas atómicas son esenciales para los cálculos en química. Si se definiera una nueva escala de masas atómicas medias, basada en la suposición de que la masa de un átomo de carbono-12 (12C) es exactamente 1 u, ¿cuál sería la masa atómica media del neón? (Masa atómica media del neón en la escala actual = 20,18 u)',
      '20,18/12 u',
      '20,18 u',
      '20,18x12 u',
      '12/20,18 u',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'La masa molecular del compuesto C12H22O11 es igual a: Datos: H=1; O=16; C=12.',
      '342 u',
      '324 u',
      '432 u',
      '243 u',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Marque la alternativa que presenta el nombre del científico que propuso una tabla periódica organizando los 61 elementos químicos conocidos en ese momento, en orden creciente de masa atómica, y los colocó en columnas verticales (llamadas octavas). Cada una de estas columnas verticales tenía siete elementos, observando que los elementos químicos presentes en la misma línea horizontal, de diferentes octavas, tenían propiedades químicas similares...',
      'Newlands',
      'Mendeleev',
      'Dobereiner',
      'Chancourtois',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Durante su trabajo con los elementos químicos, el científico tenía la costumbre de anotar en tarjetas las propiedades de cada uno de ellos. En un momento dado, en el año 1869, decidió poner estas cartas en orden creciente de masa atómica. Poco después de organizar los elementos en orden creciente de masa atómica, el científico mantuvo el estándar, pero colocó los elementos en columnas horizontales y verticales, respetando las características y similitudes de los elementos. ¿Quién era este científico?',
      'Mendeleev',
      'Newlands',
      'Dobereiner',
      'Chancourtois',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(ITA-SP) En la elaboración de las primeras clasificaciones periódicas, uno de los criterios más importantes para agrupar los elementos en la misma columna era observar:',
      'la misma valencia(s) en combinación con los elementos de referencia',
      'la misma estructura cristalina de los propios elementos',
      'el aumento del número atómico',
      'el aumento del número másico',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Uece) Dmitri Mendeleeev, químico ruso (1834-1907), hizo predicciones correctas para la tabla periódica, pero no pudo explicar por qué se produjeron algunas inversiones en el orden de los elementos. Henry Moseley (1887-1915), muerto en combate durante la Primera Guerra Mundial, contribuyó eficazmente a aclarar las dudas de Mendeléyev al descubrir experimentalmente:',
      'el número atómico de los elementos de la tabla periódica',
      'la primera ley de recurrencia de los elementos químicos',
      'los gases nobles helio y neón',
      'el germanio, denominado por Mendeléyev como eka-silicio.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UEPI) La sangre del diablo es un líquido rojo que pronto se decolora cuando se rocía sobre un paño blanco. Para prepararlo, se añade NH4OH en agua, con unas gotas de fenolftaleína. El color desaparece porque:',
      'El NH3 se evapora pronto.',
      'La fenolftaleína reacciona rápidamente con el NH4OH.',
      'El tejido blanco reacciona con la solución formando ácido amoniacal.',
      ' La solución se llama así por su alta viscosidad.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Una reacción química ha hecho variar la temperatura de 10 g de agua contenida en un calorímetro de 30ºC a 100ºC. Sabiendo que el calor específico del agua es igual a 1,0 cal g-1 ºC-1, ¿cuántas calorías aportó esta reacción?',
      '700 cal.',
      '1000 cal.',
      '1300 cal.',
      '300 cal.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '¿Cuál es el cambio de temperatura experimentado por 200 g de agua que han recibido 2 kJ de calor?',
      '2,39 ºC',
      '4,78 ºC',
      '0,01 ºC',
      '95,7 ºC',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'El análisis de un afluente dado (río) mostró que la cantidad de iones hidronio (H+) presentes era igual a 10-6 mol.L-1. Sabiendo que es normal encontrar las aguas de ríos y lagos con un pH que oscila entre 4 y 9, determine el valor del pH del agua analizada.',
      '6',
      '8',
      '11',
      '13',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UNIFIED-RJ) Después de una clase, un profesor se lava las manos con agua y jabón, separando así toda la tiza de sus manos. Este proceso de separación de los componentes de la mezcla se denomina: (Dado: la tiza está formada básicamente por CaSO4):',
      'levigación',
      'destilación',
      'flotación',
      'disolución',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'En el caso de la extracción de oro, una forma de disminuir la contaminación causada por el uso de mercurio en este proceso es separarlo de la arena y la grava mediante la fuerza del agua. Esta forma de extraer el oro es un método de separación de mezclas llamado:',
      'levigación.',
      'destilación.',
      'flotación.',
      'disolución',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Cuando una persona compra una determinada cantidad de judías en el mercado abierto, es habitual que llegue a casa y haga un análisis visual del producto para comprobar si tiene judías en mal estado o la presencia de algunas piedras, que se suelen separar con las manos. ¿Cuál de las siguientes alternativas tiene el nombre del método de separación descrito?',
      'Catação',
      'Levigação',
      'Flotação',
      'Centrifugação',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(PUC-PR) La flotación es uno de los métodos de procesamiento del carbón mineral. Esto es posible porque la fracción rica en materia carbonosa y la fracción rica en cenizas tienen diferentes:',
      'densidades;',
      'puntos de ebullición;',
      'puntos de fusión;',
      'estados físicos;',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Faap-SP) La sacarosa es una sustancia química que proviene de la caña de azúcar o de la remolacha y sirve como "edulcorante". La sacarosa es:',
      'Carbohidrato',
      'Lípido',
      'Proteína',
      'Ácido graso',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Durante la reacción de combustión de los hidrocarburos, se liberan grandes cantidades de energía, principalmente en forma de calor. La combustión, en este caso, es responsable de la formación de algunos subproductos, ¿cuáles son?',
      'gas de dióxido de carbono y agua',
      'gas de oxígeno y hollín',
      'gas de dióxido de carbono y sulfuros',
      'gas de ozono y agua',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Una gran parte de la energía que consumimos en nuestros quehaceres diarios proviene de la quema de materiales llamados combustibles. Elija entre las alternativas, la que proporciona los combustibles obtenidos de la destilación del petróleo:',
      'gasolina y gas de cocina',
      'alcohol etílico y gasolina',
      'madera y carbón',
      'carbón y etanol',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Unievangélica-GO) Se considera un sistema homogéneo o heterogéneo cualquier porción del universo que se somete a una observación, y puede ser una sustancia pura o una mezcla. Ejemplos de sistemas homogéneos y heterogéneos son, respectivamente,',
      'agua destilada y agua con aceite de soja',
      'agua destilada con hielo y agua potable con sal',
      'agua con hielo y agua con barro',
      'agua potable y agua con alcohol etílico',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'La química es una ciencia que estudia las transformaciones y la composición de toda la materia. El término materia puede ser sustituido por cuerpo u objeto según la situación que estemos analizando. Si estudiamos la composición de una porción limitada (un trozo o una parte) de la materia, por ejemplo, estamos estudiando un cuerpo. Si estudiamos la composición de una porción de materia que tiene un uso específico (utilidad) para el hombre, estaremos estudiando un objeto. Dentro de esta perspectiva, marque la alternativa que presenta, respectivamente, ejemplos de materia, cuerpo y objeto:',
      'aire, viento, aire comprimido',
      'viento, aire, aire comprimido',
      'aire comprimido, viento y aire',
      'aire comprimido, aire y viento',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Se sabe que la energía es la medida de la capacidad de realizar un trabajo y que puede ser de varios tipos diferentes, según el trabajo que se haya realizado. Por lo tanto, marque la alternativa en la que el tipo de energía no se corresponde con el trabajo realizado:',
      'Energía cinética: cuando un cuerpo está en reposo.',
      'Energía mecánica: capacidad de poner un cuerpo en movimiento.',
      'Energía potencial: una piedra sobre una mesa.',
      'Energía química: formación de un enlace químico.',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '¿Cuál de las siguientes situaciones favorece la combustión del carbono presente en el carbón, aumentando la velocidad de esta reacción?',
      'Usar oxígeno puro como oxidante',
      'Bajar la temperatura del barrio',
      'El oxidante es el aire atmosférico',
      'Usar un trozo de carbón muy grande',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFRN) Un determinado fabricante de leche desnatada en polvo, al facilitar las características nutricionales del producto, indica que a cada 200 mL de leche, preparada según sus instrucciones, le corresponden 72 kcal. A partir de esta información y de los conocimientos sobre termoquímica, se puede concluir:',
      'Cada 100 mL de leche consumida libera 36 kcal.',
      'La absorción de leche, por parte del cuerpo, es una reacción endotérmica.',
      'El cuerpo consume 72 kcal para digerir 200 mL de leche.',
      'En cada 200 mL de leche, 72 mL son energía.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Habiendo aprendido sobre cuándo un átomo se vuelve inestable, indica cuáles de los elementos que aparecen a continuación pueden considerarse radiactivos.',
      '86Rn',
      '76Os',
      '19K',
      '24Cr',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Un isótopo radiactivo sufre desintegración cuando?',
      'el núcleo atómico está cargado con un número muy grande de protones (partículas positivas), que ocupan gran parte del pequeño espacio disponible.',
      'nda.',
      'el núcleo atómico tiene una cantidad muy pequeña de protones y neutrones.',
      'Cuando el núcleo atómico tiene una gran cantidad de electrones.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Mackenzie-SP). Era necesario extraer el contenido del depósito de combustible de un coche. Para ello, la aspiración se realizó con un trozo de manguera introducido en el depósito, dejando que el líquido se escurriera en un recipiente colocado en el suelo. Este proceso se llama:',
      'sifonaje',
      'filtración',
      'decantación',
      'destilación',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFRRJ) Considerando el enunciado: "El cloruro de potasio es soluble en agua, y la solución resultante es inmiscible en tetracloruro de carbono"; podemos separar las fases líquidas:',
      'sólo por decantación.',
      'sólo por destilación y filtración.',
      'sólo por centrifugación.',
      'sólo por filtración y centrifugación.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Se sabe que el petróleo está formado por la mezcla de varias sustancias químicas diferentes, que se separan entre sí mediante:',
      'Destilación fraccionada',
      'Decantación',
      'Destilación simple',
      'Filtración al vacío',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(Asces-PE) Un matraz cónico contiene un sistema heterogéneo bifásico formado por agua, acetona y tetracloruro de carbono. Sabiendo que la acetona y el agua son miscibles entre sí, que el tetracloruro de carbono es inmiscible en el agua y en la acetona, y que la acetona es un líquido más volátil que el agua, marque los métodos más adecuados para separar estos tres líquidos.',
      'Decantación y destilación fraccionada.',
      'Filtración y destilación fraccionada.',
      'Decantación y fusión fraccionada.',
      'Centrifugación y decantación.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '¿Cómo se llama el embudo utilizado en la filtración al vacío?',
      'Buchner',
      'Mortero',
      'Eje',
      'Pistilus',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(UFAL) De los siguientes sistemas:\nI. agua + gasolinaII. vapor de agua + oxígenoIII. carbón vegetal + vinagreIV. agua potable + partículas sólidasLos formados por componentes separables por filtración son sólo:',
      'III y IV.',
      'II y IV.',
      'II y III.',
      'I y III.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Sobre los modelos atómicos y los electrones, juzgue los siguientes elementos.N-. Los electrones están en constante movimiento alrededor del núcleo, con una velocidad y posición bien definidas. El núcleo es una región formada por una masa positiva, en la que están inmersos los electrones. Cuando los electrones se excitan, siempre saltan de la capa más externa a la más interna.N-IV. Los átomos siempre tienen los protones y los electrones con la misma masa. Los electrones se descubrieron mediante un experimento con rayos catódicos.NPodemos afirmar que los siguientes elementos son incorrectos:',
      'II, III y IV.',
      'Sólo III y IV.',
      'Sólo II y IV.',
      'I, II, IV y V.',
      3,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Los átomos tienen la capacidad de enlazarse, a través de la transferencia o compartición de electrones presentes en sus capas de valencia. Según la teoría del octeto, para que un átomo sea estable debe tener ocho o dos electrones en su capa de valencia (capa electrónica más externa). Esta transferencia puede producirse a través de los llamados enlaces iónicos y covalentes, lo que da lugar a la formación de compuestos estables. Así, a partir de estos conocimientos, cuando un átomo establece un enlace químico, lo hace para conseguir una estabilidad como la de un:',
      'gas noble',
      'metal alcalino',
      'metal alcalinotérreo',
      'calcógeno',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      '(ITA-SP) Sobre la temperatura de ebullición de un líquido, se hacen las siguientes afirmaciones:\nI. Aumenta con el incremento de la fuerza del enlace químico intramolecular. Aumenta con el incremento de la fuerza del enlace químico intermolecular.N-III. Aumenta con el incremento de la presión ejercida sobre el líquido.N-IV. Aumenta con el incremento de la cantidad de sólido disuelto. Son correctas:',
      'Sólo II, III y IV.',
      'Sólo III y IV.',
      'Sólo I y IV.',
      'Todas.',
      2,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Un estudiante de secundaria va a la carnicería, a petición de sus padres, a comprar 5 kg de carne para una barbacoa en su casa. Además de la carne, compra 8 litros de refresco para ofrecer a los invitados. ¿Cuál de las siguientes alternativas tiene los valores de la cantidad de carne y sosa, respectivamente, en las unidades tonelada (t) y mililitro (mL)?',
      '0,005 t y 8000 mL',
      '5000 t y 8000 mL',
      '0,005 t y 0,008 mL',
      '0,005 t y 0,8 mL',
      1,
      'Matheus'
    )
  );

  perguntas.push(
    new Pergunta(
      'Durante un viaje, un conductor necesitaba comprobar la presión y la temperatura de los neumáticos del vehículo. Encontró que la presión era de 0,4 atm, mientras que la temperatura era de 75 oC. Determine los valores de la presión y la temperatura en KPa y Fahrenheit, respectivamente.',
      '40,53 KPa y 167oF',
      '53, 40 KPa y 716 oF',
      '0,453 KPa y 617oF',
      '54,03 KPa y 167oF',
      3,
      'Matheus'
    )
  );

  return perguntas;
}

export function getPerguntas(lang) {
  let perguntas = new Array();
  switch (lang) {
    case 'pt':
      return setPt(perguntas);
    case 'en':
      return setEn(perguntas);
    case 'es':
      return setEs(perguntas);
  }
}
