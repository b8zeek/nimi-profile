import axios from 'axios'

import { POAPToken } from '@nimi/types'

export function fetchPOAPsWithENS(ensAddress: string): Promise<{ data: POAPToken[] }> {
  return axios.get(`https://api.poap.tech/actions/scan/${ensAddress}`)
}

export function fetchPOAPsWithTokens(tokens: string[]): Promise<POAPToken[]> {
  return Promise.all(tokens.map(token => axios.get(`https://api.poap.tech/token/${token}`).then(res => res.data)))
}
