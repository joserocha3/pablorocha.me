import { useColorMode } from '@chakra-ui/core'

const PostBody = ({ content }) => {
  const { colorMode } = useColorMode()
  return (
    <div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
      {colorMode === 'light' ? (
        <style global jsx>
          {`
            code[class*='language-'],
            pre[class*='language-'] {
              color: #393a34;
              font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              direction: ltr;
              text-align: left;
              white-space: pre;
              word-spacing: normal;
              word-break: normal;
              font-size: 1em;
              line-height: 1.8;

              -moz-tab-size: 4;
              -o-tab-size: 4;
              tab-size: 4;

              -webkit-hyphens: none;
              -moz-hyphens: none;
              -ms-hyphens: none;
              hyphens: none;
            }

            pre > code[class*='language-'] {
              font-size: 1em;
            }

            pre[class*='language-']::-moz-selection,
            pre[class*='language-'] ::-moz-selection,
            code[class*='language-']::-moz-selection,
            code[class*='language-'] ::-moz-selection {
              background: #c1def1;
            }

            pre[class*='language-']::selection,
            pre[class*='language-'] ::selection,
            code[class*='language-']::selection,
            code[class*='language-'] ::selection {
              background: #c1def1;
            }

            /* Code blocks */
            pre[class*='language-'] {
              padding: 1em;
              margin: 0.5em 0;
              overflow: auto;
              border: 1px solid #dddddd;
              background-color: #f5f6f9;
              border-radius: 6px;
              margin-bottom: 32px;
              margin-top: 32px;
            }

            /* Inline code */
            :not(pre) > code {
              padding: 0.2em;
              padding-top: 1px;
              padding-bottom: 1px;
              border: 1px solid #dddddd;
              background: #f5f6f9;
              border-radius: 3px;
              font-size: 0.8em;
            }

            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #008000;
              font-style: italic;
            }

            .token.namespace {
              opacity: 0.7;
            }

            .token.string {
              color: #a31515;
            }

            .token.punctuation,
            .token.operator {
              color: #393a34; /* no highlight */
            }

            .token.url,
            .token.symbol,
            .token.number,
            .token.boolean,
            .token.variable,
            .token.constant,
            .token.inserted {
              color: #36acaa;
            }

            .token.atrule,
            .token.keyword,
            .token.attr-value,
            .language-autohotkey .token.selector,
            .language-json .token.boolean,
            .language-json .token.number,
            code[class*='language-css'] {
              color: #0000ff;
            }

            .token.function {
              color: #393a34;
            }

            .token.deleted,
            .language-autohotkey .token.tag {
              color: #9a050f;
            }

            .token.selector,
            .language-autohotkey .token.keyword {
              color: #00009f;
            }

            .token.important,
            .token.bold {
              font-weight: bold;
            }

            .token.italic {
              font-style: italic;
            }

            .token.class-name,
            .language-json .token.property {
              color: #2b91af;
            }

            .token.tag,
            .token.selector {
              color: #800000;
            }

            .token.attr-name,
            .token.property,
            .token.regex,
            .token.entity {
              color: #ff0000;
            }

            .token.directive.tag .tag {
              background: #ffff00;
              color: #393a34;
            }

            .line-numbers .line-numbers-rows {
              border-right-color: #a5a5a5;
            }

            .line-numbers-rows > span:before {
              color: #2b91af;
            }

            .line-highlight {
              background: rgba(193, 222, 241, 0.2);
              background: -webkit-linear-gradient(
                left,
                rgba(193, 222, 241, 0.2) 70%,
                rgba(221, 222, 241, 0)
              );
              background: linear-gradient(
                to right,
                rgba(193, 222, 241, 0.2) 70%,
                rgba(221, 222, 241, 0)
              );
            }
          `}
        </style>
      ) : (
        <style global jsx>
          {`
            code[class*='language-'],
            pre[class*='language-'] {
              color: #f8f8f2;
              background: none;
              text-shadow: 0 1px rgba(0, 0, 0, 0.3);
              font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              font-size: 1em;
              text-align: left;
              white-space: pre;
              word-spacing: normal;
              word-break: normal;
              word-wrap: normal;
              line-height: 1.8;

              -moz-tab-size: 4;
              -o-tab-size: 4;
              tab-size: 4;

              -webkit-hyphens: none;
              -moz-hyphens: none;
              -ms-hyphens: none;
              hyphens: none;
            }

            /* Code blocks */
            pre[class*='language-'] {
              padding: 1em;
              margin: 0.5em 0;
              overflow: auto;
              border-radius: 0.3em;
              margin-bottom: 32px;
              margin-top: 32px;
            }

            :not(pre) > code[class*='language-'],
            pre[class*='language-'] {
              background: #151e27;
            }

            /* Inline code */
            :not(pre) > code {
              padding: 0.1em;
              border-radius: 0.3em;
              white-space: normal;
              font-size: 0.8em;
              background: #151e27;
            }

            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #8292a2;
            }

            .token.punctuation {
              color: #f8f8f2;
            }

            .token.namespace {
              opacity: 0.7;
            }

            .token.property,
            .token.tag,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: #f92672;
            }

            .token.boolean,
            .token.number {
              color: #ae81ff;
            }

            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: #a6e22e;
            }

            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string,
            .token.variable {
              color: #f8f8f2;
            }

            .token.atrule,
            .token.attr-value,
            .token.function,
            .token.class-name {
              color: #e6db74;
            }

            .token.keyword {
              color: #66d9ef;
            }

            .token.regex,
            .token.important {
              color: #fd971f;
            }

            .token.important,
            .token.bold {
              font-weight: bold;
            }
            .token.italic {
              font-style: italic;
            }

            .token.entity {
              cursor: help;
            }
          `}
        </style>
      )}
    </div>
  )
}

export default PostBody
