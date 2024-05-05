import { format as formatNumber } from 'numerable'
import { fr } from 'numerable/locale'

export const formatMoney = (amount: number) =>
  formatNumber(amount, '0,0', { locale: fr })
