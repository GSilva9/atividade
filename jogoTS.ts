import prompt from "prompt-sync";
//nome, vida, stamina, ataque, defesa



class Personagem{
    
    constructor(
        public nome: string, 
        public vida: number, 
        public stamina: number, 
        public soco: number,
        public chute: number,
        public defesa: number
    ) {}
}
let teclado = prompt();
//                                          NOME,     VIDA,         STAMINA,                             SOCO                              CHUTE                        DEFESA                                           
var nome = teclado("Escolha o nome do lutador: ")
let person: Personagem = new Personagem(nome, 100, 10+Math.round(Math.random()*40), 10+Math.round(Math.random()*30), 10+Math.round(Math.random()*30), 10+Math.round(Math.random()*20))
//let person: Personagem = new Personagem("Sansa Stark", 100, 10+Math.round(Math.random()*40), 10+Math.round(Math.random()*30), 10+Math.round(Math.random()*30), 10+Math.round(Math.random()*20))


let option: number = 0;
let days: number = 0;

while(option != 9 ){
    console.log();
    console.log('+======= Personagem =====+');
    console.log('|1. Marcar Luta          |');
    console.log('|2. Treinar Soco         |');
    console.log('|3. Treinar Chute        |');
    console.log('|4. Treinar Defesa       |');
    console.log('|5. Recuperar Vida       |');
    console.log('|6. Recuperar Stamina    |');
    console.log('|7. Listar Personagem    |');
    console.log('|8. Lutar                |');
    console.log('|9. Sair                 |');
    console.log('+========================+');
    console.log();

    option = +teclado('Escolha uma ação: ');

    switch(option){
        case 1:
            marcarLutra();
            break;
        case 2:
            treinarSoco();
            break;
        case 3:
            treinarChute();
            break;
        case 4:
            treinarDefesa();
            break;
        case 5:
            recuperarVida();
            break;
        case 6:
            recuperarStamina()    
            break;
        case 7:
            listarPersonagem();
            break;
        case 8:
            luta();
            break;
        default:
            break;
    }
}

function marcarLutra(){
    console.log()
    days = +teclado('Escolha quando será sua luta (1 até 7 dias): ');
    console.log()
    if(days < 1 || days > 7){
        console.log()
        console.log('+============ERRO============+')
        console.log('|Escolha entre 1 dia e 7 dias|')
        console.log('+============================+')
        console.log()
    }else{
        console.log()
        console.log('+==========================+')
        console.log('|Luta Marcada! Prepare-se!!|')
        console.log('+==========================+')
        console.log()
    }
}

function treinarSoco(){
    if(days != 0){
        person.soco += Math.round(Math.random() * 5);
        person.vida -= Math.round(Math.random() * 10);
        person.stamina -= Math.round(Math.random() * 3);
        
        let random: number = (Math.random()*100)
        

        if(random > person.vida){
            console.log('Infelizmente Você Quebrou o Braço Treinando')
            days = 0
            
        }else{
            console.log()
            console.log('Segue para mais dia de treino')
            console.log()
            days -= 1
            if(days == 0){
                console.log('Você não pode mais treinar! VÁ LUTAR')
            }else{
                console.log(`Continue treinando, você tem ${days} dias até sua luta!!`)
            }
        }
    }else{
        console.log(`VOCÊ NÃO PODE MAIS TREINAR, VÁ LUTAR!`)
    }
}

function treinarChute(){
    if(days != 0){
        person.chute += Math.round(Math.random() * 6);
        person.vida -= Math.round(Math.random() * 10);
        person.stamina -= Math.round(Math.random() * 4);
        
        let random: number = (Math.random()*100)
        
        if(random > person.vida){
            console.log('Infelizmente Você Quebrou a Perna Treinando')
            days = 0
            
        }else{
            console.log()
            console.log('Segue para mais dia de treino')
            console.log()
            days -= 1
            if(days == 0){
                console.log('Você não pode mais treinar! VÁ LUTAR')
            }else{
                console.log(`Continue treinando, você tem ${days} dias até sua luta!!`)
            }
        }
    }else{
        console.log(`VOCÊ NÃO PODE MAIS TREINAR, VÁ LUTAR!`)
    }
}

