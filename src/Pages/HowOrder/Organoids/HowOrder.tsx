import { BigPicture } from "../../../Common/BigPicture/Organoids/BigPicture";
import "../Styles/HowOrder.css";
import Picture from "../../../Common/Pictures/HowOrder/HowOrder.jpg";
export const HowOrder = () => {
  return (
    <div className="HowOrder">
      <BigPicture text={"КАК ЗАКАЗАТЬ"} picture={Picture} size={"60vh"} newStyle={true}/>
      <div className="HowOrder__info">
        <div className="HowOrder__info__Top">
          <div className="HowOrder__info__Top_OneBlock">
            <div className="HowOrder__info__Top_OneBlock__Title">ОПЛАТА</div>
            <div className="HowOrder__info__Top_OneBlock__Text">
              Оплата покупок происходит при оформлении заказа через наш сайт с
              помощью системы электронных платежей Яндекс.Касса. <br /> Вы
              можете оплатить: Visa, MasterCard, Сбербанк Онлайн, WebMoney,
              Яндекс Деньги, QIWI, другими банковскими картами.
            </div>
          </div>
          <div className="HowOrder__info__Top_TwoBlock">
            <div className="HowOrder__info__Top_TwoBlock__Title__One">ДОСТАВКА</div>
            <div className="HowOrder__info__Top_TwoBlock__Title__Two">Все заказы мы отправляем Почтой России.</div>
            <div className="HowOrder__info__Top_TwoBlock__Text__One">
              Отправка осуществляется каждый(ую): понедельник, вторник и
              пятницу. Ваш заказ будет отправлен только после 100% оплаты.
              <br />
              Стоимость доставки рассчитывается по тарифам Почты России. <br />
              <br />
              На данный момент стоимость средней пересылки составляет в пределах
              200-350 руб. <br />
              <br />
              Срок доставки зависит от удаленности пункта получения, а также от
              работы службы доставки Почты РФ, по нашему опыту, это не более 9
              дней.
              <br />
              <br />
              Адрес доставки указывается при оформлении заказа.
            </div>
            <div className="HowOrder__info__Top_TwoBlock__Title__Three">
              *При покупке товаров на сумму свыше 6000 рублей действует
              бесплатная доставка по России и СНГ!
            </div>
          </div>
        </div>
        <div className="HowOrder__info__Bottom">
          <div className="HowOrder__info__Bottom__OneBlock">
            <div className="HowOrder__info__Bottom__OneBlock__Title__One">ВОЗВРАТ</div>
            <div className="HowOrder__info__Bottom__OneBlock__Title__Two">
              Вы можете вернуть свою покупку в течение 14 дней с момента
              получения заказа.
            </div>
            <div className="HowOrder__info__Bottom__OneBlock__Text_One">
              К возврату принимаются только те вещи, которые вы приобрели за
              полную стоимость. Товар, проданный на распродаже, к возврату не
              принимается. Вещи прошедшие стирку или бывшие в носке к возврату
              не принимаются.
            </div>
          </div>
          <div className="HowOrder__info__Bottom__TwoBlock__Text_Two">
            Мы не несем ответственности за все повреждения и потери, которые
            могут произойти с посылкой во время доставки.
          </div>
        </div>
      </div>
    </div>
  );
};
