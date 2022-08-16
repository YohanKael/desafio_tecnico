import ChartItem from './ChartItem';
import './ChartList.css';

const ChartList = ({chartsInfo}) => {
  return (
    <div className='ChartList'>
      {chartsInfo
      .filter((info) => info.show)
      .map((info) => <ChartItem key={info.options.title.text} info={info} />)}
    </div>
  )
}

export default ChartList