function treinarDefesa(){
    if(days != 0 && days >= 2){
        person.defesa += Math.round(Math.random() * 7);
        person.vida -= Math.round(Math.random() * 10);
        person.stamina -= Math.round(Math.random() * 3);
        
        let random: number = (Math.random()*100)
        
        if(random > person.vida){
            console.log('Infelizmente Você Morreu treinando')
            days = 0
            
        }else{
            console.log()
            console.log('Segue para mais dia de treino')
            console.log()
            days -= 2
            if(days == 0){
                console.log('Você não pode mais treinar! VÁ LUTAR')
            }else{
                console.log(`Continue treinando, você tem ${days} dias até sua luta!!`)
            }
        }
    }else{
        console.log(`VOCÊ NÃO PODE MAIS TREINAR, VÁ LUTAR!`)
    }
}

function recuperarVida(){
    if(days != 0){
        person.vida += Math.round(Math.random() * 10);

        days -= 1
        if(days == 0){
            console.log('Treino feito - Você não pode mais treinar! VÁ LUTAR')
        }
        else{
            console.log(`Continue treinando, você tem ${days} dias até sua luta!!`)
        }   
    }
    else{
        console.log(`VOCÊ NÃO PODE MAIS TREINAR, VÁ LUTAR!`)
    }      
}

function recuperarStamina(){
    if(days != 0){
        person.stamina += Math.round(Math.random() * 3);

        days -= 1
        if(days == 0){
            console.log('Treino feito - Você não pode mais treinar! VÁ LUTAR')
        }
        else{
            console.log(`Continue treinando, você tem ${days} dias até sua luta!!`)
        }   
    }
    else{
        console.log(`VOCÊ NÃO PODE MAIS TREINAR, VÁ LUTAR!`)
    }        
}

function listarPersonagem(){
    console.log("person :>> ", person);
}

function luta(){
    let menu: number = 0;

    console.log('VOCÊ TEM 3 CHANCES, ESCOLHA OS GOLPES COM SABEDORIA')

    while(menu != 4 ){
        console.log('+======= Personagem =====+');
        console.log('|1. Soquear              |');
        console.log('|2. Chutar               |');
        console.log('|3. Defender             |');
        console.log('|4. Relatório da luta    |');
        console.log('|5. Sair                 |');
        console.log('+========================+');

        menu = +teclado('Escolha uma ação: ');

        switch(menu){
            case 1:
                soquear();
                break;
            case 2:
                chutar();
                break;
            case 3:
                defender();
                break;
            case 4:
                relatorioLuta();
                break;           
            default:
                break;
        }
    }

    let acerto = 0
    let erro = 0
    let chances = 0

    function soquear(){
        if(chances != 3){
            person.stamina -= Math.round(Math.random() * 8);

            chances++

            let socoInimi: number = (Math.random()*100);

            if(person.soco > socoInimi){
                acerto++
                console.log()
                console.log('Você Acertou!!')
                console.log()            
            }else{
                person.vida -= Math.round(Math.random() * 20);
                console.log()
                console.log('Você ERROU!!')
                console.log()
                erro++
            }
        }else{
            console.log('Você já lutou todas as vezes!!!')
        }
        
    }

    function chutar(){
        if(chances != 3){
            person.stamina -= Math.round(Math.random() * 8);
            chances++
            let chuteInimi: number = (Math.random()*100);
            console.log(chances)
            if(person.chute > chuteInimi){
                acerto++
                console.log()
                console.log('Você Acertou!!')
                console.log()            
            }else{
                person.vida -= Math.round(Math.random() * 20);
                console.log()
                console.log('Você ERROU!!')
                console.log()
                erro++
            }
        }else{
            console.log('Você já lutou todas as vezes!!!')
        }

    }

    function defender(){
        if(chances != 3){
            person.stamina -= Math.round(Math.random() * 8);
            chances++
            let defesaInimi: number = (Math.random()*100);

            if(person.defesa > defesaInimi){
                acerto++
                console.log()
                console.log('Você Acertou!!')
                console.log()            
            }else{
                person.vida -= Math.round(Math.random() * 20);
                console.log()
                console.log('Você ERROU!!')
                console.log()
                erro++
            }
        }else{
            console.log('Você já lutou todas as vezes!!!')
        }
    }

    function relatorioLuta(){
        if(acerto >=2){
            console.log('PARABÉNS VOCÊ VENCEU!!!!')
        }else{
            console.log('VOCÊ FOI DERROTADO!!!!')
        }
    }

}