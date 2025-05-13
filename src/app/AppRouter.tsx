import { Route, Routes} from "react-router-dom";
import AppLayout from "./AppLayout";
import NotFounded from "../pages/NotFounded/NotFounded";
import AllCategorys from "../pages/AllCategorys/ui/AllCategorys";
import MealsByCategory from "../pages/MealsByCategory/ui/MealsByCategory";
import Meal from "../pages/Meal/ui/Meal";
import About from "../pages/About/ui/About";

const AppRouter = () => {
    return (
        <Routes>
            <Route element = {<AppLayout />}>
                <Route path="/" element = {<AllCategorys />} />
                <Route path="*" element = {<NotFounded />} />
                <Route path="/meals/:category" element = {<MealsByCategory />} />
                <Route path="/meal/:id" element = {<Meal />}  />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;