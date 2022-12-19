import { useCallback } from 'react'
import Button from '../../button/Button'
import './Tags.scss'

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
          return <Button key={tag} text={tag} onClickHandler={clickHandler} />
        })}
    </div>
  )
}
