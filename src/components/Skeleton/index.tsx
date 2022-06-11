import { Stack, Skeleton } from '@mui/material';

export const SkeletonCard = () => {
  return (
    <Stack spacing={0.5}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rectangular" width={200} height={120} />
    </Stack>
  );
};
