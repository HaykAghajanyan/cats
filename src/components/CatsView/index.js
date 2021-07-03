import React, {useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {clearCats, setCats, setPage} from "../../redux/ducks/catReducerDuck";
import {request} from "../../helpers";

const CatsView = () => {
    const dispatch = useDispatch()
    const {cats, currentCategory, limit, page} = useSelector(({catReducer}) => catReducer)

    useEffect(() => {
        clearCatsData()
    }, [currentCategory])

    useEffect(() => {
         request(`images/search?limit=${limit}&page=${page}&category_ids=${currentCategory}`,dispatch, setCats)
    },[page, currentCategory])

    const clearCatsData = () => {
        dispatch(clearCats())
    }

    const loadMore = () => {
        dispatch(setPage(page + 1))
    }

    return (
        <div>
            <div className='cats'>
                {
                    cats && cats.map(cat => <img className='cat-item' src={cat.url} alt="cat"/>)
                }
            </div>

            <button onClick={loadMore}>Show more</button>
        </div>
    )
}

export default connect()(CatsView)