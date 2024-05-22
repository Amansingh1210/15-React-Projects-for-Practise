import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(()=>{
        searchValue.current.focus()
    },[])

    const searchCoaktail = () =>{
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <section className='section search'>
            <form onSubmit={handleSubmit} className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name' >serach your favorite cocktail</label>
                    <input type='text' id='name' ref={searchValue} onChange={searchCoaktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm