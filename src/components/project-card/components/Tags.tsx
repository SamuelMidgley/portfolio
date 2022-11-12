import { randInt } from '../../../games/cssgame/cssgame.helper'
import './Tags.scss'

export default function Tags(props: any) {
  return (
    <div className="tags">
      {props.tags.map((tag: any) => {
        return <div key={randInt(100000)}>{tag}</div>
      })}
    </div>
  )
}
