export const initialState={cart:[]};
export const CartReducer=(state=initialState,action)=>{
    switch(action.type){
       case "ADD_TO_CART":
              const pToAdd=action.payload;
              const exist=state.cart.find((p,pos)=>p.id===pToAdd.id);
              if(exist){
                //map pour transformer => modifier un element de notre tableau
                const newCart=state.cart.map((p,pos)=>(p.id===pToAdd.id)?{...p,qte:p.qte+1}:p); 
                return {...state,cart:newCart};
                //return {...state,cart:state.cart.map((p,pos)=>(p.id===pToAdd.id)?{...p,qte:p.qte+1}:p)};
                  
              }else{
                return {...state,cart:[...state.cart,{...pToAdd,id:Date.now(),qte:1}]};
              };
        case "REMOVE_FROM_CART":
            const idToRemove=action.payload;
            const filtredCart=state.cart.filter((item,pos)=>item.id!==idToRemove);
            return {...state,cart:filtredCart};
        case "CLEAR_CART":
            return {...state,cart:[]};
        case "INCREMENT_QTE":
            const idToInc=action.payload;
            const newC=state.cart.map((item,pos)=>item.id===idToInc?{...item,qte:item.qte+1}:item);
            return {...state,cart:newC};
          
            //return {...state,cart:state.cart.map((item,pos)=>item.id===idToInc?{...item,qte:item.qte+1}:item)};

        case "DECREMENT_QTE":
            const idToDec=action.payload;
            let newD=state.cart.map((item,pos)=>item.id===idToDec?{...item,qte:item.qte-1}:item);
            newD=newD.filter(p=>p.qte>0);
            return {...state,cart:newD};
          // return {...state,cart:state.cart.map((item,pos)=>item.id===idToDec?{...item,qte:item.qte-1}:item).filter(p=>p.qte>0)};
        default:
            return state;


    }








}