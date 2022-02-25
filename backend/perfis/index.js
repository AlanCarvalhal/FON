class Perfil {
  constructor(
    nick,
    email,
    senha,
    foto,
    criacao,
    qtd_desafio_diario,
    pts_desafio_diario,
    qtd_vitoria_diario,
    qtd_desafio_amigo,
    pts_vitoria_amigo,
    qtd_vitoria_amigo,
    tempo_online
  ) {
    this.nick = nick;
    this.email = email;
    this.senha = senha;
    this.foto = foto;
    this.criacao = criacao;

    this.qtd_desafio_diario = qtd_desafio_diario;
    this.pts_desafio_diario = pts_desafio_diario;
    this.qtd_vitoria_diario = qtd_vitoria_diario;
    this.qtd_desafio_amigo = qtd_desafio_amigo;
    this.pts_vitoria_amigo = pts_vitoria_amigo;
    this.qtd_vitoria_amigo = qtd_vitoria_amigo;
    this.tempo_online = tempo_online;
  }
}

function inicializar(contas) {
  contas.push(
    new Perfil(
      'SoloQ Tortuga Vrau',
      'saulo_RXvrau@uvvnet.com',
      '123456',
      '',
      '2021-06-29',
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  contas.push(
    new Perfil(
      'MontebellerZ',
      'filipe.rocha@uvvnet.com.br',
      '123456',
      '',
      '2021-06-29',
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  contas.push(
    new Perfil(
      'C0alaJr',
      'matheus.andrade@uvvnet.com.br',
      '123456',
      '',
      '2021-06-29',
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  contas.push(
    new Perfil(
      'Alan5214',
      'alan.carvalhal@uvvnet.com.br',
      '123456',
      '',
      '2021-06-29',
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  contas.push(
    new Perfil(
      'lucassouzape',
      'lucas.pegoretti@uvvnet.com.br',
      '123456',
      '',
      '2021-06-29',
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  contas.push(
    new Perfil(
      'Ozzy',
      'ozias.pecanha@uvvnet.com.br',
      '123456',
      '',
      '2021-06-29',
      0,
      0,
      0,
      0,
      0,
      0,
      0
    )
  );

  contas.push(new Perfil('', '', '', '', '', 0, 0, 0, 0, 0, 0, 0));

  return contas;
}

export class Registros {
  constructor() {
    this.contas = inicializar(new Array());
  }

  logar(nick, senha) {
    for (let i = 0; i < this.contas.length; i++) {
      if (this.contas[i].nick == nick) {
        if (this.contas[i].senha == senha) {
          return this.contas[i];
        }
        alert('Senha incorreta');
        return;
      }
    }
    alert('Conta não encontrada');
  }

  criarConta(nick, email, senha) {
    for (let i = 0; i < this.contas.length; i++) {
      if (this.contas[i].nick == nick || this.contas[i].email == email) {
        alert('Usuário já registrado');
        return;
      }
    }

    let hoje = new Date();
    hoje = `${hoje.getFullYear()}-${hoje.getMonth()+1}-${hoje.getDate()}`;

    this.contas.push(
      new Perfil(nick, email, senha, '', hoje, 0, 0, 0, 0, 0, 0, 0)
    );

    return [this.contas[this.contas.length - 1], this];
  }

  editarConta(nick, novoNick, novoEmail, novaSenha, novaFoto) {
    for (let i = 0; i < this.contas.length; i++) {
      if (this.contas[i].nick == nick) {
        novoNick != '' ? (this.contas[i].nick = novoNick) : null;
        novoEmail != '' ? (this.contas[i].email = novoEmail) : null;
        novaSenha != '' ? (this.contas[i].senha = novaSenha) : null;
        novaFoto != '' ? (this.contas[i].foto = novaFoto) : null;

        return [this.contas[i], this];
      }
    }
    alert('Conta não encontrada');
  }
}
