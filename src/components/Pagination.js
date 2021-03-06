import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

export default class Pagination extends Component {

    constructor(props) {
        super(props)
        this.renderPagerList = this.renderPagerList.bind(this);
    }

    renderPagerList() {
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.totalItemsCount / this.props.itemsCountPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.map((number) => {
            return (
                <li key={number} className={this.props.activePage === number ? "active" : " "}>
                    <a
                        id={number}
                        onClick={this.props.pagerClick}>
                        {number}
                    </a>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className={'pagination ' + styles.pagingList}>
                {this.renderPagerList()}
            </ul>
        )
    }
}

Pagination.propTypes = {
    totalItemsCount: PropTypes.number.isRequired,
    itemsCountPerPage: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    pagerClick: PropTypes.func.isRequired
}