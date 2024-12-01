import {
    TProfile,
    TErrorList,
    EErrorValidateForm,
} from '../../types/ProfileSchema';

export const validateProfileData = (
    profileData?: Partial<TProfile>,
): TErrorList => {
    if (!profileData) {
        return [EErrorValidateForm.NOT_DATA];
    }

    const errorList: TErrorList = [];

    if (!profileData.first || !profileData.lastname) {
        errorList.push(EErrorValidateForm.FIRST_LAST_NAME_NOT_CORRECT);
    }

    if (!profileData.age || !Number.isInteger(profileData.age)) {
        errorList.push(EErrorValidateForm.AGE_NOT_CORRECT);
    }

    if (!profileData.country) {
        errorList.push(EErrorValidateForm.COUNTRY_NOT_CORRECT);
    }

    if (!profileData.currency) {
        errorList.push(EErrorValidateForm.CURRENCY_NOT_CORRECT);
    }

    return errorList;
};
