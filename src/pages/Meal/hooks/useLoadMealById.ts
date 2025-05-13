import React, { type Dispatch } from 'react';
import { retryFetch } from '../../../shared/utills/retryFetch';
import { apiMeals } from '../../../entitys/meals/api/meals';
import type { TFetchStatus } from '../../../shared/types/TFetchStatus';
import type { TMeal } from '../../../entitys/meals/model/types/TFullMeal';

interface IUseLoadMealById{
    setLoadMealStatus : Dispatch<TFetchStatus>,
    setMeal : Dispatch<TMeal>
}
const useLoadMealById = ({setMeal, setLoadMealStatus}:IUseLoadMealById) => {
    const loadMealById = (id:number) => {
        retryFetch<TMeal>(() => apiMeals.getMealById(id), 3, 300).then((meal) => {
            setMeal(meal);
            setLoadMealStatus("fullfiled")
        }).catch((err) => {
            console.warn(err);
            setLoadMealStatus("rejected");
        } )
    }
    return {loadMealById};
};

export default useLoadMealById;