import services1 from './../assets/services1.png'
import services2 from './../assets/services2.png'
import services3 from './../assets/services3.png'


export default function Services() {
    return(
        <section className="services">
            <div className="services__item">
                <img className="services__item--img" src={services1} alt="" />
                <p className="services__item--p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum numquam corporis temporibus magni! Sunt ullam voluptatum dolor facere reprehenderit excepturi dolore. Nesciunt consequatur fugit iusto. Reiciendis sint quae in!
                </p>
            </div>
            <div className="services__item">
                <img className="services__item--img" src={services2} alt="" />
                <p className="services__item--p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum numquam corporis temporibus magni! Sunt ullam voluptatum dolor facere reprehenderit excepturi dolore. Nesciunt consequatur fugit iusto. Reiciendis sint quae in!
                </p>
            </div>
            <div className="services__item">
                <img className="services__item--img" src={services3} alt="" />
                <p className="services__item--p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum numquam corporis temporibus magni! Sunt ullam voluptatum dolor facere reprehenderit excepturi dolore. Nesciunt consequatur fugit iusto. Reiciendis sint quae in!
                </p>
            </div>
        </section>
    )
}