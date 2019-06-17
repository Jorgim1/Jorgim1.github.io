import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  private readonly API = 'http://10.100.224.119:8103/middleware-frontend/rest/VacinaAi/buscar-cartao-vacina?cns=1234567';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.API);
  }
  getVacinasNaoAplicadas(){
    return  [
        {
            aprazemento: '2018-01-10 12:00:00.0',
            dataaplicacao: '',
            dose: 'Dose 3',
            estaddesaude: 'Serviço Privado',
            estrategia: 'Rotina',
            fkvacinavacina: 8,
            grupoatendimento: 'Pop Geral',
            laboratorio: 'EMS',
            lote: '',
            vacinador: 'M',
            imunobiologico: 'Contra Influenza (INF)',
            id: 7,
            nrVersao: 0,
            excluindoDetalhe: false,
            atributosDeContexto: {}
        },
        {
            aprazemento: '2018-06-10 12:00:00.0',
            dataaplicacao: '',
            dose: 'Dose 5',
            estaddesaude: 'PSF',
            estrategia: 'Rotina',
            fkvacinavacina: 5,
            grupoatendimento: 'Pop Geral',
            laboratorio: 'EMS',
            lote: '',
            vacinador: '',
            imunobiologico: 'Contra Haemophilus influenzae tipo b (Hib)',
            id: 6,
            nrVersao: 0,
            excluindoDetalhe: false,
            atributosDeContexto: {}
        }
    ];
  }
  getVacinasAplicadas() {
    return  [
    {
        aprazemento: '2002-06-10 12:00:00.0',
        dataaplicacao: '1997-06-10 12:00:00.0',
        dose: 'Dose 1',
        estaddesaude: 'UBS',
        estrategia: 'Rotina',
        fkvacinavacina: 5,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '52346',
        vacinador: 'Isabel',
        imunobiologico: 'Contra Haemophilus influenzae tipo b (Hib)',
        id: 3,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        aprazemento: '2007-06-10 12:00:00.0',
        dataaplicacao: '2002-06-10 12:00:00.0',
        dose: 'Dose 2',
        estaddesaude: 'UBS',
        estrategia: 'Rotina',
        fkvacinavacina: 5,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '42346',
        vacinador: 'Isabel',
        imunobiologico: 'Contra Haemophilus influenzae tipo b (Hib)',
        id: 4,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        aprazemento: '2013-06-10 12:00:00.0',
        dataaplicacao: '2007-06-10 12:00:00.0',
        dose: 'Dose 3',
        estaddesaude: 'UBS',
        estrategia: 'Rotina',
        fkvacinavacina: 5,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '32346',
        vacinador: 'Kharem',
        imunobiologico: 'Contra Haemophilus influenzae tipo b (Hib)',
        id: 5,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        aprazemento: '2018-01-10 12:00:00.0',
        dataaplicacao: '2017-06-10 12:00:00.0',
        dose: 'Dose 2',
        estaddesaude: 'Serviço Privado',
        estrategia: 'Rotina',
        fkvacinavacina: 8,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '22342',
        vacinador: 'Mônica',
        imunobiologico: 'Contra Influenza (INF)',
        id: 7,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        aprazemento: '2018-06-10 12:00:00.0',
        dataaplicacao: '2013-06-10 12:00:00.0',
        dose: 'Dose 4',
        estaddesaude: 'PSF',
        estrategia: 'Rotina',
        fkvacinavacina: 5,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '32346',
        vacinador: 'Mônica',
        imunobiologico: 'Contra Haemophilus influenzae tipo b (Hib)',
        id: 6,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        dataaplicacao: '1995-06-10 12:00:00.0',
        dose: 'Dose única',
        estaddesaude: 'UBS',
        estrategia: 'Campanha',
        fkvacinavacina: 1,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '12345',
        vacinador: 'Cláudia',
        imunobiologico: 'BCG (BCG)',
        id: 1,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        dataaplicacao: '1996-06-10 12:00:00.0',
        dose: 'Dose única',
        estaddesaude: 'UBS',
        estrategia: 'Rotina',
        fkvacinavacina: 3,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '62346',
        vacinador: 'Banjou',
        imunobiologico: 'Contra Febre Amarela (FA)',
        id: 2,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    },
    {
        dataaplicacao: '2018-06-10 12:00:00.0',
        dose: 'Dose única',
        estaddesaude: 'PSF',
        estrategia: 'Rotina',
        fkvacinavacina: 7,
        grupoatendimento: 'Pop Geral',
        laboratorio: 'EMS',
        lote: '122342',
        vacinador: 'Oswaldo',
        imunobiologico: 'Contra Hepatite B (HB)',
        id: 8,
        nrVersao: 0,
        excluindoDetalhe: false,
        atributosDeContexto: {}
    }
];
  }
}
