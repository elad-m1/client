import {FC} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';

import {BasicInfo, HairColor} from './components';
import {useMisc, useNav} from './hooks';
import {Formik} from 'formik';

const RegisterSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  gender: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
  hairColor: Yup.string(),
});

const Register: FC = () => {
  const {styles} = useMisc();
  const {scrollViewRef, goNext, goPrevious, onScrollEnd} = useNav();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: new Date().toDateString(),
          hairColor: '',
        }}
        validationSchema={RegisterSchema}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={goNext}>
        {formikProps => (
          <ScrollView
            ref={scrollViewRef}
            style={{flex: 1}}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            onScrollEndDrag={onScrollEnd}
            scrollEnabled={false}
            pagingEnabled
            horizontal>
            <BasicInfo {...formikProps} />
            {/* <HairColor
              goPrevious={goPrevious}
              goNext={goNext}
              {...formikProps}
            /> */}
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default Register;
