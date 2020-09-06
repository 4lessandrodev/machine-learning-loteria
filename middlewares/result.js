const classification = require('../middlewares/classifications');
module.exports = {

    calculate: async function () {
        let listas = await classification.frequencia_dos_numeros.intervalo;

        let listaUmDia = await listas[0].umDia.sort((a, b) => b.value - a.value);
        let listaDoisDias = await listas[1].doisDias.sort((a, b) => b.value - a.value);
        let listaTresDias = await listas[2].tresDias.sort((a, b) => b.value - a.value);
        let listaQuatroDias = await listas[3].quatroDias.sort((a, b) => b.value - a.value);
        let listaCincoDias = await listas[4].cincoDias.sort((a, b) => b.value - a.value);
        let listaSeisDias = await listas[5].seisDias.sort((a, b) => b.value - a.value);
        let listaSeteDias = await listas[6].seteDias.sort((a, b) => b.value - a.value);

        let indicacao = [];

        indicacao = [
            listaUmDia[0].number, listaUmDia[1].number, listaUmDia[2].number, listaUmDia[3].number, 
            listaDoisDias[0].number,listaDoisDias[1].number, listaDoisDias[2].number, listaDoisDias[3].number, 
            listaTresDias[0].number, listaTresDias[1].number, listaTresDias[2].number, listaTresDias[3].number,
            listaQuatroDias[0].number, listaQuatroDias[1].number, listaQuatroDias[2].number, listaQuatroDias[3].number,
            listaCincoDias[0].number, listaCincoDias[1].number, listaCincoDias[2].number, listaCincoDias[3].number,
            listaSeisDias[0].number, listaSeisDias[1].number, listaSeisDias[2].number, listaSeisDias[3].number,
            listaSeteDias[0].number, listaSeteDias[1].number, listaSeteDias[2].number, listaSeteDias[3].number, listaSeteDias[8].number, listaSeteDias[9].number, listaSeteDias[14].number, listaSeteDias[15].number, listaSeteDias[16].number, listaSeteDias[17].number, listaSeteDias[18].number, listaSeteDias[19].number, listaSeteDias[20].number, listaSeteDias[21].number, listaSeteDias[22].number, listaSeteDias[23].number,
        ];

        //let listaOrdenada = indicacao.sort((a, b) => a - b);

        return [... new Set(indicacao)];

    }

};