import { Slider, Typography, Box, Button } from '@mui/material';

interface Props {
  matrix: number[][];
  onChange: (row: number, col: number, value: number) => void;
  onReset: () => void;
}

export default function MatrixSliders({ matrix, onChange, onReset }: Props) {
  return (
    <Box sx={{ width: 400, padding: 3, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        激素调制矩阵 (3×3)
      </Typography>
      {matrix.map((row, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          <Typography>行 {i + 1}</Typography>
          {row.map((val, j) => (
            <Box key={j} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography sx={{ width: 40 }}>
                M[{i},{j}]
              </Typography>
              <Slider
                value={val}
                min={-2}
                max={2}
                step={0.1}
                onChange={(_, newVal) => onChange(i, j, newVal as number)}
                valueLabelDisplay="auto"
                sx={{ mx: 2 }}
              />
              <Typography sx={{ width: 50 }}>{val.toFixed(1)}</Typography>
            </Box>
          ))}
        </Box>
      ))}
      <Button variant="outlined" color="secondary" onClick={onReset}>
        重置为单位矩阵
      </Button>
    </Box>
  );
}
