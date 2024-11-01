import { Platform } from 'react-native';
import { OperatingSystemEnum } from '../enums/OperatingSystemEnum';

export const isAndroid = (): boolean => {
    return Platform.OS == OperatingSystemEnum.android;
};

export const isIos = (): boolean => {
    return Platform.OS == OperatingSystemEnum.ios;
};
