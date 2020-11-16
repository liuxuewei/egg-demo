module.exports = options => {
    return async function permission(ctx, next) {
        await next();
        const params = ctx.query;
        const blackList = options.blackList || [];
        ctx.logger.info('blackList', blackList);
        if(blackList.includes(params.name)){
            ctx.body = {
                code: 403,
                success: false,
                message: '没有权限'
            };
            ctx.status = 403;
        }
    };
};