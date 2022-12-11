import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Выбор товара</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Товар в интернет-магазине можно выбрать по техническим характеристикам.Кликните по квадратикам напротив нужных вам параметров. На обновившейся странице вы увидите модели, которые имеют заданные вами характеристики.Чтобы посмотреть подробную информацию о вещи - цвет , размер, цена и т.д. – нужно кликнуть на картинку с изображением товара. Вы попадете на страницу именно этого товара и сможете подробнее с ним ознакомиться.На странице товара находится кнопка «Купить» или «Положить в корзину». Если вы решили купить товар, нажмите на нее. Выбранные вами товары отобразятся в разделе «Корзина». Как правило, этот раздел находится вверху справа и сопровождается изображением тележки супермаркета.
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Общий алгоритм</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Общий алгоритм дальнейших действий по покупке товара в интернете следующий:

1)Формируете заказ в корзине на сайте.
2)Указываете адрес доставки и свои данные для связи.
3)Выбираете способ доставки.
4)Выбираете способ оплаты.
5)Если по условиям магазина необходима предоплата, оплачиваете товар.
6)Получаете свою покупку.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}