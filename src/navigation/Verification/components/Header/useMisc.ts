import {StyleSheet} from 'react-native';
import {scale} from '../../utils/sizing';
import {useContext} from 'react';
import ColorsContext from '../../navigation/Verification/context/colors';

const useMisc = () => {
  const colors = useContext(ColorsContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingVertical: scale(12),
      paddingHorizontal: scale(24),
    },
    title: {
      fontSize: scale(17),
      color: colors.text,
      fontWeight: '600',
      marginInline: 'auto',
    },
  });

  return {styles};
};

export default useMisc;
