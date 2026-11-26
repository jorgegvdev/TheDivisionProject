import { Typography, Box, IconButton } from '@mui/material'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

import chestIcon from '../assets/icons/Pecho.svg'
import maskIcon from '../assets/icons/Mascara.svg'
import kneePadsIcon from '../assets/icons/Rodilleras.svg'
import backpackIcon from '../assets/icons/Mochila.svg'
import glovesIcon from '../assets/icons/Guantes.svg'
import holsterIcon from '../assets/icons/Pistolera.svg'

type EquipmentItemProps = {
  name: string
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

const iconMap: Record<string, string> = {
  chest: chestIcon,
  mask: maskIcon,
  kneePads: kneePadsIcon,
  backpack: backpackIcon,
  gloves: glovesIcon,
  holster: holsterIcon,
}

const friendlyNames: Record<string, string> = {
  chest: 'Pecho',
  mask: 'Máscara',
  kneePads: 'Rodilleras',
  backpack: 'Mochila',
  gloves: 'Guantes',
  holster: 'Pistolera',
}

export default function EquipmentItem({
  name,
  count,
  onIncrement,
  onDecrement,
}: EquipmentItemProps) {
  const active = count > 0
  const label = friendlyNames[name]

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 1,
        py: 0.5,
        pl: 1.5,
        pr: 0.5,
        borderRadius: 1,
        border: 1,
        borderColor: active ? 'primary.main' : 'divider',
        bgcolor: active ? 'primary.main' : 'transparent',
        color: active ? 'primary.contrastText' : 'text.primary',
        transition: theme.transitions.create(['background-color', 'border-color', 'color'], {
          duration: 200,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }),
      })}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
        <Box
          component="span"
          aria-hidden
          className="item-icon"
          sx={{ color: active ? 'primary.contrastText' : 'primary.main' }}
          style={{ maskImage: `url("${iconMap[name]}")`, WebkitMaskImage: `url("${iconMap[name]}")` }}
        />
        <Typography sx={{ fontWeight: 500, fontSize: '1.05rem', ml: 1.5 }}>{label}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          aria-label={`Quitar ${label}`}
          onClick={onDecrement}
          disabled={!active}
          sx={{ color: 'inherit' }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          aria-live="polite"
          className="counter"
          sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, fontSize: '1.5rem' }}
        >
          {count}
        </Typography>
        <IconButton
          aria-label={`Agregar ${label}`}
          onClick={onIncrement}
          sx={{ color: active ? 'inherit' : 'primary.main' }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
