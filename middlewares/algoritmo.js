const contabilization = require('../middlewares/contabilization');
module.exports = {

    apuracao: async function(concursos) {
        await concursos.map((concurso, indice, array) => {

            if (indice === 2) {
                // Ler os numeros do sorteio atual 
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                                   
            } else if (indice === 3) {
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                
                // Ler os mumeros do sorteio anterior 
                numerosConcursoAnterior = array[indice - 2].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 1;
                
                contabilization.contabilizar(numeros, posicao, 'doisDias');
                
            } else if (indice === 4) {
                // Ler os numeros do sorteio atual 
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                
                // Ler os mumeros do sorteio anterior 
                numerosConcursoAnterior = array[indice - 2].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 1;
                
                contabilization.contabilizar(numeros, posicao, 'doisDias');
                
                
            } else if (indice === 5) {
                // Ler os numeros do sorteio atual 
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                
                // Ler os mumeros do sorteio anterior 
                numerosConcursoAnterior = array[indice - 2].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 1;
                
                contabilization.contabilizar(numeros, posicao, 'doisDias');
                
                // Ler os numeros do sorteio de 2 dias atras 
                numerosConcursoAnterior = array[indice - 3].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 2;
                
                contabilization.contabilizar(numeros, posicao, 'tresDias');
                
                // Ler os numeros do sorteio de 3 dias atras 
                numerosConcursoAnterior = array[indice - 4].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 3;
                
                contabilization.contabilizar(numeros, posicao, 'quatroDias');
                
                
            } else if (indice === 6) {
                // Ler os numeros do sorteio atual 
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                
                // Ler os mumeros do sorteio anterior 
                numerosConcursoAnterior = array[indice - 2].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 1;
                
                contabilization.contabilizar(numeros, posicao, 'doisDias');
                
                // Ler os numeros do sorteio de 2 dias atras 
                numerosConcursoAnterior = array[indice - 3].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 2;
                
                contabilization.contabilizar(numeros, posicao, 'tresDias');
                
                // Ler os numeros do sorteio de 3 dias atras 
                numerosConcursoAnterior = array[indice - 4].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 3;
                
                contabilization.contabilizar(numeros, posicao, 'quatroDias');
                
                // Ler os numeros do sorteio de 4 dias atras 
                numerosConcursoAnterior = array[indice - 5].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 4;
                
                contabilization.contabilizar(numeros, posicao, 'cincoDias');
                
            } else if (indice === 7) {
                // Ler os numeros do sorteio atual 
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                
                // Ler os mumeros do sorteio anterior 
                numerosConcursoAnterior = array[indice - 2].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 1;
                
                contabilization.contabilizar(numeros, posicao, 'doisDias');
                
                // Ler os numeros do sorteio de 2 dias atras 
                numerosConcursoAnterior = array[indice - 3].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 2;
                
                contabilization.contabilizar(numeros, posicao, 'tresDias');
                
                // Ler os numeros do sorteio de 3 dias atras 
                numerosConcursoAnterior = array[indice - 4].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 3;
                
                contabilization.contabilizar(numeros, posicao, 'quatroDias');
                
                // Ler os numeros do sorteio de 4 dias atras 
                numerosConcursoAnterior = array[indice - 5].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 4;
                
                contabilization.contabilizar(numeros, posicao, 'cincoDias');
                
                // Ler os numeros do sorteio de 5 dias atras 
                numerosConcursoAnterior = array[indice - 6].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 5;
                
                contabilization.contabilizar(numeros, posicao, 'seisDias');
                
            } else if (indice > 7) {
                // Ler os numeros do sorteio atual 
                let numerosConcursoAtual = concurso.numeros.map((item) => item.numero);
                let numerosConcursoAnterior = array[indice - 1].numeros.map((item) => item.numero);
                let numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                let posicao = 0;
                
                contabilization.contabilizar(numeros, posicao, 'umDia');
                
                // Ler os mumeros do sorteio anterior 
                numerosConcursoAnterior = array[indice - 2].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 1;
                
                contabilization.contabilizar(numeros, posicao, 'doisDias');
                
                // Ler os numeros do sorteio de 2 dias atras 
                numerosConcursoAnterior = array[indice - 3].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 2;
                
                contabilization.contabilizar(numeros, posicao, 'tresDias');
                
                // Ler os numeros do sorteio de 3 dias atras 
                numerosConcursoAnterior = array[indice - 4].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 3;
                
                contabilization.contabilizar(numeros, posicao, 'quatroDias');
                
                // Ler os numeros do sorteio de 4 dias atras 
                numerosConcursoAnterior = array[indice - 5].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 4;
                
                contabilization.contabilizar(numeros, posicao, 'cincoDias');
                
                // Ler os numeros do sorteio de 5 dias atras 
                numerosConcursoAnterior = array[indice - 6].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 5;
                
                contabilization.contabilizar(numeros, posicao, 'seisDias');
                
                // Ler os numeros do sorteio de 6 dias atras 
                numerosConcursoAnterior = array[indice - 7].numeros.map((item) => item.numero);
                numeros = numerosConcursoAtual.filter((item) => numerosConcursoAnterior.includes(item));
                posicao = 6;
                
                contabilization.contabilizar(numeros, posicao, 'seteDias');
                
            }
        });
    }

}