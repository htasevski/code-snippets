import { StyleSheet, TextStyle } from 'react-native';
import colors from '../colors';
import typography from '../typography';

interface Style {
    H1?: TextStyle;
    H2?: TextStyle;
    H3?: TextStyle;
    H4?: TextStyle;
    SUBHEADING?: TextStyle;
    LABEL?: TextStyle;
    STATUS?: TextStyle;
    TITLE?: TextStyle;
    SUBTITLE?: TextStyle;
    DATE?: TextStyle;
}

const TEXT_STYLE: Style = StyleSheet.create<Style>({
    H1: {
        color: colors.primary,
        fontSize: typography.FONT_SIZE_24,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        lineHeight: typography.LINE_HEIGHT_24,
    },
    H2: {
        color: colors.primary,
        fontSize: typography.FONT_SIZE_20,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        lineHeight: typography.LINE_HEIGHT_20,
    },
    H3: {
        color: colors.primary,
        fontSize: typography.FONT_SIZE_16,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        lineHeight: typography.LINE_HEIGHT_16,
    },
    H4: {
        color: colors.primary,
        fontSize: typography.FONT_SIZE_14,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        lineHeight: typography.LINE_HEIGHT_14,
    },
    SUBHEADING: {
        color: colors.secondary,
        fontSize: typography.FONT_SIZE_16,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        lineHeight: typography.LINE_HEIGHT_20,
    },
    LABEL: {
        color: colors.medium,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        fontSize: typography.FONT_SIZE_10,
        lineHeight: typography.FONT_SIZE_10,
    },
    STATUS: {
        fontWeight: typography.FONT_WEIGHT_BOLD,
        fontSize: typography.FONT_SIZE_12,
        lineHeight: typography.LINE_HEIGHT_12,
        textTransform: 'uppercase',
    },
    TITLE: {
        color: colors.secondary,
        fontSize: typography.FONT_SIZE_28,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        lineHeight: typography.LINE_HEIGHT_28,
    },
    SUBTITLE: {
        color: colors.primary,
        fontSize: typography.FONT_SIZE_18,
        fontFamily: typography.FONT_FAMILY,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        lineHeight: typography.LINE_HEIGHT_18,
    },
    DATE: {
        fontSize: typography.FONT_SIZE_12,
        lineHeight: typography.LINE_HEIGHT_12,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.dark,
    },
});

export default TEXT_STYLE;
