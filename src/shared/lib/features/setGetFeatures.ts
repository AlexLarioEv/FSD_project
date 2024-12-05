import { TFeaturesFlag } from '@/shared/types/featuresFlag';

let featureFlags: TFeaturesFlag;

export const setFeatureFlag = (newFeatureFlag?: TFeaturesFlag) => {
    if (newFeatureFlag) {
        featureFlags = newFeatureFlag;
    }
};

export const getFeatureFlag = (flag: keyof TFeaturesFlag) => {
    return featureFlags?.[flag];
};
