import React from 'react';
import cx from 'classnames';

const VisibilityFilters = ({ activeFilter }) => {
    const filters = {
        "all": "All"
        , "completed": "Completed"
        , "incomplete": "Incomplete"
    };

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