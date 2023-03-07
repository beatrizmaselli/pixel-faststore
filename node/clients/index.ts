import { IOClients } from '@vtex/api'

import { IOInternalcookie } from './cookie'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get cookie() {
    return this.getOrSet('cookie', IOInternalcookie)
  }
}
