import { useState } from 'react';
import ChartComponent from './components/ChartComponent';
import ListData from './components/ListData';
import './style.scss'
import 'normalize.css'

function App() {

  const [highlightState, setHighlightState] = useState([{
    id: '1',
    selected: false
  }, {
    id: '2',
    selected: false
  }, {
    id: '3',
    selected: false
  }])

  const [chartData, setChartData] = useState({
    labels: [
      'Наличные',
      'Безналичный расчет',
      'Кредитные карты',
      'Средний чек, руб',
      'Средний гость, руб',
      'Удаления из чека',
      'Удаления из счета',
      'Количество чеков',
      'Количество гостей'
    ],
    datasets: [
      {
        label: 'Data Line',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  });

  const updateChartData = (data) => {
    setChartData(data);
  };

  const changeHighlightState = (element) => {
    setHighlightState(element)
  }

  return (
    <div className="container">
      <ul className="list-static">
        <li className="list-static__item">Показатели</li>
        <li className="list-static__item">Выручка, руб</li>
        <li className="list-static__item">Наличные</li>
        <li className="list-static__item">Безналичный расчет</li>
        <li className="list-static__item">Кредитные карты</li>
        <li className="list-static__item">Средний чек, руб</li>
        <li className="list-static__item">Средний гость, руб</li>
        <li className="list-static__item">Удаления из чека <br /> (после оплаты), руб</li>
        <li className="list-static__item">Удаления из счета <br /> (до оплаты), руб</li>
        <li className="list-static__item">Количество чеков</li>
        <li className="list-static__item">Количество гостей</li>
      </ul>
      <ListData
        id={highlightState[0].id}
        selected={highlightState[0].selected}
        changeHighlightState={changeHighlightState}
        updateChartData={updateChartData}
        day={'Текущий день'}
        profit={'500 521'}
        cash={'300 000'}
        cashless={'100 000'}
        kart={'100 521'}
        bill={'1 300'}
        guest={'1 200'}
        afterpaydeleted={'1000'}
        beforepaydeleted={'1300'}
        billsCount={'34'}
        guestsCount={'34'}
      />
      <ListData
        id={highlightState[1].id}
        selected={highlightState[1].selected}
        changeHighlightState={changeHighlightState}
        updateChartData={updateChartData}
        day={'Вчера'}
        profit={'222 521'}
        cash={'200 000'}
        cashless={'200 000'}
        kart={'200 521'}
        bill={'2 300'}
        guest={'2 200'}
        afterpaydeleted={'2000'}
        beforepaydeleted={'2300'}
        billsCount={'24'}
        guestsCount={'24'}
      />
      <ListData
        id={highlightState[2].id}
        selected={highlightState[2].selected}
        changeHighlightState={changeHighlightState}
        updateChartData={updateChartData}
        day={'Этот день недели'}
        profit={'300 521'}
        cash={'300 000'}
        cashless={'300 000'}
        kart={'300 521'}
        bill={'3 300'}
        guest={'3 200'}
        afterpaydeleted={'3000'}
        beforepaydeleted={'3300'}
        billsCount={'14'}
        guestsCount={'14'}
      />
      <ChartComponent
        chartData={chartData}
      />
    </div>
  );
}

export default App;
