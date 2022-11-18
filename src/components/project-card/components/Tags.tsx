import { randInt } from '../../../games/cssgame/cssgame.helper'
import Button from '../../button/Button'
import './Tags.scss'

export default function Tags(props: any) {
  return (
    <div className="tags">
      {props.tags.map((tag: any) => {
        return <Button key={randInt(100000)} text={tag} />
      })}
    </div>
  )
}
