export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const t = await useTranslation(event)
    return {
        'status': 'Success',
        'message': t('server.' + query.name)
    }
})