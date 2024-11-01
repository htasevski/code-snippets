import { Platform } from "react-native";

// FONT FAMILY
export const FONT_FAMILY = Platform.OS === "android" ? ("NunitoSans-Regular" || "Roboto") : ("NunitoSans-Regular" || "Helvetica");

// FONT WEIGHT
type fontWeight = "300" | "500" | "700" | "900" | "normal" | "bold" | undefined;
export const FONT_WEIGHT_LIGHT: fontWeight = "300";
export const FONT_WEIGHT_REGULAR: fontWeight = "500";
export const FONT_WEIGHT_BOLD: fontWeight = "700";

// FONT SIZE
export const FONT_SIZE_28 = 28;
export const FONT_SIZE_24 = 24;
export const FONT_SIZE_20 = 20;
export const FONT_SIZE_18 = 18;
export const FONT_SIZE_16 = 16;
export const FONT_SIZE_14 = 14;
export const FONT_SIZE_12 = 12;
export const FONT_SIZE_10 = 10;

// LINE HEIGHT
export const LINE_HEIGHT_28 = 30;
export const LINE_HEIGHT_24 = 26;
export const LINE_HEIGHT_20 = 22;
export const LINE_HEIGHT_18 = 20;
export const LINE_HEIGHT_16 = 18;
export const LINE_HEIGHT_14 = 16;
export const LINE_HEIGHT_12 = 14;
export const LINE_HEIGHT_10 = 12;

export default {
    FONT_FAMILY: FONT_FAMILY,
    FONT_WEIGHT_LIGHT: FONT_WEIGHT_LIGHT,
    FONT_WEIGHT_REGULAR: FONT_WEIGHT_REGULAR,
    FONT_WEIGHT_BOLD: FONT_WEIGHT_BOLD,
    FONT_SIZE_28: FONT_SIZE_28,
    FONT_SIZE_24: FONT_SIZE_24,
    FONT_SIZE_20: FONT_SIZE_20,
    FONT_SIZE_18: FONT_SIZE_18,
    FONT_SIZE_16: FONT_SIZE_16,
    FONT_SIZE_14: FONT_SIZE_14,
    FONT_SIZE_12: FONT_SIZE_12,
    FONT_SIZE_10: FONT_SIZE_10,
    LINE_HEIGHT_28: LINE_HEIGHT_28,
    LINE_HEIGHT_24: LINE_HEIGHT_24,
    LINE_HEIGHT_20: LINE_HEIGHT_20,
    LINE_HEIGHT_18: LINE_HEIGHT_18,
    LINE_HEIGHT_16: LINE_HEIGHT_16,
    LINE_HEIGHT_14: LINE_HEIGHT_14,
    LINE_HEIGHT_12: LINE_HEIGHT_12,
    LINE_HEIGHT_10: LINE_HEIGHT_10,
};
