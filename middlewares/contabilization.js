const classifications = require('../middlewares/classifications');
module.exports = {
    
    contabilizar: async function (numeros, posicao, dia) {
        numeros.forEach(numero => {
            switch (numero) {
                case 1:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][0].value++;
                break;
                case 2:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][1].value++;
                break;
                case 3:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][2].value++;
                break;
                case 4:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][3].value++;
                break;
                case 5:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][4].value++;
                break;
                case 6:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][5].value++;
                break;
                case 7:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][6].value++;
                break;
                case 8:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][7].value++;
                break;
                case 9:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][8].value++;
                break;
                case 10:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][9].value++;
                break;
                case 11:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][10].value++;
                break;
                case 12:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][11].value++;
                break;
                case 13:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][12].value++;
                break;
                case 14:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][13].value++;
                break;
                case 15:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][14].value++;
                break;
                case 16:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][15].value++;
                break;
                case 17:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][16].value++;
                break;
                case 18:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][17].value++;
                break;
                case 19:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][18].value++;
                break;
                case 20:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][19].value++;
                break;
                case 21:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][20].value++;
                break;
                case 22:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][21].value++;
                break;
                case 23:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][22].value++;
                break;
                case 24:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][23].value++;
                break;
                case 25:
                classifications.frequencia_dos_numeros.intervalo[posicao][dia][24].value++;
                break;
                
                default:
                break;
            }
            
        });
        
    }
    
};