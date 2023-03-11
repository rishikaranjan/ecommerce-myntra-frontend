import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {Store} from '../../Store';




export const SellerRoute = ({children}) => {

    const {state} = useContext(Store);

    const {userInfo} = state;


    return (
        <div className='sellerRoute'>
            {
                userInfo && userInfo.isSeller ? children : <Navigate to ='/signin'/>
            }
        </div>
    )
}