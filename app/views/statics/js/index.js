const destaques = [

    {
        imagem : "../statics/imagens/casa2.jpg",
        descricao : "casa bonita"
    },
    {
        imagem : "../statics/imagens/casa3.jpg",
        descricao : "casa bonita wdwad wd awd awd awd wadawdawdwadwad wadw dawdawdawdawdawdwad waddwadwadwadawdawdawdawdawdawdawd aw awdawdawdawdaw dawd awdwadawdaw dwad awd awdaw daw dawdaw daw dawd awdawdaw dawd awd aw dawd wad awdawdwadawdw ad aw"
    }

]

function gerarDestaques () {

    const container = document.getElementById("destaques")

    let index = 0

    const widht = window.innerWidth
    const height = window.innerHeight

    for ( let item of destaques) {

        let margin = (widht * 2) + ( widht / 100 * 20 )

        if ( index % 2 === 0 ) {
            margin = 0
        } 

        const div = document.createElement("div")
        const img = document.createElement("img")
        const lab = document.createElement("label")
        const btn = document.createElement("button")

        lab.innerHTML = item.descricao
        btn.innerHTML = "EU QUERO!"

        div.classList.add("item-destacado")
        lab.classList.add("label-destacado")
        btn.classList.add("button-destacado")

        img.src = item.imagem
        console.log(item.imagem);

        img.style.cssText = `
            width: ${widht / 100 *70}px;
            height: auto;
            margin-block:20px;
            border-radius:20px;
        `

        div.style.cssText = `
            width: ${widht / 100 *80}px;
            height: auto;
            min-height:600px;
            margin-block:30px;
            margin-left:${margin}px;
        `

        div.appendChild(img)
        div.appendChild(lab)
        div.appendChild(btn)
        container.appendChild(div)



        index++

        let thisInterval = setInterval((div) => {

            let computedStyle = div.getBoundingClientRect();
            let top = computedStyle.top;

            if ( top <= height ) {
                clearInterval(thisInterval)
                moverDivParaCentro(div)
            }

        }, 100, div)

    }

}

gerarDestaques()

function moverDivParaCentro (div) {

    const widht = window.innerWidth

    const left = parseInt(div.style["margin-left"].replace("px", ''))

    let move = -10

    if ( left <= 10 ) {
        move = 10
    }

    console.log(move);

    const vezes = (widht + (widht / 100 * 10)) / 10
    let index = 0

    const interval = setInterval(()=>{

        index++

        let position_actual = div.style["margin-left"]

        position_actual = parseInt(position_actual.replace("px", ''))

        div.style["margin-left"] = `${position_actual+move}px`

        if ( index >= vezes ) {

            clearInterval(interval)

            div.style["margin-left"] = `${widht + (widht / 100 * 10)}px`

        }

    }, 10)

}


