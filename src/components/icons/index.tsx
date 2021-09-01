import React from 'react'

interface Props {
  id: string;
  height?: string;
  bgColor?: string;
  width?: string;
  fill?: string;
  className?: string;
  onClick?: () => any;
}

const Icon = ({id, height, bgColor, width, fill, className, onClick}: Props) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick}>
      <use
        xlinkHref={`${process.env.PUBLIC_URL +
          "/svgs/icon-sprite.svg"}#${id}`}
        style={{
          fill: bgColor
        }}
        className={fill}
      />
    </svg>
  )
}


Icon.defaultProps = {
  bgColor: 'transparent'
}

export default Icon;