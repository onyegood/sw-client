import React from 'react';

interface Props {
  id: string;
  height?: string;
  bgColor?: string;
  width?: string;
  fill?: string;
  className?: string;
  onClick?: () => Function;
}

const Icon = ({
	id,
	height,
	bgColor,
	width,
	fill,
	className,
	onClick
}: Props) => (
	<svg className={className}
		height={height}
		onClick={onClick}
		width={width}
	>
		<use
			className={fill}
			style={{
				fill: bgColor,
			}}
			xlinkHref={`${`/svgs/icon-sprite.svg`}#${id}`}
		/>
	</svg>
);

Icon.defaultProps = {
	bgColor: 'transparent',
};

export default Icon;
