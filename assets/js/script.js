let listPage = ["homePage", "aboutPage", "contactPage"]
function changeMenuTo(menu) { 
    for(let i = 0; i < listPage.length; i++){
        if (listPage[i] == menu) {
            // show page
            let classPage = document.getElementById(menu).classList
            classPage.remove("hide-page")
            continue
        }

        // hide page
        let classPage = document.getElementById(listPage[i]).classList
        classPage.add("hide-page")
    }
}

changeMenuTo("homePage")

/*
Buat lah sebuah website yang memiliki minimal 2 page:
    - Home: Berisi tentang web tersebut
    - About: Berisi CV masing-masing
Semakin cantik dan sulit website nya, maka penilaian semakin bagus! :D
Presentasi mulai jam 1
*/