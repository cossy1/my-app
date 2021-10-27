export const createActionType = (type: string, entity: string) => ({
    START: `@@[${entity}] ${type}`,
    SUCCESS: `@@[${entity}] ${type}_SUCCESS`,
    ERROR: `@@[${entity}] ${type}_ERROR`,
    END: `@@[${entity}] ${type}_END`
});
