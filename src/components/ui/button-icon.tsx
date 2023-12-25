import { Button, ButtonProps } from './button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button aria-label={ariaLabel} title={title} {...otherProps}></Button>
        </TooltipTrigger>
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
