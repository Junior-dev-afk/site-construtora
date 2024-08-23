class Site {

    constructor () {
        this.itens_btn_hamburger = [
            {
                name_button : "Home",
                link : ""
            },
            {
                name_button : "Estruturas",
                link : "estruturas"
            },
        ]
        this.btn_opcoes = false
        this.funcao_remove_opcoes = false
    }

    mostrarOpcoesBotaoHamburger (div) {

        if ( this.btn_opcoes !== false ) {
            return
        }
        
        let computedStyle = div.getBoundingClientRect();
        let top = computedStyle.top + 10
        let rigth = 70

        const home = document.createElement("div")

        home.id = "home-btn-options"

        console.log(top, rigth);

        home.style.cssText += `
            top:${top}px;
            left: ${rigth}px;
        `

        for ( let v of this.itens_btn_hamburger ) {
            const btn = document.createElement("button")
            btn.innerHTML = v.name_button
            btn.classList.add("button-home-options")

            btn.onclick = () => {
                window.location.href = `${window.location.origin}/${v.link}`
            }

            home.appendChild(btn)

        }

        if (!this.funcao_remove_opcoes) {
            window.onclick = (e) => {
                if ( this.btn_opcoes !== false ) {
                    const ele = e.target
                    console.log(ele);

                    if (ele.className == "icon-hamburger") {
                        return
                    }

                    this.ocultarOpcoesBtaoHamburger()
                }
            }
            this.funcao_remove_opcoes = true
        }

        this.btn_opcoes = home

        document.getElementById("topo").appendChild(home)

    }

    ocultarOpcoesBtaoHamburger () {

        if (this.btn_opcoes !== false) {
            
            this.btn_opcoes.remove()
            this.btn_opcoes = false

        }

    }

}

const site = new Site()