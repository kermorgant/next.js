import Link from 'next/link'

export default () => (
  <>
    <h3 id="nav">Nav</h3>
    <Link href="/hello" as="/first">
      <a id="to-hello">to hello</a>
    </Link>
    <br />
    <Link href="/hello-again" as="/second">
      <a id="to-hello-again">to hello-again</a>
    </Link>
    <br />
    <Link
      href={{
        pathname: '/with-params',
        query: {
          something: 1,
          another: 'value',
        },
      }}
      as="/params/1?another=value"
    >
      <a id="to-params-manual">to params (manual)</a>
    </Link>
    <br />
    <Link href="/params/1?another=value">
      <a id="to-params">to params</a>
    </Link>
    <br />
  </>
)
