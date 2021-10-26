export const CHANGE_IS_AUTHED = 'LOGIN::CHANGE_IS_AUTHED';

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed: isAuthed
    }
})