const PostBody = ({ content }) => {
  return (
    <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default PostBody
