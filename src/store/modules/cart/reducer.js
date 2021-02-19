import produce from 'immer';

export default function cart(state = [], action){

    switch (action.type){
        case 'ADD_TO_CART':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.product.id);

                if(productIndex >= 0){
                    /*se o produto ja existir em alguma posição do array,
                    não ira adicionar um produto novo e 
                    sim adicionar +1 no amount do produto */
                    draft[productIndex].amount += 1;
                } else{   
                //adicionar produto vindo da action, ao state
                draft.push({
                    ...action.product,
                    amount: 1,
                });
            }
            });
        case 'REMOVE_TO_CART':
            return produce(state, draft =>{
                const productIndex = draft.findIndex(p => p.id === action.id);

                if(productIndex >= 0){
                    draft.splice(productIndex, 1);
                }
            });
        case 'ADD_AMOUNT':
            return produce(state, draft =>{

                const productIndex = draft.findIndex(p => p.id === action.product.id);
                draft[productIndex].amount += 1;

        });
        case 'REMOVE_AMOUNT':
            return produce(state, draft =>{

                const productIndex = draft.findIndex(p => p.id === action.product.id);
                const log = draft[productIndex].amount;

                if(log <= 1){
                    draft[productIndex].amount = 1;
                }
                else{
                    draft[productIndex].amount -= 1;
                }
                
            });         
        default:
            return state;
    }
}