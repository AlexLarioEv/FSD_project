import { TFeaturesFlag } from '@/shared/types/featuresFlag';
import { getFeatureFlag } from './setGetFeatures';

type TPropsToggleFeatures<T> = {
    name: keyof TFeaturesFlag;
    on: () => T;
    off: () => T;
};

export function toggleFeatures<T>({
    name,
    off,
    on,
}: TPropsToggleFeatures<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
