export interface ActivityTutorial {
  id: string;
  resumo: string;
  objetivos: string[];
  beneficios: string[];
  dicas: string[];
  adaptacoes: { maisEasy: string[]; maisDificil: string[] };
  tempoIdeal: string;
  badges: { faixaEtaria: string; dificuldade: string; energia: string; estimulo: string };
}

export const TUTORIAIS: ActivityTutorial[] = [
  {
    id: "at-01",
    resumo:
      "O Jogo dos Pares usa cartinhas com figuras para treinar a memoria visual e a atenção sustentada de forma divertida. A criança precisa lembrar onde cada carta está, o que exige foco real a cada virada.",
    objetivos: [
      "Fortalecer a memória visual de curto prazo",
      "Desenvolver atenção sustentada",
      "Praticar tolerância à frustração quando erra",
      "Estimular o raciocínio espacial",
    ],
    beneficios: [
      "Melhora a capacidade de lembrar informações visuais na escola",
      "Treina o cérebro para manter o foco por mais tempo",
      "Aumenta a confiança quando a criança percebe sua evolução",
      "Cria um momento de conexão gostoso entre mãe e filho",
    ],
    dicas: [
      "Comece com apenas 4 pares (8 cartas) para não frustrar.",
      "Festeje cada par encontrado com entusiasmo genuíno.",
      "Se a criança errar, diga: 'Quase! Você vai lembrar na próxima.'",
      "Jogue junto e às vezes deixe ela ganhar para manter a motivação.",
      "Use figuras que ela ama: personagens favoritos, animais, frutas.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 3 pares (6 cartas) no começo.",
        "Deixe todas as cartas visíveis inicialmente para a criança se familiarizar.",
        "Vire as cartas devagar e deixe ela ver bem antes de cobrir.",
      ],
      maisDificil: [
        "Aumente para 8 ou 10 pares.",
        "Use figuras parecidas (tipos de frutas, tipos de animais).",
        "Cronometre e desafie a bater o proprio recorde.",
      ],
    },
    tempoIdeal:
      "15 minutos é o ideal. Crianças menores cansam por volta de 10 minutos, e tudo bem parar antes.",
    badges: {
      faixaEtaria: "3 a 7 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Cognitivo",
    },
  },
  {
    id: "at-02",
    resumo:
      "O que Sumiu? é um jogo simples e poderoso de observação. A criança memoriza objetos na mesa, fecha os olhos, e depois descobre qual desapareceu. Treina atenção visual e memória de trabalho de forma natural.",
    objetivos: [
      "Desenvolver atenção aos detalhes visuais",
      "Treinar a memória de trabalho",
      "Estimular o raciocínio dedutivo",
      "Praticar nomeação de objetos do cotidiano",
    ],
    beneficios: [
      "Ajuda a criança a prestar atenção em detalhes no ambiente",
      "Fortalece a memória de curto prazo usada na alfabetização",
      "Desenvolve vocabulário ao nomear os objetos",
      "Cria uma brincadeira que pode acontecer em qualquer comodo da casa",
    ],
    dicas: [
      "Comece com 4 a 5 objetos bem diferentes entre si.",
      "Dê tempo suficiente para ela observar antes de pedir para fechar os olhos.",
      "Se errar, dê dicas: 'Era algo que a gente usa para comer.'",
      "Deixe ela ser a 'mestre do jogo' e esconder objetos de você.",
      "Use objetos que ela conheça e goste para aumentar o engajamento.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 3 objetos bem diferentes (uma colher, um brinquedo, uma fruta).",
        "Deixe ela olhar por mais tempo antes de cobrir.",
        "Dê uma dica sobre a categoria do objeto que sumiu.",
      ],
      maisDificil: [
        "Aumente para 7 ou 8 objetos.",
        "Use objetos parecidos (varias canetas de cores diferentes).",
        "Retire dois objetos ao mesmo tempo.",
      ],
    },
    tempoIdeal:
      "15 minutos bem aproveitados. Faça de 3 a 4 rodadas, trocando os objetos para manter a curiosidade.",
    badges: {
      faixaEtaria: "3 a 8 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Cognitivo",
    },
  },
  {
    id: "at-03",
    resumo:
      "Pintura Concentrada usa o ato de colorir dentro dos limites para treinar o foco visual e o controle do olhar. Parece simples, mas exige atenção real da criança a cada movimento do lápis.",
    objetivos: [
      "Treinar atenção visual e controle motor ao mesmo tempo",
      "Desenvolver paciência e persistência",
      "Fortalecer a capacidade de seguir um objetivo por varios minutos",
      "Estimular o senso estetico e a criatividade dentro de uma estrutura",
    ],
    beneficios: [
      "Prepara o olho e a mão para a escrita",
      "Aumenta o tempo de concentração em atividades estruturadas",
      "Desenvolve a auto-regulação ao perceber quando 'saiu da linha'",
      "Cria um produto final que ela se orgulha de mostrar",
    ],
    dicas: [
      "Elogie o esforço, nao o resultado: 'Que capricho voce está colocando nisso!'",
      "Nunca critique se sair da linha. Apenas incentive na proxima vez.",
      "Ofereça lapis de cera grossos para criancas menores, lapis fino para maiores.",
      "Sente do lado e pinte junto. O exemplo acalma e motiva.",
      "Escolha desenhos com temas que ela ama: unicornio, dinossauro, heroi favorito.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use desenhos com contornos bem grossos e formas grandes.",
        "Ofereça giz de cera que desliza mais facilmente.",
        "Nao exija que fique dentro. Apenas incentive a tentar.",
      ],
      maisDificil: [
        "Use desenhos com detalhes pequenos.",
        "Peca que use lapis de cor (mais controle que giz de cera).",
        "Desafie a pintar com cores especificas em cada area.",
      ],
    },
    tempoIdeal:
      "15 minutos ou ate ela concluir o desenho. Nao interrompa se estiver no fluxo.",
    badges: {
      faixaEtaria: "3 a 9 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Visual e Motor",
    },
  },
  {
    id: "at-04",
    resumo:
      "Siga o Padrao usa sequencias de cores e formas para a criança descobrir a logica e continuar. E um jeito concreto e divertido de trabalhar raciocinio logico e atencao seletiva.",
    objetivos: [
      "Desenvolver raciocinio logico e pensamento sequencial",
      "Treinar atencao seletiva para identificar padroes",
      "Estimular a antecipacao e o planejamento",
      "Trabalhar reconhecimento de cores e formas",
    ],
    beneficios: [
      "Base para matematica: sequencias e padroes sao fundamentos essenciais",
      "Treina o cerebro para prever o que vem a seguir",
      "Desenvolve organizacao mental",
      "Aumenta o prazer em desafios cognitivos",
    ],
    dicas: [
      "Comece com sequencias de apenas 2 elementos alternados.",
      "Use objetos coloridos que a crianca possa tocar e mover.",
      "Se errar, nao corrija diretamente. Pergunte: 'O que voce acha que vem aqui?'",
      "Deixe ela criar um padrao para voce continuar. Isso aumenta muito o engajamento.",
      "Tampinhas coloridas, blocos ou macarrao pintado funcionam muito bem.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 2 cores alternando: vermelho, azul, vermelho, azul...",
        "Monte o padrao ao lado dela mostrando passo a passo.",
        "Deixe ela copiar primeiro antes de continuar sozinha.",
      ],
      maisDificil: [
        "Use 3 ou 4 elementos no padrao.",
        "Combine cor e forma: quadrado vermelho, circulo azul, triangulo verde...",
        "Mostre apenas o inicio e peca que descubra a regra sozinha.",
      ],
    },
    tempoIdeal:
      "15 minutos com 3 a 4 sequencias diferentes. Varie os materiais para manter a novidade.",
    badges: {
      faixaEtaria: "3 a 8 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Logico e Visual",
    },
  },
  {
    id: "at-05",
    resumo:
      "Caca ao Detalhe usa a brincadeira classica de 'encontre as diferencas' para treinar a atencao visual de forma intensa. A crianca precisa olhar com cuidado e comparar duas imagens ao mesmo tempo.",
    objetivos: [
      "Fortalecer a atencao visual e a percepcao de detalhes",
      "Treinar a comparacao sistematica de informacoes",
      "Desenvolver persistencia na busca de um objetivo",
      "Estimular estrategias de busca organizada",
    ],
    beneficios: [
      "Melhora a capacidade de revisao e correcao na escrita e nos calculos",
      "Treina o olho para nao pular detalhes importantes",
      "Desenvolve satisfacao ao encontrar algo dificil",
      "Pode ser feita com folhas impressas, custo zero",
    ],
    dicas: [
      "Comece com imagens simples e diferencas obvias (3 diferencas).",
      "Ensine uma estrategia: olhar de cima para baixo, parte por parte.",
      "Se travar, diga: 'Olha so para o lado esquerdo primeiro.'",
      "Cronometre somente quando ela ja domina a atividade.",
      "Pode fazer junto, cada uma buscando em uma parte da imagem.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use imagens com apenas 3 diferencas grandes e coloridas.",
        "Aponte a regiao onde a diferenca esta sem revelar qual e.",
        "Deixe ela usar o dedo para rastrear as imagens.",
      ],
      maisDificil: [
        "Use imagens com 7 ou mais diferencas sutis.",
        "Adicione limite de tempo.",
        "Use imagens em preto e branco onde as diferencas sao de forma, nao de cor.",
      ],
    },
    tempoIdeal:
      "15 minutos com 2 a 3 paginas diferentes. Pare antes de ela cansar para manter a vontade de mais.",
    badges: {
      faixaEtaria: "4 a 10 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Visual e Cognitivo",
    },
  },
  {
    id: "at-06",
    resumo:
      "Estatua Musical une movimento, alegria e controle. Quando a musica para, a crianca precisa congelar imediatamente, treinando o freio de impulsos e a atencao auditiva de forma muito prazerosa.",
    objetivos: [
      "Desenvolver controle de impulsos e auto-regulacao",
      "Treinar atencao auditiva (ouvir o sinal para agir)",
      "Estimular consciencia corporal e equilibrio",
      "Trabalhar a tolerancia a frustracao de forma leve",
    ],
    beneficios: [
      "Melhora a capacidade de parar e pensar antes de agir",
      "Desenvolve escuta ativa: a crianca aprende a prestar atencao ao som",
      "Gasta energia de forma organizada e divertida",
      "Fortalece o vinculo entre mae e filho com muita risada",
    ],
    dicas: [
      "Participe junto! Dance e congele com ela.",
      "Varie o ritmo: as vezes pause rapido, as vezes demore mais.",
      "Elogie: 'Que estatua linda! Ficou perfeita!'",
      "Nao transforme em competicao agressiva. O foco e a diversao compartilhada.",
      "Use musicas que ela ama para aumentar a empolgacao.",
    ],
    adaptacoes: {
      maisEasy: [
        "Avise que vai pausar logo: 'Prepara... ja!' antes de pausar.",
        "Aceite qualquer posicao como valida no inicio.",
        "Faca pausas mais longas para ela ter tempo de reagir.",
      ],
      maisDificil: [
        "Peca que congele em poses especificas: 'Estatua de animal!'",
        "Pause cada vez mais rapido e de forma mais surpresante.",
        "Combine regras extras: so pode usar uma perna, ou manter os bracos abertos.",
      ],
    },
    tempoIdeal:
      "15 minutos de brincadeira ativa. Perfeito para dias em que a crianca precisa gastar energia antes de uma atividade mais calma.",
    badges: {
      faixaEtaria: "2 a 7 anos",
      dificuldade: "Iniciante",
      energia: "Alta",
      estimulo: "Motor e Cognitivo",
    },
  },
  {
    id: "at-07",
    resumo:
      "Labirinto de Papel ensina a crianca a planejar antes de agir. Para resolver um labirinto, ela precisa olhar adiante, prever caminhos e corrigir erros, o que treina foco e raciocinio espacial.",
    objetivos: [
      "Desenvolver planejamento e antecipacao",
      "Treinar foco e persistencia diante de um desafio",
      "Estimular o raciocinio espacial",
      "Praticar o controle do lapis ao tracar o caminho",
    ],
    beneficios: [
      "Desenvolve habilidades de resolucao de problemas usadas em matematica",
      "Treina a capacidade de tentar, errar e tentar de novo sem desistir",
      "Melhora a coordenacao olho-mao junto com o raciocinio",
      "Pode ser feito com folhas impressas gratuitamente",
    ],
    dicas: [
      "Comece com labirintos bem simples, de poucas viradas.",
      "Incentive ela a pensar antes de tracar: 'Olha bem o caminho primeiro.'",
      "Se travar, pergunte: 'E se voce fosse pelo outro lado?'",
      "Nao resolva por ela. Dê dicas direcionais suaves.",
      "Comece com o dedo antes de usar o lapis para reduzir a ansiedade de errar.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use labirintos com apenas 2 ou 3 escolhas de caminho.",
        "Deixe os caminhos bem largos para o lapis.",
        "Permita usar o dedo para percorrer antes do lapis.",
      ],
      maisDificil: [
        "Use labirintos com muitos caminhos falsos.",
        "Adicione regras: nao pode levantar o lapis.",
        "Desafie a resolver de tras para frente.",
      ],
    },
    tempoIdeal:
      "15 minutos com 3 a 5 labirintos de dificuldade crescente. Termine sempre com um que ela consiga resolver para sair confiante.",
    badges: {
      faixaEtaria: "4 a 10 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Cognitivo e Motor",
    },
  },
  {
    id: "li-01",
    resumo:
      "Hora da Historia Inventada e uma brincadeira narrativa onde mae e filho criam juntos uma historia, cada um acrescentando um trecho. E puro estimulo de linguagem, imaginacao e conexao afetiva.",
    objetivos: [
      "Desenvolver narrativa oral e sequencia logica de eventos",
      "Ampliar vocabulario de forma contextualizada",
      "Estimular criatividade e imaginacao",
      "Treinar escuta ativa e compreensao do que o outro disse",
    ],
    beneficios: [
      "Base direta para producao de texto na escola",
      "Desenvolve a capacidade de organizar ideias em sequencia",
      "Fortalece o vinculo entre mae e filho em um momento ludico",
      "Estimula a criatividade sem pressao de 'certo ou errado'",
    ],
    dicas: [
      "Aceite qualquer direcao que a historia tome, mesmo que seja inusitada.",
      "Use expressoes que estimulem: 'E ai? O que aconteceu depois?'",
      "Se ela travar, dê uma opcao: 'O dragao foi para a floresta ou para o oceano?'",
      "Ao final, perguntem juntas: 'Qual foi a parte mais divertida?'",
      "Nao corrija a gramatica durante a brincadeira. Deixe fluir.",
    ],
    adaptacoes: {
      maisEasy: [
        "Deixe ela escolher somente um detalhe de cada vez: o nome do personagem, a cor.",
        "Use personagens que ela ja conhece para facilitar.",
        "Faca voce a maior parte da historia e peca pequenas contribuicoes.",
      ],
      maisDificil: [
        "Peca que ela crie a historia inteira e voce faca perguntas.",
        "Proponha um genero: historia de misterio, de aventura, de humor.",
        "Peca que invente nomes para todos os personagens e lugares.",
      ],
    },
    tempoIdeal:
      "15 minutos e suficiente para uma historia completa com inicio, meio e fim. Voce vai se surpreender com o que ela cria.",
    badges: {
      faixaEtaria: "3 a 9 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Linguagem e Criatividade",
    },
  },
  {
    id: "li-02",
    resumo:
      "Caixinha de Palavras Novas apresenta 3 palavras novas por sessao de forma ludica e corporal. A crianca aprende o significado, usa em frases e dramatiza com gestos, o que fixa muito mais do que uma definicao.",
    objetivos: [
      "Ampliar vocabulario ativo e passivo",
      "Desenvolver compreensao de significados em contexto",
      "Treinar uso correto de palavras em frases",
      "Estimular expressao corporal como apoio a linguagem",
    ],
    beneficios: [
      "Criancas com vocabulario mais rico tem melhor desempenho na leitura e escrita",
      "Aprender palavras com o corpo cria memorias mais duradouras",
      "Aumenta a expressividade oral e a confianca ao falar",
      "Cria um ritual semanal divertido em torno das palavras",
    ],
    dicas: [
      "Escolha palavras que aparecam no contexto da vida dela (animais, emocoes, natureza).",
      "Explique o significado com exemplos concretos, nao com definicoes.",
      "Deixe ela guardar as fichas para revisar com o pai, avos ou amigos.",
      "Revise as da semana anterior antes de apresentar as novas.",
      "Transforme em desafio: 'Consegue usar essa palavra hoje em casa?'",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 1 palavra nova por sessao.",
        "Escolha palavras com significado muito concreto e visual.",
        "Faca a dramatizacao junto com ela.",
      ],
      maisDificil: [
        "Apresente 5 palavras por sessao.",
        "Peca que ela explique o significado com proprias palavras.",
        "Desafie a criar uma historia usando todas as palavras novas.",
      ],
    },
    tempoIdeal:
      "15 minutos por sessao, 3 vezes por semana. A revisao das palavras anteriores e tao importante quanto as novas.",
    badges: {
      faixaEtaria: "3 a 9 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Linguagem e Memoria",
    },
  },
  {
    id: "li-03",
    resumo:
      "Descreva sem Mostrar e um jogo de comunicacao onde a crianca usa palavras para descrever um objeto sem mostra-lo. A mae tenta adivinhar. Treina vocabulario, organizacao do pensamento e comunicacao precisa.",
    objetivos: [
      "Desenvolver comunicacao precisa e organizada",
      "Ampliar vocabulario descritivo (textura, cor, tamanho, funcao)",
      "Treinar o pensamento analitico ao categorizar atributos",
      "Estimular escuta ativa na hora de adivinhar",
    ],
    beneficios: [
      "Desenvolve a capacidade de explicar e argumentar, essencial na escola",
      "Treina a crianca a organizar o pensamento antes de falar",
      "Amplia vocabulario de forma pratica e divertida",
      "Fortalece autoconfianca ao se comunicar com clareza",
    ],
    dicas: [
      "Faca perguntas que ajudem a expandir a descricao: 'E macio ou duro?'",
      "Quando for sua vez de descrever, exagere nas dicas para ela entender o modelo.",
      "Elogie descricoes precisas: 'Que descricao boa! Falou a cor e o tamanho!'",
      "Comece com objetos bem diferentes entre si.",
      "Nao adivinhe rapido demais quando for a vez dela descrever. Deixe ela se esforcar.",
    ],
    adaptacoes: {
      maisEasy: [
        "Deixe ela escolher entre 3 opcoes visiveis de objetos.",
        "Ajude com perguntas de sim ou nao: 'E grande?'",
        "Comece com objetos muito distintos.",
      ],
      maisDificil: [
        "Proiba o uso da categoria: nao pode dizer 'e um animal'.",
        "Use objetos parecidos para exigir descricoes mais detalhadas.",
        "Limite o numero de dicas que ela pode dar.",
      ],
    },
    tempoIdeal:
      "15 minutos com 4 a 6 objetos. Alterne quem descreve e quem adivinha a cada objeto.",
    badges: {
      faixaEtaria: "4 a 9 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Linguagem e Raciocinio",
    },
  },
  {
    id: "li-04",
    resumo:
      "Parlenda e Musiquinha usa cantigas, rimas e trava-linguas para desenvolver a consciencia fonetica de forma musical e alegre. O ritmo ajuda o cerebro a processar e memorizar os sons das palavras.",
    objetivos: [
      "Desenvolver consciencia fonetica e ritmo da lingua",
      "Treinar articulacao e pronuncia",
      "Estimular memoria de sequencias verbais",
      "Trabalhar atencao auditiva e discriminacao de sons",
    ],
    beneficios: [
      "Base direta para a alfabetizacao: criancas que brincam com sons aprendem a ler mais facilmente",
      "Melhora a pronuncia e a clareza ao falar",
      "Desenvolve memoria sequencial usada em matematica e escrita",
      "Cria momentos alegres de vinculo que a crianca guarda na memoria afetiva",
    ],
    dicas: [
      "Repita sempre mais devagar primeiro, depois va acelerando.",
      "Gestos e palmadas no ritmo ajudam muito a memorizar.",
      "Ria junto dos erros de trava-lingua. O humor facilita a aprendizagem.",
      "Revise cantigas ja aprendidas antes de apresentar uma nova.",
      "Trave-lingua para comecar: 'O rato roeu a roupa do rei de Roma.'",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece com rimas simples de 4 palavras.",
        "Cantarole junto o tempo todo para ela acompanhar.",
        "Foque no ritmo antes da letra exata.",
      ],
      maisDificil: [
        "Peca que repita trava-linguas em velocidade crescente.",
        "Invente juntas novas rimas com o nome da familia.",
        "Peca que memorize uma cantiga inteira sem ajuda.",
      ],
    },
    tempoIdeal:
      "15 minutos de pura diversao sonora. Pode ser dividido em varios momentos curtos ao longo do dia.",
    badges: {
      faixaEtaria: "2 a 8 anos",
      dificuldade: "Iniciante",
      energia: "Media",
      estimulo: "Linguagem e Audicao",
    },
  },
  {
    id: "li-05",
    resumo:
      "Sequencia de Imagens desafia a crianca a organizar figuras em ordem logica e contar a historia que elas formam. Treina narrativa, raciocinio de causa e efeito, e linguagem oral.",
    objetivos: [
      "Desenvolver compreensao de sequencia temporal e causalidade",
      "Treinar narrativa oral com inicio, meio e fim",
      "Estimular raciocinio logico aplicado a linguagem",
      "Ampliar vocabulario ao descrever cada cena",
    ],
    beneficios: [
      "Prepara diretamente para a producao de texto na escola",
      "Desenvolve pensamento logico de forma contextualizada",
      "Estimula a crianca a falar em paragrafos, nao so em palavras soltas",
      "Pode ser feita com desenhos caseiros, sem custo",
    ],
    dicas: [
      "Comece com 3 imagens de uma acao simples (acordar, tomar cafe, ir a escola).",
      "Faca perguntas: 'Isso aconteceu antes ou depois?'",
      "Se errar a ordem, pergunte: 'Isso faz sentido? O que teria que acontecer antes?'",
      "Peca que use as palavras primeiro, depois, por fim ao contar.",
      "Pode desenhar as cenas juntas antes de ordenar.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 2 imagens (antes e depois).",
        "Escolha sequencias do cotidiano que ela vive todo dia.",
        "Mostre a ordem correta uma vez antes de pedir que ela monte.",
      ],
      maisDificil: [
        "Use 5 ou 6 imagens com uma historia mais complexa.",
        "Peca que invente um titulo para a historia.",
        "Retire uma das imagens e peca que descreva o que estava la.",
      ],
    },
    tempoIdeal:
      "15 minutos com 2 a 3 sequencias diferentes. Quanto mais variadas as tematicas, mais rico o vocabulario trabalhado.",
    badges: {
      faixaEtaria: "4 a 9 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Linguagem e Logica",
    },
  },
  {
    id: "li-06",
    resumo:
      "Bingo dos Sons usa cartoes com imagens para a crianca identificar sons iniciais, rimas e silabas. E um dos exercicios mais eficazes para a consciencia fonetica, base da alfabetizacao.",
    objetivos: [
      "Desenvolver consciencia fonetica: sons iniciais, rimas e silabas",
      "Treinar discriminacao auditiva de sons da lingua",
      "Estimular associacao entre som e imagem",
      "Preparar para a associacao letra-som na alfabetizacao",
    ],
    beneficios: [
      "Uma das melhores atividades para prevenir dificuldades de leitura",
      "Treina o ouvido para perceber os sons dentro das palavras",
      "Torna a alfabetizacao mais facil e rapida",
      "Cria base neurologica para a leitura fluente",
    ],
    dicas: [
      "Comece com sons iniciais muito diferentes entre si (B, S, M).",
      "Exagere na pronuncia do som para facilitar a identificacao.",
      "Se errar, repita devagar: 'Bbb-ola. Bbb. Que outro cartao comeca com Bbb?'",
      "Faca rimas antes dos sons: e mais facil e mais divertido.",
      "Elogie mesmo quando ela identifica rimas ao acaso.",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece com apenas 3 ou 4 cartoes e sons bem distintos.",
        "Foque somente em rimas antes de trabalhar sons iniciais.",
        "Pronuncie junto com ela enquanto aponta.",
      ],
      maisDificil: [
        "Trabalhe sons no meio e no final das palavras.",
        "Use palavras com silabas complexas (br, tr, cl).",
        "Peca que invente outras palavras com o mesmo som inicial.",
      ],
    },
    tempoIdeal:
      "15 minutos com foco em 2 ou 3 sons diferentes. A regularidade e mais importante que a duracao.",
    badges: {
      faixaEtaria: "3 a 7 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Linguagem e Audicao",
    },
  },
  {
    id: "li-07",
    resumo:
      "Reconta a Historia pede que a crianca reproduza com as proprias palavras uma historia que ouviu. E uma das atividades mais completas para linguagem: exige memoria, compreensao e organizacao narrativa.",
    objetivos: [
      "Treinar compreensao textual e memoria narrativa",
      "Desenvolver organizacao do discurso oral",
      "Estimular uso de vocabulario da historia",
      "Trabalhar identificacao de elementos narrativos: personagem, lugar, problema, solucao",
    ],
    beneficios: [
      "Melhora diretamente a interpretacao de texto na escola",
      "Desenvolve a capacidade de sintetizar e organizar informacoes",
      "Amplia vocabulario ao reutilizar as palavras da historia",
      "Cria o habito de leitura compartilhada que e um dos maiores presentes da infancia",
    ],
    dicas: [
      "Nao corrija a ordem ou os detalhes. Faca perguntas: 'E depois, o que aconteceu?'",
      "Se travar, dê uma pista: 'Voce lembra o que o personagem encontrou na floresta?'",
      "Leia a mesma historia mais de uma vez. A familiaridade facilita o reconto.",
      "Estimule a usar o nome dos personagens e dos lugares.",
      "Peca que desenhe a cena favorita depois de recontar.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use historias com apenas 3 eventos principais.",
        "Faca perguntas de sim ou nao para guiar o reconto.",
        "Mostre as ilustracoes do livro enquanto ela reconta.",
      ],
      maisDificil: [
        "Peca o reconto sem ver o livro.",
        "Peca que reconte para outra pessoa da familia.",
        "Desafie a inventar um final diferente para a historia.",
      ],
    },
    tempoIdeal:
      "15 minutos: 7 minutos de leitura e 8 minutos de reconto e conversa sobre a historia.",
    badges: {
      faixaEtaria: "4 a 10 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Linguagem e Memoria",
    },
  },
  {
    id: "co-01",
    resumo:
      "Rasgando e Colando usa o ato simples de rasgar papel e colar em um contorno desenhado para trabalhar a forca dos dedos, a coordenacao bimanual e a motricidade fina de forma muito prazerosa.",
    objetivos: [
      "Desenvolver a pinca digital e a forca das maos",
      "Treinar coordenacao bimanual (as duas maos trabalhando juntas)",
      "Estimular precisao ao colar dentro de um contorno",
      "Trabalhar planejamento motor ao rasgar pedacos do tamanho adequado",
    ],
    beneficios: [
      "Fortalece os musculos das maos essenciais para a escrita",
      "Prepara a crianca para usar tesoura com mais controle",
      "Cria um produto artistico com resultado visual atraente",
      "Desenvolve paciencia ao trabalhar em etapas",
    ],
    dicas: [
      "Mostre como rasgar: uma mao puxa, a outra segura. E uma habilidade que precisa ser ensinada.",
      "Elogie pedacos pequenos: 'Que pedacinho caprichado!'",
      "Use papel colorido, paginas de revista, papel de seda para variar a textura.",
      "Nao exija que fique exatamente dentro do contorno. O processo importa mais.",
      "Enquanto ela cola, converse sobre o que esta desenhando.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use papel de seda ou papel tissue, que rasga mais facilmente.",
        "Faca contornos bem grandes (sol enorme, casa grande).",
        "Ajude ela a iniciar o rasgo.",
      ],
      maisDificil: [
        "Use papel cartao, que e mais resistente e exige mais forca.",
        "Faca contornos com formas menores e mais detalhadas.",
        "Peca que organize por cor ao colar.",
      ],
    },
    tempoIdeal:
      "15 minutos. E uma atividade que pode durar mais se ela estiver no fluxo. Nao interrompa.",
    badges: {
      faixaEtaria: "2 a 7 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Motor Fino e Criativo",
    },
  },
  {
    id: "co-02",
    resumo:
      "Encaixe de Tampas usa potes e garrafas do dia a dia para trabalhar a motricidade fina de forma concreta e real. Rosquear tampas exige coordenacao, forca e precisao dos dedos.",
    objetivos: [
      "Desenvolver a pinca e a rotacao do punho",
      "Treinar coordenacao olho-mao na tarefa de encaixe",
      "Estimular categorizacao ao associar tampa ao pote correto",
      "Fortalecer musculatura intrinseca das maos",
    ],
    beneficios: [
      "Melhora a habilidade de usar botoes, zippers e fechaduras",
      "Prepara a mao para o controle do lapis na escrita",
      "E uma atividade de vida pratica que desenvolve autonomia",
      "Pode ser feita com materiais que voce ja tem em casa",
    ],
    dicas: [
      "Comece com tampas de pressao (nao de rosca) para as menores.",
      "Misture tamanhos bem diferentes para que o encaixe seja obvio.",
      "Adicione tampas coloridas e peca que encaixe por cor tambem.",
      "Cronometre nas sessoes seguintes para adicionar desafio.",
      "Inclua garrafas de shampoo, potes de iogurte, caixas com tampa.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 3 pares de pote e tampa bem diferentes.",
        "Prefira tampas de pressao que encaixam com movimento vertical.",
        "Ajude a posicionar antes de ela apertar.",
      ],
      maisDificil: [
        "Use tampas de rosca de varios tamanhos.",
        "Adicione tampas parecidas para exigir mais atencao.",
        "Vende os olhos e peca que encaixe pelo tato.",
      ],
    },
    tempoIdeal:
      "15 minutos com varios ciclos de encaixar e desenroscar. A repeticao e o que fortalece os musculos.",
    badges: {
      faixaEtaria: "2 a 6 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Motor Fino",
    },
  },
  {
    id: "co-03",
    resumo:
      "Tracado Guiado usa folhas com pontilhados para a crianca treinar o controle do lapis. Seguir linhas, curvas e formas desenvolve a habilidade motora fina essencial para a escrita.",
    objetivos: [
      "Desenvolver controle do lapis e pressao adequada",
      "Treinar coordenacao olho-mao em tracos precisos",
      "Estimular a postura correta na pegada do lapis",
      "Trabalhar atencao visual ao seguir o pontilhado",
    ],
    beneficios: [
      "Prepara diretamente para a escrita de letras e numeros",
      "Reduz a tensao e o cansaco ao escrever",
      "Desenvolve controle de velocidade e pressao no papel",
      "Cria confianca ao ver a melhora progressiva dos tracos",
    ],
    dicas: [
      "Ensine a pegada em tripe: polegar, indicador e medio segurando o lapis.",
      "Observe a pressao: lapis nao deve fazer buraco no papel.",
      "Comece sempre com linhas horizontais, depois verticais, depois curvas.",
      "Elogie a consistencia do traco, nao so o resultado final.",
      "Se a mao cansar, pare. Forcas os musculos pequenos e contraproducente.",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece com linhas bem largas e pontilhados grandes.",
        "Deixe ela tracar com o dedo antes de usar o lapis.",
        "Use lapis jumbo ou giz de cera que e mais facil de segurar.",
      ],
      maisDificil: [
        "Use pontilhados menores e mais proximos.",
        "Evolua para tracados de letras em pontilhado.",
        "Peca que trate com o lapis em pe (folha na parede) para aumentar o desafio.",
      ],
    },
    tempoIdeal:
      "15 minutos maximos. A qualidade dos tracos cai apos o cansaco muscular. Melhor parar cedo e voltar descansado.",
    badges: {
      faixaEtaria: "3 a 7 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Motor Fino e Visual",
    },
  },
  {
    id: "co-04",
    resumo:
      "Boliche Caseiro usa garrafas PET e uma bolinha para treinar coordenacao olho-mao, forca controlada e calculo de trajetoria. E alegre, ativo e muito eficaz para o desenvolvimento motor.",
    objetivos: [
      "Desenvolver coordenacao olho-mao no lancamento",
      "Treinar calibragem de forca e direcao",
      "Estimular noções de distancia e espaco",
      "Trabalhar frustração e motivacao ao tentar melhorar o proprio recorde",
    ],
    beneficios: [
      "Desenvolve habilidades motoras amplas que suportam as finas",
      "Incentiva atividade fisica de forma ludica",
      "Trabalha persistencia ao tentar bater o recorde",
      "Pode ser jogado com toda a familia, criando momentos de conexao",
    ],
    dicas: [
      "Comece com a crianca bem perto das garrafas para garantir sucesso inicial.",
      "Aumente a distancia progressivamente conforme ela acerta.",
      "Anote o recorde em um papel para criar senso de progresso.",
      "Deixe ela montar as garrafas depois de cada jogada: isso e coordenacao tambem.",
      "Varie o tamanho da bola para mudar o desafio.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use so 3 garrafas bem proximas.",
        "Deixe a crianca lancar de perto.",
        "Use uma bola maior e mais leve.",
      ],
      maisDificil: [
        "Use 9 ou 10 garrafas em formacao triangular.",
        "Aumente a distancia de lancamento.",
        "Peca que role a bola com a mao nao-dominante.",
      ],
    },
    tempoIdeal:
      "15 minutos com varias rodadas. Perfecto para depois de uma atividade mais calma para reequilibrar a energia.",
    badges: {
      faixaEtaria: "3 a 8 anos",
      dificuldade: "Iniciante",
      energia: "Media",
      estimulo: "Motor Amplo",
    },
  },
  {
    id: "co-05",
    resumo:
      "Enfiar Macarrao no Palito e uma das melhores atividades para a pinca fina. A crianca precisa segurar o macarrao com precisao e encaixar no palito, o que exige muito controle dos dedos.",
    objetivos: [
      "Fortalecer a pinca digital fina",
      "Treinar coordenacao olho-mao em tarefa de precisao",
      "Estimular concentracao na tarefa repetitiva",
      "Trabalhar sequenciamento ao criar padroes de cor",
    ],
    beneficios: [
      "Um dos melhores exercicios pre-escrita para fortalecer a pinca",
      "Treina a atencao sustentada de forma concreta",
      "Pode ser transformado em joias e acessorios, tornando o resultado recompensador",
      "Material acessivel e de baixo custo",
    ],
    dicas: [
      "Fixe o palito em massa de modelar ou isopor para nao cair.",
      "Comece com macarrao tipo penne que e largo e facil de segurar.",
      "Crie desafios de sequencia de cor: vermelho, amarelo, vermelho...",
      "Deixe ela criar o padrao ela mesma e pergunte qual foi a logica.",
      "Se macarrao colorido nao estiver disponivel, use tampinhas ou contas.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use macarrao grande tipo ziti ou rigatoni.",
        "Ajude a posicionar o macarrao perto do palito.",
        "Use palito de madeira grosso (churrasco).",
      ],
      maisDificil: [
        "Use macarrao menor tipo gravata.",
        "Evolua para espaguete cru (palito fino e flexivel).",
        "Peca um padrao de 4 cores especifico para seguir.",
      ],
    },
    tempoIdeal:
      "15 minutos concentrados. O cansaco dos dedos e real: respeite os limites da crianca.",
    badges: {
      faixaEtaria: "2 a 6 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Motor Fino",
    },
  },
  {
    id: "co-06",
    resumo:
      "Recorte Simples ensina a crianca a usar a tesoura com seguranca e precisao. Seguir linhas desenhadas com a tesoura e um marco importante do desenvolvimento motor que exige coordenacao bimanual.",
    objetivos: [
      "Desenvolver coordenacao bimanual (uma mao segura, outra corta)",
      "Treinar o controle da tesoura sobre uma linha",
      "Estimular planejamento motor ao prever o proximo corte",
      "Fortalecer musculos das maos e do antebraco",
    ],
    beneficios: [
      "Marco do desenvolvimento motor com impacto em diversas habilidades escolares",
      "Desenvolve independencia e sensacao de competencia",
      "Melhora a coordenacao bimanual necessaria para a escrita",
      "Cria producoes artisticas que ela se orgulha de mostrar",
    ],
    dicas: [
      "Ensine a posicao correta da tesoura antes de comecar.",
      "Desenhe linhas bem largas e coloridas para comecar.",
      "Nunca deixe usar tesoura com ponta. Tesoura sem ponta e segura e eficiente.",
      "Sente do lado para garantir a seguranca e corrigir a posicao.",
      "Elogie a direcao: 'Voce seguiu a linha direitinho!'",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece com franja: cortes simples sem precisar seguir uma curva.",
        "Use cartolina mais grossa que e mais facil de cortar do que papel fino.",
        "Desenhe linhas com 2 cm de largura para haver margem.",
      ],
      maisDificil: [
        "Use linhas curvas e depois formas geometricas.",
        "Peda que recorte figuras com 5 ou 6 lados.",
        "Evolua para recortar figuras desenhadas por ela mesma.",
      ],
    },
    tempoIdeal:
      "15 minutos com supervisao proxima. E uma atividade que exige presenca ativa da mae.",
    badges: {
      faixaEtaria: "3 a 8 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Motor Fino e Bimanual",
    },
  },
  {
    id: "co-07",
    resumo:
      "Torre de Blocos desafia a crianca a empilhar o maior numero possivel de objetos sem deixar cair. Parece simples, mas exige equilibrio, controle fino dos dedos e muito planejamento.",
    objetivos: [
      "Desenvolver equilibrio, pinca e controle motor",
      "Treinar planejamento e pensamento espacial",
      "Estimular tolerancia a frustracao quando a torre cai",
      "Trabalhar persistencia e criatividade na resolucao de problemas",
    ],
    beneficios: [
      "Desenvolve noçoes de fisica de forma concreta: peso, equilíbrio, centro de gravidade",
      "Treina a pinca fina e o controle de pressao ao empilhar",
      "Trabalha a reacao emocional ao fracasso de forma segura e divertida",
      "Estimula o pensamento criativo ao tentar novas estrategias",
    ],
    dicas: [
      "Nao interfira quando a torre cair. Deixe ela reagir e tentar de novo.",
      "Pergunte: 'O que voce acha que fez a torre cair? Como pode fazer diferente?'",
      "Misture tamanhos de blocos: bases maiores abaixo e menores acima.",
      "Anote o recorde de pecas: 10 hoje, 12 amanha. Progresso visivel motiva.",
      "Se usar caixas de fosforo ou cubinhos de madeira, o desafio aumenta muito.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use blocos grandes e leves (espuma ou madeira grande).",
        "Comece empilhando apenas 3 blocos.",
        "Ajude a posicionar os primeiros.",
      ],
      maisDificil: [
        "Use moedas ou caixas de fosforo para maximo desafio.",
        "Tente empilhar com a mao nao-dominante.",
        "Crie formas: casa, ponte, arco, sem deixar cair.",
      ],
    },
    tempoIdeal:
      "15 minutos de tentativas concentradas. A queda da torre faz parte: ensine a rir junto.",
    badges: {
      faixaEtaria: "2 a 8 anos",
      dificuldade: "Iniciante",
      energia: "Baixa",
      estimulo: "Motor Fino e Espacial",
    },
  },
  {
    id: "mu-01",
    resumo:
      "Desenho Cego desafia a crianca a desenhar um objeto sem olhar para o papel. O resultado e sempre surpresante e divertido, mas o processo treina concentracao, consciencia corporal e controle.",
    objetivos: [
      "Desenvolver concentracao e atencao proprioceptiva",
      "Treinar consciencia corporal e controle do movimento",
      "Estimular tolerancia ao resultado imperfeito",
      "Trabalhar coordenacao olho-mao de forma invertida e criativa",
    ],
    beneficios: [
      "Treina a crianca a confiar na proprio capacidade sem depender da visao",
      "Desenvolve autoconfianca ao aceitar o resultado imperfeito com humor",
      "Estimula conexao entre o que o cerebro imagina e o que o corpo executa",
      "Cria momentos de riso compartilhado que fortalecem o vinculo",
    ],
    dicas: [
      "Ria junto do resultado. O humor e parte da atividade.",
      "Compare o desenho 'cego' com um desenho normal da mesma coisa.",
      "Nao deixe ela espiar. Um pano sobre o papel funciona bem.",
      "Comece com objetos simples: sol, casa, rostos.",
      "Guarde os desenhos para ver a evolucao ao longo das semanas.",
    ],
    adaptacoes: {
      maisEasy: [
        "Deixe ela olhar brevemente antes de cobrir o papel.",
        "Peca objetos muito simples: circulo, triangulo.",
        "Ajude guiando a mao dela na direcao certa.",
      ],
      maisDificil: [
        "Peca objetos mais complexos: pessoa, animal, cena.",
        "Desafie a desenhar com a mao nao-dominante E sem olhar.",
        "Peca que reproduza um desenho que ela viu ha 5 minutos.",
      ],
    },
    tempoIdeal:
      "15 minutos com 4 a 6 tentativas. Varie os objetos para manter a novidade e a surpresa.",
    badges: {
      faixaEtaria: "5 a 10 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Motor e Cognitivo",
    },
  },
  {
    id: "mu-02",
    resumo:
      "Simon Diz Inteligente e uma versao sofisticada do Simao Diz com comandos compostos. A crianca precisa ouvir, filtrar (so obedece com 'Simao diz') e executar, o que treina atencao, linguagem e coordenacao juntas.",
    objetivos: [
      "Treinar inibicao de resposta e controle de impulsos",
      "Desenvolver atencao auditiva e escuta seletiva",
      "Estimular compreensao de instrucoes compostas",
      "Trabalhar coordenacao motora ao executar os movimentos",
    ],
    beneficios: [
      "Um dos melhores jogos para funcoes executivas do cerebro",
      "Treina diretamente a habilidade de ouvir instrucoes e seguir regras",
      "Desenvolve auto-regulacao: a crianca aprende a nao reagir por impulso",
      "Pode ser jogado em qualquer lugar sem nenhum material",
    ],
    dicas: [
      "Comece com comandos simples e va aumentando a velocidade.",
      "Intercale varios com 'Simao diz' antes de um sem, para pegar de surpresa.",
      "Ria quando ela 'cair na armadilha'. O humor mantem a motivacao.",
      "Deixe ela ser o Simao e voce obedece: ela adora dar ordens.",
      "Evolua para comandos duplos: 'Simao diz toque a barriga e pule!'",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece somente com 'Simao diz', sem armadilhas, para ela aprender a ouvir e executar.",
        "Use comandos simples de uma etapa.",
        "Fale devagar e repita o comando se necessario.",
      ],
      maisDificil: [
        "Use comandos de 3 ou 4 etapas.",
        "Aumente muito a velocidade dos comandos.",
        "Adicione regras: simao diz ao contrario (faz o oposto).",
      ],
    },
    tempoIdeal:
      "15 minutos de pura energia e risadas. Perfeito para transicoes: despois de dormir, antes de uma atividade calma.",
    badges: {
      faixaEtaria: "4 a 10 anos",
      dificuldade: "Intermediario",
      energia: "Media",
      estimulo: "Cognitivo e Motor",
    },
  },
  {
    id: "mu-03",
    resumo:
      "Sudoku de Figuras usa uma grade 4x4 com desenhos para a crianca completar sem repetir na mesma linha ou coluna. Treina raciocinio logico e atencao visual de forma concreta e sem numeros.",
    objetivos: [
      "Desenvolver raciocinio logico e pensamento dedutivo",
      "Treinar atencao visual para verificar linhas e colunas",
      "Estimular estrategias de resolucao de problemas",
      "Trabalhar persistencia diante de um desafio complexo",
    ],
    beneficios: [
      "Excelente preparacao para matematica e logica escolar",
      "Desenvolve a habilidade de pensar com antecedencia",
      "Treina o cerebro para verificacao: 'Ja tem isso aqui?'",
      "Cria satisfacao real ao resolver algo desafiador",
    ],
    dicas: [
      "Explique a regra com muita clareza antes de comecar.",
      "Monte a grade junto na primeira vez mostrando como verificar.",
      "Se travar, pergunte: 'O que ja esta na linha? Entao o que pode entrar?'",
      "Use figuras que ela ama: frutas, animais, emojis.",
      "Comece com algumas celulas ja preenchidas para reduzir a complexidade.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use grade 3x3 com apenas 3 figuras.",
        "Deixe mais da metade das celulas ja preenchidas.",
        "Resolva a primeira grade junto, mostrando o raciocinio em voz alta.",
      ],
      maisDificil: [
        "Use grade 4x4 com menos pistas iniciais.",
        "Adicione restricao de cor alem da figura.",
        "Peca que crie o proprio sudoku para voce resolver.",
      ],
    },
    tempoIdeal:
      "15 minutos com 1 a 3 grids dependendo da complexidade. Qualidade de raciocinio vale mais que quantidade.",
    badges: {
      faixaEtaria: "5 a 10 anos",
      dificuldade: "Avancado",
      energia: "Baixa",
      estimulo: "Logico e Visual",
    },
  },
  {
    id: "mu-04",
    resumo:
      "Missao Obstaculo cria um percurso motor na propria sala de casa que a crianca percorre seguindo instrucoes verbais. Integra coordenacao motora, compreensao de linguagem e atencao de forma muito divertida.",
    objetivos: [
      "Desenvolver coordenacao motora ampla em percurso",
      "Treinar compreensao e memoria de instrucoes sequenciais",
      "Estimular planejamento motor e consciencia espacial",
      "Trabalhar atencao auditiva ao ouvir e seguir as instrucoes",
    ],
    beneficios: [
      "Integra tres habilidades em uma so atividade: movimento, linguagem, atencao",
      "Gasta energia de forma organizada e com proposito",
      "Desenvolve a capacidade de seguir instrucoes de varios passos",
      "Pode ser adaptado para qualquer espaco e qualquer idade",
    ],
    dicas: [
      "Explique todo o percurso verbalmente antes de comecar.",
      "Seja especifico: 'Pule por cima da almofada azul, rasteje debaixo da cadeira...'",
      "Cronometre e desafie a bater o proprio tempo.",
      "Adicione um elemento de equilíbrio: carregar um objeto na cabeca.",
      "Deixe ela montar o proximo percurso. Ela vai adorar ser a instrutora.",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece com 3 obstaculos simples.",
        "Acompanhe ela pelo percurso na primeira vez.",
        "Fale um passo de cada vez, nao todos de uma so vez.",
      ],
      maisDificil: [
        "Crie percursos com 7 ou 8 etapas.",
        "Adicione instrucoes: 'Pule 3 vezes em cada almofada.'",
        "Peca que memorize o percurso e execute sem instrucao verbal.",
      ],
    },
    tempoIdeal:
      "15 minutos de atividade fisica e cognitiva combinadas. Ideal para a parte do dia em que a crianca precisa se mover.",
    badges: {
      faixaEtaria: "3 a 9 anos",
      dificuldade: "Intermediario",
      energia: "Alta",
      estimulo: "Motor e Cognitivo",
    },
  },
  {
    id: "mu-05",
    resumo:
      "Origami Simples usa dobraduras de papel para desenvolver coordenacao fina, atencao a instrucoes sequenciais e precisao. Cada dobra precisa ser exata, o que exige foco real da crianca.",
    objetivos: [
      "Desenvolver coordenacao fina e precisao das maos",
      "Treinar seguimento de instrucoes em sequencia logica",
      "Estimular planejamento espacial e visualizacao",
      "Trabalhar persistencia ao repetir ate dominar",
    ],
    beneficios: [
      "Excelente para o preparo motor para escrita",
      "Desenvolve habilidade de seguir instrucoes passo a passo",
      "Cria um produto final concreto que gera orgulho",
      "Pode ser praticado sozinha depois de aprender, desenvolvendo autonomia",
    ],
    dicas: [
      "Comece sempre com o barquinho ou o aviao: sao os mais simples e divertidos.",
      "Faca voce tambem, lado a lado. Mostrar e melhor que explicar.",
      "Enfatize cada dobra: 'Deixa a beirinha bem reta antes de apertar.'",
      "Nao pule etapas. Se a dobra anterior ficou errada, a proxima nao vai funcionar.",
      "Celebre cada origami concluido: e uma conquista real.",
    ],
    adaptacoes: {
      maisEasy: [
        "Comece com uma unica dobra ao meio.",
        "Use papel maior (A4 inteiro) para facilitar o manuseio.",
        "Faca as dobras juntas, maos sobre maos.",
      ],
      maisDificil: [
        "Evolua para sapo, tulipa ou caixa.",
        "Use papel menor para maior precisao.",
        "Peca que ensine a outra pessoa sem sua ajuda.",
      ],
    },
    tempoIdeal:
      "15 minutos para aprender uma dobra nova. Na proxima sessao, revise a anterior e apresente a proxima.",
    badges: {
      faixaEtaria: "5 a 10 anos",
      dificuldade: "Avancado",
      energia: "Baixa",
      estimulo: "Motor e Cognitivo",
    },
  },
  {
    id: "mu-06",
    resumo:
      "Ditado Ilustrado pede que a crianca desenhe uma cena conforme a mae descreve verbalmente. Integra atencao auditiva, compreensao de linguagem espacial e coordenacao motora em uma so atividade criativa.",
    objetivos: [
      "Treinar atencao auditiva e compreensao de instrucoes",
      "Desenvolver linguagem espacial: esquerda, direita, canto, centro",
      "Estimular coordenacao motora ao desenhar com precisao",
      "Trabalhar seguimento de instrucoes sequenciais",
    ],
    beneficios: [
      "Desenvolve a escuta ativa, fundamental para o aprendizado escolar",
      "Treina conceitos espaciais essenciais para matematica e leitura",
      "Une criatividade e disciplina de forma equilibrada",
      "O resultado e sempre unico: cada crianca interpreta a cena de forma propria",
    ],
    dicas: [
      "Fale devagar e repita se ela pedir.",
      "Use referencias concretas: 'No canto de cima do lado esquerdo.'",
      "Aceite interpretacoes diferentes: nao existe resultado errado.",
      "Compare as duas ilustracoes ao final: a dela e a sua (quando trocarem).",
      "Comece com cenas simples: 3 elementos. Va aumentando.",
    ],
    adaptacoes: {
      maisEasy: [
        "Use apenas 2 elementos: 'Um sol e uma nuvem.'",
        "Evite referencias de posicao complexas no inicio.",
        "Mostre a propria ilustracao ao final como referencia.",
      ],
      maisDificil: [
        "Use 5 ou 6 elementos com posicoes especificas.",
        "Adicione cores especificas: 'Um balao vermelho e um azul.'",
        "Leia cada instrucao apenas uma vez, sem repeticao.",
      ],
    },
    tempoIdeal:
      "15 minutos com 1 ou 2 cenas completas. Trocar os papeis (ela dita, voce desenha) deixa a atividade ainda mais rica.",
    badges: {
      faixaEtaria: "4 a 10 anos",
      dificuldade: "Intermediario",
      energia: "Baixa",
      estimulo: "Linguagem e Motor",
    },
  },
];

export function getTutorial(id: string): ActivityTutorial | undefined {
  return TUTORIAIS.find((t) => t.id === id);
}
