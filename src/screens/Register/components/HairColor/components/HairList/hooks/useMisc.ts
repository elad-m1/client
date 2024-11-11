import {StyleSheet} from 'react-native';

import {scale} from '@/utils/sizing';

const useMisc = () => {
  const styles = StyleSheet.create({
    columnsWrapper: {
      flexDirection: 'row',
      gap: scale(12),
      paddingHorizontal: scale(16),
      paddingBottom: scale(100),
    },
    column: {flex: 1, gap: scale(16)},
  });

  return {styles};
};

export default useMisc;
