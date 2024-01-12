import { Button, ButtonProps } from './button'

export interface IIconButtonProps extends ButtonProps {
  title: string
  ariaLabel: string
}

export const IconButton: React.FC<IIconButtonProps> = ({
  ariaLabel,
  title,
  ...otherProps
}) => {
  return (
    <Button
      aria-label={ariaLabel}
      title={title}
      variant={'ghost'}
      {...otherProps}
    ></Button>
  )
}
