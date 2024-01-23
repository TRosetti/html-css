document.addEventListener("DOMContentLoaded", function () {
    createCards().then(() => {
        organizeCardsByCategory();
        changeColor();
    });
});

function organizeCardsByCategory() {
    const cardContainer = document.getElementById("cardContainer");
    const categories = ['entradas', 'guarnicoes', 'carnes', 'bebidas', 'drinks'];

    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container', category);
        

        // Adicione um elemento para o nome da categoria
        const categoryTitle = document.createElement('h3');
        categoryTitle.id = category
        categoryTitle.textContent = category;
        categoryContainer.appendChild(categoryTitle);

        cardContainer.appendChild(categoryContainer);
    });

    const cards = document.querySelectorAll('.card_');

    cards.forEach(card => {
        const category = card.classList.contains('entradas') ? 'entradas' :
                         card.classList.contains('guarnicoes') ? 'guarnicoes' :
                         card.classList.contains('carnes') ? 'carnes' :
                         card.classList.contains('bebidas') ? 'bebidas' :
                         card.classList.contains('drinks') ? 'drinks' : 'outros';

        const categoryContainer = document.querySelector(`.category-container.${category}`);
        
        // Adicione o card ao contêiner da categoria apropriada
        categoryContainer.appendChild(card);
    });
}


function createCards() {
    return new Promise((resolve, reject) => {
        // Obtenha o contêiner onde os cards serão adicionados
        const cardContainer = document.getElementById("cardContainer");

        // Use a função fetch para carregar os dados do arquivo JSON
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                // Itere sobre os dados e crie um card para cada item
                data.forEach(item => {
                    // Crie os elementos HTML para o card
                    const card = document.createElement("div");
                    card.classList.add("card_");
                    card.classList.add(item.class1)

                    const card_content = document.createElement("div");
                    card_content.classList.add("card_content");

                    const card_title = document.createElement("h2");
                    card_title.classList.add('card_title')
                    card_title.textContent = item.title;

                    const card_text = document.createElement("p");
                    card_text.classList.add('card_text')
                    card_text.textContent = item.content;

                    const price = document.createElement('div');
                    price.classList.add('price');

                    const price1 = document.createElement('p');
                    price1.textContent = item.price1

                    const price2 = document.createElement('p');
                    price2.classList.add('price_discount')
                    price2.textContent = item.price2

                    const div_img = document.createElement('div')
                    div_img.classList.add('img')
            

                    const img = document.createElement('img')
                    img.src = item.img;


                    
                         
                    // Adicione os elementos ao card
                    card.appendChild(card_content);
                    card_content.appendChild(card_title);
                    card_content.appendChild(card_text);
                    card_content.appendChild(price);
                    price.appendChild(price1);
                    price.appendChild(price2);
                    card.appendChild(div_img);
                    div_img.appendChild(img);

                    // Adicione o card ao contêiner
                    console.log(card.classList)
                    cardContainer.appendChild(card);

                    
                    
                });
              

                // Resolva a Promise após criar todos os cards
                resolve();
            })
            .catch(error => {
                console.error("Erro ao carregar dados:", error);
                // Rejeite a Promise em caso de erro
                reject(error);
            });

           
    });
}
 




function changeImage(){}

function changeColor() {
    let hoje = new Date();
    let diaDaSemana = hoje.getDay();
    const card_content = document.querySelectorAll('.card_content');

    
    switch (diaDaSemana) {
        case 0:
            // Domingo
            card_content.forEach((card) => {
                card.style.backgroundColor = 'red';
            });
           
            break;
        case 1:
            // Segunda-Feira
            card_content.forEach((card) => {
                card.style.backgroundColor = 'green';
            });
            break;
        case 2:
            // Terça-Feira
            card_content.forEach((card) => {
                card.style.backgroundColor = 'yellow';
            });
            break;
        case 3:
            // Quarta-Feira
            card_content.forEach((card) => {
                card.style.backgroundColor = 'green';
            });
            break;
        case 4:
            // Quinta-Feira
            card_content.forEach((card) => {
                card.style.backgroundColor = 'blue';
            });
            break;
        case 5:
            // Sexta-Feira
            card_content.forEach((card) => {
                card.style.backgroundColor = 'gray';
            });
            break;
        case 6:
            // Sábado
            card_content.forEach((card) => {
                card.style.backgroundColor = 'green';
            });
            break;
        default:
            // Lidar com casos não previstos
    }

   
}


