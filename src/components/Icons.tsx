import {
  X,
  ChevronDown,
  type LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  close: X,
  chevronDown: ChevronDown,
  menu: (props: LucideProps) => (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  ),
  flagCo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" {...props}>
      <path fill="#CE1126" d="M0 0h6v4H0z" />
      <path fill="#003893" d="M0 0h6v3H0z" />
      <path fill="#FCD116" d="M0 0h6v2H0z" />
    </svg>
  ),
  flagUs: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 7410 3900"
      {...props}
    >
      <path fill="#b22234" d="M0 0h7410v3900H0z" />
      <path
        stroke="#fff"
        strokeWidth={300}
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
      />
      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
      <g fill="#fff">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path
                  id="a"
                  d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                />
                <use xlinkHref="#a" y={420} />
                <use xlinkHref="#a" y={840} />
                <use xlinkHref="#a" y={1260} />
              </g>
              <use xlinkHref="#a" y={1680} />
            </g>
            <use xlinkHref="#b" x={247} y={210} />
          </g>
          <use xlinkHref="#c" x={494} />
        </g>
        <use xlinkHref="#d" x={988} />
        <use xlinkHref="#c" x={1976} />
        <use xlinkHref="#e" x={2470} />
      </g>
    </svg>
  ),
}