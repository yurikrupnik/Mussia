import React from 'react';
import ProptTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Item = (props) => {
    const {
        id, onSelect, name, image, score
    } = props;
    return (
        <Grid
            item
            data-id={id}
            onClick={onSelect}
        >
            <div>{name}</div>
            <div>
                <img src={image.medium} alt={name} />
            </div>
            <div>score: {score}</div>
        </Grid>
    );
};

Item.propTypes = {
    id: ProptTypes.number.isRequired,
    name: ProptTypes.string.isRequired,
    image: ProptTypes.shape({}).isRequired,
    score: ProptTypes.number.isRequired,
    onSelect: ProptTypes.func.isRequired,
};

const ShowsList = ({ data = [], onSelect }) => (
    <Grid container spacing={24}>
        {data.map(({ score, show }) => {
            const { image, id, name } = show;
            if (!image) {
                return false;
            }

            return (
                <Item
                    key={id}
                    id={id}
                    onSelect={onSelect}
                    score={score}
                    image={image}
                    name={name}
                />
            );
        })}
    </Grid>
);

ShowsList.propTypes = {
    data: ProptTypes.arrayOf(ProptTypes.shape({})).isRequired,
    onSelect: ProptTypes.func.isRequired,
};

export default ShowsList;
