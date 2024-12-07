import { buildSelector } from '@/shared/lib/store';
import { TJsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: TJsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user.auth?.jsonSettings ?? defaultJsonSettings,
);
