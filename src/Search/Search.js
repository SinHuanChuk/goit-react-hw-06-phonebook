import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions/actions'
import styles from './Search.module.css'

const Search = ({getFilterName}) => (
    <div className = {styles.container}>
        <div className = {styles.wrapper}>
            <p className = {styles.text}>find contact by name</p>
            <input className = {styles.input} onChange = {({target}) => getFilterName(target.value)} type ='text'placeholder = 'search contact' />
        </div>
    </div>
)

const mapDispatchToProps = {
    getFilterName: actions.getFilterNameAction
}

export default connect(null, mapDispatchToProps)(Search)