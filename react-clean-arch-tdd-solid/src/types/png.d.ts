/* eslint-disable import/no-unused-modules */
declare module '*.png' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const src: string
  export default src
}

declare module '*.jpg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const src: string
  export default src
}

declare module '*.jpeg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: string
  export default src
}
