import { apodApi } from './AxiosService'
import { AppState } from '../AppState'

class ApodService {
  async getAll(query) {
    try {
      const res = await apodApi.get(query)
      AppState.apods = res.data
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

export const apodService = new ApodService()
