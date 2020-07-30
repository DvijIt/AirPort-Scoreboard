import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as scoreboardActions from '../scoreboard.actions'
import { fligthDepartureListSelector } from '../scoreboard.selectors';

const TableBody = ({ getFligthList, fligthList }) => {
  useEffect(() => {
    getFligthList()
    console.log(fligthList)
  }, [])
  return (
    <tbody className="scoreboard__body">
      {/* {
        fligthList.map(item => {
          return (
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          )
        })
      } */}
    </tbody>
  )
}

TableBody.propTypes = {
  getFligthList: PropTypes.func
  // fligthList: PropTypes.array
}

TableBody.defaultProps = {
  getFligthList: PropTypes.func
  // fligthList: PropTypes.array
}

const mapState = state => {
  return {
    fligthList: fligthDepartureListSelector(state)
  }
}

const mapDispatch = {
  getFligthList: scoreboardActions.getFligthList
}

export default connect(mapState, mapDispatch)(TableBody)
