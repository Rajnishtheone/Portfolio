type TagListProps = {
  tags: string[]
}

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="meta-chip">
          {tag}
        </li>
      ))}
    </ul>
  )
}
