import React from 'react';

class ReduxMovies extends React.PureComponent {
    render() {
        const {
            shows, toggleModal, setSearch, handleSelect
        } = this.props;
        // console.log('props.query', Shows.query);
        return (
            <div>
                shows
                {/*<Header title="Redux way" value={Shows.query} onChange={setSearch}/>*/}
                {/*<List data={Shows.data} onSelect={handleSelect} />*/}
                {/*<Dialog*/}
                {/*isOpen={Shows.modal}*/}
                {/*handleDialogClose={toggleModal}*/}
                {/*showInfo={Shows.selected}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default ReduxMovies;
