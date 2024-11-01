import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from "../../styles/components/setMultiFactorAuthentication";
import TEXT_STYLE from "../../styles/typography/textStyle";
import Button from '../../components/Button';
import { LocalizationContext } from '../../services/localization/localization';
import { IconsEnum } from '../../shared/enums/IconsEnum';
import { EmgIcon } from '../../shared/services/customIcons';
import { FONT_SIZE_28 } from "../../styles/typography/typography";
import { success } from '../../styles/colors';
import Screen from '../Screen';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { MfaOptionEnum } from '../../shared/enums/MfaOptionEnum';
import { LoginPayload } from "../../shared/interfaces/user/loginPayload";
import { SetMultiFactorAuthenticationProps } from "../../shared/interfaces/mfa/setMultiFactorAuthenticationProps";

const SetMultiFactorAuthentication: React.FC<SetMultiFactorAuthenticationProps> = ({
   setAuthAppMfa,
   setSmsMfa,
   setEmailMfa,
   onSubmit,
}) => {
    const {t} = useContext(LocalizationContext);
    const loginPayload: LoginPayload = useSelector((state: RootState) => state.auth.login.payload);

    return (
        <Screen hasHeader={true}>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={[TEXT_STYLE.SUBTITLE]}>{t('secureAccountMFA')}</Text>
                </View>

                <View style={styles.setMFAHolder}>
                    <View style={styles.setMFAButtonHolder}>
                        <Button
                            prefixIcon={IconsEnum['viewGridOutline']}
                            title={t('authenticatorApp')}
                            textStyle={styles.buttonTextStyle}
                            color="white"
                            onPress={() => setAuthAppMfa()}
                            disabled={loginPayload?.mfaOptionsSet?.includes(MfaOptionEnum.Authenticator)}
                            style={styles.button}
                        />
                    </View>

                    {loginPayload.mfaOptionsSet.includes(MfaOptionEnum.Authenticator) && (
                        <EmgIcon name={IconsEnum['check-circle']} color={success} size={FONT_SIZE_28}/>
                    )}
                </View>

                <View style={styles.setMFAHolder}>
                    <View style={styles.setMFAButtonHolder}>
                        <Button
                            prefixIcon={IconsEnum['messageTextOutline']}
                            title={t('smsAuthentication')}
                            textStyle={styles.buttonTextStyle}
                            color="white"
                            onPress={() => setSmsMfa()}
                            disabled={loginPayload?.mfaOptionsSet?.includes(MfaOptionEnum.Sms)}
                            style={styles.button}
                        />
                    </View>

                    {loginPayload.mfaOptionsSet.includes(MfaOptionEnum.Sms) && (
                        <EmgIcon name={IconsEnum['check-circle']} color={success} size={FONT_SIZE_28}/>
                    )}
                </View>

                <View style={styles.setMFAHolder}>
                    <View style={styles.setMFAButtonHolder}>
                        <Button
                            prefixIcon={IconsEnum['emailOutline']}
                            title={t('emailAuthentication')}
                            textStyle={styles.buttonTextStyle}
                            color="white"
                            onPress={() => setEmailMfa()}
                            disabled={loginPayload?.mfaOptionsSet?.includes(MfaOptionEnum.Email)}
                            style={styles.button}
                        />
                    </View>

                    {loginPayload.mfaOptionsSet.includes(MfaOptionEnum.Email) && (
                        <EmgIcon name={IconsEnum['check-circle']} color={success} size={FONT_SIZE_28}/>
                    )}
                </View>
            </ScrollView>

            <Button
                title={t('next')}
                color="secondary"
                style={styles.submitButton}
                disabled={!loginPayload?.hasValidMfa || !loginPayload?.mfaOptionsSet?.length}
                onPress={() => onSubmit()}
            />
        </Screen>
    );
};

export default SetMultiFactorAuthentication;
