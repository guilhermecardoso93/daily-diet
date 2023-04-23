import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLLECTION } from '../storageConfig'
import { ProductItemDTO } from '../../dtos/ProductItemDTO'

export async function storageMealsGetAll() {
  const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

  const meals: ProductItemDTO[] = storage ? JSON.parse(storage) : []

  return meals
}

export async function storageMealsHistorySave(meals: ProductItemDTO[]) {
  await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals))
}
