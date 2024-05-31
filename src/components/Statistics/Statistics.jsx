
import {StaticItem} from 'components/StatisticsItem/staticitem'
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics =({  stats })=>{
  return(

    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
  
      <ul className={css.statlist}>
      {stats.map(stat => (
          <StaticItem key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};