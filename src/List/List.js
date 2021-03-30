import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import animationListItem from '../Animation/AnimationListItem.module.css'
import styles from './List.module.css'
import Item from '../Item/Item'
import { connect } from 'react-redux';

const List = ({array, filterName}) => {
    const need = array.filter(el => el.name.toLowerCase().includes(filterName))

    return (
        <TransitionGroup component = {'ul'} className = {styles.list}>
            {array.length > 0 && need.map(el => (
                <CSSTransition 
                timeout = {250}
                key = {el.id}
                classNames = {animationListItem}>
                    <Item name = {el.name} phone = {el.phone} id = {el.id}/>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

const mapStateToProps = ({stateApp}) => ({
    array: stateApp.array,
    filterName: stateApp.filterName
})

export default connect(mapStateToProps)(List)
