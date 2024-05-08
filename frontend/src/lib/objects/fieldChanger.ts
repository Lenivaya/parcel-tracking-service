import { Option } from '@/lib/types'

export const fieldChanger = <T extends object, TField>(
  object: Option<T>,
  field: keyof T,
  value: TField
) => (object ? { ...object, [field]: value } : null)
