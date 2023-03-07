/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

const baseURL = ({ workspace, account }: IOContext) => {
  return `http://${workspace}--${account}.vtexcommercestable.com.br`
}

export class IOInternalcookie extends ExternalClient {
  constructor(ctx: IOContext, opts?: InstanceOptions) {
    super(baseURL(ctx), ctx, opts)
  }
}
