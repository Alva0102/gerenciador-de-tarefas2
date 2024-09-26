let contador = 1


function pegarValorPorId(id)
{
    return document.getElementById(id).value
}

function salvar() {
    try
    {
      
       
    
    let nome = pegarValorPorId('tarefa')
    let descTarefa = pegarValorPorId('descricao')
    let data = document.getElementById ('data')
    let tempo = document.getElementById ('tempo')
    let categoria = document.getElementById ('categoria')
    let dia = data.value
    let hora = tempo.value
    let selectCat = categoria.options[categoria.selectedIndex].text

        //let grifarTexto = descTarefa.replace(/\*(.*?)\*/g, '<span class="grifado">$1</span>')
        verificarForm(nome, descTarefa, dia, hora, selectCat)
        rederizarForm(nome, descTarefa, dia, hora, selectCat)
    }
    catch(err)
    {
        alert(err.message)
    }
}

function verificarForm(nome, descTarefa, dia, hora, selectCat)
{
    if ((nome, descTarefa, dia, hora == "") ||
     (nome, descTarefa, dia, hora == null) ||
     (nome, descTarefa, dia, hora == undefined)){
        throw new Error("Errrooooo");
    }
}

function rederizarForm(nome, descTarefa, dia, hora, selectCat)
{
    let main = document.getElementById ('main')
    let novoItem = `
        <div id="item">
            <p>${contador}</p>
        </div>
        
        <div id="cat">
        <p>${selectCat}</p>
        </div>

        <div id="tarefa2">
            <p>${nome}</p>
        </div>

        <div id="descricao2">
            <p>${descTarefa}</p>
        </div>

        <div id="data2">
            <p>${dia}</p>
        </div>

        <div id="tempo2">
            <p>${hora}</p>
        </div>

        <div>
            <input id="botaoExcluir" type="button" value="Excluir" onclick="excluir(${contador})">
        </div>`
    item = criarItem()
    item.innerHTML += novoItem;
    main.append(item)
    ++contador
}

function criarItem()
{
    let item = document.createElement('div')
    item.id = contador
    item.className = "tela2"
    return item
}

function excluir(id){
    let excluir = document.getElementById (id)
    excluir.remove()
 }


    

/*<div id="${contador}"class="tela2">
           <div id="item">
            <p>${contador}</p>
          </div>

        <div id="tarefa2">
            <p>${nome}</p>
        </div>

        <div id="descricao2">
            <p>${grifarTexto}</p>
        </div>

        <div id="data2">
            <p>${dia}</p>
        </div>

        <div id="tempo2">
            <p>${hora}</p>
        </div>

        <div>
            <input id="botaoExcluir" type="button" value="Excluir" onclick="excluir(${contador})">
        </div>
    </div>` */