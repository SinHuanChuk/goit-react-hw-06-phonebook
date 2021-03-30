import React from 'react'
import styles from './Item.module.css'
import removeIcon from '../Images/removeIcon.png'
import { connect } from 'react-redux'
import actions from '../redux/actions/actions'

const Item = ({name, phone, id, getDeleteElement}) => (
    <li key = {id} id = {id} className = {styles.listItem}>
        <p className = {styles.text}>{name}</p>
        <p className = {styles.text}>{phone}</p>
        <button className = {styles.button} onClick = {({target}) => {
            getDeleteElement(target.closest('li').id)
        }}>
            <img className = {styles.image} src = {removeIcon}/>
        </button>
    </li>
)

const mapDispatchToProps = {
    getDeleteElement: actions.getDeleteElementAction
}

export default connect(null, mapDispatchToProps)(Item)