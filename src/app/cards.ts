export interface Card {
    id: number;
    name: string;
    description: string;
  }
  
  export const cards = [
    {
      id: 0,
      name: 'Fusão das Figuras',
      description: 'Invoque por Invocação-Fusão 1 Monstro de Fusão Guerreiro de LUZ do seu Deck Adicional, usando monstros da sua mão ou do campo como Matéria de Fusão. Se você controlar "O Cavaleiro da Rainha", "O Cavaleiro do Rei" ou "O Cavaleiro do Valete", você pode usar 1 monstro do seu Deck como Matéria de Fusão. Você só pode ativar 1 "Fusão das Figuras" por turno.'
    },
    {
      id: 1,
      name: 'O Indestrutível Nokia',
      description: 'Essa carta é imbatível'
    },
    {
      id: 2,
      name: 'O Cavaleiro do Coringa',
      description: 'Você pode enviar 1 "O Cavaleiro da Rainha", "O Cavaleiro do Rei" ou "O Cavaleiro do Valete" do seu Deck para o Cemitério; Invoque este card por Invocação-Especial da sua mão e, se isso acontecer, até a Fase Final, o nome deste card se torna o nome do monstro enviado. Durante a Fase Final, se este card estiver no seu Cemitério: você pode escolher 1 outro monstro Guerreiro de LUZ no seu Cemitério; embaralhe-o no Deck e, se isso acontecer, adicione este card à sua mão. Você só pode usar cada efeito de "O Cavaleiro do Coringa" uma vez por turno.'
    },
    {
      id: 3,
      name: 'Sequência do Coringa',
      description: 'Descarte 1 card, Invoque por Invocação-Especial 1 "O Cavaleiro da Rainha" do seu Deck, adicione 1 "O Cavaleiro do Rei" ou "O Cavaleiro do Valete" do seu Deck à sua mão e, depois, imediatamente depois que este efeito resolver, você pode Invocar 1 monstro por Invocação-Normal. Você não pode Invocar monstros por Invocação-Especial do Deck Adicional pelo resto deste turno, exceto monstros Guerreiro de LUZ. Durante a Fase Final, se este card estiver no seu Cemitério: você pode escolher 1 monstro Guerreiro de LUZ no seu Cemitério; embaralhe-o no Deck e, se isso acontecer, adicione este card à sua mão. Você só pode usar cada efeito de "Sequência do Coringa" uma vez por turno.'
    },
    {
      id: 4,
      name: 'Triunfo Coringa Arcano',
      description: 'Se este card estiver na sua mão ou no Cemitério: você pode enviar para o Cemitério 1 "O Cavaleiro da Rainha", "O Cavaleiro do Rei" e "O Cavaleiro do Valete" da sua mão e/ou da Zona de Monstros com a face para cima; Invoque este card por Invocação-Especial. Este card ganha 500 de ATK x o número combinado de cards nas mãos dos dois duelistas. Você pode descartar 1 card; destrua todos os cards com a face para cima que seu oponente controla com o mesmo tipo (Monstro, Magia ou Armadilha) que o do card descartado.'
    },
    {
      id: 5,
      name: 'Guarda-costas Imperiais',
      description: 'Se você não controlar nenhum outro monstro: você pode oferecer este card como Tributo; pegue 2 monstros diferentes do seu Deck entre "O Cavaleiro da Rainha", "O Cavaleiro do Rei" e/ou "O Cavaleiro do Valete" e, para cada um, adicione-o à sua mão ou Invoque-o por Invocação-Especial. Você só pode usar este efeito de "Guarda-costas Imperiais" uma vez por turno.'
    }
    
  ];