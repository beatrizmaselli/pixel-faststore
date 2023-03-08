export async function cookie(ctx: Context, next: () => Promise<any>) {
  const { domain } = await ctx.clients.apps.getAppSettings(
    'vtex.faststore-pixel'
  )

  const sessionToken =
    ctx.cookies.get('vtex_session') ||
    ctx.cookies.request.headers['x-vtex-session']?.toString()

  if (!sessionToken) {
    ctx.response.status = 500

    return
  }

  ctx.cookies.set(`vtex_session`, sessionToken, {
    domain,
  })
  ctx.response.status = 200

  await next()
}
