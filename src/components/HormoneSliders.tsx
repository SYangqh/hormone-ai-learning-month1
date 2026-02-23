import { Slider, Typography, Box } from '@mui/material';

interface Props {
  hormones: { energy: number; curiosity: number; stress: number };
  onChange: (name: string, value: number) => void;
}

export default function HormoneSliders({ hormones, onChange }: Props) {
  return (
    <Box sx={{ width: 300, padding: 3 }}>
      {Object.entries(hormones).map(([name, value]) => (
        <div key={name}>
          <Typography gutterBottom>{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>
          <Slider
            value={value}
            min={0}
            max={1}
            step={0.01}
            onChange={(_, newValue) => onChange(name, newValue as number)}
            valueLabelDisplay="auto"
          />
        </div>
      ))}
    </Box>
  );
}