import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    

    const [categories, setCategories] = useState( [
        'Dragon Ball',
    ]);

    /*const handleAdd = () => {
        //setCategories( [...categories, 'Tate no Yuusha No Narigari'] );
        setCategories( cat=>  [...cat, 'Tate no Yuusha No Narigari'] );
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                     ) )
                }
            </ol>
        </>
    )
}

