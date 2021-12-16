function dados() {
    var nome = document.getElementById('nome').value;
    var comentario = document.getElementById('comentario').value;
   

    console.log(nome, comentario)

    if (nome && comentario) {
        localStorage.setItem(nome,comentario);
        alert('Obrigado Pelo Feedback')
        window.location.pathname = './index.html'
    } else {
        alert('Erro')
    }


    
// var dadosenviados = {
    
// "email" : email,
// "senha" : senha,
// "idade" : idade,
// "sexo" : sexo,
// }
// console.log(dadosenviados)
}


// function login() {
//     var nome = document.getElementById('nome').value;
//     var comentario = document.getElementById('comentario').value;

//     var valorLocal = localStorage.getItem(nome)

//     if (valorLocal && valorLocal === comentario) {
//         window.location.pathname = './index.html';
//     } else {
//         alert('Obrigado Pelo Feedback')
//     }
// }

function ativar() {
    document.getElementById('cursos-menu').classList.toggle('animar')
}

function ativartop() {
    document.getElementById('topicos').classList.toggle('animar')
}


