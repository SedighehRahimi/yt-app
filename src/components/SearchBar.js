import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
    onTextChange= e=>{
        this.setState({term:e.target.value});
    };
    onFormSubmit=e=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    render()
    {
        return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Search Videos Here:</label>
                    <input type="text" onChange={this.onTextChange} value={this.state.term}  />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;