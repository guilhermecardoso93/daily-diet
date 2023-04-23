import { useCallback, useState } from "react"
import { Body, ButtonsField, ColorCircle, Container, InDietField, SubTitle, Text, TextInDietField, Title } from "./styles"
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native"
import moment from "moment"
import React from "react"
import { Header } from "react-native/Libraries/NewAppScreen"
import { ProductItemDTO } from "../../dtos/ProductItemDTO"
import { useMealHistory } from "../../hooks/useMealHistory"
import { Alert } from "../../components/Alert"
import { Button } from "../../components/Button"

type RouteParams = {
  mealId: string
}

type MealSelectedDetailsType = {}

export function Details() {
  const route = useRoute()

  const { mealId } = route.params as RouteParams

  const navigation = useNavigation()

  const { fetchGetDetailMeallById, removeItem } = useMealHistory()

  const [mealSelectedDetails, setMealSelectedDetails] =
    useState<ProductItemDTO>()

  useFocusEffect(
    useCallback(() => {
      setMealSelectedDetails(fetchGetDetailMeallById(mealId))
    }, []),
  )

  function handleGoToCreateAndEditionMeals(id: string) {
    navigation.navigate('newMeal', {
      mealId: id,
    })
  }

  function handleGoHome() {
    navigation.navigate('home')
  }

  const [openAlert, setOpenAlert] = useState(false)

  async function handleRemoveItem(id: string) {
    setOpenAlert(false)
    await removeItem(id)
    handleGoHome()
  }

  return (
    <Container>
      {openAlert && (
        <Alert
          buttonOk={() => handleRemoveItem(mealSelectedDetails!.id)}
          buttonCancel={() => setOpenAlert(false)}
          title="Do you really want to delete all the meal history?"
        />
      )}
      <Header title={`Meal`} detail={mealSelectedDetails?.inDiet} />
      <Body>
        <Title>{mealSelectedDetails?.name}</Title>
        <Text>{mealSelectedDetails?.description}</Text>

        <SubTitle>Date and Time</SubTitle>
        <Text>
          {moment(mealSelectedDetails?.data).format(`DD/MM/yyyy hh:mm a`)}
        </Text>

        <InDietField>
          <ColorCircle inDiet={!!mealSelectedDetails?.inDiet}></ColorCircle>
          <TextInDietField>
            {mealSelectedDetails?.inDiet
              ? 'Following the diet!'
              : 'A litle mistake!'}
          </TextInDietField>
        </InDietField>

        <ButtonsField>
          <Button
            color={mealSelectedDetails?.inDiet === false ? 'red' : 'teal'}
            onPress={() =>
              handleGoToCreateAndEditionMeals(mealSelectedDetails!.id)
            }
            title="Edit Meal"
          />
          <Button
            color={'off'}
            onPress={() => setOpenAlert(true)}
            title="Delete Meal"
          />
        </ButtonsField>
      </Body>
    </Container>
  )
}