import React from 'react';
import cx from 'classnames';
import { filters } from '../constants';

import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';

const VisibilityFilters = (props) => {
    const activeFilter = props.activeFilter;

    return (
        <div>
            {Object.keys(filters).map((key) => {
                return <span key={`visibility-filter-${key}`} className={cx("filter", key === activeFilter && "filter-active")} onClick={() => { props.setFilter(key) }}>
                    {filters[key]}
                </span>;
            })}
        </div>
    );
}

const mapSTateToProps = (state) => {
    return { activeFilter: state.visibilityFilter };
};

export default connect(mapSTateToProps, { setFilter })(VisibilityFilters);