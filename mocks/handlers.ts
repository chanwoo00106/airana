import { rest } from 'msw'
import ServerUrl from 'lib/ServerUrl'

export const handlers = [
  rest.get(`${ServerUrl}/hello`, (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true
      })
    )
  })
]
