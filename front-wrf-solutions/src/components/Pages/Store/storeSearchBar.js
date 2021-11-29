import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <input className={`${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
    )
}

{/* <i class="fas fa-search"></i> */}

class SearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='shop-search-bar' className='shop-search-bar__form-search-bar' placeholder='search' component={FormSearchBar} />
            </form>
        )
    }    
}

SearchBar = reduxForm({
    form: 'ShopSearchBar'
})(SearchBar);

export default SearchBar; 