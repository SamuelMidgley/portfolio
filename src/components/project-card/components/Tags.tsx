import { useCallback } from 'react'
import Button from '../../button/Button'
import './Tags.scss'
import { randInt } from '../../../projects/cssgame/cssgame.helper'

interface TagsProps {
  tags: string[] | undefined
}

export default function Tags(props: TagsProps) {
  const { tags } = props

  const clickHandler = useCallback(() => {}, [])

  return (
    <div className="tags">
      {tags &&
        tags.map((tag) => {
          return (
            <Button
              key={randInt(100000)}
              text={tag}
              onClickHandler={clickHandler}
            />
          )
        })}
    </div>
  )
}
