import React from "react"
import Items from "../CatalogOfTovar/Items"
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import '../CatalogOfTovar/Catalog.css'

class Catalog extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items:  [
                {
                    id: 1,
                    title: 'Антропометр',
                    img: '1_101.png',
                    desc: 'Для определения всех высотных размеров тела',
                    category: 'antp_met',
                    price: '4000'
                },
                {
                    id: 2,
                    title: 'Изогнутые измерительные дуги',
                    img: '1_102.png',
                    desc: 'Для измерения сагиттального диаметра груди',
                    category: 'dugi',
                    price: '2000'
                },
                {
                    id: 3,
                    title: 'Игла орикулярной высоты',
                    img: '1_103.png',
                    desc: 'Для измерения орикулярной высоты головы',
                    category: 'igla',
                    price: '5000'
                },
                {
                    id: 4,
                    title: 'Малая сумка с инструментами',
                    img: '1_112.png',
                    desc: 'Малая сумка с антропологическими инструментами (малый набор)',
                    category: 'tool',
                    price: '10000'
                },
                {
                    id: 5,
                    title: 'Игла горизонтальных линий до 300 мм',
                    img: '1_205.png',
                    desc: 'Для проведения горизонтальных линий, высота до 300 мм',
                    category: 'igla',
                    price: '7500'
                },
                {
                    id: 6,
                    title: 'Квадратный диоптрограф (мартина)',
                    img: '1_211.png',
                    desc: 'Для контурного обвода черепа в краниометрии',
                    category: 'dipt',
                    price: '25000'
                },
                {
                    id: 7,
                    title: 'Прямоугольный диоптрограф (мартина)',
                    img: '1_212.png',
                    desc: 'Для контурного обвода костей в остеометрии',
                    category: 'dipt',
                    price: '27000'
                },
                {
                    id: 8,
                    title: 'Опорная подставка для антропометра ',
                    img: '1_1013.png',
                    desc: 'Для установки антропометра в вертикально',
                    category: 'antp_met',
                    price: '1500'
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    render(){
        return(
            <div className='wrapper'>
                <section className='section-header'>
                        <Header orders={this.state.orders}/>
                        <Reklama/>
                        <div className="container">
                            <div className="fofo">
                                <Items items={this.state.items} onAdd={this.addToOrder} />
                            </div>
                        </div>
                </section>
            </div>
        ) 
    }
    addToOrder(item) {
        this.setState({oders: [...this.state.orders, item] }, () => {
          console.log(this.state.orders)
        })
    }
}


export default Catalog;