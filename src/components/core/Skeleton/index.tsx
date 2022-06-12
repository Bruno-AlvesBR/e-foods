import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { memo } from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <Stack spacing={0.5}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rectangular" width={200} height={120} />
    </Stack>
  );
};

export default memo(SkeletonCard);
