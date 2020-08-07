import React from 'react';
import cx from 'classnames';
import { filters } from '../constants';

const VisibilityFilters = ({ activeFilter }) => {
    return (
        <div>
            {Object.keys(filters).map((key) => {
                return <span key={`visibility-filter-${key}`} className={cx("filter", key === activeFilter && "filter-active")} onClick={() => {}}>
                    {filters[key]}
                </span>;
            })}
        </div>
    );
}

export default VisibilityFilters;