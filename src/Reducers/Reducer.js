import { combineReducers } from "redux";
const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAME='BUY_ICECREAME'
const BUY_CHOCOLATES='BUY_CHOCOLATES'
const initial_state={
    noOfCakes: 20 ,
    noOfIceCreame:30,
    noOfChocolates:10,
}

function buy_Cake(){
    return{
        type:BUY_CAKE
    }
}
function buy_IceCream(){
    return{
        type:BUY_ICECREAME
    }
}
function buy_Chocolates(){
    return{
        type:BUY_CHOCOLATES
    }
}

 const IcecreameReducer= (state=initial_state,action)=>{
    switch(action.type){
        case BUY_ICECREAME:return{
         ...state,
         noOfIceCreame:state.noOfIceCreame-1,
        }
        default:return state
    }
}
 const CakeReducer=(state=initial_state,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            noOfCakes:state.noOfCakes-1,
        }
        default:return state
    }

}
 const ChocolateReducer=(state=initial_state,action)=>{
    switch(action.type){
        case BUY_CHOCOLATES:return{ 
                ...state,
                noOfChocolates:state.noOfChocolates-1,
        }
        default:return state
    }
}
const rootReducer=combineReducers({
    cake:CakeReducer,
    icecreame:IcecreameReducer,
    chocolate:ChocolateReducer
})
export default rootReducer
export {buy_Cake,buy_IceCream,buy_Chocolates}