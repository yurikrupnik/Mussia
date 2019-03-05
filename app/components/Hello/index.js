import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './header';
import List from './list';
import Dialog from './dialog';
import { mapToProps as showsMapToProps, dispatchActions as showsActions } from '../../api/movies/selectors';

class ReduxMovies extends React.PureComponent {
    render() {
        const {
            shows, toggleModal, setSearch, handleSelect
        } = this.props;
        console.log('props.query', shows.query);
        return (
            <div>
                <Header title="Redux way" value={shows.query} onChange={setSearch}/>
                <List data={shows.data} onSelect={handleSelect} />
                <Dialog
                    isOpen={shows.modal}
                    handleDialogClose={toggleModal}
                    showInfo={shows.selected}
                />
            </div>
        );
    }
}

const ReduxMoviess = (props) => {
    const {
        shows, toggleModal, setSearch, handleSelect
    } = props;
    console.log('props.query', shows.query);
    return (
        <div>
            <Header title="Redux way" value={shows.query} onChange={setSearch}/>
            <List data={shows.data} onSelect={handleSelect} />
            <Dialog
                isOpen={shows.modal}
                handleDialogClose={toggleModal}
                showInfo={shows.selected}
            />
        </div>
    );
};

ReduxMovies.propTypes = {
    shows: PropTypes.shape({
        query: PropTypes.string.isRequired,
        modal: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
    toggleModal: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default connect(showsMapToProps, showsActions)(ReduxMovies);
