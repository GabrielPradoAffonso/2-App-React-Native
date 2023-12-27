import green from '../assets/assets/produtores/green.png'
import salad from '../assets/assets/produtores/salad.png'
import jennyJack from '../assets/assets/produtores/jenny-jack.png'
import grow from '../assets/assets/produtores/grow.png'
import potager from '../assets/assets/produtores/potager.png'

const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${numeroAleatorio(1, 500)}m`,
            estrelas: numeroAleatorio(0, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${numeroAleatorio(1, 500)}m`,
            estrelas: numeroAleatorio(0, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${numeroAleatorio(1, 500)}m`,
            estrelas: numeroAleatorio(0, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${numeroAleatorio(1, 500)}m`,
            estrelas: numeroAleatorio(0, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${numeroAleatorio(1, 500)}m`,
            estrelas: numeroAleatorio(0, 5),
        }
    ]
}

export default produtores;