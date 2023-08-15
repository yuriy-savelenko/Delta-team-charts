import { elements } from "chart.js";

function ListData({
    day,
    profit,
    cash,
    cashless,
    kart,
    bill,
    guest,
    afterpaydeleted,
    beforepaydeleted,
    billsCount,
    guestsCount,
    id,
    selected,
    changeHighlightState,
    updateChartData
}) {

    const highlight = (event) => {

        const dataArr = [cash, cashless, kart, bill, guest, afterpaydeleted, beforepaydeleted, billsCount, guestsCount];
        const updatedData = dataArr.map(element => Number(element.replace(' ', '')))
        // console.log(updatedData)

        changeHighlightState(state => state.map(item =>
            event.target.parentElement.id === item.id && item.selected === false ? { ...item, 'selected': true } : { ...item, 'selected': false }
        ));
        updateChartData({
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
                    data: [...updatedData],
                    borderColor: 'rgba(75,192,192,1)',
                    backgroundColor: 'rgba(75,192,192,0.2)',
                },
            ],
        })
    };

    return (
        <ul id={id} onClick={highlight} className="list-data" >
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{day}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{profit}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{cash}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{cashless}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{kart}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{bill}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{guest}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{afterpaydeleted}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{beforepaydeleted}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{billsCount}</li>
            <li className={`list-data__item ${selected ? 'list-choosen' : ''}`} >{guestsCount}</li>
        </ul >
    )
}

export default ListData;