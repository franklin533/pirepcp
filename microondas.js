//*****************************MENU*********************************
//1 - Pipoca
//2 - Macarrão
//3 - Carne
//4 - Feijão
//5 - Brigadeiro



function microondas(prato,tempo){
    switch(prato){
        case 1:
            if (tempo < 10){
                return "Prato pronto, bom apetite. ---Tempo insuficiente, por favor insira o tempo correto para o preparo da sua pipoca---";
            }else if (tempo >= 10 && tempo <= 20){
                return "Prato pronto, bom apetite";
            }else if (tempo > 20 && tempo < 30){
                return "Prato pronto, bom apetite. ---A Pipoca queimou---";
            }else{
                return "Prato pronto, bom apetite. ---KABUMM---";
          
    }
    
    case 2:
            if (tempo < 8){
                return "Prato pronto, bom apetite. ---Tempo insuficiente, por favor insira o tempo correto para o preparo do seu macarrão---";
            }else if (tempo >= 8 && tempo <= 16){
                return "Prato pronto, bom apetite";
            }else if (tempo > 16 && tempo < 24){
                return "Prato pronto, bom apetite. ---O Macarrão queimou---";
            }else{
                return "Prato pronto, bom apetite. ---KABUMM---";
        
    }
    case 3:
            if (tempo < 15){
                return "Prato pronto, bom apetite. ---Tempo insuficiente, por favor insira o tempo correto para o preparo da sua carne---";
            }else if (tempo >= 15 && tempo <= 30){
                return "Prato pronto, bom apetite";
            }else if (tempo > 30 && tempo < 45){
                return "Prato pronto, bom apetite. ---A Carne queimou---";
            }else{
                return "Prato pronto, bom apetite. ---KABUMM---";
          
    }
    case 4:
            if (tempo < 12){
                return "Prato pronto, bom apetite. ---Tempo insuficiente, por favor insira o tempo correto para o preparo do seu feijão---";
            }else if (tempo >= 12 && tempo <= 24){
                return "Prato pronto, bom apetite";
            }else if (tempo > 24 && tempo < 36){
                return "Prato pronto, bom apetite. ---O feijão queimou---";
            }else{
                return "Prato pronto, bom apetite. ---KABUMM---";
         
    }
    case 5:
            if (tempo < 8){
                return "Prato pronto, bom apetite. ---Tempo insuficiente, por favor insira o tempo correto para o preparo do seu brigadeiro---";
            }else if (tempo >= 8 && tempo <= 16){
                return "Prato pronto, bom apetite";
            }else if (tempo > 16 && tempo < 24){
                return "Prato pronto, bom apetite. ---O braigadeiro queimou---";
            }else{
                return "Prato pronto, bom apetite. ---KABUMM---";
            }
        default:
            return "Prato inexistente";
    
    }
}


console.log(microondas(5, 17));
