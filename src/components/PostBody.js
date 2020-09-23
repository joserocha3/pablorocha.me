import { useColorModeValue } from '@chakra-ui/core'

const PostBody = ({ content }) => {
  const blockquoteBackgroundColor = useColorModeValue('azure', '#013C3C')

  return (
    <div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
      <style global jsx>{`
        .markdown h2,
        .markdown h3,
        .markdown p,
        .markdown a,
        .markdown ul,
        .markdown ol,
        .markdown code,
        .markdown pre,
        .markdown img,
        .markdown blockquote {
          font-size: 1.1rem;
          margin-bottom: 16px;
        }

        .markdown p {
          line-height: 1.8;
        }

        .markdown a {
          text-decoration: underline;
        }

        .markdown img {
          margin: auto;
          width: 80%;
          height: auto;
        }

        .markdown blockquote {
          font-style: italic;
          margin-bottom: 32px;
        }

        .markdown em {
          font-weight: bold;
        }

        .markdown blockquote p {
          padding: 12px;
          background-color: ${blockquoteBackgroundColor};
          border-left: 4px solid #62dafc;
        }

        .markdown h2 {
          font-weight: bold;
          font-size: 32px;
          margin-top: 48px;
          border-bottom: solid 1px #dadada;
        }

        .markdown h3 {
          font-weight: bold;
          font-size: 24px;
          margin-top: 32px;
        }

        .markdown p code {
          background: #dcdcdc;
          color: black;
          padding: 1px 4px;
          border-radius: 3px;
          font-size: 1rem;
        }

        .markdown pre {
          background: #2d2d2d;
          color: white;
          padding: 12px;
          border-radius: 3px;
          overflow-x: scroll;
          line-height: 1.8;
        }

        .markdown pre code {
          font-size: 1rem;
        }

        .markdown ul {
          margin-left: 32px;
        }
      `}</style>
    </div>
  )
}

export default PostBody
